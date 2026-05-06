# Project Start Precheck: 投資家タイプ診断

作成日: 2026-05-05
実行主体: Codex
役割: Precheck Agent / 方針整理役 / 入口判定役

## 目的

- すでに進行中の診断アプリに DevAide を適用する前提を整理する。
- 人間がプロダクトオーナーとして判断すべきことを明確にする。
- 導入セットとExecution profileが現在の開発体制に合っているか確認する。
- 次の作業をどの役割から始めるべきか判定する。

## 1. Project brief

```text
Project name:
- 投資家タイプ診断

Purpose:
- 20問・4軸から16タイプの投資家アーキタイプを診断する。

Target user:
- 投資との向き合い方を自己理解したい人。

Core value:
- 投資助言ではなく、自分の傾向を楽しく理解できること。

Non-goals:
- 金融商品の推奨。
- AI判断だけでの診断軸、設問数、タイプ数、タイプコード変更。
- 過剰な機能追加。
```

## 2. 開始状態

```text
Start state: existing-code
```

既存のVite + React + TypeScriptアプリがあり、テストとビルドは通っています。

## 3. 既存コード

```text
Existing code: あり
Repository/path:
- /Volumes/My Passport for Mac/development/investor-type-diagnosis

Git status:
- Git未管理

Working location:
- /Volumes/My Passport for Mac/development/investor-type-diagnosis
```

## 4. Adoption set案

```text
Recommended adoption set: multi-ai-full
Reason:
- 複数AI、UI、画像アセット、QA、スクリーンショット確認、運用レビューが絡むため。

Upgrade condition:
- なし。現時点でTeam / multi-ai-fullが妥当。
```

## 5. Execution profile案

```text
Recommended execution profile: hybrid-ready
Recommended execution mode: hybrid
Fallback profile: codex-only
Reason:
- 複数担当の成果を統合しつつ、必要に応じてCodexだけで小修正できるため。
```

## 6. AI Start Router 判定

```text
Start role:
- 視覚確認役 / 実装役

Reason:
- 現在の主な未対応課題は、診断書ポートレートの中央寄せ/切り出し修正であるため。

First execution subject:
- ビジュアル担当 / Codex

Next role:
- QA役
```

## 7. Human decision points

人間が判断すべき点:

- DevAide採用ステータスを `trial` から `adopted` に上げるタイミング。
- Git管理を開始するか。
- 診断仕様を変える必要が出た場合の採用判断。
- 画像修正をCSSで行うか、アセット再生成/再切り出しで行うか。

## 8. 初回指示文

```text
まず以下を読んでから作業してください。

- docs/AI_KIT_VERSION.md
- docs/AI_KIT_ADOPTION_SET.md
- docs/PROJECT_START_PRECHECK.md
- docs/AI_START_ROUTER.md
- docs/DECISION_LOG.md
- docs/CHANGE_INTAKE.md
- docs/EXECUTION_PROFILE.md
- AGENTS.md
- docs/PROJECT_PRINCIPLES.md
- WORKING_LOCATION.md
- docs/handoffs/最新の引き継ぎメモ
- 今回の指示書

今回の目的は、既存仕様を守ったまま未対応課題を処理することです。
仕様変更、依存追加、診断軸/設問/タイプ変更が必要に見える場合は、実装前に人間へ確認してください。
```
