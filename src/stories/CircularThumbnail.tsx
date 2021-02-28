import React from 'react';
import cx from 'classnames';
import { Colors, Sizes } from 'types';

export interface CircularThumbnailProps extends React.HTMLAttributes<Element> {
    color?: Colors;
    size?: Sizes;
}

const baseClass = 'gds-circular-thumbnail';

export const CircularThumbnail: React.FC<CircularThumbnailProps> = ({
    color = 'default',
    size = 'md',
    className,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${color}`]: color,
        [`${baseClass}--${size}`]: size
    });

    return <img className={rootClass} {...otherProps} />;
};
