# ビジュアル再生成指示: 16タイプ別ポートレート作り直し

## 目的

結果画面用の16タイプ別キャラクター画像を、現在の集合絵からの切り出しではなく、各タイプ名に合わせた独立ポートレートとして作り直してください。

ただし、今の画像の雰囲気は非常に良いので、画風・質感・世界観は維持します。

## 背景

現在の `assets/investor-archetypes.png` は、4列 x 4行の集合絵です。

そこから `384x256` で16分割したものを `assets/type-portraits/{TYPE_CODE}.png` として使っていますが、元画像のグリッド内でキャラクター位置が均等ではなく、一部のキャラや小物が隣セルへ入り込んでいます。

画像担当の作業中画像は `1536 x 1024` の横長カードとして非常に良い仕上がりです。

そのため、無理に縦長へ作り直すのではなく、現在の良い構図を活かして `3:2` の高解像度カードとして使います。

そのため、CSS調整や単純な再分割だけでは、結果画面でキャラを自然に中央表示するのが難しい状態です。

## 方針

集合絵からの切り出しではなく、16タイプそれぞれを1枚ずつ独立したポートレート画像として作り直してください。

重要:

- 新しいタイプ名に合わせてキャラクターの小物・職業感を調整する。
- 既存画像の画風は維持する。
- 結果画面では大きく表示されるため、中央配置と余白を優先する。
- 画像の中に隣キャラや別タイプの小物を入れない。

## 維持したい雰囲気

今の画像から残したい良さ:

- 童話/ファンタジーRPG職業感。
- ちびキャラだが、子どもっぽすぎない。
- 羊皮紙背景。
- 手描き水彩、淡いインク、絵本の挿絵のような質感。
- 茶、金、青緑、紺、赤を中心にした低彩度の落ち着いた配色。
- 投資要素を、チャート、巻物、金貨、地球儀、望遠鏡、盾、植物などの小物で表現する。
- 1枚ずつ職業カードとして成立する。

避けたいこと:

- 現代的なスーツ姿やビジネス写真風。
- 過度にアニメ塗り、3D、リアル調、サイバー調に寄せる。
- 背景が派手になりすぎて結果画面の文字と競合する。
- キャラや小物が端で切れる。
- 別タイプの小物や影が映り込む。

## 画像仕様

```text
Size: 1536 x 1024 px
Aspect ratio: 3:2 landscape card
Format: PNG
Background: 既存と同じ羊皮紙風、または透明背景
Character position: 画像中央
Safe area: 上下左右64px以上
Result display: デスクトップでは最大520 x 347 px、スマホでは最大430 x 287 pxで表示
```

推奨:

- キャラ本体と重要な小物は、画像中央 `76%` の範囲に収める。
- 顔は左右中央から大きくズレないようにする。
- 顔、帽子、武器、重要な小物を切らない。
- 横長カードとして、キャラと小物が1枚の中で自然に収まる構図にする。
- キャラはできるだけ大きく、ただし帽子、武器、重要な小物が切れないようにする。
- 結果画面では大きめに表示するため、細部が見える解像感で作る。
- `object-fit: contain` で表示しても余白が不自然にならない構図にする。
- 画像作成担当は、完成画像を高解像度のまま `assets/type-portraits-ai-working/` に配置する。
- 画像作成担当は `assets/type-portraits/` を直接上書きしない。
- Codexまたは人間が確認した後、Codexが必要に応じて仕様サイズへ変換し、`assets/type-portraits/` へ反映する。

## 対象ファイル

画像作成担当が作成する高解像度元画像:

```text
assets/type-portraits-ai-working/SLPI.png
assets/type-portraits-ai-working/SLPG.png
assets/type-portraits-ai-working/SLAI.png
assets/type-portraits-ai-working/SLAG.png
assets/type-portraits-ai-working/STPI.png
assets/type-portraits-ai-working/STPG.png
assets/type-portraits-ai-working/STAI.png
assets/type-portraits-ai-working/STAG.png
assets/type-portraits-ai-working/RLPI.png
assets/type-portraits-ai-working/RLPG.png
assets/type-portraits-ai-working/RLAI.png
assets/type-portraits-ai-working/RLAG.png
assets/type-portraits-ai-working/RTPI.png
assets/type-portraits-ai-working/RTPG.png
assets/type-portraits-ai-working/RTAI.png
assets/type-portraits-ai-working/RTAG.png
```

