import React from 'react';
import PropTypes from 'prop-types';

const ModalForm = ({ className, children, ...otherProps }) => (
    <form className={`gds-modal__form ${className}`} {...otherProps}>
        {children}
    </form>
);

ModalForm.displayName = 'ModalForm';

ModalForm.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default ModalForm;
