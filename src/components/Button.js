import React from "react";
import PropTypes from "prop-types"

function Button({ label, backgroundColor , size , handleClick, color, border, id , borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,}) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border ,
    borderTopRightRadius,
    borderTopLeftRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
  }
  return (
    <>
      <button className="border_radius" onClick={handleClick} style={style} id={id}>
        {label}
      </button>
    </>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  color: PropTypes.string,
  border:PropTypes.string,
  id:PropTypes.string
}

export default Button