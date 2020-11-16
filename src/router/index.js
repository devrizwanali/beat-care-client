import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
    	path: '/sign-up',
    	name: 'Register',
    	component: Register
    }
  ],
  mode: 'history'
})
