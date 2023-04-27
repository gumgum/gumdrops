import renderer from 'react-test-renderer';
import React from 'react';
import FormGroupTextHelp from '../../components/atoms/FormGroupTextHelp';

test('Expect <FormGroupTextHelp> to render properly', () => {
    const defaultProps = {
        text: 'Oh no, errors!',
        className: 'much-error'
    };
    const tree = renderer.create(<FormGroupTextHelp {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
});
