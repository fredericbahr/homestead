import { HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

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
          <Link href={link} isExternal cursor={link ? "pointer" : "default"}>
            <Image src={image} alt={name} />
          </Link>
        )}
        <Text fontSize="lg" fontWeight="500" textAlign="center" letterSpacing="wider">
          "{testimonial}"
        </Text>
      </VStack>

      <VStack textAlign="center" spacing={0}>
        <Text fontWeight="semibold">{name}</Text>
        <Text fontSize="sm" color="gray.500">
          {title}, {company}
        </Text>
      </VStack>
    </VStack>
  );
};
