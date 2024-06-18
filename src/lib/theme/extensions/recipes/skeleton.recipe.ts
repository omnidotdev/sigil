import { defineRecipe } from "@pandacss/dev";

/**
 * Skeleton recipe.
 */
const skeleton = defineRecipe({
  className: "skeleton",
  description: "Skeleton style recipes",
  base: {
    animation: "skeleton-pulse",
    bgClip: "padding-box",
    bgColor: "background.emphasized",
    borderRadius: "md",
    color: "transparent",
    cursor: "default",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden",
    },
  },
});

export default skeleton;
