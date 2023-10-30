import { RatingGroup as ArkRatingGroup } from "@ark-ui/react/rating-group";
import {
  BsStarHalf as IconHalf,
  BsStar as IconEmpty,
  BsStarFill as IconFull,
} from "react-icons/bs";

import { styled } from "generated/panda/jsx";
import { rating, type RatingVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { RatingGroupProps as ArkRatingGroupProps } from "@ark-ui/react/rating-group";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/rating-group";

const { withProvider, withContext } = createStyleContext(rating);

export interface RatingProps extends ArkRatingGroupProps, RatingVariantProps {}

export const RatingRoot = withProvider(styled(ArkRatingGroup.Root), "root");

export const RatingControl = withContext(
  styled(ArkRatingGroup.Control),
  "control",
);

export const RatingLabel = withContext(styled(ArkRatingGroup.Label), "label");

export const RatingItem = withContext(styled(ArkRatingGroup.Rating), "rating");

/**
 * Rating.
 */
const Rating = (props: RatingProps) => (
  <RatingRoot {...props}>
    <RatingControl>
      {({ sizeArray }) =>
        sizeArray.map((idx) => (
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
