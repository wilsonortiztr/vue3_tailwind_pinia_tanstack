import { createRouter, createWebHistory } from 'vue-router';

// Public views
import LoginView from '@/views//public/LoginView.vue';
import PublicView from '@/views/public/PublicView.vue';
import RegisterView from '@/views/public/RegisterView.vue';

// Logged users
import HomeView from '@/views/HomeView.vue'; // TODO: aqui deberia ir el navbar

// Store views
import DashboardView from '@/views/store/DashboardView.vue';
import ProductsMenuView from '@/views/store/ProductsMenuView.vue';
import SalesView from '@/views/store/SalesView.vue';

// User views
import SettingsView from '@/views/SettingsView.vue';
import StoresView from '@/views/user/StoresView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/public',
      name: 'Public',
      component: PublicView,
      meta: { requiresGuest: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { requiresGuest: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
      meta: { requiresGuest: true }
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        // stores views
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardView,
          meta: { requiresAuth: true }
        },
        {
          path: '/sales',
          name: 'Sales',
          component: SalesView,
          meta: { requiresAuth: true }
        },
        {
          path: '/products-menu',
          name: 'ProductsMenu',
          component: ProductsMenuView,
          meta: { requiresAuth: true }
        },
        {
          path: '/settings',
          name: 'Settings',
          component: SettingsView,
          meta: { requiresAuth: true }
        },
        // users views
        {
          path: '/stores',
          name: 'Stores',
          component: StoresView,
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
});

/* router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.meta.requiresAuth && authStore.isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
}); */

export default router;
