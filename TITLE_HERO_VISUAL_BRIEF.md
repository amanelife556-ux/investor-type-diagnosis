# タイトル専用ビジュアル制作指示書

## 目的

タイトル画面で使う専用キービジュアルを作成する。

現在の16枚結果カードは完成度が高いが、スマホのタイトル画面で4x4に並べると情報量が多く、各カード内の文字も読ませにくい。タイトルでは「診断の世界観」と「16タイプの期待感」を一瞬で伝える専用絵にする。

## 納品先

```text
assets/title-hero.png
```

作業途中や候補版:

```text
assets/title-hero-working/
```

注意:

- `assets/title-hero.png` が存在すると、アプリのタイトル画面は自動でこの画像を使う。
- 未納品時は、既存の16カードモザイクにフォールバックする。
- 候補版は `assets/title-hero-working/title-hero-v1.png` のようにバージョンを付ける。

## 画像仕様

```text
Size: 1536 x 1024 px
Aspect ratio: 3:2
Format: PNG
Color mode: sRGB
Style: 手描き水彩、淡いインク、羊皮紙、古地図、低彩度ファンタジーRPG
用途: タイトル画面右側のヒーロー画像
```

## コンセプト

完成した16枚カードと同じ世界観で、16人の投資家タイプが「ひとつの冒険者ギルド / 投資家アーカイブ」に集まっている絵。

カードそのものを小さく並べるのではなく、キャラクターと小物を中心に見せる。タイトル画面では画像内テキストを読ませない。

## 構図

推奨:

- 3:2横長の集合ビジュアル。
- 中央に2〜4人の主役級キャラクターを大きめに配置。
- 周囲に他タイプのキャラクターや象徴小物を散らす。
- 古地図、羅針盤、巻物、コイン、旗、帳簿、植物、望遠鏡、チャート風の紙などで投資タイプ診断らしさを出す。
- スマホで小さく表示しても「かわいいキャラがたくさんいる」「世界観が濃い」と分かる密度にする。

避ける:

- 16枚の結果カードをそのまま縮小して並べる。
- 画像内に長い日本語テキストを入れる。
- 下段キャラがUIキャプションで隠れる構図。
- 端のキャラや重要小物が切れる構図。
- 現代の証券会社広告、スーツ、写真、3D、サイバー、ネオン。

## 必須の見た目

- `assets/share-cards/` の完成カードと同じ質感。
- 羊皮紙、古地図、装飾枠、手描き水彩、低彩度の金・青・緑・赤。
- 16タイプのキャラが別人に見える雰囲気。
- 投資テーマは小物で示す。文字説明に頼らない。
- 余白は少し残すが、薄すぎず、タイトル画面の第一印象として強いこと。

## 画像内テキスト

原則、画像内に可読テキストは入れない。

入れる場合も、以下の短い英字風ラベル程度に留める。

```text
Investor Archive
16 Types
```

日本語の長文、タイプ名、投資法、説明文は入れない。

## 参照素材

品質・雰囲気の基準:

```text
assets/share-cards/SLPG.png
assets/share-cards/RLAG.png
assets/share-cards/RTAG.png
assets/share-cards/STPI.png
```

全体のタイプ一覧:

```text
assets/share-cards/
```

キャラの元雰囲気:

```text
assets/type-portraits-ai-working/
```

## プロンプト雛形

```text
Create a dedicated title hero illustration for a Japanese investor type diagnosis app.

Canvas: 1536 x 1024 px, 3:2 landscape.
Style: rich parchment adventure archive, antique map background, ornate fantasy RPG mood, hand-drawn watercolor, soft ink linework, low-saturation gold, navy, teal, muted red, warm paper texture.

Scene:
An adventurer guild / investor archive where many distinct chibi fantasy investor characters gather around an antique map table. Show a lively ensemble of different investor archetypes: dividend guardian, compound gardener, market observer, growth explorer, tactical strategist, allocation navigator, wave-riding engineer, defensive pilot. Use visual motifs such as compass, coins, scrolls, ledgers, telescope, banners, plants, charts, scales, shields, globe, and old maps.

Composition:
Wide 3:2 hero image. Put 2 to 4 larger focal characters near the center, with other characters and props arranged around them. Keep all important faces and props inside the safe area. Leave gentle breathing room near the edges. The image must still read clearly when displayed small on a smartphone.

Do not make it a grid of cards. Do not include long readable text. Do not include Japanese sentences. Do not use modern suits, office, stock-photo style, 3D render, cyberpunk, neon, or corporate advertising.

Optional tiny decorative English labels only if needed:
Investor Archive
16 Types

The final mood should match the completed social share cards: collectible, warm, ornate, storybook-like, and worth saving.
```

## 確認観点

- スマホタイトル画面で、画像が情報過多に見えない。
- 文字を読ませなくても世界観が伝わる。
- 16タイプ診断らしさがある。
- 完成カードと並べても質感差が少ない。
- 端切れ、下段隠れ、余計な文字がない。
- タイトルコピーとCTAを邪魔しない。

## 採用手順

1. 候補を `assets/title-hero-working/title-hero-v1.png` として保存。
2. スマホ幅とデスクトップ幅でタイトル画面に仮配置して確認。
3. 採用版だけ `assets/title-hero.png` にコピー。
4. `npm run build` と `npm test` を通す。
