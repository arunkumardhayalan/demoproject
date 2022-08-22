import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatepickerDemo from "./DatepickerDemo";

export default {
    title: 'Datepicker',
    component: DatepickerDemo,
    argTypes: { handleClick: { action: "handleClick" } },
}

function Template({ args, disabled, allowSameDay, isClearable }) {
    const [startDate, setStartDate] = useState(new Date())
    return <>
        <DatePicker {...args} allowSameDay={allowSameDay} isClearable={isClearable} selected={startDate} onChange={(date) => setStartDate(date)} disabled={disabled}

            placeholderText="I have been cleared!"
            closeOnScroll={true}
        />
    </>
}
function Template2({ args }) {
    return <DatepickerDemo {...args} />
}

export const Datepicker1 = Template.bind({})
Datepicker1.args = {
    allowSameDay: false,
    isClearable: true,
    disabled: false,
    disabledKeyboardNavigation: true,
    focusSelectedMonth: true,
    forceShowMonthNavigation: true,
    inline: true,
    isClearable: true,
    peekNextMonth: true,
    preventOpenOnFocus: true,
    readOnly: true,
    required: true,
    scrollableYearDropdown: true,
    selectsEnd: true,
    selectsStart: true,
    shouldCloseOnSelect: true,
    showMonthDropdown: true,
    showTimeSelect: true,
    showWeekNumbers: true,
    showYearDropdown: true,
    startOpen: true,
    useWeekdaysShort: true,
    withPortal: true,
}

export const Datepicker2 = Template2.bind({})
Datepicker2.args = {
    allowSameDay: false,
    isClearable: true,
    disabled: false,
    disabledKeyboardNavigation: true,
}