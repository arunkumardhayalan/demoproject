import React from 'react'
import SelectDropdown from './SelectDropdown'
import Select, { components } from 'react-select'

export default {
    title: 'Select',
    component: SelectDropdown,
    argTypes: { handleClick: { action: "handleClick" } },
    // argTypes: {
    //     active: { control: 'boolean' },
    //     even: {
    //         control: { type: 'number', min: 1, max: 30, step: 2 },
    //     },
    //     odd: { control: { type: 'range', min: 1, max: 30, step: 3 } },
    //     user: { control: 'object' },
    //     odd: { control: 'object' },
    //     avatar: { control: { type: 'file', accept: '.png' } },
    //     contact: { control: 'radio', options: ['email', 'phone', 'mail'] },
    //     // control: 'check', options: ['email', 'phone', 'mail'] 
    //     label: { control: 'text' },
    //     color: { control: { type: 'color', presetColors: ['red', 'green'] } },
    //     startDate: { control: 'date' }
    // }
}
function Template({ args }) {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    function NoOptionsMessage(props) {
        return (
            <components.NoOptionsMessage {...props}>
                <span className="custom-css-class">Text</span>
            </components.NoOptionsMessage>
        )
    }
    // const colourStyles = {
    //     control: styles => ({ ...styles, overflow: 'hidden', color: 'black !important', backgroundColor: this.state.selectedOption.value || '#32CD32', fontSize: 23, paddingLeft: 'center', height: 46 }),
    //     singleValue: styles => ({ ...styles, color: 'black' }),
    // }
    // const style1 = {
    //     padding: 20,
    //     color: state.isSelected ? 'red' : 'blue',
    //     borderBottom: '1px dotted pink',
    //     width: 200,
    //     borderBottom: '1px dotted pink',
    // }
    // styles={style}
    return <>
        <Select {...args} options={options} width='200px'
            components={{ NoOptionsMessage }}
            menuColor='red' className={"select2-drop"}
        />
    </>
}
function Template2(args) {
    const options1 = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return <>
        <Select {...args} options={options1} className={"select2-drop"} />
    </>
}
function Template3(args) {
    const optionsN = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return <>
        <SelectDropdown {...args} options={optionsN} className={"select2-drop"} />
    </>
}


export const Select1 = Template.bind({})
Select1.args = {
    // className: "select2-drop",
    // backgroundColor: "red",
    isDisabled: false,
    isMulti: false,
    hasValue: false,
    isSearchable: true,
    defaultMenuIsOpen: true,
    // noOptionsMessage: "hii",
    placeholder: "select Anyone ",
    // defaultInputValue:"select",
    autoFocus: true,
    // hasValue: "boolean",

    // hasValue: boolean,
    // isMulti: boolean,
}

export const Select2 = Template2.bind({})
Select2.args = {
    backgroundColor: "red",
    isDisabled: true,
    isMulti: true,
    placeholder: "Custom Placeholder Name ",
    isSearchable: true,
    defaultMenuIsOpen: false,
    autoFocus: false,
}

export const Select3 = Template3.bind({})
Select3.args = {
    backgroundColor: "red",
    isDisabled: true,
    isMulti: true,
    placeholder: "Custom Placeholder Name ",
    isSearchable: true,
    defaultMenuIsOpen: false,
    autoFocus: false,
}
