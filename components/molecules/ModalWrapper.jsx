import React, { PropTypes } from 'react';
import Modal from 'react-modal';

const ModalWrapper = ({ isOpen, modalClassName, overlayClassName, style, children }) => (
    <Modal
        isOpen={ isOpen }
        className={ `gds-modal ${modalClassName} -float-none` }
        overlayClassName={ overlayClassName }
        style={ style }
        contentLabel="default"
    >
        { children }
    </Modal>
);

ModalWrapper.defaultProps = {
    isOpen: false,
    modalClassName: 'gds-layout__column--md-12',
    overlayClassName: 'gds-modal__overlay gds-modal--shown',
    style: {
        overlay: {}
    }
};

ModalWrapper.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    modalClassName: PropTypes.string.isRequired,
    overlayClassName: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default ModalWrapper;
