# My Portfolio

<!-- CI/CD & Code Quality -->

[![CI](https://github.com/yellow-seed/my-portfolio/workflows/CI/badge.svg)](https://github.com/yellow-seed/my-portfolio/actions/workflows/ci.yml)
[![Storybook](https://github.com/yellow-seed/my-portfolio/workflows/Build%20and%20Deploy%20Storybook/badge.svg)](https://github.com/yellow-seed/my-portfolio/actions/workflows/storybook.yml)
[![Actionlint](https://github.com/yellow-seed/my-portfolio/workflows/Actionlint/badge.svg)](https://github.com/yellow-seed/my-portfolio/actions/workflows/actionlint.yml)

<!-- Project Info -->

[![License](https://img.shields.io/github/license/yellow-seed/my-portfolio)](https://github.com/yellow-seed/my-portfolio/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/yellow-seed/my-portfolio)](https://github.com/yellow-seed/my-portfolio/commits/main)

<!-- Repository Activity -->

[![GitHub stars](https://img.shields.io/github/stars/yellow-seed/my-portfolio)](https://github.com/yellow-seed/my-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yellow-seed/my-portfolio)](https://github.com/yellow-seed/my-portfolio/network/members)
[![GitHub issues](https://img.shields.io/github/issues/yellow-seed/my-portfolio)](https://github.com/yellow-seed/my-portfolio/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/yellow-seed/my-portfolio)](https://github.com/yellow-seed/my-portfolio/pulls)

React + TypeScript + Vite で構築されたポートフォリオサイトです。

## デモ・リンク

| リンク | 説明 |
|--------|------|
| [Storybook](https://yellow-seed.github.io/my-portfolio/) | コンポーネントカタログ |
| [Production](https://my-portfolio.yellow-seed.workers.dev) | デプロイ済みのポートフォリオ |

## 概要

このリポジトリは、React と TypeScript を使用したモダンなポートフォリオサイトです。Tailwind CSS と shadcn/ui を活用したUIコンポーネントを、Storybook で管理しています。

## 技術スタック

| カテゴリ | 技術 |
|----------|------|
| フレームワーク | React 19 |
| 言語 | TypeScript |
| ビルドツール | Vite |
| スタイリング | Tailwind CSS |
| UIコンポーネント | shadcn/ui |
| ルーティング | React Router v7 |
| コンポーネント開発 | Storybook |
| テスト | Vitest, Playwright |
| Linter | ESLint |
| パッケージマネージャー | pnpm |

## ディレクトリ構造

```bash
my-portfolio/
├── .github/
│   ├── actions/          # 再利用可能なGitHub Actions
│   ├── workflows/        # CI/CDワークフロー
│   ├── ISSUE_TEMPLATE/   # Issueテンプレート
│   └── PULL_REQUEST_TEMPLATE.md
├── .claude/              # Claude Code設定
├── .storybook/           # Storybook設定
├── src/
│   ├── components/       # 再利用可能なUIコンポーネント
│   │   └── ui/           # shadcn/uiコンポーネント
│   ├── pages/            # ページコンポーネント
│   ├── layouts/          # レイアウトコンポーネント
│   ├── headers/          # ヘッダーコンポーネント
│   ├── stories/          # Storybookストーリー
│   ├── styles/           # グローバルスタイル
│   ├── lib/              # ユーティリティ関数
│   └── assets/           # 静的アセット
├── public/               # 公開静的ファイル
└── docs/                 # ドキュメント
```

## セットアップ

### 必要条件

- Node.js >= 22.0.0
- pnpm

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/yellow-seed/my-portfolio.git
cd my-portfolio

# 依存関係のインストール
pnpm install
```

### Docker 環境のセットアップ

Docker を使用してローカル開発環境を構築できます。Node.js や pnpm のバージョン差異を気にせずに動作します。

```bash
# 開発サーバーの起動
docker compose up dev

# Storybook の起動
docker compose up storybook

# 両方同時に起動
docker compose up
```

コンテナ内でコマンドを実行する場合：

```bash
docker compose exec dev pnpm run lint
docker compose exec dev pnpm run build
```

## 開発

### 開発サーバーの起動

```bash
pnpm dev
```

### Storybookの起動

```bash
pnpm storybook
```

### ビルド

```bash
# 本番ビルド
pnpm build

# Storybookビルド
pnpm build-storybook
```

### Lint

```bash
pnpm lint
```

## コンポーネントの追加

shadcn/ui コンポーネントを追加する場合：

```bash
pnpm dlx shadcn@latest add {component-name}
```

## ライセンス

[MIT License](LICENSE)
