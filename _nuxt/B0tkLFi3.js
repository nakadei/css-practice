const e={id:"justify-content",title:"justify-content",description:`
    justify-contentプロパティは、Flexコンテナの主軸（main axis）方向におけるアイテムの配置方法を制御します。アイテム間の余白の配分や整列方法を決定する重要なプロパティです。

    設定値:
      - 'flex-start' (デフォルト): 主軸の開始位置に配置
      - 'flex-end': 主軸の終了位置に配置
      - 'center': 主軸の中央に配置
      - 'space-between': 最初と最後を端に配置し、間を等間隔に
      - 'space-around': 各アイテムの周りに等しい余白を配置
      - 'space-evenly': すべての間隔を等しく配置

    主軸の方向:
      - flex-direction: row → 水平方向（左右）
      - flex-direction: column → 垂直方向（上下）

    実用例:
      - ヘッダーのナビゲーション配置
      - ボタンやコントロールの配置
      - カードレイアウトの調整
    `,demos:[{subtitle:"flex-start - 開始位置に配置（デフォルト）",htmlCode:`<div class="justify-flex-start">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>`,cssCode:`.justify-flex-start {
  display: flex;
  justify-content: flex-start; /* デフォルト値 */
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  width: 400px;
}

.justify-item {
  width: 60px;
  height: 60px;
  background-color: #2196f3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"flex-end - 終了位置に配置",htmlCode:`<div class="justify-flex-end">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>`,cssCode:`.justify-flex-end {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  width: 400px;
}

.justify-item {
  width: 60px;
  height: 60px;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"center - 中央に配置",htmlCode:`<div class="justify-center-demo">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>`,cssCode:`.justify-center-demo {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background-color: #f3e5f5;
  border: 2px solid #9c27b0;
  width: 400px;
}

.justify-item {
  width: 60px;
  height: 60px;
  background-color: #9c27b0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"space-between - 端配置＋等間隔",htmlCode:`<div class="justify-space-between">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>`,cssCode:`.justify-space-between {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff3e0;
  border: 2px solid #ff9800;
  width: 400px;
}

.justify-item {
  width: 60px;
  height: 60px;
  background-color: #ff9800;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"space-around - 周りに等しい余白",htmlCode:`<div class="justify-space-around">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>`,cssCode:`.justify-space-around {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background-color: #ffebee;
  border: 2px solid #f44336;
  width: 400px;
}

.justify-item {
  width: 60px;
  height: 60px;
  background-color: #f44336;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"space-evenly - すべて等間隔",htmlCode:`<div class="justify-space-evenly">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>`,cssCode:`.justify-space-evenly {
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  background-color: #e0f2f1;
  border: 2px solid #009688;
  width: 400px;
}

.justify-item {
  width: 60px;
  height: 60px;
  background-color: #009688;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
}`},{subtitle:"実用例: ヘッダーナビゲーション",htmlCode:`<header class="header">
  <div class="logo">LOGO</div>
  <nav class="nav">
    <div class="nav-item">Home</div>
    <div class="nav-item">About</div>
    <div class="nav-item">Services</div>
    <div class="nav-item">Contact</div>
  </nav>
  <div class="actions">
    <button class="btn-login">Login</button>
  </div>
</header>`,cssCode:`.header {
  display: flex;
  justify-content: space-between; /* ロゴ、ナビ、アクションを左右に配置 */
  align-items: center;
  padding: 12px 20px;
  background-color: #1976d2;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav {
  display: flex;
  justify-content: center; /* ナビ項目を中央寄せ */
  gap: 20px;
}

.nav-item {
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-login {
  padding: 8px 16px;
  background-color: #ff5722;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.btn-login:hover {
  background-color: #d84315;
}`},{subtitle:"実用例: カードのアクションボタン",htmlCode:`<div class="card">
  <div class="card-content">
    <h3>商品名</h3>
    <p>商品の説明文がここに入ります。</p>
  </div>
  <div class="card-actions">
    <button class="btn-secondary">詳細</button>
    <button class="btn-primary">購入</button>
  </div>
</div>`,cssCode:`.card {
  width: 300px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.card-content p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}

.card-actions {
  display: flex;
  justify-content: flex-end; /* ボタンを右寄せ */
  gap: 10px;
  padding: 15px 20px;
  background-color: #f9f9f9;
}

.btn-secondary {
  padding: 8px 16px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  padding: 8px 16px;
  background-color: #2196f3;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}`}],relatedItems:["align-items","flex-direction","align-content"]};export{e as default,e as item};
