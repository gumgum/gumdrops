import React, { PropTypes } from 'react';

const Tag = ({ context, className, eventHandlers, hasOption, optionIcon, small, style, text, value }) => {

    const isNormal = context && context === 'normal',
        tagClass = 'gds-tag',
        hasButtonClass = hasOption
            ? `gds-tag--with-button${small ? '-sm' : ''}`
            : '',
        contextClass = isNormal
            ? ''
            : `gds-tag--${context}`,
        buttonContextClass = isNormal
            ? ''
            : `gds-tag__option--${context}`,
        buttonClass = small
            ? 'gds-tag__option gds-tag__option--sm'
            : 'gds-tag__option',
        sizeClass = small
            ? 'gds-tag--sm'
            : '';

    const classNames = `${tagClass} ${hasButtonClass} ${contextClass} ${sizeClass} ${className}`;
    const optionClassNames = `${buttonClass} ${buttonContextClass}`;

    const clickHandler = () => eventHandlers.click(value);
    const mouseoverHandler = () => eventHandlers.mouseover(value);
    const mouseoutHandler = () => eventHandlers.mouseout(value);

    return (
        <div className={ classNames }
            style={ style }
            onClick={ clickHandler }
            onMouseOver={ mouseoverHandler }
            onMouseOut={ mouseoutHandler }>
            { text }
            { hasOption && <button className={ optionClassNames }><i className={ `btl bt-fw ${optionIcon}` }/></button> }
        </div>
    );

};

Tag.defaultProps = {
    className: '',
    hasOption: false,
    optionIcon: 'bt-times',
    small: false,
    style: {}
};

Tag.propTypes = {
    context: PropTypes.string,
    className: PropTypes.string,
    eventHandlers: React.PropTypes.shape({
        click: PropTypes.func,
        mouseover: PropTypes.func,
        mouseout: PropTypes.func
    }),
    hasOption: PropTypes.bool,
    optionIcon: PropTypes.string,
    small: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
    value: PropTypes.string
};

export default Tag;
