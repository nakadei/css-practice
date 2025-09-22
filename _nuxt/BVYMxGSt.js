const i={id:"flex-direction",title:"flex-direction",description:`
    flex-directionプロパティは、Flexコンテナ内でアイテムが配置される主軸（main axis）の方向を制御します。このプロパティにより、横並び・縦並び・逆順配置を自由に切り替えることができます。

    設定値:
      - 'row' (デフォルト): 左から右への横並び配置
      - 'row-reverse': 右から左への横並び配置
      - 'column': 上から下への縦並び配置
      - 'column-reverse': 下から上への縦並び配置

    主軸と交差軸:
      - row/row-reverse: 主軸は水平、交差軸は垂直
      - column/column-reverse: 主軸は垂直、交差軸は水平
      - justify-contentは主軸方向、align-itemsは交差軸方向の配置を制御

    実用例:
      - ヘッダーナビゲーション: row
      - サイドバーレイアウト: row
      - 縦型メニュー: column
      - モバイル対応でのレイアウト切り替え
    `,demos:[{subtitle:"row - 横並び（左から右）",htmlCode:`<div class="flex-row">
  <div class="direction-item">1</div>
  <div class="direction-item">2</div>
  <div class="direction-item">3</div>
  <div class="direction-item">4</div>
</div>`,cssCode:`.flex-row {
  display: flex;
  flex-direction: row; /* デフォルト値 */
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
}

.direction-item {
  width: 60px;
  height: 60px;
  background-color: #2196f3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"row-reverse - 横並び（右から左）",htmlCode:`<div class="flex-row-reverse">
  <div class="direction-item">1</div>
  <div class="direction-item">2</div>
  <div class="direction-item">3</div>
  <div class="direction-item">4</div>
</div>`,cssCode:`.flex-row-reverse {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
}

.direction-item {
  width: 60px;
  height: 60px;
  background-color: #9c27b0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"column - 縦並び（上から下）",htmlCode:`<div class="flex-column">
  <div class="direction-item">1</div>
  <div class="direction-item">2</div>
  <div class="direction-item">3</div>
  <div class="direction-item">4</div>
</div>`,cssCode:`.flex-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  width: 120px; /* 縦並びなので幅を制限 */
}

.direction-item {
  width: 60px;
  height: 60px;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"column-reverse - 縦並び（下から上）",htmlCode:`<div class="flex-column-reverse">
  <div class="direction-item">1</div>
  <div class="direction-item">2</div>
  <div class="direction-item">3</div>
  <div class="direction-item">4</div>
</div>`,cssCode:`.flex-column-reverse {
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  padding: 15px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  width: 120px; /* 縦並びなので幅を制限 */
}

.direction-item {
  width: 60px;
  height: 60px;
  background-color: #ff9800;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"実用例: レスポンシブレイアウト",htmlCode:`<!-- レスポンシブでdirectionを切り替える例 -->
<div class="responsive-nav">
  <div class="nav-item">ホーム</div>
  <div class="nav-item">サービス</div>
  <div class="nav-item">会社概要</div>
  <div class="nav-item">お問い合わせ</div>
</div>

<p class="note">画面サイズによってrow ⇔ columnが切り替わります</p>`,cssCode:`.responsive-nav {
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 15px;
  background-color: #f5f5f5;
  border: 2px solid #666;
  border-radius: 8px;
}

.nav-item {
  padding: 12px 20px;
  background-color: #2196f3;
  color: white;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-item:hover {
  background-color: #1976d2;
}

/* モバイル対応: 768px以下で縦並びに変更 */
@media (max-width: 768px) {
  .responsive-nav {
    flex-direction: column;
    width: 200px;
  }
}

.note {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  font-style: italic;
}`}],relatedItems:["justify-content","align-items","flex-wrap"]};export{i as default,i as item};
