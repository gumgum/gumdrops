import React, { PropTypes } from 'react';

class SearchMultiSelect extends React.Component {

    constructor({ options }) {
        super();
        this.state = {
            isOpen: false,
            isTagsOpen: false,
            searchTerm: '',
            currentIndex: 0,
            // Indexes of options that match the input term
            matchingIndexes: getMatchingIndexes(options, '')
        };
    }

    componentDidMount() {
        const el = this.container;
        el.addEventListener('keydown', this._handleKeyboardEvents);
        window.addEventListener('click', this._closeOnClickOutside);
    }

    componentWillUpdate(_, { searchTerm }) {
        const { options } = this.props;
        const { searchTerm: oldTerm, currentIndex, isOpen } = this.state;
        const regEx = new RegExp(searchTerm, 'ig');

        // If the term is the same, or the component is not open, do nothing
        if (searchTerm === oldTerm || !isOpen) return;

        // Dictionary with indexes of all matching options
        const matchingIndexes = getMatchingIndexes(options, searchTerm);

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

    _updateSearchTerm = ({ target }) => this.setState({
        searchTerm: target.value,
        isOpen: true
    });

    _openSelect = () => {
        // If open aready, nothing to update
        if (this.state.isOpen) return;
        this.setState({ isOpen: true });
    }

    _closeSelect = () => this.setState({ isOpen: false });

    _toggleSelect = () => this.setState(prevState =>
        ({ isOpen: !prevState.isOpen })
    );

    _toggleTags = () => this.setState(prevState =>
        ({ isTagsOpen: !prevState.isTagsOpen })
    );

    _clearAll = (e) => {
        e.stopPropagation();
        const { options, update } = this.props;
        const newOptions = options.map(o => ({ ...o, isSelected: false }));
        update(newOptions);
    };

    _toggleOption = (index) => {
        const { options, update } = this.props;
        const { isSelected, ...oldOption } = options[index];
        const newOptions = options.slice();
        newOptions[index] = { ...oldOption, isSelected: !isSelected };
        update(newOptions);
        this.setState({ currentIndex: index });
    };

    _removeOption = (index) => {
        const { options, update } = this.props;
        const oldOption = options[index];
        const newOptions = options.slice();
        newOptions[index] = { ...oldOption, isSelected: false };
        const tagCount = newOptions.reduce((acc, { isSelected }) => (isSelected
            ? acc + 1
            : acc
        ), 0);
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
        const nextIndex = matchingIndexes.length > (i + 1)
                        ? matchingIndexes[i + 1]
                        : matchingIndexes[0];
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
        const prevIndex = (i - 1) >= 0
                        ? matchingIndexes[i - 1]
                        : matchingIndexes[last];
        this.setState({ currentIndex: prevIndex });
    }

    _closeOnClickOutside = ({ target }) => {
        const el = this.container;
        if (!el.contains(target)) this._closeSelect();
    }

    _getContainer = (ref) => this.container = ref;


    render() {
        const { isOpen, isTagsOpen, currentIndex, searchTerm, matchingIndexes } = this.state;
        const { options, context } = this.props;

        const numberSelected = options
            .filter(o => o.isSelected)
            .length;

        const regEx = new RegExp(searchTerm, 'ig');
        const openClass = (isOpen) ? 'gds-search-select--open' : '';
        const openTagsClass = (isTagsOpen) ? 'gds-search-select__tag-holder--bubble-active' : '';

        return (
            <div ref={ this._getContainer } className={ `gds-search-select ${openClass}` }>
                <div className="gds-search-select__control">
                    {
                        (numberSelected !== 0) &&
                        <div
                            onClick={ this._toggleTags }
                            className={ `${TagIndicatorClasses} gds-tag--${context}` }
                        >
                            <span className="-user-select--none">{ `${numberSelected} Selected` }</span>
                            <button
                                onClick={ this._clearAll }
                                className={ `gds-tag__option gds-tag__option--sm gds-tag__option--${context}` }
                            >
                                <i className="btl bt-fw bt-times" />
                            </button>
                        </div>
                    }
                    <input
                        onFocus={ this._openSelect }
                        onClick={ this._openSelect }
                        onChange={ this._updateSearchTerm }
                        type="text"
                        placeholder="Choose a Name..."
                        className={ `gds-search-select__input ${(numberSelected > 0) ? hasTags : ''}` }
                    />
                    <button className="gds-search-select__toggle-button -cursor--pointer" onClick={ this._toggleSelect } />
                </div>
                <div className={ `${TagHolderClasses} ${openTagsClass}` } >
                    {
                        options.map(({ name, key, isSelected }, index) => {
                            const removeOption = () => this._removeOption(index);
                            if (!isSelected) return;
                            return (

                                <div
                                    key={ key }
                                    className={ `-m-a-1 gds-tag gds-tag--sm gds-tag--${context} gds-tag--with-button gds-tag--with-button-sm` }
                                >
                                    { name }
                                    <button
                                        onClick={ removeOption }
                                        className={ `gds-tag__option gds-tag__option--sm gds-tag__option--${context}` }>
                                        <i className="btl bt-fw bt-times" />
                                    </button>
                                </div>

                            );
                        })
                    }
                </div>
                <div className="gds-search-select__menu">
                    <div className="gds-search-select__menu-items">
                        {
                            matchingIndexes.map((index) => {
                                const { name, key, isSelected } = options[index];
                                const toggleOption = () => this._toggleOption(index);
                                const selectedClass = (index === currentIndex) ? 'gds-search-select__menu-item--selected' : '';

                                return (
                                    <div
                                        key={ key }
                                        onClick={ toggleOption }
                                        className={ `gds-search-select__menu-item ${selectedClass}` }
                                    >
                                        <label className="gds-search-select__checkbox">
                                            <input
                                                name={ name }
                                                className="gds-search-select__checkbox-input"
                                                type="checkbox"
                                                checked={ isSelected }
                                                readOnly
                                            />
                                            <span className="gds-search-select__checkbox-indicator" />
                                        </label>
                                        { name }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const TagHolderClasses = `gds-search-select__tag-holder
    gds-search-select__tag-holder--bubble`;

const TagIndicatorClasses = `gds-search-select__tag-indicator
    gds-search-select__tag-indicator-sm
    gds-tag
    gds-tag--sm
    gds-tag--with-button
    gds-tag--with-button--sm`;

const hasTags = 'gds-search-select__input--has-tag';

// Given an array of options, it returns the indexes where
// the 'name' property matches the 'term' regEx
const getMatchingIndexes = (options, term) => {
    const regEx = new RegExp(term, 'ig');
    return options
        .reduce((acc, { name }, index) => {
            if (regEx.test(name)) acc.push(index);
            return acc;
        }, []);
};

SearchMultiSelect.propTypes = {
    options: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
    context: PropTypes.string
};

SearchMultiSelect.defaultProps = {
    context: 'primary'
};

export default SearchMultiSelect;
