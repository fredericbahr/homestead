import { Heading, Text, VStack } from "@chakra-ui/react";

export const Services = () => {
  return (
    <VStack gap={6} textAlign="start" width="full">
      <Heading id="references" as="h2" size={{ base: "xl", lg: "2xl" }} width="full">
        Gesundheit fördern. Leistung nachhaltig steigern.
      </Heading>
      <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
        Ich unterstütze Unternehmen dabei, die Gesundheit und Leistungsfähigkeit gezielt zu verbessern. Mit fundierter
        Expertise in Sport- und Gesundheitsberatung entwickel ich maßgeschneiderte Programme für mehr Energie und höhere
        Produktivität – wissenschaftlich basiert und praxisnah umgesetzt.
      </Text>
    </VStack>
  );
};
