import { Heading, Image, Text, Flex, Button, VStack, Icon, Stack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const School = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Stack direction={{ base: "column", lg: "row" }} width="full" gap={12} alignItems="start">
      <Image
        src="./school.jpeg"
        alt="Sport- und Sozialunterricht"
        as={motion.img}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        width={{ base: "70%", lg: "15%" }}
        height="auto"
        borderRadius="lg"
        alignSelf="center"
      />

      <VStack
        gap={4}
        flex={1}
        as={motion.div}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
      >
        <Heading as="h3" id="school" size={{ base: "lg", lg: "lg" }} width="full" fontWeight="semibold">
          Sport- und Sozialunterricht
        </Heading>

        <Text width="full" textAlign="start">
          Auf Basis meines akademischen Hintergrunds in Sonderpädagogik und Sportwissenschaften biete ich ein ein
          kombiniertes Unterrichts- und Betreuungskonzept an, das gezielt körperliche Aktivität mit pädagogischer
          Begleitung und Entwicklung verbindet.{" "}
        </Text>
        <Text width="full" textAlign="start">
          Dabei gestalte ich Sporteinheiten, die nicht nur die motorische Entwicklung und körperliche Fitness fördert,
          sondern auch zentrale soziale Kompetenzen wie Teamfähigkeit, Fairness und Rücksichtnahme stärkt und
          vermittelt.{" "}
        </Text>
        <Text width="full" textAlign="start">
          Zusätzlich übernehme ich die Betreuung der Kinder und begleite sie bei ihren Hausaufgaben in ruhiger,
          strukturierter Atmosphäre und stehe unterstützend zur Seite. Darüber hinaus biete ich Raum für soziales
          Lernen, Gesprächsangebote und gemeinsame Aktivitäten.
        </Text>
        <Text width="full" textAlign="start">
          Mein Angebot richtet sich insbesondere an Schulen mit Ganztagsbetrieb, Förderzentren sowie Einrichtungen, die
          Wert auf Bewegung, soziale Entwicklung und individuelle Förderung legen.
        </Text>

        <Flex width="full">
          <Button
            variant="ghost"
            paddingX={2}
            colorScheme="brand"
            rightIcon={<Icon as={ArrowRightIcon} />}
            onClick={() => navigate("/contact?concern=school")}
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>
    </Stack>
  );
};
