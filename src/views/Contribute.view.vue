<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import SvgIcon from "@jamescoyle/vue-icon";
    import {
        mdiDownload,
    } from "@mdi/js";

    @Component({
        components: {
            SvgIcon,
        },
    })
    export default class ContributeView extends Vue {
        icons: Record<string, string> = {
            mdiDownload,
        };
    }
</script>

<template>

    <div id="contribute-view" class="max-w-7xl mx-auto px-8
        md:px-4">

        <section class="py-16
            md:py-24" style="min-height: calc(100vh - 3.5rem)">

            <div class="block font-serif mb-8 text-5xl
                md:text-6xl" v-text="$t('contribute.title')" />

            <div class="mb-12 space-y-4 text-lg
                md:text-xl">

                <div class="font-bold" v-text="$t('contribute.files.title')" />

                <div v-html="$t('contribute.files.notes')" />

                <div v-html="$t('contribute.files.audio')" />

                <div class="font-semibold text-slate-500 text-base" v-text="$t('contribute.files.audioHint')" />
            </div>

            <div class="mb-12 space-y-4 text-lg
                md:text-xl">

                <div class="font-bold" v-text="$t('contribute.record.title')" />

                <div v-html="$t('contribute.record.text')" />

                <div v-text="$t('contribute.record.variantsTitle')" />

                <div><span class="font-semibold text-slate-500 text-base">{{ $t('contribute.record.variant') }} 1</span><br />{{ $t('contribute.record.variant1') }}</div>

                <div><span class="font-semibold text-slate-500 text-base">{{ $t('contribute.record.variant') }} 2</span><br />{{ $t('contribute.record.variant2') }}</div>

                <div class="bg-sky-200 px-4 py-3 text-sky-900 text-base">
                    <div class="font-serif font-bold mb-3 text-lg" v-text="$t('contribute.important')" />
                    <div class="font-medium" v-html="$t('contribute.record.message')" />
                </div>
            </div>

            <div class="mb-12 space-y-4 text-lg
                md:text-xl">

                <div class="font-bold" v-text="$t('contribute.submit.title')" />

                <div><span class="font-semibold text-slate-500 text-base">{{ $t('contribute.submit.step') }} 1</span><br /><span v-html="$t('contribute.submit.step1')" /></div>

                <div><span class="font-semibold text-slate-500 text-base">{{ $t('contribute.submit.step') }} 2</span><br /><span v-html="$t('contribute.submit.step2')" /></div>

                <div class="bg-sky-200 px-4 py-3 text-sky-900 text-base">
                    <div class="font-serif font-bold mb-3 text-lg" v-text="$t('contribute.important')" />
                    <div class="font-medium" v-html="$t('contribute.submit.message')" />
                </div>
            </div>

        </section>
    </div>

</template>