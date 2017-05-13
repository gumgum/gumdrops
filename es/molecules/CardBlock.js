'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardBlock = function CardBlock(_ref) {
    var option = _ref.option,
        className = _ref.className,
        style = _ref.style,
        children = _ref.children;


    var baseClass = 'gds-card__block',
        optionClass = option ? baseClass + '--' + option : '';

    var classNames = baseClass + ' ' + optionClass + ' ' + className;

    return _react2.default.createElement(
        'div',
        { className: classNames, style: style },
        children
    );
};

exports.default = CardBlock;