import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import HomeView from "@/views/Home.view.vue";
import ContributeView from "@/views/Contribute.view.vue";
import ImprintView from "@/views/Imprint.view.vue";
import PrivacyView from "@/views/Privacy.view.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/contribute",
        name: "contribute",
        component: ContributeView,
    },
    {
        path: "/imprint",
        name: "imprint",
        component: ImprintView,
    },
    {
        path: "/privacy",
        name: "privacy",
        component: PrivacyView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;