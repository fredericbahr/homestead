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

import { Link, List, ListItem } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

interface MobileNavigationProps {
  onNavigation: () => void;
}

export const MobileNavigation = ({ onNavigation }: MobileNavigationProps) => {
  return (
    <List alignSelf="start" fontSize="large" spacing={3}>
      <ListItem>
        <Link as={HashLink} onClick={onNavigation} smooth to="/#appointment-heading">
          Leistungen
        </Link>
        <List
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          marginLeft={2}
          marginTop={2}
          paddingLeft={3}
          spacing={1}
        >
          <ListItem>
            <Link as={HashLink} onClick={onNavigation} smooth to="/#accounting">
              Buchführung
            </Link>
          </ListItem>
          <ListItem>
            <Link as={HashLink} onClick={onNavigation} smooth to="/#salary">
              Lohn- und Gehaltsabrechnungen
            </Link>
          </ListItem>
          <ListItem>
            <Link as={HashLink} onClick={onNavigation} smooth to="/#office-services">
              Bürodienstleistungen
            </Link>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <Link as={HashLink} onClick={onNavigation} smooth to="/#about-me">
          Über mich
        </Link>
      </ListItem>
      <ListItem>
        <Link as={HashLink} onClick={onNavigation} smooth to="/#references">
          Referenzen
        </Link>
      </ListItem>
      <ListItem>
        <Link as={HashLink} to="/contact?concern=general">
          Kontakt
        </Link>
      </ListItem>
    </List>
  );
};
