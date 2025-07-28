/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Icon, IconButton, type IconButtonProps, Tooltip, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

export interface IColorThemeSwitchProps extends Omit<IconButtonProps, "aria-label"> {
  boxSize?: number;
}

/**
 * Component for rendering a color theme switch.
 */
export const ColorThemeSwitch = ({ boxSize, ...rest }: IColorThemeSwitchProps) => {
  /** Hook for managing the color mode */
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip hasArrow label={colorMode === "light" ? "Dunkles Theme" : "Helles Theme"} openDelay={300}>
      <IconButton
        colorScheme="gray"
        icon={<Icon as={colorMode === "light" ? MoonIcon : SunIcon} boxSize={boxSize ?? 5} />}
        onClick={toggleColorMode}
        variant="ghost"
        {...rest}
        aria-label="Color theme switch"
      />
    </Tooltip>
  );
};
