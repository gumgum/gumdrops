import React from 'react';

import { action } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import FormGroup from '../../components/molecules/FormGroup';
import Checkbox from '../../components/molecules/Checkbox';
// import FormGroupLabel from '../../components/atoms/FormGroupLabel';

const title = 'Checkbox';

const description = `&nbsp;
\n
The \`<Checkbox>\` component can be wrapped with the \`<FormGroup>\` component. It can be used as a controlled or uncontrolled component.\n
\`NOTE\`: \`name\`, \`checked\`, \`defaultChecked\` and \`onChange\` are not listed as a props, but you can pass them in, as well as any other prop that you may want to add. The only drawback is that there is not validation for unlisted props.
&nbsp; \n
&nbsp; \n
##### Uncontrolled example:
\`\`\`
_handleSubmit = (e) => {
    e.preventDefault();
    const { parrots, otherName, otherName2 } = e.target.elements;
    console.log(parrots.checked);
};

render() {
    return (
        <form onSubmit={ this._handleSubmit }>
            <FormGroup>
                { /* Pass defaultChecked if you want the input to be checked initially */ }
                <Checkbox
                    name="parrots"
                    label="party parrots"
                    defaultChecked
                />
            </FormGroup>
        </form>
    );
}
\`\`\`
&nbsp; \n
##### Controlled example:
\`\`\`
state {
    parrots: false
}
_handleCheckboxChange = ({ target }) => {
    const { name, checked } = target;

    this.setState({
        [name]: checked
    });
}
return(
    <FormGroup>
        <Checkbox
            name="parrots"
            label="party parrots"
            checked={ this.state.parrots }
            onChange={ this._handleCheckboxChange }
        />
    </FormGroup>
)
\`\`\`
`;

const component = () => (
    <FormGroup>
        <Checkbox
            label={ text('Label', 'party parrots') }
            onChange={ action('checkbox_checked') }
        />
    </FormGroup>
);

const options = {
    inline: true,
    propTables: [Checkbox]
};

export default [title, description, component, options];
