import { VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";
import { School } from "./School";
import { Training } from "./Training";
import { Workshop } from "./Workshop";

export const Services = () => {
  return (
    <VStack gap={12} textAlign="start" width="full">
      <VStack gap={1} width="full">
        <SubHeading dash>Meine Leistungen im Überblick</SubHeading>
      </VStack>

      <VStack gap={16} width="full">
        <School />

        <Training />

        <Workshop />
      </VStack>
    </VStack>
  );
};
