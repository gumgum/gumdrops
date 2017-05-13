'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(_ref) {
    var label = _ref.label,
        _ref$centered = _ref.centered,
        centered = _ref$centered === undefined ? false : _ref$centered,
        _ref$collapsible = _ref.collapsible,
        collapsible = _ref$collapsible === undefined ? false : _ref$collapsible,
        open = _ref.open,
        callback = _ref.callback;


    var classes = 'gds-divider';
    centered && (classes = classes + ' gds-divider--centered');
    collapsible && (classes = classes + ' gds-button--collapsible');

    var arrowClasses = open ? 'gds-divider__arrow' : 'gds-divider__arrow gds-divider__arrow--collapse';

    return _react2.default.createElement(
        'div',
        { className: classes, onClick: callback },
        centered && _react2.default.createElement('span', { className: 'gds-divider__line' }),
        _react2.default.createElement(
            'span',
            { className: 'gds-divider__label gds-form-group__label' },
            label
        ),
        _react2.default.createElement('span', { className: 'gds-divider__line' }),
        collapsible && _react2.default.createElement('span', { className: arrowClasses })
    );
};

Divider.defaultProps = {
    label: null,
    centered: false,
    collapsible: false,
    open: null,
    callback: null
};

exports.default = Divider;