import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// table components
import Header from './TableHeader';
import Heading from './TableHeading';
import Body from './TableBody';
import Row from './TableRow';
import Data from './TableData';
import Icon from '../atoms/Icon';
import { deprecateLog } from '../utils/deprecate';

const sortDirection = {
    ASC: 'asc',
    DESC: 'desc'
};

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            sortBy: {},
            expandable: {},
        };
        // a list of references to be used to animate the expandable content
        this._refs = {};
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            /* eslint-disable react/no-did-update-set-state */
            this.setState({
                data: this.props.data,
            });
        }
    }

    _sortCompareAlpha = (a, b, key) => {
        if (!a[key]) return -1;
        if (!b[key]) return 1;
        const textA = a[key].toUpperCase();
        const textB = b[key].toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    };

    _sortDescending({ key, sortCompareDesc }) {
        const data = [...this.props.data];
        const shouldSortByAlpha = typeof data[0][key] === 'string'; // assumes data consistency across array items

        const sortedData = sortCompareDesc
            ? data.sort(sortCompareDesc)
            : shouldSortByAlpha
              ? data.sort((a, b) => this._sortCompareAlpha(b, a, key))
              : data.sort((a, b) => b[key] - a[key]);

        this.setState({
            data: sortedData,
            sortBy: { key, direction: sortDirection.DESC }
        });
    }

    _sortAscending({ key, sortCompareAsc }) {
        const data = [...this.props.data];
        const shouldSortByAlpha = typeof data[0][key] === 'string'; // assumes data consistency across array items

        const sortedData = sortCompareAsc
            ? data.sort(sortCompareAsc)
            : shouldSortByAlpha
              ? data.sort((a, b) => this._sortCompareAlpha(a, b, key))
              : data.sort((a, b) => a[key] - b[key]);
        this.setState({
            data: sortedData,
            sortBy: { key, direction: sortDirection.ASC }
        });
    }

    _sortColumn = config => {
        const { sortBy: { direction, key: stateKey } } = this.state;
        const { key } = config;

        const shouldSortDesc = direction === sortDirection.ASC && key === stateKey;

        return shouldSortDesc ? this._sortDescending(config) : this._sortAscending(config);
    };

    _columnIsExpandable = column => {
        return typeof column.renderExpandableColumn === 'function';
    };

    _renderExpandableColumn = (column, rowData) => {
        return column.renderExpandableColumn.apply(this, [...this._getColumnData(column, rowData)])
    }

    _isColumnExpanded = columnIdentifier => {
        // if the column identifier has been expanded and the column identifier matches the current column identifier
        return this.state.expandable[columnIdentifier]?.expanded && columnIdentifier === this.state.expandable[columnIdentifier]?.columnIdentifier;
    }

    _shouldExpandColumnContent = (columnIdentifier, shouldExpand) => {
        // find the current expandable reference element
        const ref = this._refs[columnIdentifier];
        if (!ref) {
            return;
        }
        // animate the height of the expandable content, this is reversed if shouldExpand is false.
        const toFrom = [
            {
                height: `0px`,
            },
            {
                height: `${ref.scrollHeight}px`,
            }
        ];
        // perform the animation
        ref.animate(shouldExpand ? toFrom : toFrom.reverse(), {
            iterations: 1,
            duration: 250,
            easing: 'ease-in-out'
        }).onfinish = () => {
            // always set the height after finish to the last value on the animatable properties
            ref.style.height = toFrom[1].height;
        };
    };

    _getColumnData(column, rowData) {
        const isString = typeof column === 'string';
        const cellData = isString
            ? rowData[column]
            : rowData[column.key];
        return [
            cellData,
            column.key,
            rowData,
            column,
        ]
    }

    _getRowKey = (rowData, index) => {
        const { customRowKey } = this.props;
        return customRowKey && typeof rowData[customRowKey] !== 'undefined' ? rowData[customRowKey] : index;
    }

    _getColumnKey = (rowKey, suffix) => {
        return `row-${rowKey}-key-${suffix}`;
    }

    renderTableContent({
        columns,
        isStriped,
        isInverse,
        hasHeader,
        onRowClick,
        isSecondary,
    }) {
        const { sortBy, data } = this.state;
        return (
            <Fragment>
                {hasHeader && (
                    <Header>
                        <Row>
                            {columns.map((column, i) => {
                                const {
                                    sortCompareAsc,
                                    sortCompareDesc,
                                    disableSorting,
                                    onHeadingClick,
                                    headingProps = {}
                                } = column;

                                const reactKey = `row-${i}-key-${i}`;
                                const key = column.key || column;
                                const children = column.children || column;

                                // NOTE: onHeadingClick should be removed in the next major version
                                // Using "headingProps" will allow more complete customization
                                if (onHeadingClick) {
                                    deprecateLog(
                                        '`onHeadingClick` has been deprecated in favor of `headingProps`. Use `headingProps.onClick` instead. See https://github.com/gumgum/gumdrops/blob/master/_stories/molecules/Table/README.md#columns'
                                    );
                                }

                                const onClickFn = onHeadingClick || headingProps.onClick;

                                const onClickHeading = disableSorting
                                    ? onClickFn
                                    : event => {
                                          this._sortColumn({
                                              key,
                                              sortCompareAsc,
                                              sortCompareDesc
                                          });
                                          onClickFn && onClickFn(event);
                                      };

                                return (
                                    <Heading
                                        isSecondary={isSecondary}
                                        key={reactKey}
                                        onClick={onClickHeading}
                                        sortDirection={
                                            sortBy.key === key ? sortBy.direction : undefined
                                        }
                                        {...headingProps}>
                                        {children}
                                    </Heading>
                                );
                            })}
                        </Row>
                    </Header>
                )}
                <Body>
                    {data.map((rowData, i) => {
                        const rowKey = this._getRowKey(rowData, i);
                        return (
                            <React.Fragment key={`row-${rowKey}`}>
                                <Row
                                    className={onRowClick && '-cursor--pointer'}
                                    isInverse={isInverse}
                                    isStriped={isStriped}
                                    onClick={onRowClick && (() => onRowClick(rowData))}>
                                    {columns.map((column, k) => {
                                        // generate a column key based on the row key
                                        const columnKey = this._getColumnKey(rowKey, k);
                                        // generate a column identifier, this should be unique to the data not react keys
                                        // so the expandable section can move when sorting the data.
                                        const columnIdentifier = this._getColumnKey(rowKey, column.key || column);
                                        // check if the current column has a renderExpandableColumn method
                                        const hasExpandableColumn = this._columnIsExpandable(column);
                                        // if it does, render the custom Data element which will trigger the expand
                                        if (hasExpandableColumn) {
                                            const isExpanded = this._isColumnExpanded(columnIdentifier);
                                            return (<Data
                                                key={columnKey}
                                                onClick={() => {
                                                    const expanded = !this.state.expandable[columnIdentifier]?.expanded;
                                                    this.setState({
                                                        expandable: {
                                                            ...this.state.expandable,
                                                            ...Object.entries(this.state.expandable).reduce((acc, next) => ({
                                                                ...acc,
                                                                // reset all other expandable sections for this row so we only "show"
                                                                // one per row, all other rows will remain open if expanded already
                                                                [next[0]]: next[1].rowKey !== rowKey ? next[1] : {
                                                                    ...next[1],
                                                                    expanded: false,
                                                                },
                                                            }), {}),
                                                            [columnIdentifier]: {
                                                                columnIdentifier,
                                                                rowKey,
                                                                expanded,
                                                            },
                                                        },
                                                    }, () => this._shouldExpandColumnContent(columnIdentifier, expanded));
                                                }}
                                                className={`chevron-expander ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                                <Icon
                                                    icon={isExpanded ? 'chevron-up' : 'chevron-down'}
                                                    fontSize={22}
                                                    className="-cursor--pointer -color-tx-lt-4"
                                                />
                                            </Data>)
                                        }
                                        const decorator = column.dataCellDecorator;
                                        const columnData = this._getColumnData(column, rowData);
                                        return typeof decorator === 'function' ? (
                                            decorator.apply(this, [...columnData])
                                        ) : (
                                            <Data key={columnKey}>{columnData[0]}</Data>
                                        );
                                    })}
                                </Row>
                                {columns.some(this._columnIsExpandable) && <Row className="gds-table--expandable-row">
                                    <Data colSpan={columns.length}>
                                        {columns.map((column) => {
                                            const columnIdentifier = this._getColumnKey(rowKey, column.key || column);
                                            const isExpandable = this._columnIsExpandable(column);
                                            const isExpanded = this._isColumnExpanded(columnIdentifier);
                                            return (isExpandable ? <div
                                                key={columnIdentifier}
                                                className="gds-table--collapsible"
                                                ref={el => this._refs[columnIdentifier] = el} style={{
                                                    height: isExpanded ? 'auto' : '0px',
                                                }}>
                                                <div>
                                                    {this._renderExpandableColumn(column, rowData)}
                                                </div>
                                            </div> : null)
                                        })}
                                    </Data>
                                </Row>}
                            </React.Fragment>
                        );
                    })}
                </Body>
            </Fragment>
        );
    }

    renderTable() {
        const { data, className, children, size, isStriped, isInverse, columns } = this.props;
        return (
            <table
                className={cx('gds-table', className, {
                    [`gds-table--${size}`]: size,
                    ['gds-table--inverse']: isInverse,
                    ['gds-table--striped']: isStriped && !isInverse,
                    ['gds-table--inverse-striped']: isStriped && isInverse,
                    ['gds-table--expandable']: columns.some(this._columnIsExpandable),
                })}>
                {data ? this.renderTableContent(this.props) : children}
            </table>
        );
    }

    render() {
        const { isResponsive } = this.props;
        return isResponsive ? (
            <div className="gds-table--responsive">{this.renderTable()}</div>
        ) : (
            this.renderTable()
        );
    }
}

Table.propTypes = {
    // necessary for controlled tables
    /** An `Array` of `Objects` with simple key/value pairs. */
    data: function(props, propName, componentName) {
        if (props.data) {
            if (!Array.isArray(props.data)) {
                return new Error(
                    'Invalid prop `' +
                        propName +
                        '` supplied to' +
                        ' `' +
                        componentName +
                        '`, expected `array`.'
                );
            }
            for (let i = 0; i < props.data.length; i++) {
                if (typeof props.data[i] !== 'object') {
                    return new Error(
                        'Invalid prop `data[' +
                            i +
                            ']` supplied to' +
                            ' `' +
                            componentName +
                            '`, expected `object`.'
                    );
                } else if (props.customRowKey && typeof props.data[i][props.customRowKey] === 'undefined') {
                    return new Error(
                        'Invalid prop `data[' +
                            i +
                            ']` supplied to' +
                            ' `' +
                            componentName +
                            '`, expected an `object` with property `' +
                            props.customRowKey +
                            '`.'
                    );
                }
            }
        }
    },
    /** An `Array` of `Strings` identifying the keys from the `data` to be displayed in columns. Customization of columns can be made by providing an `Array` of `Objects`. Order of the columns in the table is determined by the order of the array */
    columns: PropTypes.arrayOf(
        PropTypes.oneOfType([
            // columns can be a simple array of strings representing the keys
            // or an object for customizations like unique titles, custom
            // ascending or descending sorts.
            PropTypes.string,
            // customizations
            PropTypes.shape({
                children: PropTypes.node,
                dataCellDecorator: PropTypes.func,
                disableSorting: PropTypes.bool,
                key: PropTypes.string,
                sortCompareAsc: PropTypes.func,
                sortCompareDesc: PropTypes.func,
                // NOTE: deprecated
                onHeadingClick: PropTypes.func,
                headingProps: PropTypes.object,
                /** when provided, this column will render a chevron which will expand content returned in the method */
                renderExpandableColumn: PropTypes.func,
                // callback: PropTypes.func,
                // A callback could be used to request sorted data from the server,
                // for instance paginated items sorted by data.
            })
        ])
    ),
    /** To render children in the `<Table>`. Use if you want to manually construct a table. */
    children: PropTypes.node,
    className: PropTypes.string,
    /** Should the table have a header? */
    hasHeader: PropTypes.bool,
    /** Should the table theme be inversed (dark)? */
    isInverse: PropTypes.bool,
    /** Should the table theme use the secondary style? */
    isSecondary: PropTypes.bool,
    /** Should the table use striped rows? */
    isStriped: PropTypes.bool,
    /** Should the table be allowed to scroll horizontally? */
    isResponsive: PropTypes.bool,
    /** Click handler for rows. Will be called with the data contained in the row as the first arg. */
    onRowClick: PropTypes.func,
    /** Column of the data to be used as key when creating `<Row>` elements. */
    customRowKey: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg', 'xs', 'xl'])
};

Table.defaultProps = {
    hasHeader: true
};

export default Table;
