// import { Component } from 'vue';

import { Component } from 'vue';

const Login = (): Component => import('@/components/authUser/pages/Login.vue');
const Signup = (): Component => import('@/components/authUser/pages/Signup.vue');

export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
];
