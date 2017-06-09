import React, { PropTypes } from 'react';

const ModalHeader = ({ title, onClose }) => (
    <div className="gds-modal__header">
        { title && <h2 className="gds-modal__title gds-text--header-sm">{ title }</h2> }
        { onClose && <button onClick={ onClose } className="gds-modal__close-button -z-9" /> }
    </div>
);

ModalHeader.propTypes = {
    title: PropTypes.text,
    onClose: PropTypes.func
};

export default ModalHeader;
