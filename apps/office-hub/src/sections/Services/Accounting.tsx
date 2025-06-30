import { Heading, Image, Flex, Box, Button, VStack, Icon, Stack, UnorderedList, ListItem } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Accounting = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Stack direction={{ base: "column-reverse", lg: "row" }} width="full" gap={12} alignItems="start">
      <VStack
        gap={4}
        flex={2}
        as={motion.div}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
      >
        <Heading as="h3" id="accounting" size={{ base: "lg", lg: "lg" }} width="full" fontWeight="semibold">
          Buchführung *
        </Heading>

        <Box marginLeft={4} width="full">
          <UnorderedList spacing={2} width="full" textAlign="start"  paddingRight={{ base: 4, lg: 0 }}>
            <ListItem>Sortieren und Ordnen Ihrer Buchhaltungsunterlagen</ListItem>

            <ListItem>Buchen der laufenden Geschäftsvorfälle</ListItem>

            <ListItem>Belegkontierung</ListItem>

            <ListItem>Debitoren- und Kreditorenüberwachung & Mahnwesen</ListItem>

            <ListItem>Zahlungsverkehr</ListItem>

            <ListItem>Betriebwirtschaftliche Auswertungen</ListItem>

            <ListItem>Erstellung von Monats- und Jahresabschlüssen</ListItem>

            <ListItem>Unterstützung in betriebswirtschaftlichen Fragestellungen</ListItem>
          </UnorderedList>
        </Box>

        <Flex width="full">
          <Button
            variant="ghost"
            paddingX={2}
            colorScheme="brand"
            rightIcon={<Icon as={ArrowRightIcon} />}
            onClick={() => navigate("/contact?concern=accounting")}
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>

      <Image
        src="./accounting.webp"
        alt="Buchführung"
        as={motion.img}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        width={{ base: "90%", lg: "25%" }}
        height="auto"
        borderRadius="lg"
        alignSelf="center"
        flex={1}
      />
    </Stack>
  );
};
