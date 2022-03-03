import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const RangeSlider = ({ className, onChange, value, ...otherProps }) => {
    const baseClass = 'gds-form-group__range-input';

    const rootClass = cx(baseClass, className);

    return <input type="range"  min="1" max="20" value={value} onChange={onChange} className={rootClass}  {...otherProps} />;
};

RangeSlider.displayName = 'RangeSlider';

RangeSlider.defaultProps = {
    // type: 'text',
    // size: 'md'
};

RangeSlider.propTypes = {
    // type: PropTypes.oneOf(['text', 'password']),
    // size: PropTypes.oneOf(['sm', 'md', 'lg']),
    onChange: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.number
};

export default RangeSlider;
