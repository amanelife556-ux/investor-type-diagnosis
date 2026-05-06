# DevAide Report: セッション保護の効果と体感価値のギャップ

作成日: 2026-05-06
作成者: Codex
対象プロジェクト: 投資家タイプ診断
ステータス: レポート / DevAide本体未反映

## 目的

投資家タイプ診断の開発でDevAideがどのように効いたか、そしてユーザーがその効果を体感しにくかった理由を整理する。

この文書は、DevAide本体の改善材料として渡すためのレポートであり、DevAide本体は変更しない。

## 結論

今回のDevAideは、開発を派手に加速させる道具というより、マルチAI開発の事故・迷子・手戻りを減らす「セッション保護」として効いていた。

ただし、その効果はユーザーにほとんど体感されなかった。

理由は、DevAideの価値が以下のような「起きなかった問題」に集中していたため。

- 最新版が迷子にならなかった。
- 作業場所が分裂しなかった。
- working画像がそのまま本番に混ざらなかった。
- Git化前の判断が消えなかった。
- 担当ごとの作業境界が崩れにくかった。
- 公開前チェックが会話だけで流れなかった。

これは、ウイルス対策ソフトが「脅威を防いだ」と言わなければ存在感が出にくい構造に近い。

## 今回DevAideが実際に効いた場面

### 1. 作業場所の固定

正式作業場所を以下に固定した。

```text
/Volumes/My Passport for Mac/development/investor-type-diagnosis
```

関連ファイル:

```text
WORKING_LOCATION.md
AGENTS.md
docs/GIT_UNMANAGED_HISTORY.md
```

効果:

- 古い作業場所と新しい作業場所の混在を抑えた。
- 他担当や次回AIが、どこを触ればよいか判断しやすくなった。

ユーザー体感:

- 低い。
- 迷子にならなかっただけなので、ユーザーには「普通に進んだ」ように見える。

### 2. working / active の分離

画像制作で以下の分離が効いた。

```text
working:
assets/share-cards-ai-working/
assets/share-cards-tone-working/
assets/title-hero-working/

active:
assets/share-cards/
assets/title-hero.webp
public/og-image-v2.png
```

効果:

- 未確認画像がアプリ本番参照に直接入るリスクを下げた。
- 明度調整版、完成版、OGP版の差し替え判断を整理できた。
- 16枚の画像をまとめて反映する運用にできた。

ユーザー体感:

- 中程度。
- 画像差し替えは見えるが、分離運用そのものの価値は見えにくい。

### 3. Git化前の履歴保存

Git管理前から `docs/GIT_UNMANAGED_HISTORY.md` に変更理由を保存した。

効果:

- なぜその判断をしたのかが後から追えた。
- DevAideへの学びを会話ログだけに依存せず残せた。
- Git化後も、初期の判断履歴として機能した。

ユーザー体感:

- 低い。
- 実装画面には出ないため、価値が伝わりにくい。

### 4. レビュー駆動の安全化

レビュー findings を起点に以下を潰した。

- App実装の二重化。
- stylesheet不足。
- 結果画面の共有導線。
- スマホ表示の崩れ。
- iPhone画像保存問題。
- X OGPキャッシュ問題。
- タイトル画像の重さによる表示遅れ。

効果:

- 公開直前の品質問題を段階的に潰せた。
- 「どの問題を直したか」が残った。

ユーザー体感:

- 中程度。
- 実際の修正は見えるが、DevAideが体系的に支えていた感覚は薄い。

### 5. DevAide本体への学びを分離

DevAide本体は直接変更せず、以下に提案として記録した。

```text
docs/devaide_feedback/
```

効果:

- プロダクト開発とDevAide開発を混ぜなかった。
- 別プロジェクトでDevAideに反映しやすい材料になった。

ユーザー体感:

- 低い。
- 後で効くタイプの価値であり、今すぐの体感は小さい。

## DevAide有無の効果見積もり

定量ログは取っていないため、以下は今回の開発を通した推定。

```text
作業場所の混乱削減: 60〜80%
画像差し替えミス削減: 50〜70%
担当間の認識ズレ削減: 40〜60%
レビュー後の手戻り削減: 30〜50%
引き継ぎコスト削減: 50〜70%
全体効率改善: 30〜50%
```

ただし、ユーザーの体感としてはこの改善はほぼ見えていなかった。

体感されにくい理由:

- DevAideが防いだのは「起きなかった事故」だった。
- 進捗、待ち、ブロッカー、保護状態が画面や要約として見えていなかった。
- ユーザーには、Codexや各担当が普通に作業しているように見えた。
- DevAideが何を判断し、何を防いだかを明示する場がなかった。

## ウイルス対策ソフトとの類似

ユーザーから、DevAideの効果は「ウイルス対策ソフトがどれだけ防いだかを可視化する」ようなものではないか、という指摘があった。

これは近い。

ただし、DevAideが目指すべきは押し付けがましい成果アピールではない。

避けたい表示:

```text
DevAideがあなたを守りました！
5件のリスクを防止しました！
今すぐ詳細を見る！
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

必要な時だけ詳細を開ける形がよい。

## 体感価値を出すための改善案

### 案1: Session Health Summary

各セッションの最後、または節目で短い状態サマリーを出す。

例:

```text
Session health: Good

