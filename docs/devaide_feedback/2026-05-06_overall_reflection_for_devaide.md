# DevAide Overall Reflection: 投資家タイプ診断から反映すること

作成日: 2026-05-06
作成者: Codex
対象プロジェクト: 投資家タイプ診断
ステータス: DevAide本体未反映 / 総合振り返り

## 目的

投資家タイプ診断アプリの開発全体を振り返り、DevAideへ反映すべき内容を優先度つきで整理する。

この文書は、個別提案メモを読む前に全体像を把握するための入口として使う。

## 結論

今回DevAideに反映すべき最大の学びは、DevAideを「開発を速くする道具」としてではなく、マルチAI開発の「セッション保護・整流装置」として設計した方がよい、ということ。

DevAideが効いたのは、目に見える派手な成果よりも以下のような事故を防いだ部分だった。

- 最新成果物が迷子になる。
- active成果物とworking成果物が混ざる。
- 実装担当、レビュー担当、方針担当の役割が混線する。
- 作業場所が分裂する。
- Git管理前の判断が消える。
- 画像、文言、公開準備、SNS導線が会話ログの中で流れる。
- 公開前の確認項目が抜ける。

ただし、この価値はユーザーに体感されにくい。したがってDevAideには、作業を邪魔しない軽量な「可視化」が必要。

## 反映優先度

### Priority 1: すぐ入れるべき

```text
SESSION_BOARD_TEMPLATE.md
SESSION_HEALTH_SUMMARY_TEMPLATE.md
LAUNCH_READINESS_CHECKLIST_TEMPLATE.md
PROJECT_STRUCTURE_CONSISTENCY_CHECK.md
WORKING_LOCATION_TEMPLATE.md
```

理由:

- 今回の開発で実際に効果が大きかった。
- 多くのプロジェクトで再発しやすい。
- 既存運用を壊さず、テンプレート追加で始められる。
- ユーザーが「次は？」と聞いた時に価値が出る。

### Priority 2: 早めに入れるべき

```text
PARALLEL_VISUAL_ASSET_TEMPLATE.md
ASSET_QA_CHECKLIST.md
PREVENTED_RISK_LOG_TEMPLATE.md
ENVIRONMENT_FALLBACKS.md
DEVAIDE_FEEDBACK_TEMPLATE.md
```

理由:

- 画像やSNSカード制作があるプロジェクトで強く効く。
- DevAideの価値を後から検証できる。
- 正式環境が整っていない初期開発でも安全に進めやすくなる。

### Priority 3: 後で統合する

```text
CHANGE_INTAKE_TEMPLATE.md
DECISION_LOG_TEMPLATE.md
AI_START_ROUTER_TEMPLATE.md
SESSION_HANDOFF_TEMPLATE.md
```

理由:

- 既存テンプレートへ思想を反映する必要がある。
- いきなり大改修するとDevAide本体の構造がぼやける。
- Priority 1/2を入れてから、使い方を見て統合する方がよい。

## 開発フェーズ別の反映案

### 1. 開発開始時

必要な保護:

- 作業場所を固定する。
- entrypointとsource of truthを確認する。
- 担当AIの責任範囲を明確にする。
- Git管理前なら、判断履歴の仮置き場所を作る。

反映候補:

```text
WORKING_LOCATION_TEMPLATE.md
PROJECT_STRUCTURE_CONSISTENCY_CHECK.md
SESSION_BOARD_TEMPLATE.md
```

今回の根拠:

- 作業場所が外部ボリュームへ移動した。
- `src/main.tsx` と `src/App.tsx` の二重実装が初期リスクだった。
- READMEと実行入口の整合性が重要だった。

### 2. 並行作業時

必要な保護:

- 誰が何を担当しているかを見える化する。
- active成果物とworking成果物を分ける。
- 正本指示書を1つに固定する。
- 古い指示書は「背景資料 / 非正本」と明記する。

反映候補:

```text
SESSION_BOARD_TEMPLATE.md
PARALLEL_VISUAL_ASSET_TEMPLATE.md
ASSET_QA_CHECKLIST.md
DECISION_LOG_TEMPLATE.md
```

今回の根拠:

- 画像制作を並行化しようとして品質劣化が起きた。
- 16枚の結果カードでは、基準品質画像、正本指示書、working/active分離が重要だった。
- ビジュアル、ロジック、コンテンツ、QAの役割分担が必要だった。

### 3. UX/コンテンツ調整時

必要な保護:

- 良い思いつきをすぐ実装せず、Change Intakeへ置く。
- 重要UIは情報設計から見直す。
- 表現変更が複数箇所に残らないようにする。
- ユーザーの判断とAIの提案を分ける。

反映候補:

