import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Avatar = (props) => {

    const {
        open = false,
        callback,
        username,
        img,
        menuOptions,
        className,
        style
    } = props;

    const baseClass = 'gds-avatar',
        openClasses = (open) ? `${baseClass}--menu-open` : '';

    const classNames = `${baseClass} ${openClasses} ${className}`;

    return (
        <div className={ classNames } style={ style } onClick={ callback }>
            { img ?
                <div className="gds-avatar__image">
                    <img src={ img } height="100%" alt={ username } />
                </div>
                :
                <div className="gds-avatar__image -text-center -text-tr-cap">
                    { username && username.slice(0, 1) }
                </div>
            }
            { callback && menuOptions &&
                <div className="gds-avatar__menu">
                    <ul className="gds-avatar__menu-list">
                        <li className="gds-avatar__menu-list-item -color-tx-lt-5 -ellipsis -p-h-3 -p-v-2">{ username }</li>
                        <li className="gds-avatar__menu-list-divider" />
                        {
                            menuOptions.map((o) => (
                                <li key={ Math.random() } className="gds-avatar__menu-list-item -ellipsis">
                                    {
                                        o.action
                                        ? <div className="gds-avatar__menu-list-link" onClick={ o.action }>{ o.name }</div>
                                        : <Link to={ o.path } className="gds-avatar__menu-list-link" href="#">{ o.name }</Link>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    );
};

Avatar.defaultProps = {
    open: false,
    callback: null,
    username: null,
    img: null,
    menuOptions: null,
    className: '',
    style: {}
};

Avatar.propTypes = {
    open: PropTypes.bool,
    callback: PropTypes.func,
    username: PropTypes.string,
    img: PropTypes.string,
    menuOptions: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Avatar;
