import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trimString from '../utils/trimString';

class AccordionItem extends Component {
    state = {
        open: false
    }

    toggleOpen = () => {
        this.setState(({ open }) => ({ open: !open }));
        console.log('test');
    }

    render() {
        const { size, context, className, children } = this.props;
        const baseClass = 'gds-accordion__item';
        const contextClass = (context) ? `${baseClass}--${context}` : '';
        const activeClass = this.state.open ? `${baseClass}--active` : '';
        const classNames = trimString(`${baseClass} ${contextClass} ${activeClass} ${className}`);

        const titleBaseClass = 'gds-accordion__item-title';
        const titleSizeClass = (size) ? `${titleBaseClass}--${size}` : '';
        const titleClass = trimString(`${titleBaseClass} ${titleSizeClass}`);

        const iconBaseClass = 'gds-accordion__item-icon';
        const iconSizeClass = (size) ? `${iconBaseClass}--${size}` : '';
        const iconClass = trimString(`${iconBaseClass} ${iconSizeClass}`);

        const childBaseClass = 'gds-accordion__child-items';
        const childSizeClass = (size) ? `${childBaseClass}--${size}` : '';
        const childClass = trimString(`${childBaseClass} ${childSizeClass}`);

        const newChildren = React.Children.map(children, child => {
            return React.cloneElement(child, {
                context,
                size
            });
        });

        return (
            <li className={ classNames } onClick={ this.toggleOpen } >
                <h4 className={ titleClass }>{this.props.label}</h4>
                <i className={ iconClass } />
                <ul className={ childClass }>
                    { newChildren }
                </ul>
            </li>
        );
    }
}

AccordionItem.displayName = 'Accordion Item';

AccordionItem.defaultProps = {
    className: '',
    size: '',
    label: '',
    context: ''
};

AccordionItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    context: PropTypes.string
};

export default AccordionItem;
