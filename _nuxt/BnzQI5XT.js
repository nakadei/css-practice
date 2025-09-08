const o={id:"position-problems",title:"positionレイアウトの問題点",description:`
    position プロパティを用いたレイアウト（absolute/relative/fixed/sticky）は強力ですが、実務ではいくつかの落とし穴と運用上の課題が発生しやすく、注意が必要です。主な問題点と対処を整理します。

    1) 文書フローから外れることによる予測不能な影響
      - absolute や fixed は要素を通常のフローから外すため、周囲の要素がそのスペースを考慮しなくなります。結果として、レイアウトの一部を固定すると他の要素が重なったり、画面幅により見切れたりします。

    2) z-index とスタッキングコンテキストの複雑さ
      - z-index は単純な数値だけで制御できるわけではなく、親要素の position や opacity、transform などにより新しいスタッキングコンテキストが作られます。意図しない重なりや表示順の問題が発生しやすく、デバッグが難しい点が挙げられます。

    3) レスポンシブやモバイルでの問題
      - fixed 要素はビューポート基準で固定されるため、モバイルの可視領域（アドレスバーやソフトキーボード）で挙動が変わったり、タッチ操作の妨げになることがあります。absolute 配置のサイドバーは狭い画面でメインと重なるなどの問題を起こしやすいです。

    4) sticky の制約
      - position: sticky は便利ですが、動作させるには親要素の高さや overflow の設定が適切である必要があります。overflow が設定された ancestor の影響を受けるため、期待通りに固定されないことがあります。

    5) メンテナンス性と可読性の低下
      - 要素を絶対配置で細かく制御すると、HTML のソース順と視覚順が乖離し、アクセシビリティや保守性に悪影響を及ぼします。大規模なレイアウトでは CSS 全体の複雑度が増します。

    実務的な対処法（短く）:
      - まずは position を使う理由を明確にし、可能なら Flexbox / Grid で代替する。
      - z-index を使う場合はスタッキングコンテキストを意識し、必要最小限に留める。
      - モバイルでは fixed/absolute を無効化して通常フローに戻すメディアクエリを用意する。
      - sticky を使う場合は親要素の overflow と高さを確認する。
      - アクセシビリティを考え、ソース順と視覚順の乖離を最小化する。

    まとめ: position 系は局所的なレイアウトに非常に有効ですが、ページ全体のレイアウトではまず Flexbox / Grid を検討し、position は補助的に使うのが堅実です。
    `,demos:[{subtitle:"positionレイアウトの問題点",htmlCode:`重なり順の問題例
<div class="z-index-demo">
  <div class="layer1">Layer 1 (z-index: 1)</div>
  <div class="layer2">Layer 2 (z-index: 2)</div>
  <div class="layer3">Layer 3 (z-index: 3)</div>
</div>

レスポンシブ対応の問題例
<div class="responsive-problem">
  <div class="absolute-sidebar">固定サイドバー</div>
  <div class="absolute-main">メインコンテンツ（スマホで重なってしまう）</div>
</div>`,cssCode:`/* 重なり順管理の複雑さ */
.z-index-demo {
  position: relative;
  height: 200px;
  background-color: #f5f5f5;
}

.layer1, .layer2, .layer3 {
  position: absolute;
  width: 120px;
  height: 80px;
  padding: 10px;
  border: 2px solid;
}

.layer1 {
  background-color: #ffcdd2;
  border-color: #f44336;
  top: 20px;
  left: 20px;
  z-index: 1;
}

.layer2 {
  background-color: #c8e6c9;
  border-color: #4caf50;
  top: 40px;
  left: 40px;
  z-index: 2;
}

.layer3 {
  background-color: #fff3e0;
  border-color: #ff9800;
  top: 60px;
  left: 60px;
  z-index: 3;
}

/* レスポンシブ対応の困難さ */
.responsive-problem {
  position: relative;
  height: 200px;
  background-color: #e8eaf6;
  overflow: hidden;
}

.absolute-sidebar {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #3f51b5;
  color: white;
  padding: 15px;
  box-sizing: border-box;
}

.absolute-main {
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  height: 100%;
  background-color: white;
  padding: 15px;
  box-sizing: border-box;
  /* スマホサイズでは重なってしまう */
}`}],problems:["レスポンシブ対応が非常に困難","z-indexの管理が複雑になりがち","要素が親要素から切り離されるため影響が予測しにくい","メンテナンスが困難","通常のドキュメントフローから外れるため他要素への影響が大きい"]};export{o as default,o as item};
