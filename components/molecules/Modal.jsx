import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';

const Modal = ({
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
        onRequestClose={ onClose }
        isOpen={ isOpen }
        style={ style }
    >
        { children }
    </ReactModal>
);

Modal.defaultProps = {
    isOpen: false,
    className: '',
    overlayClassName: '',
    style: {},
    md: '12'
};

Modal.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool.isRequired,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    style: PropTypes.object,
    md: PropTypes.string,
    children: PropTypes.element.isRequired
};

export default Modal;
