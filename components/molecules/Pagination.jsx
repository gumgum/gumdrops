import React, { PropTypes } from 'react';
import createRange from '../../utils/createRange';

const activeClass = 'gds-pagination__page-item--active';
const itemClassName = 'gds-pagination__page-item';
const linkClassName = 'gds-pagination__page-link';
const fixedItemClass = `${itemClassName} ${itemClassName}--fixed`;
const fixedLinkClass = `${linkClassName} ${linkClassName}--fixed`;

class Pagination extends React.Component {
    constructor({ totalItems, currentPage, itemsPerPage, onChange, justify }) {
        super();
        const totalPages = this.getTotalPages(totalItems, itemsPerPage);
        const { itemClass, linkClass } = this.setContentClasses(justify);
        this.state = {
            totalItems,
            totalPages,
            currentPage,
            itemsPerPage,
            itemClass,
            linkClass
        };
        this.callback = onChange;
    }

    componentWillReceiveProps({ totalItems, currentPage, itemsPerPage, justify }) {
        const totalPages = this.getTotalPages(totalItems, itemsPerPage);
        const { itemClass, linkClass } = this.setContentClasses(justify);
        this.setState({
            totalItems,
            totalPages,
            currentPage,
            itemsPerPage,
            itemClass,
            linkClass
        });
    }

    setContentClasses = (justify) => ({
        itemClass: justify ? itemClassName : fixedItemClass,
        linkClass: justify ? linkClassName : fixedLinkClass
    })

    getTotalPages = (totalItems, itemsPerPage) =>
        Math.ceil(parseInt(totalItems) / itemsPerPage)

    createPages = () => {
        const { boundaries } = this.props;
        const { totalPages, currentPage } = this.state;
        // Beyond this number of results, the indicator doesn't work
        const displayLimit = 7;
        // Number of pages adjacent to the center
        const neighbors = boundaries ? 2 : 3;
        // Set limits on the first sectioni of pages
        const firstSetEnd = boundaries
            ? displayLimit - 2
            : displayLimit - 1;
        // Set limits on the last section of pages
        const lastSetStart = totalPages > displayLimit
            ? (totalPages - firstSetEnd)
            : 1;

        // Generate pages not in first or last sections
        const getMiddleRange = () => {
            const lowerLimit = currentPage - neighbors;
            const higherLimit = currentPage + neighbors;
            return createRange(lowerLimit, higherLimit);
        };
        // Add first and last pages to current set
        const addBoundaries = (range, type) => {
            const limits = () => ({
                'last': [...range.slice(0, -1), totalPages],
                'first': [1, ...range.slice(-(displayLimit - 1))]
            })[type] || [1, ...range, totalPages];
            return boundaries ? limits() : range;
        };

        // Total number of pages is below display limit
        const isBelowLimit = totalPages <= displayLimit;
        // Current page is within first section
        const isFirstSet = !isBelowLimit && (currentPage <= firstSetEnd);
        // Current page is within last section
        const isLastSet = !isFirstSet && (currentPage > lastSetStart);

        // Set of pages when total is below display limit
        const shortSet = isBelowLimit && createRange(1, totalPages);
        // First set of pages
        const firstSet = isFirstSet && addBoundaries(createRange(1, displayLimit), 'last');
        // Last set of pages
        const lastSet = isLastSet && addBoundaries(createRange(lastSetStart, totalPages), 'first');

        return shortSet || firstSet || lastSet || addBoundaries(getMiddleRange());
    }

    changePage = (page = 1) => {
        const {
            totalPages,
            currentPage,
            itemsPerPage
        } = this.state;

        // Find next page
        const newPage = {
            next: currentPage + 1,
            back: currentPage - 1
        }[page] || page;

        const notNumber = isNaN(newPage);
        // Do nothing
        if (notNumber || newPage < 1 || newPage > totalPages) return;

        // Find next offset
        const offset = ((newPage * itemsPerPage) - itemsPerPage) || 0;

        // Pass next page and offset to callback
        this.callback && this.callback({
            offset,
            page: newPage
        });
    }

    goBack = () => this.changePage('back')

    goForward = () => this.changePage('next')

    // Generate a page element
    createPageElement = (page) => {
        const { currentPage, itemClass, linkClass } = this.state;
        const { justify } = this.props;
        const isActive = page === currentPage;
        const eltClass = `${itemClass} ${isActive ? activeClass : ''}`;
        const changePage = () => this.changePage(page);
        return (
            <div key={ page } className={ eltClass } >
                <a onClick={ changePage } className={ linkClass } >
                    { page }
                </a>
            </div>
        );
    }

    render() {
        const {
            totalPages,
            currentPage,
            itemClass,
            linkClass
        } = this.state;
        const { size, justify } = this.props;
        if (totalPages <= 1) return null;
        const pages = this.createPages();
        const sizeClass = size ? `gds-pagination--${size}` : '';
        const widthClass = justify ? '' : 'gds-pagination--fixed';
        const className = `gds-pagination ${sizeClass} gds-pagination--mobile-arrows ${widthClass}`;

        return (
            <nav>
                <div className={ className } >

                    <div className={ itemClass } >
                        <a onClick={ this.goBack } className={ linkClass } >
                            <span className="-vis-hidden">&laquo;</span>
                            <span className="-sr-only">Previous</span>
                        </a>
                    </div>

                    { pages.map(this.createPageElement) }

                    <div className={ itemClass } >
                        <a onClick={ this.goForward } className={ linkClass } >
                            <span className="-vis-hidden" aria-hidden="true">&raquo;</span>
                            <span className="-sr-only">Next</span>
                        </a>
                    </div>

                    <span className="gds-pagination__page-indicator" />

                </div>
            </nav>
        );

    }

}

Pagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number,
    itemsPerPage: PropTypes.number,
    boundaries: PropTypes.bool,
    justify: PropTypes.bool,
    size: PropTypes.string
};

Pagination.defaultProps = {
    currentPage: 1,
    itemsPerPage: 10,
    boundaries: false,
    justify: false
};

export default Pagination;
