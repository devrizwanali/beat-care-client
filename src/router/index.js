import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/TheHome'
import Login from '@/components/TheLogin'
import Register from '@/components/TheRegister'
import Help from '@/components/TheHelp'
import TechnicalDocument from '@/components/TechnicalDocument'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/technical-document',
      name: 'TechnicalDocument',
      component: TechnicalDocument
    }
  ],
  mode: 'history'
})
