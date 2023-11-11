import { RatingGroup as ArkRatingGroup } from "@ark-ui/react/rating-group";
import {
  BsStarHalf as IconHalf,
  BsStar as IconEmpty,
  BsStarFill as IconFull,
} from "react-icons/bs/index.js";

import { styled } from "generated/panda/jsx";
import { rating, type RatingVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type { RatingGroupProps as ArkRatingGroupProps } from "@ark-ui/react/rating-group";
import type {} from "@zag-js/rating-group";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(rating);

export interface RatingProps extends ArkRatingGroupProps, RatingVariantProps {
  /** Label for the rating. */
  label?: ReactNode;
}

export const RatingRoot = withProvider(styled(ArkRatingGroup.Root), "root");

export const RatingControl = withContext(
  styled(ArkRatingGroup.Control),
  "control",
);

export const RatingLabel = withContext(styled(ArkRatingGroup.Label), "label");

export const RatingItem = withContext(styled(ArkRatingGroup.Item), "item");

/**
 * Rating.
 */
const Rating = ({ label, ...rest }: RatingProps) => (
  <RatingRoot {...rest}>
    {label && <RatingLabel>{label}</RatingLabel>}

    <RatingControl>
      {({ items }) =>
        items.map((idx) => (
          <RatingItem key={idx} index={idx}>
            {({ isHalf, isHighlighted }) => {
              if (isHalf) return <IconHalf />;

              if (isHighlighted) return <IconFull />;

              return <IconEmpty />;
            }}
          </RatingItem>
        ))
      }
    </RatingControl>
  </RatingRoot>
);

export default Rating;
