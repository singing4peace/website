<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import axios from "axios";
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
        contributors: any[] = [];
        headers = [
            "Lasst uns für den Frieden singen!", // German
            "Давайте разом заспіваємо за мир!", // Ukrainian
            "Let's sing for peace!", // English
            "Cantemos por la paz!", // Spanish
            "Laten we zingen voor de vrede!", // Dutch
            "Chantons pour la paix!", // French
            "Lauletaan rauhan puolesta!", // Finnish
            "平和のために歌おう", // Japanese
            "Śpiewajmy razem o pokój na świecie!", // Polish
        ];

        icons: Record<string, string> = {
            play: mdiPlay
        };

        async mounted(): Promise<void> {
            const res = await axios.get<any[]>("https://api.singing4peace.de/v1/ensembles");
            if (res.status == 200) {
                this.contributors = res.data;
            }
        }
    }
</script>

<template>

    <div id="home-view" class="max-w-7xl mx-auto px-8
        md:px-4">

        <section class="py-16 text-center
            md:py-24 md:text-left" style="min-height: calc(100vh - 3.5rem)">

            <CyclingText class="block font-serif mb-8 text-5xl
                md:text-6xl" :strings="headers" />

            <p class="mb-14 text-lg
                md:text-xl" v-html="$t('home.subtitle')" />

            <div class="relative">
                <div class="bg-sky-200 flex w-full" style="aspect-ratio: 16/9">
                    <iframe class="flex-grow" src="https://www.youtube.com/embed/live_stream?channel=UCCde1p-HjCRkjln_ywfRFvg" frameborder="0" allowfullscreen style="border: none; outline: none"></iframe>
                </div>

                <!-- <div class="absolute bg-sky-900 hover:bg-cyan-600 cursor-pointer left-1/2 p-2 -skew-x-6 text-white top-1/2 transform-gpu transition-all -translate-x-1/2 -translate-y-1/2
                    md:hidden">

                    <svg-icon :path="icons.play" size="32" type="mdi" />
                </div>

                <div class="absolute bottom-8 hidden items-center left-0 w-full
                    md:flex">

                    <div class="inline-flex -ml-8 -skew-x-6 text-white transform-gpu w-full">
                        <div class="bg-slate-700 font-medium inline-flex items-center mr-2 px-6 py-3">Zufällige Kompositionen im Livestream</div>
                        <div class="bg-sky-900 hover:bg-cyan-600 cursor-pointer mr-2 p-3 transition-all">
                            <svg-icon :path="icons.play" size="32" type="mdi" />
                        </div>
                    </div>
                </div> -->
            </div>

            <p class="font-semibold mt-2 text-slate-500 text-sm text-center" v-html="$t('home.compositionInfo')" />
        </section>

        <section class="pb-16 text-center
            md:text-left">

            <div class="block font-serif mb-8 text-3xl
                md:text-4xl" v-text="$t('home.contributed')" />

            <div class="font-medium space-y-2">
                <template v-for="contributor in contributors">
                    <div :key="contributor.name">&mdash; {{ contributor.name }}</div>
                </template>
            </div>
        </section>
    </div>

</template>

<style lang="scss" scoped>

</style>