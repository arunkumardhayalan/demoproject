import React from 'react'
import { CKEditor } from 'ckeditor4-react'
import './Input.css'

function Ckeditor({ label, backgroundColor, size, color, initData, className }) {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    const style = {
        backgroundColor,
        color,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    }
    return (
        <>
            <CKEditor style={style} initData={initData} className={className} />
        </>
    )
}

Ckeditor.propTypes = {
    // color: PropTypes.string,
}
export default Ckeditor