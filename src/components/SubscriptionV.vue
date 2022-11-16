<template>
  <div id="SubscriptionV">
    <h1>Yyyy Vip: Enjoy our own private custom book corner.</h1>
    <div class="myinfo">
      <div class="info">
        <div class="me">
          <img src="../../static/images/author.jpg" />
          <div class="name">
            <img class="status" src="../../static/images/vip.png" />
            <p>SPURA</p>
          </div>
        </div>
        <h2>Rest Time:</h2>
      </div>
      <div class="clock">
        <flip-countdown deadline="2023-11-11 00:00:00"></flip-countdown>
      </div>
    </div>
    <div class="analysis">
      <div class="message">
        技術には限りがありますが、私たちを支持する有料Vip会員一人一人に無料のビッグデータ分析を提供し、データ分析を参考にして顧客が興味を持つ可能性が高い同種の題材のアニメ情報、書籍、映画を精確に推薦します。もしあなたがこれに対して建設的なアドバイスがあれば、気前よく共有してください。スタジオのメンバー一人一人が会員のためにもっと快適な読書プラットフォームを作るように努力します！
      </div>
      <div id="cookiechart"></div>
      <div class="advice">
        <ul>
          <li v-for="(advice,i) in advicearray" :key="advice.advisor">
            <div class="content">
              <div class="advisor">
                <img :src="advice.pic" />
                <b>{{advice.advisor}}:{{advice.job}}</b>
              </div>
              <p>{{content[i]}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="message">
        私たちはあなたに以下の内容を正確に推薦します（推薦内容に偏りがある場合はお許しください、私たちは精度を高めるために努力します～: )
      </div>
    </div>
    <div class="masonry">
      <transition-group appear name="fade">
        <div class="item" v-for="(pic,index) in pics" v-show="index < limit" :key="pic.url">
          <!--这里用v-if限制渲染条件会报错!虽然没什么影响,貌似是频繁切换渲染消耗性能?-->
          <img v-lazy="pic.url" />
          <div class="image-content">
            <b>Image Title</b>
            <button>Read More</button>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="more" @click="more">
      <p>{{text}}</p>
    </div>
    <div class="myzone">
      <div class="button" @click="backpack">Renewal Service</div>
    </div>
  </div>
</template>

