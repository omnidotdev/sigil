import { DatePicker as ArkDatePicker } from "@ark-ui/react/date-picker";
import { useMemo, type ReactNode } from "react";
import { BiX } from "react-icons/bi";
import { FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { match } from "ts-pattern";

import Button from "components/core/Button/Button";
import Input from "components/core/Input/Input";
import { styled } from "generated/panda/jsx";
import { datePicker } from "generated/panda/recipes";
import { createStyleContext } from "lib/util";

import type { DatePickerVariantProps } from "generated/panda/recipes";
import type { AssignJSXStyleProps } from "lib/types";

const { withProvider, withContext } = createStyleContext(datePicker);

export const DatePickerContext = ArkDatePicker.Context;
export interface DatePickerContextProps
  extends AssignJSXStyleProps<ArkDatePicker.ContextProps> {}

export const DatePickerRoot = withProvider(styled(ArkDatePicker.Root), "root");
export interface DatePickerRootProps
  extends AssignJSXStyleProps<ArkDatePicker.RootProps>,
    DatePickerVariantProps {}

export const DatePickerClearTrigger = withContext(
  styled(ArkDatePicker.ClearTrigger),
  "clearTrigger",
);
export interface DatePickerClearTriggerProps
  extends AssignJSXStyleProps<ArkDatePicker.ClearTriggerProps> {}

export const DatePickerContent = withContext(
  styled(ArkDatePicker.Content),
  "content",
);
export interface DatePickerContentProps
  extends AssignJSXStyleProps<ArkDatePicker.ContentProps> {}

export const DatePickerControl = withContext(
  styled(ArkDatePicker.Control),
  "control",
);
export interface DatePickerControlProps
  extends AssignJSXStyleProps<ArkDatePicker.ControlProps> {}

export const DatePickerInput = withContext(
  styled(ArkDatePicker.Input),
  "input",
);
export interface DatePickerInputProps
  extends AssignJSXStyleProps<ArkDatePicker.InputProps> {}

export const DatePickerLabel = withContext(
  styled(ArkDatePicker.Label),
  "label",
);
export interface DatePickerLabelProps
  extends AssignJSXStyleProps<ArkDatePicker.LabelProps> {}

export const DatePickerMonthSelect = withContext(
  styled(ArkDatePicker.MonthSelect),
  "monthSelect",
);
export interface DatePickerMonthSelectProps
  extends AssignJSXStyleProps<ArkDatePicker.MonthSelectProps> {}

export const DatePickerNextTrigger = withContext(
  styled(ArkDatePicker.NextTrigger),
  "nextTrigger",
);
export interface DatePickerNextTriggerProps
  extends AssignJSXStyleProps<ArkDatePicker.NextTriggerProps> {}

export const DatePickerPositioner = withContext(
  styled(ArkDatePicker.Positioner),
  "positioner",
);
export interface DatePickerPositionerProps
  extends AssignJSXStyleProps<ArkDatePicker.PositionerProps> {}

// TODO use
export const DatePickerPresetTrigger = withContext(
  styled(ArkDatePicker.PresetTrigger),
  "presetTrigger",
);
export interface DatePickerPresetTriggerProps
  extends AssignJSXStyleProps<ArkDatePicker.PresetTriggerProps> {}

export const DatePickerPrevTrigger = withContext(
  styled(ArkDatePicker.PrevTrigger),
  "prevTrigger",
);
export interface DatePickerPrevTriggerProps
  extends AssignJSXStyleProps<ArkDatePicker.PrevTriggerProps> {}

export const DatePickerRangeText = withContext(
  styled(ArkDatePicker.RangeText),
  "rangeText",
);
export interface DatePickerRangeTextProps
  extends AssignJSXStyleProps<ArkDatePicker.RangeTextProps> {}

export const DatePickerTable = withContext(
  styled(ArkDatePicker.Table),
  "table",
);
export interface DatePickerTableProps
  extends AssignJSXStyleProps<ArkDatePicker.TableProps> {}

export const DatePickerTableBody = withContext(
  styled(ArkDatePicker.TableBody),
  "tableBody",
);
export interface DatePickerTableBodyProps
  extends AssignJSXStyleProps<ArkDatePicker.TableBodyProps> {}

export const DatePickerTableCell = withContext(
  styled(ArkDatePicker.TableCell),
  "tableCell",
);
export interface DatePickerTableCellProps
  extends AssignJSXStyleProps<ArkDatePicker.TableCellProps> {}

export const DatePickerTableCellTrigger = withContext(
  styled(ArkDatePicker.TableCellTrigger),
  "tableCellTrigger",
);
export interface DatePickerTableCellTriggerProps
  extends AssignJSXStyleProps<ArkDatePicker.TableCellTriggerProps> {}

export const DatePickerTableHead = withContext(
  styled(ArkDatePicker.TableHead),
  "tableHead",
);
export interface DatePickerTableHeadProps
  extends AssignJSXStyleProps<ArkDatePicker.TableHeadProps> {}

export const DatePickerTableHeader = withContext(
  styled(ArkDatePicker.TableHeader),
  "tableHeader",
);
export interface DatePickerTableHeaderProps
  extends AssignJSXStyleProps<ArkDatePicker.TableHeaderProps> {}

export const DatePickerTableRow = withContext(
  styled(ArkDatePicker.TableRow),
  "tableRow",
);
export interface DatePickerTableRowProps
  extends AssignJSXStyleProps<ArkDatePicker.TableRowProps> {}

export const DatePickerTrigger = withContext(
  styled(ArkDatePicker.Trigger),
  "trigger",
);
export interface DatePickerTriggerProps
  extends AssignJSXStyleProps<ArkDatePicker.TriggerProps> {}

export const DatePickerView = withContext(styled(ArkDatePicker.View), "view");
export interface DatePickerViewProps
  extends AssignJSXStyleProps<ArkDatePicker.ViewProps> {}

export const DatePickerViewControl = withContext(
  styled(ArkDatePicker.ViewControl),
  "viewControl",
);
export interface DatePickerViewControlProps
  extends AssignJSXStyleProps<ArkDatePicker.ViewControlProps> {}

export const DatePickerViewTrigger = withContext(
  styled(ArkDatePicker.ViewTrigger),
  "viewTrigger",
);
export interface DatePickerViewTriggerProps
  extends AssignJSXStyleProps<ArkDatePicker.ViewTriggerProps> {}

export const DatePickerYearSelect = withContext(
  styled(ArkDatePicker.YearSelect),
  "yearSelect",
);
export interface DatePickerYearSelectProps
  extends AssignJSXStyleProps<ArkDatePicker.YearSelectProps> {}

export interface DatePickerProps extends DatePickerRootProps {
  /** Label for the date picker. Defaults to "Date Picker". */
  label?: ReactNode;
  /** Clear trigger. Defaults to an X icon button. */
  clearTrigger?: ReactNode;
  /** Label props. */
  labelProps?: DatePickerLabelProps;
  /** Control props. */
  controlProps?: DatePickerControlProps;
  /** Clear trigger props. */
  clearTriggerProps?: DatePickerClearTriggerProps;
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
  clearTrigger = (
    <Button variant="ghost" size="xs" p={0} aria-label="Clear selection">
      <BiX />
    </Button>
  ),
  labelProps,
  controlProps,
  clearTriggerProps,
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
      <DatePickerLabel {...labelProps}>{label}</DatePickerLabel>

      <DatePickerControl {...controlProps}>
        {inputs}

        <DatePickerTrigger asChild {...triggerProps}>
          <Button variant="outline" aria-label="Open date picker">
            <FiCalendar />
          </Button>
        </DatePickerTrigger>

        {/* display clear trigger if not in range selection mode */}
        {clearTrigger && rest.selectionMode !== "range" && (
          <DatePickerClearTrigger asChild {...clearTriggerProps}>
            {clearTrigger}
          </DatePickerClearTrigger>
        )}
      </DatePickerControl>

      <DatePickerPositioner {...positionerProps}>
        <DatePickerContent {...contentProps}>
          <DatePickerView view="day" {...viewProps}>
            <DatePickerContext>
              {(datePicker) => (
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
                        {datePicker.weekDays.map((weekDay, id) => (
                          <DatePickerTableHeader key={id} {...tableHeaderProps}>
                            {weekDay.narrow}
                          </DatePickerTableHeader>
                        ))}
                      </DatePickerTableRow>
                    </DatePickerTableHead>

                    <DatePickerTableBody {...tableBodyProps}>
                      {datePicker.weeks.map((week, id) => (
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
            </DatePickerContext>
          </DatePickerView>

          <DatePickerView view="month" {...viewProps}>
            <DatePickerContext>
              {(datePicker) => (
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
                      {datePicker
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
            </DatePickerContext>
          </DatePickerView>

          <DatePickerView view="year" {...viewProps}>
            <DatePickerContext>
              {(datePicker) => (
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
                      {datePicker
                        .getYearsGrid({ columns: 4 })
                        .map((years, id) => (
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
            </DatePickerContext>
          </DatePickerView>
        </DatePickerContent>
      </DatePickerPositioner>
    </DatePickerRoot>
  );
};

export default DatePicker;
