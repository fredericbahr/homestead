import { Route, Routes } from "react-router";
import { Layout } from "@homestead/components";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout header={<Header />}>
            <Center width={{ base: "90%", lg: "70%" }} display="flex" flexDirection="column" gap={{ base: 20, lg: 36 }}>
              <Hero />
              <KeySellingPoints />
              <Product />
            </Center>
            <Team />
            <Center width={{ base: "90%", lg: "70%" }} display="flex" flexDirection="column" gap={{ base: 20, lg: 36 }}>
              <Pricing />
              <Demo />
            </Center>
            {isMobile ? <MobileFooter /> : <Footer />}
          </Layout>
        }
      />
      <Route path="/product">
        <Route
          path="appointment"
          element={
            <Layout>
              <AppointmentDetails />
            </Layout>
          }
        />
        <Route
          path="photo"
          element={
            <Layout>
              <PhotoDetails />
            </Layout>
          }
        />
        <Route
          path="survey"
          element={
            <Layout>
              <SurveyDetails />
            </Layout>
          }
        />
        <Route
          path="customizability"
          element={
            <Layout>
              <CustomizabilityDetails />
            </Layout>
          }
        />
      </Route>
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
            {isMobile ? <MobileFooter /> : <Footer />}
          </Layout>
        }
      />
      <Route
        path="/donate"
        element={
          <Layout>
            <Donate />
            {isMobile ? <MobileFooter /> : <Footer />}
          </Layout>
        }
      />
      <Route
        path="/imprint"
        element={
          <Layout>
            <Imprint />
          </Layout>
        }
      />
      <Route
        path="/data-protection"
        element={
          <Layout>
            <DataProtection />
          </Layout>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