```text
CHANGE_INTAKE_TEMPLATE.md
DECISION_LOG_TEMPLATE.md
AI_START_ROUTER_TEMPLATE.md
SESSION_BOARD_TEMPLATE.md
```

今回の根拠:

- 結果画面の再構成、相性追加、タイプ名変更、投資法表記追加が段階的に入った。
- 「凝った名前」にした結果、投資タイプが分かりにくくなる問題が出た。
- 軸ラベル変更後に旧表現がsummaryへ残るなど、文言整合性がレビュー対象になった。

### 4. 画像/アセット制作時

必要な保護:

- 画像仕様と画面表示仕様を同じ指示書に入れる。
- 実表示サイズ、スマホ表示、SNS投稿時の見え方を確認する。
- 既存画像の貼り込みだけにならないようにする。
- 画質、明度、OGP、WebP最適化を分けて扱う。

反映候補:

```text
PARALLEL_VISUAL_ASSET_TEMPLATE.md
ASSET_QA_CHECKLIST.md
LAUNCH_READINESS_CHECKLIST_TEMPLATE.md
```

今回の根拠:

- 16タイプ画像、結果カード、タイトル画像、OGP画像が別用途だった。
- 画像担当の成果物が良く、アプリ側はその良さを活かす方向に変わった。
- 画像のリサイズでは画質が落ち、元画像を活かす表示設計が必要になった。
- Xで古い画像が表示されるOGPキャッシュ問題が起きた。

### 5. テスト/公開前

必要な保護:

- build/testだけでなく、スマホ実機、SNS、OGP、免責文を確認する。
- 公開URLとローカルURLを混同しない。
- iPhone特有の画像保存導線を確認する。
- 公開後にXでどう見えるかまで見る。

反映候補:

```text
LAUNCH_READINESS_CHECKLIST_TEMPLATE.md
SESSION_HEALTH_SUMMARY_TEMPLATE.md
ENVIRONMENT_FALLBACKS.md
```

今回の根拠:

- Vercel + GitHub連携で公開した。
- X投稿カードに古い画像が出る問題があった。
- iPhoneで画像保存ボタンが期待通りに動かない問題があった。
- 金融テーマなので免責文確認が必要だった。

### 6. セッション終了/引き継ぎ時

必要な保護:

- 今どこまで終わったかを短く残す。
- 未確認事項と次アクションを分ける。
- DevAideが防いだ混乱を記録する。
- DevAide本体への学びをプロジェクト側に残す。

反映候補:

```text
SESSION_HEALTH_SUMMARY_TEMPLATE.md
SESSION_BOARD_TEMPLATE.md
PREVENTED_RISK_LOG_TEMPLATE.md
DEVAIDE_FEEDBACK_TEMPLATE.md
SESSION_HANDOFF_TEMPLATE.md
```

今回の根拠:

- DevAide本体を直接変更せず、`docs/devaide_feedback/` に学びを蓄積した。
- ユーザーから「DevAideの効果が体感できない」という重要なフィードバックがあった。
- セッション保護の価値を見える化する必要が明確になった。

## DevAideの価値定義

今回の経験から、DevAideの説明は以下が近い。

```text
DevAideは、マルチAI開発のセッション保護・整流装置。
```

避けたい説明:

```text
AI開発を劇的に高速化する魔法のツール。
```

より正確な説明:

```text
複数AI/複数担当の開発で、最新版迷子、担当衝突、未確認成果物の混入、引き継ぎ不能を減らすための運用キット。
```

## ユーザー体感を出すための設計

DevAideの効果は、起きなかった事故に集中するため、そのままだとユーザーには見えない。

ただし、成果アピールが強すぎると邪魔になる。

避けたい表示:

```text
DevAideが5件のリスクを防ぎました！
```

望ましい表示:

```text
Session health: Good
未解決リスク: 1
作業衝突: 0
最新版不明: 0
引き継ぎ記録: 更新済み
公開前チェック: 7/8 完了
```

また、ユーザーが「次は？」と聞いた時には、以下のように返せるとよい。

```text
次にやること:
1. スマホ実機確認
2. X投稿用OGP確認
3. 免責文確認

ブロッカー:
- なし

DevAideが守っていること:
- active画像とworking画像を混ぜない
- 公開前チェックを会話ログだけにしない
```

## トークン消費への影響

DevAideは、短期的には文書を読む/更新するためのトークンを増やすことがある。

ただし、中期以降は以下を減らす。

- 作業場所の再確認。
- 最新ファイル探索。
- 役割分担の説明し直し。
- 画像/指示書の正本確認。
- 公開前チェックの思い出し。
- 引き継ぎ時の文脈復元。

今回の体感としては、トークンを劇的に節約したというより、迷子化による無駄な再探索を減らした。

DevAide本体に入れるなら、トークン節約を主張しすぎず、以下のように表現するのがよい。

