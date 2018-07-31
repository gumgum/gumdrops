/* globals mount */
import React from 'react';
import FormGroupTextHelp from '../../components/atoms/FormGroupTextHelp';

const defaultProps = {
    text: 'Oh no, errors!',
    className: 'much-error'
};

describe('Expect <FormGroupTextHelp>', () => {
    it('to render', () => {
        const wrapper = mount(<FormGroupTextHelp {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
