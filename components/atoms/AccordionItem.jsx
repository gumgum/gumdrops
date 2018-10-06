import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import generateUID from '../utils/generateUID';
import charCodes from '../../constants/charCodes';

class AccordionItem extends Component {
    uid = generateUID(this);

    state = {
        isOpen: false
    };

    toggleOpen = event => {
        const { type, charCode } = event;
        event.stopPropagation(); // don't want nested accordions to propagate events

        if (
            type === 'keypress' &&
            (charCode === charCodes.SPACEBAR || charCode === charCodes.ENTER)
        ) {
            event.preventDefault(); // prevents page scroll from space key
            this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
        } else if (type === 'click') {
            this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
        }
    };

    render() {
        const { size, context, className, children, label } = this.props;
        const { isOpen } = this.state;

        const rootClass = cx('gds-accordion__item', className, {
            [`gds-accordion__item--${context}`]: context,
            'gds-accordion__item--active': isOpen
        });

        const titleClass = cx('gds-accordion__item-title', {
            [`gds-accordion__item-title--${size}`]: size
        });

        const iconClass = cx('gds-accordion__item-icon', {
            [`gds-accordion__item-icon--${size}`]: size
        });

        const childClass = cx('gds-accordion__child-items', {
            [`gds-accordion__child-items--${size}`]: size
        });

        const newChildren = React.Children.map(children, child => {
            return React.cloneElement(child, {
                context,
                size
            });
        });

        const regionId = `AccordionItem-region-${this.uid}`;
        const labelId = `AccordionItem-label-${this.uid}`;

        return (
            <li
                aria-pressed={isOpen}
                aria-controls={regionId}
                aria-expanded={isOpen}
                className={rootClass}
                onClick={this.toggleOpen}
                onKeyPress={this.toggleOpen}
                role="button"
                tabIndex={0}>
                <h4 id={labelId} className={titleClass}>
                    {label}
                </h4>
                <span className={iconClass} />
                <ul
                    aria-labelledby={labelId}
                    aria-hidden={!isOpen}
                    className={childClass}
                    id={regionId}
                    role="region">
                    {newChildren}
                </ul>
            </li>
        );
    }
}

AccordionItem.displayName = 'AccordionItem';

AccordionItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    context: PropTypes.string
};

export default AccordionItem;
