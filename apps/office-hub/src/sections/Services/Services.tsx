import { VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";
import { Accounting } from "./Accounting.tsx";
import { OfficeServices } from "./OfficeServices.tsx";
import { Salary } from "./Salary.tsx";

export const Services = () => (
  <VStack gap={12} textAlign="start" width="full">
    <VStack gap={1} width="full">
      <SubHeading dash>Meine Leistungen im Überblick</SubHeading>
    </VStack>

    <VStack gap={16} width="full">
      <Accounting />

      <Salary />

      <OfficeServices />
    </VStack>
  </VStack>
);
