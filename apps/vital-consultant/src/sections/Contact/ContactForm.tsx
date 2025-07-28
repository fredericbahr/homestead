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
import { Select, type SingleValue } from "chakra-react-select";
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
    { value: "school", label: "Sport- und Sozialunterricht" },
    { value: "training", label: "Gerätetraining und Traininsberatung" },
    { value: "workshop", label: "Vorträge und Workshops" },
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
    }>
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
      message,
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
        templateParams
      );

      toast({
        title: "Kontaktanfrage gesendet",
        description: "Deine Kontaktanfrage wurde erfolgreich gesendet.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setIsSending(false);
      setEmailError(false);
      setPhoneError(false);
    } catch (error) {
      // biome-ignore lint/suspicious/noConsole: explicit error handling
      console.error("Error sending contact form data", error);
      setIsSending(false);
      toast({
        title: "Fehler beim Senden der Kontaktanfrage",
        description: "Deine Kontaktanfrage konnte nicht gesendet werden. Bitte versuche es später erneut.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <form style={{ flex: 1 }}>
      <VStack alignItems="center" spacing={4} width="full">
        <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 4, lg: 8 }} width="full">
          <FormControl isRequired>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.1, duration: 0.8 }}>
              <FormLabel>Vorname</FormLabel>
              <Input autoComplete="given-name" onChange={handleFirstNameChange} placeholder="Max" type="text" />
            </motion.div>
          </FormControl>

          <FormControl isRequired>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.1, duration: 0.8 }}>
              <FormLabel>Nachname</FormLabel>
              <Input autoComplete="family-name" onChange={handleLastNameChange} placeholder="Mustermann" type="text" />
            </motion.div>
          </FormControl>
        </Stack>

        <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 4, lg: 8 }} width="full">
          <FormControl isInvalid={emailError} isRequired>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <FormLabel>E-Mail</FormLabel>
              <Input
                autoComplete="email"
                onChange={handleEmailChange}
                placeholder="maxmustermann@gmail.com"
                type="email"
              />
              {emailError && <FormErrorMessage>Ungültige E-Mail-Adresse.</FormErrorMessage>}
            </motion.div>
          </FormControl>

          <FormControl isInvalid={phoneError}>
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <FormLabel>Telefonnummer</FormLabel>
              <Input autoComplete="tel" onChange={handlePhoneNumberChange} placeholder="0176 12345678" type="tel" />
              {phoneError && <FormErrorMessage>Ungültige Telefonnummer.</FormErrorMessage>}
            </motion.div>
          </FormControl>
        </Stack>

        <FormControl isRequired>
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <FormLabel>Grund der Kontaktaufnahme</FormLabel>
            <Select
              menuPortalTarget={document.body}
              onChange={handleReasonForContactChange}
              options={reasonForContactOptions}
              placeholder="Wähle eine Option"
              value={reasonForContactOptions.find((contactReason) => contactReason.value === reasonForContact)}
            />
          </motion.div>
        </FormControl>

        <FormControl isRequired>
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <FormLabel>Nachricht</FormLabel>
            <Textarea onChange={handleMessageChange} placeholder="Deine Nachricht" />
          </motion.div>
        </FormControl>

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          style={{ width: "100%" }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button
            colorScheme="brand"
            isLoading={isSending}
            onClick={handleContactSend}
            rightIcon={<Icon as={PaperPlaneTiltIcon} />}
            size="lg"
            type="submit"
            width="full"
          >
            Absenden
          </Button>
        </motion.div>
      </VStack>
    </form>
  );
};
