import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import {
  datePicker,
  type DatePickerVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { DatePickerProps as ArkDatePickerProps } from "@ark-ui/react/date-picker";
// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/date-picker";
import type { ReactNode } from "react";

const { withProvider, withContext } = createStyleContext(datePicker);

export interface DatePickerProps
  extends ArkDatePickerProps,
    DatePickerVariantProps {
  /** Label for the date picker. Defaults to "Date Picker". */
  label?: ReactNode;
}

export const DatePickerRoot = withProvider(styled(ArkDatePicker.Root), "root");

export const DatePickerClearTrigger = withContext(
  styled(ArkDatePicker.ClearTrigger),
  "clearTrigger",
);

export const DatePickerContent = withContext(
  styled(ArkDatePicker.Content),
  "content",
);

export const DatePickerControl = withContext(
  styled(ArkDatePicker.Control),
  "control",
);

export const DatePickerInput = withContext(
  styled(ArkDatePicker.Input),
  "input",
);

export const DatePickerLabel = withContext(
  styled(ArkDatePicker.Label),
  "label",
);

export const DatePickerMonthSelect = withContext(
  styled(ArkDatePicker.MonthSelect),
  "monthSelect",
);

export const DatePickerNextTrigger = withContext(
  styled(ArkDatePicker.NextTrigger),
  "nextTrigger",
);

export const DatePickerPositioner = withContext(
  styled(ArkDatePicker.Positioner),
  "positioner",
);

export const DatePickerPrevTrigger = withContext(
  styled(ArkDatePicker.PrevTrigger),
  "prevTrigger",
);

export const DatePickerRangeText = withContext(
  styled(ArkDatePicker.RangeText),
  "rangeText",
);

export const DatePickerTable = withContext(
  styled(ArkDatePicker.Table),
  "table",
);

export const DatePickerTableBody = withContext(
  styled(ArkDatePicker.TableBody),
  "tableBody",
);

export const DatePickerTableCell = withContext(
  styled(ArkDatePicker.TableCell),
  "tableCell",
);

export const DatePickerTableCellTrigger = withContext(
  styled(ArkDatePicker.TableCellTrigger),
  "tableCellTrigger",
);

export const DatePickerTableHead = withContext(
  styled(ArkDatePicker.TableHead),
  "tableHead",
);

export const DatePickerTableHeader = withContext(
  styled(ArkDatePicker.TableHeader),
  "tableHeader",
);

export const DatePickerTableRow = withContext(
  styled(ArkDatePicker.TableRow),
  "tableRow",
);

export const DatePickerTrigger = withContext(
  styled(ArkDatePicker.Trigger),
  "trigger",
);

export const DatePickerView = withContext(styled(ArkDatePicker.View), "view");

export const DatePickerViewControl = withContext(
  styled(ArkDatePicker.ViewControl),
  "viewControl",
);

export const DatePickerViewTrigger = withContext(
  styled(ArkDatePicker.ViewTrigger),
  "viewTrigger",
);

export const DatePickerYearSelect = withContext(
  styled(ArkDatePicker.YearSelect),
  "yearSelect",
);

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
