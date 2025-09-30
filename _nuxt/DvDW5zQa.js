const i={id:"w3c-spec",title:"Flexboxレイアウトアルゴリズム",description:`
    W3C仕様で定義されたFlexboxレイアウトアルゴリズムの動作原理を理解することで、Flexboxの挙動を予測し効果的に使用できるようになります。
    W3C Recommendation として正式に勧告された技術仕様です。
    
    仕様書: https://www.w3.org/TR/css-flexbox
    `,demos:[{subtitle:"Flexboxレイアウト 6ステップアルゴリズム概要",htmlCode:`
  <div class="algorithm-container">    
    <div class="steps-flow">
      <div class="step-item">
        <div class="step-card step-1">
          <div class="step-number">1</div>
          <div class="step-content">
            <div class="step-title">Flexコンテナとアイテムの特定</div>
            <div class="step-desc">display: flex でFlexコンテナとその直接の子要素をFlexアイテムとして特定</div>
          </div>
        </div>
        <div class="step-arrow-down">↓</div>
      </div>
      
      <div class="step-item">
        <div class="step-card step-2">
          <div class="step-number">2</div>
          <div class="step-content">
            <div class="step-title">主軸と交差軸の決定</div>
            <div class="step-desc">flex-direction の値により主軸（メイン軸）と交差軸（クロス軸）を決定</div>
          </div>
        </div>
        <div class="step-arrow-down">↓</div>
      </div>
      
      <div class="step-item">
        <div class="step-card step-3">
          <div class="step-number">3</div>
          <div class="step-content">
            <div class="step-title">Flexラインの生成</div>
            <div class="step-desc">flex-wrap の設定により単一行か複数行かを決定し、Flexラインを生成</div>
          </div>
        </div>
        <div class="step-arrow-down">↓</div>
      </div>
      
      <div class="step-item">
        <div class="step-card step-4">
          <div class="step-number">4</div>
          <div class="step-content">
            <div class="step-title">アイテムの基準サイズ決定</div>
            <div class="step-desc">flex-basis → min/max-width/height → 内容サイズの順で基準サイズを決定</div>
          </div>
        </div>
        <div class="step-arrow-down">↓</div>
      </div>
      
      <div class="step-item">
        <div class="step-card step-5">
          <div class="step-number">5</div>
          <div class="step-content">
            <div class="step-title">フレキシブルサイズの計算</div>
            <div class="step-desc">余白がある場合は flex-grow、不足する場合は flex-shrink で調整</div>
          </div>
        </div>
        <div class="step-arrow-down">↓</div>
      </div>
      
      <div class="step-item">
        <div class="step-card step-6">
          <div class="step-number">6</div>
          <div class="step-content">
            <div class="step-title">最終的な配置と整列</div>
            <div class="step-desc">justify-content と align-items で最終的なレイアウトを決定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`,cssCode:`.algorithm-overview {
  padding: 20px;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
  border: 2px solid #1565c0;
  border-radius: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.algorithm-container {
  max-width: 900px;
  margin: 0 auto;
}

.overview-title {
  text-align: center;
  color: #1565c0;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 30px 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.steps-flow {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 20px;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.step-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  border-radius: 12px;
  padding: 15px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(21, 101, 192, 0.15);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  transition: background 0.3s ease;
}

.step-1::before { background: #2196f3; }
.step-2::before { background: #ff9800; }
.step-3::before { background: #4caf50; }
.step-4::before { background: #9c27b0; }
.step-5::before { background: #ff5722; }
.step-6::before { background: #009688; }

.step-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(21, 101, 192, 0.2);
}

.step-number {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1565c0, #1976d2);
  color: white;
  font-size: 24px;
  font-weight: 900;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(21, 101, 192, 0.3);
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 16px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 6px;
}

.step-desc {
  font-size: 14px;
  color: #546e7a;
  line-height: 1.5;
}

.step-arrow-down {
  font-size: 24px;
  font-weight: bold;
  color: #1565c0;
  margin: 6px 0;
  opacity: 0.7;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  align-self: center;
}

.step-item:last-child .step-arrow-down {
  display: none;
}

.overview-note {
  background: rgba(21, 101, 192, 0.08);
  border: 1px solid rgba(21, 101, 192, 0.2);
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
}

.overview-note p {
  margin: 0;
  color: #1565c0;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

@media (max-width: 768px) {
  .step-card {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .step-number {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
  
  .step-title {
    font-size: 16px;
  }
  
  .step-desc {
    font-size: 13px;
  }
  
  .step-arrow-down {
    font-size: 24px;
    margin: 10px 0;
  }
  
  .overview-title {
    font-size: 20px;
  }
}`},{subtitle:"ステップ1: Flexコンテナとアイテムの特定",htmlCode:`<div class="step1-example">
  <div class="step1-container">
    <div class="step1-item">アイテム1</div>
    <div class="step1-item">アイテム2</div>
    <div class="step1-item">アイテム3</div>
  </div>
  <p class="step-note">display: flex により、コンテナとその直接の子要素がFlexアイテムとして特定される</p>
</div>`,cssCode:`.step1-container {
  display: flex; /* この宣言でFlexコンテナになる */
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 3px solid #1976d2;
  border-radius: 8px;
}

.step1-item {
  padding: 15px;
  background-color: #2196f3;
  color: white;
  text-align: center;
  border-radius: 6px;
  /* 自動的にFlexアイテムになる */
}

.step-note {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #1976d2;
  font-size: 14px;
  color: #333;
}`},{subtitle:"ステップ2: 主軸と交差軸の決定",htmlCode:`<div class="step2-example">
  <div class="axis-demo">
    <div class="axis-container row-axis">
      <div class="axis-item">1</div>
      <div class="axis-item">2</div>
      <div class="axis-item">3</div>
      <div class="axis-label">主軸: 水平 →</div>
    </div>
    
    <div class="axis-container column-axis">
      <div class="axis-item">1</div>
      <div class="axis-item">2</div>
      <div class="axis-item">3</div>
      <div class="axis-label">主軸: 垂直 ↓</div>
    </div>
  </div>
  <p class="step-note">flex-directionの値により主軸と交差軸が決定される</p>
</div>`,cssCode:`.axis-demo {
  display: flex;
  gap: 30px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.axis-container {
  position: relative;
  padding: 15px;
  border: 2px solid #ff9800;
  border-radius: 6px;
  background-color: white;
}

.row-axis {
  display: flex;
  flex-direction: row; /* 主軸: 水平 */
  gap: 8px;
}

.column-axis {
  display: flex;
  flex-direction: column; /* 主軸: 垂直 */
  gap: 8px;
  width: 100px;
}

.axis-item {
  width: 40px;
  height: 40px;
  background-color: #ff9800;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}

.axis-label {
  position: absolute;
  bottom: -25px;
  left: 15px;
  font-size: 12px;
  color: #ff9800;
  font-weight: bold;
}

.step-note {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #1976d2;
  font-size: 14px;
  color: #333;
}`},{subtitle:"ステップ3: Flexラインの生成",htmlCode:`<div class="step3-example">
  <div class="line-demo">
    <h4>nowrap（単一行）</h4>
    <div class="line-container nowrap-demo">
      <div class="line-item">1</div>
      <div class="line-item">2</div>
      <div class="line-item">3</div>
      <div class="line-item">4</div>
      <div class="line-item">5</div>
    </div>
    
    <h4>wrap（複数行）</h4>
    <div class="line-container wrap-demo">
      <div class="line-item">1</div>
      <div class="line-item">2</div>
      <div class="line-item">3</div>
      <div class="line-item">4</div>
      <div class="line-item">5</div>
    </div>
  </div>
  <p class="step-note">flex-wrapの設定により単一行か複数行かが決定される</p>
</div>`,cssCode:`.line-demo h4 {
  margin: 15px 0 8px 0;
  color: #4caf50;
  font-size: 16px;
}

.line-container {
  display: flex;
  gap: 8px;
  width: 280px; /* 意図的に狭くして折り返しを促す */
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  border-radius: 6px;
  margin-bottom: 15px;
}

.nowrap-demo {
  flex-wrap: nowrap; /* デフォルト：折り返さない */
}

.wrap-demo {
  flex-wrap: wrap; /* 折り返す */
}

.line-item {
  flex: 0 0 70px; /* 固定幅で折り返しを促す */
  height: 40px;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}

.step-note {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #1976d2;
  font-size: 14px;
  color: #333;
}`},{subtitle:"ステップ4: アイテムの基準サイズ決定",htmlCode:`<div class="step4-example">
  <div class="size-demo">
    <h4>flex-basisによる基準サイズ</h4>
    <div class="size-container">
      <div class="size-item basis-auto">auto</div>
      <div class="size-item basis-100">100px</div>
      <div class="size-item basis-percent">30%</div>
    </div>
    
    <h4>min/max制約の適用</h4>
    <div class="size-container">
      <div class="size-item constrained-item">制約あり</div>
      <div class="size-item normal-item">通常</div>
    </div>
  </div>
  <p class="step-note">flex-basis → min/max-width/height → 内容サイズの順で基準サイズが決定</p>
</div>`,cssCode:`.size-demo h4 {
  margin: 15px 0 8px 0;
  color: #9c27b0;
  font-size: 16px;
}

.size-container {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  border-radius: 6px;
  margin-bottom: 15px;
}

.size-item {
  padding: 12px;
  background-color: #9c27b0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;
}

.basis-auto {
  flex-basis: auto;
}

.basis-100 {
  flex-basis: 100px;
}

.basis-percent {
  flex-basis: 30%;
}

.constrained-item {
  flex-basis: 200px;
  max-width: 120px; /* flex-basisより小さく制約 */
  background-color: #7b1fa2;
}

.normal-item {
  flex-basis: 100px;
}

.step-note {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #1976d2;
  font-size: 14px;
  color: #333;
}`},{subtitle:"ステップ5: フレキシブルサイズの計算",htmlCode:`<div class="step5-example">
  <div class="flexible-demo">
    <h4>余白の配分（flex-grow）</h4>
    <div class="flex-container grow-demo">
      <div class="flex-item grow-1">grow: 1</div>
      <div class="flex-item grow-2">grow: 2</div>
      <div class="flex-item grow-1">grow: 1</div>
    </div>
    <p class="calc-note">余白を 1:2:1 の比率で配分</p>
    
    <h4>不足分の縮小（flex-shrink）</h4>
    <div class="flex-container shrink-demo">
      <div class="flex-item shrink-1">shrink: 1</div>
      <div class="flex-item shrink-0">shrink: 0</div>
      <div class="flex-item shrink-2">shrink: 2</div>
    </div>
    <p class="calc-note">縮小率 1:0:2 で調整</p>
  </div>
  <p class="step-note">余白がある場合はflex-grow、不足する場合はflex-shrinkで調整</p>
</div>`,cssCode:`.flexible-demo h4 {
  margin: 15px 0 8px 0;
  color: #ff5722;
  font-size: 16px;
}

.flex-container {
  display: flex;
  gap: 10px;
  width: 320px;
  padding: 15px;
  background-color: #fbe9e7;
  border: 2px solid #ff5722;
  border-radius: 6px;
  margin-bottom: 8px;
}

.flex-item {
  flex-basis: 80px;
  padding: 12px;
  background-color: #ff5722;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;
}

.grow-1 { flex-grow: 1; }
.grow-2 { flex-grow: 2; background-color: #d84315; }

.shrink-1 { flex-shrink: 1; }
.shrink-0 { flex-shrink: 0; background-color: #bf360c; }
.shrink-2 { flex-shrink: 2; }

.calc-note {
  margin: 0 0 15px 15px;
  font-size: 12px;
  color: #666;
  font-style: italic;
}

.step-note {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #1976d2;
  font-size: 14px;
  color: #333;
}`},{subtitle:"ステップ6: 最終的な配置と整列",htmlCode:`<div class="step6-example">
  <div class="alignment-demo">
    <h4>主軸方向の配置（justify-content）</h4>
    <div class="align-container justify-demo">
      <div class="align-item">1</div>
      <div class="align-item">2</div>
      <div class="align-item">3</div>
    </div>
    
    <h4>交差軸方向の配置（align-items）</h4>
    <div class="align-container align-demo">
      <div class="align-item">1</div>
      <div class="align-item tall-item">2<br>tall</div>
      <div class="align-item">3</div>
    </div>
  </div>
  <p class="step-note">最後に配置プロパティが適用されて最終的なレイアウトが決定</p>
</div>`,cssCode:`.alignment-demo h4 {
  margin: 15px 0 8px 0;
  color: #009688;
  font-size: 16px;
}

.align-container {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e0f2f1;
  border: 2px solid #009688;
  border-radius: 6px;
  margin-bottom: 15px;
}

.justify-demo {
  justify-content: space-between;
  width: 280px;
}

.align-demo {
  align-items: center;
  height: 80px;
}

.align-item {
  padding: 12px;
  background-color: #009688;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;
}

.tall-item {
  line-height: 1.2;
}

.step-note {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #1976d2;
  font-size: 14px;
  color: #333;
}`}],relatedItems:["flex-calculation","flex-basis","flex-grow"]};export{i as default,i as item};