Codex確認後に反映するファイル:

```text
assets/type-portraits/SLPI.png
assets/type-portraits/SLPG.png
assets/type-portraits/SLAI.png
assets/type-portraits/SLAG.png
assets/type-portraits/STPI.png
assets/type-portraits/STPG.png
assets/type-portraits/STAI.png
assets/type-portraits/STAG.png
assets/type-portraits/RLPI.png
assets/type-portraits/RLPG.png
assets/type-portraits/RLAI.png
assets/type-portraits/RLAG.png
assets/type-portraits/RTPI.png
assets/type-portraits/RTPG.png
assets/type-portraits/RTAI.png
assets/type-portraits/RTAG.png
```

参考:

- 旧画像退避: `assets/type-portraits-original/`
- 再分割候補: `assets/type-portraits-regenerated/`
- 自動中央寄せ候補: `assets/type-portraits-centered/`
- 高解像度の生成元画像: `assets/type-portraits-ai-working/`
- 仕様サイズ変換候補: `assets/type-portraits-ai/`
- 対応表: `assets/type-portraits/README.md`

## タイプ別コンセプト

| Code | New name | Mark | Concept |
|---|---|---|---|
| SLPI | 配当の守護者 | 防 | 安定した配当や入金を守る、盾を持つ番人 |
| SLPG | 複利の庭師 | 複 | 時間をかけて資産を育てる、植物や積み木を扱う庭師 |
| SLAI | 利回りの職人 | 配 | 配当・利回り・帳簿を丁寧に見る、職人肌の分析家 |
| SLAG | 良株の庭師 | 品 | 品質の良い事業をじっくり育てる、上品なガーデナー |
| STPI | 守りの操縦士 | 守 | 短期でも守りを優先し、素早く舵を切る盾役 |
| STPG | 規律の相場剣士 | 律 | 感情ではなくルールで動く、チャートを持つ剣士 |
| STAI | 市場の観測者 | 観 | 望遠鏡やノートで相場を観察する慎重な偵察役 |
| STAG | 機会の狩人 | 選 | 確度の高い機会を狙う、弓や照準を持つハンター |
| RLPI | 配分の航海士 | 配 | リスクの海を配分で渡る、コンパスや地図を持つ航海士 |
| RLPG | 世界複利の旅人 | 世 | 世界の成長を長期で取り込む、地球儀を持つ旅人 |
| RLAI | 利回りの錬金術師 | 利 | 高い利回りの裏側まで読む、巻物と天秤を持つ錬金術師 |
| RLAG | 未来航路の探求者 | 未 | 未来市場や変化を読む、星図や望遠鏡を持つ探求者 |
| RTPI | 資金回転の軽業師 | 流 | 資金効率と回転を軽やかに扱う、金貨や歯車を持つ軽業師 |
| RTPG | 波乗りの機工士 | 波 | トレンドの波を仕組みで追う、機械とチャートの機工士 |
| RTAI | 材料読みの軍師 | 策 | 材料、需給、タイミングを読む、作戦図を持つ軍師 |
| RTAG | 成長波の切り込み役 | 攻 | 成長期待と勢いに乗る、赤い矢印や槍を持つ切り込み役 |

## タイプ別要件

### SLPI: 配当の守護者

- 盾、金貨、帳簿、配当の安心感。
- 守る姿勢。
- 青緑、金、深い紺。
- 堅実で落ち着いた表情。

### SLPG: 複利の庭師

- 植物、芽、積み木、小さな金貨。
- 時間をかけて育てる雰囲気。
- 緑、青、金。
- 穏やかで静かな表情。

### SLAI: 利回りの職人

- 帳簿、配当メモ、金貨、測定器具。
- 職人、鑑定士、目利き感。
- 金、黒、深緑。
- 細かい数字を丁寧に見る雰囲気。

### SLAG: 良株の庭師

