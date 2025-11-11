import ChatsView from '@/pages/ChatsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
  ],
})

export default router
