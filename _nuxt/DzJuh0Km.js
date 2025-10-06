const i={id:"complex-patterns",title:"複雑なFlexboxレイアウトパターン",description:`
    flex-basis、flex-shrink、flex-growを組み合わせた実用的で複雑なレイアウトパターンを学習できます。
    現代的なWebアプリケーションで頻繁に使用される実践的なレイアウト例を紹介します。
    
    各パターンは実際のプロジェクトで使用できるよう、Vuetifyコンポーネントとの統合例も含んでいます。
  `,demos:[{subtitle:"Holy Grail Layout（聖杯レイアウト）",description:"ヘッダー・フッター固定、サイドバー固定幅、メインコンテンツ可変の定番レイアウト",htmlCode:`<div class="holy-grail-demo">
  <!-- ヘッダー -->
  <header class="hg-header">
    <div class="hg-header-content">
      <h3>アプリケーションヘッダー</h3>
      <nav class="hg-nav">
        <span class="nav-item">ホーム</span>
        <span class="nav-item">製品</span>
        <span class="nav-item">サービス</span>
        <span class="nav-item">お問い合わせ</span>
      </nav>
    </div>
  </header>

  <!-- メインコンテンツエリア -->
  <div class="hg-main-content">
    <!-- 左サイドバー -->
    <aside class="hg-sidebar-left">
      <h4>サイドメニュー</h4>
      <ul class="sidebar-menu">
        <li>ダッシュボード</li>
        <li>プロフィール</li>
        <li>設定</li>
        <li>ヘルプ</li>
      </ul>
    </aside>

    <!-- コンテンツエリア -->
    <main class="hg-content">
      <div class="content-section">
        <h2>メインコンテンツ</h2>
        <p>このエリアは利用可能な残りスペースを全て使用します。</p>
        <div class="content-cards">
          <div class="content-card">
            <h3>カード 1</h3>
            <p>コンテンツが増えても、サイドバーとヘッダー・フッターのサイズは固定されます。</p>
          </div>
          <div class="content-card">
            <h3>カード 2</h3>
            <p>flex-grow: 1により、このメインエリアが柔軟にサイズ調整されます。</p>
          </div>
        </div>
      </div>
    </main>

    <!-- 右サイドバー -->
    <aside class="hg-sidebar-right">
      <h4>情報パネル</h4>
      <div class="info-widget">
        <h5>最新情報</h5>
        <p>システム更新のお知らせ</p>
      </div>
      <div class="info-widget">
        <h5>統計</h5>
        <p>ユーザー数: 1,234</p>
        <p>アクセス数: 5,678</p>
      </div>
    </aside>
  </div>

  <!-- フッター -->
  <footer class="hg-footer">
    <div class="hg-footer-content">
      <span>© 2025 サンプルアプリケーション</span>
      <div class="footer-links">
        <span>プライバシーポリシー</span>
        <span>利用規約</span>
      </div>
    </div>
  </footer>
</div>

<div class="pattern-explanation">
  <h4>Holy Grail Layoutの特徴:</h4>
  <ul>
    <li><strong>ヘッダー・フッター</strong>: flex: 0 0 auto（高さ固定、伸縮なし）</li>
    <li><strong>左サイドバー</strong>: flex: 0 0 200px（固定200px幅）</li>
    <li><strong>メインコンテンツ</strong>: flex: 1 1 auto（残り領域を占有）</li>
    <li><strong>右サイドバー</strong>: flex: 0 0 180px（固定180px幅）</li>
    <li><strong>レスポンシブ対応</strong>: 画面幅に応じてサイドバーを非表示に</li>
  </ul>
</div>`,cssCode:`.holy-grail-demo {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  border: 2px solid #1976d2;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

/* ヘッダー */
.hg-header {
  flex: 0 0 auto; /* 高さ固定、伸縮なし */
  background: linear-gradient(135deg, #1976d2, #1565c0);
  color: white;
  padding: 16px 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.hg-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hg-header h3 {
  margin: 0;
  font-weight: 500;
}

.hg-nav {
  display: flex;
  gap: 24px;
}

.nav-item {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-item:hover {
  background-color: rgba(255,255,255,0.1);
}

/* メインコンテンツエリア */
.hg-main-content {
  flex: 1 1 auto; /* 残り領域を占有 */
  display: flex;
  min-height: 0; /* 縮小を許可 */
}

/* 左サイドバー */
.hg-sidebar-left {
  flex: 0 0 200px; /* 固定200px幅 */
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
}

.hg-sidebar-left h4 {
  margin: 0 0 16px 0;
  color: #424242;
  font-size: 16px;
  font-weight: 500;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  padding: 12px 16px;
  margin-bottom: 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  color: #666;
}

.sidebar-menu li:hover {
  background-color: #e3f2fd;
  color: #1976d2;
}

/* メインコンテンツ */
.hg-content {
  flex: 1 1 auto; /* 残り領域を使用 */
  padding: 24px;
  background-color: #ffffff;
  overflow-y: auto;
}

.content-section h2 {
  margin: 0 0 16px 0;
  color: #212121;
  font-weight: 400;
}

.content-section p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.content-cards {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.content-card {
  flex: 1 1 300px;
  min-width: 250px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
}

.content-card h3 {
  margin: 0 0 12px 0;
  color: #1976d2;
  font-size: 18px;
  font-weight: 500;
}

.content-card p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

/* 右サイドバー */
.hg-sidebar-right {
  flex: 0 0 180px; /* 固定180px幅 */
  background-color: #f9f9f9;
  border-left: 1px solid #e0e0e0;
  padding: 20px;
}

.hg-sidebar-right h4 {
  margin: 0 0 16px 0;
  color: #424242;
  font-size: 16px;
  font-weight: 500;
}

.info-widget {
  margin-bottom: 20px;
  padding: 16px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.info-widget h5 {
  margin: 0 0 8px 0;
  color: #1976d2;
  font-size: 14px;
  font-weight: 500;
}

.info-widget p {
  margin: 0;
  color: #666;
  font-size: 12px;
  line-height: 1.4;
}

/* フッター */
.hg-footer {
  flex: 0 0 auto; /* 高さ固定、伸縮なし */
  background-color: #424242;
  color: white;
  padding: 16px 24px;
}

.hg-footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-links span {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.footer-links span:hover {
  background-color: rgba(255,255,255,0.1);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .hg-main-content {
    flex-direction: column;
  }
  
  .hg-sidebar-left,
  .hg-sidebar-right {
    flex: 0 0 auto;
    order: 2;
  }
  
  .hg-content {
    order: 1;
  }
  
  .hg-nav {
    display: none;
  }
}

@media (max-width: 480px) {
  .hg-sidebar-left,
  .hg-sidebar-right {
    display: none;
  }
  
  .hg-header-content {
    flex-direction: column;
    gap: 12px;
  }
  
  .content-cards {
    flex-direction: column;
  }
}

/* パターン説明 */
.pattern-explanation {
  margin-top: 24px;
  padding: 20px;
  background-color: #f0f8ff;
  border: 1px solid #2196f3;
  border-radius: 8px;
}

.pattern-explanation h4 {
  margin: 0 0 12px 0;
  color: #1976d2;
  font-size: 16px;
  font-weight: 500;
}

.pattern-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.pattern-explanation li {
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}

.pattern-explanation strong {
  color: #1976d2;
}`},{subtitle:"Responsive Card Grid（レスポンシブカードグリッド）",description:"画面幅に応じてカード数が調整される柔軟なグリッドレイアウト",htmlCode:`<div class="responsive-grid-demo">
  <h3>レスポンシブカードグリッド</h3>
  <p class="demo-description">画面サイズに応じてカードの配置が自動調整されます</p>
  
  <div class="card-container">
    <div class="card">
      <div class="card-header">
        <h4>製品 A</h4>
        <span class="price">¥1,200</span>
      </div>
      <div class="card-content">
        <p>高品質な製品Aの説明です。この製品は多くの機能を持っています。</p>
        <div class="features">
          <span class="feature">機能1</span>
          <span class="feature">機能2</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-primary">詳細を見る</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h4>製品 B</h4>
        <span class="price">¥2,400</span>
      </div>
      <div class="card-content">
        <p>製品Bは革新的なデザインが特徴です。</p>
        <div class="features">
          <span class="feature">デザイン</span>
          <span class="feature">革新</span>
          <span class="feature">高性能</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-primary">詳細を見る</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h4>製品 C</h4>
        <span class="price">¥800</span>
      </div>
      <div class="card-content">
        <p>コストパフォーマンスに優れた製品です。初心者にもおすすめ。</p>
        <div class="features">
          <span class="feature">コスパ</span>
          <span class="feature">初心者向け</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-primary">詳細を見る</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h4>製品 D</h4>
        <span class="price">¥3,600</span>
      </div>
      <div class="card-content">
        <p>プロフェッショナル向けの高機能製品です。</p>
        <div class="features">
          <span class="feature">プロ仕様</span>
          <span class="feature">高機能</span>
          <span class="feature">拡張性</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-primary">詳細を見る</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h4>製品 E</h4>
        <span class="price">¥1,800</span>
      </div>
      <div class="card-content">
        <p>バランスの取れた中級者向け製品です。</p>
        <div class="features">
          <span class="feature">バランス</span>
          <span class="feature">中級者向け</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-primary">詳細を見る</button>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <h4>製品 F</h4>
        <span class="price">¥999</span>
      </div>
      <div class="card-content">
        <p>限定特価での提供です。数量限定のお買い得商品。</p>
        <div class="features">
          <span class="feature">限定</span>
          <span class="feature">特価</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-primary">詳細を見る</button>
      </div>
    </div>
  </div>
</div>

<div class="pattern-explanation">
  <h4>Responsive Card Gridの特徴:</h4>
  <ul>
    <li><strong>カード基本設定</strong>: flex: 1 1 300px（最小300px、それ以上は伸縮）</li>
    <li><strong>最大幅制限</strong>: max-width: 400px（カードが大きくなりすぎるのを防止）</li>
    <li><strong>自動折り返し</strong>: flex-wrap: wrap（画面幅に応じて自動調整）</li>
    <li><strong>レスポンシブ</strong>: メディアクエリでモバイル最適化</li>
  </ul>
</div>`,cssCode:`.responsive-grid-demo {
  padding: 24px;
  border: 2px solid #4caf50;
  border-radius: 8px;
  background-color: #f1f8e9;
}

.responsive-grid-demo h3 {
  margin: 0 0 8px 0;
  color: #2e7d32;
  font-size: 24px;
  font-weight: 500;
}

.demo-description {
  margin: 0 0 24px 0;
  color: #666;
  font-size: 14px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.card {
  flex: 1 1 300px; /* 最小300px、それ以上は伸縮 */
  max-width: 400px; /* 最大幅制限 */
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 12px 20px;
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
}

.card-header h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

.price {
  font-size: 16px;
  font-weight: bold;
}

.card-content {
  flex: 1 1 auto;
  padding: 16px 20px;
}

.card-content p {
  margin: 0 0 16px 0;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.feature {
  background: #e8f5e9;
  color: #2e7d32;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid rgba(46,125,50,0.2);
}

.card-actions {
  padding: 12px 20px 16px 20px;
  border-top: 1px solid #f0f0f0;
}

.btn-primary {
  width: 100%;
  padding: 10px 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background: #45a049;
}

/* タブレット対応 */
@media (max-width: 768px) {
  .card {
    flex: 1 1 250px;
    max-width: none;
  }
  
  .card-container {
    gap: 12px;
  }
}

/* モバイル対応 */
@media (max-width: 480px) {
  .card {
    flex: 1 1 100%; /* 全幅使用 */
  }
  
  .responsive-grid-demo {
    padding: 16px;
  }
}

/* パターン説明 */
.pattern-explanation {
  margin-top: 24px;
  padding: 20px;
  background-color: #f0fff0;
  border: 1px solid #4caf50;
  border-radius: 8px;
}

.pattern-explanation h4 {
  margin: 0 0 12px 0;
  color: #2e7d32;
  font-size: 16px;
  font-weight: 500;
}

.pattern-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.pattern-explanation li {
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}

.pattern-explanation strong {
  color: #2e7d32;
}`},{subtitle:"Dynamic Sidebar Layout（動的サイドバーレイアウト）",description:"サイドバーの表示/非表示でメインコンテンツが自動調整されるレイアウト",htmlCode:`<div class="dynamic-sidebar-demo">
  <div class="app-layout" id="dynamicApp">
    <button class="toggle-btn" onclick="toggleSidebar()">
      <span id="toggleIcon">◀</span>
      <span id="toggleText">サイドバーを閉じる</span>
    </button>
    
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <h4>ナビゲーション</h4>
      </div>
      <nav class="sidebar-nav">
        <a href="#" class="nav-link active">ダッシュボード</a>
        <a href="#" class="nav-link">プロジェクト</a>
        <a href="#" class="nav-link">タスク</a>
        <a href="#" class="nav-link">レポート</a>
        <a href="#" class="nav-link">設定</a>
      </nav>
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar">U</div>
          <div class="user-details">
            <div class="user-name">ユーザー名</div>
            <div class="user-role">管理者</div>
          </div>
        </div>
      </div>
    </aside>

    <main class="main-area">
      <header class="main-header">
        <h2>メインコンテンツエリア</h2>
        <p>サイドバーの幅が変わると、このエリアが自動的に調整されます</p>
      </header>
      
      <div class="content-grid">
        <div class="content-card">
          <h3>統計情報</h3>
          <div class="stats">
            <div class="stat-item">
              <div class="stat-number">1,234</div>
              <div class="stat-label">総アイテム</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">567</div>
              <div class="stat-label">アクティブ</div>
            </div>
          </div>
        </div>
        
        <div class="content-card">
          <h3>最近の活動</h3>
          <ul class="activity-list">
            <li>新しいプロジェクトが作成されました</li>
            <li>タスク #123 が完了しました</li>
            <li>レポートが更新されました</li>
          </ul>
        </div>
        
        <div class="content-card full-width">
          <h3>詳細データ</h3>
          <p>この領域は画面幅に応じて柔軟にサイズが調整されます。サイドバーが折りたたまれると、より多くのスペースを使用できます。</p>
        </div>
      </div>
    </main>
  </div>
</div>

<div class="pattern-explanation">
  <h4>Dynamic Sidebar Layoutの特徴:</h4>
  <ul>
    <li><strong>通常時のサイドバー</strong>: flex: 0 0 250px（固定250px幅）</li>
    <li><strong>折りたたみ時</strong>: flex: 0 0 60px（60px幅にアニメーション）</li>
    <li><strong>メインエリア</strong>: flex: 1 1 auto（残り領域を動的使用）</li>
    <li><strong>トランジション</strong>: CSS transitionでスムーズな変化</li>
  </ul>
</div>

<script>
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleIcon = document.getElementById('toggleIcon');
  const toggleText = document.getElementById('toggleText');
  
  sidebar.classList.toggle('collapsed');
  
  if (sidebar.classList.contains('collapsed')) {
    toggleIcon.textContent = '▶';
    toggleText.textContent = 'サイドバーを開く';
  } else {
    toggleIcon.textContent = '◀';
    toggleText.textContent = 'サイドバーを閉じる';
  }
}
<\/script>`,cssCode:`.dynamic-sidebar-demo {
  padding: 20px;
  border: 2px solid #ff9800;
  border-radius: 8px;
  background-color: #fff8e1;
}

.app-layout {
  display: flex;
  height: 70vh;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.toggle-btn {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 10;
  background: #ff9800;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s;
}

.toggle-btn:hover {
  background: #f57c00;
}

.sidebar {
  flex: 0 0 250px; /* 通常時：固定250px */
  background: linear-gradient(180deg, #37474f, #455a64);
  color: white;
  display: flex;
  flex-direction: column;
  transition: flex-basis 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  flex: 0 0 60px; /* 折りたたみ時：60px */
}

.sidebar-header {
  padding: 50px 20px 20px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: padding 0.3s ease;
}

.sidebar.collapsed .sidebar-header {
  padding: 50px 10px 20px 10px;
}

.sidebar-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.sidebar.collapsed .sidebar-header h4 {
  opacity: 0;
}

.sidebar-nav {
  flex: 1 1 auto;
  padding: 20px 0;
}

.nav-link {
  display: block;
  padding: 12px 20px;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
  font-size: 14px;
}

.sidebar.collapsed .nav-link {
  padding: 12px 10px;
  text-align: center;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(255,255,255,0.1);
  color: white;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ff9800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.user-details {
  flex: 1;
  min-width: 0;
  transition: opacity 0.3s ease;
}

.sidebar.collapsed .user-details {
  opacity: 0;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.user-role {
  font-size: 12px;
  color: rgba(255,255,255,0.6);
  white-space: nowrap;
}

.main-area {
  flex: 1 1 auto; /* 残り領域を動的に使用 */
  background: white;
  display: flex;
  flex-direction: column;
  min-width: 0; /* 縮小を許可 */
}

.main-header {
  padding: 24px;
  border-bottom: 1px solid #e0e0e0;
}

.main-header h2 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 20px;
  font-weight: 500;
}

.main-header p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.content-grid {
  flex: 1 1 auto;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-content: flex-start;
}

.content-card {
  flex: 1 1 300px;
  max-width: 400px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 20px;
}

.content-card.full-width {
  flex: 1 1 100%;
  max-width: none;
}

.content-card h3 {
  margin: 0 0 16px 0;
  color: #333;
  font-size: 16px;
  font-weight: 500;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #ff9800;
}

.stat-label {
  font-size: 12px;
  color: #666;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-list li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #666;
}

.activity-list li:last-child {
  border-bottom: none;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .app-layout {
    flex-direction: column;
  }
  
  .sidebar {
    flex: 0 0 auto;
    order: 2;
  }
  
  .main-area {
    order: 1;
  }
  
  .toggle-btn {
    display: none;
  }
}

/* パターン説明 */
.pattern-explanation {
  margin-top: 24px;
  padding: 20px;
  background-color: #fffbf0;
  border: 1px solid #ff9800;
  border-radius: 8px;
}

.pattern-explanation h4 {
  margin: 0 0 12px 0;
  color: #e65100;
  font-size: 16px;
  font-weight: 500;
}

.pattern-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.pattern-explanation li {
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}

.pattern-explanation strong {
  color: #e65100;
}`},{subtitle:"Priority-based Layout（優先度ベースレイアウト）",description:"重要度に応じてスペース配分を調整するレイアウト",htmlCode:`<div class="priority-layout-demo">
  <h3>優先度ベースレイアウト</h3>
  <p class="demo-description">コンテンツの重要度に応じてスペースが配分されます</p>
  
  <div class="priority-container">
    <section class="high-priority">
      <h4>高優先度コンテンツ</h4>
      <p>このエリアは最も重要な情報を表示します。flex-grow: 3により、利用可能スペースの多くを占有します。</p>
      <div class="priority-content">
        <div class="highlight-box">
          <h5>重要な通知</h5>
          <p>システムメンテナンスのお知らせがあります。</p>
        </div>
        <div class="highlight-box">
          <h5>売上データ</h5>
          <p>今月の売上: ¥1,234,567</p>
        </div>
      </div>
    </section>

    <section class="medium-priority">
      <h4>中優先度コンテンツ</h4>
      <p>補完的な情報を表示します。flex-grow: 2で適度なスペースを確保。</p>
      <ul class="info-list">
        <li>新機能のリリース予定</li>
        <li>ユーザーフィードバック</li>
        <li>パフォーマンス指標</li>
        <li>セキュリティ更新</li>
      </ul>
    </section>

    <section class="low-priority">
      <h4>低優先度コンテンツ</h4>
      <p>補助的な情報です。flex-shrink: 3により、スペースが不足すると最も縮小されます。</p>
      <div class="secondary-info">
        <div class="info-item">
          <strong>ヒント:</strong>
          <span>ショートカットキーCtrl+Sで保存</span>
        </div>
        <div class="info-item">
          <strong>更新:</strong>
          <span>最後の更新: 2時間前</span>
        </div>
      </div>
    </section>
  </div>
</div>

<div class="pattern-explanation">
  <h4>Priority-based Layoutの特徴:</h4>
  <ul>
    <li><strong>高優先度</strong>: flex: 3 1 300px（成長率3、最小300px）</li>
    <li><strong>中優先度</strong>: flex: 2 2 200px（成長率2、縮小率2）</li>
    <li><strong>低優先度</strong>: flex: 1 3 150px（縮小率3で最も縮小されやすい）</li>
    <li><strong>動的調整</strong>: 画面サイズに応じて重要度順にスペース配分</li>
  </ul>
</div>`,cssCode:`.priority-layout-demo {
  padding: 24px;
  border: 2px solid #9c27b0;
  border-radius: 8px;
  background-color: #f3e5f5;
}

.priority-layout-demo h3 {
  margin: 0 0 8px 0;
  color: #7b1fa2;
  font-size: 24px;
  font-weight: 500;
}

.demo-description {
  margin: 0 0 24px 0;
  color: #666;
  font-size: 14px;
}

.priority-container {
  display: flex;
  gap: 16px;
  align-items: stretch;
}

.high-priority {
  flex: 3 1 300px; /* 高優先度：grow=3, 最小300px */
  background: linear-gradient(135deg, #e1bee7, #ce93d8);
  border-radius: 8px;
  padding: 20px;
  color: #4a148c;
}

.medium-priority {
  flex: 2 2 200px; /* 中優先度：grow=2, shrink=2 */
  background: linear-gradient(135deg, #f8bbd9, #f48fb1);
  border-radius: 8px;
  padding: 20px;
  color: #880e4f;
}

.low-priority {
  flex: 1 3 150px; /* 低優先度：shrink=3（縮小されやすい） */
  background: linear-gradient(135deg, #fff9c4, #fff59d);
  border-radius: 8px;
  padding: 20px;
  color: #f57f17;
}

.priority-container h4 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 500;
}

.priority-container p {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 1.5;
}

.priority-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.highlight-box {
  background: rgba(255,255,255,0.8);
  padding: 16px;
  border-radius: 6px;
  border-left: 4px solid #9c27b0;
}

.highlight-box h5 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: #4a148c;
}

.highlight-box p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  padding: 8px 16px;
  margin-bottom: 6px;
  background: rgba(255,255,255,0.6);
  border-radius: 4px;
  font-size: 14px;
  border-left: 3px solid #e91e63;
}

.secondary-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item {
  background: rgba(255,255,255,0.7);
  padding: 12px;
  border-radius: 4px;
  font-size: 13px;
  border-left: 3px solid #ffc107;
}

.info-item strong {
  color: #e65100;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .priority-container {
    flex-direction: column;
  }
  
  .high-priority,
  .medium-priority,
  .low-priority {
    flex: 1 1 auto;
  }
}

/* パターン説明 */
.pattern-explanation {
  margin-top: 24px;
  padding: 20px;
  background-color: #fdf4ff;
  border: 1px solid #9c27b0;
  border-radius: 8px;
}

.pattern-explanation h4 {
  margin: 0 0 12px 0;
  color: #7b1fa2;
  font-size: 16px;
  font-weight: 500;
}

.pattern-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.pattern-explanation li {
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}

.pattern-explanation strong {
  color: #7b1fa2;
}`},{subtitle:"Adaptive Content Layout（適応的コンテンツレイアウト）",description:"コンテンツ量に応じて自動調整されるレイアウト",htmlCode:`<div class="adaptive-layout-demo">
  <h3>適応的コンテンツレイアウト</h3>
  <p class="demo-description">コンテンツの量に応じてレイアウトが自動調整されます</p>
  
  <div class="adaptive-layout">
    <main class="content-area">
      <article class="main-article">
        <h2>メイン記事タイトル</h2>
        <p>これはメインコンテンツエリアです。flex: 1 1 autoにより、利用可能な領域を最大限に活用します。</p>
        
        <section class="article-section">
          <h3>セクション1: 基本概念</h3>
          <p>適応的コンテンツレイアウトの基本概念について説明します。このレイアウトでは、各セクションがコンテンツ量に応じて適切なサイズを取ります。</p>
          <p>flex-basisを使用してベースサイズを設定し、flex-growとflex-shrinkで動的な調整を行います。</p>
        </section>
        
        <section class="article-section">
          <h3>セクション2: 実装方法</h3>
          <p>実装では以下のポイントが重要です：</p>
          <ul>
            <li>メインエリアはflex: 1 1 autoで残り領域を使用</li>
            <li>サイドパネルは最大幅を制限しつつ柔軟性を保持</li>
            <li>アクションバーは固定サイズで確実な操作性を提供</li>
          </ul>
        </section>
        
        <section class="article-section">
          <h3>セクション3: 応用例</h3>
          <p>この手法は様々な場面で活用できます。ブログレイアウト、管理画面、ドキュメントビューアなど、コンテンツ量が動的に変わるアプリケーションに最適です。</p>
        </section>
      </article>
    </main>

    <aside class="metadata-panel">
      <div class="panel-header">
        <h4>記事情報</h4>
      </div>
      <div class="metadata-content">
        <div class="meta-item">
          <label>公開日:</label>
          <span>2025年10月6日</span>
        </div>
        <div class="meta-item">
          <label>カテゴリ:</label>
          <span>CSS Layout</span>
        </div>
        <div class="meta-item">
          <label>タグ:</label>
          <div class="meta-tags">
            <span class="meta-tag">Flexbox</span>
            <span class="meta-tag">レスポンシブ</span>
            <span class="meta-tag">レイアウト</span>
          </div>
        </div>
        <div class="meta-item">
          <label>読了時間:</label>
          <span>約5分</span>
        </div>
        
        <div class="related-links">
          <h5>関連記事</h5>
          <ul>
            <li><a href="#">Grid Layoutの基礎</a></li>
            <li><a href="#">レスポンシブデザインのコツ</a></li>
            <li><a href="#">CSS設計パターン</a></li>
          </ul>
        </div>
      </div>
    </aside>

    <div class="action-bar">
      <button class="action-btn primary">編集</button>
      <button class="action-btn">共有</button>
      <button class="action-btn">印刷</button>
      <div class="action-separator"></div>
      <button class="action-btn">お気に入り</button>
      <button class="action-btn">ブックマーク</button>
    </div>
  </div>
</div>

<div class="pattern-explanation">
  <h4>Adaptive Content Layoutの特徴:</h4>
  <ul>
    <li><strong>コンテンツエリア</strong>: flex: 1 1 auto（メインコンテンツ、動的サイズ）</li>
    <li><strong>メタデータパネル</strong>: flex: 0 1 200px（最大200px、縮小可能）</li>
    <li><strong>アクションバー</strong>: flex: 0 0 80px（固定80px幅）</li>
    <li><strong>最小幅保証</strong>: min-width指定で利用性を確保</li>
  </ul>
</div>`,cssCode:`.adaptive-layout-demo {
  padding: 24px;
  border: 2px solid #00bcd4;
  border-radius: 8px;
  background-color: #e0f8ff;
}

.adaptive-layout-demo h3 {
  margin: 0 0 8px 0;
  color: #006064;
  font-size: 24px;
  font-weight: 500;
}

.demo-description {
  margin: 0 0 24px 0;
  color: #666;
  font-size: 14px;
}

.adaptive-layout {
  display: flex;
  align-items: stretch;
  gap: 16px;
  min-height: 60vh;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.content-area {
  flex: 1 1 auto; /* メインコンテンツ：動的サイズ */
  padding: 24px;
  overflow-y: auto;
}

.main-article h2 {
  margin: 0 0 16px 0;
  color: #333;
  font-size: 28px;
  font-weight: 500;
  border-bottom: 2px solid #00bcd4;
  padding-bottom: 8px;
}

.main-article > p {
  margin: 0 0 24px 0;
  color: #666;
  font-size: 16px;
  line-height: 1.6;
}

.article-section {
  margin-bottom: 32px;
  padding: 20px;
  background: #f8fdff;
  border-left: 4px solid #00bcd4;
  border-radius: 0 6px 6px 0;
}

.article-section h3 {
  margin: 0 0 12px 0;
  color: #006064;
  font-size: 20px;
  font-weight: 500;
}

.article-section p {
  margin: 0 0 12px 0;
  color: #555;
  line-height: 1.6;
}

.article-section ul {
  margin: 0;
  padding-left: 20px;
  color: #555;
}

.article-section li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.metadata-panel {
  flex: 0 1 200px; /* 最大200px、縮小可能 */
  min-width: 150px; /* 最小幅保証 */
  background: #f0f9ff;
  border-left: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.panel-header {
  padding: 16px 20px;
  background: linear-gradient(135deg, #00bcd4, #0097a7);
  color: white;
}

.panel-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.metadata-content {
  flex: 1 1 auto;
  padding: 20px;
}

.meta-item {
  margin-bottom: 16px;
}

.meta-item label {
  display: block;
  font-weight: 500;
  color: #006064;
  font-size: 14px;
  margin-bottom: 4px;
}

.meta-item span {
  color: #333;
  font-size: 14px;
}

.meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.meta-tag {
  background: #e0f2f1;
  color: #00695c;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  border: 1px solid rgba(0,105,92,0.2);
}

.related-links {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;
}

.related-links h5 {
  margin: 0 0 12px 0;
  color: #006064;
  font-size: 14px;
  font-weight: 500;
}

.related-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.related-links li {
  margin-bottom: 8px;
}

.related-links a {
  color: #00bcd4;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}

.related-links a:hover {
  color: #006064;
  text-decoration: underline;
}

.action-bar {
  flex: 0 0 80px; /* 固定80px幅 */
  background: #263238;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  gap: 8px;
}

.action-btn {
  width: 64px;
  height: 40px;
  background: #37474f;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background: #455a64;
  transform: translateY(-1px);
}

.action-btn.primary {
  background: #00bcd4;
}

.action-btn.primary:hover {
  background: #00acc1;
}

.action-separator {
  width: 40px;
  height: 1px;
  background: #455a64;
  margin: 8px 0;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .adaptive-layout {
    flex-direction: column;
  }
  
  .action-bar {
    flex: 0 0 auto;
    flex-direction: row;
    height: auto;
    justify-content: center;
    padding: 12px;
  }
  
  .action-separator {
    width: 1px;
    height: 24px;
    margin: 0 8px;
  }
  
  .metadata-panel {
    flex: 0 0 auto;
    order: -1;
  }
}

/* パターン説明 */
.pattern-explanation {
  margin-top: 24px;
  padding: 20px;
  background-color: #f0fdff;
  border: 1px solid #00bcd4;
  border-radius: 8px;
}

.pattern-explanation h4 {
  margin: 0 0 12px 0;
  color: #006064;
  font-size: 16px;
  font-weight: 500;
}

.pattern-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.pattern-explanation li {
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}

.pattern-explanation strong {
  color: #006064;
}`},{subtitle:"Multi-tier Navigation（多層ナビゲーションレイアウト）",description:"複数レベルのナビゲーションを持つ複雑なレイアウト",htmlCode:`<div class="multi-nav-demo">
  <div class="multi-nav-layout">
    <nav class="primary-nav">
      <div class="nav-content">
        <div class="logo">MyApp</div>
        <div class="primary-menu">
          <span class="menu-item active">ホーム</span>
          <span class="menu-item">製品</span>
          <span class="menu-item">サービス</span>
          <span class="menu-item">サポート</span>
        </div>
        <div class="user-menu">
          <span class="user-avatar">U</span>
        </div>
      </div>
    </nav>

    <nav class="secondary-nav">
      <div class="secondary-menu">
        <span class="submenu-item active">概要</span>
        <span class="submenu-item">機能</span>
        <span class="submenu-item">価格</span>
        <span class="submenu-item">FAQ</span>
      </div>
      <div class="breadcrumb">
        <span>ホーム</span> > <span>製品</span> > <span>概要</span>
      </div>
    </nav>

    <div class="content-wrapper">
      <nav class="tertiary-nav">
        <h4>カテゴリ</h4>
        <ul class="category-list">
          <li class="active">全て</li>
          <li>ソフトウェア</li>
          <li>ハードウェア</li>
          <li>サービス</li>
          <li>サポート</li>
        </ul>
        
        <h4>フィルター</h4>
        <div class="filter-section">
          <label class="filter-item">
            <input type="checkbox" checked> 新着
          </label>
          <label class="filter-item">
            <input type="checkbox"> 人気
          </label>
          <label class="filter-item">
            <input type="checkbox"> おすすめ
          </label>
        </div>
      </nav>

      <main class="main-content">
        <div class="content-header">
          <h1>製品概要</h1>
          <p>当社の製品ラインナップをご紹介します</p>
        </div>
        
        <div class="content-grid">
          <div class="content-item">
            <h3>Product A</h3>
            <p>革新的なソリューションを提供する製品Aです。</p>
          </div>
          <div class="content-item">
            <h3>Product B</h3>
            <p>効率的なワークフローを実現する製品Bです。</p>
          </div>
          <div class="content-item">
            <h3>Product C</h3>
            <p>企業向けの高性能製品Cです。</p>
          </div>
        </div>
      </main>

      <aside class="context-panel">
        <div class="panel-section">
          <h4>関連情報</h4>
          <ul class="info-links">
            <li><a href="#">技術仕様書</a></li>
            <li><a href="#">ユーザーガイド</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <div class="panel-section">
          <h4>お問い合わせ</h4>
          <p>ご質問がございましたら、お気軽にお問い合わせください。</p>
          <button class="contact-btn">問い合わせる</button>
        </div>
      </aside>
    </div>
  </div>
</div>

<div class="pattern-explanation">
  <h4>Multi-tier Navigationの特徴:</h4>
  <ul>
    <li><strong>プライマリナビ</strong>: flex: 0 0 60px（固定高）</li>
    <li><strong>セカンダリナビ</strong>: flex: 0 0 40px（固定高）</li>
    <li><strong>サイドナビ</strong>: flex: 0 0 180px（固定幅）</li>
    <li><strong>メインコンテンツ</strong>: flex: 1 1 auto（残り領域）</li>
    <li><strong>コンテキストパネル</strong>: flex: 0 1 250px（最大250px）</li>
  </ul>
</div>`,cssCode:`.multi-nav-demo {
  padding: 20px;
  border: 2px solid #795548;
  border-radius: 8px;
  background-color: #efebe9;
}

.multi-nav-layout {
  display: flex;
  flex-direction: column;
  height: 70vh;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.primary-nav {
  flex: 0 0 60px; /* プライマリナビ：固定高 */
  background: linear-gradient(135deg, #5d4037, #6d4c41);
  color: white;
  display: flex;
  align-items: center;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.primary-menu {
  display: flex;
  gap: 24px;
}

.menu-item {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 14px;
}

.menu-item:hover,
.menu-item.active {
  background: rgba(255,255,255,0.15);
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ff9800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}

.secondary-nav {
  flex: 0 0 40px; /* セカンダリナビ：固定高 */
  background: #8d6e63;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.secondary-menu {
  display: flex;
  gap: 16px;
}

.submenu-item {
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 13px;
}

.submenu-item:hover,
.submenu-item.active {
  background: rgba(255,255,255,0.15);
}

.breadcrumb {
  font-size: 12px;
  color: rgba(255,255,255,0.8);
}

.content-wrapper {
  flex: 1 1 auto; /* 残り領域 */
  display: flex;
  min-height: 0;
}

.tertiary-nav {
  flex: 0 0 180px; /* サイドナビ：固定幅 */
  background: #f5f5f5;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
  overflow-y: auto;
}

.tertiary-nav h4 {
  margin: 0 0 12px 0;
  color: #5d4037;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
}

.category-list li {
  padding: 8px 12px;
  margin-bottom: 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 13px;
  color: #666;
}

.category-list li:hover,
.category-list li.active {
  background: #e8f5e9;
  color: #2e7d32;
}

.filter-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
}

.main-content {
  flex: 1 1 auto; /* メインコンテンツ */
  padding: 24px;
  overflow-y: auto;
  min-width: 0; /* 縮小許可 */
}

.content-header h1 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 24px;
  font-weight: 500;
}

.content-header p {
  margin: 0 0 24px 0;
  color: #666;
  font-size: 14px;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.content-item {
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}

.content-item h3 {
  margin: 0 0 12px 0;
  color: #5d4037;
  font-size: 18px;
  font-weight: 500;
}

.content-item p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

.context-panel {
  flex: 0 1 250px; /* コンテキストパネル：最大250px */
  min-width: 150px;
  background: #fafafa;
  border-left: 1px solid #e0e0e0;
  padding: 20px;
  overflow-y: auto;
}

.panel-section {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.panel-section:last-child {
  border-bottom: none;
}

.panel-section h4 {
  margin: 0 0 12px 0;
  color: #5d4037;
  font-size: 14px;
  font-weight: 500;
}

.info-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-links li {
  margin-bottom: 8px;
}

.info-links a {
  color: #795548;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s;
}

.info-links a:hover {
  color: #5d4037;
  text-decoration: underline;
}

.panel-section p {
  margin: 0 0 12px 0;
  color: #666;
  font-size: 13px;
  line-height: 1.5;
}

.contact-btn {
  width: 100%;
  padding: 8px 16px;
  background: #795548;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.contact-btn:hover {
  background: #6d4c41;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .tertiary-nav,
  .context-panel {
    flex: 0 0 auto;
  }
  
  .primary-menu {
    display: none;
  }
  
  .secondary-menu {
    gap: 8px;
  }
}

/* パターン説明 */
.pattern-explanation {
  margin-top: 24px;
  padding: 20px;
  background-color: #f9f5f3;
  border: 1px solid #795548;
  border-radius: 8px;
}

.pattern-explanation h4 {
  margin: 0 0 12px 0;
  color: #5d4037;
  font-size: 16px;
  font-weight: 500;
}

.pattern-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.pattern-explanation li {
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}

.pattern-explanation strong {
  color: #5d4037;
}`},{subtitle:"Elastic Form Layout（弾性フォームレイアウト）",description:"フィールドの重要度と内容に応じて幅が調整されるフォーム",htmlCode:`<div class="elastic-form-demo">
  <h3>弾性フォームレイアウト</h3>
  <p class="demo-description">フィールドの重要度と内容に応じて幅が自動調整されます</p>
  
  <form class="elastic-form">
    <div class="form-section">
      <h4>基本情報</h4>
      <div class="form-row">
        <div class="form-field name">
          <label>氏名 *</label>
          <input type="text" placeholder="山田 太郎" required>
          <small>フルネームを入力してください</small>
        </div>
        <div class="form-field email">
          <label>メールアドレス *</label>
          <input type="email" placeholder="example@domain.com" required>
          <small>有効なメールアドレスを入力</small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-field age">
          <label>年齢</label>
          <input type="number" placeholder="30" min="0" max="120">
        </div>
        <div class="form-field phone">
          <label>電話番号</label>
          <input type="tel" placeholder="090-1234-5678">
        </div>
        <div class="form-field country">
          <label>国・地域</label>
          <select>
            <option>日本</option>
            <option>アメリカ</option>
            <option>中国</option>
            <option>その他</option>
          </select>
        </div>
      </div>
    </div>

    <div class="form-section">
      <h4>詳細情報</h4>
      <div class="form-row">
        <div class="form-field company">
          <label>会社名</label>
          <input type="text" placeholder="株式会社サンプル">
        </div>
        <div class="form-field department">
          <label>部署</label>
          <input type="text" placeholder="開発部">
        </div>
        <div class="form-field position">
          <label>役職</label>
          <input type="text" placeholder="マネージャー">
        </div>
      </div>

      <div class="form-row">
        <div class="form-field address full-width">
          <label>住所</label>
          <input type="text" placeholder="東京都渋谷区...">
          <small>番地まで詳しく入力してください</small>
        </div>
      </div>

      <div class="form-row">
        <div class="form-field experience">
          <label>経験年数</label>
          <select>
            <option>1年未満</option>
            <option>1-3年</option>
            <option>3-5年</option>
            <option>5年以上</option>
          </select>
        </div>
        <div class="form-field skills">
          <label>スキル</label>
          <input type="text" placeholder="JavaScript, Python...">
        </div>
        <div class="form-field salary">
          <label>希望年収</label>
          <input type="text" placeholder="500万円">
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="form-row">
        <div class="form-field message full-width">
          <label>メッセージ</label>
          <textarea rows="4" placeholder="ご質問やご要望があればお書きください"></textarea>
        </div>
      </div>
    </div>

    <div class="form-actions">
      <button type="button" class="btn-secondary">下書き保存</button>
      <button type="submit" class="btn-primary">送信</button>
    </div>
  </form>
</div>

<div class="pattern-explanation">
  <h4>Elastic Form Layoutの特徴:</h4>
  <ul>
    <li><strong>重要フィールド（名前・Email）</strong>: flex: 2 1 200px（広めの初期幅）</li>
    <li><strong>短いフィールド（年齢）</strong>: flex: 1 2 80px（狭い幅、縮小されやすい）</li>
    <li><strong>標準フィールド</strong>: flex: 1 1 120px（標準的な幅）</li>
    <li><strong>全幅フィールド</strong>: flex: 1 1 100%（住所・メッセージ）</li>
  </ul>
</div>`,cssCode:`.elastic-form-demo {
  padding: 24px;
  border: 2px solid #673ab7;
  border-radius: 8px;
  background-color: #f3e5f5;
}

.elastic-form-demo h3 {
  margin: 0 0 8px 0;
  color: #4a148c;
  font-size: 24px;
  font-weight: 500;
}

.demo-description {
  margin: 0 0 24px 0;
  color: #666;
  font-size: 14px;
}

.elastic-form {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.form-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;
}

.form-section:last-of-type {
  border-bottom: none;
  margin-bottom: 24px;
}

.form-section h4 {
  margin: 0 0 16px 0;
  color: #4a148c;
  font-size: 18px;
  font-weight: 500;
  border-left: 4px solid #673ab7;
  padding-left: 12px;
}

.form-row {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* フィールド別のflex設定 */
.form-field.name {
  flex: 2 1 200px; /* 重要フィールド：広めの初期幅 */
}

.form-field.email {
  flex: 2 1 250px; /* メールアドレス：長めの初期幅 */
}

.form-field.age {
  flex: 1 2 80px; /* 年齢：狭い幅、縮小されやすい */
}

.form-field.phone {
  flex: 1 1 140px; /* 電話番号：標準的な幅 */
}

.form-field.country {
  flex: 1 1 120px; /* 国：標準的な幅 */
}

.form-field.company {
  flex: 2 1 200px; /* 会社名：重要フィールド */
}

.form-field.department {
  flex: 1 1 120px; /* 部署：標準的な幅 */
}

.form-field.position {
  flex: 1 1 120px; /* 役職：標準的な幅 */
}

.form-field.experience {
  flex: 1 1 120px; /* 経験年数：標準的な幅 */
}

.form-field.skills {
  flex: 2 1 200px; /* スキル：長めの幅 */
}

.form-field.salary {
  flex: 1 1 120px; /* 年収：標準的な幅 */
}

.form-field.full-width {
  flex: 1 1 100%; /* 全幅使用 */
}

.form-field label {
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

.form-field input,
.form-field select,
.form-field textarea {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: none;
  border-color: #673ab7;
  box-shadow: 0 0 0 2px rgba(103,58,183,0.1);
}

.form-field small {
  color: #666;
  font-size: 12px;
}

.form-field input[required] + small::after {
  content: " *";
  color: #f44336;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
}

.btn-primary,
.btn-secondary {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #673ab7;
  color: white;
}

.btn-primary:hover {
  background: #5e35b1;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
}

.btn-secondary:hover {
  background: #e0e0e0;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
  
  .form-field {
    flex: 1 1 auto !important;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .elastic-form {
    padding: 16px;
  }
  
  .form-section h4 {
    font-size: 16px;
  }
}

/* パターン説明 */
.pattern-explanation {
  margin-top: 24px;
  padding: 20px;
  background-color: #faf7ff;
  border: 1px solid #673ab7;
  border-radius: 8px;
}

.pattern-explanation h4 {
  margin: 0 0 12px 0;
  color: #4a148c;
  font-size: 16px;
  font-weight: 500;
}

.pattern-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.pattern-explanation li {
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}

.pattern-explanation strong {
  color: #4a148c;
}`},{subtitle:"Dashboard Widget Layout（ダッシュボードウィジェットレイアウト）",description:"ウィジェットサイズが内容に応じて動的に調整されるダッシュボード",htmlCode:`<div class="dashboard-demo">
  <h3>ダッシュボードウィジェットレイアウト</h3>
  <p class="demo-description">ウィジェットサイズが内容に応じて動的に調整されます</p>
  
  <div class="dashboard">
    <div class="widget small">
      <div class="widget-header">
        <h4>今日の訪問者</h4>
        <span class="widget-icon">👥</span>
      </div>
      <div class="widget-content">
        <div class="metric-value">1,234</div>
        <div class="metric-change positive">+12%</div>
        <div class="metric-label">前日比</div>
      </div>
    </div>

    <div class="widget small">
      <div class="widget-header">
        <h4>売上</h4>
        <span class="widget-icon">💰</span>
      </div>
      <div class="widget-content">
        <div class="metric-value">¥567K</div>
        <div class="metric-change negative">-3%</div>
        <div class="metric-label">前週比</div>
      </div>
    </div>

    <div class="widget medium">
      <div class="widget-header">
        <h4>パフォーマンス指標</h4>
        <span class="widget-icon">📊</span>
      </div>
      <div class="widget-content">
        <div class="performance-metrics">
          <div class="metric-item">
            <div class="metric-bar">
              <div class="metric-fill" style="width: 78%"></div>
            </div>
            <span>CPU: 78%</span>
          </div>
          <div class="metric-item">
            <div class="metric-bar">
              <div class="metric-fill" style="width: 45%"></div>
            </div>
            <span>Memory: 45%</span>
          </div>
          <div class="metric-item">
            <div class="metric-bar">
              <div class="metric-fill" style="width: 92%"></div>
            </div>
            <span>Disk: 92%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="widget large">
      <div class="widget-header">
        <h4>最近のアクティビティ</h4>
        <span class="widget-icon">📝</span>
      </div>
      <div class="widget-content">
        <div class="activity-list">
          <div class="activity-item">
            <div class="activity-time">10:30</div>
            <div class="activity-desc">新しいユーザーが登録されました</div>
          </div>
          <div class="activity-item">
            <div class="activity-time">09:45</div>
            <div class="activity-desc">システムバックアップが完了しました</div>
          </div>
          <div class="activity-item">
            <div class="activity-time">09:15</div>
            <div class="activity-desc">注文 #12345 が処理されました</div>
          </div>
          <div class="activity-item">
            <div class="activity-time">08:30</div>
            <div class="activity-desc">メンテナンス作業が開始されました</div>
          </div>
        </div>
      </div>
    </div>

    <div class="widget medium">
      <div class="widget-header">
        <h4>地域別データ</h4>
        <span class="widget-icon">🌍</span>
      </div>
      <div class="widget-content">
        <div class="region-data">
          <div class="region-item">
            <span class="region-name">東京</span>
            <span class="region-value">456</span>
          </div>
          <div class="region-item">
            <span class="region-name">大阪</span>
            <span class="region-value">234</span>
          </div>
          <div class="region-item">
            <span class="region-name">名古屋</span>
            <span class="region-value">123</span>
          </div>
          <div class="region-item">
            <span class="region-name">福岡</span>
            <span class="region-value">89</span>
          </div>
        </div>
      </div>
    </div>

    <div class="widget full-width">
      <div class="widget-header">
        <h4>システム概要</h4>
        <span class="widget-icon">⚙️</span>
      </div>
      <div class="widget-content">
        <div class="system-overview">
          <div class="overview-section">
            <h5>サーバー状態</h5>
            <div class="server-list">
              <div class="server-item online">Web Server 01 - オンライン</div>
              <div class="server-item online">Database Server - オンライン</div>
              <div class="server-item offline">Cache Server - メンテナンス中</div>
            </div>
          </div>
          <div class="overview-section">
            <h5>今日の統計</h5>
            <div class="stats-grid">
              <div class="stat-box">
                <div class="stat-number">15,432</div>
                <div class="stat-label">総PV</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">2,156</div>
                <div class="stat-label">ユニークユーザー</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">98.5%</div>
                <div class="stat-label">稼働率</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="pattern-explanation">
  <h4>Dashboard Widget Layoutの特徴:</h4>
  <ul>
    <li><strong>小ウィジェット</strong>: flex: 0 1 300px（最小300px）</li>
    <li><strong>中ウィジェット</strong>: flex: 1 1 400px（基本400px、伸縮可能）</li>
    <li><strong>大ウィジェット</strong>: flex: 2 1 600px（基本600px、より多くのスペース）</li>
    <li><strong>全幅ウィジェット</strong>: flex: 1 1 100%（横幅全体を使用）</li>
  </ul>
</div>`,cssCode:`.dashboard-demo {
  padding: 24px;
  border: 2px solid #607d8b;
  border-radius: 8px;
  background-color: #eceff1;
}

.dashboard-demo h3 {
  margin: 0 0 8px 0;
  color: #263238;
  font-size: 24px;
  font-weight: 500;
}

.demo-description {
  margin: 0 0 24px 0;
  color: #666;
  font-size: 14px;
}

.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.widget {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.widget:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.widget.small {
  flex: 0 1 300px; /* 小ウィジェット */
  min-height: 200px;
}

.widget.medium {
  flex: 1 1 400px; /* 中ウィジェット */
  min-height: 300px;
}

.widget.large {
  flex: 2 1 600px; /* 大ウィジェット */
  min-height: 400px;
}

.widget.full-width {
  flex: 1 1 100%; /* 全幅ウィジェット */
  min-height: 300px;
}

.widget-header {
  background: linear-gradient(135deg, #607d8b, #546e7a);
  color: white;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.widget-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.widget-icon {
  font-size: 20px;
}

.widget-content {
  flex: 1 1 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

/* 小ウィジェット（メトリクス）のスタイル */
.metric-value {
  font-size: 36px;
  font-weight: bold;
  color: #263238;
  text-align: center;
  margin-bottom: 8px;
}

.metric-change {
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
}

.metric-change.positive {
  color: #4caf50;
}

.metric-change.negative {
  color: #f44336;
}

.metric-label {
  text-align: center;
  font-size: 12px;
  color: #666;
}

/* パフォーマンス指標のスタイル */
.performance-metrics {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.metric-bar {
  flex: 1;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transition: width 0.3s ease;
}

.metric-item span {
  font-size: 14px;
  color: #666;
  min-width: 80px;
}

/* アクティビティリストのスタイル */
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.activity-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 6px;
  border-left: 3px solid #607d8b;
}

.activity-time {
  font-size: 12px;
  color: #666;
  font-weight: 500;
  min-width: 50px;
}

.activity-desc {
  font-size: 14px;
  color: #333;
  flex: 1;
}

/* 地域データのスタイル */
.region-data {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.region-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f0f4f8;
  border-radius: 6px;
}

.region-name {
  font-size: 14px;
  color: #333;
}

.region-value {
  font-size: 16px;
  font-weight: bold;
  color: #607d8b;
}

/* システム概要のスタイル */
.system-overview {
  display: flex;
  gap: 24px;
}

.overview-section {
  flex: 1;
}

.overview-section h5 {
  margin: 0 0 12px 0;
  color: #263238;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 6px;
}

.server-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.server-item {
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 13px;
}

.server-item.online {
  background: #e8f5e8;
  color: #2e7d32;
  border-left: 3px solid #4caf50;
}

.server-item.offline {
  background: #fff3e0;
  color: #e65100;
  border-left: 3px solid #ff9800;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 12px;
}

.stat-box {
  text-align: center;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
}

.stat-number {
  font-size: 20px;
  font-weight: bold;
  color: #607d8b;
}

.stat-label {
  font-size: 12px;
  color: #666;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .dashboard {
    padding: 12px;
    gap: 12px;
  }
  
  .widget {
    flex: 1 1 100% !important;
  }
  
  .system-overview {
    flex-direction: column;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .dashboard-demo {
    padding: 16px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

/* パターン説明 */
.pattern-explanation {
  margin-top: 24px;
  padding: 20px;
  background-color: #f3f6f9;
  border: 1px solid #607d8b;
  border-radius: 8px;
}

.pattern-explanation h4 {
  margin: 0 0 12px 0;
  color: #263238;
  font-size: 16px;
  font-weight: 500;
}

.pattern-explanation ul {
  margin: 0;
  padding-left: 20px;
}

.pattern-explanation li {
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}

.pattern-explanation strong {
  color: #263238;
}`}],relatedItems:["flex-grow","flex-shrink","flex-basis","flex-direction"]};export{i as default,i as item};
