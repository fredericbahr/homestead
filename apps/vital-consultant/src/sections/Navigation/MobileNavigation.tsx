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
          Produkt
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
            <Link as={HashLink} smooth to="/#appointment-heading" onClick={onNavigation}>
              Termine
            </Link>
          </ListItem>
          <ListItem>
            <Link as={HashLink} smooth to="/#photo-heading" onClick={onNavigation}>
              Fotos
            </Link>
          </ListItem>
          <ListItem>
            <Link as={HashLink} smooth to="/#survey-heading" onClick={onNavigation}>
              Umfragen
            </Link>
          </ListItem>
          <ListItem>
            <Link as={HashLink} smooth to="/#customizability-heading" onClick={onNavigation}>
              Individuelle Anpassungen
            </Link>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        <Link as={HashLink} smooth to="/#team-heading" onClick={onNavigation}>
          Team
        </Link>
      </ListItem>
      <ListItem>
        <Link as={HashLink} smooth to="/#pricing-heading" onClick={onNavigation}>
          Preise
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/donate" onClick={onNavigation}>
          Spenden
        </Link>
      </ListItem>
      <ListItem>
        <Link as={HashLink} smooth to="/#demo-heading" onClick={onNavigation}>
          Demo
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/contact?concern=general">Kontakt</Link>
      </ListItem>
    </List>
  );
};
