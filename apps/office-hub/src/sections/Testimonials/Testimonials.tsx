import { Image, Stack, VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";

export const Testimonials = () => {
  return (
    <VStack gap={{ base: 8, lg: 24 }} width="full">
      <VStack gap={12} id="references" width="full">
        <SubHeading dash>Referenzen</SubHeading>

        <Stack direction={{ base: "column", lg: "row" }} gap={{ base: 16, lg: 24 }}>
          <Image objectFit="contain" src="./logo_mieterbund_fulda.png" width="200px" />
          <Image objectFit="contain" src="./fw-group.png" width="90px" />
          <Image objectFit="contain" src="./cs-steuerberater.png" width="200px" />
        </Stack>
      </VStack>
    </VStack>
  );
};
