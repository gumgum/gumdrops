import React from 'react';
import cx from 'classnames';

export interface TrendProps extends React.HTMLAttributes<Element> {
    context: 'up' | 'same' | 'down';
    value: string | number;
    unit: string;
}

const baseClass = 'gds-card__trend';

export const Trend: React.FC<TrendProps> = ({
    context = 'up',
    unit = '%',
    className,
    value,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${context}`]: context
    });

    return (
        <div className={rootClass} {...otherProps}>
            {value} {unit}
        </div>
    );
};
