import React, { PropTypes } from 'react';

const scrollbarFix = { overflowY: 'auto' }; // Prevent scrollbars from always displaying in Windows / Linux

const ModalBody = ({ children }) => (
    <div className="gds-modal__body" style={ scrollbarFix } >
        { children }
    </div>
);

ModalBody.propTypes = {
    children: PropTypes.element.isRequired
};

export default ModalBody;
