import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { useMemo, type ComponentProps, type ReactNode } from "react";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { match } from "ts-pattern";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { datePicker } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type {} from "@zag-js/date-picker";

const { withProvider, withContext } = createStyleContext(datePicker);

export const DatePickerRoot = withProvider(ArkDatePicker.Root, "root");
export interface DatePickerRootProps
  extends ComponentProps<typeof DatePickerRoot> {}

// TODO use in render
export const DatePickerClearTrigger = withContext(
  ArkDatePicker.ClearTrigger,
  "clearTrigger",
);
export interface DatePickerClearTriggerProps
  extends ComponentProps<typeof DatePickerClearTrigger> {}

export const DatePickerContent = withContext(ArkDatePicker.Content, "content");
export interface DatePickerContentProps
  extends ComponentProps<typeof DatePickerContent> {}

export const DatePickerControl = withContext(ArkDatePicker.Control, "control");
export interface DatePickerControlProps
  extends ComponentProps<typeof DatePickerControl> {}

export const DatePickerInput = withContext(ArkDatePicker.Input, "input");
export interface DatePickerInputProps
  extends ComponentProps<typeof DatePickerInput> {}

export const DatePickerLabel = withContext(ArkDatePicker.Label, "label");
export interface DatePickerLabelProps
  extends ComponentProps<typeof DatePickerLabel> {}

export const DatePickerMonthSelect = withContext(
  ArkDatePicker.MonthSelect,
  "monthSelect",
);
export interface DatePickerMonthSelectProps
  extends ComponentProps<typeof DatePickerMonthSelect> {}

export const DatePickerNextTrigger = withContext(
  ArkDatePicker.NextTrigger,
  "nextTrigger",
);
export interface DatePickerNextTriggerProps
  extends ComponentProps<typeof DatePickerNextTrigger> {}

export const DatePickerPositioner = withContext(
  ArkDatePicker.Positioner,
  "positioner",
);
export interface DatePickerPositionerProps
  extends ComponentProps<typeof DatePickerPositioner> {}

// TODO use
export const DatePickerPresetTrigger = withContext(
  ArkDatePicker.PresetTrigger,
  "presetTrigger",
);
export interface DatePickerPresetTriggerProps
  extends ComponentProps<typeof DatePickerPresetTrigger> {}

export const DatePickerPrevTrigger = withContext(
  ArkDatePicker.PrevTrigger,
  "prevTrigger",
);
export interface DatePickerPrevTriggerProps
  extends ComponentProps<typeof DatePickerPrevTrigger> {}

export const DatePickerRangeText = withContext(
  ArkDatePicker.RangeText,
  "rangeText",
);
export interface DatePickerRangeTextProps
  extends ComponentProps<typeof DatePickerRangeText> {}

export const DatePickerTable = withContext(ArkDatePicker.Table, "table");
export interface DatePickerTableProps
  extends ComponentProps<typeof DatePickerTable> {}

export const DatePickerTableBody = withContext(
  ArkDatePicker.TableBody,
  "tableBody",
);
export interface DatePickerTableBodyProps
  extends ComponentProps<typeof DatePickerTableBody> {}

export const DatePickerTableCell = withContext(
  ArkDatePicker.TableCell,
  "tableCell",
);
export interface DatePickerTableCellProps
  extends ComponentProps<typeof DatePickerTableCell> {}

export const DatePickerTableCellTrigger = withContext(
  ArkDatePicker.TableCellTrigger,
  "tableCellTrigger",
);
export interface DatePickerTableCellTriggerProps
  extends ComponentProps<typeof DatePickerTableCellTrigger> {}

export const DatePickerTableHead = withContext(
  ArkDatePicker.TableHead,
  "tableHead",
);
export interface DatePickerTableHeadProps
  extends ComponentProps<typeof DatePickerTableHead> {}

export const DatePickerTableHeader = withContext(
  ArkDatePicker.TableHeader,
  "tableHeader",
);
export interface DatePickerTableHeaderProps
  extends ComponentProps<typeof DatePickerTableHeader> {}

export const DatePickerTableRow = withContext(
  ArkDatePicker.TableRow,
  "tableRow",
);
export interface DatePickerTableRowProps
  extends ComponentProps<typeof DatePickerTableRow> {}

export const DatePickerTrigger = withContext(ArkDatePicker.Trigger, "trigger");
export interface DatePickerTriggerProps
  extends ComponentProps<typeof DatePickerTrigger> {}

