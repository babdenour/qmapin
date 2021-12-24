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
    component: () => import('../pages/Direction.vue'),
  },
  {
    path: '/destination/',
    component: () => import('pages/Direction.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
//  borderless
// use-input
// fill-input
// input-debounce="0"
// :model-value="model"
// :options="brandsData"
// @filter="filterFn"
// @input-value="brandsDataSelected"
// label="Trouve une boutique"
// behavior="menu"
