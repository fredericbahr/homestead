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

import { Box, Grid, HStack, Icon, IconButton, Tooltip, VStack } from "@chakra-ui/react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Testimonial, type TestimonialProps } from "./Testimonial";

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
        transition={{ delay: 0.1, duration: 0.3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Grid gap={4} gridTemplateColumns="auto 1fr auto" placeItems="center" width="full" {...swipeHandlers}>
          <Tooltip hasArrow label="Vorherige" openDelay={300}>
            <IconButton
              aria-label="Previous"
              icon={<Icon as={CaretLeftIcon} />}
              isDisabled={index === 0}
              onClick={() => onIndexChange(modulo(index - 1, testimonials.length))}
              variant="ghost"
            />
          </Tooltip>

          <Testimonial {...testimonials[index]} />

          <Tooltip hasArrow label="Nächste" openDelay={300}>
            <IconButton
              aria-label="Next"
              icon={<Icon as={CaretRightIcon} />}
              isDisabled={index === testimonials.length - 1}
              onClick={() => onIndexChange(modulo(index + 1, testimonials.length))}
              variant="ghost"
            />
          </Tooltip>
        </Grid>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <HStack gap={4} marginTop={2}>
          {testimonials.map((testimonial, idx: number) => (
            <Box
              _hover={{ cursor: "pointer", transform: "scale(1.2)" }}
              backgroundColor={index === idx ? "accent.600" : "brand.900"}
              key={`${testimonial.title}-${idx}`}
              minHeight={1}
              minWidth={4}
              onClick={() => onIndexChange(idx)}
              transition="all 0.2s ease-in-out"
            />
          ))}
        </HStack>
      </motion.div>
    </VStack>
  );
};
