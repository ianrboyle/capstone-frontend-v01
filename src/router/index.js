import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Signup from "../views/Signup.vue";
import StocksIndex from "../views/StocksIndex.vue";
import StocksNew from "../views/StocksNew.vue";
import StocksShow from "../views/StocksShow.vue";
import StocksEdit from "../views/StocksEdit.vue";
import Sectors from "../views/Sectors.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/stocks", name: "StocksIndex", component: StocksIndex },
  { path: "/stocks/new", name: "StocksNew", component: StocksNew },
  { path: "/stocks/:id", name: "StocksShow", component: StocksShow },
  { path: "/stocks/:id/edit", name: "StocksEdit", component: StocksEdit },
  { path: "/sectors", name: "Sectors", component: Sectors },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
