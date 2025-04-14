import { SubHeading, TestimonialSlider } from "@homestead/components";
import { testimonials } from "./testimonials";
import { useState } from "react";
import { VStack } from "@chakra-ui/react";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <VStack gap={{ base: 8, lg: 24 }} width="full">
      <VStack gap={1} width="full" id="references">
        <SubHeading dash>Referenzen und Projekte</SubHeading>
      </VStack>

      <TestimonialSlider testimonials={testimonials} index={index} onIndexChange={setIndex} />
    </VStack>
  );
};
