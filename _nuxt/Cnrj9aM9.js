import{b as S,V as k,c as z,a as F,f as te,u as ie,g as oe,h as ae,i as le,j as de,m as re,k as se,l as ne,n as ce}from"./CXisga7Q.js";import{V as M}from"./Bp-ky6q7.js";import{g as pe,c as y,o as s,b as t,w as i,d as c,e as x,f as h,a as p,t as b,_ as R,p as E,h as v,i as fe,j as ue,k as H,l as xe,m as be,n as A,q as j,s as D,v as ge,I as me,F as N,r as O,x as ve,u as ye,y as r}from"./DbgSAngx.js";import{u as he,a as ke,b as Ce,c as we,V as L,d as q,m as _e,e as Se,f as ze,g as Fe,h as Ve}from"./Dt1d7vMj.js";import{V,a as _}from"./DamKM-Zy.js";import{V as Ge,a as Te}from"./62bZqaME.js";import{a as Ie,V as Le}from"./58Nt1tHO.js";import"./Dh2P0Zxw.js";const Pe={class:"code-block"},$e={class:"code-content"},Be={class:"code-content"},Me=pe({__name:"CodeBlock",props:{htmlCode:{type:String,required:!0},cssCode:{type:String,required:!0},showCopy:{type:Boolean,default:!1}},setup(e){const l=async f=>{try{await navigator.clipboard.writeText(f)}catch(o){console.error("Failed to copy: ",o)}};return(f,o)=>(s(),y("div",Pe,[t(F,{variant:"outlined",class:"mb-2"},{default:i(()=>[t(S,{class:"text-subtitle-2"},{default:i(()=>[o[2]||(o[2]=c(" HTML ",-1)),t(M),e.showCopy?(s(),x(k,{key:0,icon:"mdi-content-copy",size:"small",onClick:o[0]||(o[0]=a=>l(e.htmlCode))})):h("",!0)]),_:1}),t(z,null,{default:i(()=>[p("pre",$e,[p("code",null,b(e.htmlCode),1)])]),_:1})]),_:1}),t(F,{variant:"outlined"},{default:i(()=>[t(S,{class:"text-subtitle-2"},{default:i(()=>[o[3]||(o[3]=c(" CSS ",-1)),t(M),e.showCopy?(s(),x(k,{key:0,icon:"mdi-content-copy",size:"small",onClick:o[1]||(o[1]=a=>l(e.cssCode))})):h("",!0)]),_:1}),t(z,null,{default:i(()=>[p("pre",Be,[p("code",null,b(e.cssCode),1)])]),_:1})]),_:1})]))}}),He=Object.assign(R(Me,[["__scopeId","data-v-36b31ce0"]]),{__name:"CodeBlock"}),P=te("v-alert-title"),Ae=E({iconSize:[Number,String],iconSizes:{type:Array,default:()=>[["x-small",10],["small",16],["default",24],["large",28],["x-large",32]]}},"iconSize");function je(e,l){return{iconSize:v(()=>{const o=new Map(e.iconSizes),a=e.iconSize??l()??"default";return o.has(a)?o.get(a):a})}}const De=["success","info","warning","error"],qe=E({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:me,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>De.includes(e)},...Ve(),...ce(),...Fe(),...ze(),...Ae(),...ne(),...se(),...Se(),..._e(),...ge(),...re({variant:"flat"})},"VAlert"),J=fe()({name:"VAlert",props:qe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{emit:f,slots:o}=l;const a=ue(e,"modelValue"),g=H(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),{iconSize:m}=je(e,()=>e.prominent?44:void 0),{themeClasses:C}=xe(e),{colorClasses:G,colorStyles:T,variantClasses:n}=ie(()=>({color:e.color??e.type,variant:e.variant})),{densityClasses:d}=oe(e),{dimensionStyles:w}=he(e),{elevationClasses:u}=ke(e),{locationStyles:U}=ae(e),{positionClasses:K}=le(e),{roundedClasses:Q}=Ce(e),{textColorClasses:W,textColorStyles:X}=we(()=>e.borderColor),{t:Y}=be(),$=H(()=>({"aria-label":Y(e.closeLabel),onClick(I){a.value=!1,f("click:close",I)}}));return()=>{const I=!!(o.prepend||g.value),Z=!!(o.title||e.title),ee=!!(o.close||e.closable),B={density:e.density,icon:g.value,size:e.iconSize||e.prominent?m.value:void 0};return a.value&&t(e.tag,{class:j(["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},C.value,G.value,d.value,u.value,K.value,Q.value,n.value,e.class]),style:A([T.value,w.value,U.value,e.style]),role:"alert"},{default:()=>[de(!1,"v-alert"),e.border&&p("div",{key:"border",class:j(["v-alert__border",W.value]),style:A(X.value)},null),I&&p("div",{key:"prepend",class:"v-alert__prepend"},[o.prepend?t(q,{key:"prepend-defaults",disabled:!g.value,defaults:{VIcon:{...B}}},o.prepend):t(L,D({key:"prepend-icon"},B),null)]),p("div",{class:"v-alert__content"},[Z&&t(P,{key:"title"},{default:()=>[o.title?.()??e.title]}),o.text?.()??e.text,o.default?.()]),o.append&&p("div",{key:"append",class:"v-alert__append"},[o.append()]),ee&&p("div",{key:"close",class:"v-alert__close"},[o.close?t(q,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[o.close?.({props:$.value})]}):t(k,D({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},$.value),null)])]})}}}),Re={class:"mb-4 item-description"},Ee={class:"demo-container"},Ne=["innerHTML"],Oe={key:0,class:"mt-4"},Je={__name:"DemoContainer",props:{title:{type:String,required:!0},description:{type:String,required:!0},htmlCode:{type:String,required:!0},cssCode:{type:String,required:!0},problems:{type:Array,default:()=>[]},benefits:{type:Array,default:()=>[]}},setup(e){const l=e,f=v(()=>{const o=l.cssCode||"",a=l.htmlCode||"";return`<style>${o}</style>${a}`});return(o,a)=>{const g=He;return s(),x(F,{class:"mb-6"},{default:i(()=>[t(S,null,{default:i(()=>[c(b(l.title),1)]),_:1}),t(z,null,{default:i(()=>[p("p",Re,b(l.description),1),t(g,{"html-code":l.htmlCode,"css-code":l.cssCode,"show-copy":!0},null,8,["html-code","css-code"]),t(F,{variant:"outlined",class:"mt-4"},{default:i(()=>[t(S,{class:"text-subtitle-1"},{default:i(()=>[...a[0]||(a[0]=[c("デモ",-1)])]),_:1}),t(z,null,{default:i(()=>[p("div",Ee,[p("div",{class:"demo-content",innerHTML:f.value},null,8,Ne)])]),_:1})]),_:1}),l.problems?.length||l.benefits?.length?(s(),y("div",Oe,[l.problems?.length?(s(),x(J,{key:0,type:"warning",variant:"outlined",class:"mb-2"},{default:i(()=>[t(P,null,{default:i(()=>[...a[1]||(a[1]=[c("問題点",-1)])]),_:1}),p("ul",null,[(s(!0),y(N,null,O(l.problems,m=>(s(),y("li",{key:m},b(m),1))),128))])]),_:1})):h("",!0)])):h("",!0)]),_:1})]),_:1})}}},Ue=R(Je,[["__scopeId","data-v-5609277b"]]),Ke={key:1},ot={__name:"[item]",setup(e){const f=ve().params.item,o=[{id:"block-inline",title:"ブロック要素とインライン要素の違い",description:`
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
    `,htmlCode:`<div class="demo-block">
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
`,benefits:["基本的なCSS表示モデルの理解","レイアウトの基礎概念の習得"]},{id:"table-layout",title:"tableタグレイアウト",description:`
    table タグを使ったレイアウトは、HTML の表組み表現をレイアウト目的に流用していた手法です。具体的には <table>, <tr>, <td> をページ全体の行・列の枠組みとして使い、セルを幅固定や colspan で分割して見た目を作っていました。

    仕組みのポイント:
      - ブラウザはテーブルレイアウトアルゴリズムに基づき、列の幅を調整してセルを配置します（'table-layout: auto' / 'fixed' の挙動差あり）。
      - セルは互いに影響し合うため、あるセルの幅や内容が他のセルのレイアウトに波及します。

    長所:
      - 当時は複雑な2カラム／3カラム配置を比較的簡単に作れた点。

    短所（後述の問題点につながる）:
      - semantics（意味的に表ではない情報を表として記述する）を損ない可読性・アクセシビリティが低下する。
      - レスポンシブ設計や柔軟なレイアウト変更が困難。
      - テーブルの再計算（reflow）が発生するとパフォーマンスに影響が出やすい。

    現在は、同じ見た目をより適切に実現するために Flexbox や Grid、あるいは CSS のブロックレベル要素を組み合わせる手法が推奨されます。
    `,htmlCode:`<table class="layout-table">
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
  width: 200px;
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
}`,problems:["セマンティクスが正しくない（表でないのにtableを使用）","アクセシビリティに問題","レスポンシブ対応が困難","HTMLとCSSの役割分離ができていない"]},{id:"table-problems",title:"tableレイアウトの問題点",description:`
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
    `,htmlCode:`<!-- Table レイアウトのページ風デモ -->
<table class="layout-table-demo" role="presentation">
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

<!-- 注意書き（非表示でもよい） -->
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
`,problems:["メンテナンス性が低い: tr, td など table tag まみれになる","パフォーマンス問題: table tag で全体を構成すると、 Reflow(動的に dom や css の変更をレンダリングする際の最適化処理) 遅延が起こりやすい","スマートフォンでの表示が困難: 固定幅により横スクロールが発生","セマンティクスの問題（表でないのにtable使用）: SEO にも影響","スクリーンリーダーでの読み上げが困難: スクリーンリーダーでは表として認識されるため、内容が正しく伝わらないことがある"],benefits:["Flexboxを使うことでレスポンシブ対応が容易","適切なHTMLセマンティクス","アクセシビリティの向上"]},{id:"float-layout",title:"floatレイアウト",description:`
    floatレイアウトは、要素に 'float: left' や 'float: right' を指定して横方向に寄せ、隣接するブロックやテキストがその周りに回り込むように配置する手法です。主に以下の仕組みで動作します。

    1) フロート要素は通常のブロックフローから除外され、インラインの周りに寄せられる（＝横に並ぶ）。
    2) フロートの後続する通常のブロックレベル要素は、フロートの横に回り込むか、'clear' によって下に押し下げられる。
    3) 親要素は中のフロート要素の高さを自動で包含しないため、'clearfix'（クリア用の要素や 'overflow' / '::after' テクニック）で親の高さを確保する必要がある。

    この手法は2カラム／3カラムレイアウトやテキストの回り込みに便利でしたが、要素の高さ計算や縦方向の配置（垂直中央揃え）などが分かりにくく、レスポンシブ設計で制約が多い点がありました。現在は Flexbox や Grid の普及により、より予測可能で柔軟な手法に置き換えられつつあります。
  `,htmlCode:`<div class="float-container">
  <div class="float-header">ヘッダー</div>
  <div class="float-sidebar">サイドバー</div>
  <div class="float-main">メインコンテンツ</div>
  <div class="clearfix"></div>
  <div class="float-footer">フッター</div>
</div>`,cssCode:`.float-container {
  width: 100%;
  border: 2px solid #ccc;
}

.float-header {
  background-color: #1976d2;
  color: white;
  padding: 15px;
  text-align: center;
}

.float-sidebar {
  width: 200px;
  float: left;
  background-color: #f5f5f5;
  padding: 15px;
  box-sizing: border-box;
}

.float-main {
  margin-left: 200px;
  background-color: #fff;
  padding: 15px;
  border-left: 1px solid #ddd;
}

.clearfix {
  clear: both;
}

.float-footer {
  background-color: #424242;
  color: white;
  padding: 15px;
  text-align: center;
}`,benefits:["CSS2で利用可能な手法","tableレイアウトよりセマンティック","比較的理解しやすい概念"]},{id:"float-problems",title:"floatレイアウトの問題点",description:`
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
  `,htmlCode:`<!-- clearfixなしの問題例 -->
<div class="no-clearfix-container">
  <div class="float-item">Float要素1</div>
  <div class="float-item">Float要素2</div>
  <!-- clearfixがないため、親要素の高さが0になる -->
</div>
<div class="next-content">次のコンテンツ（重なってしまう）</div>

<hr style="margin: 20px 0;">

<!-- clearfixありの正常例 -->
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
}`,problems:["clearfixが必要で忘れやすい","レスポンシブ対応が困難","ネストした要素の高さ計算が複雑","垂直中央揃えが困難","等高カラムの実現が困難"]},{id:"position-layout",title:"positionレイアウト",description:`
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

    まとめ: position 系は強力ですが乱用するとメンテナンス性とレスポンシブ性が低下します。配置が複雑になる場合は Flexbox や Grid と組み合わせ、position は補助的に使うのが現実的です。
    `,htmlCode:`<div class="position-container">
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
}`,benefits:["ヘッダー固定などの特殊なレイアウトに適している","モーダルやツールチップの実装に有効","z-indexによる重なり順の制御が可能"]},{id:"position-problems",title:"positionレイアウトの問題点",description:`
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

    まとめ: position 系は局所的なレイアウトに非常に有効ですが、ページ全体のレイアウト設計ではまず Flexbox / Grid を検討し、position は補助的に使うのが堅実です。
    `,htmlCode:`<!-- 重なり順の問題例 -->
<div class="z-index-demo">
  <div class="layer1">Layer 1 (z-index: 1)</div>
  <div class="layer2">Layer 2 (z-index: 2)</div>
  <div class="layer3">Layer 3 (z-index: 3)</div>
</div>

<!-- レスポンシブ対応の問題例 -->
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
}`,problems:["レスポンシブ対応が非常に困難","z-indexの管理が複雑になりがち","要素が親要素から切り離されるため影響が予測しにくい","メンテナンスが困難","通常のドキュメントフローから外れるため他要素への影響が大きい"]},{id:"flexbox-layout",title:"Flexboxレイアウト",description:`
    Flexbox は 1 次元（行 or 列）に特化したレイアウトシステムです。コンテナとアイテムの間で空間配分や整列を直感的に行え、従来の float/position に頼らない柔軟なレイアウトを実現します。

    主要な考え方:
      - コンテナに 'display: flex' を設定すると「主軸（main-axis）」と「交差軸（cross-axis）」が定義される。
      - コンテナ側プロパティ: 'flex-direction', 'justify-content', 'align-items', 'flex-wrap', 'gap' などで並べ方や整列を制御する。
      - アイテム側プロパティ: 'flex'（成長/縮小/基準幅）、'order'（表示順の制御）、'align-self'（個別の交差軸整列）など。

    長所:
      - 垂直中央揃えや等高カラム、可変幅のアイテムが簡単に実装できる。
      - レスポンシブでアイテムの折り返し（wrap）や均等配置が容易。
      - コードが比較的シンプルで可読性が高い。

    注意点:
  - ネストした Flex コンテナは意図しない伸縮を招くことがあるため、'min-width'/'min-height' を意識する。
  - 古いブラウザでは 'gap' のサポートが限定的なのでフォールバックが必要な場合がある。

    使いどころの例: ヘッダーのナビ、カードの横並び、ツールバー、センタリングされたレイアウトなど。
    `,htmlCode:`<!-- 基本的なFlexboxレイアウト -->
