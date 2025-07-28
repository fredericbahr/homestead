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
import { BarbellIcon, ChalkboardTeacherIcon, PresentationIcon } from "@phosphor-icons/react";
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
            <Icon as={ChalkboardTeacherIcon} boxSize={{ base: 7, lg: 9 }} />
            <Heading as="h3" size="md" textAlign="center">
              Sport- und Sozialunterricht
            </Heading>
            <Text textAlign="center">
              Unterrichts- und Projektarbeit für Schüler*innen zu Themen wie Bewegung, Gesundheitsförderung und soziale
              Kompetenz
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
            <Icon as={BarbellIcon} boxSize={{ base: 7, lg: 9 }} />
            <Heading as="h3" size="md" textAlign="center">
              Gerätetraining und Trainingsberatung
            </Heading>
            <Text textAlign="center">
              Maßgeschneiderte Trainingspläne für Einzelpersonen und Gruppen – entwickelt, um Bewegungsmangel zu
              reduzieren, Alltagsbelastungen vorzubeugen und die Leistungsfähigkeit langfristig zu steigern.
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
            <Icon as={PresentationIcon} boxSize={{ base: 7, lg: 9 }} />
            <Heading as="h3" size="md" textAlign="center">
              Vorträge und Workshops
            </Heading>
            <Text textAlign="center">
              Wissenschaftlich fundierte Vorträge und Workshops zu verschiedenen Themen im Bereich Sportwissenschaft und
              Public Health
            </Text>
          </VStack>
        </motion.div>
      </Stack>
    </Card>
  );
};
