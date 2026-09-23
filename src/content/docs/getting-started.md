---
title: はじめる
description: Radioraを起動し、最初の項目を書いて、アウトラインを使い始めるまでの手順。
section: Start
order: 2
updated: 2026-09-23
---

## 必要な環境

開発環境はWindowsです。Windows版Deno 2.9以上とNode.js/npmが必要で、コマンドはPowerShellまたはNushellで実行してください。WSLやbashからは起動できません。配布版はWindows x86_64とLinux x86_64を利用できます。

## 起動する

```powershell
npm install
deno task desktop
```

`deno task desktop` は環境診断、フロントエンドのビルド、bundle生成を行ってからアプリを起動します。生成済みのbundleだけを起動する場合は次を使います。

```powershell
deno task desktop:run
```

アプリを起動したまま再度ビルドすると、生成先がロックされて失敗します。その場合は先にアプリのウィンドウを閉じてください。

起動すると、最初に起動状態が表示され、その後ローカルデータを読み込みます。前回正常に読み込めたアウトラインがある場合は、起動スナップショットからアウトラインと選択位置を先行表示します。初期化に失敗した場合はウィンドウ内に原因と再試行ボタンが表示されます。

## 配布物から起動する

Windows版はZip、Linux版はtar.gzで配布します。ベータ版のため、次を実行します。

1. リリースページからOSに合う配布物をダウンロードし、任意のフォルダへ展開します。
2. Windowsでは展開先の `Radiora-v2-*.exe` を、Linuxでは展開先の実行ファイルを起動します。
3. 初回は起動までに時間がかかることがあります。起動状態の表示から、ローカルデータの読み込みまで待ちます。

起動ファイルの名前は、バンドルに含まれるランチャーの形式（`.exe` または `.bat`）によって異なります。

> [!note] 起動の保証について
> アプリは開発中のDeno Desktop上で動作するため、環境によっては起動できない場合があります。起動しない場合は、以下の「起動できない場合」の手順に沿って確認してください。

データはアプリ本体のフォルダではなくローカルのアプリデータ領域に保存されるため、配布物のフォルダを削除してもデータは消えません。

## 起動できない場合

1. `deno task desktop:preflight` を実行し、環境診断を確認します。
2. `Deno Desktop requires Deno 2.9.0 or newer` と表示される場合は、Denoを更新してください。
3. Windowsでは詳細な記録が `%LOCALAPPDATA%\RadioraV2\logs\startup.log` にJSONL形式で保存されます。起動、RPC、静的ファイル、ローカルDBのイベントと処理時間を確認できます。原因と再試行ボタンがウィンドウに表示された場合は、このログを確認してください。

WindowsとWSLで同じ `node_modules` を共有しないでください。ネイティブ依存がOSごとに異なるため、bundleのビルドと実行はWindows PowerShell側で `npm install` した依存を使ってください。

## 最初の操作

- 項目の本文で `Enter` を押すと、同じ階層に項目を追加します。
- `Shift+Enter` で本文内に改行を入力します。
- `Tab` / `Shift+Tab` で階層を変更します。
- `Alt+↑` / `Alt+↓` で並べ替えます。
- 本文はフォーカスするとMarkdownを確認しながら編集でき、フォーカスを外すとプレビューに戻ります。
- 画面上部のクイック入力は、配置先を決めずに項目を作ります。作成した項目は `未配置箱` から確認できます。
- `F1` または `Ctrl+Shift+/` を押すと、アプリ内Helpで操作を確認できます。Helpでは現在版とGitHub Releasesの最新版も確認でき、更新がある場合はリリースページへのリンクが表示されます。

## 閲覧する

ヘッダーの `Outline / Tree` から表示を切り替えます。Treeの`Chronology`では作成日時と、インスペクターで設定した歴史上の時点・期間を使う年表を選べます。`Lineage`は世代を進める設定の関係型に沿って表示します。詳しい操作は [ツリービュー](/docs/tree-view) を参照してください。

## ショートカット

`F1` または `Ctrl+Shift+/` でアプリ内Help、`Ctrl+K` でコマンドパレットを開けます。現在利用できるキーバインディングの一覧は[ショートカット一覧](/docs/shortcuts)を参照してください。

## データの保存場所

Windowsでは通常データを `%LOCALAPPDATA%\RadioraV2\turso\radiora.db`（SQLite）に、ログを `%LOCALAPPDATA%\RadioraV2\logs\` に保存します。旧版のSurrealDBデータ `%LOCALAPPDATA%\RadioraV2\surreal\main.db` がある場合は、初回起動前に `deno task storage:migrate:legacy` を実行してください。移行タスクは元データを変更せずにバックアップを作成し、SQLiteへ移行します。未移行データが残っていると通常起動は停止します。

障害調査用にJSONストアで起動する場合は `deno task desktop:json`、生成済みbundleでは `deno task desktop:run:json` を使います。JSONストアは通常の保存先ではなく手動フォールバックです。