<div class="flex-container">
  <div class="flex-item">アイテム1</div>
  <div class="flex-item">アイテム2</div>
  <div class="flex-item">アイテム3</div>
</div>

<!-- 実用的なヘッダーレイアウト -->
<div class="header-flex">
  <div class="logo">ロゴ</div>
  <div class="nav-flex">
    <div class="nav-item">ホーム</div>
    <div class="nav-item">サービス</div>
    <div class="nav-item">お問い合わせ</div>
  </div>
</div>

<!-- カード型レイアウト -->
<div class="card-container">
  <div class="card">カード1</div>
  <div class="card">カード2<br>高さが異なる<br>コンテンツ</div>
  <div class="card">カード3</div>
</div>`,cssCode:`/* 基本的なFlexboxコンテナ */
.flex-container {
  display: flex;
  gap: 10px;
  padding: 15px;
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
}

.flex-item {
  flex: 1;
  padding: 15px;
  background-color: #fff;
  text-align: center;
  border: 1px solid #90caf9;
}

/* ヘッダーレイアウト */
.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1976d2;
  color: white;
  margin: 10px 0;
}

.logo {
  font-weight: bold;
  font-size: 18px;
}

.nav-flex {
  display: flex;
  gap: 20px;
}

.nav-item {
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* レスポンシブカードレイアウト */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px;
  background-color: #f5f5f5;
}

