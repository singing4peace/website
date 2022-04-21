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
                md:text-6xl">Mitmachen</div>

            <div class="mb-12 space-y-4 text-lg
                md:text-xl">

                <div class="font-bold">Euer Chor möchte mitmachen?</div>

                <div><a class="underline" href="#">Hier könnt ihr euch die Noten herunterladen</a>.</div>

                <div><a class="underline" href="#">In der Tonspur</a> singt ein einzelnes Kind das Lied unbegleitet.<br /><a class="underline" href="#">In der Gesamtaufnahme</a> sind der Chor und Klavierbegleitung zu hören.</div>

                <div class="font-semibold text-slate-500 text-base">Bei beiden Musikdateien ist zu Beginn der Anfangston zu hören und dann drei Klicks bevor das Lied beginnt. So könnt ihr Tonhöhe und Tempo abnehmen.</div>
            </div>

            <div class="mb-12 space-y-4 text-lg
                md:text-xl">

                <div class="font-bold ">So funktioniert die Aufnahme</div>

                <div>Wenn ihr das Lied geprobt habt, und auch zur Tonspur oder zur Gesamtaufnahme singen könnt, könnt ihr beginnen. Ihr braucht dazu zwei Geräte: Eines, um Euch aufzunehmen und ein anderes, um die Tonspur <strong>oder</strong> die Gesamtaufnahme abspielen zu können.</div>

                <div>Es gibt zwei verschiedene Möglichkeiten, euch aufzunehmen:</div>

                <div><span class="font-semibold text-slate-500 text-base">Variante 1</span><br />Ihr verwendet die Tonspur, macht sie laut und singt mit dem Chor dazu und filmt euch dabei.</div>

                <div><span class="font-semibold text-slate-500 text-base">Variante 2</span><br />Ihr verwendet die Gesamtaufnahme, spielt diese über ein Gerät mit Kopfhörern ab und singt dazu und filmt euch dabei.</div>

                <div class="bg-sky-200 px-4 py-3 text-sky-900 text-base">
                    <div class="font-serif font-bold mb-3 text-lg">Wichtig</div>
                    <div class="font-medium">In das Gesamtvideo von Singing4Peace kann euer Beitrag nur eingebaut werden, wenn eure Aufnahme genau dem vorgegeben Tempo und der vorgegebenen Tonhöhe entspricht. Damit es exakt übereinander passt, muss mit Tonspur oder Gesamtaufnahme aufgenommen werden. Auf dem von Euch eingereichten Video darf keine Klavierbegleitung zu hören sein. Daher sollte jedes Chormitglied Kopfhörer haben, wenn ihr zur Gesamtaufnahme aufnehmen möchtet.</div>
                </div>
            </div>

            <div class="mb-12 space-y-4 text-lg
                md:text-xl">

                <div class="font-bold ">So reicht ihr eure Aufnahme ein</div>

                <div><span class="font-semibold text-slate-500 text-base">Schritt 1</span><br />Ladet Eure Aufnahme gemeinsam mit der <a class="underline" href="#">Anmeldung</a> bei beispielsweise WeTransfer oder Google Drive hoch</div>

                <div><span class="font-semibold text-slate-500 text-base">Schritt 2</span><br />Sendet uns den Link zu beiden Dateien per E-Mail an <a class="underline" href="mailto:orga@singing4peace.de">orga@singing4peace.de</a></div>

                <div class="bg-sky-200 px-4 py-3 text-sky-900 text-base">
                    <div class="font-serif font-bold mb-3 text-lg">Wichtig</div>
                    <div class="font-medium">Ohne eine vollständig ausgefüllte <a class="underline" href="#">Anmeldung</a> kann euer Video leider nicht eingebaut werden. Wir haben außerdem eine <a class="underline" href="#">Einverständniserklärung</a> für eure Chormitglieder erstellt. Wenn ihr nicht sowieso eine eigene habt, nutz gerne unsere</div>
                </div>
            </div>

        </section>
    </div>

</template>