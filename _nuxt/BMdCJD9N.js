const e={id:"flex-advanced-topics",title:"flex の実践的なトピック",description:`
    flex プロパティの短縮記法、デフォルト値、計算時の特殊なケースなど、実践的で重要なトピックを解説します。

    このページで学べること:
      - flex短縮記法の正しい理解（デフォルト値の落とし穴）
      - flex: 1 と flex-grow: 1 の決定的な違い
      - flex-basis: 0 の特殊な動作
      - min-width/max-width による制約
      - gap がある場合の計算方法
      - padding と box-sizing の関係

    実践的な知識:
      - 実際の開発で遭遇する問題を理解
      - よくある落とし穴を回避
      - 正確な計算方法を習得
  `,demos:[{subtitle:"flex短縮記法の基本",htmlCode:`<!-- flex短縮記法の完全な形式 -->
<div class="syntax-explanation">
  <h4>flex短縮記法の構文</h4>
  <code class="syntax">flex: &lt;flex-grow&gt; &lt;flex-shrink&gt; &lt;flex-basis&gt;;</code>
  <p class="note">3つの値を1つのプロパティで指定できます</p>
</div>

<!-- 各値の役割を視覚的に表示 -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">例: flex: 2 1 200px の動作</h4>
  <p class="container-info">コンテナ幅: 500px（利用可能幅: 470px）</p>
  
  <div class="flex-shorthand-demo">
    <div class="adv-flex-item item-1">
      <div class="item-label">アイテム1</div>
      <div class="item-details">
        flex: 2 1 200px<br>
        <small>grow: 2</small><br>
        <small>shrink: 1</small><br>
        <small>basis: 200px</small>
      </div>
    </div>
    <div class="adv-flex-item item-2">
      <div class="item-label">アイテム2</div>
      <div class="item-details">
        flex: 1 1 100px<br>
        <small>grow: 1</small><br>
        <small>shrink: 1</small><br>
        <small>basis: 100px</small>
      </div>
    </div>
    <div class="adv-flex-item item-3">
      <div class="item-label">アイテム3</div>
      <div class="item-details">
        flex: 1 1 100px<br>
        <small>grow: 1</small><br>
        <small>shrink: 1</small><br>
        <small>basis: 100px</small>
      </div>
    </div>
  </div>
</div>

<!-- 計算手順の説明 -->
<div class="calculation-steps">
  <h4>各値の役割:</h4>
  <div class="value-explanation">
    <div class="value-item grow">
      <strong>flex-grow: 2, 1, 1</strong>
      <p>余白を 2:1:1 の比率で配分</p>
    </div>
    <div class="value-item shrink">
      <strong>flex-shrink: 1, 1, 1</strong>
      <p>不足時に均等に縮小</p>
    </div>
    <div class="value-item basis">
      <strong>flex-basis: 200px, 100px, 100px</strong>
      <p>各アイテムの基準サイズ</p>
    </div>
  </div>
  
  <h4>計算手順:</h4>
  <ol>
    <li>利用可能幅: 500px - 30px(padding) = 470px</li>
    <li>基準サイズ合計: 200 + 100 + 100 = 400px</li>
    <li>余白: 470 - 400 = 70px</li>
    <li>grow値合計: 2 + 1 + 1 = 4</li>
    <li>配分: アイテム1=35px, アイテム2=17.5px, アイテム3=17.5px</li>
    <li>最終サイズ: 235px, 117.5px, 117.5px（合計470px）</li>
  </ol>
</div>

<!-- 同等の個別指定 -->
<div class="equivalent-code">
  <h4>これは以下と同じ意味:</h4>
  <pre><code>.item-1 {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 200px;
}</code></pre>
</div>`,cssCode:`.syntax-explanation {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-left: 4px solid #2196f3;
  border-radius: 4px;
}

.syntax-explanation h4 {
  margin: 0 0 10px 0;
  color: #1976d2;
  font-size: 16px;
}

.syntax {
  display: block;
  padding: 10px;
  background-color: #263238;
  color: #aed581;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  margin: 10px 0;
}

.note {
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #666;
  font-style: italic;
}

.adv-demo-section {
  margin-bottom: 20px;
}

.adv-demo-title {
  margin: 0 0 10px 0;
  color: #1976d2;
  font-size: 16px;
  font-weight: bold;
}

.container-info {
  margin: 0 0 8px 0;
  font-size: 12px;
  font-weight: bold;
  color: #666;
}

.flex-shorthand-demo {
  display: flex;
  gap: 10px;
  padding: 15px;
  border: 2px solid #2196f3;
  width: 500px;
  border-radius: 6px;
  background-color: #e3f2fd;
}

.adv-flex-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 12px;
  padding: 12px;
  min-height: 80px;
  justify-content: center;
}

.item-1 {
  flex: 2 1 200px;
  background-color: #f44336;
}

.item-2 {
  flex: 1 1 100px;
  background-color: #4caf50;
}

.item-3 {
  flex: 1 1 100px;
  background-color: #ff9800;
}

.item-label {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 14px;
}

.item-details {
  font-size: 11px;
  opacity: 0.95;
  line-height: 1.4;
}

.item-details small {
  font-size: 10px;
  opacity: 0.85;
}

.calculation-steps {
  margin-top: 20px;
  padding: 15px;
  background-color: #f0f8ff;
  border: 1px solid #2196f3;
  border-radius: 6px;
}

.calculation-steps h4 {
  margin: 0 0 12px 0;
  color: #1976d2;
  font-size: 15px;
}

.value-explanation {
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.value-item {
  flex: 1;
  min-width: 140px;
  padding: 10px;
  border-radius: 4px;
  background-color: white;
  border-left: 3px solid;
}

.value-item.grow {
  border-left-color: #4caf50;
}

.value-item.shrink {
  border-left-color: #ff9800;
}

.value-item.basis {
  border-left-color: #2196f3;
}

.value-item strong {
  display: block;
  margin-bottom: 5px;
  font-size: 13px;
  color: #333;
}

.value-item p {
  margin: 0;
  font-size: 12px;
  color: #666;
}

.calculation-steps ol {
  margin: 0;
  padding-left: 20px;
}

.calculation-steps li {
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.equivalent-code {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.equivalent-code h4 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 14px;
}

.equivalent-code pre {
  margin: 0;
  padding: 10px;
  background-color: #263238;
  border-radius: 4px;
  overflow-x: auto;
}

.equivalent-code code {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #aed581;
  line-height: 1.6;
}`},{subtitle:"1つだけ値を設定した場合",htmlCode:`<!-- 説明 -->
<div class="syntax-explanation">
  <h4>flex に1つだけ値を指定した場合の展開</h4>
  <p class="note">値の型によって解釈が変わります</p>
</div>

<!-- パターン1: 数値のみ -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">パターン1: 数値のみ（flex: 1, flex: 2）</h4>
  <p class="container-info">コンテナ幅: 400px</p>
  
  <div class="single-value-demo">
    <div class="adv-single-item flex-1">
      <div class="item-label">flex: 1</div>
      <div class="expanded-code">
        = flex: 1 1 0<br>
        <small>grow: 1, shrink: 1, basis: 0</small>
      </div>
    </div>
    <div class="adv-single-item flex-2">
      <div class="item-label">flex: 2</div>
      <div class="expanded-code">
        = flex: 2 1 0<br>
        <small>grow: 2, shrink: 1, basis: 0</small>
      </div>
    </div>
    <div class="adv-single-item flex-1">
      <div class="item-label">flex: 1</div>
      <div class="expanded-code">
        = flex: 1 1 0<br>
        <small>grow: 1, shrink: 1, basis: 0</small>
      </div>
    </div>
  </div>
  <p class="result-note">余白を 1:2:1 の比率で配分</p>
</div>

<!-- パターン2: 長さのみ -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">パターン2: 長さのみ（flex: 200px）</h4>
  <p class="container-info">コンテナ幅: 400px</p>
  
  <div class="single-value-demo">
    <div class="adv-single-item flex-200px">
      <div class="item-label">flex: 200px</div>
      <div class="expanded-code">
        = flex: 1 1 200px<br>
        <small>grow: 1, shrink: 1</small>
      </div>
    </div>
    <div class="adv-single-item flex-100px">
      <div class="item-label">flex: 100px</div>
      <div class="expanded-code">
        = flex: 1 1 100px<br>
        <small>grow: 1, shrink: 1</small>
      </div>
    </div>
  </div>
  <p class="result-note">basis を基準に grow/shrink で調整</p>
</div>

<!-- パターン3: auto -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">パターン3: キーワード（flex: auto）</h4>
  <p class="container-info">コンテナ幅: 400px</p>
  
  <div class="single-value-demo">
    <div class="adv-single-item flex-auto short-content">
      <div class="item-label">flex: auto</div>
      <div class="expanded-code">
        = flex: 1 1 auto<br>
        <small>内容: 短い</small>
      </div>
    </div>
    <div class="adv-single-item flex-auto long-content">
      <div class="item-label">flex: auto</div>
      <div class="expanded-code">
        = flex: 1 1 auto<br>
        <small>内容: これは長めのコンテンツ</small>
      </div>
    </div>
  </div>
  <p class="result-note">内容サイズを基準に grow/shrink で調整</p>
</div>

<!-- まとめ表 -->
<div class="calculation-steps">
  <h4>1つの値を指定した場合のまとめ</h4>
  
  <table class="summary-table">
    <thead>
      <tr>
        <th>書き方</th>
        <th>展開後</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>flex: 1</code></td>
        <td><code>flex: 1 1 0</code></td>
        <td>均等配分（内容無視）</td>
      </tr>
      <tr>
        <td><code>flex: 2</code></td>
        <td><code>flex: 2 1 0</code></td>
        <td>2倍の成長率</td>
      </tr>
      <tr>
        <td><code>flex: 200px</code></td>
        <td><code>flex: 1 1 200px</code></td>
        <td>基準200px、可変</td>
      </tr>
      <tr>
        <td><code>flex: auto</code></td>
        <td><code>flex: 1 1 auto</code></td>
        <td>内容サイズ基準、可変</td>
      </tr>
    </tbody>
  </table>
</div>`,cssCode:`.single-value-demo {
  display: flex;
  gap: 10px;
  padding: 15px;
  border: 2px solid #2196f3;
  width: 400px;
  border-radius: 6px;
  background-color: #e3f2fd;
  margin-bottom: 8px;
}

.adv-single-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 12px;
  padding: 12px 8px;
  min-height: 80px;
}

.flex-1 {
  flex: 1;
  background-color: #2196f3;
}

.flex-2 {
  flex: 2;
  background-color: #1976d2;
}

.flex-200px {
  flex: 200px;
  background-color: #4caf50;
}

.flex-100px {
  flex: 100px;
  background-color: #66bb6a;
}

.flex-auto {
  flex: auto;
  background-color: #ff9800;
}

.short-content::after {
  content: '短い';
  display: block;
  margin-top: 8px;
  font-size: 11px;
  opacity: 0;
}

.long-content::after {
  content: 'これは長めのコンテンツ';
  display: block;
  margin-top: 8px;
  font-size: 11px;
  opacity: 0;
}

.expanded-code {
  font-size: 10px;
  opacity: 0.95;
  font-family: 'Courier New', monospace;
  background-color: rgba(0,0,0,0.2);
  padding: 6px 8px;
  border-radius: 3px;
  margin-top: 6px;
  line-height: 1.4;
}

.expanded-code small {
  font-size: 9px;
  opacity: 0.85;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 13px;
}

.summary-table th,
.summary-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.summary-table th {
  background-color: #e3f2fd;
  color: #1565c0;
  font-weight: bold;
  text-align: center;
}

.summary-table code {
  background-color: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #d32f2f;
}

.summary-table td:last-child {
  color: #666;
  font-size: 12px;
}`},{subtitle:"デフォルト値の重要性（⚠️ 重要な落とし穴）",htmlCode:`<!-- 警告メッセージ -->
<div class="warning-box">
  <h4>⚠️ よくある間違い</h4>
  <p><code>flex-grow: 1</code> と <code>flex: 1</code> は<strong>異なります！</strong></p>
</div>

<!-- Before: flex-grow: 1 のみ指定 -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">パターン1: flex-grow: 1 のみ指定</h4>
  <p class="container-info">コンテナ幅: 400px（利用可能幅: 380px）</p>
  
  <div class="default-comparison flex-grow-only">
    <div class="adv-demo-item item-short">
      <div class="item-label">短い</div>
      <div class="item-code">flex-grow: 1</div>
    </div>
    <div class="adv-demo-item item-long">
      <div class="item-label">これは長いコンテンツです</div>
      <div class="item-code">flex-grow: 1</div>
    </div>
    <div class="adv-demo-item item-short">
      <div class="item-label">短い</div>
      <div class="item-code">flex-grow: 1</div>
    </div>
  </div>
  <p class="result-note">❌ 内容サイズの影響を受けて不均等</p>
</div>

<div class="arrow-down">↓ vs ↓</div>

<!-- After: flex: 1 指定 -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">パターン2: flex: 1 指定</h4>
  <p class="container-info">コンテナ幅: 400px（利用可能幅: 380px）</p>
  
  <div class="default-comparison flex-shorthand">
    <div class="adv-demo-item item-short">
      <div class="item-label">短い</div>
      <div class="item-code">flex: 1</div>
    </div>
    <div class="adv-demo-item item-long">
      <div class="item-label">これは長いコンテンツです</div>
      <div class="item-code">flex: 1</div>
    </div>
    <div class="adv-demo-item item-short">
      <div class="item-label">短い</div>
      <div class="item-code">flex: 1</div>
    </div>
  </div>
  <p class="result-note">✅ 完全に均等なサイズ</p>
</div>

<!-- デフォルト値の説明 -->
<div class="calculation-steps">
  <h4>なぜ違うのか？デフォルト値の違い</h4>
  
  <table class="default-table">
    <thead>
      <tr>
        <th>書き方</th>
        <th>flex-grow</th>
        <th>flex-shrink</th>
        <th>flex-basis</th>
      </tr>
    </thead>
    <tbody>
      <tr class="row-individual">
        <td><code>flex-grow: 1</code></td>
        <td>1</td>
        <td>1 (デフォルト)</td>
        <td><strong>auto</strong> (デフォルト)</td>
      </tr>
      <tr class="row-shorthand">
        <td><code>flex: 1</code></td>
        <td>1</td>
        <td>1</td>
        <td><strong>0</strong></td>
      </tr>
    </tbody>
  </table>
  
  <div class="key-point">
    <strong>重要なポイント:</strong>
    <ul>
      <li><code>flex-grow: 1</code> → basis は <strong>auto</strong>（内容サイズが基準）</li>
      <li><code>flex: 1</code> → basis は <strong>0</strong>（内容サイズを無視）</li>
    </ul>
  </div>
</div>`,cssCode:`.warning-box {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
  border-radius: 4px;
}

.warning-box h4 {
  margin: 0 0 8px 0;
  color: #e65100;
  font-size: 16px;
}

.warning-box p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.warning-box code {
  background-color: #ffe0b2;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
}

.default-comparison {
  display: flex;
  gap: 10px;
  padding: 15px;
  border: 2px solid;
  width: 400px;
  border-radius: 6px;
  margin-bottom: 8px;
}

.flex-grow-only {
  background-color: #ffebee;
  border-color: #f44336;
}

.flex-shorthand {
  background-color: #e8f5e9;
  border-color: #4caf50;
}

.adv-demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 12px;
  padding: 12px 8px;
  min-height: 70px;
}

.flex-grow-only .adv-demo-item {
  flex-grow: 1;
  /* flex-shrink: 1 (デフォルト) */
  /* flex-basis: auto (デフォルト) */
  background-color: #f44336;
}

.flex-shorthand .adv-demo-item {
  flex: 1; /* = flex: 1 1 0 */
  background-color: #4caf50;
}

.item-label {
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 13px;
}

.item-code {
  font-size: 10px;
  opacity: 0.9;
  font-family: 'Courier New', monospace;
  background-color: rgba(0,0,0,0.2);
  padding: 3px 6px;
  border-radius: 3px;
}

.result-note {
  margin: 0;
  font-size: 13px;
  font-weight: bold;
}

.arrow-down {
  text-align: center;
  font-size: 18px;
  color: #666;
  margin: 15px 0;
  font-weight: bold;
}

.default-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 14px;
}

.default-table th,
.default-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

.default-table th {
  background-color: #e3f2fd;
  color: #1565c0;
  font-weight: bold;
}

.default-table code {
  background-color: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}

.row-individual {
  background-color: #ffebee;
}

.row-shorthand {
  background-color: #e8f5e9;
}

.default-table td strong {
  color: #d32f2f;
  font-weight: bold;
}

.key-point {
  margin-top: 15px;
  padding: 12px;
  background-color: #fff9c4;
  border-left: 3px solid #fbc02d;
  border-radius: 4px;
}

.key-point strong {
  display: block;
  margin-bottom: 8px;
  color: #f57f17;
}

.key-point ul {
  margin: 0;
  padding-left: 20px;
}

.key-point li {
  margin-bottom: 5px;
  font-size: 13px;
  color: #333;
}

.key-point code {
  background-color: #fff59d;
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}`}],relatedItems:["flex-basis","flex-grow","flex-shrink","flex-calculation"]};export{e as default,e as item};
