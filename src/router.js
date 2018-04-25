import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Upload from './theme/Upload.vue'
import Game from './theme/Game.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {path: '/post', component: Upload},
    {path: '/', component: Category},
    {path: '/game/:id', component: Game}
  ]
})

export default router
