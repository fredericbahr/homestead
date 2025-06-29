import { Button, Flex, Heading, Stack, Icon, Image, Box, UnorderedList, ListItem, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Salary = () => {
  const navigate = useNavigate();

  return (
    <Stack direction={{ base: "column", lg: "row" }} width="full" gap={12} alignItems="start">
      <Flex flex={1}>
        <Image
          src="https://t4.ftcdn.net/jpg/00/90/48/29/240_F_90482998_ruHGNp73UJ5GbK0gv5LMqaHhl7HNLMK3.jpg"
          alt="Buchführung"
          as={motion.img}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          transition={{ delay: 0.1, duration: 0.3 } as any}
          viewport={{ amount: "some", once: true }}
          width={{ base: "90%", lg: "55%" }}
          height="auto"
          borderRadius="lg"
          alignSelf="center"
        />
      </Flex>

      <VStack
        gap={4}
        as={motion.div}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        alignSelf="end"
        flex={1}
      >
        <Heading as="h3" id="salary" size={{ base: "lg", lg: "lg" }} width="full" fontWeight="semibold">
          Lohn- und Gehaltsabrechnungen *
        </Heading>

        <Box marginLeft={4} width="full">
          <UnorderedList spacing={2} width="full" textAlign="start" paddingRight={{ base: 4, lg: 0 }}>
            <ListItem>Monatliche lfd. Lohn- und Gehaltsabrechnungen</ListItem>

            <ListItem>Sämtliche Arbeiten des Sozialversicherungsmeldewesens</ListItem>

            <ListItem>Alle Entgeltbescheinigungen und Lohnfortzahlungserstattungen</ListItem>

            <ListItem>Führen von Arbeitszeitkonten</ListItem>

            <ListItem>Auf Wunsch Zusendung der Abrechnung direkt an die Mitarbeiter</ListItem>
          </UnorderedList>
        </Box>

        <Flex width="full">
          <Button
            variant="ghost"
            paddingX={2}
            colorScheme="brand"
            rightIcon={<Icon as={ArrowRightIcon} />}
            onClick={() => navigate("/contact?concern=salary")}
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>
    </Stack>
  );
};
