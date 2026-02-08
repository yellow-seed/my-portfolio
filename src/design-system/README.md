# Claude-inspired Design System

このデザインシステムは、ClaudeのブランドカラーとUIデザインからインスピレーションを受けて作成されています。Figmaとの互換性を重視し、CSS変数とTailwind CSSのカスタムカラーで実装されています。

## 特徴

- **Claudeの色味**: 温かみのあるオレンジ・コーラル系をメインカラーに採用
- **Figma互換**: CSS変数で定義し、Figmaのデザイントークンとして使用可能
- **Tailwind統合**: すべてのカラーはTailwindのユーティリティクラスとして使用可能
- **TypeScript対応**: 型安全なカラーパレット定義

## カラーパレット

### Primary Colors (メインブランドカラー)

Claudeの象徴的な温かみのあるオレンジ色です。

```tsx
// Tailwind classes
bg-primary-500  // メインのブランドカラー #F97316
bg-primary-600  // ホバー状態
bg-primary-700  // アクティブ状態

// CSS variables
var(--color-primary-500)
var(--color-brand)
```

### Secondary Colors (セカンダリー)

柔らかいコーラル・ピーチトーンです。

```tsx
bg - secondary - 500; // #E8825E
```

### Neutral Colors (ニュートラル)

温かみのあるグレースケールです。テキストや背景に最適です。

```tsx
text - neutral - 900; // メインテキスト #1C1917
text - neutral - 600; // サブテキスト #57534E
bg - neutral - 50; // 背景 #FAFAF9
border - neutral - 200; // ボーダー #E7E5E4
```

### Accent Colors (アクセント)

補色のブルートーンです。リンクやアクションに使用します。

```tsx
bg - accent - 500; // #0EA5E9
```

### Semantic Colors (意味的な色)

#### Success (成功)

```tsx
bg - success - 500; // #22C55E
```

#### Warning (警告)

```tsx
bg - warning - 500; // #F59E0B
```

#### Error (エラー)

```tsx
bg - error - 500; // #EF4444
```

## 使用方法

### 1. Tailwind CSSで使用

```tsx
// ボタンコンポーネント
<button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg">
  Click me
</button>

// カードコンポーネント
<div className="bg-white border border-neutral-200 hover:border-primary-500 rounded-lg p-6">
  Content
</div>

// テキスト
<h1 className="text-neutral-900">Heading</h1>
<p className="text-neutral-600">Description</p>
```

### 2. CSS変数で使用

```css
.custom-element {
  background-color: var(--color-brand);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-default);
}

.custom-element:hover {
  background-color: var(--color-brand-hover);
}
```

### 3. TypeScriptで使用

```typescript
import { colors, semanticColors } from "@/design-system/colors";

// カラーコードを取得
const brandColor = colors.primary[500]; // "#F97316"
const textColor = semanticColors.text; // "#1C1917"
```

## Figmaとの連携

このデザインシステムのカラーは、Figmaのデザイントークンとして簡単にインポートできます。

### 方法1: CSS変数をFigmaにインポート

1. Figmaで「Styles」パネルを開く
2. 「Import styles」を選択
3. [src/index.css](../index.css)のCSS変数をコピー&ペースト

### 方法2: デザイントークンプラグインを使用

1. Figmaで「Tokens Studio」などのプラグインをインストール
2. [src/design-system/colors.ts](./colors.ts)からカラー値をエクスポート
3. プラグインでインポート

## デザイン原則

### 1. 温かみと親しみやすさ

Claudeのブランドアイデンティティに合わせ、温かみのあるオレンジとニュートラルトーンを使用しています。

### 2. 階層構造の明確化

- 濃い色（900）: メインテキスト、重要な要素
- 中間色（500-600）: ブランドカラー、アクション
- 薄い色（100-200）: 背景、ボーダー

### 3. アクセシビリティ

すべてのカラーコンビネーションはWCAG 2.1 AAレベルのコントラスト比を考慮しています。

## カスタマイズ

### カラーパレットの拡張

[src/design-system/colors.ts](./colors.ts)を編集して、新しいカラースケールを追加できます。

```typescript
export const colors = {
  // 既存のカラー...

  // 新しいカラースケールを追加
  tertiary: {
    50: "#...",
    100: "#...",
    // ...
  },
} as const;
```

### Tailwind設定の更新

新しいカラーを追加した後、[tailwind.config.js](../../tailwind.config.js)に自動的に反映されます。

## ベストプラクティス

### Do ✅

- メインアクションにはprimary-500を使用
- テキストにはneutralスケールを使用
- ホバー状態では色を1-2段階濃くする
- 重要な情報にはsemantic colors（success/warning/error）を使用

### Don't ❌

- 原色（primary-500）をテキストに直接使用しない
- 隣接する色段階を混在させない（例: 300と400を同じ要素で使う）
- neutral以外の色を大面積の背景に使用しない

## 例

### ホームページのスタイリング

```tsx
<section className="p-10 bg-white rounded-lg mx-4 mt-6 shadow-md border border-neutral-200">
  <h2 className="text-3xl font-semibold text-neutral-900">About Me</h2>
  <p className="mt-2 text-neutral-600">説明テキスト</p>
</section>
```

### カードコンポーネント

```tsx
<Card className="bg-white border border-neutral-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
  <CardContent>
    <h3 className="text-xl font-medium text-neutral-900">Title</h3>
    <p className="text-neutral-600">Description</p>
  </CardContent>
</Card>
```

## 参考リソース

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Claude AI](https://claude.ai)
- [Figma Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens)
