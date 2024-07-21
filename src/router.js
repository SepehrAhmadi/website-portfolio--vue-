import { createMemoryHistory, createRouter } from "vue-router";
import Home from "./view/Home.vue";
import Services from './view/Services.vue'
import Features from './view/Features.vue'
import Portfolio from './view/Portfolio.vue'
import Blog from './view/Blog.vue'
import Contact from './view/Contact.vue'

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Services",
    path: "/services",
    component: Services,
  },
  {
    name: "Features",
    path: "/features",
    component: Features,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    component: Portfolio,
  },
  {
    name: "Blog",
    path: "/blog",
    component: Blog,
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
