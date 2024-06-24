import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import { FiUser } from "react-icons/fi";

import { styled } from "generated/panda/jsx";
import { avatar } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { Assign, JsxStyleProps } from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(avatar);

export const AvatarRoot = withProvider(styled(ArkAvatar.Root), "root");
export interface AvatarRootProps
  extends Assign<JsxStyleProps, ArkAvatar.RootProps> {}

export const AvatarFallback = withContext(
  styled(ArkAvatar.Fallback),
  "fallback",
);
export interface AvatarFallbackProps
  extends Assign<JsxStyleProps, ArkAvatar.FallbackProps> {}

export const AvatarImage = withContext(styled(ArkAvatar.Image), "image");
export interface AvatarImageProps
  extends Assign<JsxStyleProps, ArkAvatar.ImageProps> {}

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
  name?: string;
  /** Fallback content. Defaults to user's initials if supplied, an icon otherwise. */
  fallback?: ReactNode;
  /** Image source. */
  imageSrc?: string;
}

/**
 * Avatar often used as a graphical representation of a user. Useful for e.g. profile pages and comment sections.
 */
const Avatar = ({
  name,
  fallback = name ? getInitials(name) : <FiUser />,
  imageSrc,
  ...rest
}: AvatarProps) => (
  <AvatarRoot {...rest}>
    <AvatarFallback>{fallback}</AvatarFallback>

    <AvatarImage src={imageSrc} alt={`${name}'s avatar`} />
  </AvatarRoot>
);

export default Avatar;
