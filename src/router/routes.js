
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'player', component: () => import('src/pages/PlayerPage.vue') },
      { path: 'guild', component: () => import('src/pages/GuildPage.vue') },
      { path: 'games', component: () => import('src/pages/GamePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
