import React, { PropTypes } from 'react';

const ModalFooter = ({ className, style, children }) => (
    <div className={ `gds-modal__footer -text-right ${className}` } style={ style } >
        { children }
    </div>
);

ModalFooter.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.element.isRequired
};

export default ModalFooter;
