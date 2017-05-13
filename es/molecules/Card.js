'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(_ref) {
    var option = _ref.option,
        size = _ref.size,
        className = _ref.className,
        style = _ref.style,
        children = _ref.children;


    var baseClass = 'gds-card',
        optionClass = option ? baseClass + '--' + option : '',
        sizeClass = size ? baseClass + '--' + size : '';

    var classNames = baseClass + ' ' + optionClass + ' ' + sizeClass + ' ' + className;

    return _react2.default.createElement(
        'div',
        { className: classNames, style: style },
        children
    );
};

Card.propTypes = {
    option: _react.PropTypes.string,
    size: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    children: _react.PropTypes.node
};

exports.default = Card;