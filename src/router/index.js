import ChatsView from '@/pages/ChatsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AuthorizationView from '@/pages/AuthorizationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Chats',
      path: '/chats',
      component: ChatsView,
    },
    {
      path: '/',
      redirect: '/chats',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/chats',
    },
    {
      path: '/registration',
      component: AuthorizationView
    },
    {
      path: '/login',
      component: AuthorizationView
    },
  ],
})

export default router
