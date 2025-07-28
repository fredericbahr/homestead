import { Button, Flex, Heading, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { type NavigateFunction, useNavigate } from "react-router-dom";

export const School = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Stack alignItems="start" direction={{ base: "column", lg: "row" }} gap={12} width="full">
      <Image
        alignSelf="center"
        alt="Sport- und Sozialunterricht"
        as={motion.img}
        borderRadius="lg"
        height="auto"
        initial={{ opacity: 0, x: -100 }}
        src="./school.jpeg"
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        width={{ base: "70%", lg: "15%" }}
      />

      <VStack
        as={motion.div}
        flex={1}
        gap={4}
        initial={{ opacity: 0, x: 100 }}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Heading as="h3" fontWeight="semibold" id="school" size={{ base: "lg", lg: "lg" }} width="full">
          Sport- und Sozialunterricht
        </Heading>

        <Text textAlign="start" width="full">
          Auf Basis meines akademischen Hintergrunds in Sonderpädagogik und Sportwissenschaften biete ich ein ein
          kombiniertes Unterrichts- und Betreuungskonzept an, das gezielt körperliche Aktivität mit pädagogischer
          Begleitung und Entwicklung verbindet.{" "}
        </Text>
        <Text textAlign="start" width="full">
          Dabei gestalte ich Sporteinheiten, die nicht nur die motorische Entwicklung und körperliche Fitness fördert,
          sondern auch zentrale soziale Kompetenzen wie Teamfähigkeit, Fairness und Rücksichtnahme stärkt und
          vermittelt.{" "}
        </Text>
        <Text textAlign="start" width="full">
          Zusätzlich übernehme ich die Betreuung der Kinder und begleite sie bei ihren Hausaufgaben in ruhiger,
          strukturierter Atmosphäre und stehe unterstützend zur Seite. Darüber hinaus biete ich Raum für soziales
          Lernen, Gesprächsangebote und gemeinsame Aktivitäten.
        </Text>
        <Text textAlign="start" width="full">
          Mein Angebot richtet sich insbesondere an Schulen mit Ganztagsbetrieb, Förderzentren sowie Einrichtungen, die
          Wert auf Bewegung, soziale Entwicklung und individuelle Förderung legen.
        </Text>

        <Flex width="full">
          <Button
            colorScheme="brand"
            onClick={() => navigate("/contact?concern=school")}
            paddingX={2}
            rightIcon={<Icon as={ArrowRightIcon} />}
            variant="ghost"
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>
    </Stack>
  );
};
