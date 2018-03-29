import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const TextArea = ({ className, resize, size, placeholder, style, ...otherProps }) => {
    const baseClass = 'gds-form-group__text-area-input';
    const sizeClass = size ? `${baseClass}--${size}` : '';
    const resizeClass = resize ? `${baseClass}--${resize}` : '';
    const classNames = trimString(`${baseClass} ${sizeClass} ${resizeClass} ${className}`);

    return (
        <textarea placeholder={placeholder} style={style} className={classNames} {...otherProps} />
    );
};

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
    /** resize-h, resize-v, no-resize */
    resize: PropTypes.oneOf(['resize-h', 'resize-v', 'no-resize']),
    /** xs, sm, lg */
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};

export default TextArea;
