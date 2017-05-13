'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var _ref$option = _ref.option,
        option = _ref$option === undefined ? 'default' : _ref$option,
        size = _ref.size,
        callback = _ref.callback,
        className = _ref.className,
        style = _ref.style,
        children = _ref.children;


    var baseClass = 'gds-button',
        optionClass = option ? baseClass + '--' + option : '',
        sizeClass = size ? baseClass + '--' + size : '';

    var classNames = baseClass + ' ' + optionClass + ' ' + sizeClass + ' ' + className;

    return _react2.default.createElement(
        'button',
        { className: classNames, style: style, onClick: callback },
        children
    );
};

Button.defaultProps = {
    option: 'default',
    size: null,
    callback: null,
    className: '',
    style: null
};

Button.propTypes = {
    option: _react.PropTypes.string,
    size: _react.PropTypes.string,
    callback: _react.PropTypes.func,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    children: _react.PropTypes.node
};

exports.default = Button;