import React from 'react';
import cx from 'classnames';
import { Sizes } from 'types';

export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    size?: Sizes;
    resize?: 'resize-h' | 'resize-v' | 'no-resize';
}

const baseClass = 'gds-form-group__text-area-input';

export const TextArea: React.FC<TextAreaProps> = ({
    className,
    resize,
    size = 'md',
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${resize}`]: resize,
        [`${baseClass}--${size}`]: size
    });

    return <textarea className={rootClass} {...otherProps} />;
};
