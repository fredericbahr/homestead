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

import { ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { mainTheme } from "./color-scheme";

// biome-ignore lint/style/noNonNullAssertion: reacts ways
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ColorModeScript initialColorMode={mainTheme.config.initialColorMode} />
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </>
);
