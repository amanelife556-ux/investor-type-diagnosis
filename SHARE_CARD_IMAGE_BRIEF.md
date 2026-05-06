# 投稿用結果カード画像 作成指示

> 現在の並行制作では、このファイル単体ではなく `SHARE_CARD_PARALLEL_WORK_BRIEF.md` を正の指示書として使ってください。
>
> このファイルは初期テストから4分割方針までの背景を含む補助資料です。品質劣化を避けるための最新ルール、特に `SLPG-hybrid` 品質基準、既存キャラ貼り込み禁止、同じ顔の着せ替え禁止、タイプごとの顔・服・小物差別化は `SHARE_CARD_PARALLEL_WORK_BRIEF.md` を優先します。

## 目的

X投稿で使う結果カード画像を、アプリ内のCanvas生成ではなく、16タイプごとの完成画像として作成してください。

狙いは、SNS上で一目見たときに以下が伝わることです。

- どの診断の結果か。
- 何タイプだったか。
- そのタイプの雰囲気。
- 好みやすい投資法。
- 自分も診断したくなる見栄え。

現在のキャラクター画像の雰囲気は非常に良いので、世界観は維持します。今回は「キャラ単体」ではなく、文字組みを含めた完成済みの投稿カードとして作り込んでください。

## 重要方針

`RLAG_未来航路の探求者` の初回カードが完成基準です。

以後は、RLAGの構図、文字組み、余白、背景密度、キャラの大きさを基準に、4グループへ分割して並行制作します。

重要:

- 自由に別デザインへ広げない。
- RLAGカードの完成度と統一感を保つ。
- タイプごとのキャラ、小物、色、表情は変えてよい。
- レイアウト、文字の読みやすさ、カード全体の密度はそろえる。
- 画像担当は `assets/share-cards/` を直接上書きしない。
- 納品先は必ず `assets/share-cards-ai-working/`。

並行制作の進め方:

1. 4グループに分けて制作する。
2. 各グループは指定された4枚だけを担当する。
3. まず各グループ1枚目を優先して出してもよい。
4. Codex/人間が、サイズ、文字組み、スマホ縮小、世界観の統一感をまとめてレビューする。
5. OKになった画像だけ、Codexが `assets/share-cards/` へ反映する。

理由:

- 16枚を1人で順番に作ると時間がかかるため。
- ただし完全自由並行にすると、カードごとの品質や世界観がばらつくため。
- RLAGを基準カードとして固定し、4枚単位で並行するのが最もバランスがよいため。

## 画像仕様

```text
Size: 1200 x 675 px
Aspect ratio: 16:9
Format: PNG
Color mode: sRGB
Background: 羊皮紙風、淡い水彩、既存アプリと同じ低彩度ファンタジー調
Safe area: 重要な文字と顔は上下左右60px以上内側
Text: 画像内に入れる
```

納品先:

```text
assets/share-cards-ai-working/
```

ファイル名:

```text
assets/share-cards-ai-working/SLPI.png
assets/share-cards-ai-working/SLPG.png
assets/share-cards-ai-working/SLAI.png
assets/share-cards-ai-working/SLAG.png
assets/share-cards-ai-working/STPI.png
assets/share-cards-ai-working/STPG.png
assets/share-cards-ai-working/STAI.png
assets/share-cards-ai-working/STAG.png
assets/share-cards-ai-working/RLPI.png
assets/share-cards-ai-working/RLPG.png
assets/share-cards-ai-working/RLAI.png
assets/share-cards-ai-working/RLAG.png
assets/share-cards-ai-working/RTPI.png
assets/share-cards-ai-working/RTPG.png
assets/share-cards-ai-working/RTAI.png
assets/share-cards-ai-working/RTAG.png
```

注意:

- `assets/share-cards/` はアプリが参照するactive置き場です。
- 画像担当は `assets/share-cards/` を直接上書きしないでください。
- 完成候補は必ず `assets/share-cards-ai-working/` に置いてください。
- RLAGは基準カードとして先行反映済みです。再制作する場合は、既存RLAGの良さを壊さない前提で行ってください。

