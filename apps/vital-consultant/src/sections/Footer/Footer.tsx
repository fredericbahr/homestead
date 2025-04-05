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

import { Button, Flex, Grid, HStack, Link, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Grid
      gridTemplateColumns="repeat(5, 1fr)"
      width="full"
      backgroundColor="brand.500"
      paddingTop={24}
      paddingBottom={8}
      paddingX={8}
      color="white"
      clipPath="polygon(0 20%, 100% 0, 100% 100%, 0% 100%);"
      alignItems="center"
      rowGap={16}
    >
      <HStack width="full" justifyContent="space-around" alignItems="start" gridColumn="1/5">
        <VStack alignItems="start">
          <Text fontSize="xl" textAlign="start">
            Leistungen
          </Text>
          <List>
            <ListItem>
              <Link href="/#school-heading">Sport- und Sozialunterricht</Link>
            </ListItem>
            <ListItem>
              <Link href="/#training-heading">Gerätetraining und Trainingsberatung</Link>
            </ListItem>
            <ListItem>
              <Link href="/#workshop-heading">Vorträge und Workshops</Link>
            </ListItem>
          </List>
        </VStack>

        <VStack alignItems="start">
          <Text fontSize="xl" textAlign="start">
            Anderes
          </Text>
          <List>
            <ListItem>
              <Link href="/about-me">Über mich</Link>
            </ListItem>
            <ListItem>
              <Link href="/references">Referenzen</Link>
            </ListItem>
          </List>
        </VStack>

        <VStack alignItems="start">
          <Text fontSize="xl" textAlign="start">
            Rechtliches
          </Text>
          <List>
            <ListItem>
              <Link href="/imprint">Impressum</Link>
            </ListItem>
            <ListItem>
              <Link href="/data-protection">Datenschutz</Link>
            </ListItem>
          </List>
        </VStack>
      </HStack>
      <Flex alignItems="center" justifyContent="center">
        <Button
          variant="solid"
          backgroundColor="brand.700"
          color="white"
          size="lg"
          colorScheme="whiteAlpha"
          onClick={() => navigate("/contact")}
        >
          Kontakt
        </Button>
      </Flex>
      <Text width="full" gridColumn="1/span 5" textAlign="center" justifySelf="end">
        © {new Date().getFullYear()} Madita Bahr - Alle Rechte vorbehalten
      </Text>
    </Grid>
  );
};
