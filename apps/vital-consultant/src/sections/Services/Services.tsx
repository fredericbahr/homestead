import { Heading, Text, VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";
import { School } from "./School";
import { Training } from "./Training";
import { Workshop } from "./Workshop";

export const Services = () => {
  return (
    <VStack gap={8} textAlign="start" width="full">
      <VStack gap={1} width="full">
        <SubHeading dash>Meine Leistungen im Überblick</SubHeading>
        <Heading as="h2" id="services" size={{ base: "lg", lg: "xl" }} width="full">
          Gesundheit fördern. Leistung nachhaltig steigern.
        </Heading>
      </VStack>

      <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
        Ich unterstütze Unternehmen dabei, die Gesundheit und Leistungsfähigkeit gezielt zu verbessern. Mit fundierter
        Expertise in Sport- und Gesundheitsberatung entwickel ich maßgeschneiderte Programme für mehr Energie und höhere
        Produktivität – wissenschaftlich basiert und praxisnah umgesetzt.
      </Text>

      <VStack gap={16} width="full">
        <School />

        <Training />

        <Workshop />
      </VStack>
    </VStack>
  );
};
