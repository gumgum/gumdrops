import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import cx from 'classnames';
import generateUID from '../utils/generateUID';

class MultiSelect extends Component {
    uid = generateUID(this);

    state = {
        isOpen: false
    };

    componentDidMount() {
        window.addEventListener('click', this._closeOnClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this._closeOnClickOutside);
    }

    _closeOnClickOutside = ({ target }) => {
        const el = this.container;
        if (!el.contains(target)) {
            this.setState({ isOpen: false });
        }
    };

    _toggleDropdown = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    _getPlaceholder = () => {
        const { placeholder, options } = this.props;
        const selectedOptions = options.filter(x => x.selected);
        return selectedOptions.map(x => x.name).join(', ') || placeholder;
    };

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

        const regionId = `MultiSelect_region_${this.uid}`;
        const labelId = `MultiSelect_label_${this.uid}`;

        return (
            <div className={rootClass} {...otherProps} ref={ref => (this.container = ref)}>
                <button
                    aria-expanded={isOpen}
                    aria-pressed={isOpen}
                    aria-controls={regionId}
                    tabIndex={0}
                    className={btnClass}
                    id={labelId}
                    type="button"
                    onClick={this._toggleDropdown}>
                    <div className="-ellipsis">{this._getPlaceholder()}</div>
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
