import { defineRecipe } from "@pandacss/dev";

/**
 * Alert recipe.
 */
const alert = defineRecipe({
  className: "alert",
  description: "Alert style recipes",
  base: {
    bgColor: "background.default",
    borderRadius: "md",
    borderWidth: "1px",
    p: 4,
    textStyle: "sm",
    width: "full",
  },
});

export default alert;
