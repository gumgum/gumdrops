'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardImage = function CardImage(_ref) {
    var url = _ref.url,
        option = _ref.option,
        size = _ref.size,
        className = _ref.className,
        style = _ref.style;


    var baseClass = 'gds-card__img-container',
        optionClass = option ? baseClass + '--' + option : '',
        sizeClass = size ? baseClass + '--' + size : '';

    var classNames = baseClass + ' ' + optionClass + ' ' + sizeClass + ' ' + className;

    return _react2.default.createElement(
        'div',
        { className: classNames, style: style },
        _react2.default.createElement('img', { className: 'gds-card__img', src: url }),
        _react2.default.createElement('div', { className: 'gds-card__img-helper' })
    );
};

CardImage.defaultProps = {
    option: 'top'
};

CardImage.propTypes = {
    url: _react.PropTypes.string.isRequired,
    option: _react.PropTypes.string,
    size: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
};

exports.default = CardImage;