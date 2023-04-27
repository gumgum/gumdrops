import mdx from './Ellipsis.mdx';

const options = [
    '',
    '-ellipsis',
    '-ellipsis--sm',
    '-ellipsis--md',
    '-ellipsis--lg',
    '-ellipsis--xl'
];

const divStyle = {
    width: '100%',
    height: '100px'
};

export default {
    title: 'Utilities/Ellipsis',
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        className: {
            options,
            control: { type: 'select' }
        },
        style: {
            control: { type: 'object' }
        }
    }
};

const Template = args => {
    return (
        <div style={divStyle} {...args}>
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
            of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
            of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
            of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text
            A bunch of text A bunch of text A bunch of text A bunch of text A bunch of text A bunch
            of text A bunch of text A bunch of text A bunch of text
        </div>
    );
};

export const Default = Template.bind({});

Default.args = {
    className: '-ellipsis'
};
