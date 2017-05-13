'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingDots = function LoadingDots(_ref) {
    var _ref$whiteDots = _ref.whiteDots,
        whiteDots = _ref$whiteDots === undefined ? false : _ref$whiteDots,
        size = _ref.size,
        style = _ref.style;


    var loadingDotClasses = 'gds-loading__dot';
    whiteDots && (loadingDotClasses = loadingDotClasses + ' gds-loading__dot--white');
    size && (loadingDotClasses = loadingDotClasses + ' gds-loading__dot--' + size);

    return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
            'div',
            { className: 'gds-loading' },
            _react2.default.createElement('div', { className: loadingDotClasses })
        )
    );
};

LoadingDots.defaultProps = {
    whiteDots: false,
    size: null,
    style: null
};

exports.default = LoadingDots;