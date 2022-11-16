<template>
  <div id="Homepage">
    <toast
      v-model="showPositionValue"
      type="text"
      :time="2000"
      :width="width"
      is-show-mask
      :text="toastText"
      :position="position"
    ></toast>
    <div id="login">
      <div class="account">
        <div class="return" @click="backpack">
          <img src="../../static/images/return.png" />
        </div>
        <div class="logo">
          <img src="../../static/images/logo.png" width="170px" />
        </div>
        <div class="input">
          <span id="account">账号:</span>
          <input type="text" v-model="account" placeholder="请输入账号" />
          <span id="password">密码:</span>
          <input type="password" v-model="password" placeholder="请输入密码" />
        </div>
        <div class="options">
          <div class="forget">
            <strong>忘记密码？</strong>
          </div>
          <div class="others">
            <div class="box">
              <small>注册</small>
            </div>
            <div class="box" @click="submit">
              <small>登录</small>
            </div>
          </div>
        </div>
        <div class="alternate">
          <h4>其他登录方式</h4>
          <div class="icons">
            <div class="icon">
              <img src="../../static/images/QQ.png" />
            </div>
            <div class="icon">
              <img src="../../static/images/微信.png" />
            </div>
            <div class="icon">
              <img src="../../static/images/微博.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="left-bar">
      <div class="invest" @click="invest">
        <img src="../../static/images/invest.png" />
      </div>
      <small>512</small>
      <div class="box qrcode" title="QRcode">
        <img src="../../static/images/qrcode.png" width="16px" />
      </div>
      <small>22.7w</small>
      <div class="box" @click="copy">
        <textarea id="message"></textarea>
        <img src="../../static/images/share.png" width="16px" />
      </div>
      <small>2.3w</small>
      <div class="box">
        <img src="../../static/images/save.png" width="16px" />
      </div>
    </div>
    <div class="right-bar">
      <div class="service">
        <img src="../../static/images/service.png" width="20px" />
      </div>
      <div class="top" @click="toTop">
        <img src="../../static/images/top.png" width="22px" />
      </div>
    </div>
    <div class="top-nav-hidden">
      <ul>
        <li @click="move(0)">News</li>
        <li @click="move(1)">有料購読</li>
        <li @click="move(2)">特別企画</li>
        <li @click="move(3)">Store</li>
        <li @click="move(4)">BBS</li>
      </ul>
    </div>
    <div class="top-nav">
      <div class="nav">
        <div id="logo" @click="toStudio">
          <img src="../../static/images/logo.png" alt="logo" />
        </div>
        <div class="menu-hidden" @click="fade">
          <img src="../../static/images/menu.png" />
        </div>
        <ul class="menu">
          <li @click="move(0)">
            <img src="../../static/images/news.png" alt="news" />
            <b>News</b>
          </li>
          <li @click="move(1)">
            <img src="../../static/images/subscription.png" alt="subsscription" />
            <b>有料購読</b>
          </li>
          <li @click="move(2)">
            <img src="../../static/images/plan.png" alt="plan" />
            <b>特別企画</b>
          </li>
          <li @click="move(3)">
            <img src="../../static/images/store.png" alt="store" />
            <b>Store</b>
          </li>
          <li @click="move(4)">
            <img src="../../static/images/BBS.png" alt="BBS" />
            <b>BBS</b>
          </li>
          <div class="animation"></div>
        </ul>
        <div class="search-box">
          <input class="search-txt" type="text" name placeholder="Type to search" />
          <a class="search-btn" href="#">
            <i class="fa fa-search" aria-hidden="true"></i>
          </a>
        </div>
        <div class="login" @click="login">
          <div class="btn-bg">
            <img src="../../static/images/account.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="my-menu">
      <ul>
        <li>個人用ページ</li>
        <li>私の私信</li>
        <li>アカウントの設定</li>
        <li>購入/注文</li>
        <li @click="logout">終了</li>
      </ul>
    </div>
    <div class="body">
      <div class="slidebody">
        <div class="background-wall1"></div>
        <div class="background-wall2"></div>
        <div class="slidehead">
          <h1>☆ Daily Recommend:</h1>
        </div>
        <div class="slidershow middle">
          <div class="slides">
            <input type="radio" name="r" id="r1" checked />
            <input type="radio" name="r" id="r2" />
            <input type="radio" name="r" id="r3" />
            <input type="radio" name="r" id="r4" />
            <input type="radio" name="r" id="r5" />
            <div class="slide s1">
              <img src="../../static/images/slide1.png" />
              <div class="content">
                <p class="title">『 天气之子 』</p>
                <p
                  class="sub-title"
                >The weather is unbelievable. Just the look of the sky can change people's mood</p>
                <button>Read More</button>
              </div>
            </div>
            <div class="slide">
              <img src="../../static/images/slide2.png" />
              <div class="content">
                <p class="title">『 言叶之庭 』</p>
                <p
                  class="sub-title"
                >What am I looking forward to, who I am in love with, can not be conveyed, but wishful thinking.</p>
                <button>Read More</button>
              </div>
            </div>
            <div class="slide">
              <img src="../../static/images/slide3.png" />
              <div class="content">
                <p class="title">『 你的名字 』</p>
                <p
                  class="sub-title"
                >I was looking for something, and somehow, I got caught up in this emotion.</p>
                <button>Read More</button>
              </div>
            </div>
            <div class="slide">
              <img src="../../static/images/slide4.png" />
              <div class="content">
                <p class="title">『 青春猪头少年不会梦到兔女郎学姐 』</p>
                <p
                  class="sub-title"
                >Even a hundred million times won't change. The person I like is mai Yi classmate.</p>
                <button>Read More</button>
              </div>
            </div>
            <div class="slide">
              <img src="../../static/images/slide5.png" />
              <div class="content">
                <p class="title">『 烟花 』</p>
                <p
                  class="sub-title"
                >Round or flat or strange. As long as we're together, what do I care.</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
          <div class="navigation">
            <label for="r1" class="bar"></label>
            <label for="r2" class="bar"></label>
            <label for="r3" class="bar"></label>
            <label for="r4" class="bar"></label>
            <label for="r5" class="bar"></label>
          </div>
        </div>
      </div>
      <div class="main">
        <transition mode="out-in">
          <router-view />
        </transition>
      </div>
      <div class="instructions">
        <h3>官方指南</h3>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="card">
                <div class="sliderPic">
                  <img src="../../static/images/1.png" />
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat voluptate corporis,
                    officiis
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="sliderPic">
                  <img src="../../static/images/2.png" />
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat voluptate corporis,
                    officiis
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="sliderPic">
                  <img src="../mockup1/computer_macbookpro13_front.png" />
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat voluptate corporis,
                    officiis
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="sliderPic">
                  <img src="../mockup2/phone_iphonexspacegrey_portrait.png" />
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat voluptate corporis,
                    officiis
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card">
                <div class="sliderPic">
                  <img src="../mockup2/phone_iphonexspacegrey_portrait.png" />
                </div>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat voluptate corporis,
                    officiis
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-main">
          <div class="left-footer">
            <img src="../../static/images/logo.png" width="200px" @click="toStudio"/>
            <p>© Yyyy</p>
          </div>
          <div class="right-footer">
            <ul>
              <li>法律条款</li>
              <li>隐私政策</li>
            </ul>
            <ul>
              <li>商务合作</li>
              <li>客户端</li>
              <li>用户协议</li>
              <li>关于我们</li>
            </ul>
            <ul>
              <li>联系我们</li>
              <li>成为作者</li>
              <li>常见问题</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Homepage",
  data() {
    return {
      accountvip: false,
      accountname: "",
      accounturl: "",
      message:
        "早く図書館を見学しに来てください!!",
      width: "10em",
      account: "",
      password: "",
      isLogin: false,
      showPositionValue: false,
      position: "center",
      toastText: ""
    };
  },
  mounted: function() {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      initialSlide: 2,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "3.3",
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
    setInterval(function() {
      if ($("#r1").prop("checked")) {
        $("#r2").prop("checked", true);
      } else if ($("#r2").prop("checked")) {
        $("#r3").prop("checked", true);
      } else if ($("#r3").prop("checked")) {
        $("#r4").prop("checked", true);
      } else if ($("#r4").prop("checked")) {
        $("#r5").prop("checked", true);
      } else if ($("#r5").prop("checked")) {
        $("#r1").prop("checked", true);
      }
    }, 10000);
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 400) {
        $(".left-bar").css("position", "fixed");
        $(".left-bar").css("top", "340px");
        $(".top-nav #logo").css("opacity", "0.6");
        $(".top-nav #logo").css("clip-path", "circle(47px at 0% 50%");
      } else {
        $(".left-bar").css("position", "absolute");
        $(".left-bar").css("top", "650px");
        $(".top-nav #logo").css("opacity", "1");
        $(".top-nav #logo").css("clip-path", "circle(150px at 0% 50%");
      }
      if ($(window).scrollTop() >= 3680) {
        $(".left-bar").css("opacity", "0");
        $(".left-bar").css("visibility", "hidden");
      } else {
        $(".left-bar").css("opacity", "1");
        $(".left-bar").css("visibility", "visible");
      }
    });
    $(".return").hover(
      function() {
        $(".return img").attr("src", "../../static/images/return1.png");
      },
      function() {
        $(".return img").attr("src", "../../static/images/return.png");
      }
    );
    $(".slide").hover(
      function() {
        $(".slide .content")
          .stop()
          .slideDown();
      },
      function() {
        $(".slide .content")
          .stop()
          .slideUp();
      }
    );
    $(".right-bar .service").hover(
      function() {
        $(".right-bar .service img").attr(
          "src",
          "../../static/images/service1.png"
        );
      },
      function() {
        $(".right-bar .service img").attr(
          "src",
          "../../static/images/service.png"
        );
      }
    );
    var that = this;
    $(".login").hover(function() {
      if (that.isLogin) {
        $(".my-menu").css("visibility", "visible");
        $(".my-menu").css("opacity", "1");
        $('.login').css("opacity","0.7");
      }
    });
    $(".body").hover(function() {
      if (that.isLogin && $(".my-menu").is(":visible")) {
        $(".my-menu").css("visibility", "hidden");
        $(".my-menu").css("opacity", "0");
        $('.login').css("opacity","1");
      }
    });
  },
  methods: {
    move(i) {
      switch (i) {
        case 0:
          $(".top-nav .menu .animation").css("left", "40px");
          this.$router.push("/Homepage/Hotnews");
          $(".top-nav-hidden").css("height", "0px");
          $(".top-nav").css("top", "0px");
          $(".body").css("padding-top", "0px");
          break;
        case 1:
          if (this.isLogin) {
            this.$router.push({
              name: "Subscription",
              params: {
                account: this.accounturl,
                name: this.accountname,
                status: this.accountvip
              }
            });
            $(".top-nav .menu .animation").css("left", "154px");
            $(".top-nav-hidden").css("height", "0px");
            $(".top-nav").css("top", "0px");
            $(".body").css("padding-top", "0px");
          } else {
            this.toastText = `☺ログインしてください~~`;
            this.showPositionValue = true;
          }
          break;
        case 2:
          $(".top-nav .menu .animation").css("left", "268px");
          this.$router.push("/Scheme");
          $(".top-nav-hidden").css("height", "0px");
          $(".top-nav").css("top", "0px");
          $(".body").css("padding-top", "0px");
          break;
        case 3:
          $(".top-nav .menu .animation").css("left", "382px");
          $(".top-nav-hidden").css("height", "0px");
          $(".top-nav").css("top", "0px");
          $(".body").css("padding-top", "0px");
          break;
        case 4:
          $(".top-nav .menu .animation").css("left", "496px");
          $(".top-nav-hidden").css("height", "0px");
          $(".top-nav").css("top", "0px");
          $(".body").css("padding-top", "0px");
          break;
      }
    },
    invest() {
      if (!this.isLogin) {
        this.width = "10em";
        this.toastText = "☺ログインしてください~";
        this.showPositionValue = true;
      }
    },
    login() {
      if (!this.isLogin) {
        $("#login").css("z-index", "1000");
        $("#login").css("opacity", "1");
        $("#login .account").css("display", "block");
      }
    },
    logout() {
      this.$router.push("/Hotnews");
      location.reload();
    },
    //登录
    submit() {
      var account = this.account;
      var password = this.password;
      if (account === "" || password === "") {
        this.width = "10em";
        this.toastText = "アカウントとパスワードを空にすることはできません！";
        this.showPositionValue = true;
      } else {
        if (account === "u1" && password === "pass1") {
          this.accountvip = true;
          this.isLogin = true;
          this.width = "10em";
          (this.accountname = `SPURA`),
            (this.accounturl = `../../static/images/author.jpg`);
          this.toastText = "☺您好,SPURA大大~";
          this.showPositionValue = true;
          $("#login").css("z-index", "-1");
          $("#login").css("opacity", "0");
          $("#login .account").css("display", "none");
          $(".top-nav .btn-bg img").attr("src", this.accounturl);
          $(".top-nav .btn-bg img").css("width", "100%");
          $(".top-nav .btn-bg img").css("height", "100%");
        } else if (account === "admin" && password === "admin123") {
          this.accountvip = false;
          this.isLogin = true;
          this.width = "10em";
          (this.accountname = `Langwenpeng`),
            (this.accounturl = `../../static/images/author1.jpg`);
          this.toastText = "☺您好,管理员大大~";
          this.showPositionValue = true;
          $("#login").css("z-index", "-1");
          $("#login").css("opacity", "0");
          $("#login .account").css("display", "none");
          $(".top-nav .btn-bg img").attr("src", this.accounturl);
          $(".top-nav .btn-bg img").css("width", "100%");
          $(".top-nav .btn-bg img").css("height", "100%");
        } else {
          (this.width = "10em"), (this.toastText = "账号或密码错误！");
          this.showPositionValue = true;
        }
      }
    },
    backpack() {
      $("#login").css("z-index", "-1");
      $("#login").css("opacity", "0");
      $("#login .account").css("display", "none");
    },
    toTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    },
    copy() {
      var message = this.message;
      var input = document.getElementById("message");
      input.value = message;
      input.select();
      document.execCommand("copy");
      this.width = "40em";
      this.toastText =
        "このサイトのアドレスをコピーしました。早く仲間に共有して、宝の場所を見に来てください。最後に応援ありがとうございました~";
      this.showPositionValue = true;
    },
    fade() {
      if ($(".top-nav-hidden").height() === 0) {
        $(".top-nav-hidden").css("height", "280px");
        $(".top-nav").css("top", "280px");
        $(".body").css("padding-top", "280px");
      } else {
        $(".top-nav-hidden").css("height", "0px");
        $(".top-nav").css("top", "0px");
        $(".body").css("padding-top", "0px");
      }
    },
    toStudio(){
      this.$router.push('/Studio/Introduction');
    }
  }
};
</script>

