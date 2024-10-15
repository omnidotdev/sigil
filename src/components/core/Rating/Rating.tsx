import { RatingGroup as ArkRatingGroup } from "@ark-ui/react/rating-group";
import {
  BsStarHalf as IconHalf,
  BsStar as IconEmpty,
  BsStarFill as IconFull,
} from "react-icons/bs";

import { styled } from "generated/panda/jsx";
import { rating } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { RatingVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(rating);

export const RatingContext = ArkRatingGroup.Context;
export interface RatingContextProps
  extends AssignJSXStyleProps<ArkRatingGroup.ContextProps> {}

export const RatingRoot = withProvider(styled(ArkRatingGroup.Root), "root");
export interface RatingRootProps
  extends AssignJSXStyleProps<ArkRatingGroup.RootProps>,
    RatingVariantProps {}

export const RatingControl = withContext(
  styled(ArkRatingGroup.Control),
  "control",
);
export interface RatingControlProps
  extends AssignJSXStyleProps<ArkRatingGroup.ControlProps> {}

export const RatingLabel = withContext(styled(ArkRatingGroup.Label), "label");
export interface RatingLabelProps
  extends AssignJSXStyleProps<ArkRatingGroup.LabelProps> {}

export const RatingItem = withContext(styled(ArkRatingGroup.Item), "item");
export interface RatingItemProps
  extends AssignJSXStyleProps<ArkRatingGroup.ItemProps> {}

export const RatingItemContext = ArkRatingGroup.ItemContext;
export interface RatingItemContextProps
  extends AssignJSXStyleProps<ArkRatingGroup.ItemContextProps> {}

export const RatingHiddenInput = ArkRatingGroup.HiddenInput;
export interface RatingHiddenInputProps
  extends AssignJSXStyleProps<ArkRatingGroup.HiddenInputProps> {}

export interface RatingProps extends RatingRootProps {
  /** Label. */
  label?: ReactNode;
  /** Control props. */
  controlProps?: RatingControlProps;
  /** Item props. */
  itemProps?: RatingItemProps;
  /** Hidden input props. */
  hiddenInputProps?: RatingHiddenInputProps;
}

/**
 * Rating.
 */
const Rating = ({
  label,
  controlProps,
  itemProps,
  hiddenInputProps,
  ...rest
}: RatingProps) => (
  <RatingRoot {...rest}>
    {label && <RatingLabel>{label}</RatingLabel>}

    <RatingControl {...controlProps}>
      <RatingContext>
        {({ items }) =>
          items.map((idx) => (
            <RatingItem key={idx} index={idx} {...itemProps}>
              <RatingItemContext>
                {({ half: isHalf, highlighted: isHighlighted }) => {
                  if (isHalf) return <IconHalf />;

                  if (isHighlighted) return <IconFull />;

                  return <IconEmpty />;
                }}
              </RatingItemContext>
            </RatingItem>
          ))
        }
      </RatingContext>
    </RatingControl>

    <RatingHiddenInput {...hiddenInputProps} />
  </RatingRoot>
);

export default Rating;
