import React from 'react';
import cx from 'classnames';
import { Colors } from 'types';

export interface TooltipProps extends React.HTMLAttributes<Element> {
    text: string;
    color?: Colors;
    size?: 'md' | 'lg';
    position?:
        | 'top'
        | 'top-right'
        | 'right'
        | 'bottom-right'
        | 'bottom'
        | 'bottom-left'
        | 'left'
        | 'top-left';
    variation?: 'always' | 'no-animate' | 'bounce';
}

const baseClass = 'gds-tooltip';

export const Tooltip: React.FC<TooltipProps> = ({
    text,
    position = `top`, // Storybook will confuse the string 'top' with the top object
    variation,
    size = 'md',
    color,
    className,
    children,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: size,
        [`${baseClass}--${color}`]: color,
        [`${baseClass}--${variation}`]: variation,
        [`${baseClass}--${position}`]: position
    });

    return (
        <div className={rootClass} data-tooltip={text} {...otherProps}>
            {children}
        </div>
    );
};
