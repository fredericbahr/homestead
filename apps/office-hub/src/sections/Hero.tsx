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
import { ArrowRightIcon } from "@phosphor-icons/react";
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
            <VStack alignItems={{ base: "center", lg: "start" }} gap={{ base: 4, lg: 8 }}>
              <Heading
                as="h1"
                size={{ base: "xl", lg: "3xl" }}
                color="brand.500"
                textAlign={{ base: "center", lg: "start" }}
              >
                <Text>Gabriela Bahr</Text>
              </Heading>
              <Heading
                as="h2"
                size={{ base: "md", lg: "xl" }}
                color="accent.200"
                textAlign={{ base: "center", lg: "start" }}
              >
                Buchführung & Bürodienstleistungen
              </Heading>
            </VStack>
            <VStack alignItems={{ base: "center", lg: "start" }} gap={2}>
              <Text color={textColor} fontSize="xl" textAlign={{ base: "center", lg: "start" }} fontWeight="semibold">
                Digitale Buchführung. Intelligente Büroprozesse. Sichere Lohn- und Gehaltsabrechnungen.
              </Text>

              <Text color={textColor} fontSize="xl" textAlign={{ base: "center", lg: "start" }}>
                Mit über 25 Jahren Erfahrung in der Buchhaltung biete ich Ihnen fundiertes Know-how und zuverlässige
                Unterstützung. Meine Expertise umfasst insbesondere die effiziente Nutzung der Programme DATEV, Lexware
                und orgaMAX, wodurch ich Ihre Buchführung schnell und präzise erledige.
              </Text>
              <Text color={textColor} fontSize="xl" textAlign={{ base: "center", lg: "start" }}>
                Dank meiner ausgeprägten analytischen Fähigkeiten arbeite ich stets strukturiert, genau und mit hohem
                Qualitätsbewusstsein. Mein Fokus liegt dabei auf klaren, ergebnisorientierten Lösungen, die Ihren
                geschäftlichen Erfolg unterstützen, indem Sie sich auf{" "}
                <Text as="span" fontWeight="semibold">
                  ihre Kernaufgaben
                </Text>{" "}
                konzentrieren können.
              </Text>
            </VStack>
          </VStack>
          <Button
            size="lg"
            onClick={() => navigate("/contact?concern=general")}
            rightIcon={<Icon as={ArrowRightIcon} />}
          >
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
        <Image
          src="hero.webp"
          alt="Hero Image"
          zIndex={10}
          maxWidth={{ base: "90%", lg: "full" }}
          objectFit="contain"
          borderRadius="xl"
        />
      </motion.div>
    </Grid>
  );
};
