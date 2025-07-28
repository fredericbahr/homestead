import { Box, Button, Flex, Heading, Icon, Image, ListItem, Stack, UnorderedList, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Salary = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="start" direction={{ base: "column", lg: "row" }} gap={12} width="full">
      <Flex flex={1}>
        <Image
          alignSelf="center"
          alt="Buchführung"
          as={motion.img}
          borderRadius="lg"
          height="auto"
          initial={{ opacity: 0, x: -100 }}
          src="https://t4.ftcdn.net/jpg/00/90/48/29/240_F_90482998_ruHGNp73UJ5GbK0gv5LMqaHhl7HNLMK3.jpg"
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          transition={{ delay: 0.1, duration: 0.3 } as any}
          viewport={{ amount: "some", once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          width={{ base: "90%", lg: "55%" }}
        />
      </Flex>

      <VStack
        alignSelf="end"
        as={motion.div}
        flex={1}
        gap={4}
        initial={{ opacity: 0, x: -100 }}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Heading as="h3" fontWeight="semibold" id="salary" size={{ base: "lg", lg: "lg" }} width="full">
          Lohn- und Gehaltsabrechnungen *
        </Heading>

        <Box marginLeft={4} width="full">
          <UnorderedList paddingRight={{ base: 4, lg: 0 }} spacing={2} textAlign="start" width="full">
            <ListItem>Monatliche lfd. Lohn- und Gehaltsabrechnungen</ListItem>

            <ListItem>Sämtliche Arbeiten des Sozialversicherungsmeldewesens</ListItem>

            <ListItem>Alle Entgeltbescheinigungen und Lohnfortzahlungserstattungen</ListItem>

            <ListItem>Führen von Arbeitszeitkonten</ListItem>

            <ListItem>Auf Wunsch Zusendung der Abrechnung direkt an die Mitarbeiter</ListItem>
          </UnorderedList>
        </Box>

        <Flex width="full">
          <Button
            colorScheme="brand"
            onClick={() => navigate("/contact?concern=salary")}
            paddingX={2}
            rightIcon={<Icon as={ArrowRightIcon} />}
            variant="ghost"
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>
    </Stack>
  );
};
