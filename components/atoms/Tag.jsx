import React, { PropTypes } from 'react';
import stylePropType from 'react-style-proptype';

const Tag = ({ context, className, eventHandlers, hasButton, small, style, text, value }) => {

    const isNormal = context && context === 'normal',
        tagClass = 'gds-tag',
        hasButtonClass = hasButton
            ? `gds-tag--with-button${small ? '-sm' : ''}`
            : '',
        contextClass = isNormal
            ? ''
            : `gds-tag--${context}`,
        buttonContextClass = isNormal
            ? ''
            : `gds-tag__button--${context}`,
        buttonClass = small
            ? 'gds-tag__button gds-tag__button--sm'
            : 'gds-tag__button',
        sizeClass = small
            ? 'gds-tag--sm'
            : '';

    const classNames = `${tagClass} ${hasButtonClass} ${contextClass} ${sizeClass}`;
    const buttonClassNames = `${buttonClass} ${buttonContextClass}`;

    const clickHandler = () => eventHandlers.click(value);
    const mouseoverHandler = () => eventHandlers.mouseover(value);
    const mouseoutHandler = () => eventHandlers.mouseout(value);

    return (
        <div className={ classNames }
            onClick={ clickHandler }
            onMouseOver={ mouseoverHandler }
            onMouseOut={ mouseoutHandler }>
            { text }
            { hasButton && <button className={ buttonClassNames }/> }
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
