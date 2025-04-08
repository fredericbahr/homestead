/*
 * COPYRIGHT (C) 2025 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Button, Grid, Heading, Icon, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");

  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      gridTemplateRows={{ bg: "1fr 1fr", lg: "1fr" }}
      columnGap={{ base: 0, lg: 12 }}
      rowGap={{ base: 16, lg: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        style={{ alignSelf: "center", gridColumn: "1/span 2" }}
      >
        <VStack alignItems={{ base: "center", lg: "start" }} alignContent="start" gap={{ base: 8, lg: 12 }}>
          <VStack alignItems={{ base: "center", lg: "start" }} gap={{ base: 4, lg: 8 }}>
            <VStack alignItems={{ base: "center", lg: "start" }}>
              <Heading
                as="h1"
                size={{ base: "xl", lg: "3xl" }}
                color="brand.500"
                textAlign={{ base: "center", lg: "start" }}
              >
                <Text>Madita Bahr</Text>
              </Heading>
              <Heading
                as="h2"
                size={{ base: "md", lg: "xl" }}
                color="accent.500"
                textAlign={{ base: "center", lg: "start" }}
              >
                sport & health consulting
              </Heading>
            </VStack>
            <VStack alignItems={{ base: "center", lg: "start" }} gap={0}>
              <Text color={textColor} fontSize="xl" textAlign={{ base: "center", lg: "start" }}>
                Hey, Ich bin Sportwissenschaftlerin mit einem Master in Public Health. Mein Fokus liegt auf der
                Förderung von Gesundheit und Bewegung durch gezielte Trainingsprogramme und Präventionsmaßnahmen –
                sowohl im Schulbereich als auch in der wissenschaftlichen Weiterbildung und Beratung
              </Text>
            </VStack>
          </VStack>
          <Button size="lg" onClick={() => navigate("/contact?concern=general")} rightIcon={<Icon as={ArrowRight} />}>
            Kontakt
          </Button>
        </VStack>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        style={{ position: "relative", display: "flex", justifyContent: "center" }}
      >
        <Image src="hero.jpg" alt="Hero Image" zIndex={10} maxWidth={{ base: "70%", lg: "70%" }} borderRadius="xl" />
      </motion.div>
    </Grid>
  );
};
