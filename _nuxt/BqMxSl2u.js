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

    重要なポイント:
      - shrinkの計算はgrowより複雑（基準サイズも考慮）
      - 最小サイズ（min-width/height）により制限される
      - 計算結果が整数でない場合はブラウザが丸め処理
    `,demos:[{subtitle:"flex-grow計算例：余白の配分",htmlCode:`<!-- コンテナ幅: 300px -->
<div class="grow-calculation">
  <div class="calc-item grow-example-1">
    <div class="item-label">アイテムA</div>
    <div class="item-details">basis: 50px<br>grow: 1</div>
  </div>
  <div class="calc-item grow-example-2">
    <div class="item-label">アイテムB</div>
    <div class="item-details">basis: 100px<br>grow: 2</div>
  </div>
  <div class="calc-item grow-example-3">
    <div class="item-label">アイテムC</div>
    <div class="item-details">basis: 50px<br>grow: 1</div>
  </div>
</div>

<div class="calculation-steps">
  <h4>計算手順:</h4>
  <ol>
    <li>基準サイズ合計: 50 + 100 + 50 = 200px</li>
    <li>余白: 300 - 200 = 100px</li>
    <li>grow値合計: 1 + 2 + 1 = 4</li>
    <li>配分: A=25px, B=50px, C=25px</li>
    <li>最終: A=75px, B=150px, C=75px</li>
  </ol>
</div>`,cssCode:`.grow-calculation {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  width: 300px;
  position: relative;
}

.grow-calculation::before {
  content: 'コンテナ幅: 300px';
  position: absolute;
  top: -25px;
  left: 0;
  font-size: 12px;
  color: #1976d2;
  font-weight: bold;
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
}`},{subtitle:"flex-shrink計算例：縮小の配分",htmlCode:`<!-- コンテナ幅: 200px（狭く設定） -->
<div class="shrink-calculation">
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

<div class="calculation-steps">
  <h4>shrink計算手順:</h4>
  <ol>
    <li>基準サイズ合計: 100 + 150 + 100 = 350px</li>
    <li>不足分: 350 - 200 = 150px</li>
    <li>重み計算: A=100×1=100, B=150×2=300, C=100×0=0</li>
    <li>重み合計: 100 + 300 + 0 = 400</li>
    <li>縮小分: A=37.5px, B=112.5px, C=0px</li>
    <li>最終: A=62.5px, B=37.5px, C=100px</li>
  </ol>
</div>`,cssCode:`.shrink-calculation {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #ffebee;
  border: 2px solid #f44336;
  width: 200px;
  position: relative;
}

.shrink-calculation::before {
  content: 'コンテナ幅: 200px';
  position: absolute;
  top: -25px;
  left: 0;
  font-size: 12px;
  color: #f44336;
  font-weight: bold;
}

.shrink-example-1 {
  flex: 0 1 100px; /* grow: 0, shrink: 1, basis: 100px */
  background-color: #2196f3;
}

.shrink-example-2 {
  flex: 0 2 150px; /* grow: 0, shrink: 2, basis: 150px */
  background-color: #4caf50;
}

.shrink-example-3 {
  flex: 0 0 100px; /* grow: 0, shrink: 0, basis: 100px */
  background-color: #ff9800;
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
}`},{subtitle:"実践例：混合計算（grow + shrink）",htmlCode:`<!-- レスポンシブ対応：コンテナサイズ変更 -->
<div class="mixed-calculation">
  <div class="calc-item mixed-1">
    <div class="item-label">サイドバー</div>
    <div class="item-details">basis: 200px<br>grow: 0, shrink: 1</div>
  </div>
  <div class="calc-item mixed-2">
    <div class="item-label">メイン</div>
    <div class="item-details">basis: 400px<br>grow: 1, shrink: 1</div>
  </div>
  <div class="calc-item mixed-3">
    <div class="item-label">広告</div>
    <div class="item-details">basis: 150px<br>grow: 0, shrink: 0</div>
  </div>
</div>

<div class="size-controls">
  <button onclick="changeContainerSize('small')" class="size-btn">狭い (400px)</button>
  <button onclick="changeContainerSize('medium')" class="size-btn">中 (750px)</button>
  <button onclick="changeContainerSize('large')" class="size-btn">広い (900px)</button>
</div>

