import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import cx from 'classnames';
import generateUID from '../utils/generateUID';

class MultiSelect extends Component {
    constructor() {
        super();
        this.UID = generateUID(this);
    }

    state = {
        isOpen: false
    };

    _toggleDropdown = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
        const { options, callback, placeholder, size, className, ...otherProps } = this.props;
        const { isOpen } = this.state;

        const isSmall = size === 'sm';
        const isExtraSmall = size === 'xs';

        const rootClass = cx('gds-multi-select', className, {
            'gds-multi-select--sm': isSmall,
            'gds-multi-select--xs': isExtraSmall,
            'gds-button-dropdown--active': isOpen
        });

        const btnClass = cx('gds-multi-select__button', {
            'gds-multi-select__button--sm': isSmall,
            'gds-multi-select__button--xs': isExtraSmall
        });

        const regionId = `MultiSelect_region_${this.UID}`;
        const labelId = `MultiSelect_label_${this.UID}`;

        return (
            <div className={rootClass} {...otherProps}>
                <button
                    aria-expanded={isOpen}
                    aria-pressed={isOpen}
                    aria-controls={regionId}
                    tabIndex={0}
                    className={btnClass}
                    id={labelId}
                    type="button"
                    onClick={this._toggleDropdown}>
                    {placeholder}
                </button>
                <ul
                    aria-labelledby={labelId}
                    aria-hidden={!isOpen}
                    className="gds-multi-select__menu"
                    id={regionId}
                    role="region">
                    {options.map(({ name, value, selected }, index) => (
                        <li key={`item-${index}`} className="gds-multi-select__menu-item">
                            <div className="gds-multi-select__menu-link">
                                <div className="gds-form-group gds-multi-select__option">
                                    <Checkbox
                                        label={name}
                                        checked={selected}
                                        onChange={event => {
                                            callback(index, value, !selected);
                                        }}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

MultiSelect.displayName = 'MultiSelect';

MultiSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    callback: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', '']),
    className: PropTypes.string
};

MultiSelect.defaultProps = {
    placeholder: '',
    className: ''
};

export default MultiSelect;
