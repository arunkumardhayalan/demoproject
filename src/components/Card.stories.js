import React from 'react'
import Card from './Card'
export default {
    title: 'Card',
    component: Card,
    argTypes: {
        Pg_clr: { control: { type: 'color' } },
        header_clr: { control: { type: 'color' } },
        handleClick: { action: "handleClick" },
        borderTopRightRadius: { control: { type: 'select', options: [5, 8, 10, 12]  } }
    }
}
const Template = args => <Card {...args} />


export const Card1 = Template.bind({})
Card1.args = {
    btn_color: "#fff",
    label: "Yeah Its me",
    Pg_clr: '#000',
    btn_bg_color: "#000",
    padding: '15px',
    header_clr: "red",
    backgroundColor: "#ddd",
    border: "1px solid",
    bordercolor: "#ddd",
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px',
    borderBottomRightRadius: "5px",
    borderBottomleftRadius: "5px",
    btn_borderTopRightRadius: "8px",
    btn_borderTopLeftRadius: "8px",
    btn_borderBottomLeftRadius: "8px",
    btn_borderBottomRightRadius: "8px",
    // btn_padding:"15px",

}
export const Card2 = Template.bind({})
Card2.args = {
    color: "#000",
    label: "Not me",
    btn_bg_color: "yellow",
}
export const Card3 = Template.bind({})
Card3.args = {
    color: "purple",
    label: "Me",
    btn_bg_color: "#ddd",
}
