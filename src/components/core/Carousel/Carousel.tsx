import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi/index.js";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { carousel } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";
import type { ReactNode } from "react";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/carousel";

const { withProvider, withContext } = createStyleContext(carousel);

export const CarouselRoot = withProvider(styled(ArkCarousel.Root), "root");
export interface CarouselRootProps
  extends HTMLStyledProps<typeof CarouselRoot> {}

export const CarouselControl = withContext(
  styled(ArkCarousel.Control),
  "control",
);
export interface CarouselControlProps
  extends HTMLStyledProps<typeof CarouselControl> {}

export const CarouselIndicator = withContext(
  styled(ArkCarousel.Indicator),
  "indicator",
);
export interface CarouselIndicatorProps
  extends HTMLStyledProps<typeof CarouselIndicator> {}

export const CarouselIndicatorGroup = withContext(
  styled(ArkCarousel.IndicatorGroup),
  "indicatorGroup",
);
export interface CarouselIndicatorGroupProps
  extends HTMLStyledProps<typeof CarouselIndicatorGroup> {}

export const CarouselItem = withContext(styled(ArkCarousel.Item), "item");
export interface CarouselItemProps
  extends HTMLStyledProps<typeof CarouselItem> {}

export const CarouselItemGroup = withContext(
  styled(ArkCarousel.ItemGroup),
  "itemGroup",
);
export interface CarouselItemGroupProps
  extends HTMLStyledProps<typeof CarouselItemGroup> {}

export const CarouselNextTrigger = withContext(
  styled(ArkCarousel.NextTrigger),
  "nextTrigger",
);
export interface CarouselNextTriggerProps
  extends HTMLStyledProps<typeof CarouselNextTrigger> {}

export const CarouselPrevTrigger = withContext(
  styled(ArkCarousel.PrevTrigger),
  "prevTrigger",
);
export interface CarouselPrevTriggerProps
  extends HTMLStyledProps<typeof CarouselPrevTrigger> {}

export const CarouselViewport = withContext(
  styled(ArkCarousel.Viewport),
  "viewport",
);
export interface CarouselViewportProps
  extends HTMLStyledProps<typeof CarouselViewport> {}

export interface CarouselProps extends CarouselRootProps {
  /** Item content to render. */
  items: ReactNode[];
}

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
          <Button size="sm" variant="ghost" aria-label="Previous item">
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
          <Button size="sm" variant="ghost" aria-label="Next item">
            <FiChevronRight />
          </Button>
        </CarouselNextTrigger>
      </CarouselControl>
    </CarouselViewport>
  </CarouselRoot>
);

export default Carousel;
