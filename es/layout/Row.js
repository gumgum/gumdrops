'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
    var className = _ref.className,
        children = _ref.children,
        props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children']);
    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: 'gds-layout__row ' + className }, props),
        children
    );
};

Row.defaultProps = {
    className: ''
};

Row.propTypes = {
    children: _react.PropTypes.node,
    className: _react.PropTypes.string
};

exports.default = Row;