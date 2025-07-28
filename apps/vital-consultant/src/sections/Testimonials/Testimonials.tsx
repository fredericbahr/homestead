import { VStack } from "@chakra-ui/react";
import { SubHeading, TestimonialSlider } from "@homestead/components";
import { useState } from "react";
import { testimonials } from "./testimonials";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <VStack gap={{ base: 8, lg: 24 }} width="full">
      <VStack gap={1} id="references" width="full">
        <SubHeading dash>Referenzen und Projekte</SubHeading>
      </VStack>

      <TestimonialSlider index={index} onIndexChange={setIndex} testimonials={testimonials} />
    </VStack>
  );
};
