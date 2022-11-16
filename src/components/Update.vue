<template>
  <div id="Update">
    <div class="article">
      <div class="header">
        <h2>更新ログ</h2>
        <div class="time">
          <img src="../../static/images/日历.png" />
          <p>2022-11-11</p>
        </div>
      </div>
      <div class="article-main">
        <h2>はじめに</h2>
        <p>本次大作业意在学习并应用所学前端知识,其中包括复习CSS属性,布局,VUE知识点的应用,其中全部由一人亲自完成,借鉴了NOTION笔记首页的页面设计,收获颇丰,在这里将本次大作业的更新之处与亮点总结如下:</p>
        <ul>
          <li>CSS+js轮播图切换(可自动切换)</li>
          <li>首页子组件切换渲染不同样式布局</li>
          <li>swiper.js引入与应用实现3D拖拽查看</li>
          <li>首页导航栏(模仿notion)</li>
          <li>路由切换,动画切换</li>
          <li>CSS实现瀑布流效果图墙</li>
          <li>params与query路由传参</li>
          <li>懒加载图片插件,v-highlight,e-charts组件等引入(说实话,配置挺麻烦的)</li>
          <li>googlefonts,jQ库,VUXUI组件引入与使用,jq只应用了一小部分</li>
          <li>网页响应式,适配大部分移动设备</li>
          <li>一键复制文本效果实现和伪元素实现各种神奇效果</li>
          <li>渐变颜色按钮,flex布局,grid布局等学习与应用于项目中</li>
        </ul>
      </div>
      <div class="article-footer">
        <div class="front" @click="front">
          <img src="../../static/images/右箭头.png" />
        </div>
        <div class="next" @click="next">
          <img src="../../static/images/右箭头.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Update",
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
    parentMethod(i) {
      if (!i) {
        $(".article").css("background", "#1f1f1f");
        $(".article .header h2").css("color", "rgba(255, 255, 255, 0.6)");
        $(".article p").css("color", "rgba(255, 255, 255, 0.6)");
        $(".article li").css("color", "rgba(255, 255, 255, 0.6)");
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
        $(".article .article-footer .front").hover(
          function() {
            $(".article .article-footer .front").css(
              "background",
              "rgb(182, 32, 22)"
            );
          },
          function() {
            $(".article .article-footer .front").css("background", "none");
          }
        );
      } else {
        $(".article").css("background", "#fff");
        $(".article .header h2").css("color", "#696969");
        $(".article p").css("color", "#1a1a1a");
        $(".article li").css("color", "#1a1a1a");
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
        $(".article .article-footer .front").hover(
          function() {
            $(".article .article-footer .front").css("background", "#0088cc");
          },
          function() {
            $(".article .article-footer .front").css("background", "none");
          }
        );
      }
    },
    next() {
      this.$router.push("/Studio/Thanks");
    },
    front() {
      this.$router.push("/Studio/Introduction");
    }
  }
};
</script>

<style scoped>
#Update {
  width: 100%;
  min-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
}
#Update::-webkit-scrollbar {
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
  transition: 1s;
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
.article .article-footer .front {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;
  cursor: pointer;
  transform: rotate(180deg);
}
.article .article-footer .next:hover {
  background: #0088cc;
  filter: brightness(150%);
}
.article .article-footer .front:hover {
  background: #0088cc;
  filter: brightness(150%);
}
.article .article-footer .next img,
.front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.article .article-main ul {
  border-left: 1px solid #ddd;
  margin-bottom: 30px;
}
.article .article-main li {
  margin: 10px;
  color: #1a1a1a;
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