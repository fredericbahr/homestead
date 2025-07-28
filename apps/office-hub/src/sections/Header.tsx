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
import { ColorThemeSwitch } from "@homestead/components";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { MobileNavigation } from "./Navigation/MobileNavigation";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  const [isMobile] = useMediaQuery("(max-width: 62em)");
  const { isOpen: isMobileNavOpen, onToggle: onToggleMobileNav, onClose: onCloseMobileNav } = useDisclosure();
  const navigate = useNavigate();

  /** Timeout to delay closing the mobile navigation to ensure that the scrolling position is correct */
  const handleMobileNavigation = () => setTimeout(() => onCloseMobileNav(), 1500);

  return (
    <>
      <Box boxShadow="xl" padding={2} width="full">
        <header>
          <HStack gap={4} justifyContent="space-around" width={{ base: "full", lg: "full" }}>
            <HStack gap={4} justifyContent={{ base: "space-around", lg: "start" }} width={{ base: "full", lg: "auto" }}>
              {isMobile && (
                <IconButton
                  aria-label="Open Menu"
                  colorScheme="gray"
                  icon={isMobileNavOpen ? <Icon as={XIcon} /> : <Icon as={ListIcon} />}
                  onClick={onToggleMobileNav}
                  variant="ghost"
                />
              )}
              <HStack gap={4} marginLeft={4} marginY={2}>
                <Link aria-label="Home" as={RouterLink} display="flex" justifyContent="center" to="/">
                  <Logo height={50} />
                </Link>
              </HStack>

              {isMobile && <ColorThemeSwitch />}
            </HStack>
            <Box flex={1}>{!isMobile && <Navigation />}</Box>
            {!isMobile && (
              <HStack gap={2}>
                <ColorThemeSwitch />
                <Button onClick={() => navigate("/contact")} size="lg" variant="ghost">
                  Kontakt
                </Button>
              </HStack>
            )}
          </HStack>
        </header>
      </Box>
      {isMobile && isMobileNavOpen && (
        <Box alignSelf="start" margin="0 auto" marginTop={-3} width="80%">
          <Collapse animateOpacity in={isMobileNavOpen}>
            <MobileNavigation onNavigation={handleMobileNavigation} />
          </Collapse>
        </Box>
      )}
    </>
  );
};
