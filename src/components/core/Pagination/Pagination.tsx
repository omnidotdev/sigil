import { Pagination as ArkPagination } from "@ark-ui/react/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Button } from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { pagination } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PaginationVariantProps } from "generated/panda/recipes";
import type { ColorPalette } from "generated/panda/tokens";
import type { AssignJSXStyleProps } from "lib/types";

const { withProvider, withContext } = createStyleContext(pagination);

export const PaginationContext = ArkPagination.Context;
export interface PaginationContextProps
  extends AssignJSXStyleProps<ArkPagination.ContextProps> {}

export const PaginationRoot = withProvider(styled(ArkPagination.Root), "root");
export interface PaginationRootProps
  extends Omit<AssignJSXStyleProps<ArkPagination.RootProps>, "page">,
    PaginationVariantProps {}

export const PaginationEllipsis = withContext(
  styled(ArkPagination.Ellipsis),
  "ellipsis",
);
export interface PaginationEllipsisProps
  extends AssignJSXStyleProps<ArkPagination.EllipsisProps> {}

export const PaginationNextTrigger = withContext(
  styled(ArkPagination.NextTrigger),
  "nextTrigger",
);
export interface PaginationNextTriggerProps
  extends AssignJSXStyleProps<ArkPagination.NextTriggerProps> {}

export const PaginationItem = withContext(styled(ArkPagination.Item), "item");
export interface PaginationItemProps
  extends AssignJSXStyleProps<ArkPagination.ItemProps> {}

export const PaginationPrevTrigger = withContext(
  styled(ArkPagination.PrevTrigger),
  "prevTrigger",
);
export interface PaginationPrevTriggerProps
  extends AssignJSXStyleProps<ArkPagination.PrevTriggerProps> {}

export interface PaginationProps extends PaginationRootProps {
  colorPalette?: ColorPalette;
  prevTriggerProps?: PaginationPrevTriggerProps;
  itemProps?: PaginationItemProps;
  ellipsisProps?: PaginationEllipsisProps;
  nextTriggerProps?: PaginationNextTriggerProps;
}

/**
 * Pagination.
 */
export const Pagination = ({
  prevTriggerProps,
  itemProps,
  ellipsisProps,
  nextTriggerProps,
  colorPalette = "accent",
  ...rest
}: PaginationProps) => (
  <PaginationRoot pageSize={10} siblingCount={1} {...rest}>
    <PaginationPrevTrigger asChild {...prevTriggerProps}>
      <Button variant="ghost" aria-label="Previous page">
        <FiChevronLeft />
      </Button>
    </PaginationPrevTrigger>

    <PaginationContext>
      {({ pages }) =>
        pages.map((page, idx) =>
          page.type === "page" ? (
            <PaginationItem key={idx} asChild {...page} {...itemProps}>
              <Button variant="outline" colorPalette={colorPalette}>
                {page.value}
              </Button>
            </PaginationItem>
          ) : (
            <PaginationEllipsis key={idx} index={idx} {...ellipsisProps}>
              &#8230;
            </PaginationEllipsis>
          ),
        )
      }
    </PaginationContext>

    <PaginationNextTrigger asChild {...nextTriggerProps}>
      <Button variant="ghost" aria-label="Next page">
        <FiChevronRight />
      </Button>
    </PaginationNextTrigger>
  </PaginationRoot>
);
