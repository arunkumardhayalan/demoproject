import React from 'react';
import PropTypes from "prop-types"
import Button from '../components/Button'

function Card({
    label,
    btn_bg_color,
    btn_color,
    color,
    backgroundColor,
    border,
    border_radius,
    bordercolor,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopRightRadius,
    borderTopLeftRadius,
    Pg_clr = 'black',
    padding,
    btn_borderTopRightRadius,
    btn_borderTopLeftRadius,
    btn_borderBottomLeftRadius,
    btn_borderBottomRightRadius,
    header_clr,
    btn_padding

}) {
    const style = {
        header_clr,
    }
    const bg_style_clr = {
        backgroundColor,
        border,
        bordercolor,
        borderTopRightRadius,
        borderTopLeftRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        padding
    }
    return (
        <div >
            <div class="flex justify-center" >
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm"
                    style={bg_style_clr} >
                    <h5 style={
                        { color: header_clr }}
                        class="text-gray-900 text-xl leading-tight font-medium mb-2" > Card title </h5>
                    <p class="text-gray-700 text-base mb-4"
                        style={
                            {
                                color: Pg_clr,
                            }
                        } > Some quick example text to build on the card title and make up the bulk of the card 's
                        content. </p>
                    <Button backgroundColor={btn_bg_color}
                        label={label}
                        color={btn_color}
                        border_radius={border_radius}
                        borderTopRightRadius={btn_borderTopRightRadius}
                        borderTopLeftRadius={btn_borderTopLeftRadius}
                        borderBottomLeftRadius={btn_borderBottomLeftRadius}
                        borderBottomRightRadius={btn_borderBottomRightRadius}
                        padding={btn_padding}
                    />
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    // color: PropTypes.string,
}
export default Card;