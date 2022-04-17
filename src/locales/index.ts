export const Locales: { [locale: string]: any; } = {
    "de": () => import(/* webpackChunkName: "locale-de" */ "./de"),
    "en": () => import(/* webpackChunkName: "locale-en" */ "./en"),
}