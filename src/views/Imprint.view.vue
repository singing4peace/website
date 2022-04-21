<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

import SvgIcon from "@jamescoyle/vue-icon";
import {} from "@mdi/js";

@Component({
  components: {
    SvgIcon,
  },
})
export default class ImprintView extends Vue {
  icons: Record<string, string> = {};
}
</script>

<template>

  <div id="imprint-view" class="max-w-7xl mx-auto px-8
        md:px-4">

    <section class="py-16 text-center
            md:py-24 md:text-left" style="min-height: calc(100vh - 3.5rem)">

      <div class="block font-serif mb-8 text-5xl
                md:text-6xl">Impressum
      </div>

      <p class="text-lg
                md:text-xl">Verantwortlich im Sinne §5 Abs. 1 Telemediengesetz (TMG): <br>
        Manuela Nägele<br>
        Reinsburgstraße 162<br>
        70197 Stuttgart<br><br>

        E-Mail: info@singing4peace.de
      </p>

    </section>
  </div>

</template>