import React from 'react';
import { withKnobs, text, select, number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../components/utils/optionalSelect';

import mdx from './TooltipIcon.mdx';
import Icon from '../../../components/atoms/Icon';
import Tooltip from '../../../components/atoms/Tooltip';
import TooltipIcon from '../../../components/atoms/TooltipIcon';

const contextOptions = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    'No Value': ''
};

const tooltipPositions = {
    top: 'top',
    'top-right': 'top-right',
    right: 'right',
    'bottom-right': 'bottom-right',
    bottom: 'bottom',
    'bottom-left': 'bottom-left',
    left: 'left',
    'top-left': 'top-left',
    'No Value': ''
};

export default {
    component: TooltipIcon,
    title: 'Atoms/TooltipIcon',
    decorators: [withKnobs],
    subcomponents: { Tooltip, Icon },
    parameters: {
        docs: { page: mdx }
    }
};

export const Default = () => (
    <TooltipIcon
        className={text('ClassName')}
        buttonStyles={object('Button Styles')}
        iconClassName={text('Icon ClassName', '')}
        icon={text('Icon', 'edit')}
        label={text('Label', 'This is a tooltip !')}
        context={optionalSelect('Context', contextOptions, '')}
        prefix={select('Prefix', ['fas', 'far', 'fal', 'fab'], 'fas')}
        fontSize={number('Font Size', 40)}
        position={optionalSelect('Position', tooltipPositions, 'right')}
        onClick={action('Click on the icon')}
    />
);
