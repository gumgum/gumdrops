import React from 'react';
import cx from 'classnames';
import { Sizes } from 'types';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    size?: Sizes;
};

const baseClass = 'gds-form-group__text-input';

export const Input: React.FC<InputProps> = ({
    type = 'text',
    size = 'md',
    className,
    disabled,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${size}`]: size,
        [`${baseClass}--disabled`]: disabled
    });

    return <input className={rootClass} type={type} disabled={disabled} {...otherProps} />;
};
