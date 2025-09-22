const i={id:"flex-display",title:"display: flex / inline-flex",description:`
    Flexboxレイアウトの出発点となるdisplayプロパティです。'display: flex' でブロックレベルのFlexコンテナ、'display: inline-flex' でインラインレベルのFlexコンテナを作成します。

    用語:
    - Flexコンテナ: display: flex または inline-flex を設定した要素
    - Flexアイテム: 直接の子要素

    主要な違い:
      - 'display: flex': コンテナ自体がブロック要素として動作し、前後で改行が発生します。
      - 'display: inline-flex': コンテナ自体がインライン要素として動作し、他の要素と横に並びます。
      - 内部のアイテムのレイアウトは、どちらを使っても同じFlexboxのルールに従います。

    使い分け:
      - ページの主要なレイアウトセクションには 'flex' を使用。
      - 文章中の小さなコンポーネントや、他の要素と横に並べたい場合には 'inline-flex' を使用。
    `,demos:[{subtitle:"display: flex の動作",htmlCode:`<!-- ブロックレベルのFlexコンテナ -->
<div class="container-flex">
  <div class="item">アイテム1</div>
  <div class="item">アイテム2</div>
  <div class="item">アイテム3</div>
</div>

<p>別のFlexコンテナ</p>
<p>前後で改行される</p>
<div class="container-flex">
  <div class="item">アイテム4</div>
  <div class="item">アイテム5</div>
</div>`,cssCode:`.container-flex {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  margin: 10px 0;
}

.item {
  flex: 1;
  padding: 10px;
  background-color: #fff;
  text-align: center;
  border: 1px solid #90caf9;
  border-radius: 4px;
}`},{subtitle:"display: inline-flex の動作",htmlCode:`<!-- インラインレベルのFlexコンテナ -->
<p>テキストの中に 
  <span class="container-inline-flex">
    <span class="inline-item">A</span>
    <span class="inline-item">B</span>
  </span> 
  と
  <span class="container-inline-flex">
    <span class="inline-item">C</span>
    <span class="inline-item">D</span>
  </span>
  が横に並びます。
</p>

<!-- 複数のinline-flexが横に並ぶ例 -->
<div class="example-container">
  <div class="container-inline-flex">
    <div class="inline-item">グループ1-A</div>
    <div class="inline-item">グループ1-B</div>
  </div>
  <div class="container-inline-flex">
    <div class="inline-item">グループ2-A</div>
    <div class="inline-item">グループ2-B</div>
  </div>
  <div class="container-inline-flex">
    <div class="inline-item">グループ3-A</div>
    <div class="inline-item">グループ3-B</div>
  </div>
</div>`,cssCode:`.container-inline-flex {
  display: inline-flex;
  gap: 5px;
  padding: 8px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  border-radius: 4px;
  margin: 2px;
}

.inline-item {
  padding: 5px 8px;
  background-color: #fff;
  border: 1px solid #ce93d8;
  border-radius: 3px;
  font-size: 14px;
}

.example-container {
  margin: 15px 0;
  padding: 10px;
  background-color: #fafafa;
  border: 1px dashed #999;
}`},{subtitle:"flexとinline-flexの比較",htmlCode:`<!-- 比較のための例 -->
<h4>display: flex (ブロックレベル)</h4>
<div class="comparison-flex">
  <div class="comparison-item">Item A</div>
  <div class="comparison-item">Item B</div>
</div>
<div class="comparison-flex">
  <div class="comparison-item">Item C</div>
  <div class="comparison-item">Item D</div>
</div>

<h4>display: inline-flex (インラインレベル)</h4>
<div class="comparison-inline-flex">
  <div class="comparison-item">Item A</div>
  <div class="comparison-item">Item B</div>
</div>
<div class="comparison-inline-flex">
  <div class="comparison-item">Item C</div>
  <div class="comparison-item">Item D</div>
</div>`,cssCode:`.comparison-flex {
  display: flex;
  gap: 8px;
  padding: 10px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  margin: 5px 0;
}

.comparison-inline-flex {
  display: inline-flex;
  gap: 8px;
  padding: 10px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  margin: 5px;
}

.comparison-item {
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}`}]};export{i as default,i as item};
