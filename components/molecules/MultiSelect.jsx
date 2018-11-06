import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MultiSelectSubMenu from './MultiSelectSubMenu';
import MultiSelectMenuItem from './MultiSelectMenuItem';
import cx from 'classnames';
import generateUID from '../utils/generateUID';
import updateOptions from '../utils/updateMultiSelectOptions';
import { deprecateFunction } from '../utils/deprecate';

const getSelectedOptions = options => {
    const selected = options.reduce((acc, cur) => {
        if (cur.options) {
            return [...acc, ...getSelectedOptions(cur.options)];
        }
        return cur.selected ? [...acc, cur] : acc;
    }, []);

    return selected;
};

class MultiSelect extends Component {
    state = {
        isOpen: false
    };

    componentDidMount() {
        window.addEventListener('click', this._closeOnClickOutside);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this._closeOnClickOutside);
    }

    uid = generateUID(this);

    regionId = `MultiSelect_region_${this.uid}`;

    labelId = `MultiSelect_label_${this.uid}`;

    _closeOnClickOutside = ({ target }) => {
        const el = this.container;
        if (!el.contains(target)) {
            this.setState({ isOpen: false });
        }
    };

    _toggleDropdown = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    _getPlaceholder = () => {
        const { placeholder, options } = this.props;
        const selectedOptions = getSelectedOptions(options);
        return selectedOptions.map(x => x.name).join(', ') || placeholder;
    };

    _handleSubChange = index => subItem => {
        const options = this.props.options.map((item, i) => {
            const shouldUpdate = i === index;
            if (shouldUpdate) {
                // sub options
                const subOptions = updateOptions(item.options, subItem);
                if (subOptions) {
                    // update parent if all are selected/unselected
                    const allSelected = !subOptions.map(opt => opt.selected).includes(false);
                    return {
                        ...item,
                        selected: allSelected,
                        options: subOptions
                    };
                }
            }
            return item;
        });
        this.props.onChange(options);
    };

    _handleChange = item => {
        const options = updateOptions(this.props.options, item);
        this.props.onChange(options);
    };

    render() {
        const { options, callback, onChange, size, className, ...otherProps } = this.props; // eslint-disable-line no-unused-vars
        const { isOpen } = this.state;

        const deprecatedCallback = deprecateFunction(
            callback,
            'The `callback` handler has been deprecated and will be removed in the next major version. Use `onChange` instead. See https://github.com/gumgum/gumdrops/blob/master/_stories/molecules/MultiSelect/README.md'
        );

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

        return (
            <div className={rootClass} {...otherProps} ref={ref => (this.container = ref)}>
                <button
                    aria-expanded={isOpen}
                    aria-pressed={isOpen}
                    aria-controls={this.regionId}
                    tabIndex={0}
                    className={btnClass}
                    id={this.labelId}
                    name="multiselectMenu"
                    type="button"
                    onClick={this._toggleDropdown}>
                    <div className="-ellipsis">{this._getPlaceholder()}</div>
                </button>
                <ul
                    aria-labelledby={this.labelId}
                    aria-hidden={!isOpen}
                    className="gds-multi-select__menu"
                    id={this.regionId}
                    role="region">
                    {options.map(
                        ({ name, value, selected, options: subOptions }, index) =>
                            subOptions ? (
                                <MultiSelectSubMenu
                                    key={`menu-item-${index}`}
                                    name={name}
                                    index={index}
                                    value={value}
                                    selected={selected}
                                    options={subOptions}
                                    onChange={this._handleChange}
                                    onSubChange={this._handleSubChange(index)}
                                    size={size}
                                />
                            ) : (
                                <MultiSelectMenuItem
                                    key={`menu-item-${index}`}
                                    name={name}
                                    index={index}
                                    value={value}
                                    selected={selected}
                                    callback={deprecatedCallback}
                                    onChange={this._handleChange}
                                    size={size}
                                />
                            )
                    )}
                </ul>
            </div>
        );
    }
}

MultiSelect.displayName = 'MultiSelect';

MultiSelect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.any,
            selected: PropTypes.bool,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
                    selected: PropTypes.bool
                })
            )
        })
    ).isRequired,
    callback: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', '']),
    className: PropTypes.string
};

MultiSelect.defaultProps = {
    placeholder: '',
    className: ''
};

export default MultiSelect;
