import { Image, Stack, VStack, Text } from "@chakra-ui/react";
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
        <VStack gap={4}>
          <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
            Ich bin ausgebildete Industriekauffrau mit Weiterbildungen zur Betriebswirtin (IHK), geprüften
            Finanzbuchhalterin sowie im Bereich Xpert Business Bilanzierung. Diese fundierte Qualifikation bildet die
            Basis für meine umfassende Kompetenz in der Buchhaltung und betriebswirtschaftlichen Organisation.
          </Text>

          <Text width="full" textAlign="start" fontSize={{ base: "lg", lg: "xl" }}>
            Durch meine ausgeprägten analytischen Fähigkeiten, mein genaues und qualitätsbewusstes Arbeiten sowie meine
            praxisnahe und ergebnisorientierte Herangehensweise unterstütze ich Unternehmen effizient und zuverlässig –
            schnell, strukturiert und immer mit Blick auf das Wesentliche.
          </Text>
        </VStack>

        <Image
          src="./profilbild.jpeg"
          alt="Über mich"
          width={{ base: "70%", lg: "18%" }}
          height="auto"
          borderRadius="lg"
        />
      </Stack>
    </VStack>
  );
};
