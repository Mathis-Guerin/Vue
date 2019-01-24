import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
