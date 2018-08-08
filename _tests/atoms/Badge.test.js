/* globals mount */
import React from 'react';
import Badge from '../../components/atoms/Badge';

describe('Expect <Badge>', () => {
    it('to render', () => {
        const props = {
            text: 'This is text',
            context: 'inverse',
            className: 'foo-class',
            style: {
                width: '1000px'
            }
        };

        const wrapper = mount(<Badge {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render properly with empty', () => {
        const props = {
            text: 'Ignored text',
            context: 'inverse',
            className: 'foo-class',
            empty: true,
            style: {
                width: '1000px'
            }
        };

        const wrapper = mount(<Badge {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
