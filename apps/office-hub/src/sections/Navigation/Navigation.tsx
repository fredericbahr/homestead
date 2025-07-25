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

import { Icon, Link, List, ListItem, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { CaretDownIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const Navigation = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -150 },
  };

  return (
    <nav>
      <List
        as={motion.ul}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        gap={{ base: 8, lg: 16 }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <ListItem as={motion.li} variants={item}>
          <Menu closeOnSelect>
            <MenuButton
              as={Link}
              fontSize="larger"
              transition="all 0.2s ease-in-out"
              _hover={{ color: "brand.500" }}
              variant="unstyled"
            >
              <Text as="span" display="inline-flex" alignItems="center" gap={1}>
                Leistungen
                <Icon as={CaretDownIcon} />
              </Text>
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuItem as="a" href="/#accounting">
                Buchführung
              </MenuItem>
              <MenuItem as="a" href="/#salary">
                Lohn- und Gehaltsabrechnungen
              </MenuItem>
              <MenuItem as="a" href="/#office-services">
                Bürodienstleistungen
              </MenuItem>
            </MenuList>
          </Menu>
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          <Link href="/#about-me" fontSize="larger" transition="all 0.2s ease-in-out" _hover={{ color: "brand.500" }}>
            Über mich
          </Link>
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          <Link href="/#references" fontSize="larger" transition="all 0.2s ease-in-out" _hover={{ color: "brand.500" }}>
            Referenzen
          </Link>
        </ListItem>
      </List>
    </nav>
  );
};
