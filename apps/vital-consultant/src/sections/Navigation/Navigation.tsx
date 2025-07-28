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
        animate="visible"
        as={motion.ul}
        display="flex"
        flexDirection="row"
        gap={{ base: 8, lg: 16 }}
        initial="hidden"
        justifyContent="center"
        variants={list}
      >
        <ListItem as={motion.li} variants={item}>
          <Menu closeOnSelect>
            <MenuButton
              _hover={{ color: "brand.500" }}
              as={Link}
              fontSize="larger"
              transition="all 0.2s ease-in-out"
              variant="unstyled"
            >
              <Text alignItems="center" as="span" display="inline-flex" gap={1}>
                Leistungen
                <Icon as={CaretDownIcon} />
              </Text>
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuItem as="a" href="/#school">
                Sport- und Sozialunterricht
              </MenuItem>
              <MenuItem as="a" href="/#training">
                Gerätetraining und Trainingsberatung
              </MenuItem>
              <MenuItem as="a" href="/#workshop">
                Vorträge und Workshops
              </MenuItem>
            </MenuList>
          </Menu>
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          <Link _hover={{ color: "brand.500" }} fontSize="larger" href="/#about-me" transition="all 0.2s ease-in-out">
            Über mich
          </Link>
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          <Link _hover={{ color: "brand.500" }} fontSize="larger" href="/#references" transition="all 0.2s ease-in-out">
            Referenzen
          </Link>
        </ListItem>
      </List>
    </nav>
  );
};
