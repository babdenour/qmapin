const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/destination/:brandName',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Destination.vue') }],
  },
  {
    path: '/direction',
    name: 'Direction',
    component: () => import('pages/Direction.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
