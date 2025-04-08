import { Box, HStack, Text } from "@chakra-ui/react";

export interface SubHeadingProps {
  /** The text to display as the subheading */
  children: React.ReactNode;
  /** Flag whether the subheading should have a dash in front of it */
  dash?: boolean;
}

export const SubHeading = ({ children, dash }: SubHeadingProps) => {
  return (
    <HStack width="full" alignItems="center" gap={2}>
      {dash && <Box width={{ base: "20px", lg: "100px" }} height="5px" backgroundColor="brand.500"></Box>}
      <Text fontSize={{ base: "lg", lg: "larger" }} color="brand.500" fontWeight="semibold">
        {children}
      </Text>
    </HStack>
  );
};
