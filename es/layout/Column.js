'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = function Column(options) {
    var xs = options.xs,
        sm = options.sm,
        md = options.md,
        lg = options.lg,
        xl = options.xl,
        className = options.className,
        children = options.children,
        props = (0, _objectWithoutProperties3.default)(options, ['xs', 'sm', 'md', 'lg', 'xl', 'className', 'children']);

    var sizes = { xs: xs, sm: sm, md: md, lg: lg, xl: xl };
    var classList = (0, _keys2.default)(sizes).reduce(function (list, breakpoint) {
        var size = sizes[breakpoint];
        return list.concat(size ? 'gds-layout__column--' + breakpoint + '-' + size : []);
    }, []).concat(className || []);
    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: classList.join(' ') }, props),
        children
    );
};

Column.defaultProps = {
    md: 12
};

Column.propTypes = {
    children: _react.PropTypes.node,
    xs: _react.PropTypes.number,
    sm: _react.PropTypes.number,
    md: _react.PropTypes.number,
    lg: _react.PropTypes.number,
    xl: _react.PropTypes.number
};

exports.default = Column;