import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';
import { Colors } from 'types';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: ReactChild | ReactChildren | Element;
    color?: Colors;
    checked?: boolean;
}

const baseClass = 'gds-form-group';

export const RadioButton: React.FC<RadioButtonProps> = ({
    color = 'default',
    label,
    className,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, `${baseClass}__radio-label`, className, {
        [`${baseClass}--${color}`]: color
    });

    return (
        <label className={rootClass}>
            <input className="gds-form-group__radio-input" {...otherProps} type="radio" />
            <span className="gds-form-group__radio-indicator" />
            {label}
        </label>
    );
};
