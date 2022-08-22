import React from 'react';
import Select, { components } from 'react-select'
import PropTypes from "prop-types"

const NoOptionsMessage = props => {
    return (
        <components.NoOptionsMessage {...props}>
            <span className="custom-css-class">Texdt</span>
        </components.NoOptionsMessage>
    );
};

function SelectDropdown({ options, className, backgroundColor, isDisabled, isMulti }) {
    const style = {
        backgroundColor,
    }
    return (
        <div>
            <label>Select</label>
            <Select options={options}
                components={{ NoOptionsMessage }}
                className={className} style={style} />
        </div>
    );
}

SelectDropdown.propTypes = {
    backgroundColor: PropTypes.string,
    isDisabled: PropTypes.bool,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    noOptionsMessage: PropTypes.func,
    placeholder: PropTypes.string,
}

SelectDropdown.defaultProps = {
    backgroundColor: null,
    primary: false,
    isDisabled: false,
}
export default SelectDropdown;