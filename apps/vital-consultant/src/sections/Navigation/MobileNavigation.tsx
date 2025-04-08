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
    <List alignSelf="start" spacing={3} fontSize="large">
      <ListItem>
        <Link as={HashLink} smooth to="/#appointment-heading" onClick={onNavigation}>
          Leistungen
        </Link>
        <List
          borderLeft="1px solid"
          borderLeftColor="gray.300"
          paddingLeft={3}
          spacing={1}
          marginTop={2}
          marginLeft={2}
        >
          <ListItem>
            <Link as={HashLink} smooth to="/#school" onClick={onNavigation}>
              Sport- und Sozialunterricht
            </Link>
          </ListItem>
          <ListItem>
            <Link as={HashLink} smooth to="/#training" onClick={onNavigation}>
              Gerätetraining und Trainingsberatung
            </Link>
          </ListItem>
          <ListItem>
            <Link as={HashLink} smooth to="/#workshop" onClick={onNavigation}>
              Vorträge und Workshops
            </Link>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <Link as={HashLink} smooth to="/#about-me" onClick={onNavigation}>
          Über mich
        </Link>
      </ListItem>
      <ListItem>
        <Link as={HashLink} smooth to="/#references" onClick={onNavigation}>
          Referenzen
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/contact?concern=general">Kontakt</Link>
      </ListItem>
    </List>
  );
};
