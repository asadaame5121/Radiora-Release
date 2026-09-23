---
title: ショートカット一覧
description: 現時点で利用できるキーバインディングの一覧。
section: Reference
order: 12
updated: 2026-09-23
---

この表はRadiora本体の現行コマンド・編集キーバインディングから生成されます。アプリの定義変更に合わせて同期してください。

<!-- shortcuts:start -->

## コマンドパレットのショートカット

| 操作 | ショートカット |
| --- | --- |
| クイック入力 | `Ctrl+Shift+Enter` |
| ここだけ表示 | `Ctrl+Shift+H` |
| 原稿として開く | `Ctrl+Shift+E` |
| 栞 | `Ctrl+Shift+B` |
| 関連を追加 | `Ctrl+Shift+L` |
| 検索を実行 | `Ctrl+Shift+Q` |

## アウトラインの編集

| 操作 | キー |
| --- | --- |
| 同じ階層に項目を追加 | `Enter` |
| 本文内で改行 | `Shift+Enter` |
| 子階層へ移動 | `Tab` |
| 親階層へ移動 | `Shift+Tab` |
| 上へ並べ替え | `Alt+↑` |
| 下へ並べ替え | `Alt+↓` |
| 項目へのリンク候補 | `本文で [[` |
| 関連先候補 | `本文で @` |
| コマンドパレット | `Ctrl+K` |
| TreeとOutlineを切り替え | `Space` |
| ヘルプ | `F1 / Ctrl+Shift+/` |

> この表は `deno task docs:shortcuts` で生成されます。編集は各定義側（コマンド系は `src/ui/command_service.ts`、編集系は `src/shared/editor_bindings.ts`）で行ってください。

<!-- shortcuts:end -->
