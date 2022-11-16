<template>
  <div id="Subscription">
    <toast
      v-model="showPositionValue"
      type="text"
      :time="2000"
      width="20em"
      is-show-mask
      :text="toastText"
      position="center"
    ></toast>
    <h1>Yyyy Lib: 会員になり、無料で読むことができます!!</h1>
    <div class="message">
      より良い読書体験を提供するために、私たちは有料購読プレートを開発しました。彼はHot推薦プレートとは異なり、このプレートは会員一人一人に個人的にカスタマイズされたようなサービスを提供することに専念しており、より完璧な読書体験を持っているのはもちろん、そのためには小さな捨てられた銅板を支払う必要があります。
    </div>
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="../../static/images/Free-Tag 2.png" />
            <h3>TEST</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>他人（たにん）が何と言おうと，自分（じぶん）の信じるものは，自分で决める。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="../../static/images/vip1.png" />
            <h3>TEST</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>ひっそり远くから、もしかすると离（はな）し难（がた）いのか。黙々（もくもく）と静</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="../../static/images/count.png" />
            <h3>TEST</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>今日（きょう）出来（でき）ない事（こと）は明日（あした）も出来ない。明日出来ない

事は今日は出来る。</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="../../static/images/数据 (1).png" />
            <h3>TEST</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>人生はいつもいつも第一志望ばかりを歩けるものではありません。そして、必ずしも、第一志望の道を歩くことだけが、自分にとって最良と言えないことだってあるのです。</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="message"
    >大いに紹介を読んだ後、きっと会員の優位性に心を動かされるだろうと信じています。心配しないでください。私たちが提供している費用は高くありません。次は有料コースで、ちょうど小さな店がオープンしたばかりで、私たちは大いに割引を提供しましたよ。今は買わないで、いつまで待っていますか?</div>
    <div class="top-up">
      <div class="info">
        <div class="me">
          <img :src="account" />
        </div>
        <p class="name">{{name}}</p>
        <p class="status">{{status?`下のボタンをクリックして購読スペースに入ってください~`:`まだ会員ではありませんので、先にコースを選んで有料で購読してください~`}}</p>
        <p class="exchange">招待コード開通</p>
      </div>
      <div class="choose">
        <div class="box" @click="check(0)">
          <p>連続請負年</p>
          <h2>￥148</h2>
          <del>￥233</del>
        </div>
        <div class="box" @click="check(1)">
          <p>連続パッケージ四半期</p>
          <h2>￥45</h2>
          <del>￥68</del>
        </div>
        <div class="box" @click="check(2)">
          <p>連続月極め</p>
          <h2>￥15</h2>
          <del>￥25</del>
        </div>
        <div class="box" @click="check(3)">
          <p>年度会員</p>
          <h2>￥168</h2>
          <del>￥233</del>
        </div>
        <div class="box" @click="check(4)">
          <p>四半期会員</p>
          <h2>￥58</h2>
          <del>￥68</del>
        </div>
        <div class="box" @click="check(5)">
          <p>月間会員</p>
          <h2>￥25</h2>
          <p>&nbsp;</p>
        </div>
      </div>
      <p class="intro">{{text}}</p>
      <div class="qrcode">
        <div class="paymethod">
          <div class="animation"></div>
          <p class="method" @click="pay(0)">QQ支払い</p>
          <p class="method" @click="pay(1)">ウィーチャッ</p>
          <p class="method" @click="pay(2)">アリペイ</p>
        </div>
        <div class="cover">
          <img src="../../static/images/刷新.png" />
        </div>
        <div class="paycode">
          <img :src="qrcode" />
        </div>
        <p class="money">￥{{money}}</p>
        <p class="hint">{{hint}}</p>
      </div>
      <div class="agreement">
        <input type="checkbox" id="agree" @click="hide" />同意
        <a>《会員サービス契約》</a>
        <a>《会員自動サービス規則》</a>
      </div>
    </div>
    <div class="myzone">
      <div class="button" @click="enter">Enter My Zone</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscription",
  data() {
    return {
      name: "",
      status: false,
      account: `../../static/images/account.png`,
      hint: `まず契約書を読んで同意してください`,
      qrcode: "../../static/images/qqqrcode.png",
      money: 148,
      text: `年間148元の自動継続料金で、いつでもキャンセルできます`,
      toastText: ``,
      showPositionValue: false
    };
  },
  mounted: function() {
    this.getRouterData();
  },
  methods: {
    check(i) {
      $(".choose .box").css("border", "1px #737373 solid");
      $(".choose .box")
        .eq(i)
        .css("border", "1.5px silver solid");
      switch (i) {
        case 0:
          this.text = `年間148元の自動継続料金で、いつでもキャンセルできます`;
          this.money = 148;
          this.choose(i);
          break;
        case 1:
          this.text = `四半期ごとに45元の自動継続料金で、いつでもキャンセルできます`;
          this.money = 45;
          this.choose(i);
          break;
        case 2:
          this.text = `毎月15元の自動継続料金で、いつでもキャンセルできます`;
          this.money = 15;
          this.choose(i);
          break;
        case 3:
          this.text = `12ヶ月会員、期間限定14元/月割引`;
          this.money = 168;
          this.choose(i);
          break;
        case 4:
          this.text = ` 3ヶ月の大会員で、季立省の23元を連続して請け負う`;
          this.money = 58;
          this.choose(i);
          break;
        default:
          this.text = `1カ月の大会員、連続月収10元`;
          this.money = 25;
          this.choose(i);
          break;
      }
    },
    choose(i) {
      $(".box h2").css("color", "#737373");
      $(".box h2")
        .eq(i)
        .css("color", "#fff");
    },
    pay(i) {
      switch (i) {
        case 0:
          $(".qrcode .animation").css("top", "6.5%");
          this.qrcode = "../../static/images/qqqrcode.png";
          break;
        case 1:
          $(".qrcode .animation").css("top", "39.5%");
          this.qrcode = "../../static/images/wechatqrcode.png";
          break;
        default:
          $(".qrcode .animation").css("top", "72.5%");
          this.qrcode = "../../static/images/zhifubaoqrcode.jpg";
          break;
      }
    },
    hide() {
      if (document.getElementById("agree").checked) {
        $(".cover").css("opacity", "0");
        $(".cover").css("visibility", "hidden");
        this.hint = `QRコードをスキャンしてお支払いください`;
      } else {
        $(".cover").css("opacity", "0.9");
        $(".cover").css("visibility", "visible");
        this.hint = `まず契約書を読んで同意してください`;
      }
    },
    getRouterData() {
      this.account = this.$route.params.account;
      this.name = this.$route.params.name;
      this.status = this.$route.params.status;
    },
    enter() {
      if (this.status) {
        this.$router.push("/SubscriptionV");
        (function smoothscroll() {
          var currentScroll =
            document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 500) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - currentScroll / 35);
          }
        })();
      } else {
        this.toastText = "申し訳ありませんが、会員のみ入場できますよ~";
        this.showPositionValue = true;
      }
    }
  }
};
</script>

