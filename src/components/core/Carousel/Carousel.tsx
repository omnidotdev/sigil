import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi/index.js";

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
  /** Item content to render. */
  items: ReactNode[];
}

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

export const CarouselItem = withContext(styled(ArkCarousel.Item), "item");

export const CarouselItemGroup = withContext(
  styled(ArkCarousel.ItemGroup),
  "itemGroup",
);

export const CarouselNextTrigger = withContext(
  styled(ArkCarousel.NextTrigger),
  "nextTrigger",
);

export const CarouselPrevTrigger = withContext(
  styled(ArkCarousel.PrevTrigger),
  "prevTrigger",
);

export const CarouselViewport = withContext(
  styled(ArkCarousel.Viewport),
  "viewport",
);

/**
 * Carousel.
 */
const Carousel = ({ items, ...rest }: CarouselProps) => (
  <CarouselRoot {...rest}>
    <CarouselViewport>
      <CarouselItemGroup>
        {items.map((item, idx) => (
          <CarouselItem key={idx} index={idx}>
            {item}
          </CarouselItem>
        ))}
      </CarouselItemGroup>

      <CarouselControl>
        <CarouselPrevTrigger asChild>
          <Button size="sm" variant="ghost" aria-label="Previous Item">
            <FiChevronLeft />
          </Button>
        </CarouselPrevTrigger>

        <CarouselIndicatorGroup>
          {Array.from({ length: items.length }).map((_, idx) => (
            <CarouselIndicator
              key={idx}
              index={idx}
              aria-label={`Go to item ${idx + 1}`}
            />
          ))}
        </CarouselIndicatorGroup>

        <CarouselNextTrigger asChild>
          <Button size="sm" variant="ghost" aria-label="Next Item">
            <FiChevronRight />
          </Button>
        </CarouselNextTrigger>
      </CarouselControl>
    </CarouselViewport>
  </CarouselRoot>
);

export default Carousel;
