import { SubHeading } from "@homestead/components";
import { Stack, Image, VStack } from "@chakra-ui/react";

export const Testimonials = () => {
  return (
    <VStack gap={{ base: 8, lg: 24 }} width="full">
      <VStack gap={12} width="full" id="references">
        <SubHeading dash>Referenzen</SubHeading>

        <Stack gap={{base: 16, lg: 24}} direction={{ base: "column", lg: "row" }}>
          <Image src="./logo_mieterbund_fulda.png" width="200px" objectFit="contain" />
          <Image src="./fw-group.png" width="90px" objectFit="contain" />
          <Image src="./cs-steuerberater.png" width="200px" objectFit="contain" />
        </Stack>
      </VStack>
    </VStack>
  );
};
