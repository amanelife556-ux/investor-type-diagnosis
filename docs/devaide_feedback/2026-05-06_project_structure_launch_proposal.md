# DevAide Proposal: 構成整合性・環境代替・公開準備

作成日: 2026-05-06
作成者: Codex
対象プロジェクト: 投資家タイプ診断
ステータス: 案のみ / DevAide本体未反映

## 目的

投資家タイプ診断の開発初期から公開準備までを振り返り、DevAide本体に反映すると有用そうな汎用改善案を整理する。

この文書は案であり、DevAide本体は変更しない。

## 抽出した学び

### 1. Project Structure Consistency Check

初期レビューで、アプリの実行入口と実装本体のズレが見つかった。

今回起きたこと:

- `src/main.tsx` と `src/App.tsx` にApp実装が二重化していた。
- 実行される画面と、レビュー対象/修正対象の画面がズレる危険があった。
- stylesheet importと実ファイルの整合性が崩れていた。
- READMEの構成説明が、実装のsource of truthを明確にしていなかった。

DevAide反映案:

```text
docs/PROJECT_STRUCTURE_CONSISTENCY_CHECK.md
```

含めるチェック:

- 実行entrypointはどこか。
- UI/アプリ本体のsource of truthはどこか。
- entrypointに画面ロジックが肥大化していないか。
- 同じ責務の実装が複数存在しないか。
- importされる必須ファイルが存在するか。
- READMEの構成説明と実装が一致しているか。
- tsconfig/build対象に旧実装が混ざっていないか。
- 担当者ごとの編集境界が明確か。

反映先候補:

```text
docs/PROJECT_START_PRECHECK_TEMPLATE.md
docs/REVIEW_TO_TASKS_TEMPLATE.md
docs/AI_START_ROUTER_TEMPLATE.md
```

### 2. Environment Fallback Smoke Test

環境不足で正式テストが走らない時でも、最低限のスモークテストを用意すると安全に進められた。

今回起きたこと:

- npm導入前は正式な `npm test` / `npm run build` が使えなかった。
- Node単体スモークテストで、entrypoint、20問/4軸、16タイプ、asset import、metadataを確認した。
- npm導入後に正式テストへ移行した。

DevAide反映案:

```text
docs/ENVIRONMENT_FALLBACKS.md
docs/SESSION_HANDOFF_TEMPLATE.md
```

追加したい項目:

- 正式テストが使えない理由。
- 代替スモークテストで確認した範囲。
- 代替スモークテストでは確認できない範囲。
- 環境復旧後に必ず実行する正式テスト。

### 3. Launch Readiness Checklist

公開前には、ビルド成功だけではなく、SNS共有、OGP、公開URL、免責文まで見る必要がある。

今回起きたこと:

- X共有文とカード画像を調整した。
- X投稿から診断ページへ飛べるように、本番URLを入れる必要があると分かった。
- ローカルの `window.location.href` では公開後の導線として不十分。
- 金融テーマのため、投資助言ではなく自己理解/学習目的であることを明確にする必要がある。

DevAide反映案:

```text
docs/LAUNCH_READINESS_CHECKLIST_TEMPLATE.md
```

含めるチェック:

- 公開URLが決まっている。
- 共有URLがローカルURLではなく本番URLになっている。
- OGP title/description/image が設定されている。
- SNS投稿文が自然。
- 共有画像/保存画像が正しい。
- スマホで主要導線が使える。
- 免責文がある。
- 公開方法が決まっている。
- 公開後の更新方法が決まっている。

### 4. Working Location Move Protocol

作業場所変更は、チャット上の合意だけでは足りない。

今回起きたこと:

- 作業場所が外部ボリュームへ変わった。
- 古い場所と新しい場所が混在するリスクがあった。
- `WORKING_LOCATION.md`、`AGENTS.md`、`docs/GIT_UNMANAGED_HISTORY.md` で正式場所を固定した。

DevAide反映案:

```text
docs/WORKING_LOCATION_TEMPLATE.md
docs/AGENTS_TEMPLATE.md
docs/SESSION_HANDOFF_TEMPLATE.md
```

追加したい項目:

- 現在の正式作業場所。
- 古い作業場所。
- 編集禁止または参照専用の場所。
- 作業場所変更時に更新する文書。
- 次回AIが最初に確認する場所。

## 推奨バージョン案

```text
v0.10.1-project-structure-launch-readiness
Status: proposal
Change level: Minor
```

理由:

- 既存運用を壊さない追加チェックリスト。
- 初期レビュー、環境不足、公開準備、作業場所変更は多くのプロジェクトで再発しやすい。
- 導入は任意でよい。

## DevAide本体に入れる場合の変更案

追加候補:

```text
docs/PROJECT_STRUCTURE_CONSISTENCY_CHECK.md
docs/LAUNCH_READINESS_CHECKLIST_TEMPLATE.md
docs/versions/2026-05-06_v0.10.1-project-structure-launch-readiness.md
```

変更候補:

```text
docs/PROJECT_START_PRECHECK_TEMPLATE.md
docs/REVIEW_TO_TASKS_TEMPLATE.md
docs/ENVIRONMENT_FALLBACKS.md
docs/SESSION_HANDOFF_TEMPLATE.md
docs/WORKING_LOCATION_TEMPLATE.md
docs/AGENTS_TEMPLATE.md
CHANGELOG.md
```

## 優先度

高:

- Project Structure Consistency Check
- Launch Readiness Checklist

中:

- Environment Fallback Smoke Test
- Working Location Move Protocol

低:

- 既存テンプレートへの全面統合

## 反映判断

現時点ではDevAide本体へ未反映。

別プロジェクトでDevAide反映を行う場合、この文書と `2026-05-06_parallel_visual_asset_proposal.md` を合わせて読む。

