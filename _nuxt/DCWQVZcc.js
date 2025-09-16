const a={id:"float-problems",title:"floatレイアウトの問題点",description:`
    floatレイアウトはテキストの回り込みに便利ですが、主要レイアウトにはいくつかの欠点があります。
    主な問題点は次の通りです：
    ・親要素がフロートを包含せず高さが崩れる（clearfix や overflow で対処）
    ・clear を忘れると後続要素が回り込みレイアウトが崩れる
    ・ネストや等高カラムが実装しづらく、追加の工夫やJSが必要になる場合がある
    ・垂直中央揃えや柔軟な伸縮が苦手でレスポンシブ対応で不利
    ・ソース順と視覚位置がずれ、アクセシビリティに影響することがある

    対策としては clearfix や親の overflow 指定があるものの副作用があり、可能であれば Flexbox や Grid に置き換えることを推奨します。
  `,demos:[{subtitle:"floatレイアウトの問題点",htmlCode:`clearfixなしの問題例
<div class="no-clearfix-container">
  <div class="float-item">Float要素1</div>
  <div class="float-item">Float要素2</div>
  clearfixがないため、親要素の高さが0になる
</div>
<div class="next-content">次のコンテンツ（重なってしまう）</div>

<hr style="margin: 20px 0;">

clearfixありの正常例
<div class="clearfix-container">
  <div class="float-item">Float要素1</div>
  <div class="float-item">Float要素2</div>
  <div class="clearfix"></div>
</div>
<div class="next-content">次のコンテンツ（正常位置）</div>`,cssCode:`/* 共通スタイル */
.float-item {
  width: 120px;
  height: 60px;
  float: left;
  background-color: #ffeb3b;
  margin: 5px;
  padding: 10px;
  border: 1px solid #f57f17;
}

/* 問題のあるコンテナ（clearfixなし） */
.no-clearfix-container {
  background-color: #ffcdd2;
  border: 2px solid #f44336;
  padding: 10px;
  /* height: 0 になってしまう */
}

/* 正常なコンテナ（clearfixあり） */
.clearfix-container {
  background-color: #c8e6c9;
  border: 2px solid #4caf50;
  padding: 10px;
}

.clearfix {
  clear: both;
}

.next-content {
  background-color: #e1f5fe;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #2196f3;
}`},{subtitle:"clearを忘れると次のコンテンツが回り込む例",htmlCode:`
<!-- Bad / Good 比較 — clear を忘れた場合の見え方を並べて比較 -->
<div class="float-compare">
  <div class="panel bad">
    <span class="label">Bad</span>
    <p class="lead">問題例: clear を忘れると次のコンテンツがフロートと回り込みます。</p>
    <div class="example-wrap-bad">
      <div class="float-box">浮動ボックス（float:left）</div>
      <div class="after hint">次のセクション</div>
    </div>
  </div>

  <div class="panel good">
    <span class="label">Good</span>
    <p class="lead">修正例: clear を使うか親で包含します。</p>
    <div class="example-wrap-good">
      <div class="float-box">浮動ボックス（float:left）</div>
      <div class="after clear">次のセクション（clear: both で解除）</div>
    </div>
  </div>
</div>`,cssCode:`/* 比較用ラベルとパネル */
.float-compare { display: flex; gap: 16px; align-items: flex-start; }
.float-compare .panel { flex: 1; padding: 12px; border-radius: 6px; }
.float-compare .panel.bad { background: #fff3f3; border: 1px solid #f44336; }
.float-compare .panel.good { background: #f3fff6; border: 1px solid #4caf50; }
.label { display: inline-block; font-weight: 700; padding: 4px 8px; border-radius: 12px; margin-bottom: 8px; }
.panel.bad .label { background: #f44336; color: #fff; }
.panel.good .label { background: #4caf50; color: #fff; }
.lead { margin: 6px 0 12px; font-weight: 600; }

/* 実例スタイル（共通） */
.example-wrap-bad .float-box,
.example-wrap-good .float-box {
  float: left;
  width: 160px;
  height: 90px;
  background: #ffeb3b;
  margin: 8px;
  padding: 8px;
  border: 1px solid #f57f17;
}
.example-wrap-bad .after { background: #ffcdd2; padding: 8px; margin-top: 8px; border: 1px solid #f44336; float: left; }

/* Good: clear でフロートを解除 */
.example-wrap-good .after.clear { clear: both; background: #c8e6c9; padding: 8px; margin-top: 8px; border: 1px solid #4caf50; }

/* 補足: 親に overflow を指定して包含する方法もある（ここではコメントとして言及） */`},{subtitle:"ソース順と視覚位置がずれる例（アクセシビリティの注意）",htmlCode:`
<!-- Good: DOM順を合わせ、Flexboxで視覚を制御 -->
<div class="order-demo-good">
  <div class="panel good"><span class="label">Good</span>
    <div class="sidebar">サイドバー（DOM上も先）</div>
    <div class="main">
      <h3>メインコンテンツ（ソース順: 後）</h3>
      <p>サイドバーをDOM上で先に置き、Flexboxで横並びにすることで視覚順と読み上げ順を一致させます。</p>
      <p class="a11y-note"><strong>注意:</strong> スクリーンリーダーやキーボード操作は DOM の順に従います。</p>
    </div>
  </div>
</div>

<!-- Bad: 視覚順とソース順がずれる例 -->
<div class="order-demo-bad">
  <div class="panel bad"><span class="label">Bad</span>
    <div class="main">
      <h3>メインコンテンツ（ソース順: 先）</h3>
      <p>ソースで先にあるが、視覚的にはサイドバーが左に表示されるため順序が混乱します。スクリーンリーダーはソース順を読む点に注意。</p>
    </div>
    <div class="sidebar">サイドバー（視覚的に左）</div>
  </div>
</div>`,cssCode:`/* Bad (float) */
.order-demo-bad .sidebar { float: left; width: 160px; margin-right: 16px; background: #fff3e0; padding: 8px; border: 1px solid #ffb300; }
.order-demo-bad .main { background: #e8f5e9; padding: 8px; border: 1px solid #66bb6a; }

/* Good (FlexboxでDOM順と視覚順を一致) */
.order-demo-good { display: flex; gap: 16px; align-items: flex-start; }
.order-demo-good .sidebar { width: 200px; background: #fff3e0; padding: 8px; border: 1px solid #ffb300; }
.order-demo-good .main { flex: 1 1 auto; background: #e8f5e9; padding: 8px; border: 1px solid #66bb6a; }

.panel { border-radius: 6px; padding: 8px; }
.panel .label { float: right; font-weight: 700; padding: 4px 8px; border-radius: 12px; }
.panel.bad .label { background: #f44336; color: #fff; }
.panel.good .label { background: #4caf50; color: #fff; }
.a11y-note { margin-top: 8px; background: #fff8e1; padding: 8px; border: 1px dashed #ffb300; font-size: 0.95em; }

@media (max-width: 600px) { .order-demo-good { flex-direction: column; } .panel .label { float: none; display: inline-block; margin-bottom: 8px; } }
`}],problems:["clearfixが必要で忘れやすい","レスポンシブ対応が困難","ネストした要素の高さ計算が複雑","垂直中央揃えが困難","等高カラムの実現が困難"]};export{a as default,a as item};
