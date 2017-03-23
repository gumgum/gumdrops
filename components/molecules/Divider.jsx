import React, { PropTypes } from 'react';

const Divider = ({ label, centered = false, collapsible = false, open, callback }) => {

    let classes = 'gds-divider';
    centered && (classes = `${classes} gds-divider--centered`);
    collapsible && (classes = `${classes} gds-button--collapsible`);

    let arrowClasses = open ? 'gds-divider__arrow' : 'gds-divider__arrow gds-divider__arrow--collapse';

    return (
        <div className={ classes } onClick={ callback }>
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
    callback: null
};

Divider.propTypes = {
    label: PropTypes.string,
    centered: PropTypes.bool,
    collapsible: PropTypes.bool,
    open: PropTypes.bool,
    callback: PropTypes.func
};

export default Divider;
