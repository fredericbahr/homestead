import { Box, Button, Flex, Heading, Icon, Image, ListItem, Stack, UnorderedList, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { type NavigateFunction, useNavigate } from "react-router-dom";

export const Accounting = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Stack alignItems="start" direction={{ base: "column-reverse", lg: "row" }} gap={12} width="full">
      <VStack
        as={motion.div}
        flex={2}
        gap={4}
        initial={{ opacity: 0, x: 100 }}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Heading as="h3" fontWeight="semibold" id="accounting" size={{ base: "lg", lg: "lg" }} width="full">
          Buchführung *
        </Heading>

        <Box marginLeft={4} width="full">
          <UnorderedList paddingRight={{ base: 4, lg: 0 }} spacing={2} textAlign="start" width="full">
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
            colorScheme="brand"
            onClick={() => navigate("/contact?concern=accounting")}
            paddingX={2}
            rightIcon={<Icon as={ArrowRightIcon} />}
            variant="ghost"
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>

      <Image
        alignSelf="center"
        alt="Buchführung"
        as={motion.img}
        borderRadius="lg"
        flex={1}
        height="auto"
        initial={{ opacity: 0, x: 100 }}
        src="./accounting.webp"
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        width={{ base: "90%", lg: "25%" }}
      />
    </Stack>
  );
};
