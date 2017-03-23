import React, { PropTypes } from 'react';

const Badge = ({ text, option, empty = false }) => {

    let classes = empty ? 'gds-badge gds-badge--empty' : 'gds-badge';
    option && (classes = `${classes} gds-badge--${option}`);

    return (
        <span className={ classes }>{ !empty && text }</span>
    );

};

Badge.defaultProps = {
    text: null,
    option: null,
    empty: false
};

Badge.propTypes = {
    text: PropTypes.string,
    option: PropTypes.string,
    empty: PropTypes.bool
};

export default Badge;
