import { Image, Link, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";

export const AboutMe = () => {
  const linkColor = useColorModeValue("accent.700", "accent.600");

  return (
    <VStack gap={6} textAlign="start" width="full">
      <VStack gap={1} width="full" id="about-me">
        <SubHeading dash>Über mich</SubHeading>
      </VStack>

      <Stack direction={{ base: "column-reverse", lg: "row" }} gap={12} width="full" alignItems="center">
        <VStack gap={4}>
          <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
            Ich bin Sportwissenschaftlerin mit einem Bachelor in Sportwissenschaften, Schwerpunkt Gesundheit und
            Bewegungspädagogik sowie Sonderpädagogik, und einem Masterabschluss in Public Health. Durch meine
            akademische Ausbildung habe ich ein fundiertes Verständnis für die Wechselwirkungen von Bewegung, Gesundheit
            und Prävention entwickelt, das ich in der Praxis kontinuierlich erweitere.
          </Text>

          <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
            In meiner bisherigen beruflichen Laufbahn konnte ich vielseitige Erfahrungen sammeln, die mir eine
            bedarfsgerechte und flexible Lösungskompetenz im Bereich Gesundheits- und Bewegungsförderung ermöglicht. Als
            Projektleiterin für Gesundheitsförderung bei{" "}
            <Link href="https://www.antonius.de/" isExternal color={linkColor}>
              antonius
            </Link>{" "}
            sowie als Sportwissenschaftlerin bei{" "}
            <Link href="https://www.instagram.com/praxiskonzept_drei/" isExternal color={linkColor}>
              Praxiskonzept drei
            </Link>{" "}
            arbeite ich intensiv an Projekten zur Gesundheitförderung.
          </Text>

          <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
            Meine Arbeit basiert auf einem interdisziplinären Ansatz, bei dem ich wissenschaftliche Erkenntnisse mit
            praktischen Anwendungen verbinde, um Menschen zu einem gesünderen und aktiveren Leben zu verhelfen. Zu
            meinen Qualifikationen gehören unter anderem eine{" "}
            <Link href="https://www.zentrale-pruefstelle-praevention.de/" isExternal color={linkColor}>
              ZPP-Zertifizierung
            </Link>
            , eine Weiterbildung in Krankengymnastik am Gerät sowie die C-Lizenz im Fußball.
          </Text>

          <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
            Ein weiterer wichtiger Bestandteil meiner Arbeit umfasst die Wissensvermittlung. In Workshops und Vorträgen
            an Hochschulen sowie als Projektlehrerin und Trainerin an Schulen (bspw. Litcam) gebe ich mein Wissen sowohl
            an Kinder und Jugendliche als auch an Erwachsene weiter und bringe praxisorientierte Konzepte näher.
          </Text>
        </VStack>

        <Image
          src="./about-me.jpeg"
          alt="Über mich"
          width={{ base: "70%", lg: "22%" }}
          height="auto"
          borderRadius="lg"
        />
      </Stack>
    </VStack>
  );
};
