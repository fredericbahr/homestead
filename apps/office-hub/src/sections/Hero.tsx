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
            <VStack alignItems={{ base: "center", lg: "start" }} gap={{ base: 4, lg: 8 }}>
              <Heading
                as="h1"
                color="brand.500"
                size={{ base: "xl", lg: "3xl" }}
                textAlign={{ base: "center", lg: "start" }}
              >
                <Text>Gabriela Bahr</Text>
              </Heading>
              <Heading
                as="h2"
                color="accent.200"
                size={{ base: "md", lg: "xl" }}
                textAlign={{ base: "center", lg: "start" }}
              >
                Buchführung & Bürodienstleistungen
              </Heading>
            </VStack>
            <VStack alignItems={{ base: "center", lg: "start" }} gap={2}>
              <Text color={textColor} fontSize="xl" fontWeight="semibold" textAlign={{ base: "center", lg: "start" }}>
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
            onClick={() => navigate("/contact?concern=general")}
            rightIcon={<Icon as={ArrowRightIcon} />}
            size="lg"
          >
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
        <Image
          alt="Hero Image"
          borderRadius="xl"
          maxWidth={{ base: "90%", lg: "full" }}
          objectFit="contain"
          src="hero.webp"
          zIndex={10}
        />
      </motion.div>
    </Grid>
  );
};
