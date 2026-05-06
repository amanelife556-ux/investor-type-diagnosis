# Decision Log: 昭和社員転生診断

作成日: 2026-05-06
管理者: ユーザー

## 判断一覧

| ID | Date | Decision | Source | Impact | Review needed |
|---|---|---|---|---|---|
| D-001 | 2026-05-06 | 正式作業場所を `/Volumes/My Passport for Mac/development/work-style-diagnosis` に固定 | human | 全作業 | no |
| D-002 | 2026-05-06 | 投資家タイプ診断を参照元にし、社会人タイプ診断として別プロジェクト化 | human / Codex | 構成、文言、画像 | no |
| D-003 | 2026-05-06 | 4軸、16タイプ、12問、タイプコードを診断の核として固定 | human | ロジック、データ、QA | yes |
| D-004 | 2026-05-06 | DevAide `v0.11.0-product-facing-cleanup` を Core Lite / standard-lite でtrial適用 | human / Codex | 運用文書 | yes |
| D-005 | 2026-05-06 | 現時点はCodex単独運用、必要時に Team / multi-ai-full へ上げる | Codex | 実行構成 | yes |
| D-006 | 2026-05-06 | 旧投資家診断文書は社会人タイプ診断の正本として扱わない | Codex | 後続AIの参照順 | no |
| D-007 | 2026-05-06 | 「転生したら昭和の社員だった件」へ大幅転換 | human | コンセプト、16タイプ、結果画面、共有文 | yes |

## D-001 - 正式作業場所の固定

Decision:
- 今後の正式作業場所は `/Volumes/My Passport for Mac/development/work-style-diagnosis` とする。

Reason:
- `development` 配下で継続開発するため。

Do not change:
- 人間確認なしに別ディレクトリへ作業場所を移さない。

## D-002 - 別プロジェクト化

Decision:
- 投資家タイプ診断を構成参照元として使い、社会人タイプ診断は別プロジェクトとして開発する。

Reason:
- UI/共有カード/診断ロジックの実績を活かしつつ、テーマと文言を分離するため。

## D-003 - 診断仕様の固定

Decision:
- 4軸、16タイプ、12問、タイプコードは人間確認なしに変更しない。

Reason:
- 診断の核であり、結果文言、テスト、共有カードすべてに影響するため。

## D-004 - DevAide trial適用

Decision:
- DevAide `v0.11.0-product-facing-cleanup` を `Core Lite / standard-lite` としてtrial適用する。

Reason:
- 初期段階では中核文書だけで十分だが、後続AIが迷わないように作業場所、原則、判断ログ、handoffを固定するため。

## D-005 - 実行構成

Decision:
- 現時点は `codex-only`。
- 複数AI、16枚カード、公開前QAが本格化したら `hybrid-ready` または `Team / multi-ai-full` へ上げる。

## D-006 - 旧文書の扱い

Decision:
- 投資家タイプ診断由来の古い文書、画像制作指示、共有カードグループ文書は、社会人タイプ診断の正本として扱わない。

Reason:
- コピー元の運用文書が残っていると、後続AIが投資家診断の仕様へ戻してしまうリスクがあるため。

## D-007 - 昭和社員転生診断への大幅転換

Decision:
- 真面目な社会人タイプ診断から、バラエティ系ネタ診断「転生したら昭和の社員だった件」へ方向転換する。
- 診断名/共有用名称は「昭和社員転生診断」。
- メイン結果は16タイプ固定。
- サブ罪状、令和NGタグ、令和NG濃度、令和への帰還メモを結果に追加する。

Reason:
- SNSや飲み会で共有されやすい、笑える診断体験へ寄せるため。

Do not change:
- 現代の本人を直接攻撃しない。
- 現実の人事評価、適職診断、能力診断に見せない。
- 16タイプ以上へ増やさず、サブ罪状とタグでバリエーションを出す。
