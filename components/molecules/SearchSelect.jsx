import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import SearchSelectOptions from './SearchSelectOptions';
import debounce from '../utils/debounce';

class SearchSelect extends Component {
    static propTypes = {
        debounceTime: PropTypes.number,
        isFocused: PropTypes.bool,
        isLoading: PropTypes.bool,
        onChange: PropTypes.func,
        onSelect: PropTypes.func.isRequired,
        options: PropTypes.array,
        placeholder: PropTypes.string,
        renderLoader: PropTypes.bool,
        size: PropTypes.oneOf(['xs', 'sm', 'md'])
    };

    static defaultProps = {
        size: 'sm',
        placeholder: 'Search',
        options: [],
        isFocused: false,
        isLoading: false,
        debounceTime: 300
    };

    state = {
        isOpen: false,
        searchTerm: ''
    };

    componentWillUnmount() {
        this._removeListeners();
    }

    _mapContainerRef = ref => (this._container = ref);

    _mapBtnRef = ref => (this._clearBtn = ref);

    _addListeners() {
        window.addEventListener('click', this._eventOutSide);
        document.addEventListener('focus', this._eventOutSide, true);
    }

    _removeListeners() {
        window.removeEventListener('click', this._eventOutSide);
        document.removeEventListener('focus', this._eventOutSide, true);
    }

    _eventOutSide = ({ target }) => {
        if (!this._container.contains(target)) {
            this.setState({ isOpen: false });
            this._removeListeners();
        }
    };

    _showOnFocus = ({ target }) => {
        if (
            this.props.options.length &&
            this._container.contains(target) &&
            target !== this._clearBtn
        ) {
            this.setState({ isOpen: true });
            this._addListeners();
        }
    };

    handleOptionClick = item => {
        const { onSelect } = this.props;
        onSelect && onSelect(item);
        this.setState({
            isOpen: false,
            searchTerm: item.title
        });
    };

    _clearSearch = event => {
        event.stopPropagation();
        this.setState({ searchTerm: '', isOpen: false });
    };

    _searchItem = ({ target: { value } }) => {
        const trimmedValue = value.trim();

        // Don't search if term is less than 2 characters
        if (trimmedValue !== '' && trimmedValue.length > 1) {
            this._callDebouncedSearch(trimmedValue);
        }

        this.setState({
            searchTerm: value,
            isOpen: true
        });
    };

    // Reduce the amount of calls to the api while the user is typing
    _callDebouncedSearch = debounce(value => {
        this.props.onChange(value);
    }, this.props.debounceTime);

    render() {
        const { placeholder, size, isLoading, renderLoader, options, isFocused } = this.props;
        const { isOpen, searchTerm } = this.state;

        return (
            <div
                className={cx('gds-search-select', {
                    'gds-search-select--open': isOpen
                })}
                onFocus={this._showOnFocus}
                ref={this._mapContainerRef}>
                <div className="gds-search-select__control">
                    <input
                        autoComplete="off"
                        className={cx('gds-form-group__text-input md', {
                            [`gds-form-group__text-input--${size}`]: size
                        })}
                        autoFocus={isFocused}
                        onChange={this._searchItem}
                        placeholder={placeholder}
                        type="text"
                        value={searchTerm}
                    />
                    {searchTerm.length > 0 ? (
                        <button
                            ref={this._mapBtnRef}
                            onClick={this._clearSearch}
                            style={{
                                position: 'absolute',
                                padding: 0,
                                margin: 0,
                                top: '33%',
                                right: '0.6rem',
                                zIndex: 900,
                                display: 'inline-block',
                                border: 0,
                                borderRadius: 0
                            }}>
                            <i
                                className={cx('btl bt-times', {
                                    'bt-sm': size === 'xs',
                                    'bt-lg': size !== 'xs'
                                })}
                                style={{ display: 'inline-block' }}
                            />
                        </button>
                    ) : (
                        <i
                            className={cx('btl bt-search', {
                                'bt-lg': size === 'md',
                                'bt-sm': size === 'xs'
                            })}
                            style={{
                                position: 'absolute',
                                top: '31%',
                                right: '0.6rem',
                                zIndex: 900
                            }}
                        />
                    )}

                    {isLoading && renderLoader && renderLoader()}
                </div>
                <SearchSelectOptions options={options} handleOptionClick={this.handleOptionClick} />
            </div>
        );
    }
}

export default SearchSelect;
