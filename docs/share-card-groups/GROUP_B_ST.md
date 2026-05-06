# Group B 指示: 低リスク・短期系 4枚

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
assets/share-cards-ai-working/STPI.png
assets/share-cards-ai-working/STPG.png
assets/share-cards-ai-working/STAI.png
assets/share-cards-ai-working/STAG.png
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

守り、規律、観察、タイミング。短期でも無謀ではなく、慎重に機会を見る雰囲気。

色は灰青、紺、金、赤を低彩度で。キャラは機敏だが、冷静さを残す。

## 文言

| Code | Type name | Share line | Preferred methods |
|---|---|---|---|
| STPI | 守りの操縦士 | まず減らさない。動くのは守りを固めてから。 | 債券ファンド / バランスファンド / 預金・待機資金 |
| STPG | 規律の相場剣士 | 上がりそう、よりもルール通りかを先に見る。 | インデックスETF / バランスファンド / 積立投資 |
| STAI | 市場の観測者 | 入る前に、まず理由と数字をじっくり見たい。 | 高配当株 / REIT / 債券ファンド |
| STAG | 機会の狩人 | チャンスは待つ。条件がそろった時だけ狙う。 | 国内株 / セクターETF / 成長株投資 |

## キャラ方針

- STPI: 盾、舵、守り。機敏な操縦士。
- STPG: 剣、チャート、定規。規律ある相場剣士。
- STAI: 望遠鏡、ノート、眼鏡。慎重な観測者。
- STAG: 弓、矢、照準。条件がそろうまで待つ狩人。

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
