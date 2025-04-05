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

import { Center, Grid, GridItem } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const Contact = () => {
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  return (
    <Center width="80%" display="flex" flexDirection="column" justifyContent="start" minHeight="full" flex={1}>
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gridTemplateRows={{ base: "", lg: "1fr" }}
        gap={{ base: 8, lg: 0 }}
      >
        <GridItem>
          <ContactInfo />
        </GridItem>
        <GridItem width="full" display="flex" alignItems="center" justifyContent="center">
          <ContactForm />
        </GridItem>
      </Grid>
    </Center>
  );
};
