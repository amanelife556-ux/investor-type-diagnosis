# AI Kit Version

対象プロジェクト: 投資家タイプ診断
最終更新日: 2026-05-05
管理者: ユーザー

## 採用しているキット

```text
Kit name: DevAide
Kit source: /Volumes/My Passport for Mac/development/ai_development_session_kit
Kit version: v0.9.1-dev-aide-concept
Kit reference date: 2026-05-05
Legacy description: AI Development Session Management Kit
```

## 採用ステータス

```text
Status: trial
```

このプロジェクトでは、DevAide を「人間がAI開発チームを率いるための運用キット」として試験運用します。

AIに丸投げせず、人間の判断、禁止事項、採用理由、引き継ぎをプロジェクト内に残します。

## 採用セット

```text
Adoption set: multi-ai-full
Adoption set display name: Team / multi-ai-full
Adoption set source: docs/AI_KIT_ADOPTION_SET.md
```

このプロジェクトは、複数AI/複数担当、フロントエンド、画像アセット、QA、スクリーンショット確認、運用レビューを含むため `Team / multi-ai-full` を採用します。

## 採用する実行構成

```text
Execution profile: hybrid-ready
Execution mode: hybrid
Primary coordinator: Codex / 人間
Fallback profile: codex-only
Role assignment source: AGENTS.md
Profile source: docs/EXECUTION_PROFILE.md
```

このプロジェクトは、ビジュアル、ロジック、コンテンツ、QAを複数担当に分けつつ、統合と最終判断は Codex と人間が行います。外部担当の成果を統合する通常運用と、Codexだけで小修正するfallbackを切り替えられるようにします。

## このプロジェクトで採用する文書

| 種類 | 採用文書 | 採用状況 | 備考 |
|---|---|---|---|
| 共通ルール | `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/AI_DEVELOPMENT_RULES.md` | trial | 作業前確認、未確認事項、終了時引き継ぎを採用 |
| 報告モード | `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/REPORTING_MODES.md` | trial | 人間の認知負荷を下げる報告粒度として使用 |
| 開始前整理 | `docs/PROJECT_START_PRECHECK.md` | trial | 導入済みプロジェクトとして開始状態を整理 |
| 導入セット | `docs/AI_KIT_ADOPTION_SET.md` | trial | `Team / multi-ai-full` を採用し、文書量の妥当性を固定 |
| 導入チェックリスト | `docs/AI_KIT_ADOPTION_CHECKLIST.md` | trial | キット再適用時の抜け漏れ確認に使用 |
| 開始ルーター | `docs/AI_START_ROUTER.md` | trial | 作業単位ごとの開始役割判定に使用 |
| プロジェクト思想 | `docs/PROJECT_PRINCIPLES.md` | adopted | 診断アプリ固有ルールとして優先 |
| 変更案受付 | `docs/CHANGE_INTAKE.md` | trial | すぐ実装しない変更案をAdopt/Park/Rejectで整理 |
| 判断ログ | `docs/DECISION_LOG.md` | trial | 採用した判断と変えてはいけないことを保存 |
| 作業場所 | `WORKING_LOCATION.md` | adopted | 外部ボリューム側を正式作業場所として固定 |
| AI役割分担 | `AGENTS.md` | adopted | 複数AI/複数担当の責務境界として使用 |
| 実行プロファイル | `docs/EXECUTION_PROFILE.md` | trial | `hybrid-ready` をこのプロジェクトの基本構成として使用 |
| 引き継ぎ | `docs/handoffs/` | trial | セッション終了時に更新 |
| 運用レビュー | `docs/operation_reviews/` | trial | キット更新時や役割分担見直し時に使用 |
| レビュータスク化 | `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/REVIEW_TO_TASKS_TEMPLATE.md` | trial | レビュー指摘の担当割り当てに使用 |
| ビジュアル修正 | `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/VISUAL_FIX_TEMPLATE.md` | trial | `VISUAL_FIX_BRIEF.md` の元になる運用として使用 |
| アセットQA | `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/ASSET_QA_CHECKLIST.md` | trial | 16タイプ画像の存在/表示確認に使用 |
| スクショレビュー | `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/SCREENSHOT_REVIEW_CHECKLIST.md` | trial | PC/スマホの実画面確認で使用 |
| 環境代替確認 | `/Volumes/My Passport for Mac/development/ai_development_session_kit/docs/ENVIRONMENT_FALLBACKS.md` | trial | npm未導入時のNodeスモーク代替確認に使用 |
| Git未管理履歴 | `docs/GIT_UNMANAGED_HISTORY.md` | trial | Git開始前の重要変更履歴として使用 |

## このプロジェクトで採用するプロンプト

| 用途 | 採用プロンプト | 採用状況 | 備考 |
|---|---|---|---|
| 実装 | `/Volumes/My Passport for Mac/development/ai_development_session_kit/prompts/implementation.md` | trial | 実装担当AIへの開始指示に使用 |
| レビュー | `/Volumes/My Passport for Mac/development/ai_development_session_kit/prompts/review.md` | trial | バグ、仕様逸脱、過剰実装、テスト不足の確認に使用 |
| フロントエンド/並行実装 | `/Volumes/My Passport for Mac/development/ai_development_session_kit/prompts/frontend_parallel.md` | trial | ビジュアル担当やフロント調整で使用 |
| バグ調査 | `/Volumes/My Passport for Mac/development/ai_development_session_kit/prompts/bug_investigation.md` | trial | 原因不明の不具合調査時に使用 |
| セッション引き継ぎ | `/Volumes/My Passport for Mac/development/ai_development_session_kit/prompts/session_handoff.md` | trial | 引き継ぎメモ作成時に使用 |

## プロジェクト側の上書きルール

このプロジェクトでは、以下を DevAide 本体より優先します。

1. `AGENTS.md`
2. `docs/PROJECT_PRINCIPLES.md`
3. `docs/DECISION_LOG.md`
4. `WORKING_LOCATION.md`
5. `docs/handoffs/` の最新メモ
6. 今回のユーザー指示

DevAide 本体とプロジェクト固有ルールが矛盾する場合は、プロジェクト固有ルールを優先します。

ただし、以下は人間確認を必須にします。

- 禁止事項の解除
- 仕様変更
- 診断軸、設問数、タイプ数、タイプコードの変更
- データ構造変更
- 依存パッケージ追加

## 更新ルール

DevAide の新しい版を取り込む場合:

1. このファイルの `Kit version` と `Status` を更新する。
2. 取り込む文書/プロンプトを表に追記または更新する。
3. 重要な採用判断を `docs/DECISION_LOG.md` に残す。
4. `docs/EXECUTION_PROFILE.md` と `AGENTS.md` の役割分担が矛盾しないか確認する。
5. `docs/PROJECT_PRINCIPLES.md` と矛盾しないか確認する。
6. `docs/handoffs/` と `docs/GIT_UNMANAGED_HISTORY.md` に、キット更新による注意点を残す。
7. `npm test` と `npm run build` を実行する。

## Git管理との関係

このコピー先は、現時点ではGitリポジトリではありません。

Git管理を開始するまでは、重要な変更と判断を `docs/GIT_UNMANAGED_HISTORY.md` に残してください。

Git管理を開始する場合は、このファイルも含めて管理してください。

## 現在の注意点

- v0.9.1-dev-aide-concept はキット側ではまだ `proposal` です。
- このプロジェクトでは有用と判断したため `trial` として採用しています。
- 正式採用扱いにするには、少なくともビジュアル修正、QA、スクリーンショットレビュー、引き継ぎ、Decision Log運用の1サイクルを通して問題がないことを確認してください。
