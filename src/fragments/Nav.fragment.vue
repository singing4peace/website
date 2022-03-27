<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ })
    export default class S4PNav extends Vue {

    }
</script>

<template>

    <nav class="shadow-sm" role="navigation">
        <div class="flex h-14 items-center max-w-7xl mx-auto relative">

            <div class="font-semibold">Singing for Peace</div>
            <div class="absolute flex right-0 top-0">
                <div class="bg-sky-900 flex h-16 items-end justify-center ml-1 pb-2 px-6 -skew-x-6 text-white transform-gpu">
                    <span class="skew-x-6 transform-gpu">Mitmachen</span>
                </div>
                <div class="bg-sky-900 flex h-16 items-end justify-center ml-1 pb-2 px-6 -skew-x-6 text-white transform-gpu">
                    <span class="skew-x-6 transform-gpu">Impressum</span>
                </div>
                <div class="bg-sky-900 flex h-16 items-end justify-center ml-1 pb-2 px-6 -skew-x-6 text-white transform-gpu">
                    <span class="skew-x-6 transform-gpu">Datenschutz</span>
                </div>
            </div>
        </div>
    </nav>

</template>