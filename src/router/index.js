import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/TheHome'
import Login from '@/components/TheLogin'
import Register from '@/components/TheRegister'
import Help from '@/components/TheHelp'
import TechnicalDocument from '@/components/TechnicalDocument'

Vue.use(Router)

const router =  new Router({
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


router.beforeEach((to, from, next) => {
  const protectedRoutes = ['/dashboard'];
  const loginRequired = protectedRoutes.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // redirect to login page when user is not logged in
  if (loginRequired && !loggedIn) {
    alert('You need to login first!');
    next('/login');
  } else {
    next();
  }
});


export default router;