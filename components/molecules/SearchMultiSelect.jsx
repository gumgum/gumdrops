import React, { Component } from 'react';
import PropTypes from 'prop-types';
import arraysEqual from '../utils/arraysEqual';
import cx from 'classnames';
import Tag from '../atoms/Tag';

import escapeRegExp from '../utils/escapeRegExp';

class SearchMultiSelect extends Component {
    constructor({ options, searchKeys, multiTerm, termDivider, filter }) {
        super();
        const searchConfig = { searchKeys, multiTerm, termDivider };
        this.state = {
            isOpen: false,
            isTagsOpen: false,
            searchTerm: '',
            currentIndex: 0,
            // Indexes of options that match the input term
            matchingIndexes: filter(options, '', searchConfig)
        };
    }

    componentDidMount() {
        const el = this.container;
        el.addEventListener('keydown', this._handleKeyboardEvents);
        window.addEventListener('click', this._closeOnClickOutside);
    }

    UNSAFE_componentWillReceiveProps({ options, searchKeys, multiTerm, termDivider, filter }) {
        const old = this.props;
        if (!arraysEqual(options, old.options)) {
            const searchConfig = { searchKeys, multiTerm, termDivider };
            const matchingIndexes = filter(options, this.state.searchTerm, searchConfig);
            this.setState({ matchingIndexes });
        }
    }

    UNSAFE_componentWillUpdate(_, { searchTerm }) {
        const { options, searchKeys, multiTerm, termDivider, filter } = this.props;
        const searchConfig = { searchKeys, multiTerm, termDivider };
        const { searchTerm: oldTerm, currentIndex, isOpen } = this.state;

        // If the term is the same, or the component is not open, do nothing
        if (searchTerm === oldTerm || !isOpen) return;

        // Dictionary with indexes of all matching options
        const matchingIndexes = filter(options, searchTerm, searchConfig);

        // If the previous selected option is not in the matched list
        // move to the first matching
        const nextIndex = matchingIndexes.includes(currentIndex)
            ? currentIndex
            : matchingIndexes[0];

        this.setState({ currentIndex: nextIndex, matchingIndexes });
    }

    componentWillUnmount() {
        const el = this.container;
        el.removeEventListener('keydown', this._handleKeyboardEvents);
        window.removeEventListener('click', this._closeOnClickOutside);
    }

    _updateSearchTerm = ({ target }) => {
        const { value: searchTerm } = target;
        const { onChange } = this.props;
        const externalOnChange = () => onChange && onChange(searchTerm);
        this.setState(
            {
                isOpen: true,
                searchTerm
            },
            externalOnChange
        );
    };

    _openSelect = () => {
        // If open aready, nothing to update
        if (this.state.isOpen) return;
        this.setState({ isOpen: true });
    };

    _closeSelect = () => this.setState({ isOpen: false });

    _toggleSelect = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    _toggleTags = () => this.setState(prevState => ({ isTagsOpen: !prevState.isTagsOpen }));

    _clearAll = e => {
        e.stopPropagation();
        const { options, update } = this.props;
        const newOptions = options.map(o => ({ ...o, isSelected: false }));
        update(newOptions);
    };

    _toggleOption = index => {
        const { options, update } = this.props;
        const { isSelected, ...oldOption } = options[index];
        const newOptions = options.slice();
        newOptions[index] = { ...oldOption, isSelected: !isSelected };
        update(newOptions);
        this.setState({ currentIndex: index });
    };

    _removeOption = index => {
        const { options, update } = this.props;
        const oldOption = options[index];
        const newOptions = options.slice();
        newOptions[index] = { ...oldOption, isSelected: false };
        const tagCount = newOptions.reduce(
            (acc, { isSelected }) => (isSelected ? acc + 1 : acc),
            0
        );
        if (tagCount < 1) this.setState({ isTagsOpen: false });
        update(newOptions);
    };

    _handleKeyboardEvents = ({ keyCode }) => {
        switch (keyCode) {
            case 13: // enter
                this._toggleOnEnter();
                break;
            case 27: // esc
                this._closeSelect();
                break;
            case 40: // down
                this._selectNextOption();
                break;
            case 38: // up
                this._selectPrevOption();
                break;
        }
    };

    _toggleOnEnter() {
        const { currentIndex, isOpen } = this.state;
        if (!isOpen) return; // do nothing if closed
        this._toggleOption(currentIndex);
    }

    _selectNextOption() {
        const { matchingIndexes, currentIndex, isOpen } = this.state;
        if (!isOpen) {
            this._openSelect();
            return;
        }
        const i = matchingIndexes.indexOf(currentIndex);
        const nextIndex =
            matchingIndexes.length > i + 1 ? matchingIndexes[i + 1] : matchingIndexes[0];
        this.setState({ currentIndex: nextIndex });
    }

