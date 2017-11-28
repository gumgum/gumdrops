import React from 'react';
import { text, object, select } from '@storybook/addon-knobs';
import Tooltip from '../../../components/atoms/Tooltip';
import Button from '../../../components/atoms/Button';
import readme from './README.md';

const tooltipPositions = {
    top: 'top',
    'top-right': 'top-right',
    right: 'right',
    'bottom-right': 'bottom-right',
    bottom: 'bottom',
    'bottom-left': 'bottom-left',
    left: 'left',
    'top-left': 'top-left'
};

const tooltipContexts = {
    '': 'default',
    success: 'success',
    warning: 'warning',
    info: 'info',
    danger: 'danger'
};

const tooltipSizeOptions = {
    lg: 'lg',
    '': 'default'
};

const tooltipVariationsOptions = {
    always: 'always',
    'no-animate': 'no-animate',
    bounce: 'bounce',
    '': 'default'
};

const component = () => (
    <Tooltip
        text={ text('Text', 'I am a tooltip!') }
        position={ select('Position', tooltipPositions) }
        context={ select('Context', tooltipContexts, '') }
        size={ select('Size', tooltipSizeOptions, '') }
        className={ text('ClassName', '') }
        style={ object('Styles', {}) }
        variations={ select('Variations', tooltipVariationsOptions, '') }
    >
        <Button context="default">
            Button with Tooltip
        </Button>
    </Tooltip>
);

export default [readme, component];
