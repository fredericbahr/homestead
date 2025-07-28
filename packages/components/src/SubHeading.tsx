import { Box, Heading, HStack } from "@chakra-ui/react";

export interface SubHeadingProps {
  /** The text to display as the subheading */
  children: React.ReactNode;
  /** Flag whether the subheading should have a dash in front of it */
  dash?: boolean;
}

export const SubHeading = ({ children, dash }: SubHeadingProps) => {
  return (
    <HStack alignItems="center" gap={2} width="full">
      {dash && <Box backgroundColor="brand.500" height="5px" width={{ base: "60px", lg: "100px" }} />}
      <Heading as="h2" color="brand.500" fontSize={{ base: "3xl", lg: "4xl" }} fontWeight="semibold">
        {children}
      </Heading>
    </HStack>
  );
};
