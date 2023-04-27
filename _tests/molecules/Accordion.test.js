/**
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import React from 'react';
import Accordion from '../../components/molecules/Accordion';
import AccordionItem from '../../components/atoms/AccordionItem';

const defaultProps = {
    label: 'Check Me',
    size: 'sm',
    className: 'custom-class',
    style: { width: 140 }
};

test('Expect <Accordion> to render properly', () => {
    const tree = renderer
        .create(
            <Accordion {...defaultProps}>
                <AccordionItem label="Accordion Item 1" />
                <AccordionItem label="Accordion Item 2" />
                <AccordionItem label="Accordion Item 3" />
            </Accordion>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('Expect <Accordion> to render expanded', () => {
    const props = {
        ...defaultProps,
        initialAllOpen: true
    };

    const component = (
        <Accordion {...props}>
            <AccordionItem label="Accordion Item 1" />
            <AccordionItem label="Accordion Item 2" />
            <AccordionItem label="Accordion Item 3" />
        </Accordion>
    );
    render(component);

    expect(document.querySelectorAll('.gds-accordion__item--active').length).toBe(3);
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});

test('Expect <Accordion> to render locked', () => {
    const component = (
        <Accordion>
            <AccordionItem label="Accordion Item 1" isLocked />
            <AccordionItem label="Accordion Item 2" isLocked />
            <AccordionItem label="Accordion Item 3" isLocked />
        </Accordion>
    );
    render(component);

    expect(document.querySelectorAll('.gds-accordion__item-icon').length).toBe(0);
    expect(renderer.create(component).toJSON()).toMatchSnapshot();
});
