import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomeView from '@/modules/main/views/HomeView.vue';

import ApiService from '@/services/api.service';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'Home',
    redirect: '/dashboard',
    component: HomeView,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '@/modules/overview/views/Dashboard.vue'
          )
      },
      {
        path: 'about',
        name: 'About',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '@/modules/user/views/About.vue'
          )
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunckName: "login" */ '@/modules/main/views/Login.vue'),
    meta: {
      public: true
    }
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
