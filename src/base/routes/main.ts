import { Component } from 'vue';

const HomePage = (): Component => import('@/components/homePage/pages/HomePage.vue');

export default [
  {
    name: 'home',
    path: 'home',
    component: HomePage,
  },
];
