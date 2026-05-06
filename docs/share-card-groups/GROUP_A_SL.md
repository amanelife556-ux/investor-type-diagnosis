# Group A 指示: 低リスク・長期系 4枚

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
assets/share-cards-ai-working/SLPI.png
assets/share-cards-ai-working/SLPG.png
assets/share-cards-ai-working/SLAI.png
assets/share-cards-ai-working/SLAG.png
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

落ち着いた、長く続ける安心感。配当、積立、優良株、庭師、職人の雰囲気。

色は青緑、金、深緑、赤茶を中心に控えめ。キャラは穏やかだが、芯がある表情。

## 文言

| Code | Type name | Share line | Preferred methods |
|---|---|---|---|
| SLPI | 配当の守護者 | 毎年の配当が育つと、それだけで安心できる。 | 高配当株 / 高配当ETF / 債券ファンド |
| SLPG | 複利の庭師 | 今日も淡々と積み立てる。それがいちばん強い。 | 全世界株式インデックス / S&P500インデックス / 積立投資 |
| SLAI | 利回りの職人 | 利回りだけじゃなく、払い続ける力まで見たい。 | 高配当株 / 連続増配株 / REIT |
| SLAG | 良株の庭師 | 良い会社なら、時間をかけて付き合いたい。 | 優良株投資 / 成長株投資 / 長期個別株投資 |

## キャラ方針

- SLPI: 盾、金貨、帳簿。堅実な守護者。
- SLPG: 植物、芽、積立、複利。穏やかな庭師。
- SLAI: 帳簿、金貨、測定器具。利回りを見る職人。
- SLAG: 植物、良い果実、品質感。優良株を育てる庭師。

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
