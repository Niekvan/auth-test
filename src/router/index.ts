import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../views/Home.vue';

import ApiService from '@/services/api.service';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunckName: "login" */ '../views/Login.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  await ApiService.initialized;

  const isPublic = to.matched.some(record => record.meta.public);
  const loggedIn = ApiService.isLoggedIn;

  if (!isPublic && !loggedIn) {
    return next({
      name: 'Login',
      query: { redirect: to.fullPath }
    });
  }
  next();
});

export default router;
