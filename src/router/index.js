import { createRouter, createWebHistory } from "vue-router";
// import AboutMe from "@/components/AboutMe.vue";
import App from "../App.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AboutMe.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