## カード構成

基本構成:

- 左側: 診断名、タイプコード、タイプ名、一言、好みやすい投資法、ハッシュタグ。
- 右側: キャラクター画像を大きく表示。
- 全体: 余白をしっかり取り、Xのタイムラインで小さく表示されても読めること。

現在のアプリ内プレビューに近い構成:

```text
左上: 投資家タイプ診断
左中: TYPE_CODE バッジ
左大: タイプ名
左下: 「共有用の一言」
左下ボックス: 好みやすい投資法
最下部: #投資家タイプ診断 #投資スタイル
右側: キャラクター画像
右下または画像下: TYPE_CODE 小バッジ
```

## 文字組みのこだわり

最重要:

- タイプ名は変な位置で改行しない。
- できればタイプ名は1行で見せる。
- 1行が厳しい場合は、意味の切れ目で2行にする。
- 文字は小さくしすぎない。
- キャラと文字がぶつからない。
- X投稿時に縮小されても、タイプ名とキャラが先に目に入る。

タイプ名の推奨改行:

| Code | Type name | Preferred line break |
|---|---|---|
| SLPI | 配当の守護者 | 1行 |
| SLPG | 複利の庭師 | 1行 |
| SLAI | 利回りの職人 | 1行 |
| SLAG | 良株の庭師 | 1行 |
| STPI | 守りの操縦士 | 1行 |
| STPG | 規律の相場剣士 | 1行 |
| STAI | 市場の観測者 | 1行 |
| STAG | 機会の狩人 | 1行 |
| RLPI | 配分の航海士 | 1行 |
| RLPG | 世界複利の旅人 | 1行 |
| RLAI | 利回りの錬金術師 | 1行優先 / 厳しければ `利回りの` + `錬金術師` |
| RLAG | 未来航路の探求者 | 1行優先 / 厳しければ `未来航路の` + `探求者` |
| RTPI | 資金回転の軽業師 | 1行優先 / 厳しければ `資金回転の` + `軽業師` |
| RTPG | 波乗りの機工士 | 1行 |
| RTAI | 材料読みの軍師 | 1行 |
| RTAG | 成長波の切り込み役 | 1行優先 / 厳しければ `成長波の` + `切り込み役` |

一言の扱い:

- 一言は2行以内。
- 句読点や助詞の直後で自然に改行する。
- `でした。` だけが単独行にならないようにする。

投資法の扱い:

- 3項目を `/` 区切りで表示。
- 長い場合は2行まで許容。
- ボックス内に収める。

## 画風

維持したい雰囲気:

- 童話/ファンタジーRPG職業感。
- 羊皮紙、古い図鑑、冒険者カードのような質感。
- 手描き水彩、淡いインク、絵本の挿絵。
- 茶、金、青緑、紺、赤を中心にした低彩度の落ち着いた配色。
- キャラはちびキャラだが、幼すぎず品がある。
- 投資要素は小物で表現する。

避けたいこと:

- 企業広告のような硬い金融感。
- 現代的なスーツ写真風。
- 派手なネオン、サイバー、3D、強すぎるアニメ塗り。
- 背景が濃すぎて文字が読みにくい。
- 文字が装飾に埋もれる。
- キャラが小さすぎる。

## 基準カード

基準カードは `RLAG.png` です。

参照:

```text
assets/share-cards-ai-working/RLAG.png
assets/share-cards/RLAG.png
```

このカードの良いところ:

- タイプ名が大きく、最初に目に入る。
- キャラクターの完成度が高く、右側の主役感が強い。
- 背景の密度はあるが、文字が読みにくくなっていない。
- 文字、装飾、キャラの世界観がそろっている。
- スマホ縮小でもカードとして成立している。

残り15枚は、このRLAGを基準にしてください。

