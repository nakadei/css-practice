const i={id:"align-items",title:"align-items",description:`
    align-itemsプロパティは、Flexコンテナの交差軸（cross axis）方向におけるアイテムの配置方法を制御します。justify-contentが主軸方向の配置を制御するのに対し、align-itemsは垂直方向の配置を制御します。

    設定値:
      - 'stretch' (デフォルト): アイテムを交差軸方向に引き伸ばして配置
      - 'flex-start': 交差軸の開始位置に配置
      - 'flex-end': 交差軸の終了位置に配置
      - 'center': 交差軸の中央に配置
      - 'baseline': アイテムのベースライン（文字のライン）で配置

    交差軸の方向:
      - flex-direction: row → 垂直方向（上下）
      - flex-direction: column → 水平方向（左右）

    実用例:
      - 垂直中央揃え（最も重要な用途）
      - カードやボタンの高さ合わせ
      - アイコンとテキストの配置調整
      - ベースライン揃えでのテキスト配置
    `,demos:[{subtitle:"stretch - 引き伸ばし（デフォルト）",htmlCode:`<div class="align-stretch">
  <div class="align-item short">短い</div>
  <div class="align-item medium">中くらいの<br>コンテンツ</div>
  <div class="align-item long">長いコンテンツが<br>入っている場合の<br>例です</div>
</div>`,cssCode:`.align-stretch {
  display: flex;
  align-items: stretch; /* デフォルト値 */
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  height: 120px;
}

.align-item {
  flex: 1;
  padding: 10px;
  background-color: #2196f3;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  /* heightを指定しないとstretchで引き伸ばされる */
}

.short { background-color: #1976d2; }
.medium { background-color: #1565c0; }
.long { background-color: #0d47a1; }`},{subtitle:"flex-start - 交差軸の開始位置",htmlCode:`<div class="align-flex-start">
  <div class="align-item short">短い</div>
  <div class="align-item medium">中くらいの<br>コンテンツ</div>
  <div class="align-item long">長いコンテンツが<br>入っている場合の<br>例です</div>
</div>`,cssCode:`.align-flex-start {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  height: 120px;
}

.align-item {
  flex: 1;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
}

.short { background-color: #388e3c; }
.medium { background-color: #2e7d32; }
.long { background-color: #1b5e20; }`},{subtitle:"flex-end - 交差軸の終了位置",htmlCode:`<div class="align-flex-end">
  <div class="align-item short">短い</div>
  <div class="align-item medium">中くらいの<br>コンテンツ</div>
  <div class="align-item long">長いコンテンツが<br>入っている場合の<br>例です</div>
</div>`,cssCode:`.align-flex-end {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  height: 120px;
}

.align-item {
  flex: 1;
  padding: 10px;
  background-color: #9c27b0;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
}

.short { background-color: #8e24aa; }
.medium { background-color: #7b1fa2; }
.long { background-color: #6a1b9a; }`},{subtitle:"center - 交差軸の中央（最も重要）",htmlCode:`<div class="align-items-center">
  <div class="align-item short">短い</div>
  <div class="align-item medium">中くらいの<br>コンテンツ</div>
  <div class="align-item long">長いコンテンツが<br>入っている場合の<br>例です</div>
</div>`,cssCode:`.align-items-center {
  display: flex;
  align-items: center; /* 垂直中央揃え */
  gap: 10px;
  padding: 15px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  height: 120px;
}

.align-item {
  flex: 1;
  padding: 10px;
  background-color: #ff9800;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
}

.short { background-color: #f57c00; }
.medium { background-color: #ef6c00; }
.long { background-color: #e65100; }`},{subtitle:"baseline - ベースライン揃え",htmlCode:`<div class="align-baseline">
  <div class="baseline-item small">小</div>
  <div class="baseline-item medium">中サイズ</div>
  <div class="baseline-item large">大きいサイズ</div>
</div>`,cssCode:`.align-baseline {
  display: flex;
  align-items: baseline; /* テキストのベースラインで揃える */
  gap: 15px;
  padding: 15px;
  background-color: #e0f2f1;
  border: 2px solid #009688;
  height: 120px;
}

.baseline-item {
  padding: 10px;
  background-color: #009688;
  color: white;
  text-align: center;
  border-radius: 6px;
}

.small { font-size: 12px; }
.medium { font-size: 16px; }
.large { font-size: 24px; }
`},{subtitle:"実用例: アイコンとテキストの配置",htmlCode:`<div class="icon-text-list">
  <div class="list-item">
    <div class="icon">🏠</div>
    <div class="text">ホーム</div>
  </div>
  <div class="list-item">
    <div class="icon">👤</div>
    <div class="text">プロフィール</div>
  </div>
  <div class="list-item">
    <div class="icon">⚙️</div>
    <div class="text">設定<br><small>詳細オプション</small></div>
  </div>
</div>`,cssCode:`.icon-text-list {
  width: 200px;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.list-item {
  display: flex;
  align-items: center; /* アイコンとテキストを垂直中央に */
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.2s;
}

.list-item:hover {
  background-color: #e0e0e0;
}

.list-item:last-child {
  border-bottom: none;
}

.icon {
  font-size: 20px;
  margin-right: 12px;
  flex-shrink: 0; /* アイコンのサイズを固定 */
}

.text {
  font-size: 14px;
  line-height: 1.3;
}

.text small {
  display: block;
  color: #666;
  font-size: 12px;
}`}],relatedItems:["justify-content","align-content","flex-direction"]};export{i as default,i as item};
