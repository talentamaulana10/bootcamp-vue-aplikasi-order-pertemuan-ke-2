import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import Order from "../views/order";
import History from "../views/history";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
