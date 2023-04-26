import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import Tooltip from './Tooltip';

const TooltipIcon = ({
    className,
    iconClassName,
    label,
    buttonStyles,
    prefix,
    icon,
    fontSize,
    context,
    position,
    ...rest
}) => (
    <button type="button" className={className} style={buttonStyles} label={label} {...rest}>
        <Tooltip text={label} position={position}>
            <Icon prefix={prefix} icon={icon} fontSize={fontSize} className={iconClassName} context={context}/>
        </Tooltip>
    </button>
);

TooltipIcon.propTypes = {
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    label: PropTypes.string,
    buttonStyles: PropTypes.string,
    prefix: PropTypes.string,
    icon: PropTypes.string,
    fontSize: PropTypes.number,
    context: PropTypes.string,
    position: PropTypes.oneOf([
        'top',
        'top-right',
        'top-left',
        'right',
        'left',
        'bottom-right',
        'bottom',
        'bottom-left',
    ]),
};

TooltipIcon.defaultProps = {
    className: '-m-h-1',
    iconClassName: '',
    fontSize: 13,
    position: 'left',
    label: '',
    prefix: 'fas',
    icon: 'plus',
    context: 'primary',
    buttonStyles: {
        padding: 0,
        border: 'none',
        font: 'inherit',
        color: 'inherit',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    }
};

export default TooltipIcon;
