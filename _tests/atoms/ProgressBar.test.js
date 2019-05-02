/* globals shallow */
import React from 'react';
import ProgressBar from '../../components/atoms/ProgressBar';

const defaultProps = {
    isSecondary: false,
    isStriped: false,
    useProgressColors: false,
    size: 'sm',
    value: 50,
    className: 'foo-class'
};

describe('Expect <ProgressBar>', () => {
    it('to render', () => {
        const wrapper = shallow(<ProgressBar {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to renders as secondary', () => {
        const props = {
            ...defaultProps,
            isSecondary: true
        };
        const wrapper = shallow(<ProgressBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to renders as striped', () => {
        const props = {
            ...defaultProps,
            isStriped: true
        };
        const wrapper = shallow(<ProgressBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render colorful', () => {
        const props = {
            ...defaultProps,
            useProgressColors: true
        };
        const wrapper = shallow(<ProgressBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
