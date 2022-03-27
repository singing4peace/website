import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import HomeView from "@/views/Home.view.vue";
import ImprintView from "@/views/Imprint.view.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/imprint",
        name: "imprint",
        component: ImprintView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;