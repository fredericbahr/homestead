import { VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";
import { School } from "./School.tsx";
import { Training } from "./Training.tsx";
import { Workshop } from "./Workshop.tsx";

export const Services = () => (
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