<div class="calculation-steps">
  <h4>シナリオ別計算:</h4>
  <div class="scenario">
    <strong>狭い画面 (400px):</strong> 不足分50px → サイドバーとメインが縮小
  </div>
  <div class="scenario">
    <strong>中サイズ (750px):</strong> ちょうど基準サイズ合計と同じ
  </div>
  <div class="scenario">
    <strong>広い画面 (900px):</strong> 余白150px → メインのみが拡張
  </div>
</div>`,cssCode:`.mixed-calculation {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  width: 750px; /* 初期サイズ */
  transition: width 0.3s ease;
  position: relative;
}

.mixed-1 {
  flex: 0 1 200px; /* サイドバー：拡張なし、縮小あり */
  background-color: #3f51b5;
}

.mixed-2 {
  flex: 1 1 400px; /* メイン：拡張あり、縮小あり */
  background-color: #4caf50;
}

.mixed-3 {
  flex: 0 0 150px; /* 広告：固定サイズ */
  background-color: #ff5722;
}

.calc-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 12px;
  padding: 10px;
}

.item-label {
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 14px;
}

.item-details {
  font-size: 10px;
  opacity: 0.9;
  line-height: 1.3;
}

.size-controls {
  margin: 15px 0;
  text-align: center;
}

.size-btn {
  margin: 0 5px;
  padding: 8px 16px;
  background-color: #9c27b0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.size-btn:hover {
  background-color: #7b1fa2;
}

.calculation-steps {
  padding: 15px;
  background-color: #faf0ff;
  border: 1px solid #9c27b0;
  border-radius: 6px;
}

.calculation-steps h4 {
  margin: 0 0 10px 0;
  color: #6a1b9a;
}

.scenario {
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
  line-height: 1.4;
}

/* JavaScript制御用のクラス */
.container-small { width: 400px !important; }
.container-medium { width: 750px !important; }
.container-large { width: 900px !important; }`},{subtitle:"計算の複雑なケース：min/max制約",htmlCode:`<!-- min/max制約がある場合の計算 -->
<div class="constrained-calculation">
  <div class="calc-item constrained-1">
    <div class="item-label">制約A</div>
    <div class="item-details">basis: 150px<br>max: 100px<br>grow: 1</div>
  </div>
  <div class="calc-item constrained-2">
    <div class="item-label">制約B</div>
    <div class="item-details">basis: 100px<br>min: 120px<br>shrink: 1</div>
  </div>
  <div class="calc-item constrained-3">
    <div class="item-label">通常</div>
    <div class="item-details">basis: 100px<br>grow: 1</div>
  </div>
</div>

<div class="calculation-steps">
  <h4>制約適用の計算順序:</h4>
  <ol>
    <li>flex-basisによる初期サイズ設定</li>
    <li>min/max制約の適用</li>
    <li>制約後のサイズでgrow/shrink計算</li>
    <li>再度min/max制約をチェック</li>
    <li>必要に応じて再計算（反復）</li>
  </ol>
  <p><strong>結果:</strong> 制約により予想と異なるサイズになる場合がある</p>
</div>`,cssCode:`.constrained-calculation {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  width: 400px;
  position: relative;
}

.constrained-calculation::before {
  content: 'コンテナ幅: 400px';
  position: absolute;
  top: -25px;
  left: 0;
  font-size: 12px;
  color: #ff9800;
  font-weight: bold;
}

.constrained-1 {
  flex: 1 1 150px;
  max-width: 100px; /* 制約：最大100px */
  background-color: #e91e63;
}

.constrained-2 {
  flex: 0 1 100px;
  min-width: 120px; /* 制約：最小120px */
  background-color: #2196f3;
}

.constrained-3 {
  flex: 1 1 100px; /* 制約なし */
  background-color: #4caf50;
}

.calc-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 12px;
  padding: 8px;
  justify-content: center;
}

.item-label {
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 13px;
}

.item-details {
  font-size: 9px;
  opacity: 0.9;
  line-height: 1.2;
}

.calculation-steps {
  margin-top: 15px;
  padding: 15px;
  background-color: #fffbf0;
  border: 1px solid #ff9800;
  border-radius: 6px;
}

.calculation-steps h4 {
  margin: 0 0 10px 0;
  color: #e65100;
}

.calculation-steps ol {
  margin: 0 0 10px 0;
  padding-left: 20px;
}

.calculation-steps li {
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.calculation-steps p {
  margin: 0;
  font-size: 14px;
  color: #d84315;
}`}],relatedItems:["flex-grow","flex-shrink","flex-basis","w3c-spec"]};export{i as default,i as item};
