import { Button, Flex, Heading, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Training = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="start" direction={{ base: "column-reverse", lg: "row" }} gap={12} width="full">
      <VStack
        as={motion.div}
        flex={1}
        gap={4}
        initial={{ opacity: 0, x: -100 }}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Heading as="h3" fontWeight="semibold" id="training" size={{ base: "lg", lg: "lg" }} width="full">
          Gerätetraining und Trainingsberatung
        </Heading>

        <Text textAlign="start" width="full">
          Ergänzend zu meinem bewegungs- und betreuungsorientierten Angebot im schulischen Kontext biete ich auch
          gesundheitsorientiertes Gerätetraining sowie individuelle Trainingsberatung an – für Jugendliche, Erwachsene
          oder Mitarbeitende im Rahmen von Gesundheitsprojekten und Präventionsmaßnahmen.
        </Text>
        <Text textAlign="start" width="full">
          Auf Basis meines akademischen Hintergrunds in Public Health, meiner Qualifikation in Krankengymnastik am Gerät
          (KGG) sowie der C-Lizenz im Fußball, entwickle ich zielgerichtete Trainingskonzepte, die auf Prävention,
          Rehabilitation und nachhaltiger Leistungssteigerung basieren.
        </Text>

        <Text textAlign="start" width="full">
          Ich leite funktionelle Einheiten an Geräten zur Kräftigung, Stabilisierung und Verbesserung der Körperhaltung.
          Das Training ist individuell abgestimmt – ob im Aufbau nach Verletzungen, zur allgemeinen Gesundheitsförderung
          oder als Ergänzung zum Vereinssport.
        </Text>

        <Text textAlign="start" width="full">
          Dieses Angebot kann flexibel in bestehende Ganztagskonzepte, Projektwochen oder als separates Gesundheitsmodul
          für Schulen, Einrichtungen oder Vereine eingebunden werden.
        </Text>

        <Flex width="full">
          <Button
            colorScheme="brand"
            onClick={() => navigate("/contact?concern=training")}
            paddingX={2}
            rightIcon={<Icon as={ArrowRightIcon} />}
            variant="ghost"
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>

      <Image
        alignSelf="center"
        alt="Gerätetraining und Trainingsberatung"
        as={motion.img}
        borderRadius="lg"
        height="auto"
        initial={{ opacity: 0, x: 100 }}
        src="./gym.jpg"
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        width={{ base: "70%", lg: "20%" }}
      />
    </Stack>
  );
};
