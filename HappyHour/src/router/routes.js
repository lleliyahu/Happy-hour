// const EditStore = {
//   // make sure to add a prop named exactly like the route param
//   props: ['storeName'],
//   template: () => import('src/pages/storeEditPage.vue'),
// };
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/DealsPage.vue') },
      { path: 'Profile', component: () => import('src/pages/Profile.vue') },
      { path: 'ShoppingCart', component: () => import('src/pages/ShoppingCart.vue') },
      { path: 'Restaurants', component: () => import('src/pages/DealsPage.vue') },
      { path: 'Stores', component: () => import('src/pages/StoresPage.vue') },
      {
        path: 'nouvelle-page/:storeName',
        props: true,
        component: () => import('src/pages/AllStorePageDetails.vue'),
      },
      { path: 'DealBreaker', component: () => import('src/pages/DealBreaker.vue') },
      { path: 'tempPage', component: () => import('src/pages/tempPage.vue') },
      {
        path: 'EditStore/:storeName',
        name: 'EditStore',
        props: true,
        component: () => import('src/pages/StoreEditPage.vue'),
      },
      { path: 'EditDeal', component: () => import('src/pages/DealEditPage.vue') },
      { path: 'EditDealBreaker', component: () => import('src/pages/DealBreakerEditPage.vue') },
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
