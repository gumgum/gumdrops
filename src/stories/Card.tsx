import React from 'react';
import cx from 'classnames';
import { Sizes } from 'types';

export interface CardProps extends React.HTMLAttributes<Element> {
    option?: 'white' | 'underlined' | 'underlined-secondary';
    size?: Sizes;
}

const baseClass = 'gds-card';

export const Card: React.FC<CardProps> = ({ option, size, className, children, ...otherProps }) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${option}`]: option,
        [`${baseClass}--${size}`]: size
    });

    return (
        <div className={rootClass} {...otherProps}>
            {children}
        </div>
    );
};
