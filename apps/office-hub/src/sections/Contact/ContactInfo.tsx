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

import { Button, Heading, Icon, Text, useColorModeValue, useToken, VStack } from "@chakra-ui/react";
import { EnvelopeSimpleIcon, MapPinLineIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  const brand500 = useToken("colors", "brand.500");
  const buttonColor = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("gray.800", "white");

  /**
   * Opens the default email client with the email address pre-filled.
   */
  const handleEmailClick = (): void => {
    window.location.href = "mailto:gb.bueroservice@gmail.com";
  };

  /**
   * Opens the  map  with the location of Lütter.
   */
  const handleLocationClick = (): void => {
    window.open(
      "https://www.google.com/maps/place/Fulda/@50.582862,9.4255003,10z/data=!3m1!4b1!4m6!3m5!1s0x47a337c78acc4d2b:0x377adbfb47a9813b!8m2!3d50.5557877!4d9.68084!16zL20vMDFjeDY3?entry=ttu",
      "_blank"
    );
  };

  return (
    <VStack
      alignItems={{ base: "center", lg: "start" }}
      height="full"
      justifyContent={{ lg: "space-evenly" }}
      spacing={{ base: 6, lg: 12 }}
    >
      <VStack alignItems={{ base: "center", lg: "start" }} spacing={{ base: 2, lg: 6 }}>
        <Heading as="h2" color="brand.500" fontSize={{ base: "5xl", lg: "6xl" }}>
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Kontakt
          </motion.span>
        </Heading>
        <Text
          color={textColor}
          fontSize="lg"
          maxWidth={{ base: "full", lg: "50%" }}
          textAlign={{ base: "center", lg: "start" }}
        >
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Irgendwelche Fragen? Kontaktieren Sie mich und ich werde mich so schnell wie möglich bei Ihnen melden.
          </motion.span>
        </Text>
      </VStack>
      <VStack alignItems={{ base: "center", lg: "start" }} spacing={4}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button
            _hover={{ backgroundColor: "brand.400" }}
            backgroundColor="brand.500"
            color="white"
            leftIcon={<Icon as={EnvelopeSimpleIcon} boxSize={5} color="white" />}
            onClick={handleEmailClick}
            size="lg"
            variant="ghost"
          >
            gb.bueroservice@gmail.com
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button
            _hover={{ border: `2px solid ${brand500}` }}
            color={buttonColor}
            leftIcon={<Icon as={MapPinLineIcon} boxSize={5} color={buttonColor} />}
            onClick={handleLocationClick}
            size="lg"
            variant="ghost"
          >
            Fulda, Hessen
          </Button>
        </motion.div>
      </VStack>
    </VStack>
  );
};
