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

/** Custom hook for validation contact information */
export const useValidation = () => {
  /**
   * Verifies if the given email is valid
   * @param email - email to be validated
   * @returns true if email is valid, false otherwise
   */
  const verifyEmail = (email: string): boolean => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  };

  /**
   * Verifies if the given phone number is valid
   * @param phone - phone number to be validated
   * @returns true if phone number is valid, false otherwise
   */
  const verifyPhone = (phone: string): boolean => {
    const phoneRegex = /[0-9]*\/*(\+49)*[ ]*(\([0-9]+\))*([ ]*(-|–)*[ ]*[0-9]+)*/;
    return phoneRegex.test(phone);
  };

  return {
    verifyEmail,
    verifyPhone,
  };
};
