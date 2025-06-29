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

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { Select, SingleValue } from "chakra-react-select";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useValidation } from "./useValidation";

export const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const toast = useToast();
  const { verifyEmail, verifyPhone } = useValidation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reasonForContact, setReasonForContact] = useState(searchParams.get("concern"));
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const reasonForContactOptions = [
    { value: "general", label: "Allgemeine Anfrage" },
    { value: "accounting", label: "Buchführung" },
    { value: "salary", label: "Lohn- und Gehaltsabrechnungen" },
    { value: "office-services", label: "Bürodienstleistungen" },
    { value: "other", label: "Sonstiges" },
  ];

  /**
   * Handles the change of the first name input field
   * @param event - the change event
   */
  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value);

  /**
   * Handles the change of the last name input field
   * @param event - the change event
   */
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value);

  /**
   * Handles the change of the email input field
   * @param event - the change event
   */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);

  /**
   * Handles the change of the phone number input field
   * @param event - the change event
   */
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value);

  /**
   * Handles the change of the reason for contact select field
   * @param selectedOption - the selected option
   */
  const handleReasonForContactChange = (
    selectedOption: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => setReasonForContact(selectedOption?.value || "general");

  /**
   * Handles the change of the message input field
   * @param event - the change event
   */
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);

  /**
   * Handles the send button click and sends the contact form data via EmailJS
   */
  const handleContactSend = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const templateParams = {
      from_firstname: firstName,
      from_lastname: lastName,
      from_reasonforcontact:
        reasonForContactOptions.find((contactReason) => contactReason.value === reasonForContact)?.label ||
        reasonForContact,
      from_emailcontact: email,
      from_phone: phoneNumber,
      message: message,
    };

    if (!verifyEmail(email)) {
      setEmailError(true);
      return;
    }

    if (phoneNumber && !verifyPhone(phoneNumber)) {
      setPhoneError(true);
      return;
    }

    try {
      setIsSending(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      toast({
        title: "Kontaktanfrage gesendet",
        description: "Ihre Kontaktanfrage wurde erfolgreich gesendet.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setIsSending(false);
      setEmailError(false);
      setPhoneError(false);
    } catch (error) {
      console.error("Error sending contact form data", error);
      setIsSending(false);
      toast({
        title: "Fehler beim Senden der Kontaktanfrage",
        description: "Ihre Kontaktanfrage konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <form style={{ flex: 1 }}>
      <VStack width="full" alignItems="center" spacing={4}>
        <Stack width="full" spacing={{ base: 4, lg: 8 }} direction={{ base: "column", lg: "row" }}>
          <FormControl isRequired>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}>
              <FormLabel>Vorname</FormLabel>
              <Input type="text" placeholder="Max" autoComplete="given-name" onChange={handleFirstNameChange} />
            </motion.div>
          </FormControl>

          <FormControl isRequired>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}>
              <FormLabel>Nachname</FormLabel>
              <Input type="text" placeholder="Mustermann" autoComplete="family-name" onChange={handleLastNameChange} />
            </motion.div>
          </FormControl>
        </Stack>

        <Stack width="full" spacing={{ base: 4, lg: 8 }} direction={{ base: "column", lg: "row" }}>
          <FormControl isRequired isInvalid={emailError}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <FormLabel>E-Mail</FormLabel>
              <Input
                type="email"
                placeholder="maxmustermann@gmail.com"
                autoComplete="email"
                onChange={handleEmailChange}
              />
              {emailError && <FormErrorMessage>Ungültige E-Mail-Adresse.</FormErrorMessage>}
            </motion.div>
          </FormControl>

          <FormControl isInvalid={phoneError}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <FormLabel>Telefonnummer</FormLabel>
              <Input type="tel" placeholder="0176 12345678" autoComplete="tel" onChange={handlePhoneNumberChange} />
              {phoneError && <FormErrorMessage>Ungültige Telefonnummer.</FormErrorMessage>}
            </motion.div>
          </FormControl>
        </Stack>

        <FormControl isRequired>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <FormLabel>Grund der Kontaktaufnahme</FormLabel>
            <Select
              placeholder="Wählen Sie eine Option"
              options={reasonForContactOptions}
              onChange={handleReasonForContactChange}
              value={reasonForContactOptions.find((contactReason) => contactReason.value === reasonForContact)}
              menuPortalTarget={document.body}
            />
          </motion.div>
        </FormControl>

        <FormControl isRequired>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <FormLabel>Nachricht</FormLabel>
            <Textarea placeholder="Deine Nachricht" onChange={handleMessageChange} />
          </motion.div>
        </FormControl>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ width: "100%" }}
        >
          <Button
            type="submit"
            size="lg"
            colorScheme="brand"
            width="full"
            rightIcon={<Icon as={PaperPlaneTiltIcon} />}
            isLoading={isSending}
            onClick={handleContactSend}
          >
            Absenden
          </Button>
        </motion.div>
      </VStack>
    </form>
  );
};
