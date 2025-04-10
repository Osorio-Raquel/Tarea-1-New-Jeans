import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Welcome from '../components/Welcome.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'  // Redirige la raíz a /login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
];

const router = createRouter({
  history: createWebHistory('/'),  // Usa '/' en lugar de `process.env.BASE_URL`
  routes
});

export default router;
