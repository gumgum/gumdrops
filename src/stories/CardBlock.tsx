import React from 'react';
import cx from 'classnames';

export interface CardBlockProps extends React.HTMLAttributes<Element> {
    option?: 'divide-top' | 'divide-bottom';
}

const baseClass = 'gds-card__block';

export const CardBlock: React.FC<CardBlockProps> = ({
    option,
    className,
    children,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${option}`]: option
    });

    return (
        <div className={rootClass} {...otherProps}>
            {children}
        </div>
    );
};
