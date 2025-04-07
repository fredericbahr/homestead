import { Heading, Text, VStack } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <VStack gap={6} textAlign="start" width="full">
      <Heading id="references" as="h2" size={{ base: "xl", lg: "2xl" }} width="full">
        Über mich
      </Heading>
      <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
        Mit einem Hintergrund in Sportwissenschaft und langjähriger Erfahrung in der Gesundheitsberatung unterstütze ich
        Unternehmen dabei, nachhaltige Strategien zur Leistungsförderung und Mitarbeitergesundheit zu entwickeln. Mein
        Ansatz verbindet wissenschaftliche Erkenntnisse mit praxistauglichen Lösungen – immer mit dem Ziel, Gesundheit
        messbar zu machen und positive Veränderungen im Arbeitsalltag zu verankern.
      </Text>
    </VStack>
  );
};
