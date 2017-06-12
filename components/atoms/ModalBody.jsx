import React, { PropTypes } from 'react';

const ModalBody = ({ className, style, children }) => (
    <div className={ `gds-modal__body ${className}` } style={ style } >
        { children }
    </div>
);

ModalBody.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.element.isRequired
};

ModalBody.defaultProps = {
    className: '',
    style: {}
};

export default ModalBody;
