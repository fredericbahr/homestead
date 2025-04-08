import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";

export const AboutMe = () => {
  return (
    <VStack gap={6} textAlign="start" width="full">
      <VStack gap={1} width="full" id="about-me">
        <SubHeading dash>Meine Geschichte</SubHeading>
        <Heading as="h2" size={{ base: "lg", lg: "xl" }} width="full">
          Ihre Expertin – persönlich und professionell
        </Heading>
      </VStack>
      <Stack direction={{ base: "column-reverse", lg: "row" }} gap={6} width="full" alignItems="center">
        <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
          Mit einem Hintergrund in Sportwissenschaft und langjähriger Erfahrung in der Gesundheitsberatung unterstütze
          ich Unternehmen dabei, nachhaltige Strategien zur Leistungsförderung und Mitarbeitergesundheit zu entwickeln.
          Mein Ansatz verbindet wissenschaftliche Erkenntnisse mit praxistauglichen Lösungen – immer mit dem Ziel,
          Gesundheit messbar zu machen und positive Veränderungen im Arbeitsalltag zu verankern.
        </Text>
        <Image
          src="./about-me.jpeg"
          alt="Über mich"
          width={{ base: "70%", lg: "20%" }}
          height="auto"
          borderRadius="lg"
        />
      </Stack>
    </VStack>
  );
};
