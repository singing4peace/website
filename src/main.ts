import Vue from "vue";
import VueI18n from "vue-i18n";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/assets/tailwind.css";

import { Locales } from "./locales";

Vue.use(VueI18n);

Vue.config.productionTip = false;

Object.keys(Locales).forEach(locale => {
    Locales[locale]().then((messages: { [id: string]: any; }) => Locales[locale] = messages.default);
});

const i18n = new VueI18n({
    locale: "de",
    fallbackLocale: "en",
    messages: Locales,
    silentTranslationWarn: true,
});

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount("#app");
