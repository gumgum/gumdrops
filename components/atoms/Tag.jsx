import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Tag = ({
    context,
    className,
    onClick,
    onOptionClick,
    hasOption,
    optionIcon,
    optionLabel,
    size,
    style,
    text
}) => {
    const rootClass = cx('gds-tag', className, {
        [`gds-tag--${context}`]: context && context !== 'normal',
        'gds-tag--with-button': hasOption,
        [`gds-tag--with-button--${size}`]: size && hasOption,
        [`gds-tag--${size}`]: size
    });

    const optionClass = cx('gds-tag__option', {
        [`gds-tag__option--${context}`]: context && context !== 'normal' && hasOption,
        [`gds-tag__option--${size}`]: size
    });

    const iconClass = cx('btl', 'bt-fw', optionIcon);

    return (
        <div className={rootClass} style={style} onClick={onClick}>
            {text}
            {hasOption && (
                <button aria-label={optionLabel} className={optionClass} onClick={onOptionClick}>
                    <i className={iconClass} />
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
    optionLabel: 'Remove tag',
    style: {}
};

Tag.propTypes = {
    className: PropTypes.string,
    /** One of: `normal`, `primary`, `success`, `warning`, `danger`  */
    context: PropTypes.string,
    /** Does the tag has an option button? */
    hasOption: PropTypes.bool,
    /** Click handler for the root element */
    onClick: PropTypes.func,
    /** Click handler for the option button element */
    onOptionClick: PropTypes.func,
    /** Icon name for the option button */
    optionIcon: PropTypes.string,
    /** Aria label for the option button */
    optionLabel: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm']),
    style: PropTypes.object,
    /** Aria label for the option button */
    text: PropTypes.string.isRequired
};

export default Tag;
