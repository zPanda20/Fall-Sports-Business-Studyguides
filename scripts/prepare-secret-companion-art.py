"""Turns the original Hexie and Cosmic PNGs into small WebP files for the site.

Usage:  python3 scripts/prepare-secret-companion-art.py "<folder that holds the Hexie PNGs and the Astro folder>"

The folder is searched recursively, so it can be the "Hexipie" folder as it is.
- Full-body poses keep one shared crop per character, so a pose swap never makes them jump.
- Hexie's expression sheet (3 x 2 heads) is split into six head images.
- Cosmic's helmet stickers come on a sheet with a drawn-in checkerboard, which is removed here, then cut into six.
Writes into public/companions/hexie and public/companions/cosmic. Needs Pillow, numpy and scipy.
Run it again whenever you replace an original image.
"""
import sys
from collections import deque
from pathlib import Path

import numpy as np
from scipy import ndimage
from PIL import Image

SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else None
if not SRC or not SRC.is_dir():
    sys.exit('Give the folder with the original PNGs as the first argument.')

OUT = Path(__file__).resolve().parent.parent / 'public' / 'companions'
POSE_H = 640
HEAD_H = 256
SPECK = 400  # pixels; smaller loose bits on the sticker sheet are noise

# original file name (a unique part of it) -> pose name used by the site
HEXIE_POSES = {
    'Guilty Snow Witch': 'idle',
    'Frosty Glide': 'greeting',
    'Frostbound Spell Skate': 'spell',
    'Crystal Skating Leap': 'leap',
    'Icy Spin': 'spin',
    'Icy Victory Pose': 'victory',
    'Icy Witch Performance': 'performance',
    'Magical Ice Mishap': 'mishap',
    'Scheming Magpie Witch': 'perch',
}
# The Cosmic poses came with generated file names, so they are matched by the end of the name.
COSMIC_POSES = {
    'c76881f4b575c700cd62ac82': 'idle',
    '4aa881f5869714c549b922ba': 'greeting',
    '5d3481f59720266fa017fe7b': 'pointing',
    'ba6081f5be1241c59be92ec1': 'playing',
    '6e3481f5b2f570afc92135c9': 'celebrate',
    '279081f580e89b233c8235bf': 'dance',
    '17b081f5bc220adb6690e7ef': 'walk',
    '3ac081f5a81cfd7b2d187757': 'offer',
    '34f881f596439de38f350e0b': 'stumble',
    'b39081f5bd750b77089bb696': 'perch',
    'de8481f5a85460c34b908d0a': 'curl',
}
HEXIE_FACES = ['cackle', 'sly', 'delighted', 'innocent', 'flustered', 'smug']  # left to right, top row then bottom
COSMIC_FACES = ['sparkle', 'notes', 'alert', 'question', 'idea', 'sweat']


def alpha_box(im, floor=8):
    return im.getchannel('A').point(lambda v: 255 if v > floor else 0).getbbox()


def union(boxes):
    return (min(b[0] for b in boxes), min(b[1] for b in boxes), max(b[2] for b in boxes), max(b[3] for b in boxes))


def pad_box(box, size, pad):
    return (max(box[0] - pad, 0), max(box[1] - pad, 0), min(box[2] + pad, size[0]), min(box[3] + pad, size[1]))


def save(im, path, height):
    path.parent.mkdir(parents=True, exist_ok=True)
    w = round(im.width * height / im.height)
    im.resize((w, height), Image.LANCZOS).save(path, 'WEBP', quality=84, method=6, exact=True)
    print(f'  {path.relative_to(OUT)}  {w}x{height}  {path.stat().st_size // 1024} KB')
    return w


def find(part):
    for f in sorted(SRC.rglob('*')):
        if f.is_file() and part in f.name and f.suffix.lower() in ('.png', ''):
            return f
    return None


def poses(who, table):
    imgs, missing = {}, []
    for part, pose in table.items():
        f = find(part)
        if not f:
            missing.append(part)
            continue
        imgs[pose] = Image.open(f).convert('RGBA')
    if not imgs:
        return missing
    size = next(iter(imgs.values())).size
    crop = pad_box(union([alpha_box(i) for i in imgs.values()]), size, 12)
    print(f'{who}: shared crop {crop}')
    w = None
    for pose, im in imgs.items():
        w = save(im.crop(crop), OUT / who / 'poses' / f'{pose}.webp', POSE_H)
    print(f'{who}: pose size {w}x{POSE_H}')
    return missing


