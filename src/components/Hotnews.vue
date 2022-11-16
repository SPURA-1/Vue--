<template>
  <div id="Hotnews">
    <div id="navigation">
      <div class="link" v-for="(link,index) in projects" :key="link.title" @click="toScroll(index)">
        <div class="decoration"></div>
        <p>{{link.title}}</p>
      </div>
    </div>
    <div id="remarks">
      <h1>Yyyy Library:A good day starts with reading！</h1>
      <div id="author">
        <img src="../../static/images/author.jpg" />
      </div>
      <p class="name">SPURA</p>
      <div class="status">
        <img src="../../static/images/status.png" height="18px" />
        <p>红V认证！</p>
      </div>
      <p class="hint">
        Founded in
        <i>2022.11.11</i>
      </p>
    </div>
    <blockquote class="intro">
      <strong>体验不极致:</strong> Yyyy library还有很多问题，远远不够完美，但是我一直在努力解决。如果你在体验并且觉得有一些问题，不妨点击右栏反馈,我乐意为此请您喝一杯Coffee!
      <br />
      <strong>维护靠个人:</strong> 没有团队维护，毕竟也只能请得起这种前端小白来维持运营了。但是,谁又不是从一个小白慢慢成长为一个大触呢?
    </blockquote>
    <transition-group>
      <div class="project" v-for="(project,i) in projects" :key="project.title">
        <div class="pro-title">
          <img v-lazy="project.url" height="30px" />
          <p>{{project.title}}</p>
          <div class="refresh" @click="refresh(i)">
            <img src="../../static/images/refresh.png" height="15px" />
            <p>换一换</p>
          </div>
          <div class="more">
            <p>更多内容</p>
            <img src="../../static/images/more.png" height="15px" />
          </div>
        </div>
        <div class="pro-main">
          <component :is="soncomp(i)" :info="project.arr"></component>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>

