import { Pagination as ArkPagination } from "@ark-ui/react/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { pagination } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { ColorPalette } from "generated/panda/tokens";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(pagination);

export const PaginationContext = ArkPagination.Context;
export interface PaginationContextProps
  extends ComponentProps<typeof PaginationContext> {}

export const PaginationRoot = withProvider(styled(ArkPagination.Root), "root");
export interface PaginationRootProps
  extends ComponentProps<typeof PaginationRoot> {}

export const PaginationEllipsis = withContext(
  styled(ArkPagination.Ellipsis),
  "ellipsis",
);
export interface PaginationEllipsisProps
  extends ComponentProps<typeof PaginationEllipsis> {}

export const PaginationNextTrigger = withContext(
  styled(ArkPagination.NextTrigger),
  "nextTrigger",
);
export interface PaginationNextTriggerProps
  extends ComponentProps<typeof PaginationNextTrigger> {}

export const PaginationItem = withContext(styled(ArkPagination.Item), "item");
export interface PaginationItemProps
  extends ComponentProps<typeof PaginationItem> {}

export const PaginationPrevTrigger = withContext(
  styled(ArkPagination.PrevTrigger),
  "prevTrigger",
);
export interface PaginationPrevTriggerProps
  extends ComponentProps<typeof PaginationPrevTrigger> {}

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
const Pagination = ({
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

export default Pagination;
