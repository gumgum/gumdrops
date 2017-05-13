'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(props) {
    var _props$open = props.open,
        open = _props$open === undefined ? false : _props$open,
        callback = props.callback,
        username = props.username,
        img = props.img,
        menuOptions = props.menuOptions;


    return _react2.default.createElement(
        'div',
        { className: 'gds-avatar ' + (open && 'gds-avatar--menu-open'), onClick: callback },
        img ? _react2.default.createElement(
            'div',
            { className: 'gds-avatar__image' },
            _react2.default.createElement('img', { src: img, height: '100%', alt: username })
        ) : _react2.default.createElement(
            'div',
            { className: 'gds-avatar__image -text-center -text-tr-cap' },
            username && username.slice(0, 1)
        ),
        callback && menuOptions && _react2.default.createElement(
            'div',
            { className: 'gds-avatar__menu' },
            _react2.default.createElement(
                'ul',
                { className: 'gds-avatar__menu-list' },
                _react2.default.createElement(
                    'li',
                    { className: 'gds-avatar__menu-list-item -color-tx-lt-5 -ellipsis -p-h-3 -p-v-2' },
                    username
                ),
                _react2.default.createElement('li', { className: 'gds-avatar__menu-list-divider' }),
                menuOptions.map(function (o) {
                    return _react2.default.createElement(
                        'li',
                        { key: Math.random(), className: 'gds-avatar__menu-list-item -ellipsis' },
                        o.action ? _react2.default.createElement(
                            'div',
                            { className: 'gds-avatar__menu-list-link', onClick: o.action },
                            o.name
                        ) : _react2.default.createElement(
                            _reactRouter.Link,
                            { to: o.path, className: 'gds-avatar__menu-list-link', href: '#' },
                            o.name
                        )
                    );
                })
            )
        )
    );
};

Avatar.defaultProps = {
    open: false,
    callback: null,
    username: null,
    img: null,
    menuOptions: null
};

Avatar.propTypes = {
    open: _react.PropTypes.bool,
    callback: _react.PropTypes.func,
    username: _react.PropTypes.string,
    img: _react.PropTypes.string,
    menuOptions: _react.PropTypes.array
};

exports.default = Avatar;