import { Portal } from "@ark-ui/react";
import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { Stack, styled } from "generated/panda/jsx";
import {
  datePicker,
  type DatePickerVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { DatePickerProps as ArkDatePickerProps } from "@ark-ui/react/date-picker";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/date-picker";

const { withProvider, withContext } = createStyleContext(datePicker);

export interface DatePickerProps
  extends ArkDatePickerProps,
    DatePickerVariantProps {}

export const DatePickerRoot = withProvider(styled(ArkDatePicker.Root), "root");

export const DatePickerClearTrigger = withContext(
  styled(ArkDatePicker.ClearTrigger),
  "clearTrigger",
);

export const DatePickerColumnHeader = withContext(
  styled(ArkDatePicker.ColumnHeader),
  "columnHeader",
);

export const DatePickerContent = withContext(
  styled(ArkDatePicker.Content),
  "content",
);

export const DatePickerControl = withContext(
  styled(ArkDatePicker.Control),
  "control",
);

export const DatePickerDayCell = withContext(
  styled(ArkDatePicker.DayCell),
  "dayCell",
);

export const DatePickerDayCellTrigger = withContext(
  styled(ArkDatePicker.DayCellTrigger),
  "dayCellTrigger",
);

export const DatePickerGrid = withContext(styled(ArkDatePicker.Grid), "grid");

export const DatePickerInput = withContext(
  styled(ArkDatePicker.Input),
  "input",
);

export const DatePickerMonthCell = withContext(
  styled(ArkDatePicker.MonthCell),
  "monthCell",
);

export const DatePickerMonthCellTrigger = withContext(
  styled(ArkDatePicker.MonthCellTrigger),
  "monthCellTrigger",
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

export const DatePickerRow = withContext(styled(ArkDatePicker.Row), "row");

export const DatePickerRowGroup = withContext(
  styled(ArkDatePicker.RowGroup),
  "rowGroup",
);

export const DatePickerRowHeader = withContext(
  styled(ArkDatePicker.RowHeader),
  "rowHeader",
);

export const DatePickerTrigger = withContext(
  styled(ArkDatePicker.Trigger),
  "trigger",
);

export const DatePickerViewTrigger = withContext(
  styled(ArkDatePicker.ViewTrigger),
  "viewTrigger",
);

export const DatePickerYearCell = withContext(
  styled(ArkDatePicker.YearCell),
  "yearCell",
);

export const DatePickerYearCellTrigger = withContext(
  styled(ArkDatePicker.YearCellTrigger),
  "yearCellTrigger",
);

export const DatePickerYearSelect = withContext(
  styled(ArkDatePicker.YearSelect),
  "yearSelect",
);

/**
 * Date picker.
 */
const DatePicker = (props: DatePickerProps) => (
  <DatePickerRoot positioning={{ sameWidth: true }} {...props}>
    {(ctx) => (
      <>
        <DatePickerControl>
          <Stack direction="row">
            <DatePickerInput asChild>
              <Input />
            </DatePickerInput>

            <DatePickerTrigger asChild>
              <Button variant="outline" aria-label="Open date picker">
                <FiCalendar />
              </Button>
            </DatePickerTrigger>
          </Stack>
        </DatePickerControl>

        <Portal>
          <DatePickerPositioner>
            <DatePickerContent>
              <Stack gap={3}>
                <Stack justify="space-between" direction="row">
                  <DatePickerPrevTrigger asChild>
                    <Button size="sm" variant="ghost" aria-label="Previous">
                      <FiChevronLeft />
                    </Button>
                  </DatePickerPrevTrigger>

                  <DatePickerViewTrigger asChild>
                    <Button variant="ghost" size="sm">
                      {ctx.view === "day" && ctx.visibleRangeText.start}
                      {ctx.view === "month" && ctx.visibleRange.start.year}
                      {ctx.view === "year" &&
                        `${ctx.getDecade().start} - ${ctx.getDecade().end}`}
                    </Button>
                  </DatePickerViewTrigger>

                  <DatePickerNextTrigger asChild>
                    <Button size="sm" variant="ghost" aria-label="Next">
                      <FiChevronRight />
                    </Button>
                  </DatePickerNextTrigger>
                </Stack>

                {ctx.view === "day" && (
                  <DatePickerGrid>
                    <DatePickerRowHeader>
                      {ctx.weekDays.map((day, i) => (
                        <DatePickerColumnHeader key={i} aria-label={day.long}>
                          {day.narrow}
                        </DatePickerColumnHeader>
                      ))}
                    </DatePickerRowHeader>

                    <DatePickerRowGroup>
                      {ctx.weeks.map((week, id) => (
                        <DatePickerRow key={id}>
                          {week.map((day, id) => (
                            <DatePickerDayCell key={id} value={day}>
                              <DatePickerDayCellTrigger asChild>
                                <Button variant="ghost" px="0">
                                  {day.day}
                                </Button>
                              </DatePickerDayCellTrigger>
                            </DatePickerDayCell>
                          ))}
                        </DatePickerRow>
                      ))}
                    </DatePickerRowGroup>
                  </DatePickerGrid>
                )}

                {ctx.view === "month" && (
                  <DatePickerGrid>
                    <DatePickerRowGroup>
                      {ctx
                        .getMonthsGrid({ columns: 4, format: "short" })
                        .map((months, row) => (
                          <DatePickerRow key={row}>
                            {months.map((month, index) => (
                              <DatePickerMonthCell
                                key={index}
                                value={month.value}
                              >
                                <DatePickerMonthCellTrigger asChild>
                                  <Button variant="ghost">{month.label}</Button>
                                </DatePickerMonthCellTrigger>
                              </DatePickerMonthCell>
                            ))}
                          </DatePickerRow>
                        ))}
                    </DatePickerRowGroup>
                  </DatePickerGrid>
                )}

                {ctx.view === "year" && (
                  <DatePickerGrid>
                    <DatePickerRowGroup>
                      {ctx.getYearsGrid({ columns: 4 }).map((years, row) => (
                        <DatePickerRow key={row}>
                          {years.map((year, index) => (
                            <DatePickerYearCell key={index} value={year.value}>
                              <DatePickerYearCellTrigger>
                                <Button variant="ghost">{year.label}</Button>
                              </DatePickerYearCellTrigger>
                            </DatePickerYearCell>
                          ))}
                        </DatePickerRow>
                      ))}
                    </DatePickerRowGroup>
                  </DatePickerGrid>
                )}
              </Stack>
            </DatePickerContent>
          </DatePickerPositioner>
        </Portal>
      </>
    )}
  </DatePickerRoot>
);

export default DatePicker;
