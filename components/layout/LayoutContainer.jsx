import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const LayoutContainer = ({ className, fullWidth, children, ...props }) => {
    const baseClass = 'gds-layout__container';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--full-width`]: fullWidth
    });

    return (
        <div className={rootClass} {...props}>
            {children}
        </div>
    );
};

LayoutContainer.displayName = 'LayoutContainer';

LayoutContainer.defaultProps = {
    fullWidth: false
};

LayoutContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool
};

export default LayoutContainer;
