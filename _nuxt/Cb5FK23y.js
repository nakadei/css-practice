const i={id:"block-inline",title:"ブロック要素とインライン要素の違い",description:`
    ブロック要素とインライン要素は CSS の基本的な表示モデルです。実務ではそれぞれの特徴を理解して使い分けることが重要です。

    ブロック要素 (display: block):
      - 常に改行して新しい行から始まり、横幅は原則として親要素の幅いっぱいに広がります（幅指定も可能）。
      - 代表例: <div>, <p>, <h1>〜<h6>, <section>, <article>。
      - 上下のマージンは折りたたまれる（margin collapse）など独特の振る舞いがあります。

    インライン要素 (display: inline):
      - 行の流れの中に配置され、幅は内容に応じて決まります。高さや幅を直接指定できない点に注意。
      - 代表例: <span>, <a>, <strong>, <em>（画像は inline に近い振る舞いをします）。

    インラインブロック (display: inline-block):
      - インラインの流れの中にありつつ、幅・高さ・パディングなどを指定できる要素。テキストと横並びの小さなボックスを作るときに便利です。

    実務的な使い分け:
      - ページの大きな構造（ヘッダー、メイン、サイドバー、フッター）はブロック要素または Flex/Grid コンテナで構成する。
      - テキストの途中で装飾的に配置する要素はインラインや inline-block を使う。

    よくある落とし穴:
      - ブロック要素内にインライン要素だけがあり、その高さ調整を誤ると期待した見た目にならない。
      - インライン要素同士の改行や空白の扱い（ホワイトスペース）がレイアウトに影響する。

    これらを把握すると、float や position に頼らず、より安定したレイアウトを設計できます。
    `,demos:[{subtitle:"ブロック要素とインライン要素の違い",htmlCode:`<div class="demo-block">
  <div class="block-element">ブロック要素（div） — 幅いっぱいに広がります</div>
  <p class="note">上の要素はブロック要素なので横幅いっぱいに広がります。</p>

  <span class="inline-element">インライン要素（span）</span>
  <span class="inline-element">もう一つのインライン要素</span>

  <div class="inline-block-wrapper">
    <div class="inline-block-element">インラインブロック（幅200px）</div>
    <div class="inline-block-element">インラインブロック（自動幅）</div>
  </div>
</div>`,cssCode:`/* デモ用コンテナ */
.demo-block {
  padding: 12px;
  background: linear-gradient(180deg,#ffffff 0%, #fbfbff 100%);
}

/* ブロック要素: 横幅いっぱいに広がり、背景で目立たせる */
.block-element {
  display: block;
  width: 100%;
  background-color: #1976d2;
  color: white;
  padding: 12px 16px;
  margin: 6px 0 12px 0;
  border-radius: 6px;
  box-sizing: border-box;
}

.note {
  margin: 0 0 12px 0;
  color: #424242;
  font-size: 0.9rem;
}

/* インライン要素: 背景は小さく、文の流れの中に収まる */
.inline-element {
  display: inline;
  background-color: #f3e5f5;
  color: #4a148c;
  padding: 6px 10px;
  margin-right: 8px;
  border-radius: 4px;
  border: 1px solid rgba(123,31,162,0.15);
}

/* インラインブロック要素: 高さや幅を制御できる */
.inline-block-wrapper {
  margin-top: 12px;
}
.inline-block-element {
  display: inline-block;
  vertical-align: top;
  background-color: #e8f5e8;
  color: #1b5e20;
  padding: 10px;
  margin: 6px 8px 0 0;
  border-radius: 4px;
  border: 1px solid rgba(56,142,60,0.15);
}
.inline-block-element:first-of-type { width: 200px; }
`}]};export{i as default,i as item};
