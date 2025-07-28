/*
 * COPYRIGHT (C) 2025 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";

export const Imprint = () => {
  return (
    <Box marginBottom={4} marginX="auto" width="95%">
      <Box width={{ base: "100%", lg: "50%" }}>
        <Heading as="h1">Impressum</Heading>
        <VStack marginTop={4} spacing={4}>
          <VStack alignItems="start" spacing={1} width="full">
            <Text>Angaben gemäß § 5 TMG</Text>

            <VStack alignItems="start" spacing={0} width="full">
              <Text>Gabriela Bahr</Text>
              <Text>Halsbachweg 18</Text>
              <Text>36124 Eichenzell</Text>
            </VStack>
          </VStack>

          <VStack alignItems="start" spacing={1} width="full">
            <Text fontWeight="bold">Vertreten durch:</Text>
            <Text>Gabriela Bahr</Text>
          </VStack>

          <VStack alignItems="start" spacing={1} width="full">
            <Text fontWeight="bold">Kontakt:</Text>
            <Text>Telefon: 01578-2030949</Text>
            <Text>
              E-Mail:{" "}
              <Link color="brand.500" href="mailto:gb.bueroservice@gmail.com">
                gb.bueroservice@gmail.com
              </Link>
            </Text>
          </VStack>

          <VStack alignItems="start" spacing={2} width="full">
            <Heading as="h2" fontSize="larger">
              Haftungsausschluss:
            </Heading>
            <VStack alignItems="start" spacing={1} width="full">
              <Heading as="h3" fontSize="lg">
                Haftung für Inhalte
              </Heading>
              <Text>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
                § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
                8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </Text>
            </VStack>
            <VStack alignItems="start" spacing={1} width="full">
              <Heading as="h3" fontSize="lg">
                Haftung für Links
              </Heading>
              <Text>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </Text>
            </VStack>
            <VStack alignItems="start" spacing={1} width="full">
              <Heading as="h3" fontSize="lg">
                Urheberrecht
              </Heading>
              <Text>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </Text>
            </VStack>
            <VStack alignItems="start" spacing={1} width="full">
              <Heading as="h3" fontSize="lg">
                Datenschutz
              </Heading>
              <Text>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf
                unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben
                werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
                ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </Text>
              <Text>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                nicht möglich.
              </Text>
              <Text>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
                Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit
                ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
                Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </Text>
              <Text>
                Weitere Informationen finden Sie{" "}
                <Link color="brand.500" href="/data-protection">
                  hier
                </Link>
                .
              </Text>
            </VStack>
            <VStack alignItems="start" spacing={1} width="full">
              <Heading as="h3" fontSize="lg">
                Google Analytics
              </Heading>
              <Text>
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google
                Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die
                eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten
                Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server
                von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre
                Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber
                zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen,
                sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
                Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
                können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software
                verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
                Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie
                sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und
                Weise und zu dem zuvor benannten Zweck einverstanden.
              </Text>
            </VStack>
            <VStack alignItems="start" spacing={1} width="full">
              <Heading as="h3" fontSize="lg">
                Google AdSense
              </Heading>
              <Text>
                Diese Website benutzt Google Adsense, einen Webanzeigendienst der Google Inc., USA (''Google''). Google
                Adsense verwendet sog. ''Cookies'' (Textdateien), die auf Ihrem Computer gespeichert werden und die eine
                Analyse der Benutzung der Website durch Sie ermöglicht. Google Adsense verwendet auch sog. ''Web
                Beacons'' (kleine unsichtbare Grafiken) zur Sammlung von Informationen. Durch die Verwendung des Web
                Beacons können einfache Aktionen wie der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt
                werden. Die durch den Cookie und/oder Web Beacon erzeugten Informationen über Ihre Benutzung dieser
                Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und
                dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website im Hinblick auf
                die Anzeigen auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen für die Websitebetreiber
                zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen,
                sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
                Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Das
                Speichern von Cookies auf Ihrer Festplatte und die Anzeige von Web Beacons können Sie verhindern, indem
                Sie in Ihren Browser-Einstellungen ''keine Cookies akzeptieren'' wählen (Im MS Internet-Explorer unter
                ''Extras &rarr; Internetoptionen &rarr; Datenschutz &rarr; Einstellung''; im Firefox unter ''Extras
                &rarr; Einstellungen &rarr; Datenschutz &rarr; Cookies''); wir weisen Sie jedoch darauf hin, dass Sie in
                diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können.
                Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten
                durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
              </Text>
            </VStack>
            <Text>
              Website Impressum erstellt durch{" "}
              <Link href="https://www.impressum-generator.de" isExternal>
                impressum-generator.de
              </Link>{" "}
              von der{" "}
              <Link href="https://www.kanzlei-hasselbach.de/" isExternal rel="nofollow">
                Kanzlei Hasselbach
              </Link>
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};
