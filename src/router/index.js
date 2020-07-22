import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FileUpload from "../views/FileUpload";



Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'FileUpload',
    component: FileUpload
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
