<template>
  <div id="Styleone">
    <div class="left-box">
      <div class="pic">
        <img :src="info[i].picurl" />
      </div>
      <div class="body">
        <div class="title">
          <h2>{{info[i].title}}</h2>
        </div>
        <div class="content">
          <p>{{info[i].intro}}</p>
          <div class="button">
            <b>Read More</b>
          </div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="top-box">
        <div class="small-box">
          <div class="pic">
            <img :src="info[i+1].picurl" />
          </div>
          <div class="body">
            <div class="title">
              <h4>{{info[i+1].title}}</h4>
            </div>
            <div class="content">
              <p>{{info[i+1].intro}}</p>
              <div class="button">
                <b>Read More</b>
              </div>
            </div>
          </div>
        </div>
        <div class="small-box">
          <div class="pic">
            <img :src="info[i+2].picurl" />
          </div>
          <div class="body">
            <div class="title">
              <h4>{{info[i+2].title}}</h4>
            </div>
            <div class="content">
              <p>{{info[i+2].intro}}</p>
              <div class="button">
                <b>Read More</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <div class="small-box">
          <div class="pic">
            <img :src="info[i+3].picurl" />
          </div>
          <div class="body">
            <div class="title">
              <h4>{{info[i+3].title}}</h4>
            </div>
            <div class="content">
              <p>{{info[i+3].intro}}</p>
              <div class="button">
                <b>Read More</b>
              </div>
            </div>
          </div>
        </div>
        <div class="small-box">
          <div class="pic">
            <img :src="info[i+4].picurl" />
          </div>
          <div class="body">
            <div class="title">
              <h4>{{info[i+4].title}}</h4>
            </div>
            <div class="content">
              <p>{{info[i+4].intro}}</p>
              <div class="button">
                <b>Read More</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stylenone",
  data() {
    return {
      i: 0,
    };
  },
  props: {
    info: Array
  },
};
</script>


<style scoped>
#Styleone {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  width: 100%;
  min-height: 270px;
}
.left-box {
  font-family: consolas;
  position: relative;
  /*background: violet;*/
  width: 288.64px;
  height: 270px;
}
.right-box {
  font-family: consolas;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  /*background:violet;*/
  width: 425.74px;
  height: 270px;
}
.top-box,
.bottom-box {
  display: flex;
  justify-content: space-between;
  /*background:white;*/
  height: 49%;
  width: 100%;
}
.small-box {
  position: relative;
  /*background: tomato;*/
  width: 49.5%;
  height: 100%;
}
.pic {
  margin-top: 0px;
  position: relative;
  width: 100%;
  height: 80%;
  overflow: hidden;
}
.pic img {
  transition: 0.7s;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.left-box:hover .pic img {
  opacity: 0.8;
  transform: scale(1.2);
}
.small-box:hover .pic img {
  opacity: 0.8;
  transform: scale(1.2);
}
.left-box .body {
  position: absolute;
  bottom: 0px;
  overflow: hidden;
  width: 100%;
  min-height: 20%;
}
.left-box .body .title {
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  background: #dddddd;
}
.left-box .body .title h4 {
  margin: 0;
}
.left-box .body .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dddddd;
  transition: 0.5s;
  width: 100%;
  height: 0px;
  overflow: hidden;
}
.left-box:hover .body .content {
  overflow: hidden;
  height: 90px;
}
.left-box .body .content p {
  cursor: default;
  margin: 0;
  width: 80%;
  height: 50px;
  margin-bottom: 5px;
}
.left-box .body .content .button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  color: white;
  background: #e42517;
}
.small-box .body .title {
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  background: #dddddd;
}
.small-box .body {
  position: absolute;
  bottom: 0px;
  overflow: hidden;
  width: 100%;
}
.small-box .body .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dddddd;
  transition: 0.5s;
  width: 100%;
  height: 0px;
  overflow: hidden;
}
.small-box:hover .body .content {
  overflow: hidden;
  height: 60px;
}
.small-box .body .content p {
  cursor: default;
  font-weight: 600;
  font-size: 10px;
  margin: 0;
  width: 80%;
  height: 30px;
  margin-bottom: 5px;
}
.small-box .body .content .button {
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 20px;
  color: white;
  background: brown;
}
@media screen and (max-width: 1012px) {
  #Styleone {
    justify-content: center;
  }
  .left-box {
    width: 425.74px;
  }
}
@media screen and (max-width:499px) {
  .left-box{
    width:350px;
  }
  .right-box{
    width:350px;
  }
  .right-box .small-box .body .title{
    font-size:0.6em;
  }
}
</style>