import Styleone from "@/components/Styleone.vue";
import Styletwo from "@/components/Styletwo.vue";
export default {
  name: "Hotnews",
  components: {
    Styleone,
    Styletwo
  },
  mounted: function() {
    var that = this;
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 450 && $(window).scrollTop() <= 3680) {
        $("#navigation").css("opacity", "1");
        $("#navigation").css("visibility", "visible");
      } else {
        $("#navigation").css("opacity", "0");
        $("#navigation").css("visibility", "hidden");
      }
      if($(window).scrollTop()>=700&&$(window).scrollTop()<1200){
        that.empty();
        that.fill(0);
      }
      else if($(window).scrollTop()>=1200&&$(window).scrollTop()<1500){
        that.empty();
        that.fill(1);
      }
      else if($(window).scrollTop()>=1500&&$(window).scrollTop()<1800){
        that.empty();
        that.fill(2);
      }
      else if($(window).scrollTop()>=1800&&$(window).scrollTop()<2300){
        that.empty();
        that.fill(3);
      }
      else if($(window).scrollTop()>=2300&&$(window).scrollTop()<2700){
        that.empty();
        that.fill(4);
      }
      else if($(window).scrollTop()>=2700&&$(window).scrollTop()<2900){
        that.empty();
        that.fill(5);
      }
      else if($(window).scrollTop()>=2900&&$(window).scrollTop()<3200){
        that.empty();
        that.fill(6);
      }
      else if($(window).scrollTop()>=3200&&$(window).scrollTop()<3500){
        that.empty();
        that.fill(7);
      }
      else{
        that.empty();
      }
    });
  },
  data() {
    return {
      soncomps: ["Styleone", "Styletwo"],
      destroy: true,
      projects: [
        {
          title: "强力推荐",
          url: "../../static/images/recommend.png",
          arr: [
            {
              title: "RE:从零开始的异世界生活",
              picurl: "../../static/images/S1.png",
              intro: "这一抹微笑由我来守护~ ----蕾姆"
            },
            {
              title: "鬼灭之刃",
              picurl: "../../static/images/S2.png",
              intro: "只要对自己的幸运感到知足一切照旧地活下去就可以"
            },
            {
              title: "斩!赤红之瞳",
              picurl: "../../static/images/S3.png",
              intro: "倘若上天无能制裁邪恶,我将会于黑暗之中给予消逝"
            },
            {
              title: "辉夜大小姐想让我告白",
              picurl: "../../static/images/S4.png",
              intro:
                "我的告白可能会失败,但是,明明只要你向我告白，成功率就会是100%"
            },
            {
              title: "我的青春恋爱物语果然有问题",
              picurl: "../../static/images/S5.png",
              intro: "只有弱者才喜欢扎堆，问题是绝大部分人都是弱者。 --大老师"
            },
            {
              title: "声之形",
              picurl: "../../static/images/S6.png",
              intro: "如果声音有形状，那一定是我爱你的样子。"
            },
            {
              title: "刀剑神域",
              picurl: "../../static/images/S7.png",
              intro: "当我拔出我的第二把剑时，我便要守护我的心爱之人。"
            },
            {
              title: "国家队",
              picurl: "../../static/images/S8.png",
              intro: "就算会耗尽生命,我也会在这里,陪伴在你身边。"
            },
            {
              title: "中二病也要谈恋爱",
              picurl: "../../static/images/S9.png",
              intro: "我和勇者只要还在这世上，就不能算是离别。"
            },
            {
              title: "紫罗兰永恒花园",
              picurl: "../../static/images/S10.png",
              intro: "亲爱的基尔伯特少佐 您还好吗？别来无恙吗？"
            }
          ]
        },
        {
          title: "备受关注",
          url: "../../static/images/hot.png",
          arr: [
            {
              title: "怪盗基德",
              picurl: "../../static/images/L1.png",
              intro: "小姐，希望下次能在银色的月光下再会。"
            },
            {
              title: "欢迎来到实力至上主义的教室",
              picurl: "../../static/images/L2.png",
              intro: "游戏这玩意,不感情用事就没意思了"
            },
            {
              title: "冰菓",
              picurl: "../../static/images/L3.png",
              intro: "向消耗大量能量的生活方式敬礼。"
            },
            {
              title: "在下坂本，有何贵干",
              picurl: "../../static/images/L4.png",
              intro: "就算丢掉节操,我也有不能舍弃的东西"
            },
            {
              title: "文豪野犬",
              picurl: "../../static/images/L5.png",
              intro:
                "人活着是为了能为自己寻得救赎，将死之时，就会明白这个道理的吧!"
            },
            {
              title: "进击的巨人",
              picurl: "../../static/images/L6.png",
              intro: "我会继承你的意志杀光所有的巨人。"
            },
            {
              title: "埃罗芒阿老师",
              picurl: "../../static/images/L7.png",
              intro: "本小姐就是轻小说"
            },
            {
              title: "罪恶王冠",
              picurl: "../../static/images/L8.png",
              intro:
                "我愿为你戴上王冠,即使背负上所有的罪恶与孤独,绝不让你受伤。"
            }
          ]
        },
        {
          title: "前线爆料",
          url: "../../static/images/baoliao.png",
          arr: [
            {
              title: "黑子的篮球",
              picurl: "../../static/images/S11.png",
              intro: "篮球可不是那么打的，不管怎么样使用暴力是不对的。"
            },
            {
              title: "会长是女仆大人",
              picurl: "../../static/images/S12.png",
              intro: "我是个喜欢女仆胜过一日三餐的重度宅男 "
            },
            {
              title: "路人女主的养成方法",
              picurl: "../../static/images/S13.png",
              intro: "今年的这个夏天，我邂逅了我的命运。"
            },
            {
              title: "四月是你的谎言",
              picurl: "../../static/images/S14.png",
              intro: "今年的这个夏天，我邂逅了我的命运。"
            },
            {
              title: "云之彼端，约定的地方",
              picurl: "../../static/images/S15.png",
              intro: "伸手可见的距离，却不能到达的那个地方。"
            },
            {
              title: "盾之勇者成名录",
              picurl: "../../static/images/S16.png",
              intro: "不信任、疑念、猜忌，世界上的所有人事物都是仇敌！"
            },
            {
              title: "D格雷少年",
              picurl: "../../static/images/S17.png",
              intro: "在战争之中，唯一平等的就只有痛苦--Book man"
            },
            {
              title: "海贼王",
              picurl: "../../static/images/S18.png",
              intro: "我的船下没有手下，只有伙伴。——路飞"
            },
            {
              title: "博人传",
              picurl: "../../static/images/S19.png",
              intro: "请让我做你弟子吧，我想打倒我老爸！"
            },
            {
              title: "千与千寻",
              picurl: "../../static/images/S20.png",
              intro: "曾经发生的事不可能忘记，只是暂时想不起来而已。"
            }
          ]
        },
        {
          title: "上升最快",
          url: "../../static/images/rocket.png",
          arr: [
            {
              title: "萤火之森",
              picurl: "../../static/images/L9.png",
              intro: "不管发生什么绝对不要碰我哦，说好了哦……"
            },
            {
              title: "《free!》",
              picurl: "../../static/images/L10.png",
              intro: "我会让你见到从未见过的风景！"
            },
            {
              title: "恋爱小行星",
              picurl: "../../static/images/L11.png",
              intro: "要找到小行星哦!"
            },
            {
              title: "JOJO的奇妙冒险",
              picurl: "../../static/images/L12.png",
              intro: "我迈克尔·杰克逊有一个梦想，就是成为黑人巨星！"
            },
            {
              title: "名侦探柯南",
              picurl: "../../static/images/L13.png",
              intro: "我叫江户川柯南，是个侦探。"
            },
            {
              title: "银魂",
              picurl: "../../static/images/L14.png",
              intro: "挺起胸膛，正视天空，不这样怎么算活着!"
            },
            {
              title: "青春之旅",
              picurl: "../../static/images/L15.png",
              intro: "还有 我叫马渕已经没有田中洸这个人了"
            },
            {
              title: "钢之炼金术师",
              picurl: "../../static/images/L16.png",
              intro: "假如我当上大总统!我要让全国女性都穿上迷你裙...."
            }
          ]
        },
        {
          title: "小众尝鲜",
          url: "../../static/images/coffee.png",
          arr: [
            {
              title: "CLANNAD",
              picurl: "../../static/images/S21.png",
              intro: "从现在起,我要前往你所在的地方"
            },
            {
              title: "缘之空",
              picurl: "../../static/images/S22.png",
              intro: "因为喜欢,所以会误会。因为喜欢,所以会错过。"
            },
            {
              title: "东京喰种",
              picurl: "../../static/images/S23.png",
              intro: "这世界上所有的不公平，都只是因为当事人的能力不足而导致的."
            },
            {
              title: "星之声",
              picurl: "../../static/images/S24.png",
              intro: "记忆不是一整团的，而是一个一个的抽屉，抽掉的便忘掉了。"
            },
            {
              title: "心灵想要大声呼喊",
              picurl: "../../static/images/S25.png",
              intro: "微笑拥抱每一天，做像向日葵般温暖的女子。"
            },
            {
              title: "穿越时空的少女",
              picurl: "../../static/images/S26.png",
              intro: "如果约会的人迟到了，会跑着去迎接吧"
            },
            {
              title: "天空之城",
              picurl: "../../static/images/S27.png",
              intro:
                "我们的孤独就像天空中漂浮的城市，仿佛是一个秘密，却无从述说。"
            },
            {
              title: "秒速五厘米",
              picurl: "../../static/images/S28.png",
              intro:
                "如果，樱花掉落的速度是每秒5厘米，那么两颗心需要多久才能靠近？"
            },
            {
              title: "好想告诉你",
              picurl: "../../static/images/S29.png",
              intro: "好想告诉你：365天最想为你做的就是让你更快乐"
            },
            {
              title: "未闻花名",
              picurl: "../../static/images/S30.png",
              intro: "面码，找到你了，我们仍未知道那天所看见的花的名字。"
            }
          ]
        },
        {
          title: "人气排行",
          url: "../../static/images/sort.png",
          arr: [
            {
              title: "公主连结RE:Div",
              picurl: "../../static/images/L17.png",
              intro: "盘子里有虫子的时候，一般都会连盘子一起丢掉不是吗！"
            },
            {
              title: "格莱普尼尔",
              picurl: "../../static/images/L18.png",
              intro: "没事的,修一,放轻松"
            },
            {
              title: "神之塔",
              picurl: "../../static/images/L19.png",
              intro: "神之塔,昆,请多多指教!"
            },
            {
              title: "星掠者",
              picurl: "../../static/images/L20.png",
              intro: "有人还在等我回去!"
            },
            {
              title: "某科学的超电磁炮T",
              picurl: "../../static/images/L21.png",
              intro: "你以为我是谁？这是我埋下的因，我要亲手解决这一切。"
            },
            {
              title: "昨日之歌",
              picurl: "../../static/images/L22.png",
              intro: "但也是第一次想要被人喜欢!"
            },
            {
              title: "终结的炽天使",
              picurl: "../../static/images/L23.png",
              intro: "我们不是要活着回来，而是要带着胜利凯旋。"
            },
            {
              title: "干物妹小埋",
              picurl: "../../static/images/L24.png",
              intro: "天边彩虹何其绚烂，bai走过的季节何其珍贵"
            }
          ]
        },
        {
          title: "国漫担当",
          url: "../../static/images/classic.png",
          arr: [
            {
              title: "全职高手",
              picurl: "../../static/images/S31.png",
              intro: "如果人生有很长，别无所求，只愿有你的荣耀没有散场。"
            },
            {
              title: "一人之下",
              picurl: "../../static/images/S32.png",
              intro: "跟他们装装逼可以，跟我装，弄死你"
            },
            {
              title: "刺客伍六七",
              picurl: "../../static/images/S33.png",
              intro: "我是这个岛上最强的发型师！"
            },
            {
              title: "百妖谱",
              picurl: "../../static/images/S34.png",
              intro: "朝生，暮死。众生皆如此，可否不辜负。"
            },
            {
              title: "王者?别闹!",
              picurl: "../../static/images/S35.png",
              intro: "野王哥哥,等等瑶瑶一起五黑王者峡谷!"
            },
            {
              title: "魔道祖师",
              picurl: "../../static/images/S36.png",
              intro: "天子坛中寻一笑，枕月云深魏无羡。"
            },
            {
              title: "镇魂街",
              picurl: "../../static/images/S37.png",
              intro: "罗刹街对我们而言不只是一条镇魂街，因为罗刹街是我们的家。"
            },
            {
              title: "罗小黑战记",
              picurl: "../../static/images/S38.png",
              intro: " 小黑丢了，一个人类居然让我们这么狼狈。"
            },
            {
              title: "仙王的日常生活",
              picurl: "../../static/images/S39.png",
              intro: "不装了,我摊牌了~"
            },
            {
              title: "鬼刀",
              picurl: "../../static/images/S40.png",
              intro: "命运就像一条长河，而我们众生皆是水里的鱼。"
            }
          ]
        },
        {
          title: "独家访谈",
          url: "../../static/images/interview.png",
          arr: [
            {
              title: "RE:从零开始的异世界生活  第二季",
              picurl: "../../static/images/L25.jpg",
              intro: "从零开始,到亿结束!"
            },
            {
              title: "刀剑神域 终章篇",
              picurl: "../../static/images/L26.jpg",
              intro: "就算这是假想世界,我对你的感情也是真实存在的."
            },
            {
              title: "我的青春恋爱物语果然有问题  完结篇",
              picurl: "../../static/images/L27.jpg",
              intro: "越是优秀的人 活得越艰难 "
            },
            {
              title: "炎炎消防队",
              picurl: "../../static/images/L28.jpg",
              intro: "炎炎消防队,专业的消暑团队!"
            },
            {
              title: "宝石幻想光芒重现",
              picurl: "../../static/images/L29.jpg",
              intro: "听说没有男主?追了追了"
            },
            {
              title: "非枪人生",
              picurl: "../../static/images/L30.jpg",
              intro:
                "你并没有做错，做错的人是我，是把你当做人……而不是工具来看待的我错了"
            },
            {
              title: "没落要塞",
              picurl: "../../static/images/L31.jpg",
              intro:
                "当人类濒临灭绝时我会抬头看向天空祈祷人类新的家园"
            },
            {
              title:"六次与郎次的魔法律顾问事务所",
              picurl:"../../static/images/L32.jpg",
              intro:"魔法律执行人·六冰透与他的助手·草野次郎"
            }
          ]
        }
      ]
    };
  },
  methods: {
    toScroll(index) {
      if (index === 0) {
        $("body,html").animate({ scrollTop: 700 }, 1000);
      }
      if (index === 1) {
        $("body,html").animate({ scrollTop: 1200 }, 1000);
      }
      if (index === 2) {
        $("body,html").animate({ scrollTop: 1500 }, 1000);
      }
      if (index === 3) {
        $("body,html").animate({ scrollTop: 1900 }, 1000);
      }
      if (index === 4) {
        $("body,html").animate({ scrollTop: 2300 }, 1000);
      }
      if (index === 5) {
        $("body,html").animate({ scrollTop: 2700 }, 1000);
      }
      if (index === 6) {
        $("body,html").animate({ scrollTop: 3000 }, 1000);
      }
      if (index === 7) {
        $("body,html").animate({ scrollTop: 3400 }, 1000);
      }
      this.empty();
      this.fill(index);
    },
    refresh(i) {
      /*var tmp;
      var tmparr = this.projects[i].arr;
      for (let j = 0; j < 5; j++) {
        tmp = tmparr[j];
        tmparr[j] = tmparr[j + 5];
        tmparr[j + 5] = tmp;
      }*/
      /*this.destroy = false;
      this.$nextTick(() => {
        this.destroy = true;
      });*/
      if (i % 2 == 0) {
        var arr = this.projects[i].arr;
        arr.push(arr[0], arr[1], arr[2], arr[3], arr[4]);
        arr.splice(0, 5);
      } else {
        var arr = this.projects[i].arr;
        arr.push(arr[0], arr[1], arr[2], arr[3]);
        arr.splice(0, 4);
      }
    },
    empty(){
      for(let i=0;i<7;i++){
        $('.link .decoration').css("background","#373737");
        $('.link').css("color","#7f7f7f");
      }
    },
    fill(index){
      $('.link .decoration').eq(index).css("background","#fafafa");
      $('.link').eq(index).css("color","#fafafa");
    }
  },
  computed: {
    soncomp(i) {
      var soncomps = this.soncomps;
      return function(i) {
        if (i % 2 === 0) return soncomps[0];
        else return soncomps[1];
      };
    }
  }
};
</script>

