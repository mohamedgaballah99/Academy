import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import About from "../views/About.vue";
import Courses from "../views/Courses.vue";
import Certificate from "../views/Certificate.vue";
import Contact from "../views/Contact.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component:About
  },
  {
    path: "/services",
    name: "Services",
    component:Services
  },
  {
    path: "/courses",
    name: "Courses",
    component:Courses
  },
  {
    path: "/certificate",
    name: "Certificate",
    component:Certificate
  },
  {
    path: "/contact",
    name: "Contact",
    component:Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
