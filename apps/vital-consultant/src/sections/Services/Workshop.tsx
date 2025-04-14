import { Box, Button, Flex, Heading, Stack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export const Workshop = () => {
  const navigate = useNavigate();

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition={{ delay: 0.3, duration: 0.5 } as any}
      viewport={{ once: true }}
    >
      <Stack direction={{ base: "column", lg: "row" }} width="full" gap={12} alignItems="start">
        <Image
          src="./workshop.jpg"
          alt="Vorträge und Workshops"
          width={{ base: "70%", lg: "20%" }}
          height="auto"
          borderRadius="lg"
          alignSelf="center"
        />

        <VStack gap={4} flex={1}>
          <Heading as="h3" id="workshop" size={{ base: "lg", lg: "lg" }} width="full" fontWeight="semibold">
            Vorträge und Workshops
          </Heading>

          <Text width="full" textAlign="start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque amet, distinctio tenetur maiores
            facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi animi. Laudantium ab quas minus
            inventore saepe suscipit excepturi laboriosam, voluptas, exercitationem minima vel at! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Eum numquam illo voluptas, quae provident quia beatae? Eligendi atque
            necessitatibus dolorum!
          </Text>

          <Flex width="full">
            <Button
              variant="ghost"
              paddingX={2}
              colorScheme="brand"
              rightIcon={<Icon as={ArrowRight} />}
              onClick={() => navigate("/contact?concern=workshop")}
            >
              Jetzt anfragen
            </Button>
          </Flex>
        </VStack>
      </Stack>
    </Box>
  );
};
