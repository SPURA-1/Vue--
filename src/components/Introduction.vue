<template>
  <div id="Introduction">
    <div class="article">
      <div class="header">
        <h2>工作室介绍</h2>
        <div class="time">
          <img src="../../static/images/日历.png" />
          <p>2022-11-11</p>
        </div>
      </div>
      <div class="article-main">
        <p>これは簡単なページです.</p>
        <h2>ブランドビュー</h2>
        <h3>ブランドの活力</h3>
        <p>
          ブランドは絶えず革新してこそ、発展の「含金量」を十分にすることができる。現在、新しい文化、技術、需要は、ブランドに新しい活力と生命を与え、老舗の新時代の改善と向上を促進するだけでなく、消費方式を変え、リードしている。
        </p>
        <h3>ブランドの影響力</h3>
        <p>
          ブランドの影響力とは、ブランドが市場を開拓し、市場を占領し、利益を得る能力を指す。ブランドの影響力はすでに顧客の商品選択を左右する重要な要素となっている。ブランドの影響力はコアの影響力とエピタキシャルの影響力の総合的な反映であり、より高いレベルでの影響力の向上と最も集中的な体現である。
        </p>
        <h2>ブランドの生産性</h2>
        <p>The otaku studio is still in its infancy, with limited development staff and small investment and financial support. However, with the promotion of excellent products, it is growing step by step. The basic situation of the company is listed in the form below</p>
        <div class="table-wrap">
          <table>
            <tbody>
              <tr>
                <td>アドレス</td>
                <td>SHANG HAI</td>
              </tr>
              <tr>
                <td>経営範囲</td>
                <td>インターネット製品開発</td>
              </tr>
              <tr>
                <td>人数</td>
                <td>1人</td>
              </tr>
              <tr>
                <td>会社</td>
                <td>強度と外観を両立させた小さな工房</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>製品のインストールとテスト</h2>
        <p>
          ここをクリックしてインストール：
          <a href="#">ガイドヘッドナビゲーションページ</a>
          <br />インストールに関する考慮事項：
          <br />まず、解凍後にファイルをダウンロードするとインデックスがあります。html、js、cssファイルがあります。CSSとjsファイルのパスを変更せずに、htmlファイルをクリックしてプレビューを開きます。画像のロードが遅すぎる場合は、辛抱強く待ってください。
        </p>
        <p>
          ここをクリックしてインストール：
          <a href="#">Yyyy Library</a>
          <br />インストールに関する考慮事項：
          <br />VUEフレームワークを使用しているため、ファイルをダウンロードして解凍し、IDEからLibraryフォルダを開き、ターミナルオプションをクリックして新しいターミナルを作成し、以下に説明を入力する必要があります
        </p>
        <pre v-highlight>
          <code class="javascript">
            npm run dev
          </code>
        </pre>
        <p>その後、ロードに成功すると、次のコマンドが表示されます。</p>
        <pre v-highlight>
          <code class="javascript">
            Your application is running here: http://localhost:8080
          </code>
        </pre>
        <p>ここでctrlキーを押したままリンクをクリックして表示します。図床を使用しているため、画像のロード速度が遅くなりますのでお待ちください。</p>
      </div>
      <div class="article-footer">
        <div class="next" @click="next">
          <img src="../../static/images/右箭头.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  props: {
    isKnight: Boolean
  },
  mounted: function() {
    if (this.isKnight) {
      this.parentMethod(0);
    } else {
      this.parentMethod(1);
    }
  },
  methods: {
    next() {
      this.$router.push("/Studio/Update");
    },
    parentMethod(i) {
      if (!i) {
        $(".article").css("background", "#1f1f1f");
        $(".article .header h2").css("color", "rgba(255, 255, 255, 0.6)");
        $(".article p").css("color", "rgba(255, 255, 255, 0.6)");
        $(".article .table-wrap table").css(
          "color",
          "rgba(255, 255, 255, 0.6)"
        );
        $(".article .article-main a").css("color", "rgb(182, 32 ,22)");
        $(".hljs").css("cssText", "opacity:0.5!important");
        $(".article .article-footer .next").hover(
          function() {
            $(".article .article-footer .next").css(
              "background",
              "rgb(182, 32, 22)"
            );
          },
          function() {
            $(".article .article-footer .next").css("background", "none");
          }
        );
      } else {
        $(".article").css("background", "#fff");
        $(".article .header h2").css("color", "#696969");
        $(".article p").css("color", "#1a1a1a");
        $(".article .table-wrap table").css("color", "#1a1a1a");
        $(".hljs").css("cssText", "opacity:1!important");
        $(".article .article-footer .next").hover(
          function() {
            $(".article .article-footer .next").css("background", "#0088cc");
          },
          function() {
            $(".article .article-footer .next").css("background", "none");
          }
        );
      }
    }
  }
};
</script>

