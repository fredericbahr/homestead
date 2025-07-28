import { Box, Button, Flex, Heading, Icon, Image, ListItem, Stack, UnorderedList, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const OfficeServices = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="start" direction={{ base: "column-reverse", lg: "row" }} gap={12} width="full">
      <VStack
        as={motion.div}
        flex={1}
        gap={4}
        initial={{ opacity: 0, x: 100 }}
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Heading as="h3" fontWeight="semibold" id="office-services" size={{ base: "lg", lg: "lg" }} width="full">
          Bürodienstleistungen
        </Heading>

        <Box marginLeft={4} width="full">
          <UnorderedList paddingRight={{ base: 4, lg: 0 }} spacing={2} textAlign="start" width="full">
            <ListItem>Rechtssicherere digitale Dokumentanablage</ListItem>
            <ListItem>Beleggutarchivierung</ListItem>
            <ListItem>Faktuierung ihrer Dienstleistungen und Produkte & Mahnwesen</ListItem>
          </UnorderedList>
        </Box>

        <Flex width="full">
          <Button
            colorScheme="brand"
            onClick={() => navigate("/contact?concern=office-services")}
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
        alt="Bürodienstleistungen"
        as={motion.img}
        borderRadius="lg"
        height="auto"
        initial={{ opacity: 0, x: -100 }}
        src="./office-services.webp"
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        width={{ base: "70%", lg: "30%" }}
      />
    </Stack>
  );
};