<style scoped>
@import "../swiper.min.css";
#Homepage {
  position: relative;
  height: 200px;
  width: 100%;
}
.body {
  transition: 0.7s;
}
#login {
  transition: 0.4s;
  width: 100%;
  opacity: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
#login .account {
  display: none;
  border-radius: 3px;
  width: 400px;
  height: 490px;
  background: #232222;
  position: relative;
  animation: emerge 0.7s ease forwards;
}
@keyframes emerge {
  0% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(0px);
  }
}
#login .account .return {
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
#login .account .logo {
  width: 170px;
  height: 55px;
  margin: 40px auto 30px;
}
#login .account #account {
  font-size: 16px;
  color: rgb(79, 172, 226);
  position: absolute;
  top: 150px;
  left: 34px;
}
#login .account #password {
  font-size: 16px;
  color: rgb(79, 172, 226);
  position: absolute;
  top: 226px;
  left: 34px;
}
#login .account .return img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#login .account .input {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  width: 400px;
}
#login .account .input input {
  box-sizing: border-box;
  transition: 0.5s;
  border-radius: 2px;
  border: 0.5px transparent solid;
  height: 60px;
  width: 360px;
  background: #171514;
  color: #fff;
  font-size: 16px;
  padding-left: 70px;
}
#login .account .input input:focus {
  background: #232222;
  border: 0.5px #fff solid;
}
#login .account .options {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 350px;
  border-bottom: #333 1px solid;
}
#login .account .options .forget {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  width: 80px;
  height: 100%;
}
#login .account .options .forget strong {
  transition: 0.5s;
}
#login .account .options .forget :hover {
  color: gold;
}
#login .account .options .others {
  width: 110px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
