# Radiora-Release

Radioraの公式ドキュメントサイトです。Astroで静的生成し、Cloudflare Workers Static Assetsから配信します。

## 開発

```powershell
npm install
npm run dev
```

静的ビルドとローカルプレビューは次の通りです。

```powershell
npm run build
npm run preview
```

## デプロイ

Wranglerは `dist/` をWorkers Static Assetsとして配信します。GitHub Actionsからデプロイする場合は、リポジトリSecretsに次を設定してください。

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

`wrangler.jsonc` の `name`、ドメイン、環境別設定はCloudflare側の運用に合わせて変更します。

## コンテンツ

ドキュメント本文は `src/content/docs/` にあります。Frontmatterの `section` と `order` がサイドバーの分類・順序を決めます。
