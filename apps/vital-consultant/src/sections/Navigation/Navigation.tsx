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
import { CaretDown } from "@phosphor-icons/react";
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
                Produkt
                <Icon as={CaretDown} />
              </Text>
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuItem as="a" href="/#appointment-heading">
                Termine
              </MenuItem>
              <MenuItem as="a" href="/#photo-heading">
                Fotos
              </MenuItem>
              <MenuItem as="a" href="/#survey-heading">
                Umfragen
              </MenuItem>
              <MenuItem as="a" href="/#customizability-heading">
                Individuelle Anpassung
              </MenuItem>
            </MenuList>
          </Menu>
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          <Link
            href="/#team-heading"
            fontSize="larger"
            transition="all 0.2s ease-in-out"
            _hover={{ color: "brand.500" }}
          >
            Team
          </Link>
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          <Link
            href="/#pricing-heading"
            fontSize="larger"
            transition="all 0.2s ease-in-out"
            _hover={{ color: "brand.500" }}
          >
            Preise
          </Link>
        </ListItem>
        <ListItem as={motion.li} variants={item}>
          <Link
            href="/#demo-heading"
            fontSize="larger"
            transition="all 0.2s ease-in-out"
            _hover={{ color: "brand.500" }}
          >
            Demo
          </Link>
        </ListItem>
      </List>
    </nav>
  );
};
