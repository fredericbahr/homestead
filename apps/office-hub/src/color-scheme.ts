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

import { type ColorModeWithSystem, extendTheme, type ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react";

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
        50: "#E0F4EF",
        100: "#B3E4D5",
        200: "#80D1B8",
        300: "#4DBF9B",
        400: "#26AD87",
        500: "#009966",
        600: "#008455",
        700: "#006F44",
        800: "#005933",
        900: "#004525",
      },
      accent: {
        50: "#FAF4DF",
        100: "#F0E3B3",
        200: "#E4CC7F",
        300: "#DAB654",
        400: "#CFAA64",
        500: "#D4AF37",
        600: "#B9962F",
        700: "#A27C25",
        800: "#89651C",
        900: "#6D4E13",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
