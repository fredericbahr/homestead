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
      <VStack alignItems="start">
        <Text fontSize="xl" textAlign="start">
          Leistungen
        </Text>
        <List>
          <ListItem>
            <Link href="/#services-heading">Termine</Link>
          </ListItem>
          <ListItem>
            <Link href="/#services-heading">Fotos</Link>
          </ListItem>
          <ListItem>
            <Link href="/#services-heading">Umfragen</Link>
          </ListItem>
          <ListItem>
            <Link href="/#services-heading">Anpassbarkeit</Link>
          </ListItem>
        </List>
      </VStack>

      <HStack width="full" justifyContent="space-around">
        <ColorThemeSwitch color="white" boxSize={6} />
      </HStack>

      <HStack width="full" justifyContent="space-around">
        <Link href="/imprint">
          <Text>Impressum</Text>
        </Link>
        <Link href="/data-protection">
          <Text>Datenschutz</Text>
        </Link>
      </HStack>

      <Text width="full" gridColumn="1/span 3" textAlign="center" justifySelf="end">
        © {new Date().getFullYear()} Madita Bahr - Alle Rechte vorbehalten
      </Text>
    </VStack>
  );
};
