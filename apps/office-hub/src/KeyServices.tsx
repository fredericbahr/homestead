/*
 * COPYRIGHT (C) 2023 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Card, Heading, Icon, Stack, Text, useColorModeValue, useMediaQuery, VStack } from "@chakra-ui/react";
import { CoinsIcon, InvoiceIcon, PencilRulerIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const KeyServices = () => {
  /** flag to determine if the current device is a mobile device */
  const [isMobile] = useMediaQuery("(max-width: 62em)");
  const backgroundColor = useColorModeValue("accent.100", "brand.500");

  return (
    <Card
      backgroundColor={backgroundColor}
      borderRadius="sm"
      boxShadow="md"
      justifyContent="space-evenly"
      marginTop={{ base: 4, lg: 0 }}
      paddingX={{ base: 4, lg: 6 }}
      paddingY={{ base: 4, lg: 8 }}
      variant="filled"
      width={{ base: "75%", lg: "full" }}
    >
      <Stack
        columnGap={{ base: "none", lg: 8 }}
        direction={{ base: "column", lg: "row" }}
        margin="0 auto"
        rowGap={{ base: 8, lg: "none" }}
        width={{ base: "full", lg: "full" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ delay: isMobile ? 0.2 : 0.8, duration: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <VStack spacing={2}>
            <Icon as={InvoiceIcon} boxSize={{ base: 7, lg: 9 }} />
            <Heading as="h3" size="md" textAlign="center">
              Buchführung
            </Heading>
            <Text textAlign="center">
              Buchführung und Finanzorganisation für kleine Unternehmen – inklusive laufender Belegverwaltung,
              Einnahmen-Überschuss-Rechnung und Vorbereitung für die Steuererklärung
            </Text>
          </VStack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ delay: isMobile ? 0.3 : 0.9, duration: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <VStack spacing={2}>
            <Icon as={CoinsIcon} boxSize={{ base: 7, lg: 9 }} />
            <Heading as="h3" size="md" textAlign="center">
              Lohn- und Gehaltsabrechnungen
            </Heading>
            <Text textAlign="center">
              Zuverlässige Lohn- und Gehaltsabrechnungen – inklusive Sozialabgaben, Steueranmeldungen, rechtssicherer
              Dokumentation, Personal­an- und -abmeldungen sowie Verwaltung von Krankheitstagen und Zeiterfassung
            </Text>
          </VStack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ delay: isMobile ? 0.4 : 1.0, duration: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <VStack spacing={2}>
            <Icon as={PencilRulerIcon} boxSize={{ base: 7, lg: 9 }} />
            <Heading as="h3" size="md" textAlign="center">
              Bürodienstleistungen
            </Heading>
            <Text textAlign="center">
              Effiziente und intelligente Bürodienstleistungen – von Dokumentenmanagement und organisatorischer
              Unterstützung bis hin zur Faktuierung ihrer Leistungen
            </Text>
          </VStack>
        </motion.div>
      </Stack>
    </Card>
  );
};
