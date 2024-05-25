import { Pagination as ArkPagination } from "@ark-ui/react/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { pagination } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {} from "@zag-js/pagination";
import type { ComponentProps } from "react";

const { withProvider, withContext } = createStyleContext(pagination);

export const PaginationRoot = withProvider(ArkPagination.Root, "root");
export interface PaginationRootProps
  extends ComponentProps<typeof PaginationRoot> {}

export const PaginationEllipsis = withContext(
  ArkPagination.Ellipsis,
  "ellipsis",
);
export interface PaginationEllipsisProps
  extends ComponentProps<typeof PaginationEllipsis> {}

export const PaginationNextTrigger = withContext(
  ArkPagination.NextTrigger,
  "nextTrigger",
);
export interface PaginationNextTriggerProps
  extends ComponentProps<typeof PaginationNextTrigger> {}

export const PaginationItem = withContext(ArkPagination.Item, "item");
export interface PaginationItemProps
  extends ComponentProps<typeof PaginationItem> {}

export const PaginationPrevTrigger = withContext(
  ArkPagination.PrevTrigger,
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

        {pages.map((page, idx) =>
          page.type === "page" ? (
            <PaginationItem key={idx} {...page} asChild>
              <Button variant="outline">{page.value}</Button>
            </PaginationItem>
          ) : (
            <PaginationEllipsis key={idx} index={idx}>
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
