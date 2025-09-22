const a={id:"flex-wrap",title:"flex-wrap",description:`
    flex-wrapプロパティは、Flexアイテムがコンテナの幅を超えた場合の折り返し動作を制御します。デフォルトでは折り返しは発生せず、アイテムは縮小されて1行に収まるよう調整されます。

    設定値:
      - 'nowrap' (デフォルト): 折り返さない。アイテムは1行に収まるよう縮小される
      - 'wrap': 必要に応じて折り返す。新しい行は下に作られる
      - 'wrap-reverse': 必要に応じて折り返す。新しい行は上に作られる

    重要なポイント:
      - wrapを使用すると複数行になり、align-contentプロパティが有効になります
      - nowrapの場合、アイテムのflex-shrinkにより自動的にサイズが調整されます
      - 折り返し後は各行が独立したFlexラインとして扱われます

    実用例:
      - カードレイアウト: wrap
      - レスポンシブグリッド: wrap
      - タグやラベルの表示: wrap
      - ツールバーのボタン配置
    `,demos:[{subtitle:"nowrap - 折り返しなし（デフォルト）",htmlCode:`<div class="flex-nowrap">
  <div class="wrap-item">アイテム1</div>
  <div class="wrap-item">アイテム2</div>
  <div class="wrap-item">アイテム3</div>
  <div class="wrap-item">アイテム4</div>
  <div class="wrap-item">アイテム5</div>
  <div class="wrap-item">アイテム6</div>
</div>`,cssCode:`.flex-nowrap {
  display: flex;
  flex-wrap: nowrap; /* デフォルト値 */
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  width: 400px; /* 意図的に狭く設定 */
}

.wrap-item {
  min-width: 80px; /* 最小幅を設定 */
  padding: 12px;
  background-color: #2196f3;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
}`},{subtitle:"wrap - 下方向への折り返し",htmlCode:`<div class="flex-wrap">
  <div class="wrap-item">アイテム1</div>
  <div class="wrap-item">アイテム2</div>
  <div class="wrap-item">アイテム3</div>
  <div class="wrap-item">アイテム4</div>
  <div class="wrap-item">アイテム5</div>
  <div class="wrap-item">アイテム6</div>
</div>`,cssCode:`.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  width: 400px; /* 意図的に狭く設定 */
}

.wrap-item {
  min-width: 80px;
  flex: 0 0 auto; /* 縮小させない */
  padding: 12px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
}`},{subtitle:"wrap-reverse - 上方向への折り返し",htmlCode:`<div class="flex-wrap-reverse">
  <div class="wrap-item">アイテム1</div>
  <div class="wrap-item">アイテム2</div>
  <div class="wrap-item">アイテム3</div>
  <div class="wrap-item">アイテム4</div>
  <div class="wrap-item">アイテム5</div>
  <div class="wrap-item">アイテム6</div>
</div>`,cssCode:`.flex-wrap-reverse {
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  width: 400px; /* 意図的に狭く設定 */
}

.wrap-item {
  min-width: 80px;
  flex: 0 0 auto; /* 縮小させない */
  padding: 12px;
  background-color: #9c27b0;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
}`},{subtitle:"実用例: タグ表示",htmlCode:`<div class="tag-container">
  <div class="demo-tag">JavaScript</div>
  <div class="demo-tag">TypeScript</div>
  <div class="demo-tag">Vue.js</div>
  <div class="demo-tag">React</div>
  <div class="demo-tag">Angular</div>
  <div class="demo-tag">Node.js</div>
  <div class="demo-tag">Express</div>
  <div class="demo-tag">MongoDB</div>
  <div class="demo-tag">CSS</div>
  <div class="demo-tag">HTML</div>
</div>`,cssCode:`.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 15px;
  background-color: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 8px;
  max-width: 300px; /* 幅を制限してwrapを促す */
}

.tag-container .demo-tag {
  padding: 6px 12px;
  background-color: #ff5722;
  color: white;
  border-radius: 15px;
  font-size: 13px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s;
}

.tag-container .demo-tag:hover {
  background-color: #d84315;
}`}],relatedItems:["align-content","justify-content"]};export{a as default,a as item};
