import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import cx from 'classnames';

const baseClass = 'gds-multi-select__menu-link';

const MultiSelectMenuItem = ({
    callback,
    children,
    index,
    isActive,
    name,
    onChange,
    onClick,
    size,
    selected,
    subOptions,
    value
}) => (
    <li className="gds-multi-select__menu-item" onClick={onClick}>
        <div
            className={cx(baseClass, {
                [`${baseClass}--collapsable`]: children,
                [`${baseClass}--active`]: isActive
            })}>
            <div
                className="gds-form-group gds-multi-select__option"
                onClick={event => event.stopPropagation()}>
                <Checkbox
                    label={name}
                    checked={selected}
                    size={size}
                    onChange={() => {
                        callback && callback(index, value, !selected);
                        onChange &&
                            onChange({ index, value, selected: !selected, options: subOptions });
                    }}
                />
            </div>
            {children}
        </div>
    </li>
);

MultiSelectMenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    size: PropTypes.string,
    value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    selected: PropTypes.bool,
    children: PropTypes.node,
    callback: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    subOptions: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
            selected: PropTypes.bool
        })
    )
};

export default MultiSelectMenuItem;