#login .account .options .others .box {
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 18px;
  width: 50px;
  height: 40%;
  background: black;
  cursor: pointer;
}
#login .account .options .others .box:nth-child(1) {
  opacity: 0.7;
}
#login .account .options .others .box:nth-child(1):hover {
  opacity: 1;
}
#login .account .options .others .box:nth-child(2) {
  color: rgb(214, 5, 5);
}
#login .account .options .others .box:nth-child(2):hover {
  color: black;
  background: rgb(214, 5, 5);
}
#login .account .alternate {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 90%;
  margin: 10px auto;
}
#login .account .alternate h4 {
  color: silver;
}
#login .account .alternate .icons {
  display: flex;
  justify-content: space-evenly;
  height: 30px;
  width: 50%;
  align-items: center;
}
#login .account .alternate .icons .icon {
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  border: black 1px solid;
}
#login .account .alternate .icons .icon:nth-child(1):hover {
  background: #339fed;
}
#login .account .alternate .icons .icon:nth-child(2):hover {
  background: green;
}
#login .account .alternate .icons .icon:nth-child(3):hover {
  background: rgb(214, 5, 5);
}
#login .account .alternate .icons .icon img {
  width: 28px;
  object-fit: cover;
}
.left-bar {
  z-index: 2;
  top: 650px;
  left: 200px;
  position: absolute;
  width: 50px;
  height: 250px;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s;
}
.right-bar {
  z-index: 2;
  bottom: 15px;
  right: 25px;
  position: fixed;
  width: 50px;
  height: 100px;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left-bar small {
  font-size: 0.8em;
  font-weight: 500;
  color: grey;
  margin-top: 7px;
  margin-bottom: 15px;
}
.right-bar .service {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  width: 37px;
  height: 37px;
  background: #232222;
  border-radius: 50%;
  border: 1px solid black;
}
.right-bar .top {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #232222;
  border-radius: 50%;
  border: 1px solid black;
}
.right-bar .top img {
  transition: 0.5s;
  filter: opacity(0.2);
}
.right-bar .top:hover img {
  filter: opacity(1);
}
.right-bar .service:hover {
  background: #f94135;
}
.invest {
  cursor: pointer;
  background: #373737;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.invest:hover img {
  transform: rotate(-45deg);
  filter: brightness(160%);
  filter: grayscale(0);
  filter: opacity(1);
}
.invest img {
  transition: 0.5s;
  filter: grayscale(80%);
  filter: opacity(0.17);
}
.left-bar .box {
  cursor: pointer;
  width: 20px;
}
.left-bar .qrcode {
  position: relative;
}
.left-bar .qrcode:hover::before {
  opacity: 0.8;
  transform: translateX(0px);
}
.left-bar .qrcode:hover::after {
  opacity: 0.75;
  transform: translateX(0px);
}
.left-bar #message {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -999;
}
.left-bar .qrcode::before {
  transform: translateX(-30px);
  content: "";
  height: 95px;
  width: 100px;
  position: absolute;
  left: -120px;
  top: -40px;
  background: url("../../static/images/qrcode.jpg");
  background-size: 100% auto;
  opacity: 0;
  transition: 0.4s ease-in-out;
}
.left-bar .qrcode::after {
  transform: translateX(-30px);
  content: "";
  position: absolute;
  left: -20px;
  top: 0px;
  width: 0px;
  height: 0px;
  border: 10px solid;
  border-color: transparent transparent transparent #fff;
  opacity: 0;
  transition: 0.4s ease-in-out;
}
.left-bar .box img {
  transition: 0.4s;
}
.left-bar .box:hover img {
  filter: opacity(0.6);
}
.top-nav-hidden {
  z-index: 999;
  overflow: hidden;
  height: 0px;
  width: 100%;
  position: fixed;
  background: #333;
  display: flex;
  justify-content: center;
  transition: 0.7s;
}
.top-nav-hidden ul {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}
.top-nav-hidden ul li {
  margin-top: 30px;
  font-size: 0.78em;
  color: #fff;
  opacity: 0.5;
  transition: 0.5s;
  font-weight: bold;
  cursor: pointer;
}
.top-nav-hidden ul li:hover {
  opacity: 1;
}
.top-nav {
  z-index: 999;
  position: fixed;
  background: #232222;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #171514;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  transition: 0.7s;
}
.top-nav .nav {
  width: 100%;
  position: relative;
}
.top-nav #logo {
  transition: 1s;
  position: absolute;
  left: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  clip-path: circle(150px at 0% 50%);
  -webkit-clip-path: circle(150px at 0% 50%);
}
.top-nav #logo img {
  height: 45px;
  cursor: pointer;
}
.top-nav .menu {
  transition: 0.6s;
  position: relative;
  margin: 0px auto;
  width: 600px;
}
.menu-hidden {
  transition: 0.6s;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
}
.menu-hidden:hover {
  opacity: 1;
}
.menu-hidden img {
  object-fit: cover;
  width: 100%;
}
.top-nav ul {
  display: flex;
  flex-direction: row;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  list-style: none;
}
.top-nav ul li {
  margin-right: 16px;
  line-height: 60px;
  width: 98px;
  cursor: pointer;
  height: 60px;
  justify-content: space-around;
  display: flex;
  align-items: center;
  transition: 0.4s;
}
.top-nav ul li:hover {
  background: black;
}
.top-nav ul li img {
  height: 20px;
}
.top-nav .menu .animation {
  position: absolute;
  height: 5px;
  left: 40px;
  width: 98px;
  bottom: 1px;
  z-index: 1;
  background: #1abc9c;
  border-radius: 8px;
  transition: all 0.7s ease 0s;
}
.search-box {
  position: absolute;
  top: 0%;
  height: 60px;
  display: flex;
  align-items: center;
  right:250px;
}
.search-btn {
  color: #e84118;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}
a {
  text-decoration: none;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 3px;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
}
.search-box:hover > .search-txt {
  border-radius: 25px;
  border: 0.2px silver solid;
  width: 110px;
  padding: 0 6px;
}
.search-box:hover > .search-btn {
  background: white;
}
.top-nav .login {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0px;
  right: 150px;
  height: 60px;
  width: 90px;
  transition:.5s;
}
.top-nav .btn-bg {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
  background: rgb(192, 192, 192, 0.5);
}
.top-nav .btn-bg img {
  object-fit: cover;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.top-nav .btn-bg:hover {
  background: #0f6453;
}
.my-menu {
  position: fixed;
  right: 155px;
  z-index: 1000;
  top: 59px;
  width: 80px;
  background: #232222;
  border: 1px solid #373737;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: 1s;
}
.my-menu ul {
  width: 100%;
  height: 250px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my-menu ul li {
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: #cac3c3;
  line-height: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  font-size: 12px;
  transition: 0.5s;
}
.my-menu ul li:hover {
  color: #fff;
  background: #333;
}
.my-menu ul li:nth-child(5):hover {
  color: #f94135;
  background: #333;
}
.slidebody {
  transition: 0.7s;
  top: 60px;
  position: relative;
  height: 500px;
  width: 100%;
  background: #0f6453;
}
.slidebody .background-wall1 {
  width: 100%;
  height: 300px;
  background: linear-gradient(0deg, #171514, #171514);
}
.slidebody .background-wall2 {
  width: 100%;
  height: 200px;
  background: #232222;
}
.slidershow {
  width: 750px;
  height: 400px;
  overflow: hidden;
}
.middle {
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.navigation {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
}
.bar {
  top: 50px;
  width: 50px;
  height: 10px;
  border: 2px solid #fff;
  margin: 6px;
  cursor: pointer;
  transition: 0.4s;
}
.bar:hover {
  background: #fff;
}
input[name="r"] {
  position: absolute;
  visibility: hidden;
}
.slides {
  width: 500%;
  height: 500%;
  display: flex;
}
.slide {
  cursor: pointer;
  width: 20%;
  transition: 0.6s;
}
.slide:hover img {
  opacity: 0.6;
  transform: scale(1.2);
}
.slide .content {
  z-index: 1;
  position: absolute;
  height: 60%;
  width: 100%;
  background: rgb(255, 255, 255, 0.6);
  bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.slide .content .title {
  font-size: 2em;
  font-weight: 600;
  color: #232222;
}
.slide .content .sub-title {
  margin-top: 5px;
  width: 80%;
  font-size: 18px;
  letter-spacing: 2px;
}
.slide .content button {
  height: 30px;
  padding: 7px 15px;
  font-size: 17px;
  background-color: #e74c3c;
  color: white;
  font-weight: 500;
  border: none;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.3s ease;
}
.slide .content button:hover {
  transform: scale(0.9); /*变大1.1倍*/
  background: #e64533;
}
.slide img {
  transition: 0.4s ease;
  width: 100%;
}
#r1:checked ~ .s1 {
  margin-left: 0;
}
#r2:checked ~ .s1 {
  margin-left: -20%;
}
#r3:checked ~ .s1 {
  margin-left: -40%;
}
#r4:checked ~ .s1 {
  margin-left: -60%;
}
#r5:checked ~ .s1 {
  margin-left: -80%;
}
.main {
  position: relative;
  width: 100%;
  background: #232222;
  min-height: 400px;
  margin-top: 50px;
  transition: 0.7s;
}
.slidehead {
  position: absolute;
  top: 0%;
  left: 30%;
}
.slidehead h1 {
  position: relative;
  color: #232222;
  transition: 0.4s;
  cursor: pointer;
}
.slidehead h1:hover {
  color: white;
}
.slidehead h1:after {
  content: "☆ Daily Recommend:";
  color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
  clip-path: circle(30px at 0% 50%);
  -webkip-clip-path: circle(30px at 0% 50%);
  animation: light 7s infinite;
}
@keyframes light {
  0% {
    clip-path: circle(30px at 0% 50%);
    -webkip-clip-path: circle(100px at 0% 50%);
  }

  50% {
    clip-path: circle(30px at 100% 50%);
    -webkip-clip-path: circle(100px at 100% 50%);
  }

  100% {
    clip-path: circle(30px at 0% 50%);
    -webkip-clip-path: circle(100px at 0% 50%);
  }
}
.instructions .card {
  box-shadow: 0 20px 20px black;
  position: relative;
  background: #dddddd;
  width: 240px;
  height: 280px;
  margin: 0 auto;
  border-radius: 10px;
}
.instructions .card .content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 7px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: #dddddd;
  font-family: "Poppins", san-serif;
  height: 110px;
  position: absolute;
  bottom: 0px;
  transition: 0.3s;
}
.instructions h3 {
  letter-spacing: 2px;
  color: #cac3c3;
  margin: 30px;
}
.instructions {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background: #232222;
  height: 420px;
}
.instructions .swiper-container {
  width: 60%;
}
.instructions .card .content a {
  display: inline-block;
  padding: 5px 20px;
  text-decoration: none;
  border: 2px solid #262626;
  color: black;
  font-weight: 600;
}
.instructions .card .sliderPic {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
}
.instructions .card:hover .content {
  height: 130px;
}
.instructions .card .sliderPic img {
  transition: 0.5s;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.instructions .card:hover .sliderPic img {
  transform: scale(1.2);
  opacity: 0.8;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: black 1px solid;
  width: 100%;
  height: 250px;
  background: #292525;
}
.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 80%;
}
.left-footer {
  position: relative;
  width: 320px;
  height: 165px;
}
.left-footer p {
  position: absolute;
  font-size: 7px;
  color: #cac3c3;
  margin: 0px;
  left: 17px;
  bottom: 20px;
}
.left-footer img {
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 17px;
}
.right-footer {
  color: #cac3c3;
  width: 420px;
  height: 144px;
  display: flex;
  justify-content: space-around;
}
.right-footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.right-footer ul li {
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  margin-bottom: 15px;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.7s;
}
@media screen and (max-width: 1324px) {
  .top-nav #logo,
  .left-bar {
    left: 70px;
  }
}
@media screen and (max-width: 1140.8px) {
  .top-nav .menu {
    opacity: 0;
    visibility: hidden;
  }
  .menu-hidden {
    opacity: 0.5;
    visibility: visible;
  }
  .left-bar {
    display: none;
  }
}
@media screen and (max-width: 800px) {
  .footer {
    height: 500px;
  }
  .instructions .swiper-container {
    width: 80%;
  }
  .footer-main {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .left-footer img {
    left: 50%;
    transform: translate(-50%);
  }
  .slidershow {
    width: 95%;
    height: 300px;
  }
  .slide .content {
    height: 90px;
  }
  .slide .content .title {
    font-size: 2vh;
  }
  .slide .content .sub-title {
    display: none;
  }
  .slidehead {
    top: 5%;
    left: 5%;
  }
  .slidehead h1 {
    font-size: 5vh;
  }
  .search-box {
    display: none;
  }
  .my-menu,
  .top-nav .login {
    right: 20px;
  }
}
@media screen and (max-width: 600px) {
  .top-nav #logo {
    left: 15px;
  }
  .instructions .swiper-container {
    width: 95%;
  }
}
@media screen and (max-width: 490px) {
  .top-nav #logo img {
    height: 45px;
  }
  .top-nav .nav .menu {
    display: none;
  }
  .top-nav .nav .search-box {
    display: none;
  }
  #login .account {
    width: 300px;
  }
  #login .account .input {
    width: 300px;
  }
  #login .account .input input {
    width: 95%;
  }
  #login .account .options {
    width: 280px;
  }
  .right-footer {
    width: 320px;
  }
  .instructions .card {
    width: 180px;
    height: 215px;
  }
  .instructions .card .content {
    height: 80px;
  }
  .instructions .card .content:hover {
    height: 100px;
  }
}
</style>