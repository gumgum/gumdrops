import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Snackbar = ({ children, className, style }) => {
    const baseClass = 'gds-snackbar';
    const rootClass = cx(baseClass, className);

    return (
        <ul className={rootClass} style={style}>
            {children}
        </ul>
    );
};

Snackbar.displayName = 'Snackbar';

Snackbar.propTypes = {
    /** Class names passed through props */
    className: PropTypes.string,
    /** Styles passed through props */
    style: PropTypes.object,
    /** Component children to use as notifications, use <SnackbarNotification> component */
    children: PropTypes.node
};

export default Snackbar;
