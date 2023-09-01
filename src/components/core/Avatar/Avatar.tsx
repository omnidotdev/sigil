import * as Ark from "@ark-ui/react/avatar";

import { styled } from "generated/panda/jsx";
import { avatar, type AvatarVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(avatar);

export interface AvatarProps extends Ark.AvatarProps, AvatarVariantProps {
  /** Name of user. */
  name: string;
  /** Fallback content. Defaults to user's initials. */
  fallback?: ReactNode;
  /** Image source. */
  imageSource: string;
}

export const AvatarRoot = withProvider(styled(Ark.Avatar.Root), "root");

export const AvatarFallback = withContext(
  styled(Ark.Avatar.Fallback),
  "fallback",
);

export const AvatarImage = withContext(styled(Ark.Avatar.Image), "image");

// TODO unit test this, use JSDoc examples below as basepoint and match for e.g. names with diacritics
/**
 * Get initials from name.
 * @param name Name of user.
 * @returns Initials.
 *
 * @example
 * getInitials("Elon Musk"); // "EM"
 * getInitials("Elon"); // "E"
 * getInitials("Elon Reeve Musk"); // "EM"
 */
const getInitials = (name: string) =>
  name
    .match(/(^\S\S?|\s\S)?/g)!
    .map((v) => v.trim())
    .join("")
    .match(/(^\S|\S$)?/g)!
    .join("")
    .toLocaleUpperCase();

/**
 * User avatar.
 */
const Avatar = ({
  name,
  fallback = getInitials(name),
  imageSource,
  ...rest
}: AvatarProps) => (
  <AvatarRoot {...rest}>
    <AvatarFallback>{fallback}</AvatarFallback>

    <AvatarImage src={imageSource} alt={`${name}'s avatar`} />
  </AvatarRoot>
);

export default Avatar;
