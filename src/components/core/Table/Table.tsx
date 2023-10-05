import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { table, type TableVariantProps } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { HTMLArkProps } from "@ark-ui/react";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(table);

export interface TableProps extends TableVariantProps, HTMLArkProps<"table"> {
  /**
   * Table caption.
   * @see https://www.w3schools.com/tags/tag_caption.asp
   */
  caption?: ReactNode;
  /**
   * Table header content.
   * @see https://www.w3schools.com/tags/tag_thead.asp
   */
  headerContent?: ReactNode;
  /**
   * Table footer content.
   * @see https://www.w3schools.com/tags/tag_tfoot.asp
   */
  footerContent?: ReactNode;
}

export const TableRoot = withProvider(styled(ark.table), "root");

export const TableBody = withContext(styled(ark.tbody), "body");

export const TableCaption = withContext(styled(ark.caption), "caption");

export const TableCell = withContext(styled(ark.td), "cell");

export const TableFooter = withContext(styled(ark.tfoot), "footer");

export const TableHead = withContext(styled(ark.th), "head");

export const TableHeader = withContext(styled(ark.thead), "header");

export const TableRow = withContext(styled(ark.tr), "row");

/**
 * Table to display rows of data. Children are rendered within the table body.
 */
const Table = ({
  headerContent,
  caption,
  children,
  footerContent,
  ...rest
}: TableProps) => (
  <TableRoot {...rest}>
    {caption && <TableCaption>{caption}</TableCaption>}

    {headerContent && <TableHeader>{headerContent}</TableHeader>}

    <TableBody>{children}</TableBody>

    {footerContent && <TableFooter>{footerContent}</TableFooter>}
  </TableRoot>
);

export default Table;
