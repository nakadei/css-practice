const e={id:"table-problems",title:"tableレイアウトの問題点",description:`
    table レイアウトの主な問題点と、なぜ現代では避けられる傾向にあるかを整理します。

    1) セマンティクスの欠如
      - レイアウト目的で table を使うと、HTML の意味構造が崩れ、スクリーンリーダーや検索エンジンが正しく内容を解釈できなくなります。正しいマークアップ（header, nav, main, aside, footer など）を使うことが重要です。

    2) レスポンシブ対応の難しさ
      - テーブルはセル幅が相互依存するため、狭い画面でのレイアウト変更（列の折りたたみや順序変更）が難しく、横スクロールを招きやすいです。

    3) パフォーマンス（reflow）の問題
      - テーブルは列幅決定に際してブラウザが複数パスの計算を行うため、DOM の変更や画像ロードなどで再計算が発生すると再描画コストが高くなることがあります。

    4) メンテナンス性の低下
      - tr/td が大量に増えると HTML が煩雑になり、スタイル変更やコンテンツ差し替えの修正範囲が広がります。

    対処と代替手法:
      - セマンティクスを正しく保つ（HTML5 のランドマーク要素を利用する）。
      - レイアウトは CSS（Flexbox / Grid）で実装し、必要に応じてメディアクエリでレスポンシブ制御を行う。
      - 既存の table ベースのレイアウトを段階的に置換する際は、まずビューポートの小さい順に可変レイアウトを確保すると移行が楽になります。

    まとめ: table は表データの表示に残すべきであり、ページレイアウト目的には Flexbox や Grid を使う設計が現在のベストプラクティスです。
    `,demos:[{subtitle:"tableレイアウトの問題点",htmlCode:`Table レイアウトのページ風デモ
<table class="layout-table-demo" role="presentation">
  <p>※複数の列がある場合、colgroup を設定しないと列の数に応じて均等な幅に配置されてしまう (= width が無効)</p>
  <br />
  <tr>
    <td class="header" colspan="2">
      <div class="header-inner">ヘッダー — サイトタイトル / グローバルナビ</div>
    </td>
  </tr>
  <tr>
    <td class="sidebar">サイドバー<br><small>ナビや広告</small></td>
    <td class="main">メインコンテンツ<br><p>この記事の本文がここに入ります。幅はテーブルの残り領域を占有します。</p></td>
  </tr>
  <tr>
    <td class="footer" colspan="2">フッター — コピーライトや補助情報</td>
  </tr>
</table>

注意書き（非表示でもよい）
<div class="note">このデモはあえて table を使ったページレイアウトを表現しています。モバイルでは横スクロールや柔軟性の欠如が分かります。</div>`,cssCode:`/* テーブルでページレイアウトを表現するデモ用スタイル */
.layout-table-demo {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-collapse: collapse;
  table-layout: fixed; /* サイドバー幅を固定して残りをメインが取る */
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border-radius: 6px;
  overflow: hidden;
}
.layout-table-demo td {
  padding: 16px;
  vertical-align: top;
  box-sizing: border-box;
}
.layout-table-demo .header {
  background: linear-gradient(90deg,#1565c0,#1976d2);
  color: white;
  font-weight: 600;
  text-align: center;
}
.layout-table-demo .header .header-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.layout-table-demo .sidebar {
  width: 220px; /* 固定幅サイドバー */
  background: #f5f5f5;
  border-right: 1px solid #e0e0e0;
  color: #333;
}
.layout-table-demo .main {
  background: #ffffff;
  color: #222;
}
.layout-table-demo .footer {
  background: #eeeeee;
  text-align: center;
  color: #555;
}

/* モバイルでの問題を可視化: テーブルは崩れにくく横スクロールが発生する */
@media (max-width: 600px) {
  .layout-table-demo {
    display: block; /* ブラウザはテーブルをブロック表示にしても、レイアウト的には柔軟性が乏しい */
    overflow-x: auto;
  }
  .layout-table-demo td {
    display: table-cell; /* そのまま表示させることで横スクロールを観察 */
    min-width: 300px; /* 小さな画面で横スクロールが発生するようにする */
  }
}
`}],problems:["メンテナンス性が低い: tr, td など table tag まみれになる","パフォーマンス問題: table tag で全体を構成すると、 Reflow(動的に dom や css の変更をレンダリングする際の最適化処理) 遅延が起こりやすい","スマートフォンでの表示が困難: 固定幅により横スクロールが発生","セマンティクスの問題（表でないのにtable使用）: SEO にも影響","スクリーンリーダーでの読み上げが困難: スクリーンリーダーでは表として認識されるため、内容が正しく伝わらないことがある"]};export{e as default,e as item};
