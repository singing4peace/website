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
    export default class ImprintView extends Vue {
        icons: Record<string, string> = {
        };
    }
</script>

<template>

    <div id="imprint-view">
    </div>

</template>