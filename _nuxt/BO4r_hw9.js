const a={id:"float-problems",title:"floatレイアウトの問題点",description:`
    floatレイアウトは長年便利に使われてきましたが、いくつかの構造的・実装上の問題を抱えています。主な問題点とその原因、よく使われる対処法をまとめます。

    1) 親要素の高さが包含されない（高さ崩れ）
      フロート要素は親の通常のブロックフローから外れるため、親要素が中のフロートだけを含む場合に高さが 0 になり、次のセクションと重なったり背景が表示されなくなる問題が起きます。対処法としては 'clearfix'（疑似要素 '::after' で clear を行う）、親に 'overflow: auto'/'hidden' を付ける、またはフロートの後に空のクリア要素を挿入する方法があります。ただし 'overflow' はスクロールや影の描画に影響するため注意が必要です。

    2) clear を忘れるとレイアウトが崩れる
      フロートの後に続くブロック要素は、意図せずフロートの横に回り込んでしまうため、明示的に 'clear' を指定して下に移動させる必要がある場面が多く、忘れやすいです。ページ全体で多数の 'clear' を散らすとメンテナンス性が低下します。

    3) ネストや等高カラムの実装が複雑
      ネストしたフロートや高さ揃えが必要なカラムレイアウトでは、高さ計算やマージンの相互作用が複雑になり、思わぬ崩れを誘発します。等高カラムを実現するには追加の JavaScript やトリッキーな CSS が必要になることが多いです。

    4) 垂直中央揃えや柔軟な伸縮が苦手
      フロートは主に横方向の配置手段であり、垂直中央揃えやコンテンツに応じた伸縮（柔軟な幅・高さ）を直感的に扱えません。レスポンシブで可変のレイアウトを作る際に不利になります。

    5) ソース順と視覚位置が乖離しやすい
      フロートはソース内の位置と視覚的な位置がずれる場合があり、アクセシビリティや読み上げ順に影響することがあります。

    よく使われる対処法（短く）:
      - clearfix（例: '.clearfix::after { content:""; display: table; clear: both; }'）で親の高さを確保する
      - 親に 'overflow: auto' を設定して包含させる（副作用に注意）
      - そもそも Flexbox / Grid に置き換えて、より予測可能で保守しやすいレイアウトを採用する

    結論として、float は現在でもテキストの回り込み等で有用ですが、ページ全体の主要レイアウトには Flexbox や Grid のほうが適している場面が多く、可読性・保守性・レスポンシブ対応の観点からは置き換えを検討すべきです。
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
}`}],problems:["clearfixが必要で忘れやすい","レスポンシブ対応が困難","ネストした要素の高さ計算が複雑","垂直中央揃えが困難","等高カラムの実現が困難"]};export{a as default,a as item};
