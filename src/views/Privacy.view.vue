<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import SvgIcon from "@jamescoyle/vue-icon";
    import {
    } from "@mdi/js";

    @Component({
        components: {
            SvgIcon,
        },
    })
    export default class PrivacyView extends Vue {
        icons: Record<string, string> = {
        };
    }
</script>

<template>

    <div id="privacy-view" class="max-w-7xl mx-auto px-8
        md:px-4">

        <section class="py-16 text-center
            md:py-24 md:text-left" style="min-height: calc(100vh - 3.5rem)">

            <div class="block font-serif mb-8 text-5xl
                md:text-6xl">Datenschutz</div>

            <p class="text-lg
                md:text-xl">Lorem impsum</p>

        </section>
    </div>

</template>