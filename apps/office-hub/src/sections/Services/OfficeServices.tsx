import { Button, Flex, Heading, Stack, Icon, Image, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const OfficeServices = () => {
  const navigate = useNavigate();

  return (
    <Stack direction={{ base: "column-reverse", lg: "row" }} width="full" gap={12} alignItems="start">
      <VStack
        gap={4}
        flex={1}
        as={motion.div}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
      >
        <Heading as="h3" id="office-services" size={{ base: "lg", lg: "lg" }} width="full" fontWeight="semibold">
          Bürodienstleistungen
        </Heading>

        <Flex width="full">
          <Button
            variant="ghost"
            paddingX={2}
            colorScheme="brand"
            rightIcon={<Icon as={ArrowRightIcon} />}
            onClick={() => navigate("/contact?concern=office-services")}
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>

      <Image
        src="./office-services.webp"
        alt="Bürodienstleistungen"
        as={motion.img}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        width={{ base: "70%", lg: "17%" }}
        height="auto"
        borderRadius="lg"
        alignSelf="center"
      />
    </Stack>
  );
};
