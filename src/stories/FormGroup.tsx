import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';
import { Colors } from 'types';

export interface FormGroupProps extends React.HTMLAttributes<Element> {
    color?: Colors;
    inline?: boolean;
    disabled?: boolean;
}

const baseClass = 'gds-form-group';

export const FormGroup: React.FC<FormGroupProps> = ({
    color = 'default',
    inline,
    disabled,
    className,
    children,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${color}`]: color,
        [`${baseClass}--disabled`]: disabled,
        [`${baseClass}--inline`]: inline
    });

    return (
        <div className={rootClass} {...otherProps}>
            {children}
        </div>
    );
};
