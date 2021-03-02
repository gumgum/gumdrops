import React from 'react';
import cx from 'classnames';

export type RowProps = React.HTMLAttributes<Element>;

export const Row: React.FC<RowProps> = ({ className, children, ...otherProps }) => (
    <div className={cx('gds-layout__row', className)} {...otherProps}>
        {children}
    </div>
);
