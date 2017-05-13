"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Well = function Well(_ref) {
    var text = _ref.text,
        option = _ref.option,
        _ref$button = _ref.button,
        button = _ref$button === undefined ? false : _ref$button,
        callback = _ref.callback;


    var wellClasses = "gds-well gds-well--" + option,
        buttonClasses = "gds-well__button gds-well__button--" + option;

    return _react2.default.createElement(
        "div",
        { className: wellClasses },
        _react2.default.createElement(
            "p",
            { className: "gds-well__text" },
            text
        ),
        button && callback && _react2.default.createElement("button", { className: buttonClasses, onClick: callback })
    );
};

Well.defaultProps = {
    text: null,
    option: null,
    button: false,
    callback: null
};

Well.propTypes = {
    text: _react.PropTypes.string,
    option: _react.PropTypes.string,
    button: _react.PropTypes.bool,
    callback: _react.PropTypes.func
};

exports.default = Well;