import React from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

const Avatar = ({
    open,
    menuCallback,
    optionCallback,
    username,
    img,
    menuOptions,
    className,
    style
}) => {
    const baseClass = 'gds-avatar',
        openClasses = (open) ? `${baseClass}--menu-open` : '';

    const classNames = trimString(`${baseClass} ${openClasses} ${className}`);

    return (
        <div className={ classNames } style={ style } onClick={ menuCallback }>
            { img ?
                <div className="gds-avatar__image">
                    <img src={ img } height="100%" alt={ username } />
                </div>
                :
                <div className="gds-avatar__image -text-center -text-tr-cap">
                    { username && username.slice(0, 1) }
                </div>
            }
            { menuOptions &&
                <div className="gds-avatar__menu">
                    <ul className="gds-avatar__menu-list">
                        <li className="gds-avatar__menu-list-item -color-tx-lt-5 -ellipsis -p-h-3 -p-v-2">{ username }</li>
                        <li className="gds-avatar__menu-list-divider" />
                        {
                            menuOptions.map((o) => {
                                const _optionCallback = () => optionCallback(o.path);

                                return (
                                    <li key={ Math.random() } className="gds-avatar__menu-list-item -ellipsis">
                                        <div className="gds-avatar__menu-list-link" onClick={ _optionCallback }>{ o.name }</div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
};

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
