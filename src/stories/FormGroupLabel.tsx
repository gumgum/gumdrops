import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';

export interface FormGroupLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    text: ReactChildren | ReactChild;
    //htmlFor?: string;
}

export const FormGroupLabel: React.FC<FormGroupLabelProps> = ({
    text,
    className,
    ...otherProps
}) => (
    <label className={cx('gds-form-group__label', className)} {...otherProps}>
        {text}
    </label>
);
