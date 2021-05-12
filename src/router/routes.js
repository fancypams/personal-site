import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Resume from "@/components/Resume.vue";
import Work from "@/components/Work.vue";
import Contact from "@/components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;