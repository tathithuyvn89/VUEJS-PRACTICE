import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ToDoList from '../components/ToDo/ToDoList.vue'
import User from '../components/RouterParams/User.vue'
import UserProfile from '../components/RouterParams/UserProfile.vue'
import UserPosts from '../components/RouterParams/UserPosts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/todolist',
    name :'ToDoList',
    component: ToDoList
  },
  {
    path: '/users/:id',component: User,

    children:[
      {
        path: 'profile', component: UserProfile
      },
      {
        path: 'posts', component: UserPosts
      }
    ]
  },
  {
    path: '/users*',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
