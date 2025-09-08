const t={id:"table-layout",title:"tableタグレイアウト",description:`
    table タグを使ったレイアウトは、HTML の表組み表現をレイアウト目的に流用していた手法です。具体的には <table>, <tr>, <td> をページ全体の行・列の枠組みとして使い、セルを幅固定や colspan で分割して見た目を作っていました。

    colspan について:
      - 'colspan' 属性は '<td>' / '<th>' が複数の列にまたがることを指定します。ヘッダーやフッターを全列にまたがらせたり、レイアウト上で大きな領域を占めさせるのに使われます。
      - 振る舞いの違い: 'table-layout: auto' ではセルの内容に応じて列幅が決まり、colspan を使うと結合されたセルの内容が周囲の列幅に強く影響します。一方 'table-layout: fixed' では列幅がより明示的に決まるため、colspan の影響は相対的に小さくなり、安定したレイアウトになります。

    仕組みのポイント:
      - ブラウザはテーブルレイアウトアルゴリズムに基づき、列の幅を調整してセルを配置します（'table-layout: auto' / 'fixed' の挙動差あり）。
      - セルは互いに影響し合うため、あるセルの幅や内容が他のセルのレイアウトに波及します。
    `,demos:[{subtitle:"tableタグレイアウト",htmlCode:`<table class="layout-table">
  <tr>
    <td colspan="2" class="header">ヘッダー</td>
  </tr>
  <tr>
    <td class="sidebar">サイドバー</td>
    <td class="main-content">メインコンテンツ</td>
  </tr>
  <tr>
    <td colspan="2" class="footer">フッター</td>
  </tr>
</table>`,cssCode:`.layout-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.header {
  background-color: #1976d2;
  color: white;
  padding: 15px;
  text-align: center;
}

.sidebar {
  background-color: #f5f5f5;
  padding: 15px;
  vertical-align: top;
}

.main-content {
  background-color: #fff;
  padding: 15px;
  vertical-align: top;
}

.footer {
  background-color: #424242;
  color: white;
  padding: 15px;
  text-align: center;
}`},{subtitle:"colspan の挙動 (auto vs fixed)",htmlCode:`<div class="colspan-wrap">
  <table class="demo-colspan auto">
    <caption>table-layout: auto (内容で幅が決まる)</caption>
    <tr>
      <td class="wide">A — 長いコンテンツがここに入ります（幅を押し広げるためのテキスト）</td>
      <td>B</td>
    </tr>
    <tr>
      <td colspan="2" class="merged">colspan="2" のセル（auto: 上の長いコンテンツで幅が伸びる）</td>
    </tr>
  </table>

  <table class="demo-colspan fixed">
    <caption>table-layout: fixed (列幅を明示指定)</caption>
    <colgroup>
      <col style="width:80px">
      <col>
    </colgroup>
    <tr>
      <td>A</td>
      <td>B</td>
    </tr>
    <tr>
      <td colspan="2" class="merged">colspan="2" のセル（fixed: 列幅が固定される）</td>
    </tr>
  </table>
</div>`,cssCode:`.colspan-wrap { display: flex; gap: 16px; align-items: flex-start; }
.demo-colspan { width: 420px; border-collapse: collapse; box-shadow: 0 1px 0 rgba(0,0,0,0.06); background:#fff; }
.demo-colspan.auto { table-layout: auto; }
.demo-colspan.fixed { table-layout: fixed; }
.demo-colspan td { padding: 10px; border: 1px solid #e0e0e0; }
.demo-colspan .wide { background:#f5f5f5; white-space:nowrap; }
.demo-colspan .merged { background:#fff8e1; text-align:center; font-weight:600; }
.demo-colspan caption { text-align:left; padding:6px 0; font-size:0.85rem; color:#555; }
`}]};export{t as default,t as item};
