import React from 'react';
import cx from 'classnames';
import { Sizes } from 'types';

export interface ProgressBarProps extends React.HTMLAttributes<Element> {
    color?: 'primary' | 'secondary';
    size?: Sizes;
    isStriped?: boolean;
    useProgressColors?: boolean;
    value: number | string;
}

const baseClass = 'gds-progress-bar';

export const ProgressBar: React.FC<ProgressBarProps> = ({
    color = 'primary',
    className,
    isStriped,
    size,
    useProgressColors,
    value,
    ...rest
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: !!size,
        [`${baseClass}--striped-${color}`]: isStriped,
        [`${baseClass}--${color}`]: !isStriped,
        'gds-progress-bar--value-colors': useProgressColors
    });

    return <div className={rootClass} data-value={value} {...rest} />;
};
