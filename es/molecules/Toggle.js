'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function Toggle(_ref) {
    var _ref$type = _ref.type,
        type = _ref$type === undefined ? 'checkbox' : _ref$type,
        label = _ref.label;


    return _react2.default.createElement(
        'div',
        { className: 'gds-form-group__toggleswitch' },
        _react2.default.createElement(
            'label',
            { className: 'gds-form-group__toggleswitch-label' },
            _react2.default.createElement('input', { className: 'gds-form-group__toggleswitch-input', type: type, value: '' }),
            _react2.default.createElement('span', { className: 'gds-form-group__toggleswitch-indicator' }),
            label
        )
    );
};

Toggle.defaultProps = {
    type: 'checkbox',
    label: null
};

Toggle.propTypes = {
    type: _react.PropTypes.string,
    label: _react.PropTypes.string
};

exports.default = Toggle;