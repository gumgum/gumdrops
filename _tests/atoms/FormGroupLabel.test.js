import renderer from 'react-test-renderer';
import React from 'react';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';

test('Expect <FormGroupLabel> to render properly', () => {
    const defaultProps = {
        text: 'Label Baby Jr',
        className: 'my-classy-class'
    };
    const tree = renderer.create(<FormGroupLabel {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});
