import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { article, type ArticleVariantProps } from "generated/panda/recipes";

import type { ComponentPropsWithoutRef } from "react";

export interface ArticleProps
  extends ArticleVariantProps,
    ComponentPropsWithoutRef<typeof ark.article> {}

/**
 * Article.
 */
const Article = styled(ark.article, article);

export default Article;