export const DatePickerView = withContext(ArkDatePicker.View, "view");
export interface DatePickerViewProps
  extends ComponentProps<typeof DatePickerView> {}

export const DatePickerViewControl = withContext(
  ArkDatePicker.ViewControl,
  "viewControl",
);
export interface DatePickerViewControlProps
  extends ComponentProps<typeof DatePickerViewControl> {}

export const DatePickerViewTrigger = withContext(
  ArkDatePicker.ViewTrigger,
  "viewTrigger",
);
export interface DatePickerViewTriggerProps
  extends ComponentProps<typeof DatePickerViewTrigger> {}

export const DatePickerYearSelect = withContext(
  ArkDatePicker.YearSelect,
  "yearSelect",
);
export interface DatePickerYearSelectProps
  extends ComponentProps<typeof DatePickerYearSelect> {}

export interface DatePickerProps extends DatePickerRootProps {
  /** Label for the date picker. Defaults to "Date Picker". */
  label?: ReactNode;
  /** Control props. */
  controlProps?: DatePickerControlProps;
  /** Trigger props. */
  triggerProps?: DatePickerTriggerProps;
  /** Positioner props. */
  positionerProps?: DatePickerPositionerProps;
  /** Content props. */
  contentProps?: DatePickerContentProps;
  /** View props. */
  viewProps?: DatePickerViewProps;
  /** View control props. */
  viewControlProps?: DatePickerViewControlProps;
  /** Previous trigger props. */
  prevTriggerProps?: DatePickerPrevTriggerProps;
  /** View trigger props. */
  viewTriggerProps?: DatePickerViewTriggerProps;
  /** Next trigger props. */
  nextTriggerProps?: DatePickerNextTriggerProps;
  /** Range text props. */
  rangeTextProps?: DatePickerRangeTextProps;
  /** Table props. */
  tableProps?: DatePickerTableProps;
  /** Table body props. */
  tableBodyProps?: DatePickerTableBodyProps;
  /** Table cell props. */
  tableCellProps?: DatePickerTableCellProps;
  /** Table cell trigger props. */
  tableCellTriggerProps?: DatePickerTableCellTriggerProps;
  /** Table head props. */
  tableHeadProps?: DatePickerTableHeadProps;
  /** Table header props. */
  tableHeaderProps?: DatePickerTableHeaderProps;
  /** Table row props. */
  tableRowProps?: DatePickerTableRowProps;
}

/**
 * Date picker.
 */
