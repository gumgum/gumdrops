import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createRange from '../utils/createRange';
import charCodes from '../../constants/charCodes';
import cx from 'classnames';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPrevDisabled: props.activePage === 1,
            isNextDisabled: props.activePage === props.lastPage
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.lastPage !== nextProps.lastPage) {
            this.setState({
                isPrevDisabled: nextProps.activePage === 1,
                isNextDisabled: nextProps.activePage === nextProps.lastPage
            });
        }
    }

    _handleKeyPress = event => {
        const { keyCode } = event;

        if (keyCode === charCodes.ARROW_LEFT || keyCode === charCodes.ARROW_UP) {
            this._changePage('prev');
        }
        if (keyCode === charCodes.ARROW_RIGHT || keyCode === charCodes.ARROW_DOWN) {
            this._changePage('next');
        }
    };

    _changePage = page => {
        const { onChange, activePage, lastPage } = this.props;
        const { isPrevDisabled, isNextDisabled } = this.state;

        const prev = activePage - 1;
        const next = activePage + 1;

        const isFirst = prev < 1;
        const isLast = next > lastPage;

        // Find next page
        let newPage = page;
        if (isNaN(page)) {
            newPage = {
                next: isLast ? lastPage : next,
                prev: isFirst ? 1 : prev
            }[page];
        }

        const shouldUpdateState = isFirst !== isPrevDisabled || isLast !== isNextDisabled;

        if (shouldUpdateState) {
            this.setState({
                isPrevDisabled: isFirst,
                isNextDisabled: isLast
            });
        }

        // Pass next page to callback
        onChange && onChange(newPage);
    };

    _createPages() {
        const { boundaries, activePage, lastPage, justify } = this.props;
        // Beyond this number of results, the indicator doesn't work
        const displayLimit = 7;
        // Number of pages adjacent to the center
        const neighbors = boundaries ? 2 : 3;
        // Set limits on the first sectioni of pages
        const firstSetEnd = boundaries ? displayLimit - 2 : displayLimit - 1;
        // Set limits on the last section of pages
        const lastSetStart = lastPage > displayLimit ? lastPage - firstSetEnd : 1;

        // Generate pages not in first or last sections
        const getMiddleRange = () => {
            const lowerLimit = activePage - neighbors;
            const higherLimit = activePage + neighbors;
            return createRange(lowerLimit, higherLimit);
        };
        // Add first and last pages to current set
        const addBoundaries = (range, type) => {
            const limits = () =>
                ({
                    last: [...range.slice(0, -1), lastPage],
                    first: [1, ...range.slice(-(displayLimit - 1))]
                }[type] || [1, ...range, lastPage]);
            return boundaries ? limits() : range;
        };

        // Total number of pages is below display limit
        const isBelowLimit = lastPage <= displayLimit;
        // Current page is within first section
        const isFirstSet = !isBelowLimit && activePage <= firstSetEnd;
        // Current page is within last section
        const isLastSet = !isFirstSet && activePage > lastSetStart;

        // Set of pages when total is below display limit
        const shortSet = isBelowLimit && createRange(1, lastPage);
        // First set of pages
        const firstSet = isFirstSet && addBoundaries(createRange(1, displayLimit), 'last');
        // Last set of pages
        const lastSet = isLastSet && addBoundaries(createRange(lastSetStart, lastPage), 'first');

        const currentSet = shortSet || firstSet || lastSet || addBoundaries(getMiddleRange());

        return currentSet.map(page => {
            const isCurrent = page === activePage;
            const eltClass = cx('gds-pagination__page-item', '-va-top', {
                'gds-pagination__page-item--fixed': !justify,
                'gds-pagination__page-item--active': isCurrent
            });
            const callback = () => this._changePage(page);
            return { page, eltClass, callback, isCurrent };
        });
    }

    render() {
        const { className, justify, size, lastPage, activePage } = this.props;

        const rootClass = cx('gds-pagination', 'gds-pagination--mobile-arrows', className, {
            'gds-pagination--fixed': !justify,
            [`gds-pagination--${size}`]: size
        });

        const itemClass = cx('gds-pagination__page-item', '-va-top', {
            'gds-pagination__page-item--fixed': !justify
        });

        const linkClass = cx('gds-pagination__page-link', '-overflow-hidden', {
            'gds-pagination__page-link--fixed': !justify
        });

        // fixes extra space below inline-block elements
        const itemStyle = {
            verticalAlign: 'top'
        };

        // fixes style issues associated with using buttons
        const btnStyle = {
            border: 0,
            fontFamily: 'inherit',
            padding: justify ? null : 0,
            background: 'none'
        };

        const shouldRender = lastPage > 0 && activePage > 0 && activePage <= lastPage;
        if (!shouldRender) return null;

        return (
            <nav className={rootClass} onKeyDown={this._handleKeyPress}>
                <div className={itemClass}>
                    <button
                        aria-label="Goto previous page"
                        className={linkClass}
                        disabled={this.state.isPrevDisabled}
                        onClick={() => this._changePage('prev')}
                        style={btnStyle}>
                        <span className="-vis-hidden -ellipsis">Go to previous page</span>
                    </button>
                </div>
                {this._createPages().map(({ page, eltClass, callback, isCurrent }) => (
                    <div key={page} className={eltClass}>
                        <button
                            aria-label={isCurrent ? `Page ${page}, Current` : `Goto page ${page}`}
                            aria-current={isCurrent}
                            className={linkClass}
                            onClick={callback}
                            style={btnStyle}>
                            {page}
                        </button>
                    </div>
                ))}
                <div className={itemClass}>
                    <button
                        aria-label="Goto next page"
                        className={linkClass}
                        disabled={this.state.isNextDisabled}
                        onClick={() => this._changePage('next')}
                        style={btnStyle}>
                        <span className="-vis-hidden -ellipsis">Go to next page</span>
                    </button>
                </div>
                <span className="gds-pagination__page-indicator" />
            </nav>
        );
    }
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
    onChange: PropTypes.func.isRequired,
    lastPage: PropTypes.number.isRequired,
    activePage: PropTypes.number,
    boundaries: PropTypes.bool,
    justify: PropTypes.bool,
    size: PropTypes.string,
    className: PropTypes.string
};

Pagination.defaultProps = {
    activePage: 1,
    itemsPerPage: 10,
    boundaries: false,
    justify: false,
    className: ''
};

export default Pagination;
