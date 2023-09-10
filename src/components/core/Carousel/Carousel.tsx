import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { carousel, type CarouselVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { CarouselProps as ArkCarouselProps } from "@ark-ui/react/carousel";
import type { ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/carousel";

const { withProvider, withContext } = createStyleContext(carousel);

export interface CarouselProps
  extends Omit<ArkCarouselProps, "children">,
    CarouselVariantProps {
  /** Slide content to render. */
  slides: ReactNode[];
}

// @ts-ignore type inference bug
export const CarouselRoot = withProvider(styled(ArkCarousel.Root), "root");

export const CarouselControl = withContext(
  styled(ArkCarousel.Control),
  "control",
);

export const CarouselIndicator = withContext(
  styled(ArkCarousel.Indicator),
  "indicator",
);

export const CarouselIndicatorGroup = withContext(
  styled(ArkCarousel.IndicatorGroup),
  "indicatorGroup",
);

export const CarouselNextSlideTrigger = withContext(
  styled(ArkCarousel.NextSlideTrigger),
  "nextSlideTrigger",
);

export const CarouselPrevSlideTrigger = withContext(
  styled(ArkCarousel.PrevSlideTrigger),
  "prevSlideTrigger",
);

export const CarouselSlide = withContext(styled(ArkCarousel.Slide), "slide");

export const CarouselSlideGroup = withContext(
  styled(ArkCarousel.SlideGroup),
  "slideGroup",
);

export const CarouselViewport = withContext(
  styled(ArkCarousel.Viewport),
  "viewport",
);

/**
 * Carousel.
 */
const Carousel = ({ slides, ...rest }: CarouselProps) => (
  <CarouselRoot {...rest}>
    <CarouselViewport>
      <CarouselSlideGroup>
        {slides.map((slide, idx) => (
          <CarouselSlide key={idx} index={idx}>
            {slide}
          </CarouselSlide>
        ))}
      </CarouselSlideGroup>

      <CarouselControl>
        <CarouselPrevSlideTrigger asChild>
          <Button size="sm" variant="ghost" aria-label="Previous Slide">
            <FiChevronLeft />
          </Button>
        </CarouselPrevSlideTrigger>

        <CarouselIndicatorGroup>
          {Array.from({ length: slides.length }).map((_, idx) => (
            <CarouselIndicator
              key={idx}
              index={idx}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </CarouselIndicatorGroup>

        <CarouselNextSlideTrigger asChild>
          <Button size="sm" variant="ghost" aria-label="Next Slide">
            <FiChevronRight />
          </Button>
        </CarouselNextSlideTrigger>
      </CarouselControl>
    </CarouselViewport>
  </CarouselRoot>
);

export default Carousel;
