<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import SvgIcon from "@jamescoyle/vue-icon";
    import {
        mdiPlay,
    } from "@mdi/js";

    @Component({
        components: {
            SvgIcon,
        },
    })
    export default class HomeView extends Vue {
        icons: Record<string, string> = {
            play: mdiPlay
        };
    }
</script>

<template>

    <div id="home-view" class="flex flex-col max-w-7xl mx-auto" style="height: calc(100vh - 3.5rem)">
        <div class="font-serif mb-8 mt-32 text-6xl">Lasst uns für den Frieden singen!</div>
        <p class="text-xl">Mit großer Betroffenheit beobachten wir alle das Unfassbare, das gerade in der Ukraine geschieht.<br />Deshalb wollen wir ein Friedenslied singen und laden viele Chöre ein mitzusingen.</p>

        <div class="my-auto relative">
            <div class="bg-sky-200 w-full" style="aspect-ratio: 16/9"></div>
            <div class="absolute bottom-8 flex items-center left-0">
                <div class="inline-flex -ml-8 -skew-x-6 text-white transform-gpu">
                    <div class="bg-slate-700 font-medium inline-flex items-center mr-2 px-6 py-3">Neue Komposition in 03:47</div>
                    <div class="bg-sky-900 mr-2 p-3">
                        <svg-icon :path="icons.play" size="32" type="mdi" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>