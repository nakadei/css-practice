const i={id:"position-layout",title:"positionレイアウト",description:`
    CSS の position プロパティは要素を文書フロー内でどのように配置するかを決めます。主な値とその挙動、適したユースケース、注意点をまとめます。

    主な値の挙動:
      - static: デフォルトの位置。通常の文書フローに従い、top/left 等の指定は無視されます。
      - relative: 要素自体は通常の位置に残りつつ、top/left 等で相対的にオフセットできます。レイアウトの参照点を作るためによく使われます。
      - absolute: 最近の祖先で position が relative/absolute/fixed/sticky の要素を基準に絶対配置され、通常の文書フローから外れます。レイアウトの固定的な配置に使いますが、親の位置やサイズに依存します。
      - fixed: ビューポートを基準に固定配置され、スクロールしても画面上の同じ位置に留まります（モバイルでは注意が必要）。
      - sticky: 要素が通常のフローに残りつつ、スクロールで指定した閾値に達すると固定される（sticky を有効にするには適切なコンテナと top 指定が必要）。

    実務的なユースケース:
      - relative: 子要素の絶対配置の基準にする、微調整で少しずらす。
      - absolute: モーダル内のアイテムやツールチップ、カード内のアイテムの正確な配置に使う。
      - fixed: ヘッダーやフッターを常に表示したい場合に使用。ただしオーバーレイや z-index の管理が必要。
      - sticky: セクションの見出しをスクロール時に固定するような UI に便利。

    注意点:
      - absolute/fixed は要素をフローから外すため、周囲の要素に影響を与えにくい反面、親との関係やレスポンシブ時の振る舞いを慎重に設計する必要があります。
      - z-index による重なり管理が必要になり、思わぬ表示順の問題が発生しやすいです。
      - fixed はモバイル環境でビューポートの扱いやソフトウェアキーボードにより動作が異なる場合があるためテストが重要です。
      - sticky は親コンテナの overflow や高さの影響を受けやすいです。

    まとめ: position 系は強力ですが乱用するとメンテナンス性とレスポンシブ性が低下します。配置が複雑になる場合は Flexbox / Grid と組み合わせ、position は補助的に使うのが現実的です。
    `,demos:[{subtitle:"positionレイアウト",htmlCode:`<div class="position-container">
  <div class="relative-parent">
    <div class="relative-element">position: relative</div>
    <div class="absolute-element">position: absolute</div>
  </div>
  
  <div class="fixed-element">position: fixed</div>
  
  <div class="sticky-container">
    <div class="sticky-element">position: sticky</div>
    <div class="content">
      スクロールコンテンツ<br>
      この要素をスクロールすると<br>
      sticky要素の動作が確認できます<br>
      もっとスクロールしてみてください
    </div>
  </div>
</div>`,cssCode:`.position-container {
  height: 300px;
  overflow: auto;
  border: 2px solid #1976d2;
  position: relative;
}

.relative-parent {
  position: relative;
  background-color: #e3f2fd;
  padding: 20px;
  margin: 10px;
  height: 150px;
}

.relative-element {
  position: relative;
  background-color: #ffeb3b;
  padding: 10px;
  top: 10px;
  left: 10px;
  width: 150px;
}

.absolute-element {
  position: absolute;
  background-color: #f48fb1;
  padding: 10px;
  top: 10px;
  right: 10px;
  width: 120px;
}

.fixed-element {
  position: fixed;
  background-color: #ff5722;
  color: white;
  padding: 5px 10px;
  top: 10px;
  right: 10px;
  font-size: 12px;
  z-index: 1000;
}

.sticky-container {
  height: 200px;
  overflow: auto;
  margin: 10px;
  border: 1px solid #ccc;
}

.sticky-element {
  position: sticky;
  top: 0;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  text-align: center;
}

.content {
  padding: 20px;
  background-color: #f5f5f5;
  height: 400px;
}`}]};export{i as default,i as item};
