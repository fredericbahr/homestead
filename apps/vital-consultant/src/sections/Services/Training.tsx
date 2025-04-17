import { Button, Flex, Heading, Stack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export const Training = () => {
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
        <Heading as="h3" id="training" size={{ base: "lg", lg: "lg" }} width="full" fontWeight="semibold">
          Gerätetraining und Trainingsberatung
        </Heading>

        <Text width="full" textAlign="start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque amet, distinctio tenetur maiores
          facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi animi. Laudantium ab quas minus
          inventore saepe suscipit excepturi laboriosam, voluptas, exercitationem minima vel at! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Eum numquam illo voluptas, quae provident quia beatae? Eligendi atque
          necessitatibus dolorum!
        </Text>

        <Flex width="full">
          <Button
            variant="ghost"
            paddingX={2}
            colorScheme="brand"
            rightIcon={<Icon as={ArrowRight} />}
            onClick={() => navigate("/contact?concern=training")}
          >
            Jetzt anfragen
          </Button>
        </Flex>
      </VStack>

      <Image
        src="./gym.jpg"
        alt="Gerätetraining und Trainingsberatung"
        as={motion.img}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transition={{ delay: 0.1, duration: 0.3 } as any}
        viewport={{ amount: "some", once: true }}
        width={{ base: "70%", lg: "20%" }}
        height="auto"
        borderRadius="lg"
        alignSelf="center"
      />
    </Stack>
  );
};
