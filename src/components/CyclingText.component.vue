<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({ })
    export default class CyclingText extends Vue {
        @Prop({ type: Array, required: true, })
        readonly strings!: string[];

        index = 0;
        interval: number | undefined = undefined;

        get currentString(): string {
            return this.strings[this.index];
        }

        beforeDestroy(): void {
            clearInterval(this.interval);
        }

        mounted(): void {
            this.interval = setInterval(() => {
                this.index++;

                if (this.index == this.strings.length) {
                    this.index = 0;
                }
            }, 5000);
        }
    }
</script>

<template>

    <span class="cycling-text"><span v-text="currentString" /></span>

</template>

<style lang="scss" scoped>

    @keyframes fadeInOut {
        0% {
            opacity: 0;
            transform: translateX(10px);
        }
        10% {
            opacity: 1;
            transform: translateX(0px);
        }
        50% {
            transform: translateX(0px);
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateX(-40px);
        }
    }

    .cycling-text {
        animation: fadeInOut 5s ease-in 0s infinite;
    }

</style>