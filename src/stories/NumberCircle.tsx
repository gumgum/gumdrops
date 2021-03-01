import React, { ReactChild } from 'react';
import cx from 'classnames';
import { Colors, Sizes } from 'types';

export interface NumberCircleProps extends React.HTMLAttributes<Element> {
    text: ReactChild | Element;
    color?: Colors;
    size?: Sizes;
}

const baseClass = 'gds-number-circle';

export const NumberCircle: React.FC<NumberCircleProps> = ({
    text,
    color,
    size,
    className,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${color}`]: color,
        [`${baseClass}--${size}`]: size
    });

    return (
        <span className={rootClass} {...otherProps}>
            {text}
        </span>
    );
};
