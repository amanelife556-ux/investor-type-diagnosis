# AI Kit Adoption Checklist: 投資家タイプ診断

作成日: 2026-05-05
担当: Codex
採用キット版: v0.9.1-dev-aide-concept

## 1. 導入ファイル

- [x] 採用セットを決めた。
- [x] `docs/AI_KIT_ADOPTION_SET.md` を作成した、または `docs/AI_KIT_VERSION.md` に採用セットを書いた。
- [x] `docs/AI_KIT_VERSION.md` を作成した。
- [x] `docs/PROJECT_START_PRECHECK.md` を作成した。
- [x] `docs/EXECUTION_PROFILE.md` を作成した。
- [x] `docs/AI_START_ROUTER.md` を作成した。
- [x] `docs/CHANGE_INTAKE.md` を作成した。
- [x] `docs/DECISION_LOG.md` を作成した。
- [x] `docs/PROJECT_PRINCIPLES.md` を作成した。
- [x] `WORKING_LOCATION.md` を作成した。
- [x] `AGENTS.md` を作成した。
- [x] `docs/handoffs/` を作成した。
- [ ] 必要に応じて `docs/AI_DEVELOPMENT_RULES.md` を配置した。
- [ ] 必要に応じて `docs/REPORTING_MODES.md` を配置した。
- [ ] 必要に応じて `prompts/` を配置した。

共通ルールとプロンプトは、プロジェクト内へコピーせず、次のキット本体を参照します。

```text
/Volumes/My Passport for Mac/development/ai_development_session_kit
```

## 2. 参照リンク

- [x] `AGENTS.md` から `docs/AI_KIT_VERSION.md` を参照している。
- [x] `AGENTS.md` から `docs/DECISION_LOG.md` を参照している。
- [x] `AGENTS.md` から `docs/CHANGE_INTAKE.md` を参照している。
- [x] `AGENTS.md` から `docs/AI_START_ROUTER.md` を参照している。
- [x] `AGENTS.md` から `docs/EXECUTION_PROFILE.md` を参照している。
- [x] `AGENTS.md` から `docs/PROJECT_PRINCIPLES.md` を参照している。
- [x] `AGENTS.md` から `WORKING_LOCATION.md` を参照している。
- [x] `README.md` から `AGENTS.md` を参照している。
- [x] 最新の handoff から、次回AIが読むべき文書を参照している。

## 3. 採用状態

- [x] `docs/AI_KIT_VERSION.md` に採用セットを書いた。
- [x] `docs/AI_KIT_VERSION.md` に採用キット版を書いた。
- [x] `docs/AI_KIT_VERSION.md` に採用ステータスを書いた。
- [x] `docs/AI_KIT_VERSION.md` に採用文書を書いた。
- [x] `docs/AI_KIT_VERSION.md` に採用プロンプトを書いた。
- [x] `docs/EXECUTION_PROFILE.md` に実行プロファイルを書いた。
- [x] `AGENTS.md` に実行主体と役割割り当てを書いた。
- [x] `docs/DECISION_LOG.md` に初期判断を書いた。
- [x] `docs/CHANGE_INTAKE.md` に現在の変更案を書いた。

## 4. 作業場所

- [x] `WORKING_LOCATION.md` に正式な作業ディレクトリを書いた。
- [x] 古い作業場所がある場合、その扱いを書いた。
- [x] Git管理状態を書いた。
- [x] 実行すべきテスト/ビルド/起動コマンドを書いた。

## 5. セッション開始プロンプト

次回AIに読ませる文書:

```text
まず以下を読んでから作業してください。

- docs/AI_KIT_VERSION.md
- docs/EXECUTION_PROFILE.md
- docs/PROJECT_START_PRECHECK.md
- docs/AI_START_ROUTER.md
- docs/DECISION_LOG.md
- docs/CHANGE_INTAKE.md
- AGENTS.md
- /Volumes/My Passport for Mac/development/ai_development_session_kit/docs/AI_DEVELOPMENT_RULES.md
- /Volumes/My Passport for Mac/development/ai_development_session_kit/docs/REPORTING_MODES.md
- docs/PROJECT_PRINCIPLES.md
- WORKING_LOCATION.md
- docs/handoffs/最新の引き継ぎメモ
- 今回の指示書
```

## 6. Git管理

Git管理されている場合:

- [ ] `AGENTS.md` をコミット対象にした。
- [ ] `WORKING_LOCATION.md` をコミット対象にした。
- [ ] `docs/AI_KIT_VERSION.md` をコミット対象にした。
- [ ] `docs/EXECUTION_PROFILE.md` をコミット対象にした。
- [ ] `docs/PROJECT_START_PRECHECK.md` をコミット対象にした。
- [ ] `docs/AI_START_ROUTER.md` をコミット対象にした。
- [ ] `docs/CHANGE_INTAKE.md` をコミット対象にした。
- [ ] `docs/DECISION_LOG.md` をコミット対象にした。
- [ ] `docs/PROJECT_PRINCIPLES.md` をコミット対象にした。
- [ ] `docs/handoffs/` の必要なメモをコミット対象にした。

Git未管理の場合:

- [x] `docs/GIT_UNMANAGED_HISTORY.md` または同等の履歴メモを作成した。
- [x] 重要な導入変更を履歴メモに残した。

## 7. 未確認

- Git管理開始日。
- 初回コミット対象。
- `v0.9.1-dev-aide-concept` をこのプロジェクトで `adopted` に上げるタイミング。
