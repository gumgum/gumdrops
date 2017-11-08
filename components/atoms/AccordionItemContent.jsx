//vendor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionItemContent extends Component {

    handleClick = (e) => {
        e.stopPropagation();
    }

    render() {
        const { className, context, size, children, ...otherProps } = this.props;
        const baseClass = 'gds-accordion__child-item';
        const contextClass =  (context) ? `${baseClass}--${context}` : '';
        const classNames = `${baseClass} ${contextClass} ${className}`;

        const titleBaseClass = 'gds-accordion__child-item-title';
        const titleSizeClass = (size) ? `${titleBaseClass}--${size}` : '';
        const titleClass = `${titleBaseClass} ${titleSizeClass}`;

        return (
            <li className={ classNames } onClick={ this.handleClick } { ...otherProps }>
                <h4 className={ titleClass }>{ children }</h4>
            </li>
        );
    }
}

AccordionItemContent.defaultProps = {
    className: '',
    context: ''
};

AccordionItemContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    context: PropTypes.string,
    size: PropTypes.string
};

export default AccordionItemContent;
