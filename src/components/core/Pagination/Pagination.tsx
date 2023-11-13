import { Pagination as ArkPagination } from "@ark-ui/react/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import {
  pagination,
  type PaginationVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { PaginationProps as ArkPaginationProps } from "@ark-ui/react/pagination";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/pagination";

const { withProvider, withContext } = createStyleContext(pagination);

export interface PaginationProps
  extends ArkPaginationProps,
    PaginationVariantProps {}

export const PaginationRoot = withProvider(styled(ArkPagination.Root), "root");

export const PaginationEllipsis = withContext(
  styled(ArkPagination.Ellipsis),
  "ellipsis",
);

export const PaginationNextTrigger = withContext(
  styled(ArkPagination.NextTrigger),
  "nextTrigger",
);

export const PaginationItem = withContext(styled(ArkPagination.Item), "item");

export const PaginationPrevTrigger = withContext(
  styled(ArkPagination.PrevTrigger),
  "prevTrigger",
);

/**
 * Pagination.
 */
const Pagination = (props: PaginationProps) => (
  <PaginationRoot
    // TODO move to stories
    pageSize={10}
    siblingCount={1}
    defaultPage={2}
    {...props}
  >
    {/* @ts-ignore broken context */}
    {({ pages }) => (
      <>
        <PaginationPrevTrigger asChild>
          <Button variant="ghost" aria-label="Next Page">
            <FiChevronLeft />
          </Button>
        </PaginationPrevTrigger>

        {/* @ts-ignore broken context */}
        {pages.map((page, index) =>
          page.type === "page" ? (
            <PaginationItem key={index} {...page} asChild>
              <Button variant="outline">{page.value}</Button>
            </PaginationItem>
          ) : (
            <PaginationEllipsis key={index} index={index}>
              &#8230;
            </PaginationEllipsis>
          ),
        )}
        <PaginationNextTrigger asChild>
          <Button variant="ghost" aria-label="Next Page">
            <FiChevronRight />
          </Button>
        </PaginationNextTrigger>
      </>
    )}
  </PaginationRoot>
);

export default Pagination;
