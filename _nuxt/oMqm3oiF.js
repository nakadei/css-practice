const d={id:"flex-advanced-topics",title:"flex の実践的なトピック",description:`
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
}`},{subtitle:"min-width と max-width の影響",htmlCode:`<!-- 説明 -->
<div class="adv-syntax-explanation">
  <h4>flex の計算は min-width / max-width で制約される</h4>
  <p class="adv-note">flex-shrink や flex-grow があっても、min/max の制約が優先されます</p>
</div>

<!-- Before: min-width なし -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">Before: min-width なし（均等に縮小）</h4>
  <p class="adv-container-info">コンテナ幅: 300px（利用可能幅: 280px）</p>
  
  <div class="adv-minmax-demo no-constraint">
    <div class="adv-minmax-item">
      <div class="adv-item-label">A</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-minmax-item">
      <div class="adv-item-label">B</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-minmax-item">
      <div class="adv-item-label">C</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
  </div>
  <p class="adv-result-note">各93.3px（均等に縮小）</p>
</div>

<div class="adv-arrow-down">↓ Aに min-width: 120px を追加 ↓</div>

<!-- After: min-width あり -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">After: Aに min-width: 120px（制約あり）</h4>
  <p class="adv-container-info">コンテナ幅: 300px（利用可能幅: 280px）</p>
  
  <div class="adv-minmax-demo with-constraint">
    <div class="adv-minmax-item with-min">
      <div class="adv-item-label">A</div>
      <div class="adv-item-code">
        flex: 1 1 100px<br>
        <strong>min-width: 120px</strong>
      </div>
    </div>
    <div class="adv-minmax-item">
      <div class="adv-item-label">B</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-minmax-item">
      <div class="adv-item-label">C</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
  </div>
  <p class="adv-result-note">A: 120px（制約）, B: 80px, C: 80px</p>
</div>

<!-- 計算手順 -->
<div class="adv-calculation-steps">
  <h4>計算の優先順位</h4>
  
  <ol class="adv-priority-list">
    <li><strong>1. min-width / max-width の制約チェック</strong></li>
    <li>2. flex-basis による基準サイズ設定</li>
    <li>3. flex-shrink / flex-grow による調整</li>
  </ol>
  
  <h4>After の計算手順:</h4>
  <ol>
    <li>基準サイズ合計: 100 + 100 + 100 = 300px</li>
    <li>不足分: 300 - 280 = 20px</li>
    <li>shrink値: 1, 1, 1（均等）</li>
    <li>各アイテムの縮小: -6.67px ずつ</li>
    <li>仮の最終サイズ: 93.3px, 93.3px, 93.3px</li>
    <li><strong>⚠️ Aは min-width: 120px で制約 → 120px に固定</strong></li>
    <li>再計算: B と C で残り 160px を分割 → 各80px</li>
  </ol>
  
  <div class="adv-key-point">
    <strong>重要なポイント:</strong>
    <ul>
      <li>min-width / max-width は flex の計算より優先される</li>
      <li>制約のあるアイテムはサイズが固定され、他が調整される</li>
      <li>レスポンシブデザインでは min-width の設定が重要</li>
    </ul>
  </div>
</div>`,cssCode:`.adv-minmax-demo {
  display: flex;
  gap: 10px;
  padding: 15px;
  border: 2px solid;
  width: 300px;
  border-radius: 6px;
  margin-bottom: 8px;
}

.no-constraint {
  background-color: #e3f2fd;
  border-color: #2196f3;
}

.with-constraint {
  background-color: #fff3e0;
  border-color: #ff9800;
}

.adv-minmax-item {
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

.no-constraint .adv-minmax-item {
  flex: 1 1 100px;
  background-color: #2196f3;
}

.with-constraint .adv-minmax-item {
  flex: 1 1 100px;
  background-color: #ff9800;
}

.with-constraint .adv-minmax-item.with-min {
  min-width: 120px;
  background-color: #f44336;
}

.adv-minmax-item strong {
  color: #ffeb3b;
  font-size: 10px;
  margin-top: 4px;
}

.adv-priority-list {
  background-color: #fff9c4;
  padding: 15px 15px 15px 35px;
  border-radius: 4px;
  margin: 10px 0 15px 0;
  border-left: 3px solid #fbc02d;
}

.adv-priority-list li {
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
}

.adv-priority-list strong {
  color: #f57f17;
}`},{subtitle:"gap がある場合の shrink 計算",htmlCode:`<!-- 説明 -->
<div class="adv-syntax-explanation">
  <h4>gap は利用可能幅から差し引かれる</h4>
  <p class="adv-note">gap の分だけスペースが減るため、shrink の影響が大きくなります</p>
</div>

<!-- gap なし -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">パターン1: gap なし</h4>
  <p class="adv-container-info">コンテナ幅: 300px（padding: 10px）</p>
  
  <div class="adv-gap-demo gap-none">
    <div class="adv-gap-item">
      <div class="adv-item-label">A</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-gap-item">
      <div class="adv-item-label">B</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-gap-item">
      <div class="adv-item-label">C</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
  </div>
  <p class="adv-result-note">各93.3px（利用可能幅: 280px）</p>
</div>

<!-- gap: 10px -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">パターン2: gap: 10px</h4>
  <p class="adv-container-info">コンテナ幅: 300px（padding: 10px）</p>
  
  <div class="adv-gap-demo gap-10">
    <div class="adv-gap-item">
      <div class="adv-item-label">A</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-gap-item">
      <div class="adv-item-label">B</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-gap-item">
      <div class="adv-item-label">C</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
  </div>
  <p class="adv-result-note">各86.7px（利用可能幅: 280px - 20px = 260px）</p>
</div>

<!-- gap: 20px -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">パターン3: gap: 20px</h4>
  <p class="adv-container-info">コンテナ幅: 300px（padding: 10px）</p>
  
  <div class="adv-gap-demo gap-20">
    <div class="adv-gap-item">
      <div class="adv-item-label">A</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-gap-item">
      <div class="adv-item-label">B</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
    <div class="adv-gap-item">
      <div class="adv-item-label">C</div>
      <div class="adv-item-code">flex: 1 1 100px</div>
    </div>
  </div>
  <p class="adv-result-note">各80px（利用可能幅: 280px - 40px = 240px）</p>
</div>

<!-- 計算の説明 -->
<div class="adv-calculation-steps">
  <h4>gap を考慮した計算式</h4>
  
  <div class="adv-formula-box">
    <code>利用可能幅 = コンテナ幅 - padding左右 - gap × (アイテム数 - 1)</code>
  </div>
  
  <table class="adv-gap-table">
    <thead>
      <tr>
        <th>gap</th>
        <th>gap合計</th>
        <th>利用可能幅</th>
        <th>各アイテム</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0px</td>
        <td>0px</td>
        <td>280px</td>
        <td>93.3px</td>
      </tr>
      <tr>
        <td>10px</td>
        <td>20px (10×2)</td>
        <td>260px</td>
        <td>86.7px</td>
      </tr>
      <tr>
        <td>20px</td>
        <td>40px (20×2)</td>
        <td>240px</td>
        <td>80px</td>
      </tr>
    </tbody>
  </table>
  
  <div class="adv-key-point">
    <strong>重要なポイント:</strong>
    <ul>
      <li>gap は <code>gap × (アイテム数 - 1)</code> で計算される</li>
      <li>gap が大きいほど、flex-shrink の影響が大きくなる</li>
      <li>gap はアイテム間のみ（最初と最後には入らない）</li>
    </ul>
  </div>
</div>`,cssCode:`.adv-gap-demo {
  display: flex;
  padding: 10px;
  border: 2px solid #9c27b0;
  width: 300px;
  border-radius: 6px;
  background-color: #f3e5f5;
  margin-bottom: 8px;
}

.gap-none {
  gap: 0;
  border-color: #2196f3;
  background-color: #e3f2fd;
}

.gap-10 {
  gap: 10px;
  border-color: #ff9800;
  background-color: #fff3e0;
}

.gap-20 {
  gap: 20px;
  border-color: #f44336;
  background-color: #ffebee;
}

.adv-gap-item {
  display: flex;
  flex: 1 1 100px;
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

.gap-none .adv-gap-item {
  background-color: #2196f3;
}

.gap-10 .adv-gap-item {
  background-color: #ff9800;
}

.gap-20 .adv-gap-item {
  background-color: #f44336;
}

.adv-formula-box {
  background-color: #263238;
  padding: 15px;
  border-radius: 4px;
  margin: 15px 0;
  overflow-x: auto;
}

.adv-formula-box code {
  color: #aed581;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  white-space: nowrap;
}

.adv-gap-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 13px;
}

.adv-gap-table th,
.adv-gap-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}

.adv-gap-table th {
  background-color: #f3e5f5;
  color: #7b1fa2;
  font-weight: bold;
}

.adv-gap-table tbody tr:nth-child(1) {
  background-color: #e3f2fd;
}

.adv-gap-table tbody tr:nth-child(2) {
  background-color: #fff3e0;
}

.adv-gap-table tbody tr:nth-child(3) {
  background-color: #ffebee;
}`},{subtitle:"padding がある場合の計算（box-sizing の重要性）",htmlCode:`<!-- 説明 -->
<div class="adv-syntax-explanation">
  <h4>box-sizing で padding の扱いが変わる</h4>
  <p class="adv-note">content-box と border-box で計算結果が大きく異なります</p>
</div>

<!-- Before: box-sizing: content-box（デフォルト） -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">Before: box-sizing: content-box（⚠️ はみ出す）</h4>
  <p class="adv-container-info">コンテナ幅: 300px、各アイテム padding: 10px</p>
  
  <div class="adv-boxsizing-demo content-box-demo">
    <div class="adv-boxsizing-item content-box-item">
      <div class="adv-item-label">A</div>
      <div class="adv-item-code">
        flex: 1<br>
        padding: 10px<br>
        <small>content-box</small>
      </div>
    </div>
    <div class="adv-boxsizing-item content-box-item">
      <div class="adv-item-label">B</div>
      <div class="adv-item-code">
        flex: 1<br>
        padding: 10px<br>
        <small>content-box</small>
      </div>
    </div>
    <div class="adv-boxsizing-item content-box-item">
      <div class="adv-item-label">C</div>
      <div class="adv-item-code">
        flex: 1<br>
        padding: 10px<br>
        <small>content-box</small>
      </div>
    </div>
  </div>
  <p class="adv-result-note adv-error">❌ 最終サイズ: 各113.3px（93.3 + 20） → はみ出す！</p>
</div>

<div class="adv-arrow-down">↓ box-sizing を border-box に変更 ↓</div>

<!-- After: box-sizing: border-box -->
<div class="adv-demo-section">
  <h4 class="adv-demo-title">After: box-sizing: border-box（✅ 収まる）</h4>
  <p class="adv-container-info">コンテナ幅: 300px、各アイテム padding: 10px</p>
  
  <div class="adv-boxsizing-demo border-box-demo">
    <div class="adv-boxsizing-item border-box-item">
      <div class="adv-item-label">A</div>
      <div class="adv-item-code">
        flex: 1<br>
        padding: 10px<br>
        <small>border-box</small>
      </div>
    </div>
    <div class="adv-boxsizing-item border-box-item">
      <div class="adv-item-label">B</div>
      <div class="adv-item-code">
        flex: 1<br>
        padding: 10px<br>
        <small>border-box</small>
      </div>
    </div>
    <div class="adv-boxsizing-item border-box-item">
      <div class="adv-item-label">C</div>
      <div class="adv-item-code">
        flex: 1<br>
        padding: 10px<br>
        <small>border-box</small>
      </div>
    </div>
  </div>
  <p class="adv-result-note adv-success">✅ 最終サイズ: 各93.3px（padding込み） → ぴったり収まる</p>
</div>

<!-- 計算の違い -->
<div class="adv-calculation-steps">
  <h4>box-sizing による計算の違い</h4>
  
  <div class="adv-comparison-grid">
    <div class="adv-comparison-col content-box-col">
      <h5>content-box の場合</h5>
      <ol>
        <li>flex計算: 各93.3px（コンテンツ幅）</li>
        <li>padding追加: +20px (10px × 2)</li>
        <li>最終サイズ: 113.3px × 3 = 340px</li>
        <li><strong class="error">❌ 280px に収まらない（60px超過）</strong></li>
      </ol>
      <div class="visual-box content-box-visual">
        <div class="box-part padding">p</div>
        <div class="box-part content">content: 93.3px</div>
        <div class="box-part padding">p</div>
        <div class="box-total">合計: 113.3px</div>
      </div>
    </div>
    
    <div class="adv-comparison-col border-box-col">
      <h5>border-box の場合</h5>
      <ol>
        <li>flex計算: 各93.3px（全体幅）</li>
        <li>padding含む: 93.3px の中に padding も含む</li>
        <li>コンテンツ幅: 73.3px (93.3 - 20)</li>
        <li><strong class="success">✅ 280px にぴったり収まる</strong></li>
      </ol>
      <div class="visual-box border-box-visual">
        <div class="box-wrapper">
          <div class="box-part padding-small">p</div>
          <div class="box-part content-small">content: 73.3px</div>
          <div class="box-part padding-small">p</div>
        </div>
        <div class="box-total">合計: 93.3px</div>
      </div>
    </div>
  </div>
  
  <div class="adv-key-point">
    <strong>ベストプラクティス:</strong>
    <ul>
      <li>flexアイテムには <code>box-sizing: border-box</code> を設定すべき</li>
      <li>グローバルに設定することを推奨: <code>*, *::before, *::after { box-sizing: border-box; }</code></li>
      <li>content-box（デフォルト）は直感的でなく、バグの原因になりやすい</li>
    </ul>
  </div>
</div>`,cssCode:`.adv-boxsizing-demo {
  display: flex;
  gap: 10px;
  padding: 10px;
  border: 2px solid;
  width: 300px;
  border-radius: 6px;
  margin-bottom: 8px;
  overflow: visible;
}

.content-box-demo {
  background-color: #ffebee;
  border-color: #f44336;
}

.border-box-demo {
  background-color: #e8f5e9;
  border-color: #4caf50;
}

.adv-boxsizing-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  border-radius: 6px;
  font-size: 11px;
  min-height: 70px;
}

.content-box-item {
  box-sizing: content-box;
  padding: 10px;
  background-color: #f44336;
}

.border-box-item {
  box-sizing: border-box;
  padding: 10px;
  background-color: #4caf50;
}

.adv-error {
  color: #d32f2f !important;
  font-weight: bold;
}

.adv-success {
  color: #388e3c !important;
  font-weight: bold;
}

.content-box-col {
  background-color: #ffebee;
  border: 2px solid #f44336;
}

.border-box-col {
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
}

.content-box-col h5 {
  color: #d32f2f;
  border-bottom-color: #f44336;
}

.border-box-col h5 {
  color: #388e3c;
  border-bottom-color: #4caf50;
}

.error {
  color: #d32f2f;
}

.success {
  color: #388e3c;
}

.visual-box {
  margin-top: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.content-box-visual {
  border-color: #f44336;
}

.border-box-visual {
  border-color: #4caf50;
}

.box-wrapper {
  display: flex;
  border: 2px dashed #4caf50;
  border-radius: 3px;
}

.box-part {
  padding: 8px;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
}

.box-part.padding {
  background-color: #ffcdd2;
  color: #c62828;
  flex: 0 0 30px;
}

.box-part.content {
  background-color: #e3f2fd;
  color: #1565c0;
  flex: 1;
}

.box-part.padding-small {
  background-color: #ffcdd2;
  color: #c62828;
  flex: 0 0 20px;
  font-size: 10px;
}

.box-part.content-small {
  background-color: #e3f2fd;
  color: #1565c0;
  flex: 1;
}

.box-total {
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #666;
  padding: 5px;
  background-color: #f5f5f5;
  border-radius: 3px;
}`}],relatedItems:["flex-basis","flex-grow","flex-shrink","flex-calculation"]};export{d as default,d as item};
