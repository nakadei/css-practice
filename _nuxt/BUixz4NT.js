const e={id:"flexbox-layout",title:"Flexboxレイアウト",description:`
    Flexbox は 1 次元（行 or 列）に特化したレイアウトシステムです。コンテナとアイテムの間で空間配分や整列を直感的に行え、従来の float/position に頼らない柔軟なレイアウトを実現します。

    主要な考え方:
      - コンテナに 'display: flex' を設定すると「主軸（main-axis）」と「交差軸（cross-axis）」が定義される。
      - コンテナ側プロパティ: 'flex-direction', 'justify-content', 'align-items', 'flex-wrap', 'gap' などで並べ方や整列を制御する。
      - アイテム側プロパティ: 'flex'（成長/縮小/基準幅）、'order'（表示順の制御）、'align-self'（個別の交差軸整列）など。

    長所:
      - 垂直中央揃えや等高カラム、可変幅のアイテムが簡単に実装できる。
      - レスポンシブでアイテムの折り返し（wrap）や均等配置が容易。
      - コードが比較的シンプルで可読性が高い。

    注意点:
  - ネストした Flex コンテナは意図しない伸縮を招くことがあるため、'min-width'/'min-height' を意識する。
  - 古いブラウザでは 'gap' のサポートが限定的なのでフォールバックが必要な場合がある。

    使いどころの例: ヘッダーのナビ、カードの横並び、ツールバー、センタリングされたレイアウトなど。
    `,demos:[{subtitle:"Flexboxレイアウト",htmlCode:`基本的なFlexboxレイアウト
<div class="flex-container">
  <div class="flex-item">アイテム1</div>
  <div class="flex-item">アイテム2</div>
  <div class="flex-item">アイテム3</div>
</div>

実用的なヘッダーレイアウト
<div class="header-flex">
  <div class="logo">ロゴ</div>
  <div class="nav-flex">
    <div class="nav-item">ホーム</div>
    <div class="nav-item">サービス</div>
    <div class="nav-item">お問い合わせ</div>
  </div>
</div>

カード型レイアウト
<p class="note">注: 親が Flex コンテナのため、カード要素は縦方向に stretch されて高さが揃います（内容が異なっても同じ高さに見えます）。</p>
<div class="card-container">
  <div class="card">カード1</div>
  <div class="card">カード2<br>高さが異なる<br>コンテンツ</div>
  <div class="card">カード3</div>
</div>`,cssCode:`/* 基本的なFlexboxコンテナ */
.flex-container {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
}

.flex-item {
  flex: 1;
  padding: 15px;
  background-color: #fff;
  text-align: center;
  border: 1px solid #90caf9;
}

/* ヘッダーレイアウト */
.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
  margin: 10px 0;
}

.logo {
  font-weight: bold;
  font-size: 18px;
}

.nav-flex {
  display: flex;
  gap: 20px;
}

.nav-item {
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* レスポンシブカードレイアウト */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  background-color: #f5f5f5;
}

.card {
  flex: 1 1 200px;
  min-height: 120px;
  padding: 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}`}]};export{e as default,e as item};
