import { Pagination as ArkPagination } from "@ark-ui/react/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import { pagination } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/pagination";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(pagination);

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

export interface PaginationProps extends PaginationRootProps {}

/**
 * Pagination.
 */
const Pagination = (props: PaginationProps) => (
  <PaginationRoot pageSize={10} siblingCount={1} {...props}>
    {({ pages }) => (
      <>
        <PaginationPrevTrigger asChild>
          <Button variant="ghost" aria-label="Previous page">
            <FiChevronLeft />
          </Button>
        </PaginationPrevTrigger>

        {pages.map((page, index) =>
          page.type === "page" ? (
            <PaginationItem key={page.value} {...page} asChild>
              <Button variant="outline">{page.value}</Button>
            </PaginationItem>
          ) : (
            <PaginationEllipsis key={index} index={index}>
              &#8230;
            </PaginationEllipsis>
          ),
        )}
        <PaginationNextTrigger asChild>
          <Button variant="ghost" aria-label="Next page">
            <FiChevronRight />
          </Button>
        </PaginationNextTrigger>
      </>
    )}
  </PaginationRoot>
);

export default Pagination;