<style scoped>
#Subscription {
  margin: 0 auto;
  margin-top: 50px;
  position: relative;
  width: 759.6px;
  min-height: 100vh;
}
#Subscription h1 {
  margin: 0 auto;
  margin-bottom: 50px;
  padding-top: 30px;
  font-size: 30px;
  font-weight: 500;
  color: white;
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
.container {
  margin: 0 auto;
  margin-top: 40px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.container .card {
  position: relative;
  display: flex;
  margin-block-end: 30px;
  cursor: pointer;
}

.container .card .face {
  width: 400px;
  height: 200px;
  transition: 0.5s;
}
.container .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateX(200px);
}
.container .card:nth-child(odd):hover .face.face1 {
  transform: translateX(0px);
  transition-delay: 0.5s;
  background: #ff0057;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
}
.container .card:nth-child(even):hover .face.face1 {
  transform: translateX(400px);
  transition-delay: 0.5s;
  background: #00af64;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
}
.container .card .face.face1 .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.2;
  transition: 0.5s;
}
.container .card:hover .face.face1 .content {
  opacity: 1;
}
.container .card .face.face1 .content img {
  width: 50px;
}
.container .card .face.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}
.container .card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: inset 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateX(-200px);
}
.container .card:nth-child(odd):hover .face.face2 {
  transition-delay: 0.5s;
  transform: translateX(0px);
}
.container .card:nth-child(even):hover .face.face2 {
  transition-delay: 0.5s;
  transform: translateX(-400px);
}
.container .card .face.face2 .content p {
  transition: 0.6s;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.container .card:hover .face.face2 p {
  transition-delay: 0.5s;
  opacity: 1;
  height: inherit;
}
.top-up {
  width: 100%;
  padding-bottom: 20px;
  margin-top: 40px;
}
.info {
  width: 100%;
  height: 60px;
  position: relative;
  cursor: default;
}
.info .me {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px #333 solid;
}
.info .name {
  color: #737373;
  position: absolute;
  left: 60px;
  margin: 0;
  top: 3px;
}
.info .status {
  color: #737373;
  position: absolute;
  left: 60px;
  margin: 0;
  bottom: 15px;
}
.info .exchange {
  color: #737373;
  position: absolute;
  right: 60px;
  margin: 0;
  bottom: 15px;
  transition: 0.4s;
  cursor: pointer;
}
.info .exchange:hover {
  color: silver;
}
.info .me img {
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.choose {
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.box {
  border: 1px #737373 solid;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  width: 15%;
  height: 140px;
  margin-bottom: 10px;
}
.box:nth-child(1) {
  border: 1.5px silver solid;
}
.box:nth-child(1):before {
  content: "6.3折";
  color: #fff;
  font-size: 0.7em;
  position: absolute;
  background-color: #fd281a;
  border-radius: 10px;
  top: -8px;
  right: 1px;
  border: 3px transparent solid;
}
.box:nth-child(2):before {
  content: "6.6折";
  color: #fff;
  font-size: 0.7em;
  position: absolute;
  background-color: #fd281a;
  border-radius: 10px;
  top: -8px;
  right: 1px;
  border: 3px transparent solid;
}
.box:nth-child(3):before {
  content: "特恵";
  letter-spacing: 3px;
  color: #fff;
  font-size: 0.7em;
  position: absolute;
  background-color: #fd281a;
  border-radius: 10px;
  top: -8px;
  right: 1px;
  border: 3px transparent solid;
}
.box:nth-child(4):before {
  content: "時限";
  letter-spacing: 3px;
  color: #fff;
  font-size: 0.7em;
  position: absolute;
  background-color: #088a08;
  border-radius: 10px;
  top: -8px;
  right: 1px;
  border: 3px transparent solid;
}
.box:nth-child(5):before {
  content: "時限";
  letter-spacing: 3px;
  color: #fff;
  font-size: 0.7em;
  position: absolute;
  background-color: #088a08;
  border-radius: 10px;
  top: -8px;
  right: 1px;
  border: 3px transparent solid;
}
.box p {
  margin: 0;
  color: #737373;
}
.box:hover h2 {
  color: #fff !important;
}
.box h2 {
  transition: 0.4s;
  color: #737373;
  margin: 0;
}
.intro {
  margin-left: 8px;
  font-size: 0.8em;
  color: #fff;
}
.qrcode {
  width: 100%;
  height: 200px;
  border: 1px #737373 solid;
}
.qrcode {
  position: relative;
}
.paymethod {
  height: 100%;
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.method {
  transition: 0.5s;
  z-index: 1;
  margin: 0;
  color: #737373;
  line-height: 66px;
  text-align: center;
  width: 100%;
  height: 33%;
  cursor: pointer;
}
.paycode {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-90%, -50%);
}
.cover {
  position: absolute;
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-90%, -50%);
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.cover img {
  width: 45px;
}
.paycode img {
  opacity: 0.9;
  width: 100%;
  height: 100%;
}
.qrcode .animation {
  position: absolute;
  width: 90%;
  left: 5%;
  top: 6.5%;
  height: 20%;
  border-radius: 10px;
  background: silver;
  transition: 0.3s ease;
}
.money {
  position: absolute;
  margin: 0;
  color: #fff;
  font-size: 2.4em;
  font-weight: bolder;
  top: 35%;
  left: 55%;
}
.hint {
  position: absolute;
  margin: 0;
  color: #737373;
  font-size: 0.8em;
  top: 65%;
  left: 56%;
}
.agreement {
  color: #fff;
  font-size: 0.8em;
  margin-top: 10px;
  display: flex;
  justify-content: center;
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
@media screen and (max-width: 780px) {
  #Subscription {
    width: 100%;
  }
  #Subscription h1 {
    font-size: 25px;
  }
  .container .card {
    flex-direction: column;
    align-items: center;
  }
  .container .card .face.face1 {
    transform: translateX(0px);
    transform: translateY(100px);
  }
  .container .card .face.face2 {
    transform: translateX(0px);
    transform: translateY(-100px);
  }
  .container .card:nth-child(odd):hover .face.face1 {
    transform: translateX(0px);
    transform: translateY(0px);
    transition-delay: 0.5s;
    background: #ff0057;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  }
  .container .card:nth-child(even):hover .face.face1 {
    transform: translateX(0px);
    transform: translateY(0px);
    transition-delay: 0.5s;
    background: #00af64;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  }
  .container .card:nth-child(even):hover .face.face2 {
    transition-delay: 0.5s;
    transform: translateX(0px);
    transform: translateY(0px);
  }
  .container .card:nth-child(odd):hover .face.face2 {
    transition-delay: 0.5s;
    transform: translateX(0px);
    transform: translateY(0px);
  }
  .message {
    width: 95%;
    margin: 0 auto;
  }
  .top-up {
    width: 95%;
    margin: 0 auto;
    margin-top: 40px;
  }
}
@media screen and (max-width: 560px) {
  .paycode {
    left: 60%;
  }
  .container .card{
    margin-bottom:30px;
  }
  .container .card .face.face2{
    height:0px;
    overflow: hidden;
    margin-bottom:30px;
  }
  .container .card:hover .face.face2{
    height:200px;
    overflow: hidden;
  }
  .cover {
    left: 60%;
  }
  .name{
    display:none;
  }
  .money {
    left: 65%;
  }
  .hint {
    left: 65%;
  }
  .exchange {
    display: none;
  }
  .container .card .face {
    width: 300px;
  }
  .choose .box{
    width:90px;
  }
  .paycode,.cover{
    width:90px;
    height:90px;
    top:30%;
    left:70%;
  }
  .money{
    font-size:20px;
    top:60%;
    left:50%;
  }
  .hint{
    font-size:12px;
    top:80%;
    left:45%;
  }
}
</style>