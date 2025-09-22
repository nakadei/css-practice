const s={id:"flex-basis",title:"flex-basis",description:`
    flex-basisプロパティは、Flexアイテムの初期サイズ（基準サイズ）を指定します。flex-growやflex-shrinkの計算の出発点となる重要なプロパティです。

    重要なポイント:
      - デフォルト値は 'auto'（widthまたはheightの値を使用）
      - 主軸方向のサイズを指定（flex-direction: rowなら幅、columnなら高さ）
      - widthやheightより優先される
      - 長さ、パーセンテージ、autoキーワードが指定可能

    設定値:
      - 長さ: 200px, 10em, 5rem など
      - パーセンテージ: 50%, 33.333% など  
      - auto: widthまたはheightの値を使用
      - content: 内容のサイズに基づく（一部ブラウザで対応）

    widthとの違い:
      - flex-basisはFlexレイアウトでのみ有効
      - flex-grow/shrinkの計算に使用される
      - レスポンシブ対応がより柔軟

    実用例:
      - レスポンシブグリッドの基準幅設定
      - カードレイアウトの基本サイズ
      - サイドバーとメインコンテンツの比率制御
    `,demos:[{subtitle:"flex-basis: auto（デフォルト）",htmlCode:`<div class="basis-auto">
  <div class="basis-item auto-basis">auto<br>(内容に応じて)</div>
  <div class="basis-item auto-basis">longer content text</div>
  <div class="basis-item auto-basis">短い</div>
</div>
<p class="note">各アイテムの内容に応じてサイズが決定される</p>`,cssCode:`.basis-auto {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
}

.basis-item {
  flex-basis: auto; /* デフォルト値 */
  flex-grow: 0;
  flex-shrink: 1;
  padding: 15px;
  background-color: #2196f3;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.note {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}`},{subtitle:"flex-basis: 固定値",htmlCode:`<div class="basis-fixed">
  <div class="basis-item basis-100">100px</div>
  <div class="basis-item basis-150">150px</div>
  <div class="basis-item basis-200">200px</div>
</div>
<p class="note">内容に関係なく指定したサイズになる</p>`,cssCode:`.basis-fixed {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
}

.basis-item {
  flex-grow: 0;
  flex-shrink: 1;
  padding: 15px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.basis-100 {
  flex-basis: 100px;
}

.basis-150 {
  flex-basis: 150px;
}

.basis-200 {
  flex-basis: 200px;
}

.note {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}`},{subtitle:"flex-basis: パーセンテージ",htmlCode:`<div class="basis-percentage">
  <div class="basis-item basis-25">25%</div>
  <div class="basis-item basis-50">50%</div>
  <div class="basis-item basis-25">25%</div>
</div>
<p class="note">コンテナサイズに対する相対的なサイズ</p>`,cssCode:`.basis-percentage {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  width: 400px;
}

.basis-item {
  flex-grow: 0;
  flex-shrink: 1;
  padding: 15px;
  background-color: #9c27b0;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.basis-25 {
  flex-basis: 25%;
}

.basis-50 {
  flex-basis: 50%;
}

.note {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}`}],relatedItems:["flex-grow","flex-shrink","flex"]};export{s as default,s as item};
