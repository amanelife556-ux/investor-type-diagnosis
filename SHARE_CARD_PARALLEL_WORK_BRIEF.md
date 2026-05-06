# 投稿用結果カード画像 並行作業指示書

## 目的

X投稿用の結果カード画像を、16タイプ分作成する。

単なるテンプレ量産ではなく、`RLAG` 初期案や `SLPG-hybrid` のように、SNSで見たときに「投稿したくなる」完成カードを目指す。

## 最重要方針

- カード品質の基準は `assets/share-cards-ai-working/SLPG-hybrid.png` とする。
- 各タイプのキャラクター参照は `assets/type-portraits-ai-working/{TYPE_CODE}.png` を使う。
- 既存キャラをそのまま貼り込むのではなく、カード全体として自然に描き直す。
- 顔、髪型、表情、服、小物、ポーズ、色をタイプごとに明確に変える。
- 同じ顔の着せ替えにしない。
- `assets/share-cards/` はactive予定フォルダなので、画像担当は直接上書きしない。

## 納品先

作業中・納品先:

```text
assets/share-cards-ai-working/
```

active反映先:

```text
assets/share-cards/
```

注意:

- 画像担当は `assets/share-cards/` を直接上書きしない。
- Codexまたは人間が確認した後、Codexがactiveへ反映する。

## 画像仕様

```text
Size: 1200 x 675 px
Aspect ratio: 16:9
Format: PNG
Color mode: sRGB
Background: 羊皮紙、古地図、冒険者カード風
Style: 手描き水彩、淡いインク、低彩度ファンタジーRPG
Safe area: 重要な文字と顔は上下左右60px以上内側
```

## 良い仕上がりの条件

- 右側キャラがタイプごとに別人に見える。
- 顔、髪型、目つき、年齢感、ポーズ、小物が違う。
- 羊皮紙、古地図、装飾枠、手描き水彩の密度がある。
- タイプ名が一番強く目に入る。
- 一言と投資法がスマホ縮小でも読める。
- 投資法ボックスは大きく、長い場合は2行でよい。
- キャラがカード背景に自然に馴染んでいる。
- SNS画像として華やかさと保存したくなる雰囲気がある。

## 避けること

- 同じ顔の着せ替えにする。
- 既存ポートレートをそのまま貼っただけの平たいカードにする。
- 背景を薄くしすぎて診断カード感を落とす。
- 文字を小さくしすぎる。
- 指示書にない日本語や説明文を追加する。
- 看板、旗、巻物などに余計な可読文字を入れる。
- 企業広告、金融資料、現代スーツ、写真風、3D、サイバー、ネオンに寄せる。
- `assets/share-cards/` を直接上書きする。

## 必ず入れる文字

各カードに以下を入れる。

```text
投資家タイプ診断
{TYPE_CODE}
{TYPE_NAME}
{SHARE_LINE}
好みやすい投資法
{PREFERRED_METHODS}
#投資家タイプ診断 #投資スタイル
```

注意:

- 文言は完全一致させる。
- 余計な可読テキストを追加しない。
- 日本語の誤字、脱字、置き換えをしない。
- タイプ名は原則1行。難しい場合だけ意味の切れ目で改行する。
- 投資法は長ければ2行でよい。

## タイプ別文言

