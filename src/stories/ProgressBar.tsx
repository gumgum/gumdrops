import React from 'react';
import cx from 'classnames';
import { Colors, Sizes } from 'types';

export interface ProgressBarProps extends React.HTMLAttributes<Element> {
    color?: 'primary' | 'secondary';
    size?: Sizes;
    isStriped?: boolean;
    useProgressColors?: boolean;
    value: number | string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    color = 'primary',
    className,
    isStriped,
    size,
    useProgressColors,
    value,
    ...rest
}) => {
    const baseClass = 'gds-progress-bar';
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: !!size,
        [`${baseClass}--striped-${color}`]: isStriped,
        [`${baseClass}--${color}`]: !isStriped,
        'gds-progress-bar--value-colors': useProgressColors
    });

    return <div className={rootClass} data-value={value} {...rest} />;
};