.card {
  flex: 1 1 200px;
  min-height: 120px;
  padding: 20px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}`,benefits:["レスポンシブ対応が容易","垂直中央揃えが簡単","要素の伸縮が柔軟","等高カラムが自動的に実現","ブラウザサポートが充実","ガップ（隙間）の設定が簡単"]},{id:"grid-layout",title:"Grid Layoutレイアウト",description:`
    CSS Grid は 2 次元（行と列）を同時に扱える強力なレイアウトシステムです。ページ全体のレイアウトや複雑なグリッド構成を明示的に定義でき、直感的な領域配置が可能です。

    主要な考え方:
  - コンテナに 'display: grid' を設定し、'grid-template-columns' / 'grid-template-rows' でトラックを定義する。
  - 'grid-template-areas' による名前付き領域配置、'grid-column' / 'grid-row' によるアイテムの明示的な配置が行える。
  - 'auto-fit' / 'auto-fill' と 'minmax()' を組み合わせることでレスポンシブな列の自動調整が容易。

    長所:
      - 複雑な 2 次元レイアウト（ダッシュボード、雑誌風レイアウト、カード群）を少ない CSS で記述可能。
  - 行・列のギャップ管理（'gap'）、領域の重なりや正確な位置指定が得意。

    注意点:
      - IE を含む古いブラウザでは機能差があるため、必要ならフォールバックを用意する。
      - Grid の自動配置ルールや暗黙のトラックを理解していないと期待外のレイアウトになることがある。

    使いどころの例: 複雑なページレイアウト、カードのグリッド、レスポンシブなダッシュボードやギャラリー。
    `,htmlCode:`<!-- 基本的なGridレイアウト -->
