import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";

import { styled } from "generated/panda/jsx";
import { avatar } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLStyledProps } from "generated/panda/jsx";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(avatar);

export const AvatarRoot = withProvider(styled(ArkAvatar.Root), "root");
export interface AvatarRootProps extends HTMLStyledProps<typeof AvatarRoot> {}

export const AvatarFallback = withContext(
  styled(ArkAvatar.Fallback),
  "fallback",
);
export interface AvatarFallbackProps
  extends HTMLStyledProps<typeof AvatarFallback> {}

export const AvatarImage = withContext(styled(ArkAvatar.Image), "image");
export interface AvatarImageProps extends HTMLStyledProps<typeof AvatarImage> {}

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

export interface AvatarProps extends AvatarRootProps {
  /** Name of user. */
  name: string;
  /** Fallback content. Defaults to user's initials. */
  fallback?: ReactNode;
  /** Image source. */
  imageSource: string;
}

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
