# 2026-05-06 共有カード初回テスト Handoff

## 対象指示書

- `SHARE_CARD_IMAGE_BRIEF.md`

## 確認結果

- 新しい指示書は、X投稿用の結果カード画像を `assets/share-cards-ai-working/` に作成する内容。
- 初回テスト対象は `assets/share-cards-ai-working/RLAG.png`。
- その後、顔が似すぎるリスクが見つかったため、各タイプの既存ポートレートを使う量産テンプレv2へ切り替えた。
- `assets/share-cards-ai-working/{TYPE_CODE}.png` を16タイプ分生成した。
- 全16枚は `1200 x 675 px`。
- `assets/share-cards/` と `assets/share-cards-ai-working/` は存在する。
- 現在のアプリはまだCanvas生成の共有カード保存処理を持っている。
- `assets/share-cards/` は未反映。
- 旧AI生成候補やソース画像は `assets/share-cards-ai-working/` に残している。

## 実行したテスト

- `npm test`: pass
- `npm run build`: pass

## 未確認事項

- アプリ共有セクションへの仮反映。
- スマホ表示で保存画像プレビューが崩れないかの確認。
- X投稿時の実表示確認。
- 人間による量産テンプレv2の最終採用判断。

## 次の手順

1. 人間が `assets/share-cards-ai-working/_contact_sheet.png` と代表プレビューを確認する。
2. 採用ならCodexがアプリ共有セクションに仮反映する。
3. スマホ幅で保存画像プレビューが崩れないか確認する。
4. OKなら `assets/share-cards/` へactive反映する。
