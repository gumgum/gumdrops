import renderer from 'react-test-renderer';
import React from 'react';
import AccordionItem from '../../components/atoms/AccordionItem';

test('Expect <AccordionItem> to render properly', () => {
    const props = {
        className: 'foo',
        label: 'Foo!',
        size: 'xs',
        context: 'danger'
    };
    const tree = renderer
        .create(
            <AccordionItem {...props}>
                <div>foo</div>
            </AccordionItem>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
