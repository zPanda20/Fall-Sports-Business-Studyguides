"""Turns the original companion PNGs into small WebP files for the site.

Usage:  python3 scripts/prepare-companion-art.py "<folder with the original PNGs>"

- Full-body poses keep one shared crop per character, so a pose swap never makes him jump.
- The two expression sheets (3 x 2 heads each) are split into six head images.
- Everything keeps its transparent background.
Writes into public/companions/<character>/poses and /expressions.
Needs Pillow. Run it again whenever you replace an original image.
"""
import sys
from pathlib import Path
from PIL import Image

SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else None
if not SRC or not SRC.is_dir():
    sys.exit('Give the folder with the original PNGs as the first argument.')

OUT = Path(__file__).resolve().parent.parent / 'public' / 'companions'
POSE_H = 640  # full-body height in pixels (displayed much smaller; this keeps it sharp on phones)
HEAD_H = 256

# original file name (without .png) -> pose name used by the site
POSES = {
    'seraph': {
        'seraph-greeting': 'greeting',
        'seraph-pointing': 'pointing',
        'seraph-presenting': 'scholar',
        'seraph-reassurance': 'reassurance',
        'seraph-celebration': 'celebration',
        'seraph-flashcards': 'flashcards',
        'seraph-curious_perch': 'perch',
        'seraph-eureka': 'eureka',
        'seraph-bookmark': 'bookmark',
        'seraph-proud': 'proud',
        'seraph-idle': 'idle',
    },
    'demon': {
        'demon-smug_menace': 'greeting',
        'demon-acuusing_point': 'pointing',
        'demon-facepalm': 'facepalm',
        'demon-laugh': 'laughter',
        'demon-meltdown': 'meltdown',
        'demon-quiz_challenge': 'quiz',
        'demon-deadline': 'deadline',
        'demon-grudging_approval': 'respect',
        'demon-judgment_perch': 'perch',
        'demon-sus_scholar': 'scholar',
        'demon-idle': 'idle',
    },
}
# sheet file -> head names, left to right, top row then bottom row
SHEETS = {
    'seraph': ('seraph-small-friendly-delighted-thinking-confused-reassuring-shocked',
               ['friendly', 'delighted', 'thinking', 'confused', 'reassuring', 'shocked']),
    'demon': ('demon-small-smug-deadpan-suspicious-shocked-hysterical-furious',
              ['smug', 'deadpan', 'suspicious', 'shocked', 'hysterical', 'furious']),
}


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


missing = []
for who, table in POSES.items():
    imgs = {}
    for src_name, pose in table.items():
        f = SRC / f'{src_name}.png'
        if not f.exists():
            missing.append(f.name)
            continue
        imgs[pose] = Image.open(f).convert('RGBA')
    if not imgs:
        continue
    size = next(iter(imgs.values())).size
    crop = pad_box(union([alpha_box(i) for i in imgs.values()]), size, 12)
    print(f'{who}: shared crop {crop}')
    for pose, im in imgs.items():
        save(im.crop(crop), OUT / who / 'poses' / f'{pose}.webp', POSE_H)

for who, (name, heads) in SHEETS.items():
    f = SRC / f'{name}.png'
    if not f.exists():
        missing.append(f.name)
        continue
    sheet = Image.open(f).convert('RGBA')
    cw, ch = sheet.width // 3, sheet.height // 2
    cells = []
    for n, head in enumerate(heads):
        x, y = (n % 3) * cw, (n // 3) * ch
        cell = sheet.crop((x, y, x + cw, y + ch))
        cells.append((head, cell, alpha_box(cell)))
    # same square crop for all six so expressions line up when they cross-fade
    side = max(max(b[2] - b[0], b[3] - b[1]) for _, _, b in cells) + 16
    for head, cell, b in cells:
        cx, cy = (b[0] + b[2]) // 2, (b[1] + b[3]) // 2
        canvas = Image.new('RGBA', (side, side), (0, 0, 0, 0))
        canvas.alpha_composite(cell, (side // 2 - cx, side // 2 - cy))
        save(canvas, OUT / who / 'expressions' / f'{head}.webp', HEAD_H)

if missing:
    print('\nNot found (skipped):', ', '.join(missing))
