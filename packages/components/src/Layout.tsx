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

import React from "react";
import { VStack, Text } from "@chakra-ui/react";

interface LayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const Layout = ({ header, children }: LayoutProps) => {
  return (
    <VStack width="100%" gap={12} minHeight="100vh">
      {header}
      {children}
    </VStack>
  );
};
