import { createRouter, createWebHistory } from 'vue-router'
import FormRegistVueVue from '@/views/FormRegistVue.vue'
import AnnouncementVueVue from '@/views/AnnouncementVue.vue'
// import HomePage from '../views/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'form',
      component: FormRegistVueVue
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: AnnouncementVueVue
    },
  ]
})

export default router