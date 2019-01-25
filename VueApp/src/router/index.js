import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Posts from '@/components/Posts'
import Connexion from '@/components/Connexion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    }
  ]
})
