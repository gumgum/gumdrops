import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = ({ className, style, children }) => (
    <div className={`gds-modal__footer -text-right ${className}`} style={style}>
        {children}
    </div>
);

ModalFooter.displayName = 'ModalFooter';

ModalFooter.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.element.isRequired
};

ModalFooter.defaultProps = {
    className: '',
    style: {}
};

export default ModalFooter;
