import React from 'react';
import cx from 'classnames';
import { Sizes } from 'types';

export interface CardImageProps extends React.HTMLAttributes<Element> {
    url: string;
    option?: 'top' | 'bottom';
    size?: Sizes;
}

const baseClass = 'gds-card__img-container';

export const CardImage: React.FC<CardImageProps> = ({
    url,
    option = 'top',
    size,
    className,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${option}`]: option,
        [`${baseClass}--${size}`]: size
    });

    return (
        <div className={rootClass} {...otherProps}>
            <img className="gds-card__img" src={url} />
            <div className="gds-card__img-helper" />
        </div>
    );
};
