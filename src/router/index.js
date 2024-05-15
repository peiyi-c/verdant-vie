import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },

  {
    path: "/hair",
    name: "hair",
    component: () => import("../pages/Hair.vue"),
  },
  {
    path: "/face",
    name: "face",
    component: () => import("../pages/Face.vue"),
  },
  {
    path: "/body",
    name: "body",
    component: () => import("../pages/Body.vue"),
  },
  {
    path: "/home_style",
    name: "home_style",
    component: () => import("../pages/HomeStyle.vue"),
  },
  {
    path: "/accessory",
    name: "accessory",
    component: () => import("../pages/Accessory.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../pages/Checkout.vue"),
  },
  {
    path: "/thank-you",
    name: "thank-you",
    component: () => import("../pages/Thankyou.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
