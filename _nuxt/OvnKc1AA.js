const r={id:"order",title:"order",description:`
    orderプロパティは、Flexアイテムの表示順序を制御します。HTMLの記述順序を変更することなく、視覚的な表示順序を自由に変更できる強力な機能です。

    重要なポイント:
      - デフォルト値は 0 です
      - 小さい値のアイテムが先に表示されます
      - 負の値も使用可能です
      - 同じorder値の場合は、HTMLの記述順序に従います
      - アクセシビリティに注意：スクリーンリーダーはHTMLの順序で読み上げます

    設定値:
      - 整数値（正、負、0）
      - 例: order: -1, order: 0, order: 1, order: 999

    実用例:
      - モバイルファーストなレスポンシブデザイン
      - 重要度に応じたコンテンツの並び替え
      - サイドバーとメインコンテンツの順序変更
      - CTA（Call to Action）ボタンの優先表示

    注意点:
      - SEOとアクセシビリティを考慮してHTMLの論理的順序を維持
      - orderは視覚的な順序のみを変更し、タブオーダーには影響しません
    `,demos:[{subtitle:"基本的なorder使用例",htmlCode:`<!-- HTMLの記述順序: A → B → C → D -->
<div class="order-basic">
  <div class="order-item order-a">A (order: 2)</div>
  <div class="order-item order-b">B (order: 1)</div>
  <div class="order-item order-c">C (order: 4)</div>
  <div class="order-item order-d">D (order: 3)</div>
</div>
<p class="note">表示順序: B → A → D → C</p>`,cssCode:`.order-basic {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
}

.order-item {
  flex: 1;
  padding: 15px;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
}

.order-a {
  order: 2;
  background-color: #f44336;
}

.order-b {
  order: 1;
  background-color: #4caf50;
}

.order-c {
  order: 4;
  background-color: #ff9800;
}

.order-d {
  order: 3;
  background-color: #9c27b0;
}

.note {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}`},{subtitle:"負の値を使用した優先表示",htmlCode:`<!-- 重要なアイテムを最初に表示 -->
<div class="order-priority">
  <div class="priority-item normal">通常項目 1</div>
  <div class="priority-item normal">通常項目 2</div>
  <div class="priority-item urgent">緊急項目 (order: -1)</div>
  <div class="priority-item normal">通常項目 3</div>
  <div class="priority-item important">重要項目 (order: -2)</div>
</div>
<p class="note">重要 → 緊急 → 通常1 → 通常2 → 通常3</p>`,cssCode:`.order-priority {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15px;
  background-color: #f5f5f5;
  border: 2px solid #666;
  width: 300px;
}

.priority-item {
  padding: 12px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
}

.normal {
  order: 0; /* デフォルト値 */
  background-color: #e0e0e0;
  color: #333;
}

.urgent {
  order: -1; /* 通常より優先 */
  background-color: #ff5722;
  color: white;
}

.important {
  order: -2; /* 最優先 */
  background-color: #d32f2f;
  color: white;
}

.note {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}`}],relatedItems:["flex-direction","justify-content","align-items"]};export{r as default,r as item};
