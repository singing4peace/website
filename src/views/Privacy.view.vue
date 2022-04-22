<script lang="ts" xmlns:md="http://www.w3.org/1999/xhtml">
import { Component, Vue } from "vue-property-decorator";

import SvgIcon from "@jamescoyle/vue-icon";
import {} from "@mdi/js";

@Component({
    components: {
        SvgIcon,
    },
})
export default class PrivacyView extends Vue {
    icons: Record<string, string> = {};
}
</script>

<template>
    <div id="privacy-view" class="max-w-7xl mx-auto px-8
        md:px-4">

        <section class="py-16 text-center
            md:py-24 md:text-left" style="min-height: calc(100vh - 3.5rem)">

            <div class="block font-serif mb-8 text-5xl
                md:text-6xl">Datenschutz</div>

            <div class="space-y-4 text-lg
                md:text-xl">

                <div class="font-bold" id="m14">Einleitung</div>
                <p class="text-justify">
                    Mit der folgenden Datenschutzerklärung möchten wir Sie
                    darüber aufklären, welche Arten Ihrer personenbezogenen
                    Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu
                    welchen Zwecken und in welchem Umfang verarbeiten. Die
                    Datenschutzerklärung gilt für alle von uns durchgeführten
                    Verarbeitungen personenbezogener Daten, sowohl im Rahmen der
                    Erbringung unserer Leistungen als auch insbesondere auf
                    unseren Webseiten, in mobilen Applikationen sowie innerhalb
                    externer Onlinepräsenzen, wie z.B. unserer
                    Social-Media-Profile (nachfolgend zusammenfassend bezeichnet
                    als "Onlineangebot“).
                </p>
                <p>
                    Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
                </p>
                <p>Stand: 21. April 2022</p>

                <div class="font-bold pt-4 text-sky-900">Inhaltsübersicht</div>
                <ul>
                    <li><a class="underline" href="#m14">Einleitung</a></li>
                    <li><a class="underline" href="#m3">Verantwortlicher</a></li>
                    <li><a class="underline" href="#mOverview">Übersicht der Verarbeitungen</a></li>
                    <li><a class="underline" href="#m13">Maßgebliche Rechtsgrundlagen</a></li>
                    <li><a class="underline" href="#m27">Sicherheitsmaßnahmen</a></li>
                    <li><a class="underline" href="#m328">Plugins und eingebettete Funktionen sowie Inhalte</a></li>
                    <li><a class="underline" href="#m15">Änderung und Aktualisierung der Datenschutzerklärung</a></li>
                    <li><a class="underline" href="#m42">Begriffsdefinitionen</a></li>
                </ul>

                <div class="font-bold pt-4 text-sky-900" id="m3">Verantwortlicher</div>
                <p>
                    Manuela Nägele<br />
                    Reinsburgstraße 162<br />
                    70197 Stuttgart<br />
                    <br />
                    E-Mail-Adresse: info@singing4peace.de<br />
                    Impressum: <a class="underline" href="https://singing4peace.de/imprint" target="_blank">https://singing4peace.de/imprint</a>
                </p>

                <div class="font-bold pt-4 text-sky-900" id="mOverview">Übersicht der Verarbeitungen</div>
                <p class="text-justify">
                    Die nachfolgende Übersicht fasst die Arten der verarbeiteten
                    Daten und die Zwecke ihrer Verarbeitung zusammen und
                    verweist auf die betroffenen Personen.
                </p>
                <div class="font-semibold text-slate-500 text-base">Arten der verarbeiteten Daten</div>
                <ul>
                    <li>&ndash; Bestandsdaten</li>
                    <li>&ndash; Kontaktdaten</li>
                    <li>&ndash; Inhaltsdaten</li>
                    <li>&ndash; Nutzungsdaten</li>
                    <li>&ndash; Meta-/Kommunikationsdaten</li>
                </ul>
                <div class="font-semibold text-slate-500 text-base">Kategorien betroffener Personen</div>
                <ul>
                    <li>&ndash; Nutzer</li>
                </ul>
                <div class="font-semibold text-slate-500 text-base">Zwecke der Verarbeitung</div>
                <ul>
                    <li>
                        &ndash; Bereitstellung unseres Onlineangebotes und
                        Nutzerfreundlichkeit
                    </li>
                </ul>
                <div class="font-semibold text-slate-500 text-base" id="m13">Maßgebliche Rechtsgrundlagen</div>
                <p class="text-justify">
                    Im Folgenden erhalten Sie eine Übersicht der
                    Rechtsgrundlagen der DSGVO, auf deren Basis wir
                    personenbezogene Daten verarbeiten. Bitte nehmen Sie zur
                    Kenntnis, dass neben den Regelungen der DSGVO nationale
                    Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
                    Sitzland gelten können. Sollten ferner im Einzelfall
                    speziellere Rechtsgrundlagen maßgeblich sein, teilen wir
                    Ihnen diese in der Datenschutzerklärung mit.
                </p>
                <ul class="space-y-2 text-justify">
                    <li>
                        &ndash; Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)<br />
                        Die betroffene Person hat ihre Einwilligung in die
                        Verarbeitung der sie betreffenden personenbezogenen
                        Daten für einen spezifischen Zweck oder mehrere
                        bestimmte Zwecke gegeben.
                    </li>
                    <li>
                        &ndash; Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)<br />
                        Die Verarbeitung ist für die Erfüllung eines Vertrags,
                        dessen Vertragspartei die betroffene Person ist, oder
                        zur Durchführung vorvertraglicher Maßnahmen
                        erforderlich, die auf Anfrage der betroffenen Person
                        erfolgen.
                    </li>
                    <li>
                        &ndash; Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)<br />
                        Die Verarbeitung ist zur Wahrung der berechtigten
                        Interessen des Verantwortlichen oder eines Dritten
                        erforderlich, sofern nicht die Interessen oder
                        Grundrechte und Grundfreiheiten der betroffenen Person,
                        die den Schutz personenbezogener Daten erfordern,
                        überwiegen.
                    </li>
                </ul>
                <p class="text-justify">
                    Zusätzlich zu den Datenschutzregelungen der
                    Datenschutz-Grundverordnung gelten nationale Regelungen zum
                    Datenschutz in Deutschland. Hierzu gehört insbesondere das
                    Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei
                    der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das
                    BDSG enthält insbesondere Spezialregelungen zum Recht auf
                    Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur
                    Verarbeitung besonderer Kategorien personenbezogener Daten,
                    zur Verarbeitung für andere Zwecke und zur Übermittlung
                    sowie automatisierten Entscheidungsfindung im Einzelfall
                    einschließlich Profiling. Des Weiteren regelt es die
                    Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses
                    (§ 26 BDSG), insbesondere im Hinblick auf die Begründung,
                    Durchführung oder Beendigung von Beschäftigungsverhältnissen
                    sowie die Einwilligung von Beschäftigten. Ferner können
                    Landesdatenschutzgesetze der einzelnen Bundesländer zur
                    Anwendung gelangen.
                </p>

                <div class="font-bold pt-4 text-sky-900" id="m27">Sicherheitsmaßnahmen</div>
                <p class="text-justify">
                    Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                    Berücksichtigung des Stands der Technik, der
                    Implementierungskosten und der Art, des Umfangs, der
                    Umstände und der Zwecke der Verarbeitung sowie der
                    unterschiedlichen Eintrittswahrscheinlichkeiten und des
                    Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher
                    Personen geeignete technische und organisatorische
                    Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu
                    gewährleisten.
                </p>
                <p class="text-justify">
                    Zu den Maßnahmen gehören insbesondere die Sicherung der
                    Vertraulichkeit, Integrität und Verfügbarkeit von Daten
                    durch Kontrolle des physischen und elektronischen Zugangs zu
                    den Daten als auch des sie betreffenden Zugriffs, der
                    Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und
                    ihrer Trennung. Des Weiteren haben wir Verfahren
                    eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
                    die Löschung von Daten und Reaktionen auf die Gefährdung der
                    Daten gewährleisten. Ferner berücksichtigen wir den Schutz
                    personenbezogener Daten bereits bei der Entwicklung bzw.
                    Auswahl von Hardware, Software sowie Verfahren entsprechend
                    dem Prinzip des Datenschutzes, durch Technikgestaltung und
                    durch datenschutzfreundliche Voreinstellungen.
                </p>
                <p class="text-justify">
                    Kürzung der IP-Adresse: Sofern IP-Adressen von uns oder von
                    den eingesetzten Dienstleistern und Technologien verarbeitet
                    werden und die Verarbeitung einer vollständigen IP-Adresse
                    nicht erforderlich ist, wird die IP-Adresse gekürzt (auch
                    als "IP-Masking" bezeichnet). Hierbei werden die letzten
                    beiden Ziffern, bzw. der letzte Teil der IP-Adresse nach
                    einem Punkt entfernt, bzw. durch Platzhalter ersetzt. Mit
                    der Kürzung der IP-Adresse soll die Identifizierung einer
                    Person anhand ihrer IP-Adresse verhindert oder wesentlich
                    erschwert werden.
                </p>
                <p class="text-justify">
                    SSL-Verschlüsselung (https): Um Ihre via unserem
                    Online-Angebot übermittelten Daten zu schützen, nutzen wir
                    eine SSL-Verschlüsselung. Sie erkennen derart verschlüsselte
                    Verbindungen an dem Präfix https:// in der Adresszeile Ihres
                    Browsers.
                </p>

                <div class="font-bold pt-4 text-sky-900" id="m328">Plugins und eingebettete Funktionen sowie Inhalte</div>
                <p class="text-justify">
                    Wir binden in unser Onlineangebot Funktions- und
                    Inhaltselemente ein, die von den Servern ihrer jeweiligen
                    Anbieter (nachfolgend bezeichnet als "Drittanbieter”)
                    bezogen werden. Dabei kann es sich zum Beispiel um Grafiken,
                    Videos oder Stadtpläne handeln (nachfolgend einheitlich
                    bezeichnet als "Inhalte”).
                </p>
                <p class="text-justify">
                    Die Einbindung setzt immer voraus, dass die Drittanbieter
                    dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da sie
                    ohne die IP-Adresse die Inhalte nicht an deren Browser
                    senden könnten. Die IP-Adresse ist damit für die Darstellung
                    dieser Inhalte oder Funktionen erforderlich. Wir bemühen
                    uns, nur solche Inhalte zu verwenden, deren jeweilige
                    Anbieter die IP-Adresse lediglich zur Auslieferung der
                    Inhalte verwenden. Drittanbieter können ferner sogenannte
                    Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons"
                    bezeichnet) für statistische oder Marketingzwecke verwenden.
                    Durch die "Pixel-Tags" können Informationen, wie der
                    Besucherverkehr auf den Seiten dieser Webseite, ausgewertet
                    werden. Die pseudonymen Informationen können ferner in
                    Cookies auf dem Gerät der Nutzer gespeichert werden und
                    unter anderem technische Informationen zum Browser und zum
                    Betriebssystem, zu verweisenden Webseiten, zur Besuchszeit
                    sowie weitere Angaben zur Nutzung unseres Onlineangebotes
                    enthalten als auch mit solchen Informationen aus anderen
                    Quellen verbunden werden.
                </p>
                <p class="text-justify">
                    <span class="font-semibold">Hinweise zu Rechtsgrundlagen:</span>
                    Sofern wir die Nutzer um deren Einwilligung in den Einsatz
                    der Drittanbieter bitten, ist die Rechtsgrundlage der
                    Verarbeitung von Daten die Einwilligung. Ansonsten werden
                    die Daten der Nutzer auf Grundlage unserer berechtigten
                    Interessen (d.h. Interesse an effizienten, wirtschaftlichen
                    und empfängerfreundlichen Leistungen) verarbeitet. In diesem
                    Zusammenhang möchten wir Sie auch auf die Informationen zur
                    Verwendung von Cookies in dieser Datenschutzerklärung
                    hinweisen.
                </p>
                <ul class="space-y-2 text-justify">
                    <li>
                        &ndash; Verarbeitete Datenarten:<br />
                        Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
                        Inhalten, Zugriffszeiten); Meta-/Kommunikationsdaten
                        (z.B. Geräte-Informationen, IP-Adressen); Bestandsdaten
                        (z.B. Namen, Adressen); Kontaktdaten (z.B. E-Mail,
                        Telefonnummern); Inhaltsdaten (z.B. Eingaben in
                        Onlineformularen).
                    </li>
                    <li>
                        &ndash; Betroffene Personen:<br />
                        Nutzer (z.B. Webseitenbesucher, Nutzer von
                        Onlinediensten).
                    </li>
                    <li>
                        &ndash; Zwecke der Verarbeitung:<br />
                        Bereitstellung unseres Onlineangebotes und
                        Nutzerfreundlichkeit.
                    </li>
                    <li>
                        &ndash; Rechtsgrundlagen:<br />
                        Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO);
                        Vertragserfüllung und vorvertragliche Anfragen (Art. 6
                        Abs. 1 S. 1 lit. b. DSGVO); Berechtigte Interessen (Art.
                        6 Abs. 1 S. 1 lit. f. DSGVO).
                    </li>
                </ul>

                <div class="font-semibold text-slate-500 text-base">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten</div>
                <ul class="space-y-2 text-justify">
                    <li>
                        &ndash; Google Fonts:<br />Bezug
                        von Schriftarten ("Google Fonts") vom Anbieter Google
                        zum Zwecke einer technisch sicheren, wartungsfreien und
                        effizienten Nutzung von Schriftarten im Hinblick auf
                        Aktualität und Ladezeiten, deren einheitliche
                        Darstellung und Berücksichtigung möglicher
                        lizenzrechtlicher Beschränkungen. Google wird die
                        IP-Adresse des Nutzers mitgeteilt, damit Google die
                        Schriften im Browser der Nutzer bereitstellen kann.
                        Darüber hinaus werden technische Daten
                        (Spracheinstellungen, Bildschirmauflösung,
                        Betriebssystem, verwendete Hardware) übermittelt, die
                        für die Bereitstellung der Schriftarten in Abhängigkeit
                        von den verwendeten Geräten und der technischen Umgebung
                        erforderlich sind. ;
                        <span class="font-semibold">Dienstanbieter: </span>
                        Google Ireland Limited, Gordon House, Barrow Street,
                        Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600
                        Amphitheatre Parkway, Mountain View, CA 94043, USA;
                        <span class="font-semibold">Website: </span>
                        <a class="underline" href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a>;
                        <span class="font-semibold">Datenschutzerklärung: </span>
                        <a class="underline" href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>.
                    </li>
                    <li>
                        &ndash; YouTube-Videos:<br />Videoinhalte;
                        <span class="font-semibold">Dienstanbieter:</span>
                        Google Ireland Limited, Gordon House, Barrow Street,
                        Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600
                        Amphitheatre Parkway, Mountain View, CA 94043, USA;
                        <span class="font-semibold">Website:</span>
                        <a class="underline" href="https://www.youtube.com" target="_blank">https://www.youtube.com</a>;
                        <span class="font-semibold">Datenschutzerklärung: </span>
                        <a class="underline" href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a>;
                        <span class="font-semibold">Widerspruchsmöglichkeit (Opt-Out):</span>
                        Opt-Out-Plugin: <a class="underline" href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=de</a>
                        , Einstellungen für die Darstellung von Werbeeinblendungen: <a class="underline" href="https://adssettings.google.com/authenticated" target="_blank">https://adssettings.google.com/authenticated</a>.
                    </li>
                </ul>

                <div class="font-bold pt-4 text-sky-900" id="m15">Änderung und Aktualisierung der Datenschutzerklärung</div>
                <p class="text-justify">
                    Wir bitten Sie, sich regelmäßig über den Inhalt unserer
                    Datenschutzerklärung zu informieren. Wir passen die
                    Datenschutzerklärung an, sobald die Änderungen der von uns
                    durchgeführten Datenverarbeitungen dies erforderlich machen.
                    Wir informieren Sie, sobald durch die Änderungen eine
                    Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
                    sonstige individuelle Benachrichtigung erforderlich wird.
                </p>
                <p class="text-justify">
                    Sofern wir in dieser Datenschutzerklärung Adressen und
                    Kontaktinformationen von Unternehmen und Organisationen
                    angeben, bitten wir zu beachten, dass die Adressen sich über
                    die Zeit ändern können und bitten die Angaben vor
                    Kontaktaufnahme zu prüfen.
                </p>
                <div class="font-bold pt-4 text-sky-900" id="m42">Begriffsdefinitionen</div>
                <p class="text-justify">
                    In diesem Abschnitt erhalten Sie eine Übersicht über die in
                    dieser Datenschutzerklärung verwendeten Begrifflichkeiten.
                    Viele der Begriffe sind dem Gesetz entnommen und vor allem
                    im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen
                    sind verbindlich. Die nachfolgenden Erläuterungen sollen
                    dagegen vor allem dem Verständnis dienen. Die Begriffe sind
                    alphabetisch sortiert.
                </p>
                <ul class="space-y-2 text-justify">
                    <li>
                        &ndash; Personenbezogene Daten:<br />
                        "Personenbezogene Daten“ sind alle Informationen, die
                        sich auf eine identifizierte oder identifizierbare
                        natürliche Person (im Folgenden "betroffene Person“)
                        beziehen; als identifizierbar wird eine natürliche
                        Person angesehen, die direkt oder indirekt, insbesondere
                        mittels Zuordnung zu einer Kennung wie einem Namen, zu
                        einer Kennnummer, zu Standortdaten, zu einer
                        Online-Kennung (z.B. Cookie) oder zu einem oder mehreren
                        besonderen Merkmalen identifiziert werden kann, die
                        Ausdruck der physischen, physiologischen, genetischen,
                        psychischen, wirtschaftlichen, kulturellen oder sozialen
                        Identität dieser natürlichen Person sind.
                    </li>
                    <li>
                        &ndash; Verantwortlicher:<br /> Als
                        "Verantwortlicher“ wird die natürliche oder juristische
                        Person, Behörde, Einrichtung oder andere Stelle, die
                        allein oder gemeinsam mit anderen über die Zwecke und
                        Mittel der Verarbeitung von personenbezogenen Daten
                        entscheidet, bezeichnet.
                    </li>
                    <li>
                        &ndash; Verarbeitung:<br />
                        "Verarbeitung" ist jeder mit oder ohne Hilfe
                        automatisierter Verfahren ausgeführte Vorgang oder jede
                        solche Vorgangsreihe im Zusammenhang mit
                        personenbezogenen Daten. Der Begriff reicht weit und
                        umfasst praktisch jeden Umgang mit Daten, sei es das
                        Erheben, das Auswerten, das Speichern, das Übermitteln
                        oder das Löschen.
                    </li>
                </ul>

                <div class="flex justify-center">
                    <a href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow">
                        <img src="https://datenschutz-generator.de/wp-content/plugins/ts-dsg/images/dsg-seal/dsg-seal-pp-de.png" alt="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." width="250" height="250" />
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>