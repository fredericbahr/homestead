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

import { Box, Button, Collapse, HStack, Icon, IconButton, Link, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { MobileNavigation } from "./Navigation/MobileNavigation";
import { Navigation } from "./Navigation/Navigation";
import { ColorThemeSwitch } from "@homestead/components";
import { Logo } from "../Logo";

export const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 62em)");
  const { isOpen: isMobileNavOpen, onToggle: onToggleMobileNav, onClose: onCloseMobileNav } = useDisclosure();
  const navigate = useNavigate();

  /** Timeout to delay closing the mobile navigation to ensure that the scrolling position is correct */
  const handleMobileNavigation = () => setTimeout(() => onCloseMobileNav(), 1500);

  return (
    <>
      <Box width="full" boxShadow="xl" padding={2}>
        <header>
          <HStack width={{ base: "full", lg: "full" }} justifyContent="space-around" gap={4}>
            <HStack gap={4} width={{ base: "full", lg: "auto" }} justifyContent={{ base: "space-around", lg: "start" }}>
              {isMobile && (
                <IconButton
                  aria-label="Open Menu"
                  icon={isMobileNavOpen ? <Icon as={XIcon} /> : <Icon as={ListIcon} />}
                  onClick={onToggleMobileNav}
                  variant="ghost"
                  colorScheme="gray"
                />
              )}
              <HStack gap={4}>
                <Link as={RouterLink} to="/" display="flex" justifyContent="center" aria-label="Home">
                  <Logo height={80} />
                </Link>
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
