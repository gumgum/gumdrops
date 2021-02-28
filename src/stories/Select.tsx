import React, { ChangeEventHandler } from 'react';
import cx from 'classnames';
import { Colors, SelectOptions, Sizes } from 'types';

export interface SelectPropsInterface extends React.SelectHTMLAttributes<HTMLSelectElement> {
    onChange: (value: unknown) => void;
    options: SelectOptions;
    color?: Colors;
    customValue?: string;
    customName?: string;
}

export type SelectProps = Omit<SelectPropsInterface, 'size'> & {
    size?: Sizes;
};

const baseClass = 'gds-form-group__select-input';

export const Select: React.FC<SelectProps> = ({
    onChange,
    color,
    size,
    customValue = 'value',
    customName = 'name',
    options,
    className,
    disabled,
    ...otherProps
}) => {
    const rootClass = cx(baseClass, className, {
        [`${baseClass}--${color}`]: color,
        [`${baseClass}--${size}`]: size,
        '-disabled': disabled,
        '-pointer-events--none': disabled
    });

    const getChange: ChangeEventHandler = event => {
        const value = (event.currentTarget as HTMLInputElement).value;
        onChange(value);
    };

    return (
        <select onChange={getChange} className={rootClass} disabled={disabled} {...otherProps}>
            {options.map(option => {
                const isObject = typeof option === 'object' && option !== null;
                const key = isObject ? option[customName] : option;
                const value = isObject ? option[customValue] : option;
                return (
                    <option key={key} value={value}>
                        {key}
                    </option>
                );
            })}
        </select>
    );
};