<script>
import FlipCountdown from "vue2-flip-countdown";
import echarts from "echarts";
export default {
  name: "SubscriptionV",
  components: {
    FlipCountdown
  },
  mounted: function() {
    var chartBar = echarts.init(document.getElementById("cookiechart"));
    var option = {
      backgroundColor: "#232222",

      title: {
        text: "Grade preference statistics",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc"
        }
      },

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: "Taste numerical",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: this.data.sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)"
          },
          labelLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)"
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.9)"
          },

          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function(idx) {
            return Math.random() * 200;
          }
        }
      ]
    };
    chartBar.setOption(option);
  },
  data() {
    return {
      limit: 20,
      text: "-Load More-",
      pics: [
        { url: "../../static/images/S1.png" },
        { url: "../../static/images/S2.png" },
        { url: "../../static/images/S3.png" },
        { url: "../../static/images/L1.png" },
        { url: "../../static/images/S4.png" },
        { url: "../../static/images/S5.png" },
        { url: "../../static/images/L2.png" },
        { url: "../../static/images/L3.png" },
        { url: "../../static/images/S6.png" },
        { url: "../../static/images/S7.png" },
        { url: "../../static/images/S8.png" },
        { url: "../../static/images/S9.png" },
        { url: "../../static/images/L4.png" },
        { url: "../../static/images/L5.png" },
        { url: "../../static/images/S10.png" },
        { url: "../../static/images/S11.png" },
        { url: "../../static/images/L6.png" },
        { url: "../../static/images/S12.png" },
        { url: "../../static/images/L7.png" },
        { url: "../../static/images/L8.png" },
        { url: "../../static/images/L9.png" },
        { url: "../../static/images/S13.png" },
        { url: "../../static/images/S14.png" },
        { url: "../../static/images/S15.png" },
        { url: "../../static/images/L10.png" },
        { url: "../../static/images/S16.png" },
        { url: "../../static/images/S17.png" },
        { url: "../../static/images/L11.png" },
        { url: "../../static/images/S18.png" },
        { url: "../../static/images/S19.png" },
        { url: "../../static/images/S20.png" },
        { url: "../../static/images/L12.png" },
        { url: "../../static/images/L13.png" },
        { url: "../../static/images/L14.png" },
        { url: "../../static/images/S21.png" },
        { url: "../../static/images/S22.png" },
        { url: "../../static/images/L23.png" },
        { url: "../../static/images/L15.png" },
        { url: "../../static/images/L16.png" },
        { url: "../../static/images/L17.png" },
        { url: "../../static/images/S24.png" },
        { url: "../../static/images/S25.png" },
        { url: "../../static/images/S26.png" },
        { url: "../../static/images/S27.png" },
        { url: "../../static/images/L18.png" },
        { url: "../../static/images/L19.png" },
        { url: "../../static/images/S28.png" },
        { url: "../../static/images/S29.png" },
        { url: "../../static/images/S30.png" },
        { url: "../../static/images/L20.png" },
        { url: "../../static/images/L21.png" },
        { url: "../../static/images/S31.png" },
        { url: "../../static/images/S32.png" },
        { url: "../../static/images/L21.png" },
        { url: "../../static/images/L22.png" },
        { url: "../../static/images/S33.png" },
        { url: "../../static/images/S34.png" },
        { url: "../../static/images/S35.png" },
        { url: "../../static/images/S36.png" },
        { url: "../../static/images/L23.png" },
        { url: "../../static/images/L24.png" },
        { url: "../../static/images/S37.png" },
        { url: "../../static/images/L25.jpg" }
      ],
      data: [
        { value: 330, name: "学園" },
        { value: 310, name: "魔幻の戦い" },
        { value: 270, name: "熱血スポーツ" },
        { value: 230, name: "優しく癒される" },
        { value: 400, name: "笑える日常" },
        { value: 180, name: "機甲ゲーム" }
      ],
      advicearray: [
        {
          advisor: "T1",
          job: "Yyyy Lib首席数据分析策划",
          pic: "../../static/images/advisor1.jpg"
        },
        {
          advisor: "T2",
          job: "Yyyy 付费订阅部门技术顾问",
          pic: "../../static/images/advisor2.png"
        },
        {
          advisor: "T3",
          job: "Yyyy Lib品牌策划兼副总裁",
          pic: "../../static/images/advisor3.jfif"
        }
      ]
    };
  },
  methods: {
    more() {
      if (this.limit + 20 <= this.pics.length) {
        this.limit += 20;
      } else {
        this.limit += this.pics.length - this.limit;
        this.text = "-No More-";
      }
    },
    backpack() {
      this.$parent.move(1);
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 500) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 35);
        }
      })();
    }
  },
  computed: {
    content(i) {
      var cont = [];
      var data = this.data.sort(function(a, b) {
        return b.value - a.value;
      });
      for (let j = 0; j < 3; j++) {
        if (j === 0) {
          cont.push(
            `図から分析してお気に入りを得る"${data[0].name}"と"${data[1].name}"タイプのコンテンツは、次の推奨事項の中で大幅に推奨され、お探しの時間コストを効率的に削減します。`
          );
        } else if (j === 1) {
          cont.push(
            `また、美的疲労を避けるためにも、興味がないかもしれないことをお勧めします"${data[4].name}"と"${data[5].name}"タイプのコンテンツは、もちろん彼がおすすめコンテンツのごく一部を占めているだけ！`
          );
        } else {
          cont.push(
            `このプレートの内容に興味があれば、継続料金でサポートしてください。今は月極割引もありますよ。もちろん、何かもっと良いアドバイスがあれば、すぐにフィードバックすることもできますよ。右下のカスタマーサービスボタンをクリックしてアドバイスしてください。`
          );
        }
      }
      return cont;
    }
  }
};
</script>

