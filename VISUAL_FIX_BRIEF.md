# ビジュアル修正指示: 診断書ポートレートの切り出し調整

## 背景

結果画面の診断書に表示されるタイプ別キャラクター画像の切り出しがうまくいっておらず、キャラクターが枠の中央に出ていません。

現状、結果画面では `assets/type-portraits/{TYPE_CODE}.png` を `src/App.tsx` から読み込み、`src/styles.css` の `.portrait-character` / `.type-portrait` で表示しています。

## 対象ファイル

- `src/styles.css`
- `assets/type-portraits/*.png`
- 必要な場合のみ `src/App.tsx`

注意:

- 画像作成担当は `assets/type-portraits/` を直接上書きしないでください。
- 高解像度の生成元画像は `assets/type-portraits-ai-working/` に置きます。
- `assets/type-portraits/` への反映は、Codexまたは人間が確認した後にCodexが行います。

## 優先して確認する箇所

結果画面のこの部分です。

- `src/App.tsx`
  - `typePortraits`
  - `getTypePortrait`
  - `<img className="type-portrait" ... />`

- `src/styles.css`
  - `.type-card`
  - `.portrait-character`
  - `.type-portrait`
  - モバイル用の `.portrait-character`

## 修正方針

まずはCSSで調整してください。

主に確認するCSSプロパティ:

```css
.portrait-character {
  width: ...;
  height: ...;
}

.type-portrait {
  inset: ...;
  width: ...;
  height: ...;
  object-fit: ...;
  object-position: ...;
}
```

想定される調整:

- `object-position: center center;` を基準にする
- キャラクターの頭や体が切れる場合は `object-fit: contain;` も検討する
- 枠内に余白が出すぎる場合は `object-fit: cover;` のまま `object-position` を調整する
- PC幅とスマホ幅で別々に見え方を確認する
- 画像自体の余白や構図がタイプごとに違う場合は、CSSだけでなく `assets/type-portraits/*.png` の再書き出しも検討する

## 完了条件

- 全16タイプの結果画面で、キャラクターの顔と体が自然に中央へ収まっている
- 顔、頭、重要な小物が枠外に切れていない
- PC幅で見てもスマホ幅で見ても、キャラが左右どちらかに寄って見えない
- `character-badge` がキャラの顔や重要部分を不自然に隠していない
- `npm run build` が通る

## 確認手順

```bash
cd "/Volumes/My Passport for Mac/development/investor-type-diagnosis"
npm test
npm run build
npm run dev
```

ブラウザで診断を進め、複数タイプの結果画面を確認してください。

全16タイプを直接確認したい場合は、QA担当と相談して各タイプへ到達する回答パターンを使ってください。

## 注意

- `src/main.tsx` は起動専用なので触らないでください。
- 診断ロジックや設問文は今回の修正対象外です。
- 画像の再書き出しをする場合、ファイル名はタイプコードのまま維持してください。
  - 例: `SLPI.png`, `RLAG.png`
