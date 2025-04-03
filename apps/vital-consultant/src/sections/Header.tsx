/*
 * COPYRIGHT (C) 2023 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Badge, Box, Button, Collapse, HStack, Icon, IconButton, Link, useDisclosure } from "@chakra-ui/react";
import { List as ListIcon, X } from "@phosphor-icons/react";
import { Link as RouterLink, useNavigate } from "react-router";

import { MobileNavigation } from "./Navigation/MobileNavigation";
import { Navigation } from "./Navigation/Navigation";
import { useMediaQuery } from "usehooks-ts";

export const Header = () => {
  const isMobile: boolean = useMediaQuery("(max-width: 62em)");
  const { open: isMobileNavOpen, onToggle: onToggleMobileNav, onClose: onCloseMobileNav } = useDisclosure();
  const navigate = useNavigate();

  /** Timeout to delay closing the mobile navigation to ensure that the scrolling position is correct */
  const handleMobileNavigation = () => setTimeout(() => onCloseMobileNav(), 1500);

  return (
    <>
      <Box width="full" boxShadow="xl" paddingX={6} paddingY={6}>
        <header>
          <HStack width={{ base: "full", lg: "95%" }} justifyContent="space-around" gap={4}>
            <HStack gap={4} width={{ base: "full", lg: "auto" }} justifyContent={{ base: "space-around", lg: "start" }}>
              {isMobile && (
                <IconButton aria-label="Open Menu" onClick={onToggleMobileNav} variant="ghost" colorScheme="gray">
                  {isMobileNavOpen ? <Icon as={X} /> : <Icon as={ListIcon} />}
                </IconButton>
              )}
              <HStack gap={4}>
                <Link as={RouterLink} to="/" display="flex" justifyContent="center" aria-label="Home">
                  <Logo height={20} />
                </Link>
                <Badge colorScheme={badgeColorTheme} variant="subtle" padding={1}>
                  Beta
                </Badge>
              </HStack>

              {isMobile && <ColorThemeSwitch />}
            </HStack>
            <Box flex={1}>{!isMobile && <Navigation />}</Box>
            {!isMobile && (
              <HStack gap={2}>
                <ColorThemeSwitch />
                <Button variant="ghost" size="lg" onClick={() => navigate("/contact")}>
                  Kontakt
                </Button>
              </HStack>
            )}
          </HStack>
        </header>
      </Box>
      {isMobile && isMobileNavOpen && (
        <Box alignSelf="start" width="80%" margin="0 auto" marginTop={-3}>
          <Collapse in={isMobileNavOpen} animateOpacity>
            <MobileNavigation onNavigation={handleMobileNavigation} />
          </Collapse>
        </Box>
      )}
    </>
  );
};