<div class="grid-container">
  <div class="grid-header">ヘッダー</div>
  <div class="grid-sidebar">サイドバー</div>
  <div class="grid-main">メインコンテンツ</div>
  <div class="grid-aside">広告エリア</div>
  <div class="grid-footer">フッター</div>
</div>

<!-- カードグリッドレイアウト -->
<div class="card-grid">
  <div class="grid-card">カード1</div>
  <div class="grid-card large">大きなカード</div>
  <div class="grid-card">カード3</div>
  <div class="grid-card">カード4</div>
  <div class="grid-card">カード5</div>
  <div class="grid-card">カード6</div>
</div>`,cssCode:`/* 基本的なGridレイアウト */
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  height: 400px;
  padding: 15px;
  background-color: #f5f5f5;
}

.grid-header {
  grid-area: header;
  background-color: #1976d2;
  color: white;
  padding: 15px;
  text-align: center;
}

.grid-sidebar {
  grid-area: sidebar;
  background-color: #e3f2fd;
  padding: 15px;
}

.grid-main {
  grid-area: main;
  background-color: white;
  padding: 15px;
  border: 1px solid #ddd;
}

.grid-aside {
  grid-area: aside;
  background-color: #fff3e0;
  padding: 15px;
}

.grid-footer {
  grid-area: footer;
  background-color: #424242;
  color: white;
  padding: 15px;
  text-align: center;
}

