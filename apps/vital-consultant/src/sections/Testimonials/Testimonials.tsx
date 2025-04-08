import { SubHeading, TestimonialSlider } from "@homestead/components";
import { testimonials } from "./testimonials";
import { useState } from "react";
import { Heading, VStack } from "@chakra-ui/react";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <VStack gap={{ base: 8, lg: 24 }} width="full">
      <VStack gap={1} width="full" id="references" >
        <SubHeading dash>Was sagen meine Kunden</SubHeading>
        <Heading as="h2" size={{ base: "lg", lg: "xl" }} width="full">
          Vertrauen ist gut – Ergebnisse sind besser.
        </Heading>
      </VStack>

      <TestimonialSlider testimonials={testimonials} index={index} onIndexChange={setIndex} />
    </VStack>
  );
};