<style scoped>
#Hotnews {
  position: relative;
  margin: 0 auto;
  width: 759.6px;
  min-height: 200px;
  background: none;
}
#navigation {
  transition: 1s;
  opacity: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 150px;
  background: none;
  right: 80px;
  bottom: 70px;
}
#navigation .link {
  cursor: pointer;
  align-items: center;
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  height: 20px;
  color: #7f7f7f;
}
#navigation .link p {
  transition: 0.3s;
  font-size: 12px;
  margin: 0 0 0 5px;
}
#navigation .link:nth-child(1) .decoration{
  background:#fafafa;
}
#navigation .link:nth-child(1) {
  color:#fafafa;
}
#navigation .link:hover .decoration {
  background: #fafafa!important;
}
#navigation .link:hover {
  color: #fafafa!important;
}
#navigation .link .decoration {
  transition: 0.5s;
  border-radius: 5px;
  height: 4px;
  width: 20px;
  background: #373737;
}
#remarks {
  margin-top: 50px;
  padding-top: 25px;
  position: relative;
  height: 140px;
  width: 100%;
}
#remarks h1 {
  position: absolute;
  top: 5px;
  left: 20px;
  font-size: 30px;
  font-weight: 500;
  color: white;
}
#remarks .name {
  transition: 1s;
  position: absolute;
  color: white;
  top: 92px;
  left: 70px;
}
#remarks .status {
  text-decoration: underline;
  display: flex;
  align-items: center;
  line-height: 18px;
  position: absolute;
  top: 78px;
  left: 70px;
  transition: 1s;
  opacity: 0;
  color: silver;
  font-size: 12px;
}
#remarks .hint {
  transition-delay: 1s;
  transition: 1s;
  position: absolute;
  color: silver;
  top: 92px;
  right: 20px;
}
#remarks #author {
  transition: 1s;
  cursor: pointer;
  position: absolute;
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  top: 100px;
  left: 20px;
}
#remarks #author:hover {
  top: 85px;
  width: 70px;
  height: 70px;
}
#remarks #author:hover ~ .hint {
  color: goldenrod;
}
#remarks #author:hover ~ .name {
  top: 110px;
  left: 110px;
  color: #f94135;
}
#remarks #author:hover ~ .status {
  left: 100px;
  opacity: 1;
  transform: translateY(10px);
}
#remarks #author:hover img {
  opacity: 0.5;
}
#remarks #author img {
  transition: 1s;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.intro {
  text-align: justify;
  line-height: 160%;
  padding-top: 25px;
  padding-left: 15px;
  margin: 0 auto;
  border-left: 2px solid #fd281a;
  margin-top: 30px;
  position: relative;
  height: 180px;
  width: 93%;
  font-size: 18px;
  color: #7f7f7f;
}
.intro:after {
  content: "“";
  position: absolute;
  left: -5px;
  top: 0px;
  font-size: 38px;
  color: #fd281a;
}
.project {
  position: relative;
  margin: 0 auto;
  /*background: white;*/
  width: 721.61px;
  min-height: 350px;
  margin-top: 25px;
}
.project .pro-title {
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 3px;
  font-size: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  height: 70px;
  /*background: brown;*/
}
.project .pro-title p {
  margin-left: 10px;
}
.project .pro-main {
  position: relative;
  min-height: 270px;
  top: 70px;
}
.project .pro-title .refresh {
  justify-content: space-around;
  border-radius: 10px;
  border: 1px solid black;
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 7px;
  color: white;
  width: 63px;
  height: 30px;
  right: 90px;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.3s;
}
.project .pro-title .refresh img {
  transition: 0.5s;
}
.project .pro-title .more {
  justify-content: space-around;
  border-radius: 10px;
  border: 1px solid black;
  position: absolute;
  display: flex;
  align-items: center;
  color: white;
  width: 80px;
  height: 30px;
  right: 0px;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.3s;
  font-size: 9px;
}
.project .pro-title .refresh:hover {
  opacity: 1;
}
.project .pro-title .refresh:hover img {
  transform: rotate(360deg);
}
.project .pro-title .refresh p {
  margin: 0;
}
.project .pro-title .more:hover {
  opacity: 1;
}
.project .pro-title .more p {
  margin: 0;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 1224px) {
  #navigation {
    display: none;
  }
}
@media screen and (max-width: 1030px) {
  .intro,
  #remarks {
    width: 800px;
  }
  .project {
    width: 425px;
    height: 630px;
  }
  #remarks h1 {
    font-size: 25px;
  }
}
@media screen and (max-width: 800px) {
  #Hotnews {
    width: 100%;
  }
  #remarks {
    width: 100%;
  }
  #remarks h1 {
    font-size: 25px;
  }
  #remarks .hint {
    display: none;
  }
  .intro {
    font-size: 2vh;
    width: 90%;
  }
  .project {
    display: flex;
    justify-content: center;
    width: 90%;
    overflow: hidden;
  }
  .project .refresh,
  .more {
    display: none;
  }
  .project .pro-title p{
    margin-left:0px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: 0.7s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>