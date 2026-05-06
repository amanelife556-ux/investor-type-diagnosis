# Group C 指示: 高リスク・長期系 4枚

## 最重要

このGroupは `SHARE_CARD_PARALLEL_WORK_BRIEF.md` を正として制作してください。

品質劣化を避けるため、以下を必ず守ります。

- `SLPG-hybrid` / `RLAG` と同等の密度と完成度を目指す。
- 既存ポートレートを貼り込んだだけのカードにしない。
- 同じ顔の着せ替えにしない。
- 顔、髪型、表情、服、小物、ポーズをタイプごとに変える。
- 文字は小さくしすぎず、スマホ縮小でも読めるようにする。

## 担当ファイル

```text
assets/share-cards-ai-working/RLPI.png
assets/share-cards-ai-working/RLPG.png
assets/share-cards-ai-working/RLAI.png
assets/share-cards-ai-working/RLAG.png
```

## 共通ルール

- 詳細な画像作成ルールは `SHARE_CARD_PARALLEL_WORK_BRIEF.md` を正とする。
- 基準カード `assets/share-cards-ai-working/SLPG-hybrid.png` と `assets/share-cards-ai-working/RLAG.png` の品質、余白、文字サイズ感、背景密度を踏襲する。
- 1200 x 675 px / PNG / sRGB。
- `assets/share-cards/` は直接上書きしない。
- 参照キャラは `assets/type-portraits-ai-working/{TYPE_CODE}.png` を使う。
- 既存キャラを貼るだけではなく、カード全体として自然に描き直す。
- 顔、髪型、表情、服、小物、ポーズ、色をタイプごとに明確に変える。
- 同じ顔の着せ替えにしない。
- 文言は完全一致。余計な可読文字を追加しない。
- タイプ名は原則1行。変な位置で改行しない。
- 一言は2行以内。投資法はボックス内に収める。
- キャラは右側で大きく、顔と主要小物を切らない。

## 方向性

大きな視点、長期、世界、未来、利回りの読み解き。

色は紺、金、青緑、赤茶を中心に。冒険・航海・旅・探求の雰囲気。

RLAGは基準カードです。再制作する場合も、現行カードの良さを維持してください。

## 文言

| Code | Type name | Share line | Preferred methods |
|---|---|---|---|
| RLPI | 配分の航海士 | 攻める資産も、配分でなら落ち着いて持てる。 | バランスファンド / 高配当ETF / インデックス投資 |
| RLPG | 世界複利の旅人 | 世界まるごとの成長に、長く乗っていたい。 | 全世界株式インデックス / 米国株インデックス / 積立投資 |
| RLAI | 利回りの錬金術師 | 高い利回りほど、その理由まで確かめたい。 | 高配当株 / REIT / 債券ファンド |
| RLAG | 未来航路の探求者 | まだ早いと言われる場所に、少し先回りしたい。 | 成長株投資 / テーマ投資 / 米国株 |

## キャラ方針

- RLPI: コンパス、地図、羅針盤、円グラフ。配分で航海する。
- RLPG: 地球儀、旅装、星、長い道。世界の成長に乗る。
- RLAI: 巻物、天秤、金貨。利回りを読み解く錬金術師。
- RLAG: 星図、望遠鏡、星、未来地図。未来航路を探す探求者。

## プロンプト雛形

```text
Use the approved SLPG-hybrid/RLAG-quality social card style:
rich parchment adventure certificate, decorative ink border,
dense watercolor fantasy illustration, strong Japanese typography,
smartphone-readable.

Use assets/type-portraits-ai-working/{TYPE_CODE}.png as character identity reference:
preserve the character's face shape, hair, expression, outfit color, props, pose, and type-specific mood.
Do not make the face look like other types.

Create a finished Japanese X/social share card image.

Canvas: 1200 x 675 px, 16:9 landscape.
Composition: left side text with ornate parchment panels; right side integrated full illustration of the character, not pasted flat.

Exact Japanese text, no typos:
Top: 投資家タイプ診断
Badge: {TYPE_CODE}
Main title: {TYPE_NAME}
Share line: {SHARE_LINE}
Label: 好みやすい投資法
Methods: {PREFERRED_METHODS}
Hashtags: #投資家タイプ診断 #投資スタイル
```
