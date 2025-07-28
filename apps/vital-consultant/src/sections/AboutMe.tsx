import { Image, Link, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const linkColor = useColorModeValue("accent.700", "accent.600");

  return (
    <VStack gap={6} textAlign="start" width="full">
      <VStack gap={1} id="about-me" width="full">
        <SubHeading dash>Über mich</SubHeading>
      </VStack>

      <Stack
        alignItems="center"
        as={motion.div}
        direction={{ base: "column-reverse", lg: "row" }}
        gap={12}
        initial={{ opacity: 0, y: -100 }}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        width="full"
      >
        <VStack gap={4}>
          <Text fontSize={{ base: "lg", lg: "xl" }} textAlign="start" width="full">
            Ich bin Sportwissenschaftlerin mit einem Bachelor in Sportwissenschaften, Schwerpunkt Gesundheit und
            Bewegungspädagogik sowie Sonderpädagogik, und einem Masterabschluss in Public Health. Durch meine
            akademische Ausbildung habe ich ein fundiertes Verständnis für die Wechselwirkungen von Bewegung, Gesundheit
            und Prävention entwickelt, das ich in der Praxis kontinuierlich erweitere.
          </Text>

          <Text fontSize={{ base: "lg", lg: "xl" }} textAlign="start" width="full">
            In meiner bisherigen beruflichen Laufbahn konnte ich vielseitige Erfahrungen sammeln, die mir eine
            bedarfsgerechte und flexible Lösungskompetenz im Bereich Gesundheits- und Bewegungsförderung ermöglicht. Als
            Projektleiterin für Gesundheitsförderung bei{" "}
            <Link color={linkColor} href="https://www.antonius.de/" isExternal>
              antonius
            </Link>{" "}
            sowie als Sportwissenschaftlerin bei{" "}
            <Link color={linkColor} href="https://www.instagram.com/praxiskonzept_drei/" isExternal>
              Praxiskonzept drei
            </Link>{" "}
            arbeite ich intensiv an Projekten zur Gesundheitförderung.
          </Text>

          <Text fontSize={{ base: "lg", lg: "xl" }} textAlign="start" width="full">
            Meine Arbeit basiert auf einem interdisziplinären Ansatz, bei dem ich wissenschaftliche Erkenntnisse mit
            praktischen Anwendungen verbinde, um Menschen zu einem gesünderen und aktiveren Leben zu verhelfen. Zu
            meinen Qualifikationen gehören unter anderem eine{" "}
            <Link color={linkColor} href="https://www.zentrale-pruefstelle-praevention.de/" isExternal>
              ZPP-Zertifizierung
            </Link>
            , eine Weiterbildung in Krankengymnastik am Gerät sowie die C-Lizenz im Fußball.
          </Text>

          <Text fontSize={{ base: "lg", lg: "xl" }} textAlign="start" width="full">
            Ein weiterer wichtiger Bestandteil meiner Arbeit umfasst die Wissensvermittlung. In Workshops und Vorträgen
            an Hochschulen sowie als Projektlehrerin und Trainerin an Schulen (bspw. Litcam) gebe ich mein Wissen sowohl
            an Kinder und Jugendliche als auch an Erwachsene weiter und bringe praxisorientierte Konzepte näher.
          </Text>
        </VStack>

        <Image
          alt="Über mich"
          borderRadius="lg"
          height="auto"
          src="./about-me.jpeg"
          width={{ base: "70%", lg: "22%" }}
        />
      </Stack>
    </VStack>
  );
};
