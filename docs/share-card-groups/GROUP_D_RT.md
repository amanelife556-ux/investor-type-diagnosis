# Group D 指示: 高リスク・短期系 4枚

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
assets/share-cards-ai-working/RTPI.png
assets/share-cards-ai-working/RTPG.png
assets/share-cards-ai-working/RTAI.png
assets/share-cards-ai-working/RTAG.png
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

資金回転、波、材料、成長期待。勢いは出すが、カード全体は派手にしすぎない。

色は赤、紺、金、青緑を中心に、RLAGより少し動きがあってよい。キャラは機敏、戦略的、前のめりな雰囲気。

## 文言

| Code | Type name | Share line | Preferred methods |
|---|---|---|---|
| RTPI | 資金回転の軽業師 | 資金は寝かせすぎず、次の入金先へ回したい。 | 高配当ETF / REIT / 短期債券ファンド |
| RTPG | 波乗りの機工士 | 流れが来ているなら、ルールを決めて乗りたい。 | インデックスETF / セクターETF / 米国株 |
| RTAI | 材料読みの軍師 | ニュースの意味を読んで、動くタイミングを探す。 | 国内株 / 米国株 / 高配当株 |
| RTAG | 成長波の切り込み役 | 伸びる物語が見えたら、早めに乗ってみたい。 | 成長株投資 / テーマ投資 / 米国株 |

## キャラ方針

- RTPI: 金貨、歯車、軽い道具。資金を回す軽業師。
- RTPG: 波、機械、チャート。流れに乗る機工士。
- RTAI: 作戦図、巻物、ニュース、駒。材料を読む軍師。
- RTAG: 赤い矢印、槍、勢い。成長波へ切り込む役。

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
