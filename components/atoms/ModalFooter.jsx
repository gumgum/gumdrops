import React, { PropTypes } from 'react';

const ModalFooter = ({ children }) => (
    <div className="gds-modal__footer -text-right">
        { children }
    </div>
);

ModalFooter.propTypes = {
    children: PropTypes.element.isRequired
};

export default ModalFooter;
