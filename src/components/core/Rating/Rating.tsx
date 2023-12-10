import { RatingGroup as ArkRatingGroup } from "@ark-ui/react/rating-group";
import {
  BsStarHalf as IconHalf,
  BsStar as IconEmpty,
  BsStarFill as IconFull,
} from "react-icons/bs/index.js";

import { styled } from "generated/panda/jsx";
import { rating } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/rating-group";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(rating);

export const RatingRoot = withProvider(styled(ArkRatingGroup.Root), "root");
export interface RatingRootProps extends HTMLStyledProps<typeof RatingRoot> {}

export const RatingControl = withContext(
  styled(ArkRatingGroup.Control),
  "control",
);
export interface RatingControlProps
  extends HTMLStyledProps<typeof RatingControl> {}

export const RatingLabel = withContext(styled(ArkRatingGroup.Label), "label");
export interface RatingLabelProps extends HTMLStyledProps<typeof RatingLabel> {}

export const RatingItem = withContext(styled(ArkRatingGroup.Item), "item");
export interface RatingItemProps extends HTMLStyledProps<typeof RatingItem> {}

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
