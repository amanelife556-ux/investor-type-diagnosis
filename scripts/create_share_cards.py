from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PORTRAITS = ROOT / "assets" / "type-portraits-ai-working"
OUT = ROOT / "assets" / "share-cards-ai-working"

W, H = 1200, 675

TYPES = [
    ("SLPI", "配当の守護者", "毎年の配当が育つと、それだけで安心できる。", "高配当株 / 高配当ETF / 債券ファンド", "#315f75", "#b7862f"),
    ("SLPG", "複利の庭師", "今日も淡々と積み立てる。それがいちばん強い。", "全世界株式インデックス / S&P500インデックス / 積立投資", "#56764a", "#b7862f"),
    ("SLAI", "利回りの職人", "利回りだけじゃなく、払い続ける力まで見たい。", "高配当株 / 連続増配株 / REIT", "#293c58", "#b7862f"),
    ("SLAG", "良株の庭師", "良い会社なら、時間をかけて付き合いたい。", "優良株投資 / 成長株投資 / 長期個別株投資", "#4e7046", "#b7862f"),
    ("STPI", "守りの操縦士", "まず減らさない。動くのは守りを固めてから。", "債券ファンド / バランスファンド / 預金・待機資金", "#314b67", "#b7862f"),
    ("STPG", "規律の相場剣士", "上がりそう、よりもルール通りかを先に見る。", "インデックスETF / バランスファンド / 積立投資", "#263b57", "#b7862f"),
    ("STAI", "市場の観測者", "入る前に、まず理由と数字をじっくり見たい。", "高配当株 / REIT / 債券ファンド", "#365c5c", "#b7862f"),
    ("STAG", "機会の狩人", "チャンスは待つ。条件がそろった時だけ狙う。", "国内株 / セクターETF / 成長株投資", "#30585e", "#b7862f"),
    ("RLPI", "配分の航海士", "攻める資産も、配分でなら落ち着いて持てる。", "バランスファンド / 高配当ETF / インデックス投資", "#6c3d38", "#b7862f"),
    ("RLPG", "世界複利の旅人", "世界まるごとの成長に、長く乗っていたい。", "全世界株式インデックス / 米国株インデックス / 積立投資", "#3f6d66", "#b7862f"),
    ("RLAI", "利回りの錬金術師", "高い利回りほど、その理由まで確かめたい。", "高配当株 / REIT / 債券ファンド", "#5c4b3b", "#b7862f"),
    ("RLAG", "未来航路の探求者", "まだ早いと言われる場所に、少し先回りしたい。", "成長株投資 / テーマ投資 / 米国株", "#243c5f", "#b7862f"),
    ("RTPI", "資金回転の軽業師", "資金は寝かせすぎず、次の入金先へ回したい。", "高配当ETF / REIT / 短期債券ファンド", "#597149", "#b7862f"),
    ("RTPG", "波乗りの機工士", "流れが来ているなら、ルールを決めて乗りたい。", "インデックスETF / セクターETF / 米国株", "#2f5e68", "#b7862f"),
    ("RTAI", "材料読みの軍師", "ニュースの意味を読んで、動くタイミングを探す。", "国内株 / 米国株 / 高配当株", "#594136", "#b7862f"),
    ("RTAG", "成長波の切り込み役", "伸びる物語が見えたら、早めに乗ってみたい。", "成長株投資 / テーマ投資 / 米国株", "#6d2f31", "#c69a3f"),
]


def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size, index=index)


FONT_GOTHIC_BOLD = "/System/Library/Fonts/ヒラギノ角ゴシック W8.ttc"
FONT_GOTHIC_HEAVY = "/System/Library/Fonts/ヒラギノ角ゴシック W9.ttc"
FONT_MINCHO = "/System/Library/Fonts/ヒラギノ明朝 ProN.ttc"


def text_size(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int]:
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0], box[3] - box[1]


