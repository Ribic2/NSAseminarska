import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/webapp',
    component: ()=>import('../layouts/default'),
    children:[
      {
        path: '',
        name: "patients",
        component: ()=>import('../pages/index/view')
      },
      {
        path: 'patient/:id',
        name: 'patient',
        component: ()=>import('../pages/patient/patient')
      },
      {
        path: 'patient/add',
        component: ()=> import('../pages/add/index'),
        name: 'add'
      }
    ]
  },
  {
    path: '/',
    component: ()=> import('../layouts/login')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