<style scoped>
#Introduction {
  width: 100%;
  min-height: 300px;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
#Introduction::-webkit-scrollbar {
  width: 0px;
}
.article {
  position: relative;
  margin-top: 10px;
  width: 100%;
  min-height: 300px;
  background: #fff;
  border: 1px solid #d1d1d1;
  transition: 1s;
}
.article::before {
  content: "";
  position: absolute;
  left: -2px;
  top: 0px;
  width: 5px;
  height: 80px;
  background: #4d4d4d;
}
.article .header {
  display: flex;
  justify-content: space-between;
  padding: 30px 60px 15px 25px;
  padding-left: 7.6923%;
  align-items: center;
}
.article .header h2 {
  margin: 0px;
  color: #696969;
  margin-left: 0;
  font-weight: 400;
  line-height: 35px;
  font-size: 26px;
  transition: 1s;
}
.article .header .time img {
  height: 20px;
  margin-right: 8px;
}
.article .header .time {
  display: flex;
  align-items: center;
  height: 100%;
}
.article .header .time p {
  margin: 0px;
  letter-spacing: 2px;
  color: #999;
  transition: 1s;
}
.article .article-main {
  box-sizing: border-box;
  padding-right: 7.6923%;
  padding-left: 7.6923%;
}
.article .article-main p {
  text-align: justify;
  box-sizing: border-box;
  color: #1a1a1a;
  font-family: lucida grande, lucida sans unicode, lucida, helvetica,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  font-size: 1rem;
  line-height: 1.8em;
}
.article .article-main h1,
.article .article-main h2,
.article .article-main h3,
.article .article-main h4,
.article .article-main h5 {
  margin-top: 20px;
  font-weight: 700;
  color: #574c4c;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
  text-transform: capitalize;
  font-family: lucida grande, lucida sans unicode, lucida, helvetica,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  box-sizing: border-box;
}
.article .article-main a {
  text-decoration: none;
  color: #08c;
}
.table-wrap {
  margin: 0 0 1rem;
}
.table-wrap table {
  color: #1a1a1a;
  font-family: lucida grande, lucida sans unicode, lucida, helvetica,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  font-size: 1rem;
  border-color: grey;
  overflow-wrap: break-word;
  display: table;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  empty-cells: show;
}
.table-wrap table thead {
  background: rgba(153, 169, 191, 0.1);
  vertical-align: center;
}
.table-wrap table tr {
  box-sizing: border-box;
}
.table-wrap table td {
  display: table-cell;
}
.table-wrap table th,
.table-wrap table td {
  padding: 0.3rem 0.6rem;
  border: 1px solid #d6d6d6;
  vertical-align: middle;
}
.article .article-main pre {
  font-family: consolas, Menlo, "PingFang SC", "Microsoft YaHei", sans-serif;
  overflow-x: auto;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
}
.hljs {
  border-radius: 8px !important;
}
.article .article-footer {
  padding-top: 20px;
  margin: 30px 7.6923% 0;
  height: 80px;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  position: relative;
}
.article .article-footer .next {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  cursor: pointer;
}
.article .article-footer .next:hover {
  background: #0088cc;
  filter: brightness(150%);
}
.article .article-footer .next img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 800px) {
  #Introduction {
    max-height: initial;
    overflow: visible;
  }
}
@media screen and (max-width: 499px) {
  .article .article-main {
    padding-right: 3%;
    padding-left: 3%;
  }
  .article .article-main pre {
    font-size: 10px;
  }
}
</style>