/* レスポンシブカードグリッド */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  padding: 15px;
  background-color: #f8f9fa;
  margin-top: 20px;
}

.grid-card {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-card.large {
  grid-column: span 2;
  background-color: #2196f3;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
  
  .grid-card.large {
    grid-column: span 1;
  }
}`,benefits:["2次元レイアウトが可能（行と列を同時制御）","複雑なレイアウトが簡潔に記述できる","grid-template-areasによる直感的な設計","レスポンシブ対応が非常に柔軟","重なりや配置の制御が正確","auto-fit、auto-fillによる自動調整が便利"]},{id:"flex-vs-grid",title:"Flex と Grid の使い分け",description:`
    Flex と Grid はどちらも強力なレイアウト手段ですが、得意・不得意が異なります。

    1) 基本の棲み分け
      - Flex: 1次元レイアウト（横並びまたは縦並び）が得意。要素を行（または列）方向に並べ、その中での伸縮や整列を直感的に扱えます。
      - Grid: 2次元レイアウト（行と列）を同時に扱えるため、複雑なページレイアウトや領域指定に適しています。

    2) 選び方のチェックリスト（実務的）
      - 要素の主要な配置が行（または列）のみなら Flex を使う（例：ナビバー、ツールバー、カードの横並び）。
      - 明示的に行と列の両方で領域を管理したい（サイドバー＋コンテンツ＋広告など）は Grid が適切。
      - アイテムごとに異なる幅・高さや等高揃えを柔軟にしたいときは Flex のほうが簡単な場合が多い。
      - レイアウト全体の「領域」を宣言的に設計したい場合（grid-template-areas 等）は Grid が読みやすく保守しやすい。

    3) 実務での組み合わせパターン
      - ページ全体のレイアウトを Grid で定義し、内部の部品（ヘッダーのツールバーやカードリスト）は Flex を使う（Grid と Flex の併用）。
      - モバイルでは単純化して Flex に落とし込む（列方向 stack）ことが多いので、レスポンシブ設計を念頭に置く。

    4) パフォーマンスとサポート
      - どちらも近年のブラウザで十分にサポートされている。複雑すぎる自動配置ロジックは思わぬ reflow を招くことがあるため、極端に大量の要素を配置する場合は検証する。

    まとめ: “要件が1次元か2次元か” を第一判断基準にし、可読性・保守性の観点で Grid と Flex を使い分け、必要なら両者を併用して補完するのが良い設計です。
    `,htmlCode:`<!-- Flex vs Grid の簡単なデモ -->
