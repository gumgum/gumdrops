import React, { PropTypes } from 'react';

const Divider = ({ label, centered = false, collapsible = false, open, callback, className, style }) => {

    const baseClass = 'gds-divider',
        centeredClass = (centered) ? `${baseClass}--centered` : '',
        collapsibleClass = (collapsible) ? 'gds-button--collapsible' : '',
        arrowClasses = (open) ? `${baseClass}__arrow` : `${baseClass}__arrow ${baseClass}__arrow--collapse`;

    const classNames = `${baseClass} ${centeredClass} ${collapsibleClass} ${className}`;

    return (
        <div className={ classNames } style={ style } onClick={ callback }>
            { centered && <span className="gds-divider__line" /> }
            <span className="gds-divider__label gds-form-group__label">{ label }</span>
            <span className="gds-divider__line" />
            { collapsible && <span className={ arrowClasses } /> }
        </div>
    );

};

Divider.defaultProps = {
    label: null,
    centered: false,
    collapsible: false,
    open: null,
    callback: null,
    className: '',
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
