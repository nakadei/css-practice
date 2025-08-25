import{b as B,V,c as z,a as I,u as K,m as Q,f as U,g as X}from"./DcPzpjAX.js";import{V as N}from"./B_cZs8-5.js";import{g as Y,c as y,o as r,b as t,w as i,d as c,e as f,f as k,a as u,t as b,_ as E,F as L,r as $,h as A,p as H,n as R,i as M,j as h,m as O,k as Z,l as _,I as ee,q as te,u as ie,s as n}from"./DQSwdrc6.js";import{V as F,a as D}from"./BD67VQMu.js";import{V as T,a as S}from"./Bqtz_PGZ.js";import{u as j,m as G,a as ae,b as W,c as de,d as le,V as q,e as oe,f as re}from"./ODy6aca-.js";import{a as se,V as ne}from"./C64lO4gJ.js";import"./D1erKFEi.js";const ce={class:"code-block"},ue={class:"code-content"},pe={class:"code-content"},fe=Y({__name:"CodeBlock",props:{htmlCode:{type:String,required:!0},cssCode:{type:String,required:!0},showCopy:{type:Boolean,default:!1}},setup(e){const p=async a=>{try{await navigator.clipboard.writeText(a)}catch(l){console.error("Failed to copy: ",l)}};return(a,l)=>(r(),y("div",ce,[t(I,{variant:"outlined",class:"mb-2"},{default:i(()=>[t(B,{class:"text-subtitle-2 bg-grey-lighten-4"},{default:i(()=>[l[2]||(l[2]=c(" HTML ",-1)),t(N),e.showCopy?(r(),f(V,{key:0,icon:"mdi-content-copy",size:"small",onClick:l[0]||(l[0]=d=>p(e.htmlCode))})):k("",!0)]),_:1}),t(z,null,{default:i(()=>[u("pre",ue,[u("code",null,b(e.htmlCode),1)])]),_:1})]),_:1}),t(I,{variant:"outlined"},{default:i(()=>[t(B,{class:"text-subtitle-2 bg-grey-lighten-4"},{default:i(()=>[l[3]||(l[3]=c(" CSS ",-1)),t(N),e.showCopy?(r(),f(V,{key:0,icon:"mdi-content-copy",size:"small",onClick:l[1]||(l[1]=d=>p(e.cssCode))})):k("",!0)]),_:1}),t(z,null,{default:i(()=>[u("pre",pe,[u("code",null,b(e.cssCode),1)])]),_:1})]),_:1})]))}}),be=Object.assign(E(fe,[["__scopeId","data-v-aa91613d"]]),{__name:"CodeBlock"}),ge={class:"mb-4"},me={class:"demo-container"},xe=["innerHTML"],ve={key:0,class:"mt-4"},ye={__name:"DemoContainer",props:{title:{type:String,required:!0},description:{type:String,required:!0},htmlCode:{type:String,required:!0},cssCode:{type:String,required:!0},problems:{type:Array,default:()=>[]},benefits:{type:Array,default:()=>[]}},setup(e){return(p,a)=>{const l=be;return r(),f(I,{class:"mb-6"},{default:i(()=>[t(B,null,{default:i(()=>[c(b(e.title),1)]),_:1}),t(z,null,{default:i(()=>[u("p",ge,b(e.description),1),t(l,{"html-code":e.htmlCode,"css-code":e.cssCode,"show-copy":!0},null,8,["html-code","css-code"]),t(I,{variant:"outlined",class:"mt-4"},{default:i(()=>[t(B,{class:"text-subtitle-1"},{default:i(()=>[...a[0]||(a[0]=[c("デモ",-1)])]),_:1}),t(z,null,{default:i(()=>[u("div",me,[u("div",{innerHTML:e.htmlCode,class:"demo-content"},null,8,xe)])]),_:1})]),_:1}),e.problems?.length||e.benefits?.length?(r(),y("div",ve,[e.problems?.length?(r(),f(F,{key:0,type:"warning",variant:"outlined",class:"mb-2"},{default:i(()=>[t(D,null,{default:i(()=>[...a[1]||(a[1]=[c("問題点",-1)])]),_:1}),u("ul",null,[(r(!0),y(L,null,$(e.problems,d=>(r(),y("li",{key:d},b(d),1))),128))])]),_:1})):k("",!0),e.benefits?.length?(r(),f(F,{key:1,type:"success",variant:"outlined"},{default:i(()=>[t(D,null,{default:i(()=>[...a[2]||(a[2]=[c("利点",-1)])]),_:1}),u("ul",null,[(r(!0),y(L,null,$(e.benefits,d=>(r(),y("li",{key:d},b(d),1))),128))])]),_:1})):k("",!0)])):k("",!0)]),_:1})]),_:1})}}},he=E(ye,[["__scopeId","data-v-3713a1ea"]]),ke=H({divider:[Number,String],...G()},"VBreadcrumbsDivider"),Ce=A()({name:"VBreadcrumbsDivider",props:ke(),setup(e,p){let{slots:a}=p;return j(()=>u("li",{"aria-hidden":"true",class:M(["v-breadcrumbs-divider",e.class]),style:R(e.style)},[a?.default?.()??e.divider])),{}}}),we=H({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...G(),...Q(),...W({tag:"li"})},"VBreadcrumbsItem"),J=A()({name:"VBreadcrumbsItem",props:we(),setup(e,p){let{slots:a,attrs:l}=p;const d=K(e,l),g=h(()=>e.active||d.isActive?.value),{textColorClasses:C,textColorStyles:w}=ae(()=>g.value?e.activeColor:e.color);return j(()=>t(e.tag,{class:M(["v-breadcrumbs-item",{"v-breadcrumbs-item--active":g.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:g.value&&e.activeClass},C.value,e.class]),style:R([w.value,e.style]),"aria-current":g.value?"page":void 0},{default:()=>[d.isLink.value?u("a",O({class:"v-breadcrumbs-item--link",onClick:d.navigate},d.linkProps),[a.default?.()??e.title]):a.default?.()??e.title]})),{}}}),_e=H({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:ee,items:{type:Array,default:()=>[]},...G(),...X(),...re(),...W({tag:"ul"})},"VBreadcrumbs"),Se=A()({name:"VBreadcrumbs",props:_e(),setup(e,p){let{slots:a}=p;const{backgroundColorClasses:l,backgroundColorStyles:d}=de(()=>e.bgColor),{densityClasses:g}=U(e),{roundedClasses:C}=le(e);Z({VBreadcrumbsDivider:{divider:_(()=>e.divider)},VBreadcrumbsItem:{activeClass:_(()=>e.activeClass),activeColor:_(()=>e.activeColor),color:_(()=>e.color),disabled:_(()=>e.disabled)}});const w=h(()=>e.items.map(m=>typeof m=="string"?{item:{title:m},raw:m}:{item:m,raw:m}));return j(()=>{const m=!!(a.prepend||e.icon);return t(e.tag,{class:M(["v-breadcrumbs",l.value,g.value,C.value,e.class]),style:R([d.value,e.style])},{default:()=>[m&&u("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(oe,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(q,{key:"prepend-icon",start:!0,icon:e.icon},null)]),w.value.map((P,o,s)=>{let{item:x,raw:v}=P;return u(L,null,[a.item?.({item:x,index:o})??t(J,O({key:o,disabled:o>=s.length-1},typeof x=="string"?{title:x}:x),{default:a.title?()=>a.title?.({item:x,index:o}):void 0}),o<s.length-1&&t(Ce,null,{default:a.divider?()=>a.divider?.({item:v,index:o}):void 0})])}),a.default?.()]})}),{}}}),Ve={key:1},De={__name:"[item]",setup(e){const a=te().params.item,l=[{id:"block-inline",title:"ブロック要素とインライン要素の違い",description:"CSS displayプロパティの基本概念を学習します。ブロック要素は幅いっぱいに広がり、インライン要素は内容に応じたサイズになります。",htmlCode:`<div class="block-element">ブロック要素（div）</div>
<span class="inline-element">インライン要素（span）</span>
<div class="inline-block-element">インラインブロック要素</div>`,cssCode:`.block-element {
  background-color: #e3f2fd;
  padding: 10px;
  margin: 5px 0;
  border: 2px solid #1976d2;
}

.inline-element {
  background-color: #f3e5f5;
  padding: 5px;
  border: 2px solid #7b1fa2;
}

.inline-block-element {
  display: inline-block;
  background-color: #e8f5e8;
  padding: 10px;
  margin: 5px;
  border: 2px solid #388e3c;
  width: 200px;
}`,benefits:["基本的なCSS表示モデルの理解","レイアウトの基礎概念の習得"]},{id:"table-layout",title:"tableタグレイアウト",description:"過去に主流だったtableタグを使ったレイアウト手法について学習します。HTML tableを使ってWebページ全体のレイアウトを構築していた時代の手法です。",htmlCode:`<table class="layout-table">
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
}`,problems:["セマンティクスが正しくない（表でないのにtableを使用）","アクセシビリティに問題","レスポンシブ対応が困難","HTMLとCSSの役割分離ができていない"]},{id:"table-problems",title:"tableレイアウトの問題点",description:"tableレイアウトがなぜ現在では推奨されないのか、具体的な問題点と代替手法について学習します。",htmlCode:`<!-- 悪い例：レスポンシブ対応が困難 -->
<table class="problematic-table">
  <tr>
    <td class="fixed-sidebar">固定幅サイドバー (200px)</td>
    <td class="content">スマホで見ると横スクロールが必要になってしまいます</td>
  </tr>
</table>

<!-- 改善例：div + CSS -->
<div class="improved-layout">
  <div class="flexible-sidebar">可変サイドバー</div>
  <div class="flexible-content">レスポンシブ対応コンテンツ</div>
</div>`,cssCode:`/* 問題のあるtableレイアウト */
.problematic-table {
  width: 600px; /* 固定幅 */
  border-collapse: collapse;
}

.fixed-sidebar {
  width: 200px;
  background-color: #ffeb3b;
  padding: 10px;
}

.content {
  background-color: #e3f2fd;
  padding: 10px;
}

/* 改善されたレイアウト */
.improved-layout {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
}

.flexible-sidebar {
  background-color: #c8e6c9;
  padding: 10px;
  flex: 0 0 200px;
  min-width: 150px;
}

.flexible-content {
  background-color: #e1f5fe;
  padding: 10px;
  flex: 1;
  min-width: 250px;
}`,problems:["スマートフォンでの表示が困難","固定幅により横スクロールが発生","セマンティクスの問題（表でないのにtable使用）","スクリーンリーダーでの読み上げが困難"],benefits:["Flexboxを使うことでレスポンシブ対応が容易","適切なHTMLセマンティクス","アクセシビリティの向上"]},{id:"float-layout",title:"floatレイアウト",description:"floatプロパティを使った従来のレイアウト手法について学習します。CSS2時代の主要なレイアウト手法でした。",htmlCode:`<div class="float-container">
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
}`,benefits:["CSS2で利用可能な手法","tableレイアウトよりセマンティック","比較的理解しやすい概念"]},{id:"float-problems",title:"floatレイアウトの問題点",description:"floatレイアウトの問題点とclearfixの必要性について理解します。なぜ現代では他の手法が推奨されるのかを学習します。",htmlCode:`<!-- clearfixなしの問題例 -->
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
}`,problems:["clearfixが必要で忘れやすい","レスポンシブ対応が困難","ネストした要素の高さ計算が複雑","垂直中央揃えが困難","等高カラムの実現が困難"]},{id:"position-layout",title:"positionレイアウト",description:"absolute、relative、fixed、stickyを使ったポジショニングレイアウトについて学習します。",htmlCode:`<div class="position-container">
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
}`,benefits:["ヘッダー固定などの特殊なレイアウトに適している","モーダルやツールチップの実装に有効","z-indexによる重なり順の制御が可能"]},{id:"position-problems",title:"positionレイアウトの問題点",description:"positionレイアウトの複雑さと管理の困難さについて理解します。",htmlCode:`<!-- 重なり順の問題例 -->
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
}`,problems:["レスポンシブ対応が非常に困難","z-indexの管理が複雑になりがち","要素が親要素から切り離されるため影響が予測しにくい","メンテナンスが困難","通常のドキュメントフローから外れるため他要素への影響が大きい"]},{id:"flexbox-layout",title:"Flexboxレイアウト",description:"現代的な1次元レイアウトシステムであるFlexboxについて学習します。レスポンシブ対応と柔軟なレイアウトが可能です。",htmlCode:`<!-- 基本的なFlexboxレイアウト -->
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
}`,benefits:["レスポンシブ対応が容易","垂直中央揃えが簡単","要素の伸縮が柔軟","等高カラムが自動的に実現","ブラウザサポートが充実","ガップ（隙間）の設定が簡単"]},{id:"grid-layout",title:"Grid Layoutレイアウト",description:"最新の2次元レイアウトシステムであるCSS Gridについて学習します。複雑なレイアウトを簡潔に記述できます。",htmlCode:`<!-- 基本的なGridレイアウト -->
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
}`,benefits:["2次元レイアウトが可能（行と列を同時制御）","複雑なレイアウトが簡潔に記述できる","grid-template-areasによる直感的な設計","レスポンシブ対応が非常に柔軟","重なりや配置の制御が正確","auto-fit、auto-fillによる自動調整が便利"]}],d=h(()=>l.find(o=>o.id===a)),g=h(()=>l.findIndex(o=>o.id===a)),C=h(()=>{const o=g.value;return o>0?l[o-1]:null}),w=h(()=>{const o=g.value;return o<l.length-1?l[o+1]:null}),m=h(()=>[{title:"ホーム",to:"/"},{title:"Layout",to:"/layout"},{title:"レイアウト基礎",to:"/layout/1"},{title:d.value?.title||"不明",disabled:!0}]),P=o=>{const s=l.find(x=>x.id===o);return s?s.title:o};return ie({title:h(()=>d.value?`${d.value.title} - CSS Practice`:"ページが見つかりません - CSS Practice")}),(o,s)=>{const x=he;return r(),y("div",null,[n(d)?(r(),y("div",Ve,[t(T,{class:"mb-4"},{default:i(()=>[t(S,{cols:"12"},{default:i(()=>[t(Se,{items:n(m),divider:"/"},{item:i(({item:v})=>[t(J,{to:v.to,disabled:v.disabled},{default:i(()=>[c(b(v.title),1)]),_:2},1032,["to","disabled"])]),_:1},8,["items"])]),_:1})]),_:1}),t(x,{title:n(d).title,description:n(d).description,"html-code":n(d).htmlCode,"css-code":n(d).cssCode,problems:n(d).problems,benefits:n(d).benefits},null,8,["title","description","html-code","css-code","problems","benefits"]),n(d).relatedItems?.length?(r(),f(T,{key:0,class:"mt-4"},{default:i(()=>[t(S,{cols:"12"},{default:i(()=>[t(I,null,{default:i(()=>[t(B,null,{default:i(()=>[...s[3]||(s[3]=[c("関連項目",-1)])]),_:1}),t(z,null,{default:i(()=>[t(se,null,{default:i(()=>[(r(!0),y(L,null,$(n(d).relatedItems,v=>(r(),f(ne,{key:v,to:`/layout/1/${v}`,color:"primary",variant:"outlined"},{default:i(()=>[c(b(P(v)),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):k("",!0),t(T,{class:"mt-6"},{default:i(()=>[t(S,{cols:"6"},{default:i(()=>[n(C)?(r(),f(V,{key:0,to:`/layout/1/${n(C).id}`,color:"primary",variant:"outlined",block:""},{default:i(()=>[t(q,{left:""},{default:i(()=>[...s[4]||(s[4]=[c("mdi-chevron-left",-1)])]),_:1}),c(" 前: "+b(n(C).title),1)]),_:1},8,["to"])):k("",!0)]),_:1}),t(S,{cols:"6"},{default:i(()=>[n(w)?(r(),f(V,{key:0,to:`/layout/1/${n(w).id}`,color:"primary",block:""},{default:i(()=>[c(" 次: "+b(n(w).title)+" ",1),t(q,{right:""},{default:i(()=>[...s[5]||(s[5]=[c("mdi-chevron-right",-1)])]),_:1})]),_:1},8,["to"])):k("",!0)]),_:1})]),_:1})])):(r(),f(T,{key:0},{default:i(()=>[t(S,{cols:"12"},{default:i(()=>[t(F,{type:"error"},{default:i(()=>[t(D,null,{default:i(()=>[...s[0]||(s[0]=[c("ページが見つかりません",-1)])]),_:1}),s[2]||(s[2]=u("p",null,"指定されたレイアウト項目が見つかりませんでした。",-1)),t(V,{to:"/layout/1",color:"primary",class:"mt-2"},{default:i(()=>[...s[1]||(s[1]=[c(" 項目一覧に戻る ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}))])}}};export{De as default};
