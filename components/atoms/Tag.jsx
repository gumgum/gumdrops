import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ context, className, onClick, hasOption, optionIcon, small, style, text, value }) => {

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

    return (
        <div className={ classNames }
            style={ style }
            onClick={ onClick }
        >
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
    onClick: React.PropTypes.func,
    hasOption: PropTypes.bool,
    optionIcon: PropTypes.string,
    small: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
    value: PropTypes.string
};

export default Tag;
