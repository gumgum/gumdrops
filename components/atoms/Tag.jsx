import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Tag = ({ context, className, onClick, hasOption, optionIcon, small, style, text }) => {
    const isNormal = context && context === 'normal',
        tagClass = 'gds-tag',
        hasButtonClass = hasOption ? `gds-tag--with-button${small ? '-sm' : ''}` : '',
        contextClass = isNormal ? '' : `gds-tag--${context}`,
        buttonContextClass = isNormal ? '' : `gds-tag__option--${context}`,
        buttonClass = small ? 'gds-tag__option gds-tag__option--sm' : 'gds-tag__option',
        sizeClass = small ? 'gds-tag--sm' : '';

    const classNames = trimString(
        `${tagClass} ${hasButtonClass} ${contextClass} ${sizeClass} ${className}`
    );
    const optionClassNames = trimString(`${buttonClass} ${buttonContextClass}`);

    return (
        <div className={classNames} style={style} onClick={onClick}>
            {text}
            {hasOption && (
                <button className={optionClassNames}>
                    <i className={`btl bt-fw ${optionIcon}`} />
                </button>
            )}
        </div>
    );
};

Tag.displayName = 'Tag';

Tag.defaultProps = {
    className: '',
    hasOption: false,
    optionIcon: 'bt-times',
    small: false,
    style: {}
};

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    /** normal, primary, success, warning, danger  */
    context: PropTypes.string,
    hasOption: PropTypes.bool,
    optionIcon: PropTypes.string,
    small: PropTypes.bool,
    onClick: React.PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Tag;
