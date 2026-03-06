import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '@/views/LandingView.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import TransactlyPrivacy from '@/views/TransactlyPrivacy.vue'
import TransactlyContact from '@/views/TransactlyContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage,
    },
    {
      path: '/transactly/privacy',
      name: 'TransactlyPrivacy',
      component: TransactlyPrivacy,
    },
    {
      path: '/transactly/contact',
      name: 'TransactlyContact',
      component: TransactlyContact,
    },
  ],
})

export default router