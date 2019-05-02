import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Divider = ({
    label,
    centered = false,
    collapsible = false,
    open,
    callback,
    className,
    style
}) => {
    const baseClass = 'gds-divider';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${centered}`]: centered,
        [`${baseClass}--${collapsible} -cursor--pointer`]: collapsible
    });

    const arrowClasses = cx(`${baseClass}__arrow`, {
        [`${baseClass}__arrow--collapse`]: !open
    });

    return (
        <div className={rootClass} style={style} onClick={callback}>
            {centered && <span className="gds-divider__line" />}
            <span className="gds-divider__label gds-form-group__label">{label}</span>
            <span className="gds-divider__line" />
            {collapsible && <span className={arrowClasses} />}
        </div>
    );
};

Divider.displayName = 'Divider';

Divider.defaultProps = {
    label: null,
    centered: false,
    collapsible: false,
    open: null,
    callback: null,
    style: {}
};

Divider.propTypes = {
    label: PropTypes.string,
    centered: PropTypes.bool,
    collapsible: PropTypes.bool,
    open: PropTypes.bool,
    callback: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Divider;
