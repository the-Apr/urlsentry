import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const FaqList = () => import ('../components/FaqList.vue');

const routes = [
  {
    path: '/', name: 'home', component: HomeView, props: true, children: [
      {
        path: '/faq/:id', name: 'faq', component: FaqList 
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
