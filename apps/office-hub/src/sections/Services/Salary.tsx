import { Button, Flex, Heading, Stack, Icon, Image, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Salary = () => {
  const navigate = useNavigate();

  return (
    <Stack direction={{ base: "column", lg: "row" }} width="full" gap={12} alignItems="start">
      <Image
        src="./salary.webp"
        alt="Lohn- und Gehaltsabrechnungen"
        as={motion.img}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        width={{ base: "90%", lg: "25%" }}
        height="auto"
        borderRadius="lg"
        alignSelf="center"
      />

      <VStack
        gap={4}
        flex={1}
        as={motion.div}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
      >
        <Heading as="h3" id="salary" size={{ base: "lg", lg: "lg" }} width="full" fontWeight="semibold">
          Lohn- und Gehaltsabrechnungen
        </Heading>

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
