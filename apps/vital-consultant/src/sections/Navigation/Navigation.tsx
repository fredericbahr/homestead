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

import { Button, Icon, Link, List, ListItem, Menu, Portal, Text } from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const links = [
  {
    title: "",
    href: "",
  },
];

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

export const Navigation = () => {
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
          <Menu.Root closeOnSelect>
            <Menu.Trigger>
              <Button
                as={Link}
                fontSize="larger"
                transition="all 0.2s ease-in-out"
                _hover={{ color: "brand.500" }}
                variant="plain"
              >
                <Text as="span" display="inline-flex" alignItems="center" gap={1}>
                  Produkt
                  <Icon as={CaretDown} />
                </Text>
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  {links.map((link) => (
                    <Menu.Item key={link.href} asChild value={link.title}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.title}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
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
