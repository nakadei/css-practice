const i={id:"display-grid",title:"display: grid / inline-grid",description:`
    Grid Layoutの出発点となるdisplayプロパティです。'display: grid' でブロックレベルのGridコンテナ、'display: inline-grid' でインラインレベルのGridコンテナを作成します。

    用語:
    - Gridコンテナ: display: grid または inline-grid を設定した要素
    - Gridアイテム: 直接の子要素
    - グリッドライン: グリッドを区切る線（行と列）
    - グリッドセル: グリッドの最小単位（1行×1列）

    主要な違い:
      - 'display: grid': コンテナ自体がブロック要素として動作し、前後で改行が発生します。
      - 'display: inline-grid': コンテナ自体がインライン要素として動作し、他の要素と横に並びます。
      - 内部のアイテムのレイアウトは、どちらを使っても同じGrid Layoutのルールに従います。

    使い分け:
      - ページの主要なレイアウトセクションには 'grid' を使用。
      - 文章中の小さなコンポーネントや、他の要素と横に並べたい複雑な構造には 'inline-grid' を使用。
      - inline-gridは2次元構造（行×列）が必要な場合にinline-flexより適しています。
  `,tags:["基礎","display"],type:"property",demos:[{subtitle:"display: grid の動作",htmlCode:`<!-- ブロックレベルのGridコンテナ -->
<div class="container-grid">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>

<p>別のGridコンテナ</p>
<p>前後で改行される</p>
<div class="container-grid">
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
</div>`,cssCode:`.container-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 60px);
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  margin: 10px 0;
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #90caf9;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
}`},{subtitle:"display: inline-grid の動作 - 2次元構造のインライン配置",htmlCode:`<!-- インラインレベルのGridコンテナ -->
<p>テキストの中に 
  <span class="container-inline-grid">
    <span class="inline-grid-item">A1</span>
    <span class="inline-grid-item">A2</span>
    <span class="inline-grid-item">B1</span>
    <span class="inline-grid-item">B2</span>
  </span> 
  と
  <span class="container-inline-grid">
    <span class="inline-grid-item">C1</span>
    <span class="inline-grid-item">C2</span>
    <span class="inline-grid-item">D1</span>
    <span class="inline-grid-item">D2</span>
  </span>
  が横に並びます。
</p>

<!-- 複数のinline-gridが横に並ぶ例 -->
<div class="example-container">
  <div class="container-inline-grid-large">
    <div class="inline-grid-item-large header">名前</div>
    <div class="inline-grid-item-large header">値</div>
    <div class="inline-grid-item-large">Width</div>
    <div class="inline-grid-item-large">100px</div>
    <div class="inline-grid-item-large">Height</div>
    <div class="inline-grid-item-large">80px</div>
  </div>
  <div class="container-inline-grid-large">
    <div class="inline-grid-item-large header">項目</div>
    <div class="inline-grid-item-large header">状態</div>
    <div class="inline-grid-item-large">Task 1</div>
    <div class="inline-grid-item-large">完了</div>
    <div class="inline-grid-item-large">Task 2</div>
    <div class="inline-grid-item-large">進行中</div>
  </div>
</div>`,cssCode:`.container-inline-grid {
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  gap: 3px;
  padding: 6px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  border-radius: 4px;
  margin: 2px;
  vertical-align: middle;
}

.inline-grid-item {
  padding: 4px 6px;
  background-color: #fff;
  border: 1px solid #ce93d8;
  border-radius: 2px;
  font-size: 12px;
  text-align: center;
}

.container-inline-grid-large {
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 5px;
  padding: 10px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  border-radius: 4px;
  margin: 5px;
  min-width: 200px;
}

.inline-grid-item-large {
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #ffb74d;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
}

.inline-grid-item-large.header {
  background-color: #ffe0b2;
  font-weight: bold;
}

.example-container {
  margin: 15px 0;
  padding: 10px;
  background-color: #fafafa;
  border: 1px dashed #999;
}`},{subtitle:"inline-grid vs inline-flex の比較",htmlCode:`<!-- inline-flexでは1次元レイアウトのみ -->
<h4>inline-flex（1次元レイアウト）</h4>
<p>データ: 
  <span class="comparison-inline-flex">
    <span class="comparison-flex-item">名前: 田中</span>
    <span class="comparison-flex-item">年齢: 30</span>
    <span class="comparison-flex-item">職業: エンジニア</span>
  </span>
</p>

<!-- inline-gridでは2次元グリッド配置が可能 -->
<h4>inline-grid（2次元グリッドレイアウト）</h4>
<p>データ: 
  <span class="comparison-inline-grid">
    <span class="comparison-grid-label">名前</span>
    <span class="comparison-grid-value">田中</span>
    <span class="comparison-grid-label">年齢</span>
    <span class="comparison-grid-value">30</span>
    <span class="comparison-grid-label">職業</span>
    <span class="comparison-grid-value">エンジニア</span>
  </span>
</p>

<!-- 複雑な構造での比較 -->
<div class="comparison-container">
  <h4>inline-flex: 複数行にするには複数のコンテナが必要</h4>
  <div class="comparison-inline-flex">
    <span class="comparison-flex-item">A</span>
    <span class="comparison-flex-item">B</span>
    <span class="comparison-flex-item">C</span>
  </div>
  <div class="comparison-inline-flex">
    <span class="comparison-flex-item">D</span>
    <span class="comparison-flex-item">E</span>
    <span class="comparison-flex-item">F</span>
  </div>
  
  <h4>inline-grid: 1つのコンテナで2次元配置が可能</h4>
  <div class="comparison-inline-grid">
    <span class="comparison-grid-item">A</span>
    <span class="comparison-grid-item">B</span>
    <span class="comparison-grid-item">C</span>
    <span class="comparison-grid-item">D</span>
    <span class="comparison-grid-item">E</span>
    <span class="comparison-grid-item">F</span>
  </div>
</div>`,cssCode:`.comparison-inline-flex {
  display: inline-flex;
  gap: 8px;
  padding: 10px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  border-radius: 4px;
  margin: 5px;
}

.comparison-flex-item {
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #81c784;
  border-radius: 4px;
}

.comparison-inline-grid {
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 10px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  border-radius: 4px;
  margin: 5px;
  vertical-align: middle;
}

.comparison-grid-item {
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #ffb74d;
  border-radius: 4px;
  text-align: center;
}

.comparison-grid-label {
  padding: 8px 12px;
  background-color: #ffe0b2;
  border: 1px solid #ffb74d;
  border-radius: 4px;
  font-weight: bold;
  text-align: right;
}

.comparison-grid-value {
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #ffb74d;
  border-radius: 4px;
  text-align: left;
}

.comparison-container {
  margin: 15px 0;
  padding: 15px;
  background-color: #fafafa;
  border: 1px dashed #999;
  border-radius: 4px;
}

.comparison-container h4 {
  margin: 15px 0 10px 0;
  font-size: 16px;
  color: #333;
}

.comparison-container h4:first-child {
  margin-top: 0;
}`}]};export{i as default,i as item};
