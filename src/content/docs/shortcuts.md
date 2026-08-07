---
title: ショートカット一覧
description: 現時点で利用できるキーバインディングの一覧。
section: Reference
order: 12
updated: 2026-08-06
---

この表はRadiora本体の `deno task docs:shortcuts` で生成されます。ドキュメント側では `npm run sync:shortcuts` を実行して更新します。

<!-- shortcuts:start -->

## コマンドパレットのショートカット

| 操作 | ショートカット |
| --- | --- |
| クイック入力 | `Ctrl+Shift+Enter` |
| 絞り込み表示 | `Ctrl+Shift+H` |
| 長文編集モード | `Ctrl+Shift+E` |
| 栞 | `Ctrl+Shift+B` |
| 意味関係を追加 | `Ctrl+Shift+L` |
| Queryを実行 | `Ctrl+Shift+Q` |

## アウトラインの編集

| 操作 | キー |
| --- | --- |
| 同じ階層に項目を追加 | `Enter` |
| 本文内で改行 | `Shift+Enter` |
| 子階層へ移動 | `Tab` |
| 親階層へ移動 | `Shift+Tab` |
| 上へ並べ替え | `Alt+↑` |
| 下へ並べ替え | `Alt+↓` |
| 内部参照候補 | `本文で [[` |
| 意味関係の相手候補 | `本文で @` |
| コマンドパレット | `Ctrl+K` |
| TreeとOutlineを切り替え | `Space` |
| ヘルプ | `F1 / Ctrl+Shift+/` |

> この表は `deno task docs:shortcuts` で生成されます。編集は各定義側（コマンド系は `src/ui/command_service.ts`、編集系は `src/shared/editor_bindings.ts`）で行ってください。

<!-- shortcuts:end -->
