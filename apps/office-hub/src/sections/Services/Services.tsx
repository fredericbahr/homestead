import { VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";
import { Accounting } from "./Accounting";
import { OfficeServices } from "./OfficeServices";
import { Salary } from "./Salary";

export const Services = () => {
  return (
    <VStack gap={12} textAlign="start" width="full">
      <VStack gap={1} width="full">
        <SubHeading dash>Meine Leistungen im Überblick</SubHeading>
      </VStack>

      <VStack gap={16} width="full">
        <Accounting />

        <OfficeServices />

        <Salary />
      </VStack>
    </VStack>
  );
};
