import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import login from '@/modules/main/views/login.view.vue';
import homeView from '@/modules/main/views/home.view.vue';
import notFound from '@/modules/main/views/not_found.view.vue';

import bookings from '@/modules/bookings/views/bookings.view.vue';

import dashboard from '@/modules/dashboard/views/dashboard.view.vue';

import user from '@/modules/user/views/user.view.vue';

import ApiService from '@/services/api.service';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'Home',
    redirect: '/dashboard',
    component: homeView,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: dashboard,
      },
      {
        path: 'profile',
        name: 'Profile',
        component: user,
      },
      {
        path: 'bookings',
        name: 'Bookings',
        component: bookings,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
    meta: {
      public: true,
    },
  },
  {
    path: '/404',
    component: notFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  await ApiService.initialized;

  const isPublic = to.matched.some((record) => record.meta.public);
  const loggedIn = ApiService.isLoggedIn;

  if (!isPublic && !loggedIn) {
    return next({
      name: 'Login',
      query: { redirect: to.fullPath },
    });
  }
  next();
});

export default router;
