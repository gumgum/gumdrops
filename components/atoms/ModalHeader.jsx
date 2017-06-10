import React, { PropTypes } from 'react';

const ModalHeader = ({ title, onClose, className, style }) => (
    <div className={ `gds-modal__header ${className}` } style={ style } >
        { title && <h2 className="gds-modal__title gds-text--header-sm">{ title }</h2> }
        { onClose && <button onClick={ onClose } className="gds-modal__close-button -z-9" /> }
    </div>
);

ModalHeader.propTypes = {
    title: PropTypes.text,
    onClose: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
};

export default ModalHeader;
