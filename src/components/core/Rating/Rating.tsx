import { RatingGroup as ArkRatingGroup } from "@ark-ui/react/rating-group";
import {
  BsStarHalf as IconHalf,
  BsStar as IconEmpty,
  BsStarFill as IconFull,
} from "react-icons/bs";

import { rating } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {} from "@zag-js/rating-group";
import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(rating);

export const RatingRoot = withProvider(ArkRatingGroup.Root, "root");
export interface RatingRootProps extends ComponentProps<typeof RatingRoot> {}

export const RatingControl = withContext(ArkRatingGroup.Control, "control");
export interface RatingControlProps
  extends ComponentProps<typeof RatingControl> {}

export const RatingLabel = withContext(ArkRatingGroup.Label, "label");
export interface RatingLabelProps extends ComponentProps<typeof RatingLabel> {}

export const RatingItem = withContext(ArkRatingGroup.Item, "item");
export interface RatingItemProps extends ComponentProps<typeof RatingItem> {}

export interface RatingProps extends RatingRootProps {
  /** Label for the rating. */
  label?: ReactNode;
}

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
