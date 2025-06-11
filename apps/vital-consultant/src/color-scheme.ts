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

/** The config of the theme */
const config: ThemeConfig = {
  initialColorMode: (localStorage.getItem("chakra-ui-color-mode") as ColorModeWithSystem) ?? "light",
  useSystemColorMode: false,
};

/** The custom chakra-ui theme */
export const mainTheme = extendTheme(
  {
    config,
    colors: {
      brand: {
        50: "#DFECF7",
        100: "#C0D9F0",
        200: "#9EC3E6",
        300: "#7CADD9",
        400: "#6C9FD1",
        500: "#6599CC",
        600: "#5588BB",
        700: "#4777A8",
        800: "#3A6795",
        900: "#2F5782",
      },
      accent: {
        50: "#FFFCF6",
        100: "#FEF5E7",
        200: "#FCECD7",
        300: "#F7DEB9",
        400: "#F5D9AD",
        500: "#E6D1B9",
        600: "#D3BBA2",
        700: "#BFA68D",
        800: "#AA9279",
        900: "#957D65",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);
