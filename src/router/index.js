import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { auth } from "../firebase";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/inicio",
    name: "Inicio",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inicio.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/editar/:id",
    name: "Editar",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Editar.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/agregar",
    name: "Agregar",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Agregar.vue"),
  },
  {
    path: "/registro",
    name: "Registro",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registro.vue"),
  },
  {
    path: "/login",
    name: "Login",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const usuario = auth.currentUser;
    console.log(usuario);

    if (!usuario) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
