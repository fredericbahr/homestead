import { TestimonialSlider } from "@homestead/components";
import { testimonials } from "./testimonials";
import { useState } from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <VStack gap={{ base: 8, lg: 24 }} width="full">
      <VStack gap={6} textAlign="start" width="full">
        <Heading id="references" as="h2" size={{ base: "xl", lg: "2xl" }} width="full">
          Vertrauen ist gut – Ergebnisse sind besser.
        </Heading>
        <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
          Hier finden Sie ausgewählte Referenzen zu Arbeiten, die ich in den letzten Jahren durchgeführt habe.
        </Text>
      </VStack>

      <TestimonialSlider testimonials={testimonials} index={index} onIndexChange={setIndex} />
    </VStack>
  );
};
