import { Button, Flex, Heading, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Workshop = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="start" direction={{ base: "column", lg: "row" }} gap={12} width="full">
      <Image
        alignSelf="center"
        alt="Vorträge und Workshops"
        as={motion.img}
        borderRadius="lg"
        height="auto"
        // eslint-disable-next-line @typescript-eslint/no-explicit-anyinitial={{ opacity: 0, x: -100 }}
        src="./workshop.jpg"
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        width={{ base: "70%", lg: "20%" }}
      />

      <VStack
        as={motion.div}
        flex={1}
        gap={4}
        initial={{ opacity: 0, x: 100 }}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any} // eslint-disable-next-line @typescript-eslint/no-explicit-any
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Heading as="h3" fontWeight="semibold" id="workshop" size={{ base: "lg", lg: "lg" }} width="full">
          Vorträge und Workshops
        </Heading>

        <Text textAlign="start" width="full">
          Ergänzend zu meinen praktischen Angeboten im schulischen und gesundheitlichen Kontext biete ich auch fachliche
          Vorträge und interaktive Workshops an Hochschulen und Universitäten an. Mein Ziel ist es, wissenschaftliche
          Inhalte praxisnah aufzubereiten und Studierende sowie Fachpersonal für Schnittstellen zwischen Bildung,
          Bewegung und Gesundheit zu sensibilisieren.
        </Text>

        <Text textAlign="start" width="full">
          Auf Grundlage meiner akademischen Ausbildung in Sportwissenschaft, Sonderpädagogik und Public Health entwickle
          ich Formate, die aktuelle Forschung mit konkreten Anwendungsbezügen verknüpfen.
        </Text>

        <Text textAlign="start" width="full">
          Die Inhalte können als Einzelvortrag, Tagesworkshop oder im Rahmen von Ringvorlesungen, Lehraufträgen oder
          Projektwochen angeboten werden – gerne auch in enger Abstimmung mit den jeweiligen Studiengängen.
        </Text>
        <Text textAlign="start" width="full">
          Mit meinem fachübergreifenden Blick und praxisnahen Erfahrungshintergrund unterstütze ich Hochschulen dabei,
          aktuelle Herausforderungen im Bereich Bewegung, Bildung und Gesundheit fundiert und interdisziplinär zu
          vermitteln.
        </Text>

        <Flex width="full">
          <Button
            colorScheme="brand"
            onClick={() => navigate("/contact?concern=workshop")}
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
