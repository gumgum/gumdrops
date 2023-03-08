import React from 'react';

import MultiSelect from '../../components/molecules/MultiSelect';

import mdx from './MultiSelect.mdx';

const optionsA = [
    {
        name: 'Lassie',
        value: 1,
        selected: true
    },
    {
        name: 'Snoopy',
        value: 2,
        selected: true
    },
    {
        name: 'Toto',
        value: 3,
        selected: false
    },
    {
        name: 'Brian Griffin',
        value: 3,
        selected: false
    }
];

const optionsB = [
    {
        name: 'All Pets',
        value: 0,
        selected: false
    },
    {
        name: 'Dogs',
        value: 1,
        selected: false,
        options: [
            {
                name: 'Lassie',
                value: 1,
                selected: true
            },
            {
                name: 'Snoopy',
                value: 2,
                selected: true
            },
            {
                name: 'Toto',
                value: 3,
                selected: false
            },
            {
                name: 'Brian Griffin',
                value: 3,
                selected: false
            }
        ]
    },
    {
        name: 'Cats',
        value: 'cats',
        selected: false,
        options: [
            {
                name: 'Grumpy Cat',
                value: 1,
                selected: true
            },
            {
                name: 'Lil Bub',
                value: 2,
                selected: true
            },
            {
                name: 'Hello Kitty',
                value: 3,
                selected: false
            }
        ]
    }
];

const sizeOptions = ['', 'xs', 'sm'];

export default {
    title: 'Molecules/MultiSelect',
    component: MultiSelect,
    parameters: {
        docs: {
            page: mdx
        }
    },
    argTypes: {
        placeholder: { control: 'text' },
        onChange: 'change',
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        }
    }
};

// class MultiSelectOptions extends Component {
//     static propTypes = {
//         options: PropTypes.array
//     };

//     state = {
//         options: this.props.options
//     };

//     static getDerivedStateFromProps(props) {
//         return {
//             options: props.options
//         };
//     }

//     handleChange = newOptions => {
//         this.setState({
//             options: newOptions
//         });
//     };

//     render() {
//         return (
//             <MultiSelect
//                 placeholder={text('Placeholder', 'Select an option')}
//                 size={optionalSelect('Size', sizeOptions, '')}
//                 onChange={this.handleChange}
//                 options={this.state.options}
//                 className={text('className', '')}
//             />
//         );
//     }
// }

const Template = args => {
    return (
        <MultiSelect
            {...args}
            // onChange={() => console.log('changed')}
        />
    );
};

export const Default = Template.bind({});
export const Nested = Template.bind({});

Default.args = {
    options: optionsA,
    placeholder: 'Select an option'
};

Nested.args = {
    options: optionsB,
    placeholder: 'Select an option'
};
