import { ark } from "@ark-ui/react";

import { styled } from "generated/panda/jsx";
import { table } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {
  Assign,
  ComponentProps,
  JsxStyleProps,
} from "generated/panda/types";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(table);

export const TableRoot = withProvider(styled(ark.table), "root");
export interface TableRootProps
  extends Assign<JsxStyleProps, ComponentProps<typeof TableRoot>> {}

export const TableBody = withContext(styled(ark.tbody), "body");
export interface TableBodyProps
  extends Assign<JsxStyleProps, ComponentProps<typeof TableBody>> {}

export const TableCaption = withContext(styled(ark.caption), "caption");
export interface TableCaptionProps
  extends Assign<JsxStyleProps, ComponentProps<typeof TableCaption>> {}

export const TableCell = withContext(styled(ark.td), "cell");
export interface TableCellProps
  extends Assign<JsxStyleProps, ComponentProps<typeof TableCell>> {}

export const TableHead = withContext(styled(ark.thead), "head");
export interface TableHeadProps
  extends Assign<JsxStyleProps, ComponentProps<typeof TableHead>> {}

export const TableHeader = withContext(styled(ark.th), "header");
export interface TableHeaderProps
  extends Assign<JsxStyleProps, ComponentProps<typeof TableHeader>> {}

export const TableRow = withContext(styled(ark.tr), "row");
export interface TableRowProps
  extends Assign<JsxStyleProps, ComponentProps<typeof TableRow>> {}

export const TableFooter = withContext(styled(ark.tfoot), "footer");
export interface TableFooterProps
  extends Assign<JsxStyleProps, ComponentProps<typeof TableFooter>> {}

export interface TableProps extends TableRootProps {
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

    {headerContent && <TableHead>{headerContent}</TableHead>}

    <TableBody>{children}</TableBody>

    {footerContent && <TableFooter>{footerContent}</TableFooter>}
  </TableRoot>
);

export default Table;
