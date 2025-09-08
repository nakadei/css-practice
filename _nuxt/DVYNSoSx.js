const d={id:"flex-vs-grid",title:"Flex と Grid の使い分け",description:`
    Flex と Grid はどちらも強力なレイアウト手段ですが、得意・不得意が異なります。

    1) 基本の棲み分け
      - Flex: 1次元レイアウト（横並びまたは縦並び）が得意。要素を行（または列）方向に並べ、その中での伸縮や整列を直感的に扱えます。
      - Grid: 2次元レイアウト（行と列）を同時に扱えるため、複雑なページレイアウトや領域指定に適しています。

    2) 選び方のチェックリスト（実務的）
      - 要素の主要な配置が行（または列）のみなら Flex を使う（例：ナビバー、ツールバー、カードの横並び）。
      - 明示的に行と列の両方で領域を管理したい（サイドバー＋コンテンツ＋広告など）は Grid が適切。
      - アイテムごとに異なる幅・高さや等高揃えを柔軟にしたいときは Flex のほうが簡単な場合が多い。
      - レイアウト全体の「領域」を宣言的に設計したい場合（grid-template-areas 等）は Grid が読みやすく保守しやすい。

    3) 実務での組み合わせパターン
      - ページ全体のレイアウトを Grid で定義し、内部の部品（ヘッダーのツールバーやカードリスト）は Flex を使う（Grid と Flex の併用）。
      - モバイルでは単純化して Flex に落とし込む（列方向 stack）ことが多いので、レスポンシブ設計を念頭に置く。

    4) パフォーマンスとサポート
      - どちらも近年のブラウザで十分にサポートされている。複雑すぎる自動配置ロジックは思わぬ reflow を招くことがあるため、極端に大量の要素を配置する場合は検証する。

    まとめ: “要件が1次元か2次元か” を第一判断基準にし、可読性・保守性の観点で Grid と Flex を使い分け、必要なら両者を併用して補完するのが良い設計です。
    `,demos:[{subtitle:"Flex と Grid のデモ",htmlCode:`Flex vs Grid の簡単なデモ
<div class="demo-flex">
  <div class="logo">Logo</div>
  <div class="items">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
</div>

<div class="demo-grid">
  <div class="g-header">Header</div>
  <div class="g-side">Sidebar</div>
  <div class="g-main">Main</div>
  <div class="g-footer">Footer</div>
</div>`,cssCode:`/* Flex の例（1次元） */
.demo-flex { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px; background: #e3f2fd; }
.demo-flex .items { display: flex; gap: 8px; }
.demo-flex .item { background: #fff; padding: 8px 12px; border: 1px solid #90caf9; border-radius: 6px; }

/* Grid の例（2次元） */
.demo-grid { display: grid; grid-template-areas: "header header" "sidebar main" "footer footer"; grid-template-columns: 200px 1fr; gap: 10px; padding: 12px; margin-top: 16px; background: #f8f9fa; }
.g-header { grid-area: header; background: #1976d2; color: #fff; padding: 10px; }
.g-side { grid-area: sidebar; background: #e3f2fd; padding: 12px; }
.g-main { grid-area: main; background: #fff; padding: 12px; border: 1px solid #ddd; }
.g-footer { grid-area: footer; background: #424242; color: #fff; padding: 10px; text-align: center; }`}],relatedItems:["flexbox-layout","grid-layout"]};export{d as default,d as item};
