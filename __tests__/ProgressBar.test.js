import React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from '../src/stories/ProgressBar';

describe('ProgressBar', () => {
    it('renders with defaults', () => {
        const { container } = render(<ProgressBar value={42} />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-progress-bar gds-progress-bar--primary"
              data-value="42"
            />
        `);
    });

    it('renders default striped', () => {
        const { container } = render(<ProgressBar value={42} isStriped />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-progress-bar gds-progress-bar--striped-primary"
              data-value="42"
            />
        `);
    });

    it('renders secondary', () => {
        const { container } = render(<ProgressBar value={42} color="secondary" />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-progress-bar gds-progress-bar--secondary"
              data-value="42"
            />
        `);
    });

    it('renders secondary striped', () => {
        const { container } = render(<ProgressBar value={42} color="secondary" isStriped />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-progress-bar gds-progress-bar--striped-secondary"
              data-value="42"
            />
        `);
    });

    it('renders progress colors', () => {
        const { container } = render(<ProgressBar value={42} useProgressColors />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <div
              class="gds-progress-bar gds-progress-bar--primary gds-progress-bar--value-colors"
              data-value="42"
            />
        `);
    });
});
