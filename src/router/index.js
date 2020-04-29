import Vue from 'vue';
import VueRouter from 'vue-router';

import firebase from 'firebase/app';
import 'firebase/auth';

import Home from '../views/Home.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next({
          path: '/home',
        });
      } else {
        next();
      }
    });
  }
});

export default router;
