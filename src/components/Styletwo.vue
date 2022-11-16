<template>
  <div id="Styletwo">
    <div class="box">
      <div class="imgBx">
        <img :src="info[i].picurl" width="180px" />
      </div>
      <div class="content">
        <h3>{{info[i].title}}</h3>
        <p>{{info[i].intro}}</p>
        <a>Read More</a>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img :src="info[i+1].picurl" width="180px" />
      </div>
      <div class="content">
        <h3>{{info[i+1].title}}</h3>
        <p>{{info[i+1].intro}}</p>
        <a>Read More</a>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img :src="info[i+2].picurl" width="180px" />
      </div>
      <div class="content">
        <h3>{{info[i+2].title}}</h3>
        <p>{{info[i+2].intro}}</p>
        <a>Read More</a>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img :src="info[i+3].picurl" width="180px" />
      </div>
      <div class="content">
        <h3>{{info[i+3].title}}</h3>
        <p>{{info[i+3].intro}}</p>
        <a>Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Styletwo",
  props:{
    info:Array
  },
  data(){
    return {
      i:0
    }
  }
};
</script>


<style scoped>
#Styletwo {
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  position: relative;
  width: 100%;
  height: 270px;
  /*background: wheat;*/
}
.box {
  font-family: consolas;
  position: relative;
  width: 176.788px;
  height: 100%;
  background: #DDDDDD;
  overflow: hidden;
}
.box .imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  clip-path: circle(400px at center 100px);
  transition: 0.5s;
  transition-delay: 0.5s;
}
.box .imgBx img {
  transition: 0.5s;
}
.box:hover .imgBx {
  clip-path: circle(40px at center 100px);
}
.box:hover .imgBx img {
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.1);
}
.box .content {
  cursor:default;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 55%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  font-size: 12px;
}
.box .content h3 {
  margin: 0;
  padding: 0;
}
.box .content a {
  text-decoration: none;
  background: #000;
  color: #fff;
  padding: 5px;
  display: inline-block;
}
.box .content h3,
.box .content p,
.box .content a {
  opacity: 0;
  transition: 0.5s;
  transform: translateY(20px);
}
.box:hover .content h3 {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.5s;
}
.box:hover .content p {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.7s;
}
.box:hover .content a {
  cursor:pointer;
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.9s;
}
@media screen and (max-width:1030px) {
  #Styletwo{
    justify-content: space-around;
    width:450px;
  }
}
@media screen and (max-width:499px) {
  #Styletwo{
    justify-content: space-around;
    width:350px;
  }
  .box{
    width:48%;
  }
}
</style>
