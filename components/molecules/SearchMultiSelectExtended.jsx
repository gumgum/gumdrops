import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { clone } from 'ramda';

import Tag from '../atoms/Tag';
import Checkbox from './Checkbox';
import arraysEqual from '../utils/arraysEqual';
import escapeRegExp from '../utils/escapeRegExp';

const SearchMultiSelectExtended = ({
    options,
    searchKeys,
    multiTerm,
    termDivider,
    filter,
    inputRef,
    context,
    placeholder,
    size,
    update,
}) => {
    const searchConfig = { searchKeys, multiTerm, termDivider };
    const [isOpen, setIsOpen] = useState(false);
    const [isTagsOpen, setIsTagOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [matchingIndexes, setMatchingIndexes] = useState(filter(options, searchTerm, searchConfig));
    const containerRef = useRef();

    const numberSelected = options.reduce((acc, option) => {
        const options = option.options;
        if (options) {
            acc.push(...options.filter(e => e.isSelected));
        } else if (option.isSelected && !option.options) {
            acc.push(option);
        }
        return acc;
    }, []);

    const showTags = numberSelected.length > 0;
    const tagSize = size === 'xs' || size === 'sm' ? 'xs' : 'sm';
    const rootClass = cx('gds-search-select', {
        'gds-search-select--open': isOpen,
    });
    const tagIndicatorClasses = cx('gds-search-select__tag-indicator', {
        [`gds-search-select__tag-indicator--${size}`]: size === 'xs' || size === 'sm',
    });
    const checkBoxClasses = cx('gds-search-select__menu-items', {
        'gds-form-group__checkbox--xs': size === 'xs' || size === 'sm',
    });
    const tagHolderClasses = cx(
        'gds-search-select__tag-holder',
        'gds-search-select__tag-holder--bubble',
        {
            'gds-search-select__tag-holder--bubble-active': isTagsOpen && showTags,
            'gds-search-select__tag-holder--bubble-sm': size === 'xs' || size === 'sm',
        }
    );
    const inputClasses = cx(`gds-search-select__input gds-search-select__input--${size}`, {
        'gds-search-select__input--has-tag': showTags,
    });

    const _openSelect = () => {
        // If open aready, nothing to update
        if (isOpen) return;
        setIsOpen(true);
    };

    const _toggleOption = option => {
        if (option) {
        const { isSelected, ...oldOption } = option;
        const newOptions = options.slice();
        if (option && option.parent > -1) {
            newOptions[option.parent].options.map(item => {
                if (item.name === option.name) {
                    item.isSelected = !item.isSelected;
                }
            });
        } else {
            const index = option.index;
            newOptions[index] = { ...oldOption, isSelected: !isSelected };
            if (newOptions[index].options) {
                //select all children
                newOptions[index].options = newOptions[index].options.map(item => ({
                    ...item,
                    isSelected: !isSelected,
                }));
            }
        }
        setMatchingIndexes(filter(options, searchTerm, searchConfig));
        update(newOptions);
        if (numberSelected < 1) setIsTagOpen(false);
        setCurrentIndex(option);
        }
    };

    const toggleSubItem = (option, subIndex) => {
        const { isSelected, ...oldOption } = option.options[subIndex];
        const newOptions = clone(options);
        newOptions[option.index].options[subIndex] = { ...oldOption, isSelected: !isSelected };
        if (!newOptions[option.index].options.some(e => e.isSelected)) {
            newOptions[option.index].isSelected = false;
        }
        update(newOptions);
        setCurrentIndex(option);
    };

    useEffect(() => {
        const _closeOnClickOutside = ({ target }) => {
            const el = containerRef;
            if (!el.current.contains(target)) _closeSelect();
        };

        const _handleKeyboardEvents = ({ keyCode }) => {
            switch (keyCode) {
                case 27: // esc
                    _closeSelect();
                    break;
            }
        };
        const el = containerRef;
        if (el && el.current) {
            el.current.addEventListener('keydown', _handleKeyboardEvents);
            window.addEventListener('click', _closeOnClickOutside);
        }
        return () => {
            if (el && el.current) {
                el.current.removeEventListener('keydown', _handleKeyboardEvents);
                window.removeEventListener('click', _closeOnClickOutside);
            }
        };
    }, []);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevOptions = usePrevious({ options });
    const prevSearchTerm = usePrevious({ searchTerm });

    useEffect(() => {
        if (prevOptions && !arraysEqual(options, prevOptions.options)) {
            setMatchingIndexes(filter(options, searchTerm, searchConfig));
        }
    }, [filter, options, prevOptions, searchConfig, searchTerm]);

    const _updateSearchTerm = ({ target }) => {
        const { value: searchTerm } = target;
        setIsOpen(true);
        // onChange && onChange(searchTerm); For now we are not covering autocompletion scenarios.
        setSearchTerm(searchTerm);
        if (prevSearchTerm && (searchTerm === prevSearchTerm.searchTerm || !isOpen)) return;
        const currentMatchingIndexes = filter(options, searchTerm, searchConfig);
        const nextIndex = currentMatchingIndexes.includes(currentIndex)
            ? currentIndex
            : currentMatchingIndexes[0];
        setCurrentIndex(nextIndex);
        setMatchingIndexes(currentMatchingIndexes);
    };

    const _closeSelect = () => setIsOpen(false);

    const _toggleSelect = () => setIsOpen(prev => !prev);

    const _toggleTags = () => setIsTagOpen(prev => !prev);

    const _clearAll = e => {
        e.stopPropagation();
        const newOptions = options.map(o => {
            if (o.options) {
                const newOptions = o.options.map(o => ({ ...o, isSelected: false }));
                return { ...o, isSelected: false, options: newOptions };
            } else {
                return { ...o, isSelected: false };
            }
        });
        setIsOpen(false);
        setIsTagOpen(false);
        update(newOptions);
    };

    const _removeOption = (index, subIndex) => {
        const oldOption = options[index];
        const newOptions = options.slice();
        newOptions[index] = { ...oldOption, isSelected: false };
        if (newOptions[index].options) {
            newOptions[index].options[subIndex].isSelected = false;
        }
        update(newOptions);
    };

    return (
        <div ref={containerRef} className={rootClass}>
            <div className="gds-search-select__control">
                {showTags && (
                    <Tag
                        className={tagIndicatorClasses}
                        context={context}
                        hasOption
                        onClick={_toggleTags}
                        onOptionClick={_clearAll}
                        optionIcon="bt-times"
                        optionLabel="Clear all tags"
                        size={tagSize}
                        text={`${numberSelected && numberSelected.length} Selected`}
                    />
                )}
                <input
                    ref={inputRef}
                    onFocus={_openSelect}
                    onClick={_openSelect}
                    onChange={_updateSearchTerm}
                    type="text"
                    placeholder={placeholder}
                    className={inputClasses}
                />
                <button
                    className="gds-search-select__toggle-button -cursor--pointer"
                    type="button"
                    onClick={_toggleSelect}
                />
            </div>
            <div className={tagHolderClasses}>
                <div className="gds-search-select__tag-overflow">
                    {options.map(({ name, key, isSelected, options }, index) => {
                        if (isSelected && !options) {
                                return (
                                    <Tag
                                        key={key}
                                        className="-m-a-1"
                                        context={context}
                                        hasOption
                                        onOptionClick={() => _removeOption(index)}
                                        optionIcon="bt-times"
                                        optionLabel="Remove option"
                                        size={tagSize}
                                        text={name}
                                    />
                                );
                        } else {
                            if (options) {
                                return (options.map((option, i) =>
                                    option.isSelected && (<Tag
                                        key={key}
                                        className="-m-a-1"
                                        context={context}
                                        hasOption
                                        onOptionClick={() => _removeOption(index, i)}
                                        optionIcon="bt-times"
                                        optionLabel="Remove option"
                                        size={tagSize}
                                        text={option.name}
                                    />)
                                ))
                            }
                            return;
                        }
                    })}
                </div>
            </div>
            <div className="gds-search-select__menu">
                <div className={checkBoxClasses}>
                    {matchingIndexes.length ? (
                        matchingIndexes.map((option, i) => {
                            const { name, value, isSelected, options: subOptions } = option;
                            const itemClass = cx('gds-search-select__menu-item', {
                                'gds-search-select__menu-item--selected': option === currentIndex,
                            });
                            return !subOptions ? (
                                <Checkbox
                                    key={i}
                                    value={value}
                                    onChange={() => _toggleOption(option)}
                                    checked={isSelected}
                                    className={itemClass}
                                    label={name}
                                />
                            ) : (
                                <div>
                                    <Checkbox
                                        key={i}
                                        value={value}
                                        onChange={() => _toggleOption(option)}
                                        className={`${itemClass} -color-bg-pri-lt-4`}
                                        label={name}
                                        checked={isSelected}
                                    />
                                    {subOptions.map((e, subIndex) => (
                                        <Checkbox
                                            key={e.value}
                                            value={e.value}
                                            onChange={() => {
                                                toggleSubItem(option, subIndex)
                                            }
                                            }
                                            className={`${itemClass} -p-l-3`}
                                            label={e.name}
                                            checked={e.isSelected}
                                        />
                                    ))}
                                </div>
                            );
                        })
                    ) : (
                        <div
                            className={cx('-text-center -p-a-3 -color-tx-lt-4', {
                                'gds-well': false,
                            })}>
                            <i
                                className={cx('fas fa-fw fa-exclamation-triangle -inline-block', {
                                    [`gds-text--header-lg`]: 'lg',
                                })}
                            />
                            <br />
                            <span
                                className={cx({
                                    '-m-l-2': false,
                                })}>
                                No data to display.
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

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
    const matchingOptionsIndex = [];
    const matchingSingleIndex = [];
    options.map((option, index) => {
        const isNameMatch = findMatches(option.name);
        const isKeyMatch = searchKeys && findMatches(option.value);
        if (isNameMatch || isKeyMatch) {
            option.index = index;
            if (option.options) {
                option.options = option.options.map(item => ({ ...item, parent: index }));
                matchingOptionsIndex.push(option);
            }
            matchingSingleIndex.push(option);
        } else if (option.options) {
            option.options.find(subOption => {
                const isNameMatchSub = findMatches(subOption.name);
                const isKeyMatchSub = searchKeys && findMatches(subOption.key);
                subOption.parent = index;
                if (isNameMatchSub || isKeyMatchSub) {
                    matchingOptionsIndex.push(subOption);
                }
            });
        }
    });
    return matchingOptionsIndex.length > 0 ? matchingOptionsIndex : matchingSingleIndex;
};

SearchMultiSelectExtended.displayName = 'SearchMultiSelectExtended';

SearchMultiSelectExtended.defaultProps = {
    context: 'primary',
    placeholder: '',
    size: 'md',
    filter: getMatchingIndexes,
    searchKeys: false,
    multiTerm: false,
    termDivider: /[ ,]+/,
};

SearchMultiSelectExtended.propTypes = {
    /** List of options {array of objects} */
    options: PropTypes.array.isRequired,
    /** Function that returns the latest change on options */
    update: PropTypes.func.isRequired,
    /** Optional custom function to filter elements. The arguments passed to it are current options {Array} and search term {String}. It must return an array with the indexes of the options to display in the dropdown. */
    filter: PropTypes.func,
    /** For now, this only affects the color of the Tag elements. One of: `primary`, `secondary`, `success`, `warning`, `info`, `danger`, `white` */
    context: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md']),
    /** Should the search also match against object keys? */
    searchKeys: PropTypes.bool,
    /** Should the search also match against multiple terms? */
    multiTerm: PropTypes.bool,
    /** String or regexp used to divide the search term, defaults to /[ ,]+/ (empty space and comma) */
    termDivider: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
    /** Ref applied to the input, useful for setting focus */
    inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default SearchMultiSelectExtended;
