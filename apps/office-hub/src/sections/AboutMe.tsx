import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import { SubHeading } from "@homestead/components";
import { motion } from "framer-motion";

export const AboutMe = () => {
  // const linkColor = useColorModeValue("accent.700", "accent.600");

  return (
    <VStack gap={6} textAlign="start" width="full">
      <VStack gap={1} id="about-me" width="full">
        <SubHeading dash>Über mich</SubHeading>
      </VStack>

      <Stack
        alignItems="center"
        as={motion.div}
        direction={{ base: "column-reverse", lg: "row" }}
        gap={12}
        initial={{ opacity: 0, y: -100 }}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        width="full"
      >
        <VStack gap={4}>
          <Text fontSize={{ base: "lg", lg: "xl" }} textAlign="start" width="full">
            Ich bin ausgebildete Industriekauffrau mit Weiterbildungen zur Betriebswirtin (IHK), geprüften
            Finanzbuchhalterin sowie im Bereich Xpert Business Bilanzierung. Diese fundierte Qualifikation bildet die
            Basis für meine umfassende Kompetenz in der Buchhaltung und betriebswirtschaftlichen Organisation.
          </Text>

          <Text fontSize={{ base: "lg", lg: "xl" }} textAlign="start" width="full">
            Durch meine ausgeprägten analytischen Fähigkeiten, mein genaues und qualitätsbewusstes Arbeiten sowie meine
            praxisnahe und ergebnisorientierte Herangehensweise unterstütze ich Unternehmen effizient und zuverlässig –
            schnell, strukturiert und immer mit Blick auf das Wesentliche.
          </Text>
        </VStack>

        <Image
          alt="Über mich"
          borderRadius="lg"
          height="auto"
          src="./profilbild.jpeg"
          width={{ base: "70%", lg: "18%" }}
        />
      </Stack>
    </VStack>
  );
};
