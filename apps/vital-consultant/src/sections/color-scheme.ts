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

import { ColorModeWithSystem, extendTheme, type ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react";

/**
 * The config of the theme
 */
const config: ThemeConfig = {
  initialColorMode: (localStorage.getItem("chakra-ui-color-mode") as ColorModeWithSystem) ?? "light",
  useSystemColorMode: false,
};

/**
 * The custom chakra-ui theme
 */
export const mainTheme = extendTheme(
  {
    config,
    colors: {
      brand: {
        50: "#FFB7B1",
        100: "#FF9E98",
        200: "#FF3E30",
        300: "#FB1100",
        400: "#C80D00",
        500: "#930A00",
        600: "#890900",
        700: "#7F0800",
        800: "#740800",
        900: "#6A0700",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);