- 植物、鉢、枝、品質の良い果実。
- 強い事業を長く育てる感じ。
- 緑、赤茶、金。
- やさしいが芯のある雰囲気。

### STPI: 守りの操縦士

- 盾、舵、短期判断、流動性。
- すぐ守れる姿勢。
- 灰青、金、紺。
- 機敏だが慎重。

### STPG: 規律の相場剣士

- 剣、チャート、定規、ルールブック。
- 感情を抑えて型で動く。
- 青、金、黒。
- まっすぐで冷静な雰囲気。

### STAI: 市場の観測者

- 望遠鏡、ノート、眼鏡、マーケット地図。
- 入る前に観察する。
- 青緑、茶、金。
- 思慮深い表情。

### STAG: 機会の狩人

- 弓、矢、照準、虫眼鏡、チャンスの印。
- 条件が揃った瞬間を狙う。
- 赤、青、金。
- 低い姿勢で狙うような構図。

### RLPI: 配分の航海士

- コンパス、地図、羅針盤、ポートフォリオの円グラフ。
- 揺れを配分で受け止める。
- 赤茶、金、紺。
- 大きな視点で進路を見る。

### RLPG: 世界複利の旅人

- 地球儀、旅装、星、長い道。
- 世界の成長に長く乗る。
- 青、緑、赤茶、金。
- 冒険者だが穏やか。

### RLAI: 利回りの錬金術師

- 巻物、天秤、金貨、利回り表、試験管ではなく古典的な錬金道具。
- 高利回りの裏側まで読み解く。
- 金、赤茶、黒。
- 賢者感、研究者感。

### RLAG: 未来航路の探求者

- 星図、望遠鏡、星、未来の地図。
- 未来市場に早めに席を取る。
- 紺、金、青緑。
- 視線は少し遠くへ。

### RTPI: 資金回転の軽業師

- 金貨、歯車、軽い道具、素早い足取り。
- キャッシュフローを回す。
- 緑、金、茶。
- 軽快で動きのあるポーズ。

### RTPG: 波乗りの機工士

- 機械、歯車、チャート、波。
- トレンドを仕組みで追う。
- 紺、青、金、機械の茶。
- 職人とエンジニアの中間。

### RTAI: 材料読みの軍師

- 作戦図、巻物、カード、タイミングを示す時計。
- 材料と需給を組み合わせて読む。
- 赤茶、金、黒。
- 参謀、軍師、策士の雰囲気。

### RTAG: 成長波の切り込み役

- 槍、赤い矢印、炎ではなく勢いの線、チャート。
- 成長期待に素早く乗る。
- 赤、黒、金。
- 前へ踏み出す攻めのポーズ。

## 共通プロンプトの方向性

画像生成や外部ビジュアル担当へ渡す場合は、各タイプ要件に以下を足してください。

```text
既存の investor-archetypes.png と同じ画風。
fantasy RPG job card, chibi character, storybook watercolor illustration, parchment background, muted brown and gold palette, hand drawn ink texture, detailed costume and props, centered full-body character, no cropped limbs, no neighboring characters, no modern office style, no photorealism, no 3D render.
```

## 完了条件

- 全16ファイルが存在する。
- 全16ファイルが `1536 x 1024 px`。
- 全16ファイルが `3:2` の横長カード。
- 縮小リサイズによるぼけ、線のにじみ、質感の劣化がない。
- 各キャラが1枚の中で中央に見える。
- 隣キャラや別タイプの小物が映り込んでいない。
- 顔、帽子、武器、重要な小物が切れていない。
- 新しいタイプ名と小物/職業感が一致している。
- 既存画像の手描き水彩、羊皮紙、RPG職業感が維持されている。
- 結果画面で `object-fit: contain` 表示しても余白が不自然すぎない。
- PC/スマホ両方で結果カード内に自然に収まる。
- `npm test` と `npm run build` が通る。

## 確認方法

```bash
cd "/Volumes/My Passport for Mac/development/investor-type-diagnosis"
npm test
npm run build
npm run dev
```

ブラウザで結果画面を確認してください。

全タイプを確認する場合は、`assets/type-portraits/README.md` の順番と診断コードを照合してください。
