# 投稿カード並行制作 担当割り振り

## 使い方

画像担当を4つに分けて、各担当へ該当するGroup指示書を渡してください。

各Group指示書には、担当ファイル、文言、キャラ方針、画像作成ルール、プロンプト雛形を入れています。

全体の詳細ルールは以下を正とします。

```text
SHARE_CARD_PARALLEL_WORK_BRIEF.md
```

注意:

- `SHARE_CARD_IMAGE_BRIEF.md` は初期テスト時の背景資料です。
- 並行制作では `SHARE_CARD_PARALLEL_WORK_BRIEF.md` を必ず優先してください。
- 品質劣化を避けるため、`SLPG-hybrid` / `RLAG` 品質、貼り込み禁止、同じ顔の着せ替え禁止、タイプごとの顔・小物差別化を守ってください。

## 分担

| Group | 担当 | 指示書 |
|---|---|---|
| A | SLPI / SLPG / SLAI / SLAG | `docs/share-card-groups/GROUP_A_SL.md` |
| B | STPI / STPG / STAI / STAG | `docs/share-card-groups/GROUP_B_ST.md` |
| C | RLPI / RLPG / RLAI / RLAG | `docs/share-card-groups/GROUP_C_RL.md` |
| D | RTPI / RTPG / RTAI / RTAG | `docs/share-card-groups/GROUP_D_RT.md` |

## 全Group共通

- 1200 x 675 px / PNG / sRGB。
- 納品先は `assets/share-cards-ai-working/`。
- `assets/share-cards/` は直接上書きしない。
- 各タイプの参照キャラは `assets/type-portraits-ai-working/{TYPE_CODE}.png`。
- 基準品質は `assets/share-cards-ai-working/SLPG-hybrid.png` と `assets/share-cards-ai-working/RLAG.png`。
- 既存キャラをそのまま貼るのではなく、完成カードとして自然に描き直す。
- 同じ顔の着せ替えにしない。
- 文言は完全一致。余計な可読文字を追加しない。

## レビュー順

1. 各Groupが4枚を `assets/share-cards-ai-working/` に置く。
2. 可能なら `390w` プレビューも作る。
3. Codex/人間が、サイズ、誤字、スマホ縮小、世界観、顔の差別化を確認する。
4. OKの画像だけCodexが `assets/share-cards/` へ反映する。
