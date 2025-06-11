import { Button, Flex, Heading, Stack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Training = () => {
  const navigate = useNavigate();

  return (
    <Stack direction={{ base: "column-reverse", lg: "row" }} width="full" gap={12} alignItems="start">
      <VStack
        gap={4}
        flex={1}
        as={motion.div}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
      >
        <Heading as="h3" id="training" size={{ base: "lg", lg: "lg" }} width="full" fontWeight="semibold">
          Gerätetraining und Trainingsberatung
        </Heading>

        <Text width="full" textAlign="start">
          Ergänzend zu meinem bewegungs- und betreuungsorientierten Angebot im schulischen Kontext biete ich auch
          gesundheitsorientiertes Gerätetraining sowie individuelle Trainingsberatung an – für Jugendliche, Erwachsene
          oder Mitarbeitende im Rahmen von Gesundheitsprojekten und Präventionsmaßnahmen.
        </Text>
        <Text width="full" textAlign="start">
          Auf Basis meines akademischen Hintergrunds in Public Health, meiner Qualifikation in Krankengymnastik am Gerät
          (KGG) sowie der C-Lizenz im Fußball, entwickle ich zielgerichtete Trainingskonzepte, die auf Prävention,
          Rehabilitation und nachhaltiger Leistungssteigerung basieren.
        </Text>

        <Text width="full" textAlign="start">
          Ich leite funktionelle Einheiten an Geräten zur Kräftigung, Stabilisierung und Verbesserung der Körperhaltung.
          Das Training ist individuell abgestimmt – ob im Aufbau nach Verletzungen, zur allgemeinen Gesundheitsförderung
          oder als Ergänzung zum Vereinssport.
        </Text>

        <Text width="full" textAlign="start">
          Dieses Angebot kann flexibel in bestehende Ganztagskonzepte, Projektwochen oder als separates Gesundheitsmodul
          für Schulen, Einrichtungen oder Vereine eingebunden werden.
        </Text>

        <Flex width="full">
          <Button
            variant="ghost"
            paddingX={2}
            colorScheme="brand"
            rightIcon={<Icon as={ArrowRightIcon} />}
            onClick={() => navigate("/contact?concern=training")}
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>

      <Image
        src="./gym.jpg"
        alt="Gerätetraining und Trainingsberatung"
        as={motion.img}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        width={{ base: "70%", lg: "20%" }}
        height="auto"
        borderRadius="lg"
        alignSelf="center"
      />
    </Stack>
  );
};
