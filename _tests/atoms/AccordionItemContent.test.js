import renderer from 'react-test-renderer';
import React from 'react';
import AccordionItemContent from '../../components/atoms/AccordionItemContent';

test('Expect <AccordionItemContent> to render properly', () => {
    const props = {
        className: 'foo',
        size: 'xs',
        context: 'danger'
    };
    const tree = renderer
        .create(
            <AccordionItemContent {...props}>
                <div>foo</div>
            </AccordionItemContent>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
