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

import { HStack, Icon, Link, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { ColorThemeSwitch } from "@homestead/components";
import { BinaryIcon } from "@phosphor-icons/react";
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
              <Link href="/#accounting">Buchführung</Link>
            </ListItem>
            <ListItem>
              <Link href="/#salary">Lohn- und Gehaltsabrechnungen</Link>
            </ListItem>
            <ListItem>
              <Link href="/#office-services">Bürodienstleistungen</Link>
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
      </HStack>

      <VStack gap={0} gridColumn="1/span 5" alignItems="center">
        <Text width="full" textAlign="center" justifySelf="end">
          © {new Date().getFullYear()} Gabriela Bahr - Alle Rechte vorbehalten
        </Text>
        <Text>
          Entwickelt von <Link href="https://fredericbahr.github.io">Frederic Bahr</Link> mit <Icon as={BinaryIcon} />
        </Text>
      </VStack>
    </VStack>
  );
};
