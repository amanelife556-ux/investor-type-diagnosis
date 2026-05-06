# Type Portraits

結果画面用のタイプ別ポートレートです。

このディレクトリは、アプリが実際に参照する active 画像置き場です。
画像作成担当はこのディレクトリを直接上書きせず、高解像度の生成元画像を `assets/type-portraits-ai-working/` に保存します。
Codexまたは人間が確認した後、Codexがこのディレクトリへ反映します。

現在の元画像:

```text
assets/type-portraits-ai-working/
1536 x 1024
3:2 landscape card
```

現在の active 画像サイズ:

```text
384 x 256
```

今後の高解像度生成元仕様:

```text
1536 x 1024
3:2 landscape card
```

運用:

- 画像作成担当の納品先は `assets/type-portraits-ai-working/` とする。
- 画像作成担当は `assets/type-portraits/` を直接上書きしない。
- Codexまたは人間が確認した後、Codexが必要に応じて仕様サイズへ変換して active 画像へ反映する。
- 表示サイズはアプリ側のCSSで調整する。
- active 画像のサイズを変更した場合は、結果画面、ファーストビュー、`assets/investor-archetypes.png` の見え方も確認する。

## グリッド対応

| row | col 1 | col 2 | col 3 | col 4 |
|---|---|---|---|---|
| 1 | `SLPI.png` | `SLPG.png` | `SLAI.png` | `SLAG.png` |
| 2 | `STPI.png` | `STPG.png` | `STAI.png` | `STAG.png` |
| 3 | `RLPI.png` | `RLPG.png` | `RLAI.png` | `RLAG.png` |
| 4 | `RTPI.png` | `RTPG.png` | `RTAI.png` | `RTAG.png` |

## 注意

- ファイル名は診断コードと一致させる。
- 診断コードを変えずに画像だけ差し替える場合も、この対応表を維持する。
- 旧画像は一時退避として `assets/type-portraits-original/` に保存している。
- 再生成確認用の出力は `assets/type-portraits-regenerated/` に保存している。
- 結果カード向けの安全フレーム確認用出力は `assets/type-portraits-safe/` に保存している。
