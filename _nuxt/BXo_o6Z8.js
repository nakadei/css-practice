const o={id:"flex-grow",title:"flex-grow",description:`
    flex-growは、Flexコンテナに余剰スペースがある場合に、Flexアイテムがどの程度成長するかを制御するプロパティです。

    基本概念:
      - デフォルト値は0（成長しない）
      - 正の数値を指定すると、余剰スペースを比例配分で取得
      - 値が大きいほど、より多くのスペースを取得

    計算方法:
      - 各アイテムのflex-grow値の合計を計算
      - 余剰スペースを、その比率で配分
      - 例: grow値が1:2:1の場合、スペースを1:2:1の比率で配分

    実用的な使い方:
      - カード型レイアウトでの均等配置
      - サイドバー + メインコンテンツの可変レイアウト
      - レスポンシブなグリッドシステム

    注意点:
      - flex-basisと組み合わせて基準サイズを設定
      - min-width/max-widthによる制限も考慮
      - 成長は余剰スペースがある場合のみ発生
    `,demos:[{subtitle:"基本的な成長動作",htmlCode:`<div class="grow-basic-container">
  <div class="demo-section">
    <h4>flex-grow: 0（デフォルト：成長しない）</h4>
    <div class="flex-container grow-0">
      <div class="flex-item">Item 1</div>
      <div class="flex-item">Item 2</div>
      <div class="flex-item">Item 3</div>
    </div>
  </div>
  
  <div class="demo-section">
    <h4>flex-grow: 1（均等に成長）</h4>
    <div class="flex-container grow-1">
      <div class="flex-item">Item 1</div>
      <div class="flex-item">Item 2</div>
      <div class="flex-item">Item 3</div>
    </div>
  </div>
</div>`,cssCode:`.grow-basic-container {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.demo-section {
  margin-bottom: 25px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.demo-section h4 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 16px;
}

.flex-container {
  display: flex;
  gap: 10px;
  padding: 15px;
  border: 2px solid #28a745;
  border-radius: 6px;
  width: 400px;
  background-color: #e8f5e9;
}

.grow-0 .flex-item {
  flex-grow: 0;
  flex-basis: 80px;
}

.grow-1 .flex-item {
  flex-grow: 1;
  flex-basis: 80px;
}

.flex-item {
  padding: 12px;
  background-color: #28a745;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
  min-width: 0; /* テキストの折り返しを許可 */
}`},{subtitle:"比例配分の例",htmlCode:`<div class="proportion-container">
  <div class="demo-section">
    <h4>異なるflex-grow値での比例配分</h4>
    <div class="flex-container proportion">
      <div class="flex-item grow-1">grow: 1<br><small>(1/6)</small></div>
      <div class="flex-item grow-2">grow: 2<br><small>(2/6)</small></div>
      <div class="flex-item grow-3">grow: 3<br><small>(3/6)</small></div>
    </div>
    <p class="calculation">余剰スペースを 1:2:3 の比率で配分</p>
  </div>
  
  <div class="demo-section">
    <h4>実際のレイアウト例：ヘッダー</h4>
    <div class="header-layout">
      <div class="logo">Logo</div>
      <div class="nav-space">Navigation Area</div>
      <div class="user-menu">User</div>
    </div>
  </div>
</div>`,cssCode:`.proportion-container {
  padding: 20px;
  background-color: #e3f2fd;
  border-radius: 8px;
}

.demo-section {
  margin-bottom: 25px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.demo-section h4 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 16px;
}

.proportion {
  background-color: #e3f2fd;
  border-color: #2196f3;
}

.proportion .flex-item {
  background-color: #2196f3;
  flex-basis: 60px;
}

.grow-1 { flex-grow: 1; }
.grow-2 { flex-grow: 2; }
.grow-3 { flex-grow: 3; }

.calculation {
  margin: 10px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}

/* ヘッダーレイアウト例 */
.header-layout {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 20px;
  background-color: #263238;
  color: white;
  border-radius: 6px;
}

.logo {
  flex: 0 0 auto;
  font-weight: bold;
  font-size: 18px;
  color: #4fc3f7;
}

.nav-space {
  flex-grow: 1; /* 残りスペースをすべて取得 */
  text-align: center;
  font-size: 14px;
  opacity: 0.8;
}

.user-menu {
  flex: 0 0 auto;
  padding: 6px 12px;
  background-color: #37474f;
  border-radius: 4px;
  font-size: 14px;
}`}],relatedItems:["flex-basis","flex-shrink","justify-content"]};export{o as default,o as item};
