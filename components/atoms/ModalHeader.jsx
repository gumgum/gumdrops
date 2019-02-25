import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ModalHeader = ({ title, onClose, className, style, size }) => (
    <div
        className={cx('gds-modal__header', { 'gds-modal__header--sm': size === 'sm' }, className)}
        style={style}>
        {title && <h2 className="gds-modal__title">{title}</h2>}
        {onClose && (
            <button onClick={onClose} type="button" className="gds-modal__close-button -z-9" />
        )}
    </div>
);

ModalHeader.displayName = 'ModalHeader';

ModalHeader.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(['sm'])
};

export default ModalHeader;
