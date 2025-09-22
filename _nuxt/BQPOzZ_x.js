const e={id:"align-content",title:"align-content",description:`
    align-contentプロパティは、flex-wrap: wrapで複数行になったFlexアイテムの行全体を交差軸方向にどう配置するかを制御します。align-itemsが個々のアイテムの配置を制御するのに対し、align-contentは行（フレックスライン）の配置を制御します。

    重要な注意点:
      - flex-wrap: nowrapの場合は効果がありません
      - 複数行になった場合のみ有効です
      - コンテナに十分な高さ（またはflex-direction: columnの場合は幅）が必要です

    設定値:
      - 'stretch' (デフォルト): 行を引き伸ばして配置
      - 'flex-start': 交差軸の開始位置に配置
      - 'flex-end': 交差軸の終了位置に配置
      - 'center': 交差軸の中央に配置
      - 'space-between': 最初と最後の行を端に配置し、間を等間隔に
      - 'space-around': 各行の周りに等しい余白を配置
      - 'space-evenly': すべての行間隔を等しく配置

    実用例:
      - レスポンシブグリッドの垂直配置
      - カードレイアウトの行間調整
      - タグクラウドの配置調整
    `,demos:[{subtitle:"stretch - 行を引き伸ばし（デフォルト）",htmlCode:`<div class="content-stretch">
  <div class="content-item">1</div>
  <div class="content-item">2</div>
  <div class="content-item">3</div>
  <div class="content-item">4</div>
  <div class="content-item">5</div>
  <div class="content-item">6</div>
</div>`,cssCode:`.content-stretch {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch; /* デフォルト値 */
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  height: 200px;
  width: 250px;
}

.content-item {
  flex: 0 0 100px; /* 固定幅で折り返しを強制 */
  padding: 15px;
  background-color: #2196f3;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}`},{subtitle:"flex-start - 交差軸の開始位置",htmlCode:`<div class="content-flex-start">
  <div class="content-item">1</div>
  <div class="content-item">2</div>
  <div class="content-item">3</div>
  <div class="content-item">4</div>
  <div class="content-item">5</div>
  <div class="content-item">6</div>
</div>`,cssCode:`.content-flex-start {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  height: 200px;
  width: 250px;
}

.content-item {
  flex: 0 0 100px;
  height: 40px; /* 高さを固定して効果を分かりやすく */
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}`},{subtitle:"flex-end - 交差軸の終了位置",htmlCode:`<div class="content-flex-end">
  <div class="content-item">1</div>
  <div class="content-item">2</div>
  <div class="content-item">3</div>
  <div class="content-item">4</div>
  <div class="content-item">5</div>
  <div class="content-item">6</div>
</div>`,cssCode:`.content-flex-end {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  height: 200px;
  width: 250px;
}

.content-item {
  flex: 0 0 100px;
  height: 40px;
  background-color: #9c27b0;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}`},{subtitle:"center - 交差軸の中央",htmlCode:`<div class="content-center">
  <div class="content-item">1</div>
  <div class="content-item">2</div>
  <div class="content-item">3</div>
  <div class="content-item">4</div>
  <div class="content-item">5</div>
  <div class="content-item">6</div>
</div>`,cssCode:`.content-center {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 10px;
  padding: 15px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  height: 200px;
  width: 250px;
}

.content-item {
  flex: 0 0 100px;
  height: 40px;
  background-color: #ff9800;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}`},{subtitle:"space-between - 行間を等間隔に",htmlCode:`<div class="content-space-between">
  <div class="content-item">1</div>
  <div class="content-item">2</div>
  <div class="content-item">3</div>
  <div class="content-item">4</div>
  <div class="content-item">5</div>
  <div class="content-item">6</div>
</div>`,cssCode:`.content-space-between {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 10px;
  padding: 15px;
  background-color: #ffebee;
  border: 2px solid #f44336;
  height: 200px;
  width: 250px;
}

.content-item {
  flex: 0 0 100px;
  height: 35px;
  background-color: #f44336;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}`},{subtitle:"space-around - 行の周りに等しい余白",htmlCode:`<div class="content-space-around">
  <div class="content-item">1</div>
  <div class="content-item">2</div>
  <div class="content-item">3</div>
  <div class="content-item">4</div>
  <div class="content-item">5</div>
  <div class="content-item">6</div>
</div>`,cssCode:`.content-space-around {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  gap: 10px;
  padding: 15px;
  background-color: #e0f2f1;
  border: 2px solid #009688;
  height: 200px;
  width: 250px;
}

.content-item {
  flex: 0 0 100px;
  height: 35px;
  background-color: #009688;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}`}],relatedItems:["align-items","flex-wrap","justify-content"]};export{e as default,e as item};
