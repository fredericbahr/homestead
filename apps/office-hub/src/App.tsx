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

import { Center, ChakraProvider, Spinner, useMediaQuery, Text } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "@homestead/components";
import { mainTheme } from "./color-scheme";
import { Header } from "./sections/Header";
import { MobileFooter } from "./sections/Footer/MobileFooter";
import { Footer } from "./sections/Footer/Footer";
import { Imprint } from "./sections/Legal/Imprint";
import { DataProtection } from "./sections/Legal/DataProtection";
import { Contact } from "./sections/Contact/Contact";
import { Hero } from "./sections/Hero";
import { KeyServices } from "./KeyServices";
import { Testimonials } from "./sections/Testimonials/Testimonials";
import { AboutMe } from "./sections/AboutMe";
import { Services } from "./sections/Services/Services";

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
                >
                  <Hero />
                  <KeyServices />
                  <Services />
                  <AboutMe />
                  <Testimonials />
                </Center>
                <Center
                  width={{ base: "90%", lg: "70%" }}
                  display="flex"
                  flexDirection="column"
                  gap={{ base: 20, lg: 36 }}
                ></Center>

                <Text width="70%" marginTop={{ base: 6, lg: 12 }}>
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
