import React, { MouseEventHandler, ReactChild, ReactChildren } from 'react';
import cx from 'classnames';
import { Colors } from 'types';

export interface TagProps extends React.HTMLAttributes<Element> {
    color?: Colors;
    size?: 'xs' | 'sm';
    onOptionClick?: MouseEventHandler;
    hasOption?: boolean;
    optionIcon?: string;
    optionLabel?: string;
    text: ReactChild | ReactChildren | Element;
}

export const Tag: React.FC<TagProps> = ({
    color,
    size = 'sm',
    className,
    text,
    onOptionClick,
    hasOption = false,
    optionIcon = 'bt-times',
    optionLabel = 'Remove tag',
    ...otherProps
}) => {
    const rootClass = cx('gds-tag', className, {
        [`gds-tag--${color}`]: color,
        'gds-tag--with-button': hasOption,
        [`gds-tag--with-button--${size}`]: size && hasOption,
        [`gds-tag--${size}`]: size
    });

    const optionClass = cx('gds-tag__option', {
        [`gds-tag__option--${color}`]: color && hasOption,
        [`gds-tag__option--${size}`]: size
    });

    const iconClass = cx('btl', 'bt-fw', optionIcon);

    return (
        <div className={rootClass} {...otherProps}>
            {text}
            {hasOption && (
                <button aria-label={optionLabel} className={optionClass} onClick={onOptionClick}>
                    <i className={iconClass} />
                </button>
            )}
        </div>
    );
};
