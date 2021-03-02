import React from 'react';
import cx from 'classnames';
import { Colors, Sizes } from 'types';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    color?: Colors;
    type?: 'button' | 'submit';
    size?: Sizes;
    isGroup?: boolean;
    isBlock?: boolean;
    disabled?: boolean;
}

const baseClass = 'gds-button';

export const Button: React.FC<ButtonProps> = ({
    color = 'default',
    size = 'md',
    type = 'button',
    isGroup,
    isBlock,
    children,
    disabled,
    className,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${color}`]: color,
        [`${baseClass}--${size}`]: size,
        [`${baseClass}-group__button`]: isGroup,
        [`${baseClass}--block`]: isBlock,
        '-disabled': disabled,
        '-pointer-events--none': disabled
    });

    return (
        <button className={rootClass} type={type} disabled={disabled} {...otherProps}>
            {children}
        </button>
    );
};
