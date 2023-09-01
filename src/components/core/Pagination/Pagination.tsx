import * as Ark from "@ark-ui/react/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useMediaQuery } from "usehooks-ts";

import Button from "components/core/Button/Button";
import { styled } from "generated/panda/jsx";
import {
  pagination,
  type PaginationVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/pagination";

const { withProvider, withContext } = createStyleContext(pagination);

export interface PaginationProps
  extends Ark.PaginationProps,
    PaginationVariantProps {}

export const PaginationRoot = withProvider(styled(Ark.Pagination.Root), "root");

export const PaginationEllipsis = withContext(
  styled(Ark.Pagination.Ellipsis),
  "ellipsis",
);

export const PaginationList = withContext(styled(Ark.Pagination.List), "list");

export const PaginationListItem = withContext(
  styled(Ark.Pagination.ListItem),
  "listItem",
);

export const PaginationNextPageTrigger = withContext(
  styled(Ark.Pagination.NextPageTrigger),
  "nextPageTrigger",
);

export const PaginationPageTrigger = withContext(
  styled(Ark.Pagination.PageTrigger),
  "pageTrigger",
);

export const PaginationPrevPageTrigger = withContext(
  styled(Ark.Pagination.PrevPageTrigger),
  "prevPageTrigger",
);

/**
 * Pagination.
 */
const Pagination = () => {
  const matches = useMediaQuery("(max-width: 600px)");

  return (
    <PaginationRoot
      count={90}
      pageSize={10}
      siblingCount={matches ? 0 : 1}
      defaultPage={2}
    >
      {({ pages }) => (
        <>
          <PaginationList>
            <PaginationPrevPageTrigger asChild>
              <Button variant="ghost" aria-label="Next Page">
                <FiChevronLeft />
              </Button>
            </PaginationPrevPageTrigger>

            {pages.map((page, idx) =>
              page.type === "page" ? (
                <PaginationPageTrigger key={idx} {...page} asChild>
                  <Button variant="outline">{page.value}</Button>
                </PaginationPageTrigger>
              ) : (
                <PaginationEllipsis key={idx} index={idx}>
                  &#8230;
                </PaginationEllipsis>
              ),
            )}

            <PaginationNextPageTrigger asChild>
              <Button variant="ghost" aria-label="Next Page">
                <FiChevronRight />
              </Button>
            </PaginationNextPageTrigger>
          </PaginationList>
        </>
      )}
    </PaginationRoot>
  );
};

export default Pagination;
