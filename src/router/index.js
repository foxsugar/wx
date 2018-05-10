import Vue from 'vue'
import Router from 'vue-router'
import {getToken, setToken} from '@/utils/util'
// const HelloWorld = () => import('@/components/HelloWorld')
const Home = () =>
  import('@/views/Home')
const Index = () =>
  import('@/views/Index')
const Order = () =>
  import('@/views/Order')
const Find = () =>
  import('@/views/Find')
const User = () =>
  import('@/views/User')
const Detail = () =>
  import('@/views/Detail')
const Login = () =>
  import('@/views/Login')
const Test = () =>
  import('@/views/Test')

Vue.use(Router)
Router.prototype.back = function () {
  this.isBack = true
  window.history.go(-1)
}
const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/find',
          name: 'Find',
          component: Find
        },
        {
          path: '/user',
          name: 'User',
          component: User
        }
      ]
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      query: {
        sid: 'sid',
        id: 'id'
      },
      component: Test
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeeach')
  let token = getToken()

  //测试用
  next()

  //测试去掉验证
  // if (token) {
  //   next()
  // } else {
  //   if(to.path=='/login'){//如果是登录页面路径，就直接next()
  //     next();
  //   }else{//不然就跳转到登录；
  //     next('/login');
  //   }
  // }

})

export default router
