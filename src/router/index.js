import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CalculatorPage from '../views/CalculatorPage.vue';
import CommentsPage from '../views/CommentsPage.vue';
import UsersPage from '../views/UsersPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/calculator',
    name: 'CalculatorPage',
    component: CalculatorPage
  },
  {
    path: '/comments',
    name: 'CommentsPage',
    component: CommentsPage
  },
  {
    path: '/users',
    name: 'UsersPage',
    component: UsersPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
