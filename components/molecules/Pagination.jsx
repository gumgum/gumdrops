import React, { PropTypes } from 'react';
import createRange from '../utils/createRange';

const activeClass = 'gds-pagination__page-item--active';
const itemClassName = 'gds-pagination__page-item';
const linkClassName = 'gds-pagination__page-link';
const fixedItemClass = `${itemClassName} ${itemClassName}--fixed`;
const fixedLinkClass = `${linkClassName} ${linkClassName}--fixed`;

const Pagination = (props) => {
    const {
        className: wrapperClassName,
        boundaries,
        activePage,
        lastPage,
        justify,
        onChange,
        size
    } = props;

    const itemClass = justify ? itemClassName : fixedItemClass;
    const linkClass = justify ? linkClassName : fixedLinkClass;
    const sizeClass = size ? `gds-pagination--${size}` : '';
    const widthClass = justify ? '' : 'gds-pagination--fixed';
    const className = `gds-pagination ${sizeClass} gds-pagination--mobile-arrows ${widthClass}`;

    const createPages = () => {
        // Beyond this number of results, the indicator doesn't work
        const displayLimit = 7;
        // Number of pages adjacent to the center
        const neighbors = boundaries ? 2 : 3;
        // Set limits on the first sectioni of pages
        const firstSetEnd = boundaries
            ? displayLimit - 2
            : displayLimit - 1;
        // Set limits on the last section of pages
        const lastSetStart = lastPage > displayLimit
            ? (lastPage - firstSetEnd)
            : 1;

        // Generate pages not in first or last sections
        const getMiddleRange = () => {
            const lowerLimit = activePage - neighbors;
            const higherLimit = activePage + neighbors;
            return createRange(lowerLimit, higherLimit);
        };
        // Add first and last pages to current set
        const addBoundaries = (range, type) => {
            const limits = () => ({
                'last': [...range.slice(0, -1), lastPage],
                'first': [1, ...range.slice(-(displayLimit - 1))]
            })[type] || [1, ...range, lastPage];
            return boundaries ? limits() : range;
        };

        // Total number of pages is below display limit
        const isBelowLimit = lastPage <= displayLimit;
        // Current page is within first section
        const isFirstSet = !isBelowLimit && (activePage <= firstSetEnd);
        // Current page is within last section
        const isLastSet = !isFirstSet && (activePage > lastSetStart);

        // Set of pages when total is below display limit
        const shortSet = isBelowLimit && createRange(1, lastPage);
        // First set of pages
        const firstSet = isFirstSet && addBoundaries(createRange(1, displayLimit), 'last');
        // Last set of pages
        const lastSet = isLastSet && addBoundaries(createRange(lastSetStart, lastPage), 'first');

        const currentSet = shortSet || firstSet || lastSet || addBoundaries(getMiddleRange());

        return currentSet.map((page) => {
            const isActive = page === activePage;
            const eltClass = `${itemClass} ${isActive ? activeClass : ''}`;
            const changeConfig = { lastPage, activePage };
            const callback = () => changePage(page, activePage, lastPage);
            return { page, eltClass, callback };
        });
    };

    const changePage = (page) => {
        let newPage = page;
        // Find next page
        if (isNaN(page)) {
            newPage = {
                next: activePage + 1,
                back: activePage - 1
            }[page];
        }

        if (newPage < 1) newPage = 1;
        if (newPage > lastPage) newPage = lastPage;

        // Pass next page to callback
        onChange && onChange(newPage);
    };
    const goBack = () => changePage('back');
    const goForward = () => changePage('next');

    const pages = createPages();

    return (
        <nav className={ wrapperClassName }>
            <div className={ className } >

                <div className={ itemClass } >
                    <a onClick={ goBack } className={ linkClass } >
                        <span className="-vis-hidden">&laquo;</span>
                        <span className="-sr-only">Previous</span>
                    </a>
                </div>

                { pages.map(({ page, eltClass, callback }) => (
                    <div key={ page } className={ eltClass } >
                        <a onClick={ callback } className={ linkClass } >
                            { page }
                        </a>
                    </div>
                )) }

                <div className={ itemClass } >
                    <a onClick={ goForward } className={ linkClass } >
                        <span className="-vis-hidden" aria-hidden="true">&raquo;</span>
                        <span className="-sr-only">Next</span>
                    </a>
                </div>

                <span className="gds-pagination__page-indicator" />

            </div>
        </nav>
    );
};

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
