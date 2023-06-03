import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/index.vue';
import MapView from '../pages/map.vue';
import LoginView from '../pages/LoginView.vue';
//@ts-ignore
import { usePocketBase } from "../composables/usePockeBase";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView,
      meta: {reqAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from, next) => {
    const {pb} = usePocketBase();
  
    if(to.meta?.reqAuth && !pb.value.authStore.isValid) {
      router.replace("/login")
    }else {
      next();
    }
  });
  
  export default router