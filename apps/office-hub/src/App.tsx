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

import { Center, ChakraProvider, Spinner, Text, useMediaQuery } from "@chakra-ui/react";
import { Layout } from "@homestead/components";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { mainTheme } from "./color-scheme";
import { KeyServices } from "./KeyServices";
import { AboutMe } from "./sections/AboutMe";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./sections/Footer/Footer";
import { MobileFooter } from "./sections/Footer/MobileFooter";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { DataProtection } from "./sections/Legal/DataProtection";
import { Imprint } from "./sections/Legal/Imprint";
import { Services } from "./sections/Services/Services";
import { Testimonials } from "./sections/Testimonials/Testimonials";

const Error404 = lazy(() =>
  import("./sections/ErrorPages/Error404").then((module) => ({
    default: module.Error404,
  }))
);

function App() {
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  return (
    <ChakraProvider theme={mainTheme}>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            element={
              <Layout header={<Header />}>
                <Center
                  display="flex"
                  flexDirection="column"
                  gap={{ base: 20, lg: 36 }}
                  width={{ base: "90%", lg: "70%" }}
                >
                  <Hero />
                  <KeyServices />
                  <Services />
                  <AboutMe />
                  <Testimonials />
                </Center>
                <Center
                  display="flex"
                  flexDirection="column"
                  gap={{ base: 20, lg: 36 }}
                  width={{ base: "90%", lg: "70%" }}
                />

                <Text marginTop={{ base: 6, lg: 12 }} width="70%">
                  * Das Steuerberatungsgesetz erlaubt gemäß § 6 Ziff. 3 und 4 sowie § 8 einem Personenkreis mit
                  besonderen Voraussetzungen an die berufliche Ausbildung, das Kontieren, Erfassen und Auswerten der
                  lfd. Buchhaltung eines Unternehmens anzubieten und durchzuführen. Auch die lfd. Lohnabrechnung bis hin
                  zur Lohnsteuer-Anmeldung beim Finanzamt gehören zum Leistungsumfang. Beratung und Jahresabschluss
                  bleiben weiterhin in den bewährten Händen Ihres Steuerberaters, der einfach mit den von uns erstellten
                  Daten und Auswertungen weiterarbeiten kann.
                </Text>
                {isMobile ? <MobileFooter /> : <Footer />}
              </Layout>
            }
            path="/"
          />
          <Route
            element={
              <Layout header={<Header />}>
                <Contact />
                {isMobile ? <MobileFooter /> : <Footer />}
              </Layout>
            }
            path="/contact"
          />
          <Route
            element={
              <Layout header={<Header />}>
                <Imprint />
              </Layout>
            }
            path="/imprint"
          />
          <Route
            element={
              <Layout header={<Header />}>
                <DataProtection />
              </Layout>
            }
            path="/data-protection"
          />
          <Route element={<Error404 />} path="*" />
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