    _selectPrevOption() {
        const { matchingIndexes, currentIndex, isOpen } = this.state;
        if (!isOpen) {
            this._openSelect();
            return;
        }
        const i = matchingIndexes.indexOf(currentIndex);
        const last = matchingIndexes.length - 1;
        const prevIndex = i - 1 >= 0 ? matchingIndexes[i - 1] : matchingIndexes[last];
        this.setState({ currentIndex: prevIndex });
    }

    _closeOnClickOutside = ({ target }) => {
        const el = this.container;
        if (!el.contains(target)) this._closeSelect();
    };

    _getContainer = ref => (this.container = ref);

    render() {
        const { isOpen, isTagsOpen, currentIndex, matchingIndexes } = this.state;
        const { inputRef, options, context, placeholder, size } = this.props;

        const numberSelected = options.filter(o => o.isSelected).length;

        const rootClass = cx('gds-search-select', {
            'gds-search-select--open': isOpen
        });

        const openTagsClass = isTagsOpen ? 'gds-search-select__tag-holder--bubble-active' : '';

        const tagSize = size === 'sm' ? 'xs' : 'sm';
        const tagStyle = size === 'sm' ? { top: '0.4rem' } : {};

        return (
            <div ref={this._getContainer} className={rootClass}>
                <div className="gds-search-select__control">
                    {numberSelected !== 0 && (
                        <Tag
                            className="gds-search-select__tag-indicator"
                            context={context}
                            hasOption
                            onClick={this._toggleTags}
                            onOptionClick={this._clearAll}
                            optionIcon="bt-times"
                            optionLabel="Clear all tags"
                            size={tagSize}
                            style={tagStyle}
                            text={`${numberSelected} Selected`}
                        />
                    )}
                    <input
                        ref={inputRef}
                        onFocus={this._openSelect}
                        onClick={this._openSelect}
                        onChange={this._updateSearchTerm}
                        type="text"
                        placeholder={placeholder}
                        className={`gds-search-select__input gds-search-select__input--${size} ${
                            numberSelected > 0 ? hasTags : ''
                        }`}
                    />
                    <button
                        className="gds-search-select__toggle-button -cursor--pointer"
                        type="button"
                        onClick={this._toggleSelect}
                    />
                </div>
                <div className={`${TagHolderClasses} ${openTagsClass}`}>
                    <div className="gds-search-select__tag-overflow">
                        {options.map(({ name, key, isSelected }, index) => {
                            if (!isSelected) return;
                            return (
                                <Tag
                                    key={key}
                                    className="-m-a-1"
                                    context={context}
                                    hasOption
                                    onOptionClick={() => this._removeOption(index)}
                                    optionIcon="bt-times"
                                    optionLabel="Remove option"
                                    size="sm"
                                    text={name}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="gds-search-select__menu">
                    <div className="gds-search-select__menu-items">
                        {matchingIndexes.map(index => {
                            const { name, key, isSelected } = options[index];

                            const itemClass = cx('gds-search-select__menu-item', {
                                'gds-search-select__menu-item--selected': index === currentIndex
                            });

                            return (
                                <div
                                    key={key}
                                    onClick={() => this._toggleOption(index)}
                                    className={itemClass}>
                                    <label className="gds-search-select__checkbox">
                                        <input
                                            name={name}
                                            className="gds-search-select__checkbox-input"
                                            type="checkbox"
                                            checked={isSelected}
                                            readOnly
                                        />
                                        <span className="gds-search-select__checkbox-indicator" />
                                    </label>
                                    {name}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const TagHolderClasses = `gds-search-select__tag-holder
    gds-search-select__tag-holder--bubble`;

const hasTags = 'gds-search-select__input--has-tag';

// Given an array of options, it returns the indexes where
// the 'name' property matches the 'term' regEx
const getMatchingIndexes = (options, query, config) => {
    const { searchKeys, multiTerm, termDivider } = config;
    const terms = multiTerm ? query.split(termDivider) : [query];
    const findMatches = q =>
        terms.some(term => {
            const escapedTerm = escapeRegExp(term);
            const regEx = new RegExp(escapedTerm, 'ig');
            return regEx.test(q);
        });
    return options.reduce((acc, { name, key }, index) => {
        const isNameMatch = findMatches(name);
        const isKeyMatch = searchKeys && findMatches(key);
        if (isNameMatch || isKeyMatch) acc.push(index);
        return acc;
    }, []);
};

SearchMultiSelect.displayName = 'SearchMultiSelect';

SearchMultiSelect.defaultProps = {
    context: 'primary',
    placeholder: '',
    size: 'md',
    filter: getMatchingIndexes,
    searchKeys: false,
    multiTerm: false,
    termDivider: /[ ,]+/
};

SearchMultiSelect.propTypes = {
    options: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    filter: PropTypes.func,
    context: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md']),
    searchKeys: PropTypes.bool,
    multiTerm: PropTypes.bool,
    termDivider: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
    inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default SearchMultiSelect;
