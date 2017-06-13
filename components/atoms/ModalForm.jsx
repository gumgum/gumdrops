import React, { PropTypes } from 'react';

const ModalForm = ({ className, children, ...otherProps }) => (
    <form className={ `gds-modal__form ${className}` } { ...otherProps } >
        { children }
    </form>
);

ModalForm.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired
};

ModalForm.defaultProps = {
    className: ''
};

export default ModalForm;
