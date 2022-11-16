// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import $ from "jquery";
import { Toast } from 'vux'
import VueLazyload from 'vue-lazyload'
import 'highlight.js/styles/atom-one-light.css'
import hljs from 'highlight.js'
Vue.component('toast', Toast)
Vue.use(VueLazyload)
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
