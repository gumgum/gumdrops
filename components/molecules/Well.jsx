import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Well = ({ text, context, button, callback, className, style }) => {
    const baseClass = 'gds-well',
        contextClass = context ? `${baseClass}--${context}` : '',
        buttonClass = context
            ? `gds-well__button gds-well__button--${context}`
            : 'gds-well__button';

    const classNames = trimString(`${baseClass} ${contextClass} ${className}`);

    return (
        <div className={classNames} style={style}>
            <p className="gds-well__text">{text}</p>
            {button && callback && <button className={buttonClass} onClick={callback} />}
        </div>
    );
};

Well.displayName = 'Well';

Well.defaultProps = {
    text: null,
    context: null,
    button: false,
    callback: null,
    className: '',
    style: {}
};

Well.propTypes = {
    text: PropTypes.string,
    /** success, info, warning, danger */
    context: PropTypes.string,
    button: PropTypes.bool,
    callback: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Well;
