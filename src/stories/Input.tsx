import React from 'react';
import cx from 'classnames';
import { Sizes } from 'types';

export interface InputPropsInterface extends React.InputHTMLAttributes<HTMLInputElement> {}

export type InputProps = Omit<InputPropsInterface, 'size'> & {
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
