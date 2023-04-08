const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/DealsPage.vue') },
      { path: 'Profile', component: () => import('src/pages/Profile.vue') },
      { path: 'Restaurants', component: () => import('src/pages/DealsPage.vue') },
      { path: 'Stores', component: () => import('src/pages/StoresPage.vue') },
      { path: 'DealBreaker', component: () => import('src/pages/DealBreaker.vue') },
      { path: 'tempPage', component: () => import('src/pages/tempPage.vue') },
      { path: 'EditStore', component: () => import('src/pages/storeEditPage.vue') },
      { path: 'EditDeal', component: () => import('src/pages/dealEditPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
