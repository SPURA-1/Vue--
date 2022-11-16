<template>
  <div id="Studio">
    <div class="left-col">
      <div class="headbgc"></div>
      <div class="head">
        <div class="studio">
          <img src="../../static/images/studio.png" />
        </div>
        <span id="name" @click="Introduction">SPURA</span>
        <div class="nav">
          <p @click="Update">更新ログ</p>
          <p @click="Thanks">特別に感謝</p>
          <p @click="homepage">トップページ</p>
        </div>
        <div class="links">
          <div class="link" title="图片查看">
            <img src="../../static/images/相册.png" />
          </div>
          <div class="link" title="git仓库翻翻代码">
            <img src="../../static/images/Git.png" />
          </div>
          <div class="link" title="向作者问好">
            <img src="../../static/images/邮箱.png" />
          </div>
          <div class="link" title="切换主题" @click="cTheme">
            <img src="../../static/images/moon.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="right-col">
      <div class="main">
        <transition name="fade" mode="out-in">
          <router-view ref="child" :isKnight="isKnight"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Studio",
  data(){
    return {
      isKnight:false
    }
  },
  methods: {
    homepage() {
      this.$router.push("/Hotnews");
    },
    Introduction() {
      this.$router.push("/Studio/Introduction");
    },
    Update() {
      this.$router.push("/Studio/Update");
    },
    Thanks(){
      this.$router.push("/Studio/Thanks");
    },
    cTheme() {
      this.isKnight=!this.isKnight;
      if(this.isKnight){
        $(".left-col").css("background-color", "rgb(51, 51, 51)");
        $("#Studio").css("background-color", "rgb(13, 13, 13)");
        $(".left-col .head p").css("color", "rgb(234, 234, 234)");
        $(".left-col .head #name").css("color", "rgba(255, 255, 255, 0.6)");
        this.$refs.child.parentMethod(0);
      } else {
        $(".left-col").css("background-color", "rgb(255, 255, 255)");
        $("#Studio").css("background-color", "rgb(234, 234, 234)");
        $(".left-col .head p").css("color", "rgb(105, 105, 105)");
        $(".left-col .head #name").css("color", "#696969");
        this.$refs.child.parentMethod(1);
      }
    }
  }
};
</script>

<style scoped>
#Studio {
  background: #eaeaea;
  width: 100%;
  align-items: stretch;
  transition: 1s;
}
#name {
  cursor: pointer;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  text-align: center;
  font-family: Roboto, serif;
  width: 200px;
  font-weight: 400;
  font-size: 30px;
  top: 200px;
  color: #696969;
  transition: 0.3s;
}
.left-col {
  position: relative;
  float: left;
  height: 100vh;
  width: 300px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s;
}
.left-col .headbgc {
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0;
  background: #4d4d4d;
}
.left-col .head {
  height: 80vh;
  width: 100%;
  position: relative;
  transition: 1s;
}
.left-col .head .studio {
  z-index: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 40px;
  width: 118px;
  height: 118px;
  border: 5px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.left-col .head .studio img {
  width: 150%;
  height: auto;
}
.left-col .head .nav {
  position: absolute;
  top: 330px;
  height: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transform: translateX(-50%);
  left: 50%;
}
.left-col .head .nav p {
  position: relative;
  cursor: pointer;
  margin: 0;
  font-size: 14px;
  color: #696969;
  transition: 0.3s;
}
.left-col .head .nav p::before {
  content: "";
  position: absolute;
  height: 1px;
  width: 0px;
  background: #b0a0aa;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0px;
  transition: 0.4s;
}
.left-col .head .nav p:hover::before {
  width: 100%;
}
.left-col .head .nav p:hover,
#name:hover {
  color: #b0a0aa;
}
.links {
  width: 170px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  top: 480px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links .link {
  box-sizing: border-box;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #d1d1d1;
  transition: 1s;
}
.links .link:hover {
  animation: rotate 1s linear infinite;
}
.links .link:hover:nth-child(1) {
  background: #34baad;
}
.links .link:hover:nth-child(2) {
  background: #afb6ca;
}
.links .link:hover:nth-child(3) {
  background: #ef7522;
}
.links .link:hover:nth-child(4) {
  background: #005a87;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.links .link img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.right-col {
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.right-col .main {
  width: 97%;
  height: 100vh;
}
.fade-enter-active {
  animation: bounceIn 0.7s ease-out;
  transform-origin: 50% 0%;
}
@keyframes bounceIn {
  0% {
    opacity: 0.6;
    transform: scaleY(0.1);
  }
  40% {
    transform: scaleY(1.02);
  }
  60% {
    transform: scaleY(0.98);
  }
  80% {
    transform: scaleY(1.01);
  }
  100% {
    transform: scaleY(0.98);
  }
  80% {
    transform: scaleY(1.01);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
@media screen and (max-width: 800px) {
  #Studio {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right-col::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .left-col {
    width: 99%;
    float: none;
    height: 50vh;
    border: 1px solid #d1d1d1;
    background: rgb(241, 241, 241);
  }
  .left-col .headbgc {
    height: 130px;
  }
  .right-col {
    width: 99%;
    overflow: visible;
    height: initial;
  }
  .right-col .main {
    width: 100%;
  }
  .left-col .head {
    height: 100%;
  }
  .left-col .head .nav {
    flex-direction: row;
    top: 300px;
    height: auto;
  }
  .left-col .head .nav p {
    padding: 5px 25px;
    border: 1px solid #a0a0a0;
    font-size: 14px;
    white-space: nowrap;
  }
  .left-col .head .links {
    top: 240px;
  }
  .left-col .head .nav p:nth-child(1) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: 0px;
  }
  .left-col .head .nav p:nth-child(3) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 0px;
  }
  .left-col .head .nav p:hover::before {
    width: 0px;
  }
}
@media screen and (max-width: 399px) {
  .left-col {
    height: 60vh;
  }
}
</style>