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

import { Button, Flex, Grid, HStack, Icon, Link, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { BinaryIcon } from "@phosphor-icons/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Grid
      alignItems="center"
      backgroundColor="brand.500"
      clipPath="polygon(0 20%, 100% 0, 100% 100%, 0% 100%);"
      color="white"
      gridTemplateColumns="repeat(5, 1fr)"
      paddingBottom={8}
      paddingTop={24}
      paddingX={8}
      rowGap={16}
      width="full"
    >
      <HStack alignItems="start" gridColumn="1/5" justifyContent="space-around" width="full">
        <VStack alignItems="start">
          <Text fontSize="xl" textAlign="start">
            Leistungen
          </Text>
          <List>
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

        <VStack alignItems="start">
          <Text fontSize="xl" textAlign="start">
            Anderes
          </Text>
          <List>
            <ListItem>
              <Link href="/#about-me">Über mich</Link>
            </ListItem>
            <ListItem>
              <Link href="/#references">Referenzen</Link>
            </ListItem>
          </List>
        </VStack>

        <VStack alignItems="start">
          <Text fontSize="xl" textAlign="start">
            Rechtliches
          </Text>
          <List>
            <ListItem>
              <Link as={RouterLink} to="/imprint">
                Impressum
              </Link>
            </ListItem>
          </List>
        </VStack>
      </HStack>
      <Flex alignItems="center" justifyContent="center">
        <Button
          backgroundColor="brand.700"
          color="white"
          colorScheme="whiteAlpha"
          onClick={() => navigate("/contact?concern=general")}
          size="lg"
          variant="solid"
        >
          Kontakt
        </Button>
      </Flex>
      <VStack alignItems="center" gap={0} gridColumn="1/span 5">
        <Text justifySelf="end" textAlign="center" width="full">
          © {new Date().getFullYear()} Gabriela Bahr - Alle Rechte vorbehalten
        </Text>
        <Text>
          Entwickelt von <Link href="https://fredericbahr.github.io">Frederic Bahr</Link> mit <Icon as={BinaryIcon} />
        </Text>
      </VStack>
    </Grid>
  );
};
