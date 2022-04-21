<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import SvgIcon from "@jamescoyle/vue-icon";
    import {
        mdiChevronUp,
        mdiTranslate,
    } from "@mdi/js";

    import S4PNav from "@/fragments/Nav.fragment.vue";

    @Component({
        components: {
            S4PNav,
            SvgIcon,
        },
    })
    export default class App extends Vue {
        icons: Record<string, string> = {
            mdiChevronUp,
            mdiTranslate,
        };

        isLanguageSwitcherExpanded: boolean = false;
        locales = {
            de: "🇩🇪",
            en: "🇬🇧",
        };

        changeLanguage(locale: string): void {
            this.$store.commit("setLocale", locale);
            this.$i18n.locale = locale;

            this.$forceUpdate();
        }

        mounted(): void {
            this.$i18n.locale = this.$store.state.locale;
        }
    }
</script>

<template>

    <div id="app" class="text-slate-700">
        <S4PNav />
        <router-view />

        <footer class="bg-slate-50 border-t bottom-0 fixed left-0 w-full">
            <div class="max-w-7xl mx-auto">
                <div @click="isLanguageSwitcherExpanded = !isLanguageSwitcherExpanded" class="border-b cursor-pointer flex items-center p-2">
                    <svg-icon :path="icons.mdiTranslate" type="mdi" />
                    <div class="font-bold ml-2" v-text="$t('app.changeLanguage')" />
                    <svg-icon class="ml-auto transition-all" :path="icons.mdiChevronUp" :style="`transform: rotate(${isLanguageSwitcherExpanded ? '180deg' : '0'})`" type="mdi" />
                </div>

                <div class="flex items-center overflow-x-scroll px-4 py-2 relative space-x-4 text-slate-500 text-3xl transition-all w-full" :style="`margin-top: ${isLanguageSwitcherExpanded ? '0' : '-52px'}; scrollbar-width: none; top: ${isLanguageSwitcherExpanded ? '0' : '52px'}`">
                    <template v-for="(flag, locale) in locales">
                        <a @click="changeLanguage(locale)" class="cursor-pointer inline-flex items-center locale-flag relative" :data-active="$i18n.locale == locale" :key="locale">
                            <span v-text="flag" />
                            <span :class="['font-bold ml-2 text-sm', { 'text-sky-900': $i18n.locale == locale }]" v-text="$t(`locales.${locale}`)" />
                        </a>
                    </template>
                </div>
            </div>
        </footer>
    </div>

</template>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Piazzolla:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

    .locale-flag[data-active]::before {
        border-radius: 4px;
        box-shadow: 0 0 0 2px #F8FAFC, 0 0 0 4px #0C4A6E;
        content: "";
        display: block;
        height: 20px;
        left: 0;
        position: absolute;
        top: 8px;
        width: 30px;
    }

</style>