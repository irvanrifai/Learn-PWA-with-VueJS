import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OnlineStore from '../views/OnlineStore.vue'
import ItemDetail from '../views/ItemDetail.vue'
import Cart from '../views/Cart.vue'
import CheckoutSuccess from '../views/CheckoutSuccess.vue'
import LoginAdmin from '../views/LoginAdmin.vue'
import DashboardAdmin from '../views/DashboardAdmin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/online-store',
    name: 'online-store',
    component: OnlineStore
  },
  {
    path: '/item/:id',
    name: 'item-detail',
    component: ItemDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'login',
    component: LoginAdmin
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardAdmin
  },
  {
    path: '/checkout-success',
    name: 'checkout-success',
    component: CheckoutSuccess
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
