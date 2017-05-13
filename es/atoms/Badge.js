'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = function Badge(_ref) {
    var text = _ref.text,
        option = _ref.option,
        _ref$empty = _ref.empty,
        empty = _ref$empty === undefined ? false : _ref$empty;


    var classes = empty ? 'gds-badge gds-badge--empty' : 'gds-badge';
    option && (classes = classes + ' gds-badge--' + option);

    return _react2.default.createElement(
        'span',
        { className: classes },
        !empty && text
    );
};

Badge.defaultProps = {
    text: null,
    option: null,
    empty: false
};

exports.default = Badge;