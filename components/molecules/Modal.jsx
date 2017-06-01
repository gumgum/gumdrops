import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';

const scrollbarFix = { overflowY: 'auto' }; // Prevent scrollbars from always displaying in Windows / Linux
const Modal = ({
    title,
    onClose,
    isOpen,
    className,
    overlayClassName,
    style,
    md,
    children
}) => (
    <ReactModal
        className={ `gds-modal gds-layout__column--md-${md} ${className} -float-none` }
        overlayClassName={ `gds-modal__overlay gds-modal--shown ${overlayClassName}` }
        contentLabel="default"
        isOpen={ isOpen }
        style={ style }
    >
        { (title || onClose) &&
            <div className="gds-modal__header">
                { title && <h2 className="gds-modal__title gds-text--header-sm">{ title }</h2> }
                { onClose && <button onClick={ onClose } className="gds-modal__close-button -z-9" /> }
            </div>
        }
        <div className="gds-modal__body" style={ scrollbarFix } >
            { children }
        </div>
    </ReactModal>
);

Modal.defaultProps = {
    isOpen: false,
    className: '',
    overlayClassName: '',
    number: 12,
    style: {}
};

Modal.propTypes = {
    title: PropTypes.text,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool.isRequired,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    style: PropTypes.object,
    md: PropTypes.number,
    children: PropTypes.element.isRequired
};

export default Modal;
