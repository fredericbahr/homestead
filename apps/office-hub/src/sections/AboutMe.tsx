import { Image, Stack, VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";
import { motion } from "framer-motion";

export const AboutMe = () => {
  // const linkColor = useColorModeValue("accent.700", "accent.600");

  return (
    <VStack gap={6} textAlign="start" width="full">
      <VStack gap={1} width="full" id="about-me">
        <SubHeading dash>Über mich</SubHeading>
      </VStack>

      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        gap={12}
        width="full"
        alignItems="center"
        as={motion.div}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
      >
        <VStack gap={4}></VStack>

        <Image
          src="./about-me.jpeg"
          alt="Über mich"
          width={{ base: "70%", lg: "22%" }}
          height="auto"
          borderRadius="lg"
        />
      </Stack>
    </VStack>
  );
};
