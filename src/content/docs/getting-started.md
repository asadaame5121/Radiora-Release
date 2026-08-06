---
title: はじめる
description: Radioraを起動し、最初の思索を書き、アウトラインを育てるまで。
section: Start
order: 2
updated: 2026-08-06
---

## 必要な環境

現在のPoCはWindows版Deno 2.9以上とNode.js/npmを前提にしています。

```powershell
npm install
deno task desktop
```

生成済みbundleを起動するだけなら `deno task desktop:run` を使います。起動できない場合は `deno task desktop:preflight` で環境診断を実行してください。

## 最初の操作

- 本文で `Enter` を押すと同じ階層へ項目を追加します。
- `Tab` / `Shift+Tab` で階層を変更します。
- `Alt+↑` / `Alt+↓` で並べ替えます。
- フォーカス中はMarkdown記号を確認しながら編集し、フォーカスを外すとプレビューに戻ります。
- ヘッダーのクイック入力は配置先を決めずに思索を作ります。

## 閲覧する

ヘッダーの `Outline / Tree` から表示を切り替えます。Treeでは、実時間をX軸にする `Chronology` と、`FROM`系譜の世代をX軸にする `Lineage` を選べます。

表示密度に応じて `Detail / Context / Overview` が切り替わり、Overviewの件数Nodeをクリックすると対象範囲へ拡大します。

## よく使うショートカット

| 操作 | ショートカット |
| --- | --- |
| コマンドパレット | `Ctrl+K` |
| 高度な意味関係編集 | `Ctrl+Shift+L` |
| 内部参照候補 | 本文で `[[` |
| 意味関係の相手候補 | 本文で `@` |

## データの保存場所

データは `%LOCALAPPDATA%\\RadioraV2\\surreal\\main.db` に保存されます。障害調査用にJSONストアで起動する場合は `deno task desktop:json` を使います。
