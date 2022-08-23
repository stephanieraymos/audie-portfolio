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
  {
    path: "/logos",
    name: "Logos",
    component: () => import("../components/tabs/LogoTab.vue"),
  },
  {
    path: "/maps",
    name: "Maps",
    component: () => import("../components/tabs/MapsTab.vue"),
  },
  {
    path: "/social-media",
    name: "Social Media",
    component: () => import("../components/tabs/SocialMediaTab.vue"),
  },
  {
    path: "/signs",
    name: "Signs",
    component: () => import("../components/tabs/SignsTab.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
