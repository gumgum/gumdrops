import React, { PropTypes } from 'react';

const scrollbarFix = { overflowY: 'auto' }; // Prevent scrollbars from always displaying in Windows / Linux

const ModalBody = ({ className, style, children }) => (
    <div className={ `gds-modal__body ${className}` } style={ { ...scrollbarFix, ...style  } } >
        { children }
    </div>
);

ModalBody.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.element.isRequired
};

export default ModalBody;
