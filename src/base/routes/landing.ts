import { Component } from 'vue';

const AboutVue = (): Component => import('@/components/landing/pages/Home.vue');
const About = (): Component => import('@/components/landing/pages/About.vue');

export default [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/about/vue',
    component: AboutVue,
  },
];