## 初回テスト対象

### RLAG

```text
Code: RLAG
Type name: 未来航路の探求者
Share line: まだ早いと言われる場所に、少し先回りしたい。
Preferred methods: 成長株投資 / テーマ投資 / 米国株
Hashtags: #投資家タイプ診断 #投資スタイル
Character concept: 星図、望遠鏡、星、未来の地図。未来市場や変化を読む探求者。
Colors: 紺、金、青緑
```

チェックしたいポイント:

- `未来航路の探求者` が読みにくい位置で改行されていないか。
- キャラクターの顔が右側カード内で中央寄りに見えるか。
- 望遠鏡や星図が端で切れていないか。
- 左側の文字と右側のキャラが競合していないか。
- スマホで縮小表示してもタイプ名が読めるか。
- X投稿画像として投稿したくなる見栄えか。

## 並行制作グループ

### Group A: 低リスク・長期系

担当範囲:

```text
assets/share-cards-ai-working/SLPI.png
assets/share-cards-ai-working/SLPG.png
assets/share-cards-ai-working/SLAI.png
assets/share-cards-ai-working/SLAG.png
```

制作方針:

- 落ち着いた、長く続ける安心感。
- 配当、積立、優良株、庭師、職人の雰囲気。
- 色は青緑、金、深緑、赤茶を中心に控えめ。
- キャラは穏やかだが、芯がある表情。

### Group B: 低リスク・短期系

担当範囲:

```text
assets/share-cards-ai-working/STPI.png
assets/share-cards-ai-working/STPG.png
assets/share-cards-ai-working/STAI.png
assets/share-cards-ai-working/STAG.png
```

制作方針:

- 守り、規律、観察、タイミング。
- 短期でも無謀ではなく、慎重に機会を見る雰囲気。
- 色は灰青、紺、金、赤を低彩度で。
- キャラは機敏だが、冷静さを残す。

### Group C: 高リスク・長期系

担当範囲:

```text
assets/share-cards-ai-working/RLPI.png
assets/share-cards-ai-working/RLPG.png
assets/share-cards-ai-working/RLAI.png
assets/share-cards-ai-working/RLAG.png
```

制作方針:

- 大きな視点、長期、世界、未来、利回りの読み解き。
- RLAGは基準カード。再制作する場合も現行カードの良さを維持。
- 色は紺、金、青緑、赤茶を中心に。
- 冒険・航海・旅・探求の雰囲気。

### Group D: 高リスク・短期系

担当範囲:

```text
assets/share-cards-ai-working/RTPI.png
assets/share-cards-ai-working/RTPG.png
assets/share-cards-ai-working/RTAI.png
assets/share-cards-ai-working/RTAG.png
```

制作方針:

- 資金回転、波、材料、成長期待。
- 勢いは出すが、カード全体は派手にしすぎない。
- 色は赤、紺、金、青緑を中心に、RLAGより少し動きがあってよい。
- キャラは機敏、戦略的、前のめりな雰囲気。

## 16タイプ文言一覧

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

## レビュー基準

初回テスト画像は、以下を満たすまで調整してください。

- 1200 x 675 pxで作成されている。
- タイプ名が自然に読める。
- 一言が自然に読める。
- 投資法が読みやすい。
- キャラクターの顔と主要小物が見切れていない。
- 左右の重量バランスがよい。
- 文字の色と背景のコントラストが十分。
- スマホで縮小しても、タイプ名とキャラの印象が残る。
- 現在のアプリの世界観から浮いていない。

## Codex側の予定

画像担当の初回テスト画像が返ってきたら、Codexは以下を行います。

- `assets/share-cards-ai-working/RLAG.png` のサイズと見た目を確認。
- アプリの共有セクションに仮反映。
- スマホ表示で保存画像プレビューが崩れないか確認。
- OK後、`assets/share-cards/` にactive画像として反映する。
- その後、残り15タイプの展開指示へ進む。
