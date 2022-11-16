<template>
  <div id="Scheme">
    <div class="main">
      <div class="navigation">
        <ul>
          <li @click="plan(0)">おすすめ</li>
          <li @click="plan(1)">注目</li>
          <li @click="plan(2)">最も人気</li>
          <li @click="plan(3)">アプリケーション推奨</li>
          <li @click="plan(4)">ライフ</li>
          <li @click="plan(5)">操作</li>
          <li @click="plan(6)">ポッド</li>
        </ul>
      </div>
      <div class="window">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="right-bar"></div>
  </div>
</template>

<script>
export default {
  name: "Scheme",
  mounted: function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 600) {
        $(".main .navigation").addClass("change");
      } else {
        $(".main .navigation").removeClass("change");
      }
    });
  },
  methods: {
    plan(i) {
      for (let j = 0; j < 7; j++) {
        $(".main .navigation ul li")
          .eq(j)
          .css("border-bottom", " 2px solid transparent");
        $(".main .navigation ul li")
          .eq(j)
          .css("color", "#8e8787");
      }
      $(".main .navigation ul li")
        .eq(i)
        .css("border-bottom", "2px solid #fd281a");
      $(".main .navigation ul li")
        .eq(i)
        .css("color", "#fd281a");
    }
  }
};
</script>

<style scoped>
#Scheme {
  width: 960px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 40px;
  /*background:pink;*/
  position: relative;
}
.main {
  width: 80%;
  min-height: 50vh;
  /*background:#fff;*/
}
.right-bar {
  position: absolute;
  right: -100px;
  width: 250px;
  min-height: 50vh;
  background: #333;
  top: 128px;
}
.navigation {
  transition: 0.5s;
}
.navigation.change {
  position: fixed;
  top: 60px;
  background: #232222;
  width: 768px;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
ul li {
  padding: 0 14px;
  width: auto;
  cursor: pointer;
  color: #8e8787;
  font-size: 16px;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  transition: all 0.7s;
  margin: 0;
  margin-right: 10px;
  height: 48px;
  box-sizing: border-box;
  line-height: 48px;
}
ul li:hover {
  color: #fd281a !important; /*jq优先级太高,不加没hover效果*/
}
ul li:nth-child(1) {
  color: #fd281a;
  border-bottom: 2px solid #fd281a;
}
.window {
  margin-top: 40px;
  width: 100%;
  height: 200px;
  background: #333;
}
</style>