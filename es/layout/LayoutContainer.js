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

var LayoutContainer = function LayoutContainer(_ref) {
    var className = _ref.className,
        fullWidth = _ref.fullWidth,
        children = _ref.children,
        props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'fullWidth', 'children']);
    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
            className: 'gds-layout__container ' + (fullWidth ? 'gds-layout__container–full-width' : '') + ' ' + className
        }, props),
        children
    );
};

LayoutContainer.defaultProps = {
    className: '',
    fullWidth: false
};

exports.default = LayoutContainer;