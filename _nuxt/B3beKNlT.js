const i={id:"flex-shrink",title:"flex-shrink",description:`
    flex-shrinkプロパティは、Flexアイテムがコンテナのサイズに収まらない場合の縮小率を制御します。スペースが不足した際に、各アイテムがどの程度縮小するかを決定します。

    重要なポイント:
      - デフォルト値は 1 （縮小を許可）
      - 0 を指定すると縮小を禁止
      - 1より大きい値を設定すると、その値に比例してより多く縮小される（例：flex-shrink: 2なら他の2倍縮小）
      - 負の値は無効（0として扱われる）
      - flex-grow、flex-basisと組み合わせて使用

    動作原理:
      - 全アイテムの基準サイズの合計がコンテナより大きい場合に発動
      - 各アイテムの「基準サイズ × flex-shrink値」に比例して縮小
      - flex-shrinkが0のアイテムは縮小されない

    設定値:
      - 数値（0以上の値）
      - 例: flex-shrink: 0, flex-shrink: 1, flex-shrink: 2
    `,demos:[{subtitle:"デフォルト動作（flex-shrink: 1）",htmlCode:`<div class="shrink-default">
  <div class="shrink-item item-1">アイテム1<br>(shrink: 1)</div>
  <div class="shrink-item item-2">アイテム2<br>(shrink: 1)</div>
  <div class="shrink-item item-3">アイテム3<br>(shrink: 1)</div>
</div>
<p class="note">コンテナ幅300px、各アイテム基準幅150px → 等しく縮小</p>`,cssCode:`.shrink-default {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  width: 300px; /* 意図的に狭く設定 */
}

.shrink-item {
  flex-basis: 150px; /* 基準幅150px */
  flex-shrink: 1; /* デフォルト値 */
  flex-grow: 0;
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
}`},{subtitle:"flex-shrink: 0 - 縮小禁止",htmlCode:`<div class="shrink-zero">
  <div class="shrink-item no-shrink">縮小しない<br>(shrink: 0)</div>
  <div class="shrink-item normal-shrink">通常縮小<br>(shrink: 1)</div>
  <div class="shrink-item normal-shrink">通常縮小<br>(shrink: 1)</div>
</div>
<p class="note">1つ目のアイテムのみ縮小せず、2・3番目が縮小</p>`,cssCode:`.shrink-zero {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  width: 300px;
}

.no-shrink {
  flex-basis: 120px;
  flex-shrink: 0; /* 縮小を禁止 */
  flex-grow: 0;
  background-color: #d32f2f !important;
}

.normal-shrink {
  flex-basis: 120px;
  flex-shrink: 1;
  flex-grow: 0;
  background-color: #4caf50 !important;
}

.shrink-item {
  padding: 15px;
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
}`},{subtitle:"異なる縮小率の比較",htmlCode:`<div class="shrink-comparison">
  <div class="shrink-item shrink-low">低縮小率<br>(shrink: 1)</div>
  <div class="shrink-item shrink-medium">中縮小率<br>(shrink: 3)</div>
  <div class="shrink-item shrink-high">高縮小率<br>(shrink: 5)</div>
</div>
<p class="note">縮小率の比は 1:3:5 → より多く縮小される（明確な差を確認できます）</p>`,cssCode:`.shrink-comparison {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  width: 400px; /* より狭く設定して縮小効果を強調 */
}

.shrink-item {
  flex-basis: 150px; /* より大きな基準幅で縮小差を明確化 */
  flex-grow: 0;
  padding: 15px;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shrink-low {
  flex-shrink: 1;
  background-color: #4caf50;
}

.shrink-medium {
  flex-shrink: 3; /* より大きな縮小率 */
  background-color: #ff9800;
}

.shrink-high {
  flex-shrink: 5; /* さらに大きな縮小率 */
  background-color: #f44336;
}

.note {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}`},{subtitle:"実用例: フォームレイアウト",htmlCode:`<form class="form-layout">
  <div class="form-group">
    <label>名前</label>
    <input type="text" placeholder="山田太郎">
  </div>
  <div class="form-group">
    <label>電話番号</label>
    <input type="tel" placeholder="090-1234-5678">
  </div>
  <div class="form-actions">
    <button type="button" class="btn-cancel">キャンセル</button>
    <button type="submit" class="btn-submit">送信</button>
  </div>
</form>
<p class="note">フォームフィールドは縮小可能、ボタンエリアは縮小しない</p>
`,cssCode:`.form-layout {
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 400px; /* 狭めに設定 */
}

.form-group {
  flex-shrink: 1; /* フォームフィールドは縮小可能 */
  flex-grow: 1;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-actions {
  flex-shrink: 0; /* ボタンエリアは縮小しない */
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 80px;
}

.btn-cancel,
.btn-submit {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-cancel {
  background-color: #e0e0e0;
  color: #333;
}

.btn-submit {
  background-color: #2196f3;
  color: white;
}`}],relatedItems:["flex-grow","flex-basis","flex"]};export{i as default,i as item};
