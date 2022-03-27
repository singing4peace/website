<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ })
    export default class SiButton extends Vue {

    }
</script>

<template>

    <a class="si-button bg-white border font-medium px-2 py-1 rounded shadow
        focus:ring-4">
        <slot />
    </a>

</template>