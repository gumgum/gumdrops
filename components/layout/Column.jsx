import React, { PropTypes } from 'react';

const Column = (options) => {
    const
        { xs
        , sm
        , md
        , lg
        , xl
        , className
        , children
        , ...props
        } = options;
    const sizes = { xs, sm, md, lg, xl };
    const classList = Object
        .keys(sizes)
        .reduce((list, breakpoint) => {
            const size = sizes[breakpoint];
            return list.concat(
                size
                ? `gds-layout__column--${breakpoint}-${size}`
                : []
            );
        }, [])
        .concat(className || []);
    return (
        <div className={ classList.join(' ') } { ...props }>
            { children }
        </div>
    );
};

Column.defaultProps = {
    md: '12'
};

Column.propTypes = {
    children: PropTypes.node,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
};

export default Column;
