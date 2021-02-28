import React, { CSSProperties, MouseEventHandler, ReactChild, ReactChildren } from 'react';
import cx from 'classnames';
import { Colors, Sizes } from 'types';

export interface ButtonProps {
    onClick: MouseEventHandler;
    color?: Colors;
    type?: 'button' | 'submit';
    size?: Sizes;
    isGroup?: boolean;
    isBlock?: boolean;
    className?: string;
    style?: CSSProperties;
    disabled?: boolean;
    children: ReactChildren | ReactChild;
}

const baseClass = 'gds-button';

export const Button: React.FC<ButtonProps> = ({
    color = 'default',
    type = 'button',
    size = 'md',
    onClick,
    isGroup,
    isBlock,
    style,
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
        <button
            className={rootClass}
            type={type}
            style={style}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}>
            {children}
        </button>
    );
};
