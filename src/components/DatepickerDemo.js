import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

function DatepickerDemo({ disabled, allowSameDay, ariaDescribedBy,
    ariaInvalid,
    ariaLabelledBy,
    ariaRequired,
    autoComplete,
    autoFocus,
    calendarClassName,
    clearButtonTitle,
    clearButtonClassName,
    dateFormatCalendar,
    customInput,
    dayClassName,
    weekDayClassName,
    disabledKeyboardNavigation,
    focusSelectedMonth,
    forceShowMonthNavigation,
    inline,
    isClearable,
    peekNextMonth,
    preventOpenOnFocus,
    readOnly,
    required,
    scrollableYearDropdown,
    selectsEnd,
    selectsStart,
    shouldCloseOnSelect,
    showMonthDropdown,
    showTimeSelect,
    showWeekNumbers,
    showYearDropdown,
    startOpen,
    useWeekdaysShort,
    withPortal }) {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div>
            <DatePicker disabled={disabled} allowSameDay={allowSameDay} selected={startDate}
                onChange={(date) => setStartDate(date)}
                ariaDescribedBy={ariaDescribedBy}
                ariaInvalid={ariaInvalid}
                ariaLabelledBy={ariaLabelledBy}
                ariaRequired={ariaRequired}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                calendarClassName={calendarClassName}
                clearButtonTitle={clearButtonTitle}
                clearButtonClassName={clearButtonClassName}
                // dateFormatCalendar={dateFormatCalendar}
                disabledKeyboardNavigation={disabledKeyboardNavigation}
                focusSelectedMonth={focusSelectedMonth}
                forceShowMonthNavigation={forceShowMonthNavigation}
                inline={inline}
                isClearable={isClearable}
                peekNextMonth={peekNextMonth}
                preventOpenOnFocus={preventOpenOnFocus}
                readOnly={readOnly}
                required={required}
                scrollableYearDropdown={scrollableYearDropdown}
                selectsEnd={selectsEnd}
                selectsStart={selectsStart}
                shouldCloseOnSelect={shouldCloseOnSelect}
                showMonthDropdown={showMonthDropdown}
                showTimeSelect={showTimeSelect}
                showWeekNumbers={showWeekNumbers}
                showYearDropdown={showYearDropdown}
                startOpen={startOpen}
                useWeekdaysShort={useWeekdaysShort}
                withPortal={withPortal}
            />
        </div>
    );
}

DatepickerDemo.propTypes = {
    allowSameDay: PropTypes.bool,
    ariaDescribedBy: PropTypes.string,
    ariaInvalid: PropTypes.string,
    ariaLabelledBy: PropTypes.string,
    ariaRequired: PropTypes.string,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    calendarClassName: PropTypes.string,
    clearButtonTitle: PropTypes.string,
    clearButtonClassName: PropTypes.string,
    dateFormatCalendar: PropTypes.string,
    customInput: PropTypes.element,
    dayClassName: PropTypes.func,
    weekDayClassName: PropTypes.func,
    disabled: PropTypes.bool,
    disabledKeyboardNavigation: PropTypes.bool,


    focusSelectedMonth: PropTypes.bool,
    forceShowMonthNavigation: PropTypes.bool,
    inline: PropTypes.bool,
    isClearable: PropTypes.bool,
    peekNextMonth: PropTypes.bool,
    preventOpenOnFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    scrollableYearDropdown: PropTypes.bool,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    shouldCloseOnSelect: PropTypes.bool,
    showMonthDropdown: PropTypes.bool,
    showTimeSelect: PropTypes.bool,
    showWeekNumbers: PropTypes.bool,
    showYearDropdown: PropTypes.bool,
    startOpen: PropTypes.bool,
    useWeekdaysShort: PropTypes.bool,
    withPortal: PropTypes.bool,
}

DatepickerDemo.defaultProps = {
    allowSameDay: true,
    isClearable: true,
    ariaDescribedBy: 'example',
    ariaInvalid: 'example',
    ariaLabelledBy: 'example',
    ariaRequired: 'example',
    autoComplete: 'example',
    autoFocus: PropTypes.bool,
    calendarClassName: 'example',
    clearButtonTitle: 'example',
    clearButtonClassName: 'example',
    dateFormatCalendar: 'example',
    customInput: PropTypes.element,
    dayClassName: PropTypes.func,
    weekDayClassName: PropTypes.func,
    disabled: false,
    disabledKeyboardNavigation: false,
}

export default DatepickerDemo;