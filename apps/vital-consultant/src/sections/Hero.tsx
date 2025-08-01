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
      columnGap={{ base: 0, lg: 12 }}
      gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
      gridTemplateRows={{ bg: "1fr 1fr", lg: "1fr" }}
      rowGap={{ base: 16, lg: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        style={{ alignSelf: "center", gridColumn: "1/span 2" }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <VStack alignContent="start" alignItems={{ base: "center", lg: "start" }} gap={{ base: 8, lg: 12 }}>
          <VStack alignItems={{ base: "center", lg: "start" }} gap={{ base: 4, lg: 8 }}>
            <VStack alignItems={{ base: "center", lg: "start" }}>
              <Heading
                as="h1"
                color="brand.500"
                size={{ base: "xl", lg: "3xl" }}
                textAlign={{ base: "center", lg: "start" }}
              >
                <Text>Madita Bahr</Text>
              </Heading>
              <Heading
                as="h2"
                color="accent.500"
                size={{ base: "md", lg: "xl" }}
                textAlign={{ base: "center", lg: "start" }}
              >
                sport & health consulting
              </Heading>
            </VStack>
            <VStack alignItems={{ base: "center", lg: "start" }} gap={2}>
              <Text color={textColor} fontSize="xl" fontWeight="semibold" textAlign={{ base: "center", lg: "start" }}>
                Gesundheit gestalten. Bewegung fördern. Prävention nachhaltig gestalten.
              </Text>

              <Text color={textColor} fontSize="xl" textAlign={{ base: "center", lg: "start" }}>
                Individuelle und wissenschaftlich fundierte Konzepte für Training, Gesundheitsförderung und Prävention –
                bedarfsgerecht für Bildung, Unternehmen und Institutionen.
              </Text>

              <Text color={textColor} fontSize="xl" textAlign={{ base: "center", lg: "start" }}>
                Als Sportwissenschaftlerin mit einem Master in Public Health verbinde ich wissenschaftliches Know-how
                mit praktischer Erfahrung in der Gesundheitsförderung. Mein Fokus liegt auf der Entwicklung und
                Umsetzung gezielter Trainings- und Präventionsprogramme – sei es im schulischen Kontext, in der
                Erwachsenenbildung oder in der strategischen Beratung. Ich unterstütze dabei, Bewegung und Gesundheit
                nachhaltig und langfristig zu verankern – durch innovative Konzepte, Workshops und Weiterbildungen.
              </Text>
            </VStack>
          </VStack>
          <Button onClick={() => navigate("/contact?concern=general")} rightIcon={<Icon as={ArrowRight} />} size="lg">
            Kontakt
          </Button>
        </VStack>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Image alt="Hero Image" borderRadius="xl" maxWidth={{ base: "70%", lg: "70%" }} src="hero.jpg" zIndex={10} />
      </motion.div>
    </Grid>
  );
};
