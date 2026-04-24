import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Layout from '../layout/Layout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../identity/Identity.vue'),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