def fit_font(draw: ImageDraw.ImageDraw, text: str, font_path: str, max_width: int, start: int, min_size: int = 24) -> ImageFont.FreeTypeFont:
    for size in range(start, min_size - 1, -2):
        fnt = font(font_path, size)
        if text_size(draw, text, fnt)[0] <= max_width:
            return fnt
    return font(font_path, min_size)


def draw_centered(draw: ImageDraw.ImageDraw, xy: tuple[int, int, int, int], text: str, fnt: ImageFont.FreeTypeFont, fill: str) -> None:
    x1, y1, x2, y2 = xy
    tw, th = text_size(draw, text, fnt)
    draw.text((x1 + (x2 - x1 - tw) / 2, y1 + (y2 - y1 - th) / 2 - 2), text, font=fnt, fill=fill)


def draw_methods(draw: ImageDraw.ImageDraw, xy: tuple[int, int, int, int], text: str) -> None:
    x1, y1, x2, y2 = xy
    max_width = x2 - x1 - 20
    one_line = fit_font(draw, text, FONT_GOTHIC_HEAVY, max_width, 42, 31)
    if text_size(draw, text, one_line)[0] <= max_width and one_line.size >= 35:
        draw_centered(draw, xy, text, one_line, "#20150c")
        return

    parts = text.split(" / ")
    if len(parts) == 3:
        lines = [f"{parts[0]} / {parts[1]}", parts[2]]
    else:
        mid = max(1, len(parts) // 2)
        lines = [" / ".join(parts[:mid]), " / ".join(parts[mid:])]

    fnt = font(FONT_GOTHIC_HEAVY, 34)
    while any(text_size(draw, line, fnt)[0] > max_width for line in lines) and fnt.size > 25:
        fnt = font(FONT_GOTHIC_HEAVY, fnt.size - 1)
    line_heights = [text_size(draw, line, fnt)[1] for line in lines]
    total_h = sum(line_heights) + 12
    y = y1 + (y2 - y1 - total_h) / 2 - 2
    for line, lh in zip(lines, line_heights):
        tw, _ = text_size(draw, line, fnt)
        draw.text((x1 + (x2 - x1 - tw) / 2, y), line, font=fnt, fill="#20150c")
        y += lh + 12


def parchment_background(code: str, accent: str) -> Image.Image:
    img = Image.new("RGB", (W, H), "#ead7b1")
    px = img.load()
    seed = sum(ord(c) for c in code)
    for y in range(H):
        for x in range(W):
            wave = math.sin((x + seed) / 31) * 5 + math.cos((y + seed) / 23) * 4
            edge = max(0, int((abs(x - W / 2) / (W / 2) + abs(y - H / 2) / (H / 2)) * 10) - 8)
            base = 222 + int(wave) - edge
            r = max(178, min(244, base + 16))
            g = max(156, min(228, base - 2))
            b = max(118, min(196, base - 34))
            px[x, y] = (r, g, b)
    img = img.filter(ImageFilter.GaussianBlur(0.35))
    wash = Image.new("RGBA", (W, H), accent + "00")
    d = ImageDraw.Draw(wash)
    for i in range(7):
        d.ellipse((620 + i * 45, 20 + i * 12, 1190 + i * 22, 490 + i * 18), fill=accent + "18")
    return Image.alpha_composite(img.convert("RGBA"), wash).convert("RGB")


def paste_portrait(card: Image.Image, code: str) -> None:
    portrait = Image.open(PORTRAITS / f"{code}.png").convert("RGBA")
    # Keep each original character identity. The source already has parchment,
    # so blending the whole card preserves props and avoids same-face drift.
    crop = portrait.crop((170, 55, 1366, 1000))
    crop.thumbnail((575, 455), Image.Resampling.LANCZOS)
    x = 615 + (545 - crop.width) // 2
    y = 135 + (470 - crop.height) // 2

    shadow = Image.new("RGBA", crop.size, (0, 0, 0, 0))
    alpha = Image.new("L", crop.size, 210)
    shadow.putalpha(alpha.filter(ImageFilter.GaussianBlur(10)))
    card.alpha_composite(shadow, (x + 8, y + 12))
    card.alpha_composite(crop, (x, y))


def draw_card(code: str, title: str, line: str, methods: str, accent: str, gold: str) -> Image.Image:
    card = parchment_background(code, accent).convert("RGBA")
    d = ImageDraw.Draw(card)

    ink = "#182033"
    dark = "#172b36"
    cream = "#ecd9b6"

    # Border and subtle layout guides.
    for inset, width, color in [(18, 3, "#5a3b20"), (26, 1, "#9d7b44")]:
        d.rounded_rectangle((inset, inset, W - inset, H - inset), radius=18, outline=color, width=width)
    d.line((575, 82, 575, 610), fill="#8d744a66", width=2)

    paste_portrait(card, code)

    # Text panels.
    d.rounded_rectangle((46, 42, 520, 112), radius=18, fill="#eedcbbdd", outline="#704c26", width=2)
    d.rounded_rectangle((168, 125, 470, 178), radius=18, fill=accent, outline=gold, width=3)
    d.rounded_rectangle((44, 394, 578, 542), radius=12, fill=cream + "e8", outline="#806039", width=2)
    d.rounded_rectangle((168, 383, 470, 438), radius=16, fill=accent, outline=gold, width=3)

    top_font = font(FONT_GOTHIC_HEAVY, 38)
    badge_font = font(FONT_MINCHO, 44)
    title_font = fit_font(d, title, FONT_MINCHO, 555, 78, 52)
    line_font = fit_font(d, line, FONT_GOTHIC_BOLD, 550, 34, 27)
    label_font = font(FONT_GOTHIC_HEAVY, 31)
    hashtag_font = fit_font(d, "#投資家タイプ診断 #投資スタイル", FONT_GOTHIC_BOLD, 480, 31, 24)

    draw_centered(d, (46, 42, 520, 112), "投資家タイプ診断", top_font, ink)
    draw_centered(d, (168, 125, 470, 178), code, badge_font, "#f7e2a6")

    d.text((46, 202), title, font=title_font, fill=ink)
    d.line((48, 337, 566, 337), fill="#8a6835", width=2)
    d.text((54, 354), line, font=line_font, fill="#21160d")

    draw_centered(d, (168, 383, 470, 438), "好みやすい投資法", label_font, "#f5e5b3")
    draw_methods(d, (54, 436, 568, 536), methods)
    draw_centered(d, (80, 560, 540, 625), "#投資家タイプ診断 #投資スタイル", hashtag_font, "#16314a")

    # Decorative stars.
    for x, y, r in [(586, 337, 7), (70, 591, 5), (538, 591, 5), (600, 64, 4), (1110, 86, 8)]:
        d.line((x - r, y, x + r, y), fill=gold, width=2)
        d.line((x, y - r, x, y + r), fill=gold, width=2)

    return card.convert("RGB")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for code, title, line, methods, accent, gold in TYPES:
        card = draw_card(code, title, line, methods, accent, gold)
        card.save(OUT / f"{code}.png")

    thumbs = []
    for code, *_ in TYPES:
        im = Image.open(OUT / f"{code}.png").convert("RGB")
        im.thumbnail((300, 169), Image.Resampling.LANCZOS)
        thumbs.append((code, im.copy()))
    sheet = Image.new("RGB", (300 * 4, 205 * 4), "#ead7b1")
    sd = ImageDraw.Draw(sheet)
    labelf = font(FONT_GOTHIC_BOLD, 18)
    for i, (code, im) in enumerate(thumbs):
        x = (i % 4) * 300
        y = (i // 4) * 205
        sheet.paste(im, (x, y + 26))
        sd.rectangle((x, y + 26, x + 299, y + 194), outline="#9a2f24", width=2)
        sd.text((x + 8, y + 3), code, font=labelf, fill="#21160d")
    sheet.save(OUT / "_contact_sheet.png")


if __name__ == "__main__":
    main()
