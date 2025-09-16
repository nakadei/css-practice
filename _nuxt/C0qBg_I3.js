const a={id:"float-layout",title:"floatレイアウト",description:`
    floatレイアウトは、要素に 'float: left' や 'float: right' を指定して横方向に寄せ、隣接するブロックやテキストがその周りに回り込むように配置する手法です。主に以下の仕組みで動作します。

    1) フロート要素は通常のブロックフローから除外され、インラインの周りに寄せられる（＝横に並ぶ）。
    2) フロートの後続する通常のブロックレベル要素は、フロートの横に回り込むか、'clear' によって下に押し下げられる。
    3) 親要素は中のフロート要素の高さを自動で包含しないため、'clearfix'（クリア用の要素や 'overflow' / '::after' テクニック）で親の高さを確保する必要がある。

    'clear' は、その要素が指定した方向（left / right / both）にあるフロートを避けて配置されるようにするプロパティです。例えば 'clear: both' を使うと左右どちらのフロートも回避して下に下がります。
    'clearfix' は、親要素に擬似要素（例: '::after'）を追加してフロートをクリアし、親要素の高さを正しく計算させる一般的な手法です。短く言えば、フロートで抜けた流れを元に戻すための小さなトリックです。
    
    この手法は2カラム／3カラムレイアウトやテキストの回り込みに便利でしたが、要素の高さ計算や縦方向の配置（垂直中央揃え）などが分かりにくく、レスポンシブ設計で制約が多い点がありました。現在は Flexbox や Grid の普及により、より予測可能で柔軟な手法に置き換えられつつあります。
  `,demos:[{subtitle:"コンテナ内でカードを並べる（レスポンシブなフロートグリッド）",htmlCode:`<div class="float-grid-demo">
  <div class="card">カード 1<br><small>短い説明</small></div>
  <div class="card">カード 2<br><small>短い説明</small></div>
  <div class="card">カード 3<br><small>短い説明</small></div>
  <div class="card">カード 4<br><small>短い説明</small></div>
  <div class="card">カード 5<br><small>短い説明</small></div>
  <div class="card">カード 6<br><small>短い説明</small></div>
  <div class="clear"></div>
</div>`,cssCode:`/* 古典的な clearfix (::after) を使わず、最後に空の要素で clear する方法 */
.clear {
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}

.float-grid-demo {
  padding: 12px;
  background: #fafafa;
  border: 1px solid #eee;
  box-sizing: border-box;
}

.float-grid-demo .card {
  float: left;
  width: calc(33.333% - 16px); /* 3カラム風に配置（マージンを差し引く） */
  margin: 8px;
  padding: 12px;
  background: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03);
  box-sizing: border-box;
}

/* レスポンシブ：幅が狭くなったら2カラム、さらに狭ければ1カラムにする */
@media (max-width: 800px) {
  .float-grid-demo .card {
    width: calc(50% - 16px);
  }
}

@media (max-width: 480px) {
  .float-grid-demo .card {
    width: calc(100% - 16px);
  }
}
`},{subtitle:"メディアオブジェクト：画像にテキストが回り込むコンテナ例",htmlCode:`<div class="media-demo clearfix">
  <div class="media-img" role="img" aria-label="サンプル画像"></div>
  <div class="media-body">
    <h4>タイトル</h4>
    <p>この例はよくあるメディアオブジェクト（記事やコメントのレイアウト）です。画像に <code>float: left</code> を指定し、テキストを右側に回り込ませます。必要なら <code>float: right</code> にして左右を入れ替えることもできます。</p>
    <p>メディア要素は短い説明やメタ情報に便利です。親コンテナには clearfix を入れてフロート要素の高さを確保します。</p>
  </div>
</div>`,cssCode:`.media-demo {
  padding: 12px;
  border: 1px dashed #ddd;
  background: #fff;
  box-sizing: border-box;
}

.media-img {
  /* 画像ファイルを使わないプレースホルダ用ブロック要素 */
  float: left;
  width: 120px;
  height: 120px; /* 固定高さで画像っぽく見せる */
  margin: 0 12px 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f4f6f9 0%, #e9ebf0 100%);
  color: #6b6f77;
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
}

.media-img::before {
  /* aria-label を視覚的な代替テキストとして表示 */
  content: attr(aria-label);
  display: block;
  padding: 4px 6px;
  text-align: center;
}

.media-body h4 {
  margin: 0 0 6px 0;
}

.media-body p {
  margin: 0 0 8px 0;
  line-height: 1.6;
}

/* 右に回り込みさせたい場合のユーティリティ */
.float-right {
  float: right;
  margin: 0 0 12px 12px;
}
`}]};export{a as default,a as item};
