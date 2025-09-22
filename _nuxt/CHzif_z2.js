const i={id:"w3c-spec",title:"W3C仕様におけるFlexbox",description:`
    CSS Flexible Box Layout Module Level 1は、Flexboxレイアウトの正式なW3C仕様です。この仕様を理解することで、Flexboxの動作を根本から理解し、ブラウザ間の違いや将来の変更に対応できるようになります。

    W3C仕様の主要な構成要素:
      1. Flexコンテナ（Flex Container）の定義と役割
      2. Flexアイテム（Flex Item）の特性と制約
      3. 主軸（Main Axis）と交差軸（Cross Axis）の概念
      4. Flexラインの生成とアイテムの配置
      5. フレキシブルレイアウトアルゴリズム
      6. 配置と整列のメカニズム

    仕様の重要性:
      - ブラウザ実装の基準となる
      - 標準準拠の実装を保証
      - 将来の機能拡張の基盤
      - 相互運用性の確保

    実装者向けの詳細:
      - 計算アルゴリズムの精密な定義
      - エラーケースの処理方法
      - アクセシビリティ考慮事項
      - 既存技術との互換性
    `,demos:[{subtitle:"W3C仕様の基本概念：コンテナとアイテム",htmlCode:`<!-- W3C仕様によるFlexコンテナの定義 -->
<div class="spec-container">
  <div class="spec-explanation">
    <h4>W3C仕様の基本定義</h4>
    <p><strong>Flexコンテナ:</strong> display: flex または inline-flex が設定された要素</p>
    <p><strong>Flexアイテム:</strong> Flexコンテナの直接の子要素</p>
  </div>
  
  <div class="flex-container-example">
    <div class="container-label">Flex Container</div>
    <div class="flex-item-example">
      <span class="item-label">Flex Item 1</span>
    </div>
    <div class="flex-item-example">
      <span class="item-label">Flex Item 2</span>
    </div>
    <div class="flex-item-example">
      <span class="item-label">Flex Item 3</span>
      <div class="nested-content">
        <div class="nested-item">通常の子要素（Flexアイテムではない）</div>
      </div>
    </div>
  </div>
</div>`,cssCode:`.spec-container {
  padding: 20px;
  background-color: #f0f8ff;
  border: 2px solid #4169e1;
  border-radius: 8px;
}

.spec-explanation {
  margin-bottom: 20px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.spec-explanation h4 {
  margin: 0 0 10px 0;
  color: #4169e1;
}

.spec-explanation p {
  margin: 5px 0;
  font-size: 14px;
  color: #333;
}

.flex-container-example {
  position: relative;
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: #e6f2ff;
  border: 3px dashed #4169e1;
  border-radius: 6px;
}

.container-label {
  position: absolute;
  top: -12px;
  left: 10px;
  background-color: #4169e1;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 3px;
}

.flex-item-example {
  position: relative;
  flex: 1;
  padding: 15px;
  background-color: #fff;
  border: 2px solid #ff6b6b;
  border-radius: 4px;
}

.item-label {
  font-size: 12px;
  font-weight: bold;
  color: #ff6b6b;
}

.nested-content {
  margin-top: 10px;
  padding: 8px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.nested-item {
  font-size: 11px;
  color: #666;
}`},{subtitle:"W3C仕様の軸システム（Axis System）",htmlCode:`<!-- 主軸と交差軸の仕様による定義 -->
<div class="axis-specification">
  <div class="spec-explanation">
    <h4>W3C仕様による軸の定義</h4>
    <ul>
      <li><strong>主軸（Main Axis）:</strong> flex-directionで定義される主要な軸</li>
      <li><strong>交差軸（Cross Axis）:</strong> 主軸に垂直な軸</li>
      <li><strong>主軸開始（Main Start）:</strong> 主軸の開始点</li>
      <li><strong>主軸終了（Main End）:</strong> 主軸の終了点</li>
    </ul>
  </div>
  
  <div class="axis-demo-container">
    <div class="axis-demo row-demo">
      <div class="axis-label main-axis-horizontal">Main Axis →</div>
      <div class="axis-label cross-axis-vertical">Cross Axis ↓</div>
      <div class="axis-item">1</div>
      <div class="axis-item">2</div>
      <div class="axis-item">3</div>
    </div>
    
    <div class="axis-demo column-demo">
      <div class="axis-label main-axis-vertical">Main Axis ↓</div>
      <div class="axis-label cross-axis-horizontal">Cross Axis →</div>
      <div class="axis-item">1</div>
      <div class="axis-item">2</div>
      <div class="axis-item">3</div>
    </div>
  </div>
</div>`,cssCode:`.axis-specification {
  padding: 20px;
  background-color: #fff8f0;
  border: 2px solid #ff8c00;
  border-radius: 8px;
}

.spec-explanation {
  margin-bottom: 20px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.spec-explanation h4 {
  margin: 0 0 10px 0;
  color: #ff8c00;
}

.spec-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.spec-explanation li {
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.axis-demo-container {
  display: flex;
  gap: 30px;
  justify-content: space-around;
}

.axis-demo {
  position: relative;
  display: flex;
  gap: 10px;
  padding: 20px;
  background-color: #fff8f0;
  border: 2px solid #ff8c00;
  border-radius: 6px;
}

.row-demo {
  flex-direction: row;
}

.column-demo {
  flex-direction: column;
  height: 200px;
}

.axis-label {
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  color: #ff8c00;
  background-color: white;
  padding: 2px 6px;
  border-radius: 3px;
}

.main-axis-horizontal {
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
}

.cross-axis-vertical {
  top: 50%;
  left: -45px;
  transform: translateY(-50%) rotate(-90deg);
}

.main-axis-vertical {
  top: 50%;
  left: -45px;
  transform: translateY(-50%) rotate(-90deg);
}

.cross-axis-horizontal {
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
}

.axis-item {
  width: 40px;
  height: 40px;
  background-color: #ff8c00;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}`},{subtitle:"W3C仕様のレイアウトアルゴリズム",htmlCode:`<!-- 仕様で定義されたアルゴリズムの手順 -->
<div class="algorithm-specification">
  <div class="spec-explanation">
    <h4>W3C仕様によるFlexboxレイアウトアルゴリズム</h4>
    <p>仕様では、以下の9つの主要ステップでレイアウトが計算されると定義されています：</p>
  </div>
  
  <div class="algorithm-steps">
    <div class="step-item">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>Flexアイテムの特定</strong>
        <p>コンテナの直接の子要素をFlexアイテムとして認識</p>
      </div>
    </div>
    
    <div class="step-item">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>主軸の決定</strong>
        <p>flex-directionプロパティから主軸と交差軸を決定</p>
      </div>
    </div>
    
    <div class="step-item">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>Flexラインの生成</strong>
        <p>flex-wrapに基づいてアイテムを行（ライン）に分割</p>
      </div>
    </div>
    
    <div class="step-item">
      <div class="step-number">4</div>
      <div class="step-content">
        <strong>アイテムの基準サイズ決定</strong>
        <p>flex-basis, width/height, 内容サイズから基準を決定</p>
      </div>
    </div>
    
    <div class="step-item">
      <div class="step-number">5</div>
      <div class="step-content">
        <strong>フレキシブルサイズの計算</strong>
        <p>flex-grow/shrinkによる拡張・縮小計算</p>
      </div>
    </div>
  </div>
</div>`,cssCode:`.algorithm-specification {
  padding: 20px;
  background-color: #f5f0ff;
  border: 2px solid #8a2be2;
  border-radius: 8px;
}

.spec-explanation {
  margin-bottom: 25px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.spec-explanation h4 {
  margin: 0 0 10px 0;
  color: #8a2be2;
}

.spec-explanation p {
  margin: 0;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.algorithm-steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.step-number {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-color: #8a2be2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
}

.step-content {
  flex: 1;
}

.step-content strong {
  display: block;
  margin-bottom: 5px;
  color: #8a2be2;
  font-size: 16px;
}

.step-content p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}`},{subtitle:"W3C仕様の準拠性とブラウザサポート",htmlCode:`<!-- 仕様準拠の重要性 -->
<div class="compliance-info">
  <div class="spec-explanation">
    <h4>W3C仕様準拠の重要性</h4>
    <p>すべての主要ブラウザがW3C仕様に基づいてFlexboxを実装しており、相互運用性が保証されています。</p>
  </div>
  
  <div class="browser-support">
    <h5>ブラウザサポート状況</h5>
    <div class="support-grid">
      <div class="browser-item chrome">
        <div class="browser-icon">C</div>
        <div class="browser-name">Chrome</div>
        <div class="support-version">29+</div>
      </div>
      <div class="browser-item firefox">
        <div class="browser-icon">F</div>
        <div class="browser-name">Firefox</div>
        <div class="support-version">28+</div>
      </div>
      <div class="browser-item safari">
        <div class="browser-icon">S</div>
        <div class="browser-name">Safari</div>
        <div class="support-version">9+</div>
      </div>
      <div class="browser-item edge">
        <div class="browser-icon">E</div>
        <div class="browser-name">Edge</div>
        <div class="support-version">12+</div>
      </div>
    </div>
  </div>
  
  <div class="future-specs">
    <h5>将来の仕様拡張</h5>
    <ul>
      <li><strong>Flexbox Level 2:</strong> より詳細な制御オプション</li>
      <li><strong>CSS Grid統合:</strong> FlexboxとGridの連携強化</li>
      <li><strong>Container Queries:</strong> コンテナサイズベースの制御</li>
    </ul>
  </div>
</div>`,cssCode:`.compliance-info {
  padding: 20px;
  background-color: #f0f8f0;
  border: 2px solid #228b22;
  border-radius: 8px;
}

.spec-explanation {
  margin-bottom: 25px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.spec-explanation h4 {
  margin: 0 0 10px 0;
  color: #228b22;
}

.spec-explanation p {
  margin: 0;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.browser-support,
.future-specs {
  margin-bottom: 25px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.browser-support h5,
.future-specs h5 {
  margin: 0 0 15px 0;
  color: #228b22;
  font-size: 16px;
}

.support-grid {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.browser-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-width: 80px;
}

.browser-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
}

.chrome .browser-icon { background-color: #4285f4; }
.firefox .browser-icon { background-color: #ff7139; }
.safari .browser-icon { background-color: #1b88ca; }
.edge .browser-icon { background-color: #0078d4; }

.browser-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #333;
}

.support-version {
  font-size: 12px;
  color: #666;
}

.future-specs ul {
  margin: 0;
  padding-left: 20px;
}

.future-specs li {
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
}

.future-specs strong {
  color: #228b22;
}`},{subtitle:"W3C仕様のテスト例",htmlCode:`<!-- 仕様準拠のテストケース -->
<div class="spec-test-cases">
  <div class="spec-explanation">
    <h4>W3C仕様準拠テストケース</h4>
    <p>以下は、W3C仕様で定義された動作を確認するためのテストケースです。</p>
  </div>
  
  <div class="test-case">
    <h5>テスト1: flex: 1 1 0 の解釈</h5>
    <div class="test-container">
      <div class="test-item flex-1-1-0">flex: 1 1 0</div>
      <div class="test-item flex-1-1-0">flex: 1 1 0</div>
      <div class="test-item flex-1-1-0">flex: 1 1 0</div>
    </div>
    <p class="test-result">✓ 仕様通り：すべて等幅で配置される</p>
  </div>
  
  <div class="test-case">
    <h5>テスト2: min-width制約の優先度</h5>
    <div class="test-container narrow">
      <div class="test-item min-width-item">min-width: 100px</div>
      <div class="test-item normal-item">通常</div>
      <div class="test-item normal-item">通常</div>
    </div>
    <p class="test-result">✓ 仕様通り：min-widthが優先される</p>
  </div>
  
  <div class="test-case">
    <h5>テスト3: orderプロパティの効果</h5>
    <div class="test-container">
      <div class="test-item order-3">HTMLで1番目 (order: 3)</div>
      <div class="test-item order-1">HTMLで2番目 (order: 1)</div>
      <div class="test-item order-2">HTMLで3番目 (order: 2)</div>
    </div>
    <p class="test-result">✓ 仕様通り：表示順序が変更される</p>
  </div>
</div>`,cssCode:`.spec-test-cases {
  padding: 20px;
  background-color: #fffaf0;
  border: 2px solid #daa520;
  border-radius: 8px;
}

.spec-explanation {
  margin-bottom: 25px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.spec-explanation h4 {
  margin: 0 0 10px 0;
  color: #daa520;
}

.spec-explanation p {
  margin: 0;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.test-case {
  margin-bottom: 25px;
  padding: 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.test-case h5 {
  margin: 0 0 10px 0;
  color: #daa520;
  font-size: 16px;
}

.test-container {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #fffaf0;
  border: 1px solid #daa520;
  border-radius: 4px;
  margin-bottom: 10px;
}

.test-container.narrow {
  width: 250px;
}

.test-item {
  padding: 10px;
  background-color: #daa520;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.flex-1-1-0 {
  flex: 1 1 0;
}

.min-width-item {
  flex: 1;
  min-width: 100px;
  background-color: #cd853f;
}

.normal-item {
  flex: 1;
}

.order-1 { order: 1; background-color: #ffd700; color: #333; }
.order-2 { order: 2; background-color: #ff6347; }
.order-3 { order: 3; background-color: #32cd32; }

.test-result {
  margin: 0;
  font-size: 14px;
  color: #228b22;
  font-weight: bold;
}`}],relatedItems:["flexbox-flow","flex-calculation"]};export{i as default,i as item};
