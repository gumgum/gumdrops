import React from 'react';
import PropTypes from 'prop-types';

class MultiSelect extends React.Component {
    state = {
        isOpen: false
    };

    _toggleDropdown = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
        const { options, callback, placeholder, size, className, ...otherProps } = this.props;

        const isSmall = size === 'sm',
            isExtraSmall = size === 'xs',
            smallClass = isSmall ? 'gds-multi-select--sm' : '',
            smallBtnClass = isSmall ? 'gds-multi-select__button--sm' : '',
            extraSmallClass = isExtraSmall ? 'gds-multi-select--xs' : '',
            extraSmallBtnClass = isExtraSmall ? 'gds-multi-select__button--xs' : '';

        const activeClass = this.state.isOpen ? 'gds-button-dropdown--active' : '';

        return (
            <div
                className={`gds-multi-select ${activeClass} ${className} ${smallClass} ${extraSmallClass}`}
                {...otherProps}>
                <div
                    className={`gds-multi-select__button ${smallBtnClass} ${extraSmallBtnClass}`}
                    onClick={this._toggleDropdown}>
                    {placeholder}
                </div>
                <ul className="gds-multi-select__menu">
                    {options.map(({ name, value, selected }, index) => {
                        const _onClick = e => {
                            // Prevents callback from being called twice when the checkbox's label is clicked
                            e.preventDefault();
                            callback(index, value, !selected);
                        };

                        return (
                            <li
                                key={Math.random()}
                                className="gds-multi-select__menu-item"
                                onClick={_onClick}>
                                <div className="gds-multi-select__menu-link">
                                    <div className="gds-form-group gds-multi-select__option">
                                        <div className="gds-form-group__checkbox">
                                            <label className="gds-form-group__checkbox-label">
                                                <input
                                                    className="gds-form-group__checkbox-input"
                                                    type="checkbox"
                                                    checked={selected}
                                                    readOnly
                                                />
                                                <span className="gds-form-group__checkbox-indicator" />
                                                {name}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
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