def heads_from_cells(who, cells, names):
    side = max(max(b[2] - b[0], b[3] - b[1]) for _, b in cells) + 16
    for name, (cell, b) in zip(names, cells):
        cx, cy = (b[0] + b[2]) // 2, (b[1] + b[3]) // 2
        canvas = Image.new('RGBA', (side, side), (0, 0, 0, 0))
        canvas.alpha_composite(cell, (side // 2 - cx, side // 2 - cy))
        save(canvas, OUT / who / 'expressions' / f'{name}.webp', HEAD_H)


def hexie_faces():
    f = find('Six Enchanted Expressions')
    if not f:
        return ['Six Enchanted Expressions']
    sheet = Image.open(f).convert('RGBA')
    cw, ch = sheet.width // 3, sheet.height // 2
    cells = []
    for n in range(6):
        x, y = (n % 3) * cw, (n // 3) * ch
        cell = sheet.crop((x, y, x + cw, y + ch))
        cells.append((cell, alpha_box(cell)))
    heads_from_cells('hexie', cells, HEXIE_FACES)
    return []


def remove_checkerboard(im):
    """Clears the drawn-in grey/white checkerboard that touches the image edge. Anything enclosed by a dark outline stays."""
    rgb = np.array(im.convert('RGB')).astype(int)
    h, w, _ = rgb.shape
    light = (rgb.min(axis=2) >= 190) & ((rgb.max(axis=2) - rgb.min(axis=2)) <= 14)
    seen = np.zeros((h, w), bool)
    queue = deque()
    for x in range(w):
        for y in (0, h - 1):
            if light[y, x] and not seen[y, x]:
                seen[y, x] = True
                queue.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if light[y, x] and not seen[y, x]:
                seen[y, x] = True
                queue.append((y, x))
    while queue:
        y, x = queue.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and light[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = True
                queue.append((ny, nx))
    # soften the fringe: pale, colourless pixels right next to the cleared area go too
    near = seen.copy()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (-1, -1), (1, -1), (-1, 1)):
        near |= np.roll(np.roll(seen, dy, axis=0), dx, axis=1)
    pale = (rgb.min(axis=2) >= 150) & ((rgb.max(axis=2) - rgb.min(axis=2)) <= 22)
    seen |= near & pale
    keep = ~seen
    # drop the tiny stray specks the sheet leaves behind (anything smaller than a few pixels across)
    labels, count = ndimage.label(keep)
    if count:
        sizes = ndimage.sum(keep, labels, range(1, count + 1))
        small = np.isin(labels, [i + 1 for i, n in enumerate(sizes) if n < SPECK])
        keep &= ~small
    out = np.dstack([rgb, np.where(keep, 255, 0)]).astype(np.uint8)
    return Image.fromarray(out, 'RGBA')


def trim_edge_bits(cell):
    """Removes small pieces that touch the cell edge: they are the cut-off corner of the neighbouring sticker."""
    a = np.array(cell)
    mask = a[:, :, 3] > 8
    labels, count = ndimage.label(mask)
    if count < 2:
        return cell
    sizes = ndimage.sum(mask, labels, range(1, count + 1))
    big = max(sizes)
    edge = set(np.unique(np.concatenate([labels[0], labels[-1], labels[:, 0], labels[:, -1]]))) - {0}
    drop = [i for i in edge if sizes[i - 1] < big * 0.3]
    if drop:
        a[np.isin(labels, drop), 3] = 0
    return Image.fromarray(a, 'RGBA')


def cosmic_faces():
    f = find('Sticker Sheet')
    if not f:
        return ['Astronaut Helmet Sticker Sheet']
    sheet = remove_checkerboard(Image.open(f))
    cw, ch = sheet.width // 3, sheet.height // 2
    cells = []
    for n in range(6):
        x, y = (n % 3) * cw, (n // 3) * ch
        cell = trim_edge_bits(sheet.crop((x, y, x + cw, y + ch)))
        cells.append((cell, alpha_box(cell)))
    heads_from_cells('cosmic', cells, COSMIC_FACES)
    return []


missing = []
missing += poses('hexie', HEXIE_POSES)
missing += poses('cosmic', COSMIC_POSES)
missing += hexie_faces()
missing += cosmic_faces()
if missing:
    print('\nNot found (skipped):', ', '.join(missing))