```text
DevAideは、文脈復元と再探索に使われるトークンを減らす。
ただし、導入直後は記録コストが増えるため、短期では増える場合がある。
```

## 推奨する次バージョン構成

### v0.10.0-session-board-and-launch-protection

追加:

```text
docs/SESSION_BOARD_TEMPLATE.md
docs/SESSION_HEALTH_SUMMARY_TEMPLATE.md
docs/LAUNCH_READINESS_CHECKLIST_TEMPLATE.md
docs/PROJECT_STRUCTURE_CONSISTENCY_CHECK.md
docs/WORKING_LOCATION_TEMPLATE.md
docs/DEVAIDE_FEEDBACK_TEMPLATE.md
docs/versions/2026-05-06_v0.10.0-session-board-and-launch-protection.md
```

変更:

```text
docs/SESSION_HANDOFF_TEMPLATE.md
docs/AI_START_ROUTER_TEMPLATE.md
docs/DECISION_LOG_TEMPLATE.md
docs/CHANGE_INTAKE_TEMPLATE.md
CHANGELOG.md
README.md
```

Park:

```text
docs/PARALLEL_VISUAL_ASSET_TEMPLATE.md
docs/ASSET_QA_CHECKLIST.md
docs/PREVENTED_RISK_LOG_TEMPLATE.md
docs/ENVIRONMENT_FALLBACKS.md
```

理由:

- まずは汎用性が高いSession Board、Health Summary、Launch Readinessを入れる。
- Visual Asset系は有用だが、画像制作がないプロジェクトでは重いので次版に分けてもよい。
- Prevented Risk Logは概念として有用だが、過剰アピールにならない設計が必要。

## DevAide開発側への依頼文

```md
投資家タイプ診断アプリ開発の振り返りから、DevAideに以下を反映したいです。

DevAideは「開発を劇的に速くするツール」よりも、マルチAI開発におけるセッション保護・整流装置として効いていました。

今回特に効果があったのは、作業場所の固定、active/working成果物の分離、担当AIの役割整理、公開前チェック、Git化前の判断履歴保存です。一方で、これらは「起きなかった事故」なのでユーザーには体感されにくいことも分かりました。

まずは以下のテンプレート追加を検討してください。

- SESSION_BOARD_TEMPLATE.md
- SESSION_HEALTH_SUMMARY_TEMPLATE.md
- LAUNCH_READINESS_CHECKLIST_TEMPLATE.md
- PROJECT_STRUCTURE_CONSISTENCY_CHECK.md
- WORKING_LOCATION_TEMPLATE.md
- DEVAIDE_FEEDBACK_TEMPLATE.md

特にSession Boardは、目的、現在の状態、AI担当、ブロッカー、次アクション、DevAideが防いだ混乱を1枚で見えるようにするものです。ユーザーが「次は？」と聞いた時や、セッション引き継ぎ前に提示できると有用です。

参考資料:
- docs/devaide_feedback/2026-05-05_diagnosis_app_learnings.md
- docs/devaide_feedback/2026-05-06_project_structure_launch_proposal.md
- docs/devaide_feedback/2026-05-06_parallel_visual_asset_proposal.md
- docs/devaide_feedback/2026-05-06_session_health_visibility_report.md
- docs/devaide_feedback/2026-05-06_session_board_template_note.md
- docs/devaide_feedback/2026-05-06_overall_reflection_for_devaide.md
```

## 既存メモとの対応

詳細は以下に分かれている。

```text
docs/devaide_feedback/2026-05-05_diagnosis_app_learnings.md
docs/devaide_feedback/2026-05-06_project_structure_launch_proposal.md
docs/devaide_feedback/2026-05-06_parallel_visual_asset_proposal.md
docs/devaide_feedback/2026-05-06_session_health_visibility_report.md
docs/devaide_feedback/2026-05-06_session_board_template_note.md
```

この文書は、それらをDevAide次版へ反映するための総合入口として扱う。

## 最終判断

DevAideへ最初に反映するなら、以下の順番がよい。

1. `SESSION_BOARD_TEMPLATE.md`
2. `SESSION_HEALTH_SUMMARY_TEMPLATE.md`
3. `LAUNCH_READINESS_CHECKLIST_TEMPLATE.md`
4. `PROJECT_STRUCTURE_CONSISTENCY_CHECK.md`
5. `WORKING_LOCATION_TEMPLATE.md`
6. `DEVAIDE_FEEDBACK_TEMPLATE.md`

その後、画像制作系プロジェクト向けに以下を追加する。

1. `PARALLEL_VISUAL_ASSET_TEMPLATE.md`
2. `ASSET_QA_CHECKLIST.md`
3. `PREVENTED_RISK_LOG_TEMPLATE.md`
4. `ENVIRONMENT_FALLBACKS.md`