<style scoped>
#SubscriptionV {
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
  width: 759.6px;
  min-height: 100vh;
}
#SubscriptionV h1 {
  margin: 0 auto;
  padding-top: 30px;
  font-size: 30px;
  font-weight: 500;
  color: white;
}
.myinfo {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  height: 100px;
  -webkit-box-reflect: below 0.3px linear-gradient(transparent, #0004);
}
.info {
  width: 200px;
  height: 110px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.info h2 {
  font-family: consolas;
  margin: 0;
}
.info .me {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.info .me img {
  width: 50px;
  border-radius: 50%;
}
.info .me .name {
  height: 52.8px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
}
.info .me .name img {
  width: 30px;
}
.info .me .name .status {
  opacity: 0;
  position: absolute;
  top: -20px;
  transition: 0.5s;
}
.info .me:hover .status {
  transition-delay: 0.2s;
  opacity: 1;
  top: 5px;
}
.info .name p {
  transition: 0.5s;
}
.info .me:hover .name p {
  margin-top: 35px;
  color: brown;
}
.flip-clock {
  color: #fff;
}
.analysis {
  width: 100%;
  min-height: 100px;
  margin-top: 150px;
  /*background: white;*/
}
.message {
  width: 100%;
  position: relative;
  padding-left: 15px;
  border-left: 2px solid #fd281a;
  box-sizing: border-box;
  text-align: justify;
  line-height: 160%;
  font-size: 18px;
  color: #7f7f7f;
  letter-spacing: 1.1;
  padding-top: 30px;
}
.message::after {
  content: "“";
  position: absolute;
  left: -5px;
  top: 0px;
  font-size: 38px;
  color: #fd281a;
}
#cookiechart {
  margin-top: 50px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.advice {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}
ul {
  margin: 0;
  padding: 0;
  width: 70%;
  display: flex;
  justify-content: space-around;
}
ul li {
  position: relative;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #777;
  margin: 0 20px;
  border-radius: 50%;
  transition: 0.5s;
  cursor: pointer;
}
ul li:hover {
  background: #fd281a;
  box-shadow: 0 0 0 4px #333, 0 0 0 6px #fd281a;
}
ul li .content {
  position: absolute;
  bottom: 55px;
  width: 400px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  visibility: hidden;
  opacity: 0;
  transition: 0.7s;
  transform: translateX(-50%) translateY(-50%);
}
ul li:hover .content {
  visibility: visible;
  opacity: 0.7;
  transform: translateX(-50%) translateY(0%);
}
ul li .content:before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background: #fff;
  bottom: -15px;
  left: 194px;
  transform: rotate(45deg);
}
ul li .content b {
  font-size: 20px;
  line-height: 1.2;
  margin-left: 10px;
}
ul li .content .advisor {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
ul li .content .advisor img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.masonry {
  width: 100%;
  margin-top: 50px;
  column-count: 4;
  column-gap: 10px;
}
.item {
  border-color: #fff;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  overflow: hidden;
  border-radius: 7px;
  background: #fff;
  margin-bottom: 10px;
  position: relative;
  font-family: Helvetica;
}
.item img {
  filter: blur(0.3px);
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s;
}
.item:hover img {
  transform: scale(1.1);
  filter: brightness(50%);
}
.image-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.image-content b {
  cursor: default;
  position: absolute;
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
  font-size: 25px;
  left: 10%;
  top: 5%;
}
.item:hover .image-content b {
  opacity: 1;
  visibility: visible;
  width: 60%;
  color: #fff;
  top: 30%;
}
.image-content button {
  position: absolute;
  opacity: 0;
  bottom: -60px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px black solid;
  background: #fff;
  padding: 5px;
  font-size: 10px;
  font-weight: bold;
  transition: 0.5s;
}
.image-content:hover button {
  transition-delay: 0.3s;
  cursor: pointer;
  opacity: 1;
  bottom: 20px;
  outline: none;
}
.image-content button:hover {
  background: tomato;
}
.image-content::before {
  transition: 0.5s;
  content: "";
  position: absolute;
  transform-origin: bottom left;
  transform: rotate(80deg);
  bottom: 0px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 60px 90px;
  border-color: transparent rgba(255, 255, 255, 0.7) rgba(255, 255, 255, 0.7)
    transparent;
}
.image-content:hover::before {
  transform: rotate(0deg);
}
.more {
  margin-top: 30px;
  border: 2px #333 solid;
  text-align: center;
  border-radius: 7px;
  padding: 5px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 1s ease;
}
.more p {
  letter-spacing: 9px;
  font-size: 30px;
  color: #fff;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.more::before {
  transition: 0.6s;
  content: "";
  background: #ff7675;
  position: absolute;
  width: 98%;
  height: 0%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: 0;
}
.more:hover:before {
  height: 850%;
}
.more:hover {
  border-color: #ff7675;
}
.myzone {
  margin-top: 40px;
  position: relative;
  width: 100%;
  padding-bottom: 30px;
}
.myzone .button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: sans-serif;
  box-sizing: border-box;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 30px;
  z-index: 1;
}
.myzone .button:hover {
  animation: animate 8s linear infinite;
}
@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
.myzone .button:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: 0.5s;
}
.myzone .button:hover:before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 1s;
}
@media screen and (max-width: 760px) {
  #SubscriptionV {
    width: 100%;
  }
  .myinfo {
    height: 270px;
    justify-content: center;
    align-items: space-around;
    -webkit-box-reflect: unset;
  }
  .masonry {
    margin: 50px auto;
    width: 95%;
    column-count: 3;
  }
  .image-content:before {
    border-width: 70px 120px;
  }
  ul {
    width: 60%;
  }
  .more {
    width: 90%;
    margin: 0 auto;
  }
  .more p {
    font-size: 20px;
  }
  .more:hover:before {
    height: 480%;
  }
}
@media screen and (max-width: 657px) {
  ul {
    width: 30%;
  }
  ul li:nth-child(3) {
    display: none;
  }
  #cookiechart {
    position: absolute;
    left: -80px;
    height: 500px;
  }
}
@media screen and (max-width: 499px) {
  .analysis{
    margin-top:10px;
  }
  #cookiechart{
    display:none;
  }
  .image-content:before {
    display: none;
  }
  .advice {
    display: none;
  }
  .message:nth-child(1) {
    display: none;
  }
  .more p {
    width: 90%;
  }
}
</style>