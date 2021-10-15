import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';

import { Component } from 'vue';
import mainRoutes from '@/base/routes/main';
import customRoutes from '@/base/routes/custom';
import landingRoutes from '@/base/routes/landing';

const LandingLayout = () => import('@/layouts/LandingLayout.vue');
const CustomLayout = () => import('@/layouts/CustomLayout.vue');
const MainLayout = () => import('@/layouts/MainLayout.vue');

const PageNotFound = () => import('@/pages/PageNotFound.vue');
//  To set a fixed type of page meta-info
// declare module 'vue-router' {
//   interface RouteMetaD {
//     requiresAuth: boolean;
//     requiresGroupMember: boolean;
//   }
// }

const HomePage = (): Component => import('@/components/homePage/pages/HomePage.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/landing',
    component: LandingLayout,
    children: [
      ...landingRoutes,
    ],
  },
  {
    path: '/',
    component: CustomLayout,
    children: [
      ...customRoutes,
      {
        path: '/main',
        component: MainLayout,
        children: [
          ...mainRoutes,
          {
            path: '/home',
            component: HomePage,
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const notGoToRouteIfAlreadyHere = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  if (from.path !== to.path) {
    next();
  }
};

router.beforeEach(notGoToRouteIfAlreadyHere);

export default router;
