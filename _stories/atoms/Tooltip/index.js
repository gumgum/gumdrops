import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
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
    'top-left': 'top-left',
    '': 'No Value',
};

const tooltipContexts = {
    success: 'success',
    warning: 'warning',
    info: 'info',
    danger: 'danger',
    '': 'No Value',
};

const tooltipSizeOptions = {
    lg: 'lg',
    '': 'No Value',
};

const tooltipVariationsOptions = {
    always: 'always',
    'no-animate': 'no-animate',
    bounce: 'bounce',
    '': 'No Value',
};

const component = () => (
    <Tooltip
        text={text('Text', 'I am a tooltip!')}
        position={optionalSelect('Position', tooltipPositions)}
        context={optionalSelect('Context', tooltipContexts, '')}
        size={optionalSelect('Size', tooltipSizeOptions, '')}
        variations={optionalSelect('Variations', tooltipVariationsOptions, '')}
        className={text('ClassName', '')}
        style={object('Styles', {})}>
        <Button>Button with Tooltip</Button>
    </Tooltip>
);

export default [readme, component];
