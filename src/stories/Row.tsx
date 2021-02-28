import React, { ReactChild, ReactChildren } from 'react';
import cx from 'classnames';

export interface RowProps {
    children: ReactChildren | ReactChild;
    className?: string;
}

export const Row: React.FC<RowProps> = ({ className, children, ...otherProps }) => (
    <div className={cx('gds-layout__row', className)} {...otherProps}>
        {children}
    </div>
);
