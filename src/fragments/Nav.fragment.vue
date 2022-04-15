<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ })
    export default class S4PNav extends Vue {

    }
</script>

<template>

    <nav class="shadow-sm
        md:shadow" role="navigation">

        <div class="flex flex-col items-center max-w-7xl mx-auto px-4 relative
            md:flex-row md:h-14">

            <div class="font-semibold mb-8 py-4
                md:mb-0 md:py-0">Singing for Peace</div>

            <div class="absolute -bottom-4 flex justify-center right-0 text-white w-full
                md:bottom-auto md:top-0 md:w-auto">

                <div class="bg-sky-900 flex items-end justify-center ml-1 px-6 py-3 -skew-x-6 transform-gpu
                    md:h-16 md:py-2">

                    <span class="skew-x-6 transform-gpu">Mitmachen</span>
                </div>

                <div class="bg-sky-900 flex items-end justify-center ml-1 px-6 py-3 -skew-x-6 transform-gpu
                    md:h-16 md:py-2">

                    <span class="skew-x-6 transform-gpu">Impressum</span>
                </div>

                <div class="bg-sky-900 flex items-end justify-center ml-1 px-6 py-3 -skew-x-6 transform-gpu
                    md:h-16 md:py-2">

                    <span class="skew-x-6 transform-gpu">Datenschutz</span>
                </div>
            </div>
        </div>
    </nav>

</template>