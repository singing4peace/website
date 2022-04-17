<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import SvgIcon from "@jamescoyle/vue-icon";
    import {
        mdiPlay,
    } from "@mdi/js";

    import CyclingText from "@/components/CyclingText.component.vue";

    @Component({
        components: {
            CyclingText,
            SvgIcon,
        },
    })
    export default class HomeView extends Vue {
        headers = [
            "Lasst uns für den Frieden singen!",
            "Cantemos por la paz!",
            "Laten we zingen voor de vrede!",
            "Chantons pour la paix!",
            "Lauletaan rauhan puolesta!",
            "平和のために歌おう",
            "Śpiewajmy razem o pokój na świecie!",
        ];

        icons: Record<string, string> = {
            play: mdiPlay
        };
    }
</script>

<template>

    <div id="home-view" class="max-w-7xl mx-auto px-8
        md:px-4">

        <section class="py-16 text-center
            md:py-24 md:text-left" style="min-height: calc(100vh - 3.5rem)">

            <CyclingText class="block font-serif mb-8 text-5xl
                md:text-6xl" :strings="headers" />

            <p class="mb-24 text-lg
                md:text-xl" v-html="$t('home.subtitle')" />

            <div class="relative">
                <div class="bg-sky-200 w-full" style="aspect-ratio: 16/9"></div>

                <div class="absolute bg-sky-900 hover:bg-cyan-600 cursor-pointer left-1/2 p-2 -skew-x-6 text-white top-1/2 transform-gpu transition-all -translate-x-1/2 -translate-y-1/2
                    md:hidden">

                    <svg-icon :path="icons.play" size="32" type="mdi" />
                </div>

                <div class="absolute bottom-8 hidden items-center left-0 w-full
                    md:flex">

                    <div class="inline-flex -ml-8 -skew-x-6 text-white transform-gpu w-full">
                        <div class="bg-slate-700 font-medium inline-flex items-center mr-2 px-6 py-3">Stream</div>
                        <div class="bg-sky-900 hover:bg-cyan-600 cursor-pointer mr-2 p-3 transition-all">
                            <svg-icon :path="icons.play" size="32" type="mdi" />
                        </div>
                    </div>
                </div>
            </div>

            <p class="font-semibold mt-2 text-slate-500 text-sm text-center" v-html="$t('home.compositionInfo')" />
        </section>
    </div>

</template>

<style lang="scss" scoped>

</style>