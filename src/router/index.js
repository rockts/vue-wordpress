import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Posts'

Vue.use(Router)

export dafault new Router({
  routers: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    }
  ]
})
