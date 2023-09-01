import { Portal } from "@ark-ui/react";
import * as Ark from "@ark-ui/react/date-picker";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { Stack, styled } from "generated/panda/jsx";
import {
  datePicker,
  type DatePickerVariantProps,
} from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

// https://github.com/microsoft/TypeScript/issues/47663
import type {} from "@zag-js/date-picker";

const { withProvider, withContext } = createStyleContext(datePicker);

export interface DatePickerProps
  extends Ark.DatePickerProps,
    DatePickerVariantProps {}

export const DatePickerRoot = withProvider(styled(Ark.DatePicker.Root), "root");

export const DatePickerClearTrigger = withContext(
  styled(Ark.DatePicker.ClearTrigger),
  "clearTrigger",
);

export const DatePickerColumnHeader = withContext(
  styled(Ark.DatePicker.ColumnHeader),
  "columnHeader",
);

export const DatePickerContent = withContext(
  styled(Ark.DatePicker.Content),
  "content",
);

export const DatePickerControl = withContext(
  styled(Ark.DatePicker.Control),
  "control",
);

export const DatePickerDayCell = withContext(
  styled(Ark.DatePicker.DayCell),
  "dayCell",
);

export const DatePickerDayCellTrigger = withContext(
  styled(Ark.DatePicker.DayCellTrigger),
  "dayCellTrigger",
);

export const DatePickerGrid = withContext(styled(Ark.DatePicker.Grid), "grid");

export const DatePickerInput = withContext(
  styled(Ark.DatePicker.Input),
  "input",
);

export const DatePickerMonthCell = withContext(
  styled(Ark.DatePicker.MonthCell),
  "monthCell",
);

export const DatePickerMonthCellTrigger = withContext(
  styled(Ark.DatePicker.MonthCellTrigger),
  "monthCellTrigger",
);

export const DatePickerMonthSelect = withContext(
  styled(Ark.DatePicker.MonthSelect),
  "monthSelect",
);

export const DatePickerNextTrigger = withContext(
  styled(Ark.DatePicker.NextTrigger),
  "nextTrigger",
);

export const DatePickerPositioner = withContext(
  styled(Ark.DatePicker.Positioner),
  "positioner",
);

export const DatePickerPrevTrigger = withContext(
  styled(Ark.DatePicker.PrevTrigger),
  "prevTrigger",
);

export const DatePickerRow = withContext(styled(Ark.DatePicker.Row), "row");

export const DatePickerRowGroup = withContext(
  styled(Ark.DatePicker.RowGroup),
  "rowGroup",
);

export const DatePickerRowHeader = withContext(
  styled(Ark.DatePicker.RowHeader),
  "rowHeader",
);

export const DatePickerTrigger = withContext(
  styled(Ark.DatePicker.Trigger),
  "trigger",
);

export const DatePickerViewTrigger = withContext(
  styled(Ark.DatePicker.ViewTrigger),
  "viewTrigger",
);

export const DatePickerYearCell = withContext(
  styled(Ark.DatePicker.YearCell),
  "yearCell",
);

export const DatePickerYearCellTrigger = withContext(
  styled(Ark.DatePicker.YearCellTrigger),
  "yearCellTrigger",
);

export const DatePickerYearSelect = withContext(
  styled(Ark.DatePicker.YearSelect),
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
