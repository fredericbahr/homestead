/*
 * COPYRIGHT (C) 2023 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Box, Grid, Heading, HStack, Icon, IconButton, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Testimonial, TestimonialProps } from "./Testimonial";

export interface TestimonialSliderProps {
  testimonials: TestimonialProps[];
  index: number;
  onIndexChange: (index: number) => void;
}

/** A testimonial slider carousel with swipe support.*/
export const TestimonialSlider = ({ testimonials, index = 0, onIndexChange }: TestimonialSliderProps) => {
  /** Swipeable handlers for the slider */
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => onIndexChange(modulo(index + 1, testimonials.length)),
    onSwipedLeft: () => onIndexChange(modulo(index - 1, testimonials.length)),
    trackMouse: true,
  });

  /** modulo function that also works with negative numbers */
  const modulo = (n: number, m: number): number => ((n % m) + m) % m;

  return (
    <VStack>
      <motion.div
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Grid gridTemplateColumns="auto 1fr auto" width="full" placeItems="center" gap={4} {...swipeHandlers}>
          <Tooltip label="Vorheriger" hasArrow openDelay={300}>
            <IconButton
              variant="ghost"
              aria-label="Previous"
              isDisabled={index === 0}
              icon={<Icon as={CaretLeft} />}
              onClick={() => onIndexChange(modulo(index - 1, testimonials.length))}
            />
          </Tooltip>

          <Testimonial {...testimonials[index]} />

          <Tooltip label="Nächster" hasArrow openDelay={300}>
            <IconButton
              variant="ghost"
              aria-label="Next"
              isDisabled={index === testimonials.length - 1}
              icon={<Icon as={CaretRight} />}
              onClick={() => onIndexChange(modulo(index + 1, testimonials.length))}
            />
          </Tooltip>
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <HStack gap={4}>
          {Array.from({ length: testimonials.length }).map((_, idx: number) => (
            <Box
              minWidth={4}
              minHeight={1}
              backgroundColor={index === idx ? "accent.600" : "brand.900"}
              _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
              transition="all 0.2s ease-in-out"
              onClick={() => onIndexChange(idx)}
              key={idx}
            ></Box>
          ))}
        </HStack>
      </motion.div>
    </VStack>
  );
};
