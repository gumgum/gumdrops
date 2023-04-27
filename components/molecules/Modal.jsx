import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import cx from 'classnames';

const Modal = ({
    onClose,
    isOpen,
    shouldCloseOnOverlayClick,
    shouldCloseOnEsc,
    className,
    overlayClassName,
    style,
    md,
    children
}) => (
    <ReactModal
        className={cx('gds-modal', className, '-float-none', {
            [`gds-layout__column--md-${md}`]: md
        })}
        overlayClassName={cx('gds-modal__overlay', 'gds-modal--shown', overlayClassName)}
        contentLabel="default"
        onRequestClose={onClose}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        shouldCloseOnEsc={shouldCloseOnEsc}
        style={style}
        ariaHideApp={false}>
        {children}
    </ReactModal>
);

Modal.displayName = 'Modal';

Modal.defaultProps = {
    isOpen: false,
    md: '12'
};

Modal.propTypes = {
    onClose: PropTypes.func,
    isOpen: PropTypes.bool.isRequired,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    style: PropTypes.object,
    /** Value for md breakpoint; controls width using grid system (see Column component) */
    md: PropTypes.string,
    children: PropTypes.element.isRequired
};

export default Modal;
