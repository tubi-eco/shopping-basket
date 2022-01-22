import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/ListView.vue";

const routes = [
  {
    path: "/",
    name: "list",
    component: ListView,
  },
  {
    path: "/basket",
    name: "ShoppingBasket",
    component: () => import("../views/BasketView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
