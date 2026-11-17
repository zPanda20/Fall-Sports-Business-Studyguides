"""Turns the daily-quiz artwork into small WebP files for the site.

Usage:  python3 scripts/prepare-daily-art.py "<folder that holds 'Day Quiz' and the reward frames>"

- The badge, rank, flame, shield, ball and icon pictures come on a white background. The white outside the
  artwork is removed (white inside it, like highlights, is kept) and the edge is softened.
- The three quiz banners are kept as they are, only made smaller.
- The reward frames (head pats, snack, hammer) already have transparent backgrounds. Every frame of one
  character is scaled the same way, so swapping frames never makes the character jump.
Writes into public/daily and public/companions/<character>/rewards. Needs Pillow, numpy and scipy.
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi

SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else None
if not SRC or not (SRC / 'Day Quiz').is_dir():
    sys.exit("Give the folder that contains 'Day Quiz' as the first argument.")
DQ = SRC / 'Day Quiz'
ROOT = Path(__file__).resolve().parent.parent / 'public'

# file in Day Quiz -> (folder, name, size in pixels)
ART = {
    # badges
    'Glossy Emerald Whistle Achievement Badge.png': ('badges', 'first', 256),
    'Seven-Day Calendar Achievement Medal.png': ('badges', 'week', 256),
    'Glossy Emerald Three-Star Achievement Badge.png': ('badges', 'streak3', 256),
    'Iridescent Emerald Seven-Segment Badge.png': ('badges', 'streak7', 256),
    'Glossy Emerald Spirit Flame Medal.png': ('badges', 'streak14', 256),
    'Emerald Calendar Laurel Medal.png': ('badges', 'streak30', 256),
    'Glossy Goalkeeper Glove Shield Badge.png': ('badges', 'sweep', 256),
    'Glossy Five-Sport Ball Emblem.png': ('badges', 'everyCourse', 256),
    'Glossy Emerald Renewal Emblem.png': ('badges', 'comeback', 256),
    'Iridescent Emerald Target Medallion.png': ('badges', 'bookmarks', 256),
    'Glossy Emerald 15-Tile Medallion.png': ('badges', 'long', 256),
    # ranks
    'Glossy Emerald Shield Medallion.png': ('ranks', 'rookie', 256),
    'Iridescent Emerald Shield Medal.png': ('ranks', 'reserve', 256),
    'Glossy Emerald Shield Emblem - starter': ('ranks', 'starter', 256),
    'Glossy Emerald Shield Medallion - captain': ('ranks', 'captain', 256),
    'Emerald Winged Star Medal - all star': ('ranks', 'allstar', 256),
    'Regal Emerald Crown and Laurel Crest - hall of fame': ('ranks', 'hall', 256),
    # streak flames
    'Glossy Emerald Ember Medallion - ember': ('flames', 'ember', 192),
    'Glowing Flame Emerald Badge - small flame': ('flames', 'small', 192),
    'Glossy Emerald Flame Badge - big flame': ('flames', 'big', 192),
    'Iridescent Emerald Flame Badge - inferno': ('flames', 'inferno', 192),
    # streak shield
    'Glossy Emerald Glass Shield.png': ('items', 'shield', 192),
    'Cracked Emerald Glass Shield.png': ('items', 'shield-cracked', 192),
    # reward items
    'Glossy golden fish cracker icon - sereph snack': ('items', 'snack', 256),
    'Glossy Purple and Burgundy Toy Mallet.png': ('items', 'mallet', 256),
    'Glossy Magical Patting Hand Icon.png': ('items', 'hand', 256),
    # sports balls (finish effect)
    'Glossy Iridescent Football Icon.png': ('balls', 'football', 128),
    'Glossy Orange Basketball Icon.png': ('balls', 'basketball', 128),
    'Glossy Neon Tennis Ball Icon.png': ('balls', 'tennis', 128),
    'Glossy Iridescent Volleyball Icon.png': ('balls', 'volleyball', 128),
    'Glossy Emerald and Peach Rugby Ball.png': ('balls', 'rugby', 128),
}
BANNERS = {
    'Dreamy Pastel Cloud Candy Sky- sunset quiz banner': 'sunset',
    'Iridescent Cosmic Glass Waves - midnight quiz banner': 'midnight',
    'Opulent Golden Wave Celebration Background - golden quiz banner': 'gold',
}
FRAMES = {  # file in SRC -> (character, name)
    'Joyful Seraph Orca - head pats': ('seraph', 'pat'),
    'Glossy Seraph Orca - snack time frame 1': ('seraph', 'snack1'),
    'Glossy Seraph Orca - snack time frame 2': ('seraph', 'snack2'),
    'Glossy Seraph Orca - snack time frame 3': ('seraph', 'snack3'),
    'Blushing Neon Demon Panda - head pats': ('demon', 'pat'),
    'Demon Panda Flinch - Hammer frame 1': ('demon', 'hammer1'),
    'Demon Panda Flinch - Hammer frame 2': ('demon', 'hammer2'),
    'Demon Panda Flinch - Hammer frame 3': ('demon', 'hammer3'),
}
FRAME_H = 640


def cutout(path, tol=14):
    im = Image.open(path).convert('RGB')
    a = np.asarray(im).astype(np.int16)
    near = (255 - a.min(axis=2)) <= tol                      # close to pure white
    lab, _ = ndi.label(near)
    edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    outside = np.isin(lab, list(edge))                       # white that touches the border = background
    solid = ndi.binary_fill_holes(ndi.binary_erosion(~outside, iterations=1))
    alpha = Image.fromarray((solid * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.9))
    out = im.convert('RGBA')
    out.putalpha(alpha)
    return out.crop(out.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox())


def square(im, size):
    """Fit inside a size x size transparent square, centered."""
    im.thumbnail((size, size), Image.LANCZOS)
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    canvas.alpha_composite(im, ((size - im.width) // 2, (size - im.height) // 2))
    return canvas


def save(im, path, q=86):
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, 'WEBP', quality=q, method=6)


n = 0
for fname, (folder, name, size) in ART.items():
    save(square(cutout(DQ / fname), size), ROOT / 'daily' / folder / f'{name}.webp')
    n += 1
for fname, name in BANNERS.items():
    im = Image.open(DQ / fname).convert('RGB')
    im = im.resize((1200, round(im.height * 1200 / im.width)), Image.LANCZOS)
    save(im, ROOT / 'daily' / 'banners' / f'{name}.webp', 78)
    n += 1
for fname, (who, name) in FRAMES.items():
    im = Image.open(SRC / fname).convert('RGBA')
    w = round(1086 * FRAME_H / 1448)                          # same canvas for every frame
    im = im.resize((1086, 1448), Image.LANCZOS) if im.size != (1086, 1448) else im
    save(im.resize((w, FRAME_H), Image.LANCZOS), ROOT / 'companions' / who / 'rewards' / f'{name}.webp', 84)
    n += 1
print(f'Wrote {n} images.')
