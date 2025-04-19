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

import { HStack, Link, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { ColorThemeSwitch } from "@homestead/components";
import { Link as RouterLink } from "react-router-dom";

export const MobileFooter = () => {
  return (
    <VStack
      width="full"
      justifyContent="space-around"
      paddingTop={16}
      paddingBottom={6}
      backgroundColor="brand.500"
      clipPath="polygon(0 15%, 100% 0, 100% 100%, 0% 100%);"
      color="white"
      gap={4}
    >
      <VStack width="full" alignItems="center" gap={6}>
        <VStack alignItems="center">
          <Text fontSize="xl" textAlign="center">
            Leistungen
          </Text>
          <List textAlign="center">
            <ListItem>
              <Link href="/#school">Sport- und Sozialunterricht</Link>
            </ListItem>
            <ListItem>
              <Link href="/#training">Gerätetraining und Trainingsberatung</Link>
            </ListItem>
            <ListItem>
              <Link href="/#workshop">Vorträge und Workshops</Link>
            </ListItem>
          </List>
        </VStack>
        <VStack alignItems="center">
          <Text fontSize="xl" textAlign="center">
            Anderes
          </Text>
          <List textAlign="center">
            <ListItem>
              <Link href="/#about-me">Über mich</Link>
            </ListItem>
            <ListItem>
              <Link href="/#references">Referenzen</Link>
            </ListItem>
          </List>
        </VStack>
      </VStack>

      <HStack width="full" justifyContent="space-around">
        <ColorThemeSwitch color="white" boxSize={6} />
      </HStack>

      <HStack width="full" justifyContent="space-around">
        <Link as={RouterLink} to="/imprint">
          <Text>Impressum</Text>
        </Link>
        {/* <Link as={RouterLink} to="/data-protection">
          <Text>Datenschutz</Text>
        </Link> */}
      </HStack>

      <Text width="full" gridColumn="1/span 3" textAlign="center" justifySelf="end">
        © {new Date().getFullYear()} Madita Bahr - Alle Rechte vorbehalten
      </Text>
    </VStack>
  );
};
