import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/TheHome'
import Login from '@/components/TheLogin'
import Register from '@/components/TheRegister'
import FAQs from '@/components/TheFAQs'
import Dashboard from '@/components/TheDashboard'
import Create from '@/components/CreateBeatRate'
import Edit from '@/components/EditBeatRate'
import Details from '@/components/DetailsBeatRate'
import Graph from '@/components/BeatRateGraph'

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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FAQs
    },
    {
      path: '/graph',
      name: 'Graph',
      component: Graph
    }
  ],
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  const protectedRoutes = ['/dashboard', '/edit', '/create', '/details', '/graph'];
  const loginRequired = protectedRoutes.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  // redirect to login page when user is not logged in
  if (loginRequired && !loggedIn) {
    alert('Please login!');
    next('/login');
  } else {
    next();
  }
});

export default router;
