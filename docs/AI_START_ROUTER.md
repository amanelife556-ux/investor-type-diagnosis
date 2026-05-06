# AI Start Router: 昭和社員転生診断

最終更新日: 2026-05-06

## 使い方

作業開始時に、今回の依頼がどの役割から始まるかを短く判定する。

## 役割判定

| 依頼内容 | 開始役割 | 主な確認先 |
|---|---|---|
| 設問、タイプ名、一言、結果文言、サブ罪状の調整 | コンテンツ担当 | `src/diagnosisData.ts`, `docs/PROJECT_PRINCIPLES.md` |
| スコア計算、タイプコード、関連タイプの調整 | ロジック担当 | `src/diagnosisLogic.ts`, `src/__tests__/` |
| 画面、レイアウト、レスポンシブ、共有カード | ビジュアル/実装担当 | `src/App.tsx`, `src/styles.css`, `assets/` |
| テスト失敗やビルド失敗 | QA/ロジック担当 | `npm test`, `npm run build` |
| 公開、OGP、SNS共有 | 公開準備担当 | `index.html`, `public/`, Launch Readiness候補 |
| DevAide文書、handoff、運用整理 | 整理担当 | `AGENTS.md`, `docs/` |

## 仕様変更に見える場合

以下は実装前に人間確認する。

- 診断軸、設問数、タイプ数、タイプコードの変更。
- 結果を現実の適職断定や人事評価へ寄せる変更。
- 16枚カード制作の絵柄や制作方針の決定。
