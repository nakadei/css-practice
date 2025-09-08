const d={id:"grid-layout",title:"Grid Layoutレイアウト",description:`
    CSS Grid は 2 次元（行と列）を同時に扱える強力なレイアウトシステムです。ページ全体のレイアウトや複雑なグリッド構成を明示的に定義でき、直感的な領域配置が可能です。

    主要な考え方:
  - コンテナに 'display: grid' を設定し、'grid-template-columns' / 'grid-template-rows' でトラックを定義する。
  - 'grid-template-areas' による名前付き領域配置、'grid-column' / 'grid-row' によるアイテムの明示的な配置が行える。
  - 'auto-fit' / 'auto-fill' と 'minmax()' を組み合わせることでレスポンシブな列の自動調整が容易。

    長所:
      - 複雑な 2 次元レイアウト（ダッシュボード、雑誌風レイアウト、カード群）を少ない CSS で記述可能。
  - 行・列のギャップ管理（'gap'）、領域の重なりや正確な位置指定が得意。

    注意点:
      - IE を含む古いブラウザでは機能差があるため、必要ならフォールバックを用意する。
      - Grid の自動配置ルールや暗黙のトラックを理解していないと期待外のレイアウトになることがある。

    使いどころの例: 複雑なページレイアウト、カードのグリッド、レスポンシブなダッシュボードやギャラリー。
    `,demos:[{subtitle:"Grid Layoutレイアウト",htmlCode:`基本的なGridレイアウト
<div class="grid-container">
  <div class="grid-header">ヘッダー</div>
  <div class="grid-sidebar">サイドバー</div>
  <div class="grid-main">メインコンテンツ</div>
  <div class="grid-aside">広告エリア</div>
  <div class="grid-footer">フッター</div>
</div>

カードグリッドレイアウト
<div class="card-grid">
  <div class="grid-card">カード1</div>
  <div class="grid-card large">大きなカード</div>
  <div class="grid-card">カード3</div>
  <div class="grid-card">カード4</div>
  <div class="grid-card">カード5</div>
  <div class="grid-card">カード6</div>
</div>`,cssCode:`/* 基本的なGridレイアウト */
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  height: 400px;
  padding: 15px;
  background-color: #f5f5f5;
}

.grid-header {
  grid-area: header;
  background-color: #1976d2;
  color: white;
  padding: 15px;
  text-align: center;
}

.grid-sidebar {
  grid-area: sidebar;
  background-color: #e3f2fd;
  padding: 15px;
}

.grid-main {
  grid-area: main;
  background-color: white;
  padding: 15px;
  border: 1px solid #ddd;
}

.grid-aside {
  grid-area: aside;
  background-color: #fff3e0;
  padding: 15px;
}

.grid-footer {
  grid-area: footer;
  background-color: #424242;
  color: white;
  padding: 15px;
  text-align: center;
}

/* レスポンシブカードグリッド */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  padding: 15px;
  background-color: #f8f9fa;
  margin-top: 20px;
}

.grid-card {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-card.large {
  grid-column: span 2;
  background-color: #2196f3;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
  
  .grid-card.large {
    grid-column: span 1;
  }
}`}]};export{d as default,d as item};
