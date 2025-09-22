const i={id:"flexbox-flow",title:"Flexboxレイアウト処理の流れ",description:`
    Flexboxのレイアウトアルゴリズムは、CSS仕様で詳細に定義された手順に従って実行されます。この処理の流れを理解することで、Flexboxの動作を予測し、効果的に使用できるようになります。

    主要な処理ステップ:
      1. Flexコンテナとアイテムの特定
      2. 主軸と交差軸の決定
      3. Flexライン（行）の生成
      4. アイテムの初期サイズ決定
      5. フレキシブルサイズの計算
      6. アイテムの配置と整列

    重要なポイント:
      - 各ステップは順次実行される
      - 前のステップの結果が次のステップに影響する
      - flex-wrap の設定により処理が大きく変わる
      - 計算の複雑さがFlexboxの柔軟性の源泉

    理解のメリット:
      - レイアウトの予測可能性向上
      - パフォーマンスの最適化
      - デバッグ能力の向上
      - より効果的なCSS設計
    `,demos:[{subtitle:"ステップ1: コンテナとアイテムの特定",htmlCode:`<!-- ステップ1: Flexコンテナ設定 -->
<div class="step1-container">
  <div class="step1-item">アイテム1</div>
  <div class="step1-item">アイテム2</div>
  <div class="step1-item">アイテム3</div>
</div>
<p class="step-description">
  'display: flex' により、コンテナとその直接の子要素（アイテム）が特定される
</p>`,cssCode:`.step1-container {
  display: flex; /* Flexコンテナとして設定 */
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

.step-description {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #2196f3;
  font-size: 14px;
  line-height: 1.5;
}`},{subtitle:"ステップ2: 主軸と交差軸の決定",htmlCode:`<!-- flex-direction により軸が決定される -->
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
<p class="step-description">
  flex-direction の値により主軸と交差軸が決定される
</p>`,cssCode:`.axis-demo {
  display: flex;
  gap: 20px;
  padding: 15px;
  background-color: #f5f5f5;
}

.axis-container {
  position: relative;
  padding: 15px;
  border: 2px solid #666;
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
  color: #666;
  font-weight: bold;
}

.step-description {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #2196f3;
  font-size: 14px;
  line-height: 1.5;
}`},{subtitle:"ステップ3: Flexライン（行）の生成",htmlCode:`<!-- flex-wrap により行の生成方法が決定 -->
<div class="line-demo">
  <div class="line-container nowrap-demo">
    <h4>nowrap（単一行）</h4>
    <div class="line-items">
      <div class="line-item">1</div>
      <div class="line-item">2</div>
      <div class="line-item">3</div>
      <div class="line-item">4</div>
      <div class="line-item">5</div>
    </div>
  </div>
  
  <div class="line-container wrap-demo">
    <h4>wrap（複数行）</h4>
    <div class="line-items wrap-items">
      <div class="line-item">1</div>
      <div class="line-item">2</div>
      <div class="line-item">3</div>
      <div class="line-item">4</div>
      <div class="line-item">5</div>
    </div>
  </div>
</div>
<p class="step-description">
  flex-wrap の設定により、単一行か複数行かが決定される
</p>`,cssCode:`.line-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
  background-color: #f8f9fa;
}

.line-container {
  padding: 15px;
  border: 2px solid #4caf50;
  border-radius: 6px;
  background-color: white;
}

.line-container h4 {
  margin: 0 0 10px 0;
  color: #2e7d32;
}

.line-items {
  display: flex;
  gap: 8px;
  width: 250px; /* 意図的に狭く */
}

.wrap-items {
  flex-wrap: wrap;
}

.line-item {
  flex: 0 0 80px; /* 固定幅で折り返しを促す */
  height: 40px;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}

.step-description {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #2196f3;
  font-size: 14px;
  line-height: 1.5;
}`},{subtitle:"ステップ4: 初期サイズの決定",htmlCode:`<!-- flex-basis により初期サイズが決定 -->
<div class="size-demo">
  <div class="size-step">
    <h4>1. flex-basis の適用</h4>
    <div class="size-container">
      <div class="size-item basis-auto">auto</div>
      <div class="size-item basis-100">100px</div>
      <div class="size-item basis-percent">30%</div>
    </div>
  </div>
  
  <div class="size-step">
    <h4>2. min/max の制約適用</h4>
    <div class="size-container">
      <div class="size-item constrained-item">制約あり</div>
      <div class="size-item normal-item">通常</div>
    </div>
  </div>
</div>
<p class="step-description">
  flex-basis → min/max-width/height → 内容サイズ の順で初期サイズが決定
</p>
`,cssCode:`.size-demo {
  padding: 15px;
  background-color: #fff3e0;
  border-radius: 8px;
}

.size-step {
  margin-bottom: 20px;
  padding: 15px;
  border: 2px solid #ff9800;
  border-radius: 6px;
  background-color: white;
}

.size-step h4 {
  margin: 0 0 10px 0;
  color: #e65100;
}

.size-container {
  display: flex;
  gap: 10px;
}

.size-item {
  padding: 12px;
  background-color: #ff9800;
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
  background-color: #e65100;
}

.normal-item {
  flex-basis: 100px;
}

.step-description {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #2196f3;
  font-size: 14px;
  line-height: 1.5;
}`},{subtitle:"ステップ5: フレキシブルサイズの計算",htmlCode:`<!-- flex-grow/shrink による調整 -->
<div class="flexible-demo">
  <div class="calc-step">
    <h4>余白の配分（flex-grow）</h4>
    <div class="calc-container grow-demo">
      <div class="calc-item grow-1">grow: 1</div>
      <div class="calc-item grow-2">grow: 2</div>
      <div class="calc-item grow-1">grow: 1</div>
    </div>
    <p class="calc-note">余白を 1:2:1 の比率で配分</p>
  </div>
  
  <div class="calc-step">
    <h4>不足分の縮小（flex-shrink）</h4>
    <div class="calc-container shrink-demo">
      <div class="calc-item shrink-1">shrink: 1</div>
      <div class="calc-item shrink-0">shrink: 0</div>
      <div class="calc-item shrink-2">shrink: 2</div>
    </div>
    <p class="calc-note">縮小率 1:0:2 で調整</p>
  </div>
</div>
<p class="step-description">
  余白がある場合はflex-grow、不足する場合はflex-shrinkで調整
</p>
<p class="step-description">
  先に flex-wrap の計算が行われるため、縮小すれば収まる場合でも必ず改行される。逆に nowrap の場合は、収まらなくても無理やり1行に押し込められる。
</p>`,cssCode:`.flexible-demo {
  padding: 15px;
  background-color: #f3e5f5;
  border-radius: 8px;
}

.calc-step {
  margin-bottom: 20px;
  padding: 15px;
  border: 2px solid #9c27b0;
  border-radius: 6px;
  background-color: white;
}

.calc-step h4 {
  margin: 0 0 10px 0;
  color: #6a1b9a;
}

.calc-container {
  display: flex;
  gap: 10px;
  width: 300px;
}

.calc-item {
  flex-basis: 80px;
  padding: 12px;
  background-color: #9c27b0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;
}

.grow-1 { flex-grow: 1; }
.grow-2 { flex-grow: 2; background-color: #7b1fa2; }

.shrink-1 { flex-shrink: 1; }
.shrink-0 { flex-shrink: 0; background-color: #ad2e3c; }
.shrink-2 { flex-shrink: 2; }

.calc-note {
  margin: 8px 0 0 0;
  font-size: 12px;
  color: #666;
  font-style: italic;
}

.step-description {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #2196f3;
  font-size: 14px;
  line-height: 1.5;
}`},{subtitle:"ステップ6: 最終的な配置と整列",htmlCode:`<!-- justify-content と align-items による最終調整 -->
<div class="alignment-demo">
  <div class="align-step">
    <h4>主軸方向の配置（justify-content）</h4>
    <div class="align-container justify-demo">
      <div class="align-item">1</div>
      <div class="align-item">2</div>
      <div class="align-item">3</div>
    </div>
  </div>
  
  <div class="align-step">
    <h4>交差軸方向の配置（align-items）</h4>
    <div class="align-container align-demo">
      <div class="align-item">1</div>
      <div class="align-item tall-item">2<br>tall</div>
      <div class="align-item">3</div>
    </div>
  </div>
</div>
<p class="step-description">
  最後に配置プロパティが適用されて最終的なレイアウトが決定
</p>`,cssCode:`.alignment-demo {
  padding: 15px;
  background-color: #e0f2f1;
  border-radius: 8px;
}

.align-step {
  margin-bottom: 20px;
  padding: 15px;
  border: 2px solid #009688;
  border-radius: 6px;
  background-color: white;
}

.align-step h4 {
  margin: 0 0 10px 0;
  color: #00695c;
}

.align-container {
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #e0f2f1;
  border-radius: 4px;
}

.justify-demo {
  justify-content: space-between;
  width: 250px;
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

.step-description {
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f8ff;
  border-left: 4px solid #2196f3;
  font-size: 14px;
  line-height: 1.5;
}`}],relatedItems:["flex-calculation","w3c-spec"]};export{i as default,i as item};
