import React, { PropTypes } from 'react';
import stylePropType from 'react-style-proptype';

const Tag = ({ context, className, eventHandlers, hasButton, small, style, text, value }) => {

    let tagClass = 'gds-tag',
        contextClass = '',
        hasButtonClass = '',
        sizeClass = '',
        buttonClass = 'gds-tag__button',
        buttonContextClass = '';

    if (hasButton) hasButtonClass = 'gds-tag--with-button';

    if (context && context != 'normal') {
        contextClass = `gds-tag--${context}`;
        buttonContextClass = `gds-tag__button--${context}`;
    }
    if (small) {
        sizeClass = 'gds-tag--sm';
        if (hasButton) {
            hasButtonClass = 'gds-tag--with-button-sm';
            buttonClass = 'gds-tag__button gds-tag__button--sm';
        }
    }
    const clickHandler = () => eventHandlers.click(value);
    const mouseoverHandler = () => eventHandlers.mouseover(value);
    const mouseoutHandler = () => eventHandlers.mouseout(value);

    return (
        <div className={ `${tagClass} ${hasButtonClass} ${contextClass} ${sizeClass}` }
            onClick={ clickHandler }
            onMouseOver={ mouseoverHandler }
            onMouseOut={ mouseoutHandler }>
            { text }
            { hasButton && <button className={ `${buttonClass} ${buttonContextClass}` }/> }
        </div>
    );

};

Tag.defaultProps = {
    className: '',
    hasButton: false,
    small: false
};

Tag.propTypes = {
    context: PropTypes.string,
    className: PropTypes.string,
    eventHandlers: React.PropTypes.shape({
        click: PropTypes.func,
        mouseover: PropTypes.func,
        mouseout: PropTypes.func
    }),
    hasButton: PropTypes.bool,
    small: PropTypes.bool,
    style: stylePropType,
    text: PropTypes.string.isRequired,
    value: PropTypes.string
};

export default Tag;
