import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Pagination from './Pagination';
import Select from '../atoms/Select';

const TablePaginationFooter = ({
    totalPages,
    totalElements,
    activePage,
    size,
    handlePageChange,
    handleSizeChange,
    sizeOptions,
}) => {
    const showFooter = !!totalPages;
    const showPagination = totalPages && totalPages > 1;
    const minSize = parseInt(sizeOptions[0].value);
    const showSizeOptions = handleSizeChange && totalElements > minSize;

    return (
        <Fragment>
            {showFooter && (
                <div className="gds-flex -m-a-1-xs gds-flex--justify-between -p-t-3 gds-card__block--divide-top -color-bd-lt-1">
                    <p className="gds-text--body-xs gds-flex__item -m-h-1-xs -m-t-2 -m-b-1 -m-l-4">
                        {totalElements} Result{totalElements > 1 && 's'}
                    </p>
                    {showPagination && (
                        <div className="gds-flex__item -m-b-3">
                            <Pagination
                                activePage={activePage}
                                lastPage={totalPages}
                                boundaries
                                justify
                                onChange={handlePageChange}
                                size="xs"
                            />
                        </div>
                    )}
                    <div className="gds-form-group gds-flex__item gds-flex gds-flex--justify-end -m-h-1-xs -m-b-3 -m-r-4">
                        {showSizeOptions && (
                            <Select
                                name="size"
                                size="xs"
                                style={{ maxWidth: '70px' }}
                                options={sizeOptions}
                                value={!size ? minSize : size}
                                onChange={handleSizeChange}
                            />
                        )}
                    </div>
                </div>
            )}
        </Fragment>
    );
};

TablePaginationFooter.propTypes = {
    totalPages: PropTypes.number.isRequired,
    totalElements: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    handleSizeChange: PropTypes.func,
    activePage: PropTypes.number,
    size: PropTypes.number,
    sizeOptions: PropTypes.array.isRequired,
};

TablePaginationFooter.defaultProps = {
    activePage: 1,
    size: 10,
    totalPages: 0,
    totalElements: 0,
    sizeOptions: [
        { name: '10', value: '10' },
        { name: '20', value: '20' },
        { name: '50', value: '50' },
        { name: '100', value: '100' },
    ],
};

export default TablePaginationFooter;
