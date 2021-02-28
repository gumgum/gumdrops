import React from 'react';
import cx from 'classnames';
import { Sizes } from 'types';

export interface LoadingDotsProps extends React.HTMLAttributes<Element> {
    whiteDots?: boolean;
    size: Sizes;
}

const baseClass = 'gds-loading__dot';

export const LoadingDots: React.FC<LoadingDotsProps> = ({ whiteDots, size, ...otherProps }) => {
    const dotClasses = cx(baseClass, {
        [`${baseClass}--${size}`]: size,
        [`${baseClass}--white`]: whiteDots
    });

    return (
        <div {...otherProps}>
            <div className="gds-loading">
                <div className={dotClasses} />
            </div>
        </div>
    );
};
