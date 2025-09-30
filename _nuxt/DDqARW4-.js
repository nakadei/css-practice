const i={id:"flex-calculation",title:"flex-grow / flex-shrink の計算",description:`
    flex-growとflex-shrinkの計算アルゴリズムは、Flexboxの核心的な機能です。これらのプロパティにより、余白の配分や不足分の調整が自動的に行われます。

    flex-growの計算手順:
      1. 各アイテムの基準サイズ（flex-basis）を合計
      2. コンテナサイズから基準サイズ合計を引いて余白を算出
      3. 各アイテムのflex-grow値の合計を算出
      4. 余白を grow値の比率で配分
      5. 基準サイズ + 配分された余白 = 最終サイズ

    flex-shrinkの計算手順:
      1. 基準サイズ合計がコンテナサイズを超える不足分を算出
      2. 各アイテムの「基準サイズ × shrink値」を計算
      3. それらの合計で不足分を比例配分
      4. 基準サイズ - 配分された縮小分 = 最終サイズ
    `,demos:[{subtitle:"flex-grow計算例：余白の配分",htmlCode:`<!-- Before: flex-basisのみ（flex-grow: 0） -->
<div class="demo-section">
  <h4 class="demo-title">Before: flex-basisのみ（余白が残る）</h4>
  <p class="container-info">コンテナ幅: 300px（利用可能幅: 250px）</p>
  <div class="grow-calculation before">
    <div class="calc-item grow-before-1">
      <div class="item-label">アイテムA</div>
      <div class="item-details">basis: 50px<br>grow: 0</div>
    </div>
    <div class="calc-item grow-before-2">
      <div class="item-label">アイテムB</div>
      <div class="item-details">basis: 100px<br>grow: 0</div>
    </div>
    <div class="calc-item grow-before-3">
      <div class="item-label">アイテムC</div>
      <div class="item-details">basis: 50px<br>grow: 0</div>
    </div>
    <div class="remaining-space">余白 50px</div>
  </div>
</div>

<div class="arrow-down">↓ flex-grow適用</div>

<!-- After: flex-grow適用後 -->
<div class="demo-section">
  <h4 class="demo-title">After: flex-grow適用後（余白が配分される）</h4>
  <p class="container-info">コンテナ幅: 300px（利用可能幅: 250px）</p>
  <div class="grow-calculation after">
    <div class="calc-item grow-example-1">
      <div class="item-label">アイテムA</div>
      <div class="item-details">最終: 62.5px<br>grow: 1</div>
    </div>
    <div class="calc-item grow-example-2">
      <div class="item-label">アイテムB</div>
      <div class="item-details">最終: 125px<br>grow: 2</div>
    </div>
    <div class="calc-item grow-example-3">
      <div class="item-label">アイテムC</div>
      <div class="item-details">最終: 62.5px<br>grow: 1</div>
    </div>
  </div>
</div>

<div class="calculation-steps">
  <h4>計算手順:</h4>
  <ol>
    <li>利用可能幅: 300px - 30px(padding) - 20px(gap) = 250px</li>
    <li>基準サイズ合計: 50 + 100 + 50 = 200px</li>
    <li>余白: 250 - 200 = 50px</li>
    <li>grow値合計: 1 + 2 + 1 = 4</li>
    <li>配分: A=12.5px, B=25px, C=12.5px</li>
    <li>最終: A=62.5px, B=125px, C=62.5px（合計250px）</li>
  </ol>
</div>`,cssCode:`.demo-section {
  margin-bottom: 20px;
}

.demo-title {
  margin: 0 0 10px 0;
  color: #1976d2;
  font-size: 16px;
  font-weight: bold;
}

.container-info {
  margin: 0 0 8px 0;
  font-size: 12px;
  font-weight: bold;
  color: #666;
}

.grow-calculation {
  display: flex;
  gap: 10px;
  padding: 15px;
  border: 2px solid #1976d2;
  width: 300px;
  border-radius: 6px;
}

.grow-calculation.before {
  background-color: #fff3e0;
  border-color: #ff9800;
}

.grow-calculation.after {
  background-color: #e3f2fd;
  border-color: #1976d2;
}

.calc-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 12px;
  padding: 8px;
}

/* Before状態のスタイル */
.grow-before-1 {
  flex: 0 1 50px; /* grow: 0 */
  background-color: #f44336;
}

.grow-before-2 {
  flex: 0 1 100px; /* grow: 0 */
  background-color: #4caf50;
}

.grow-before-3 {
  flex: 0 1 50px; /* grow: 0 */
  background-color: #ff9800;
}

/* After状態のスタイル */
.grow-example-1 {
  flex: 1 1 50px; /* grow: 1, shrink: 1, basis: 50px */
  background-color: #f44336;
}

.grow-example-2 {
  flex: 2 1 100px; /* grow: 2, shrink: 1, basis: 100px */
  background-color: #4caf50;
}

.grow-example-3 {
  flex: 1 1 50px; /* grow: 1, shrink: 1, basis: 50px */
  background-color: #ff9800;
}

.remaining-space {
  background-color: #fff;
  border: 2px dashed #ff9800;
  color: #ff9800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex: 0 0 50px;
  border-radius: 4px;
  text-align: center;
}

.arrow-down {
  text-align: left;
  font-size: 18px;
  color: #1976d2;
  margin: 15px 0;
  font-weight: bold;
}

.item-label {
  font-weight: bold;
  margin-bottom: 4px;
}

.item-details {
  font-size: 10px;
  opacity: 0.9;
  line-height: 1.2;
}

.calculation-steps {
  margin-top: 15px;
  padding: 15px;
  background-color: #f0f8ff;
  border: 1px solid #2196f3;
  border-radius: 6px;
}

.calculation-steps h4 {
  margin: 0 0 10px 0;
  color: #1976d2;
}

.calculation-steps ol {
  margin: 0;
  padding-left: 20px;
}

.calculation-steps li {
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}`},{subtitle:"flex-shrink計算例：縮小の配分",htmlCode:`<!-- Before: flex-shrinkなし（はみ出している状態） -->
<div class="demo-section">
  <h4 class="demo-title">Before: flex-shrinkなし（アイテムがはみ出す）</h4>
  <p class="container-info">コンテナ幅: 250px（狭く設定）</p>
  <div class="shrink-calculation before overflow">
    <div class="calc-item shrink-before-1">
      <div class="item-label">アイテムA</div>
      <div class="item-details">basis: 100px<br>shrink: 0</div>
    </div>
    <div class="calc-item shrink-before-2">
      <div class="item-label">アイテムB</div>
      <div class="item-details">basis: 150px<br>shrink: 0</div>
    </div>
    <div class="calc-item shrink-before-3">
      <div class="item-label">アイテムC</div>
      <div class="item-details">basis: 100px<br>shrink: 0</div>
    </div>
  </div>
  <p class="overflow-note">合計: 350px > 利用可能幅: 200px（150px はみ出し）</p>
</div>

<div class="arrow-down">↓ flex-shrink適用</div>

<!-- After: flex-shrink適用後 -->
<div class="demo-section">
  <h4 class="demo-title">After: flex-shrink適用後（コンテナ内に収まる）</h4>
  <p class="container-info">コンテナ幅: 250px（利用可能幅: 200px）</p>
  <div class="shrink-calculation after">
    <div class="calc-item shrink-example-1">
      <div class="item-label">アイテムA</div>
      <div class="item-details">basis: 100px<br>shrink: 1</div>
    </div>
    <div class="calc-item shrink-example-2">
      <div class="item-label">アイテムB</div>
      <div class="item-details">basis: 150px<br>shrink: 2</div>
    </div>
    <div class="calc-item shrink-example-3">
      <div class="item-label">アイテムC</div>
      <div class="item-details">basis: 100px<br>shrink: 0</div>
    </div>
  </div>
</div>

<div class="calculation-steps">
  <h4>shrink計算手順:</h4>
  <ol>
    <li>利用可能幅: 250px - 30px(padding) - 20px(gap) = 200px</li>
    <li>基準サイズ合計: 100 + 150 + 100 = 350px</li>
    <li>不足分: 350 - 200 = 150px</li>
    <li>重み計算: A=100×1=100, B=150×2=300, C=100×0=0</li>
    <li>重み合計: 100 + 300 + 0 = 400</li>
    <li>縮小分: A=37.5px, B=112.5px, C=0px</li>
    <li>最終: A=62.5px, B=37.5px, C=100px（合計200px）</li>
  </ol>
</div>`,cssCode:`.shrink-calculation {
  display: flex;
  gap: 10px;
  padding: 15px;
  border: 2px solid #f44336;
  width: 250px;
  border-radius: 6px;
}

.shrink-calculation.before {
  background-color: #ffebee;
  border-color: #f44336;
  overflow: visible; /* はみ出しを表示 */
}

.shrink-calculation.after {
  background-color: #e8f5e8;
  border-color: #4caf50;
}

.overflow-note {
  margin: 8px 0 0 0;
  font-size: 12px;
  color: #d32f2f;
  font-weight: bold;
}

/* Before状態のスタイル（はみ出し） */
.shrink-before-1 {
  flex: 0 0 100px; /* shrink: 0 で縮小しない */
  background-color: #2196f3;
  min-width: 100px; /* 確実に100pxを維持 */
}

.shrink-before-2 {
  flex: 0 0 150px; /* shrink: 0 で縮小しない */
  background-color: #4caf50;
  min-width: 150px; /* 確実に150pxを維持 */
}

.shrink-before-3 {
  flex: 0 0 100px; /* shrink: 0 で縮小しない */
  background-color: #ff9800;
  min-width: 100px; /* 確実に100pxを維持 */
}

/* After状態のスタイル（縮小適用） */
.shrink-example-1 {
  flex: 0 1 100px; /* grow: 0, shrink: 1, basis: 100px */
  background-color: #2196f3;
  /* 最終サイズ: 62.5px */
}

.shrink-example-2 {
  flex: 0 2 150px; /* grow: 0, shrink: 2, basis: 150px */
  background-color: #4caf50;
  /* 最終サイズ: 37.5px */
}

.shrink-example-3 {
  flex: 0 0 100px; /* grow: 0, shrink: 0, basis: 100px */
  background-color: #ff9800;
  min-width: 100px; /* 縮小しない */
}

.calc-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 12px;
  padding: 8px;
}

.item-label {
  font-weight: bold;
  margin-bottom: 4px;
}

.item-details {
  font-size: 10px;
  opacity: 0.9;
  line-height: 1.2;
}

.calculation-steps {
  margin-top: 15px;
  padding: 15px;
  background-color: #fff5f5;
  border: 1px solid #f44336;
  border-radius: 6px;
}

.calculation-steps h4 {
  margin: 0 0 10px 0;
  color: #d32f2f;
}

.calculation-steps ol {
  margin: 0;
  padding-left: 20px;
}

.calculation-steps li {
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}`}],relatedItems:["flex-grow","flex-shrink","flex-basis","w3c-spec"]};export{i as default,i as item};
