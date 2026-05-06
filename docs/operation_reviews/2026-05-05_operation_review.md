# AI開発運用レビュー: 投資家タイプ診断

作成日: 2026-05-05
レビュー担当: Codex
対象期間: 2026-05-05
対象キット版: v0.9.1-dev-aide-concept

## レビューの目的

- キット最新版を、現在の複数担当開発に有効な範囲だけ再適用する。
- ビジュアル、ロジック、コンテンツ、QA、統合の境界を次回AIにも伝わる形にする。
- Git未管理状態でも、重要な判断履歴を失わないようにする。

## 必ず読むもの

- `docs/AI_KIT_VERSION.md`
- `docs/AI_KIT_ADOPTION_SET.md`
- `docs/PROJECT_START_PRECHECK.md`
- `docs/AI_START_ROUTER.md`
- `docs/DECISION_LOG.md`
- `docs/CHANGE_INTAKE.md`
- `docs/EXECUTION_PROFILE.md`
- `AGENTS.md`
- `docs/PROJECT_PRINCIPLES.md`
- `WORKING_LOCATION.md`
- `docs/handoffs/2026-05-05_current_state.md`
- `docs/GIT_UNMANAGED_HISTORY.md`
- `VISUAL_FIX_BRIEF.md`
- `docs/reviews/2026-05-05_multi_ai_development_review.md`

## 1. 採用版とステータス

| 項目 | 現在 | 評価 | 見直し案 |
|---|---|---|---|
| 採用キット版 | v0.9.1-dev-aide-concept | 適切 | このプロジェクトでは `trial` として採用 |
| 採用ステータス | trial | 適切 | ビジュアル修正、QA、スクショ確認後に adopted 検討 |
| 採用セット | Team / multi-ai-full | 適切 | 複数AI、フロントエンド、画像、QA、運用レビューがあるため |
| 採用文書 | 版固定、導入セット、開始前整理、開始ルーター、変更案受付、判断ログ、実行プロファイル、導入チェックリスト、Git未管理履歴、運用レビュー | 適切 | 共通文書はコピーせずDevAide本体参照を維持 |

## 2. 実行プロファイル

| 項目 | 現在 | 評価 | 見直し案 |
|---|---|---|---|
| Execution profile | hybrid-ready | 適切 | 維持 |
| Execution mode | hybrid | 適切 | 維持 |
| Primary coordinator | Codex / 人間 | 適切 | 仕様判断は人間、統合はCodex |
| Fallback profile | codex-only | 適切 | 小修正と緊急修正で使用 |

## 3. 役割分担

| 役割 | 現在の担当 | 実態 | 評価 | 見直し案 |
|---|---|---|---|---|
| 統合担当 | Codex / 人間 | 実装・レビュー・文書統合 | 適切 | 維持 |
| ビジュアル担当 | ビジュアル担当 | 画像切り出し/中央寄せが未完 | 要対応 | `VISUAL_FIX_BRIEF.md` に沿って再依頼 |
| ロジック担当 | ロジック担当 | テストは通過済み | 適切 | 仕様変更なしなら維持 |
| コンテンツ担当 | Fermat | 文言・診断内容担当 | 適切 | 投資助言に見える表現だけ注意 |
| QA担当 | Raman | テスト/導線/PCスマホ確認担当 | 一部未確認 | スクショレビューを追加 |
| 整理担当 | Codex | キット再適用、handoff更新 | 適切 | 維持 |

## 4. プロジェクト思想と仕様境界

見直し結果:

- 維持すること: 16タイプ、4軸、20問、タイプコードは人間確認なしに変更しない。
- 維持すること: 投資助言ではなく自己理解の診断として扱う。
- 変更候補: なし。
- 人間確認が必要なこと: 診断軸、設問数、タイプ定義、依存追加。

## 5. 作業場所と履歴

見直し結果:

- 維持すること: 正式作業場所は `/Volumes/My Passport for Mac/development/investor-type-diagnosis`。
- 維持すること: 旧パス `/Users/kikuchihiroki/Documents/New project/investor-type-diagnosis` は参照用。
- 追加したこと: `docs/GIT_UNMANAGED_HISTORY.md` でGit開始前の履歴を残す。
- 未確認事項: Git管理開始日と初回コミット対象。

## 6. 引き継ぎ

見直し結果:

- 維持すること: `docs/handoffs/2026-05-05_current_state.md` を現在の入口メモとして使う。
- 追加すること: 次回AIに `docs/EXECUTION_PROFILE.md` とこの運用レビューも読ませる。
- 次回AIへ必ず読ませるメモ: `docs/handoffs/2026-05-05_current_state.md`

## 7. QAと確認手順

見直し結果:

- 維持すること: `npm test` と `npm run build` は変更後に実行する。
- 追加する確認: PC/スマホのスクリーンショットレビュー。
- 追加する確認: 16タイプ画像の中央寄せ/切り出し。
- 未確認事項: 実ブラウザでの最終表示確認。

## 8. 改善タスク

| 優先度 | タスク | 理由 | 担当 | 完了条件 |
|---|---|---|---|---|
| 高 | 診断書ポートレートの中央寄せ/切り出し修正 | キャラが真ん中に出ていない | ビジュアル担当 / Codex統合 | PC/スマホで自然に中央表示される |
| 中 | ブラウザでPC/スマホ確認 | テスト/ビルドでは視覚崩れを検出しきれない | QA担当 / Codex | スクショレビュー結果を残す |
| 中 | Git管理開始判断 | 現在はGit未管理 | 人間 | `git init` またはリモート設定を判断 |
| 低 | v0.9.1の正式採用判断 | 現在はtrial | 人間 / Codex | 1サイクル運用後に adopted へ上げるか判断 |

## 判定

```text
結論: 小修正
```

理由:

- DevAide最新版は、このプロジェクトの複数担当運用に有効。
- `v0.9.1-dev-aide-concept` の「人間がAI開発チームを率いる」説明は、今回の運用に合っている。
- ただしキット側では `proposal` のため、プロジェクト側では `trial` として取り込むのが妥当。
- アプリ仕様や実装に直接影響する変更はない。

次にやること:

1. ビジュアル担当のポートレート中央寄せ修正を統合する。
2. `npm test` と `npm run build` を通す。
3. PC/スマホのスクリーンショットレビューを行う。

## 次回AIへの指示

```text
まず以下を読んでください。

- docs/AI_KIT_VERSION.md
- docs/EXECUTION_PROFILE.md
- AGENTS.md
- docs/PROJECT_PRINCIPLES.md
- WORKING_LOCATION.md
- docs/handoffs/2026-05-05_current_state.md
- docs/operation_reviews/2026-05-05_operation_review.md
- 今回の指示書

今回の目的は、運用レビューで決まった改善タスクを、仕様変更と混ぜずに上から順に処理することです。
未確認事項は推測せず、未確認と書いてください。
```
