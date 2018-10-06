import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Well = ({ text, context, button, callback, className, style }) => {
    const baseClass = 'gds-well';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context
    });

    const buttonClass = cx('gds-well__button', {
        [`gds-well__button--${context}`]: context
    });

    return (
        <div className={rootClass} style={style}>
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
