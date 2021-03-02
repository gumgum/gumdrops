import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from 'stories/Tooltip';

describe('Tooltip', () => {
    it('renders the default component', () => {
        const { container } = render(<Tooltip text="My Tooltip">Test Tooltip</Tooltip>);
        screen.getByText('Test Tooltip');
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-tooltip gds-tooltip--md gds-tooltip--top"
              data-tooltip="My Tooltip"
            >
              Test Tooltip
            </div>
        `);
    });

    it('renders with custom variation and position', () => {
        const { container } = render(
            <Tooltip text="My Tooltip" position="bottom-right" variation="bounce">
                Test Tooltip
            </Tooltip>
        );
        screen.getByText('Test Tooltip');
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-tooltip gds-tooltip--md gds-tooltip--bounce gds-tooltip--bottom-right"
              data-tooltip="My Tooltip"
            >
              Test Tooltip
            </div>
        `);
    });
});