完了:
- 16枚結果カードをactiveへ反映
- build/test通過
- Vercel公開済み

未確認:
- iPhone実機の画像保存
- Xカードキャッシュ反映

保護:
- working画像を本番参照に直接混ぜない運用を維持
- Git化前の判断履歴を保存
```

反映先候補:

```text
docs/SESSION_HEALTH_SUMMARY_TEMPLATE.md
docs/SESSION_HANDOFF_TEMPLATE.md
```

### 案2: Prevented Risk Log

DevAideが防いだ事故を淡々と記録する。

例:

```text
Prevented risks:
- 未確認画像のactive混入を防止
- 古い作業場所への編集を防止
- Git管理前の判断消失を防止
- 公開前のOGP未設定を検知
```

注意:

- 数字を盛らない。
- 自動で「防いだ」と断言しすぎない。
- 可能なら根拠ファイルやレビューfindingに紐づける。

反映先候補:

```text
docs/PREVENTED_RISK_LOG_TEMPLATE.md
docs/DECISION_LOG_TEMPLATE.md
```

### 案3: User-Visible Session Board

マルチAI開発では、ユーザーが状況を見失いやすい。

セッションボードとして以下を見せると、DevAideの価値が体感されやすい。

```text
Visual: 完了 / 16枚反映済み
Logic: 完了 / 48 tests passed
Content: 完了 / 文言調整済み
QA: 要確認 / iPhone保存のみ実機待ち
Publish: 完了 / Vercel公開済み
DevAide: 記録済み / 改善案3件
```

反映先候補:

```text
docs/SESSION_BOARD_TEMPLATE.md
docs/MULTI_AGENT_STATUS_TEMPLATE.md
```

### 案4: Launch Protection Checklist

公開工程では、DevAideの保護対象を明確にする。

今回あとから拾ったもの:

- iPhone画像保存。
- X OGPキャッシュ。
- OGP画像URLのv2化。
- タイトル画像の重さ。
- 本番URLの絶対URL化。
- Vercel/GitHub認証。

反映先候補:

```text
docs/LAUNCH_PROTECTION_CHECKLIST.md
```

含めるべきチェック:

```text
Build/test:
- npm run build
- npm test
- smoke test

Mobile:
- iPhone Safariで画像保存導線確認
- スマホ幅で初回表示確認
- 画像が重すぎない

SNS:
- og:title
- og:description
- og:image absolute URL
- Xキャッシュ対策が必要か
- OGP画像ファイル名をversionedにするか

Deploy:
- GitHub push済み
- Vercel latest deployment確認
- 本番HTML確認
- 主要画像 200 OK
```

## DevAideの位置づけ案

今回の学びから、DevAideの説明は以下が近い。

```text
DevAide is a session protection and coordination layer for multi-AI development.
```

日本語なら:

```text
DevAideは、マルチAI開発のセッション保護・整流装置。
```

避けたい説明:

```text
AI開発を劇的に高速化する魔法のツール
```

より正確な説明:

```text
複数AI/複数担当の開発で、最新版迷子、担当衝突、未確認成果物の混入、引き継ぎ不能を減らすための運用キット。
```

## 推奨バージョン案

```text
v0.10.2-session-health-visibility
Status: proposal
Change level: Minor
```

理由:

- 既存のDevAide運用を壊さない。
- テンプレートとレポートの追加で始められる。
- ユーザー体感価値の不足という重要課題に対応する。

## DevAide本体に入れる場合の変更案

追加候補:

```text
docs/SESSION_HEALTH_SUMMARY_TEMPLATE.md
docs/PREVENTED_RISK_LOG_TEMPLATE.md
docs/SESSION_BOARD_TEMPLATE.md
docs/LAUNCH_PROTECTION_CHECKLIST.md
docs/versions/2026-05-06_v0.10.2-session-health-visibility.md
```

変更候補:

```text
docs/SESSION_HANDOFF_TEMPLATE.md
docs/DECISION_LOG_TEMPLATE.md
docs/AI_START_ROUTER_TEMPLATE.md
CHANGELOG.md
```

## 優先度

高:

- Session Health Summary
- Launch Protection Checklist

中:

- User-Visible Session Board
- Prevented Risk Log

低:

- 数値化ダッシュボード
- 自動スコアリング

## 実装時の注意

- ユーザーに過剰にアピールしない。
- 防いだリスクを盛らない。
- 状態表示は短く、必要な時だけ詳細を開けるようにする。
- 「DevAideがすごい」ではなく「今のセッションが安全に進んでいる」を伝える。
- リスク数や完了数は、可能なら根拠ファイルや実行ログに紐づける。

## 反映判断

現時点ではDevAide本体へ未反映。

別プロジェクトでDevAideへ反映する場合は、このレポートを以下と合わせて読む。

```text
docs/devaide_feedback/2026-05-06_parallel_visual_asset_proposal.md
docs/devaide_feedback/2026-05-06_project_structure_launch_proposal.md
docs/devaide_feedback/2026-05-05_diagnosis_app_learnings.md
```
