import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/:columns?/:colors?',
    name: 'randomColor',
    component: () => import('../views/RandomColorView.vue'),
    props: true,
    meta: { title: 'Random Colors' }
  },
  {
    path: '/home',
    name: 'homeOld',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Добавляем мета-заголовок странички
router.beforeEach((to, from, next) => {
  document.title = ((to.meta.title) ? to.meta.title + ' -- ' : '') + 'Wave UI (Vue.js 3)'

  next()
})

export default router