const DatePicker = ({
  label = "Date Picker",
  controlProps,
  triggerProps,
  positionerProps,
  contentProps,
  viewProps,
  viewControlProps,
  prevTriggerProps,
  viewTriggerProps,
  nextTriggerProps,
  rangeTextProps,
  tableProps,
  tableBodyProps,
  tableCellProps,
  tableCellTriggerProps,
  tableHeadProps,
  tableHeaderProps,
  tableRowProps,
  ...rest
}: DatePickerProps) => {
  const inputs = useMemo(
    () =>
      match(rest.selectionMode)
        .with("range", () => (
          <>
            <DatePickerInput index={0} asChild>
              <Input />
            </DatePickerInput>

            <DatePickerInput index={1} asChild>
              <Input />
            </DatePickerInput>
          </>
        ))
        // TODO support `multiple` mode
        // .with("multiple", () => <></>)
        .otherwise(() => (
          <DatePickerInput asChild>
            <Input />
          </DatePickerInput>
        )),
    [rest.selectionMode],
  );

  return (
    <DatePickerRoot positioning={{ sameWidth: true }} {...rest}>
      <DatePickerLabel>{label}</DatePickerLabel>

      <DatePickerControl {...controlProps}>
        {inputs}

        <DatePickerTrigger asChild {...triggerProps}>
          <Button variant="outline" aria-label="Open date picker">
            <FiCalendar />
          </Button>
        </DatePickerTrigger>
      </DatePickerControl>

      <DatePickerPositioner {...positionerProps}>
        <DatePickerContent {...contentProps}>
          <DatePickerView view="day" {...viewProps}>
            {(ctx) => (
              <>
                <DatePickerViewControl {...viewControlProps}>
                  <DatePickerPrevTrigger asChild {...prevTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <FiChevronLeft />
                    </Button>
                  </DatePickerPrevTrigger>

                  <DatePickerViewTrigger asChild {...viewTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <DatePickerRangeText {...rangeTextProps} />
                    </Button>
                  </DatePickerViewTrigger>

                  <DatePickerNextTrigger asChild {...nextTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <FiChevronRight />
                    </Button>
                  </DatePickerNextTrigger>
                </DatePickerViewControl>

                <DatePickerTable {...tableProps}>
                  <DatePickerTableHead {...tableHeadProps}>
                    <DatePickerTableRow {...tableRowProps}>
                      {ctx.weekDays.map((weekDay, id) => (
                        <DatePickerTableHeader key={id} {...tableHeaderProps}>
                          {weekDay.narrow}
                        </DatePickerTableHeader>
                      ))}
                    </DatePickerTableRow>
                  </DatePickerTableHead>

                  <DatePickerTableBody {...tableBodyProps}>
                    {ctx.weeks.map((week, id) => (
                      <DatePickerTableRow key={id} {...tableRowProps}>
                        {week.map((day, id) => (
                          <DatePickerTableCell
                            key={id}
                            value={day}
                            {...tableCellProps}
                          >
                            <DatePickerTableCellTrigger
                              asChild
                              {...tableCellTriggerProps}
                            >
                              <Button variant="ghost">{day.day}</Button>
                            </DatePickerTableCellTrigger>
                          </DatePickerTableCell>
                        ))}
                      </DatePickerTableRow>
                    ))}
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerView>

          <DatePickerView view="month" {...viewProps}>
            {(ctx) => (
              <>
                <DatePickerViewControl {...viewControlProps}>
                  <DatePickerPrevTrigger asChild {...prevTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <FiChevronLeft />
                    </Button>
                  </DatePickerPrevTrigger>

                  <DatePickerViewTrigger asChild {...viewTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <DatePickerRangeText />
                    </Button>
                  </DatePickerViewTrigger>

                  <DatePickerNextTrigger asChild {...nextTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <FiChevronRight />
                    </Button>
                  </DatePickerNextTrigger>
                </DatePickerViewControl>

                <DatePickerTable {...tableProps}>
                  <DatePickerTableBody {...tableBodyProps}>
                    {ctx
                      .getMonthsGrid({ columns: 4, format: "short" })
                      .map((months, id) => (
                        <DatePickerTableRow key={id} {...tableRowProps}>
                          {months.map((month, id) => (
                            <DatePickerTableCell
                              key={id}
                              value={month.value}
                              {...tableCellProps}
                            >
                              <DatePickerTableCellTrigger
                                asChild
                                {...tableCellTriggerProps}
                              >
                                <Button variant="ghost">{month.label}</Button>
                              </DatePickerTableCellTrigger>
                            </DatePickerTableCell>
                          ))}
                        </DatePickerTableRow>
                      ))}
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerView>

          <DatePickerView view="year" {...viewProps}>
            {(ctx) => (
              <>
                <DatePickerViewControl {...viewControlProps}>
                  <DatePickerPrevTrigger asChild {...prevTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <FiChevronLeft />
                    </Button>
                  </DatePickerPrevTrigger>

                  <DatePickerViewTrigger asChild {...viewTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <DatePickerRangeText />
                    </Button>
                  </DatePickerViewTrigger>

                  <DatePickerNextTrigger asChild {...nextTriggerProps}>
                    <Button variant="ghost" size="sm">
                      <FiChevronRight />
                    </Button>
                  </DatePickerNextTrigger>
                </DatePickerViewControl>

                <DatePickerTable {...tableProps}>
                  <DatePickerTableBody {...tableBodyProps}>
                    {ctx.getYearsGrid({ columns: 4 }).map((years, id) => (
                      <DatePickerTableRow key={id} {...tableRowProps}>
                        {years.map((year, id) => (
                          <DatePickerTableCell
                            key={id}
                            value={year.value}
                            {...tableCellProps}
                          >
                            <DatePickerTableCellTrigger
                              asChild
                              {...tableCellTriggerProps}
                            >
                              <Button variant="ghost">{year.label}</Button>
                            </DatePickerTableCellTrigger>
                          </DatePickerTableCell>
                        ))}
                      </DatePickerTableRow>
                    ))}
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerView>
        </DatePickerContent>
      </DatePickerPositioner>
    </DatePickerRoot>
  );
};

export default DatePicker;