| Code | Type name | Share line | Preferred methods |
|---|---|---|---|
| SLPI | 配当の守護者 | 毎年の配当が育つと、それだけで安心できる。 | 高配当株 / 高配当ETF / 債券ファンド |
| SLPG | 複利の庭師 | 今日も淡々と積み立てる。それがいちばん強い。 | 全世界株式インデックス / S&P500インデックス / 積立投資 |
| SLAI | 利回りの職人 | 利回りだけじゃなく、払い続ける力まで見たい。 | 高配当株 / 連続増配株 / REIT |
| SLAG | 良株の庭師 | 良い会社なら、時間をかけて付き合いたい。 | 優良株投資 / 成長株投資 / 長期個別株投資 |
| STPI | 守りの操縦士 | まず減らさない。動くのは守りを固めてから。 | 債券ファンド / バランスファンド / 預金・待機資金 |
| STPG | 規律の相場剣士 | 上がりそう、よりもルール通りかを先に見る。 | インデックスETF / バランスファンド / 積立投資 |
| STAI | 市場の観測者 | 入る前に、まず理由と数字をじっくり見たい。 | 高配当株 / REIT / 債券ファンド |
| STAG | 機会の狩人 | チャンスは待つ。条件がそろった時だけ狙う。 | 国内株 / セクターETF / 成長株投資 |
| RLPI | 配分の航海士 | 攻める資産も、配分でなら落ち着いて持てる。 | バランスファンド / 高配当ETF / インデックス投資 |
| RLPG | 世界複利の旅人 | 世界まるごとの成長に、長く乗っていたい。 | 全世界株式インデックス / 米国株インデックス / 積立投資 |
| RLAI | 利回りの錬金術師 | 高い利回りほど、その理由まで確かめたい。 | 高配当株 / REIT / 債券ファンド |
| RLAG | 未来航路の探求者 | まだ早いと言われる場所に、少し先回りしたい。 | 成長株投資 / テーマ投資 / 米国株 |
| RTPI | 資金回転の軽業師 | 資金は寝かせすぎず、次の入金先へ回したい。 | 高配当ETF / REIT / 短期債券ファンド |
| RTPG | 波乗りの機工士 | 流れが来ているなら、ルールを決めて乗りたい。 | インデックスETF / セクターETF / 米国株 |
| RTAI | 材料読みの軍師 | ニュースの意味を読んで、動くタイミングを探す。 | 国内株 / 米国株 / 高配当株 |
| RTAG | 成長波の切り込み役 | 伸びる物語が見えたら、早めに乗ってみたい。 | 成長株投資 / テーマ投資 / 米国株 |

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

Requirements:
- Main title large and readable.
- Share line readable and slightly bold.
- Methods large and bold; use two clean lines if long.
- Character face and key props fully visible.
- No extra readable Japanese text.
- No watermark.
```

## 保存形式

推奨:

```text
assets/share-cards-ai-working/{TYPE_CODE}-hybrid-source.png
assets/share-cards-ai-working/{TYPE_CODE}.png
assets/share-cards-ai-working/{TYPE_CODE}-preview-390w.png
```

用途:

- `{TYPE_CODE}-hybrid-source.png`: 生成元サイズの保管用。
- `{TYPE_CODE}.png`: 1200 x 675 の納品候補。
- `{TYPE_CODE}-preview-390w.png`: スマホ幅確認用。

## 確認手順

1. 生成画像を `assets/share-cards-ai-working/{TYPE_CODE}-hybrid-source.png` に保存する。
2. `1200 x 675` にリサイズして `assets/share-cards-ai-working/{TYPE_CODE}.png` に保存する。
3. `390 x 219` に縮小して `assets/share-cards-ai-working/{TYPE_CODE}-preview-390w.png` を作る。
4. 目視で確認する。

確認観点:

- 文言が完全一致している。
- 余計な可読文字がない。
- 顔が他タイプと同じになっていない。
- 既存ポートレートの小物と雰囲気が残っている。
- スマホ幅でタイプ名、一言、投資法が読める。
- キャラの顔と主要小物が見切れていない。
- SNS画像として見栄えがある。

## 採用例と非採用例

採用基準:

```text
assets/share-cards-ai-working/SLPG-hybrid.png
assets/share-cards-ai-working/SLPI.png
```

非採用方向:

```text
scripts/create_share_cards.py で機械生成した貼り込み風カード
```

理由:

- 文言の正確さは高いが、投稿カードとしての密度と高揚感が落ちるため。
- 既存ポートレートを貼り込んだだけに見えやすいため。

## 並行作業時の分担

複数人で進める場合は、タイプコード単位で担当を分ける。

例:

```text
担当A: SLPI, SLPG, SLAI, SLAG
担当B: STPI, STPG, STAI, STAG
担当C: RLPI, RLPG, RLAI, RLAG
担当D: RTPI, RTPG, RTAI, RTAG
```

注意:

- 同じタイプコードを複数担当が同時に上書きしない。
- 作業前に対象コードを明記する。
- 完了時に生成ファイル、未確認事項、気になる点を報告する。
