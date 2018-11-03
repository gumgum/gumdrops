import React, { Component } from 'react';
import PropTypes from 'prop-types';
import charCodes from '../../constants/charCodes';

const EMPTY_RESULT = { id: 0, name: 'No result found' };

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
        handleOptionClick: PropTypes.func.isRequired
    };

    _handleFocus({ currentTarget, keyCode: charCode }) {
        const nextBtn = currentTarget.nextElementSibling;
        const prevBtn = currentTarget.previousElementSibling;

        if (nextBtn && NEXT.includes(charCode)) {
            nextBtn.firstChild.focus();
        }

        if (prevBtn && PREV.includes(charCode)) {
            prevBtn.firstChild.focus();
        }

        if (!nextBtn && NEXT.includes(charCode)) {
            currentTarget.parentElement.firstElementChild.firstChild.focus();
        }

        if (!prevBtn && PREV.includes(charCode)) {
            currentTarget.parentElement.lastElementChild.firstChild.focus();
        }
    }

    renderOptions() {
        const { options, handleOptionClick } = this.props;

        return options.length ? (
            options.map(item => {
                const { id, title } = item;
                return (
                    <li key={id} onKeyUp={this._handleFocus}>
                        <button
                            className="gds-search-select__menu-item"
                            style={styleReset}
                            onClick={() => handleOptionClick({ id, title })}>
                            {title}
                        </button>
                    </li>
                );
            })
        ) : (
            <li className="gds-search-select__menu-item" key={EMPTY_RESULT.id}>
                {EMPTY_RESULT.name}
            </li>
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
