import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { datePicker } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/date-picker";
import type { ComponentProps, ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(datePicker);

export const DatePickerRoot = withProvider(styled(ArkDatePicker.Root), "root");
export interface DatePickerRootProps
  extends ComponentProps<typeof DatePickerRoot> {}

// TODO use in render
export const DatePickerClearTrigger = withContext(
  styled(ArkDatePicker.ClearTrigger),
  "clearTrigger",
);
export interface DatePickerClearTriggerProps
  extends ComponentProps<typeof DatePickerClearTrigger> {}

export const DatePickerContent = withContext(
  styled(ArkDatePicker.Content),
  "content",
);
export interface DatePickerContentProps
  extends ComponentProps<typeof DatePickerContent> {}

export const DatePickerControl = withContext(
  styled(ArkDatePicker.Control),
  "control",
);
export interface DatePickerControlProps
  extends ComponentProps<typeof DatePickerControl> {}

export const DatePickerInput = withContext(
  styled(ArkDatePicker.Input),
  "input",
);
export interface DatePickerInputProps
  extends ComponentProps<typeof DatePickerInput> {}

export const DatePickerLabel = withContext(
  styled(ArkDatePicker.Label),
  "label",
);
export interface DatePickerLabelProps
  extends ComponentProps<typeof DatePickerLabel> {}

export const DatePickerMonthSelect = withContext(
  styled(ArkDatePicker.MonthSelect),
  "monthSelect",
);
export interface DatePickerMonthSelectProps
  extends ComponentProps<typeof DatePickerMonthSelect> {}

export const DatePickerNextTrigger = withContext(
  styled(ArkDatePicker.NextTrigger),
  "nextTrigger",
);
export interface DatePickerNextTriggerProps
  extends ComponentProps<typeof DatePickerNextTrigger> {}

export const DatePickerPositioner = withContext(
  styled(ArkDatePicker.Positioner),
  "positioner",
);
export interface DatePickerPositionerProps
  extends ComponentProps<typeof DatePickerPositioner> {}

export const DatePickerPrevTrigger = withContext(
  styled(ArkDatePicker.PrevTrigger),
  "prevTrigger",
);
export interface DatePickerPrevTriggerProps
  extends ComponentProps<typeof DatePickerPrevTrigger> {}

export const DatePickerRangeText = withContext(
  styled(ArkDatePicker.RangeText),
  "rangeText",
);
export interface DatePickerRangeTextProps
  extends ComponentProps<typeof DatePickerRangeText> {}

export const DatePickerTable = withContext(
  styled(ArkDatePicker.Table),
  "table",
);
export interface DatePickerTableProps
  extends ComponentProps<typeof DatePickerTable> {}

export const DatePickerTableBody = withContext(
  styled(ArkDatePicker.TableBody),
  "tableBody",
);
export interface DatePickerTableBodyProps
  extends ComponentProps<typeof DatePickerTableBody> {}

export const DatePickerTableCell = withContext(
  styled(ArkDatePicker.TableCell),
  "tableCell",
);
export interface DatePickerTableCellProps
  extends ComponentProps<typeof DatePickerTableCell> {}

export const DatePickerTableCellTrigger = withContext(
  styled(ArkDatePicker.TableCellTrigger),
  "tableCellTrigger",
);
export interface DatePickerTableCellTriggerProps
  extends ComponentProps<typeof DatePickerTableCellTrigger> {}

export const DatePickerTableHead = withContext(
  styled(ArkDatePicker.TableHead),
  "tableHead",
);
export interface DatePickerTableHeadProps
  extends ComponentProps<typeof DatePickerTableHead> {}

export const DatePickerTableHeader = withContext(
  styled(ArkDatePicker.TableHeader),
  "tableHeader",
);
export interface DatePickerTableHeaderProps
  extends ComponentProps<typeof DatePickerTableHeader> {}

export const DatePickerTableRow = withContext(
  styled(ArkDatePicker.TableRow),
  "tableRow",
);
export interface DatePickerTableRowProps
  extends ComponentProps<typeof DatePickerTableRow> {}

export const DatePickerTrigger = withContext(
  styled(ArkDatePicker.Trigger),
  "trigger",
);
export interface DatePickerTriggerProps
  extends ComponentProps<typeof DatePickerTrigger> {}

export const DatePickerView = withContext(styled(ArkDatePicker.View), "view");
export interface DatePickerViewProps
  extends ComponentProps<typeof DatePickerView> {}

export const DatePickerViewControl = withContext(
  styled(ArkDatePicker.ViewControl),
  "viewControl",
);
export interface DatePickerViewControlProps
  extends ComponentProps<typeof DatePickerViewControl> {}

export const DatePickerViewTrigger = withContext(
  styled(ArkDatePicker.ViewTrigger),
  "viewTrigger",
);
export interface DatePickerViewTriggerProps
  extends ComponentProps<typeof DatePickerViewTrigger> {}

export const DatePickerYearSelect = withContext(
  styled(ArkDatePicker.YearSelect),
  "yearSelect",
);
export interface DatePickerYearSelectProps
  extends ComponentProps<typeof DatePickerYearSelect> {}

export interface DatePickerProps extends DatePickerRootProps {
  /** Label for the date picker. Defaults to "Date Picker". */
  label?: ReactNode;
}

/**
 * Date picker.
 */
const DatePicker = ({ label = "Date Picker", ...rest }: DatePickerProps) => (
  <DatePickerRoot positioning={{ sameWidth: true }} {...rest}>
    <DatePickerLabel>{label}</DatePickerLabel>

    <DatePickerControl>
      <DatePickerInput asChild>
        <Input />
      </DatePickerInput>

      <DatePickerTrigger asChild>
        <Button variant="outline" aria-label="Open date picker">
          <FiCalendar />
        </Button>
      </DatePickerTrigger>
    </DatePickerControl>

    <DatePickerPositioner>
      <DatePickerContent>
        <DatePickerView view="day">
          {(ctx) => (
            <>
              <DatePickerViewControl>
                <DatePickerPrevTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <FiChevronLeft />
                  </Button>
                </DatePickerPrevTrigger>

                <DatePickerViewTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <DatePickerRangeText />
                  </Button>
                </DatePickerViewTrigger>

                <DatePickerNextTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <FiChevronRight />
                  </Button>
                </DatePickerNextTrigger>
              </DatePickerViewControl>

              <DatePickerTable>
                <DatePickerTableHead>
                  <DatePickerTableRow>
                    {ctx.weekDays.map((weekDay, id) => (
                      <DatePickerTableHeader key={id}>
                        {weekDay.narrow}
                      </DatePickerTableHeader>
                    ))}
                  </DatePickerTableRow>
                </DatePickerTableHead>

                <DatePickerTableBody>
                  {ctx.weeks.map((week, id) => (
                    <DatePickerTableRow key={id}>
                      {week.map((day, id) => (
                        <DatePickerTableCell key={id} value={day}>
                          <DatePickerTableCellTrigger asChild>
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

        <DatePickerView view="month">
          {(ctx) => (
            <>
              <DatePickerViewControl>
                <DatePickerPrevTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <FiChevronLeft />
                  </Button>
                </DatePickerPrevTrigger>

                <DatePickerViewTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <DatePickerRangeText />
                  </Button>
                </DatePickerViewTrigger>

                <DatePickerNextTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <FiChevronRight />
                  </Button>
                </DatePickerNextTrigger>
              </DatePickerViewControl>

              <DatePickerTable>
                <DatePickerTableBody>
                  {ctx
                    .getMonthsGrid({ columns: 4, format: "short" })
                    .map((months, id) => (
                      <DatePickerTableRow key={id}>
                        {months.map((month, id) => (
                          <DatePickerTableCell key={id} value={month.value}>
                            <DatePickerTableCellTrigger asChild>
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

        <DatePickerView view="year">
          {(ctx) => (
            <>
              <DatePickerViewControl>
                <DatePickerPrevTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <FiChevronLeft />
                  </Button>
                </DatePickerPrevTrigger>

                <DatePickerViewTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <DatePickerRangeText />
                  </Button>
                </DatePickerViewTrigger>

                <DatePickerNextTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <FiChevronRight />
                  </Button>
                </DatePickerNextTrigger>
              </DatePickerViewControl>

              <DatePickerTable>
                <DatePickerTableBody>
                  {ctx.getYearsGrid({ columns: 4 }).map((years, id) => (
                    <DatePickerTableRow key={id}>
                      {years.map((year, id) => (
                        <DatePickerTableCell key={id} value={year.value}>
                          <DatePickerTableCellTrigger asChild>
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

export default DatePicker;
