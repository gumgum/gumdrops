import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';

export interface FormGroupHelpTextProps extends React.HTMLAttributes<Element> {
    text: JSX.Element[] | ReactChildren | ReactChild;
}

export const FormGroupHelpText: React.FC<FormGroupHelpTextProps> = ({
    text,
    className,
    ...otherProps
}) => (
    <small className={cx('gds-form-group__text-help', className)} {...otherProps}>
        {text}
    </small>
);
