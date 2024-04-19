import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import ThemingKit from "../pages/ThemingKit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/test",
    name: "test",
    component: ThemingKit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