<div class="demo-flex">
  <div class="logo">Logo</div>
  <div class="items">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
</div>

<div class="demo-grid">
  <div class="g-header">Header</div>
  <div class="g-side">Sidebar</div>
  <div class="g-main">Main</div>
  <div class="g-footer">Footer</div>
</div>`,cssCode:`/* Flex の例（1次元） */
.demo-flex { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 12px; background: #e3f2fd; }
.demo-flex .items { display: flex; gap: 8px; }
.demo-flex .item { background: #fff; padding: 8px 12px; border: 1px solid #90caf9; border-radius: 6px; }

/* Grid の例（2次元） */
.demo-grid { display: grid; grid-template-areas: "header header" "sidebar main" "footer footer"; grid-template-columns: 200px 1fr; gap: 10px; padding: 12px; margin-top: 16px; background: #f8f9fa; }
.g-header { grid-area: header; background: #1976d2; color: #fff; padding: 10px; }
.g-side { grid-area: sidebar; background: #e3f2fd; padding: 12px; }
.g-main { grid-area: main; background: #fff; padding: 12px; border: 1px solid #ddd; }
.g-footer { grid-area: footer; background: #424242; color: #fff; padding: 10px; text-align: center; }`,relatedItems:["flexbox-layout","grid-layout"],benefits:["実務での選定基準を理解できる","Grid と Flex の併用パターンを学べる","レスポンシブ設計時の考え方が身につく"]}],a=v(()=>o.find(n=>n.id===f)),g=v(()=>o.findIndex(n=>n.id===f)),m=v(()=>{const n=g.value;return n>0?o[n-1]:null}),C=v(()=>{const n=g.value;return n<o.length-1?o[n+1]:null}),G=v(()=>[{title:"ホーム",to:"/"},{title:"Layout",to:"/layout"},{title:"CSSレイアウトの歴史",to:"/layout/1"},{title:a.value?.title||"不明",disabled:!0}]),T=n=>{const d=o.find(w=>w.id===n);return d?d.title:n};return ye({title:v(()=>a.value?`${a.value.title} - CSS Practice`:"ページが見つかりません - CSS Practice")}),(n,d)=>{const w=Ue;return s(),y("div",null,[r(a)?(s(),y("div",Ke,[t(V,{class:"mb-4"},{default:i(()=>[t(_,{cols:"12"},{default:i(()=>[t(Ge,{items:r(G),divider:"/"},{item:i(({item:u})=>[t(Te,{to:u.to,disabled:u.disabled},{default:i(()=>[c(b(u.title),1)]),_:2},1032,["to","disabled"])]),_:1},8,["items"])]),_:1})]),_:1}),t(w,{title:r(a).title,description:r(a).description,"html-code":r(a).htmlCode,"css-code":r(a).cssCode,problems:r(a).problems,benefits:r(a).benefits},null,8,["title","description","html-code","css-code","problems","benefits"]),r(a).relatedItems?.length?(s(),x(V,{key:0,class:"mt-4"},{default:i(()=>[t(_,{cols:"12"},{default:i(()=>[t(F,null,{default:i(()=>[t(S,null,{default:i(()=>[...d[3]||(d[3]=[c("関連項目",-1)])]),_:1}),t(z,null,{default:i(()=>[t(Ie,null,{default:i(()=>[(s(!0),y(N,null,O(r(a).relatedItems,u=>(s(),x(Le,{key:u,to:`/layout/1/${u}`,color:"primary",variant:"outlined"},{default:i(()=>[c(b(T(u)),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):h("",!0),t(V,{class:"mt-6"},{default:i(()=>[t(_,{cols:"6"},{default:i(()=>[r(m)?(s(),x(k,{key:0,to:`/layout/1/${r(m).id}`,color:"primary",variant:"outlined",block:""},{default:i(()=>[t(L,{left:""},{default:i(()=>[...d[4]||(d[4]=[c("mdi-chevron-left",-1)])]),_:1}),c(" 前: "+b(r(m).title),1)]),_:1},8,["to"])):h("",!0)]),_:1}),t(_,{cols:"6"},{default:i(()=>[r(C)?(s(),x(k,{key:0,to:`/layout/1/${r(C).id}`,color:"primary",block:""},{default:i(()=>[c(" 次: "+b(r(C).title)+" ",1),t(L,{right:""},{default:i(()=>[...d[5]||(d[5]=[c("mdi-chevron-right",-1)])]),_:1})]),_:1},8,["to"])):h("",!0)]),_:1})]),_:1})])):(s(),x(V,{key:0},{default:i(()=>[t(_,{cols:"12"},{default:i(()=>[t(J,{type:"error"},{default:i(()=>[t(P,null,{default:i(()=>[...d[0]||(d[0]=[c("ページが見つかりません",-1)])]),_:1}),d[2]||(d[2]=p("p",null,"指定されたレイアウト項目が見つかりませんでした。",-1)),t(k,{to:"/layout/1",color:"primary",class:"mt-2"},{default:i(()=>[...d[1]||(d[1]=[c(" 項目一覧に戻る ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))])}}};export{ot as default};
