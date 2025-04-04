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

import { Center, ChakraProvider, Spinner, useMediaQuery } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "@homestead/components";
import { mainTheme } from "./sections/color-scheme";
import { Header } from "./sections/Header";
import { MobileFooter } from "./sections/Footer/MobileFooter";
import { Footer } from "./sections/Footer/Footer";
import { Imprint } from "./sections/Legal/Imprint";
import { DataProtection } from "./sections/Legal/DataProtection";
import { Contact } from "./sections/Contact/Contact";

const Error404 = lazy(() => import("./sections/ErrorPages/Error404").then((module) => ({ default: module.Error404 })));

function App() {
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  return (
    <ChakraProvider theme={mainTheme}>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout header={<Header />}>
                <Center
                  width={{ base: "90%", lg: "70%" }}
                  display="flex"
                  flexDirection="column"
                  gap={{ base: 20, lg: 36 }}
                ></Center>
                <Center
                  width={{ base: "90%", lg: "70%" }}
                  display="flex"
                  flexDirection="column"
                  gap={{ base: 20, lg: 36 }}
                ></Center>
                {isMobile ? <MobileFooter /> : <Footer />}
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout header={<Header />}>
                <Contact />
                {isMobile ? <MobileFooter /> : <Footer />}
              </Layout>
            }
          />
          <Route
            path="/imprint"
            element={
              <Layout header={<Header />}>
                <Imprint />
              </Layout>
            }
          />
          <Route
            path="/data-protection"
            element={
              <Layout header={<Header />}>
                <DataProtection />
              </Layout>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
