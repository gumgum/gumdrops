import React, { Component } from 'react';
import PropTypes from 'prop-types';
import charCodes from '../../constants/charCodes';
import modulo from '../utils/modulo';

const styleReset = {
    display: 'block',
    width: '100%',
    border: 0,
    borderRadius: 0,
    textAlign: 'left',
    lineHeight: 'inherit',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    fontSize: 'inherit'
};

const NEXT = [charCodes.ARROW_RIGHT, charCodes.ARROW_DOWN];
const PREV = [charCodes.ARROW_LEFT, charCodes.ARROW_UP];

class SearchSelectOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
                title: PropTypes.string.isRequired
            })
        ),
        handleOptionClick: PropTypes.func.isRequired,
        noResultsMessage: PropTypes.string.isRequired
    };

    static defaultProps = {
        noResultsMessage: 'No results found'
    };

    state = {
        focusedIndex: 0
    };

    _handleFocus = currentIndex => event => {
        const { options } = this.props;

        if (NEXT.includes(event.keyCode)) {
            event.preventDefault();
            const nextIndex = modulo(currentIndex + 1, options.length);
            this[`_option${nextIndex}`].focus();
            return this.setState({ focusedIndex: nextIndex });
        }

        if (PREV.includes(event.keyCode)) {
            event.preventDefault();
            const prevIndex = modulo(currentIndex - 1, options.length);
            this[`_option${prevIndex}`].focus();
            return this.setState({ focusedIndex: prevIndex });
        }
    };

    renderOptions() {
        const { options, handleOptionClick, noResultsMessage } = this.props;
        const { focusedIndex } = this.state;

        return options.length ? (
            options.map(({ id, title }, index) => (
                <li key={id}>
                    <button
                        aria-label={title}
                        tabIndex={focusedIndex === index ? 0 : -1}
                        ref={ref => (this[`_option${index}`] = ref)}
                        className="gds-search-select__menu-item"
                        style={styleReset}
                        name={`option${index}`}
                        onKeyDown={this._handleFocus(index)}
                        onClick={() => handleOptionClick({ id, title })}>
                        {index} {title}
                    </button>
                </li>
            ))
        ) : (
            <li className="gds-search-select__menu-item">{noResultsMessage}</li>
        );
    }

    render() {
        return (
            <div className={`gds-search-select__menu`}>
                <ul className="gds-search-select__menu-items ">{this.renderOptions()}</ul>
            </div>
        );
    }
}

export default SearchSelectOptions;
