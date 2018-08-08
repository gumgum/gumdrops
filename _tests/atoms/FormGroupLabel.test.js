/* globals mount */
import React from 'react';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';

const defaultProps = {
    text: 'Label Baby Jr',
    className: 'my-classy-class'
};

describe('Expect <FormGroupLabel>', () => {
    it('to render', () => {
        const wrapper = mount(<FormGroupLabel {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
