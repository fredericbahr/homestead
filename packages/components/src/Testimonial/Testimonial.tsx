import { Image, Link, Text, VStack } from "@chakra-ui/react";

export interface TestimonialProps {
  /** The name of the person giving the testimonial */
  name: string;
  /** The testimonial text */
  testimonial: string;
  /** The title of the person giving the testimonial */
  title: string;
  /** The company of the person giving the testimonial */
  company: string;
  /** The image URL of the person giving the testimonial */
  image?: string;
  /** The company link of the person giving the testimonial */
  link?: string;
}

/**
 * A component that displays a testimonial from a person.
 *
 * @param name - The name of the person giving the testimonial.
 * @param testimonial - The testimonial text.
 * @param image - The image URL of the person giving the testimonial.
 * @param title - The title of the person giving the testimonial.
 * @param company - The company of the person giving the testimonial.
 */
export const Testimonial = ({ testimonial, name, company, title, image, link }: TestimonialProps) => {
  return (
    <VStack gap={8}>
      <VStack gap={4}>
        {image && (
          <Link cursor={link ? "pointer" : "default"} href={link} isExternal>
            <Image alt={name} src={image} />
          </Link>
        )}
        <Text fontSize="lg" fontWeight="500" letterSpacing="wider" textAlign="center">
          "{testimonial}"
        </Text>
      </VStack>

      <VStack spacing={0} textAlign="center">
        <Text fontWeight="semibold">{name}</Text>
        <Text color="gray.500" fontSize="sm">
          {title}, {company}
        </Text>
      </VStack>
    </VStack>
  );
};
