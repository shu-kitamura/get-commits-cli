# get-commits-cli

GitHub API（Search Commits）を使って、自分のコミット履歴を取得するCLIツールです。

## 機能

- 直近30日間の自分のコミットを取得（author + committer-date）
- パブリック/プライベートリポジトリ両方に対応
- 日時はJST（日本標準時）形式で出力
- JSON形式で結果を出力

## 出力形式

```json
[
  {
    "date": "2026-01-30T00:01:17.000+09:00",
    "repository": "owner/repo",
    "sha": "abc123...",
    "message": "コミットメッセージ",
    "url": "https://github.com/owner/repo/commit/abc123..."
  }
]
```

## 必要条件

- Node.js 18以上（fetchがビルトインで必要）
- GitHub Personal Access Token

## インストール

```bash
git clone https://github.com/your-username/get-commits-cli.git
cd get-commits-cli
npm install
```

## 使い方

### 1. GitHub Personal Access Token を設定

```bash
export GITHUB_TOKEN="your_github_token"
```

トークンには以下のスコープが必要です：

- `repo`（プライベートリポジトリのコミットを取得する場合）

### 2. 実行

```bash
npm run start
```

または

```bash
npx tsx src/cli/main.ts
```

### 出力例

```bash
npm run start > commits.json
```

## 開発

### 依存関係

```bash
npm install
```

### TypeScript の型チェック

```bash
npx tsc --noEmit
```

### テスト

```bash
npm test
```

### ビルド

```bash
npm run build
```

## ライセンス

MIT
