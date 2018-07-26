/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ xs, sm, md, lg, xl, className, children, ...props }) => {
    const sizes = { xs, sm, md, lg, xl };

    const classList = Object.keys(sizes)
        .reduce((list, breakpoint) => {
            const size = sizes[breakpoint];
            return list.concat(size ? `gds-layout__column--${breakpoint}-${size}` : []);
        }, [])
        .concat(className || []);

    return (
        <div className={classList.join(' ')} {...props}>
            {children}
        </div>
    );
};

Column.displayName = 'Column';

Column.defaultProps = {
    md: 12
};

Column.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
};

export default Column;
