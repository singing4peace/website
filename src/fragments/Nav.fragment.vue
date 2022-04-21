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

            <router-link class="font-semibold mb-8 py-4
                md:mb-0 md:py-0" :to="{ name: 'home' }">Singing for Peace</router-link>

            <div class="absolute -bottom-4 flex justify-center right-0 text-white w-full
                md:bottom-auto md:top-0 md:w-auto">

                <router-link class="bg-sky-900 hover:bg-cyan-600 cursor-pointer flex items-end justify-center ml-1 px-6 py-3 -skew-x-6 transform-gpu transition-all
                    md:h-16 md:py-2" :to="{ name: 'contribute' }">

                    <span class="skew-x-6 transform-gpu" v-text="$t('nav.contribute')" />
                </router-link>

                <router-link class="bg-sky-900 hover:bg-cyan-600 cursor-pointer flex items-end justify-center ml-1 px-6 py-3 -skew-x-6 transform-gpu transition-all
                    md:h-16 md:py-2" :to="{ name: 'privacy' }">

                    <span class="skew-x-6 transform-gpu" v-text="$t('nav.privacy')" />
                </router-link>

                <router-link class="bg-sky-900 hover:bg-cyan-600 cursor-pointer flex items-end justify-center ml-1 px-6 py-3 -skew-x-6 transform-gpu transition-all
                    md:h-16 md:py-2" :to="{ name: 'imprint' }">

                    <span class="skew-x-6 transform-gpu" v-text="$t('nav.imprint')" />
                </router-link>
            </div>
        </div>
    </nav>

</template>