import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import Hotnews from '@/components/Hotnews.vue'
import SubscriptionV from '@/components/SubscriptionV.vue'
import Subscription from '@/components/Subscription.vue'
import Scheme from '@/components/Scheme.vue'
import Studio from '@/components/Studio.vue'
import Introduction from '@/components/Introduction.vue'
import Update from '@/components/Update.vue'
import Thanks from '@/components/Thanks.vue'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Hotnews',
      alias:'/Homepage/Hotnews',
      component: Homepage,
      children:[
        {
          path:'HotNews',
          name:'Hotnews',
          component:Hotnews
        },
        {
          path:'Subscription',
          name:"Subscription",
          component:Subscription
        },
        {
          path:'SubscriptionV',
          name:"SubscriptionV",
          component:SubscriptionV
        },
        {
          path:'Scheme',
          name:'Scheme',
          component:Scheme
        }
      ]
    },
    {
      path:'/Studio',
      name:'Studio',
      component:Studio,
      children:[
        {
          path:'Introduction',
          name:'Introduction',
          component:Introduction
        },
        {
          path:'Update',
          name:"Update",
          component:Update
        },
        {
          path:'Thanks',
          name:'Thanks',
          component:Thanks
        }
      ]
    }
  ]
})
