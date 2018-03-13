import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import generateUID from '../utils/generateUID';
import charCodes from '../../constants/charCodes';

class Avatar extends Component {
    constructor() {
        super();
        this.uid = generateUID(this);
    }

    render() {
        const {
            open,
            menuCallback,
            optionCallback,
            username,
            img,
            menuOptions,
            className,
            style
        } = this.props;

        const rootClass = cx('gds-avatar', className, {
            'gds-avatar--menu-open': open
        });

        const regionId = `Avatar-region-${this.uid}`;
        const labelId = `Avatar-label-${this.uid}`;

        return (
            <div
                aria-controls={regionId}
                aria-expanded={open}
                aria-label={`${open ? 'Close' : 'Open'} menu options`}
                aria-pressed={open}
                className={rootClass}
                id={labelId}
                onClick={menuCallback}
                onKeyPress={event => {
                    const { type, charCode } = event;
                    if (
                        type === 'keypress' &&
                        (charCode === charCodes.SPACEBAR || charCode === charCodes.ENTER)
                    ) {
                        event.preventDefault();
                        menuCallback();
                    }
                }}
                role="button"
                style={style}
                tabIndex={0}>
                {img ? (
                    <div className="gds-avatar__image">
                        <img src={img} height="100%" alt={username} />
                    </div>
                ) : (
                    <div className="gds-avatar__image -text-center -text-tr-cap">
                        {username && username.slice(0, 1)}
                    </div>
                )}
                {menuOptions && (
                    <nav aria-labelledby={labelId} className="gds-avatar__menu" id={regionId}>
                        <ul className="gds-avatar__menu-list">
                            <li className="gds-avatar__menu-list-item -color-tx-lt-5 -ellipsis -p-h-3 -p-v-2">
                                {username}
                            </li>
                            <li className="gds-avatar__menu-list-divider" />
                            {menuOptions.map((o, i) => {
                                const _optionCallback = event => {
                                    const { type, charCode } = event;

                                    // NOTE: we can avoid keypress check if the design system
                                    // uses buttons instead of divs. Buttons currently require
                                    // additional styles to avoid breaking layout
                                    if (
                                        type === 'keypress' &&
                                        (charCode === 32 || charCode === 13)
                                    ) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        optionCallback(o.path);
                                    } else if (type === 'click') {
                                        optionCallback(o.path);
                                    }
                                };

                                return (
                                    <li
                                        key={`menu-item-${i}`}
                                        className="gds-avatar__menu-list-item -ellipsis">
                                        <div
                                            role="button"
                                            tabIndex={open ? 0 : -1}
                                            className="gds-avatar__menu-list-link"
                                            onClick={_optionCallback}
                                            onKeyPress={_optionCallback}>
                                            {o.name}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                )}
            </div>
        );
    }
}

Avatar.displayName = 'Avatar';

Avatar.defaultProps = {
    open: false,
    menuCallback: null,
    optionCallback: null,
    username: '',
    img: '',
    menuOptions: [],
    className: '',
    style: {}
};

Avatar.propTypes = {
    open: PropTypes.bool,
    menuCallback: PropTypes.func,
    optionCallback: PropTypes.func,
    username: PropTypes.string,
    img: PropTypes.string,
    menuOptions: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Avatar;
