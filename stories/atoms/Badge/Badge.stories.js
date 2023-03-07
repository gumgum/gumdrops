import React from 'react';

import Badge from '../../../components/atoms/Badge';

const options = [
    '', 'inverse', 'success', 'success-inverse', 'info', 'info-inverse', 'warning', 'warning-inverse', 'danger', 'danger-inverse'
];

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters :{
    docs: {
        description: {
            component: 'The `<Badge>` component is a numerical indicator of associated items. For a simple colored circle without a number inside, pass in the "empty" prop. If empty, it will not display any text within the badge.'
        }
    }
  },
  argTypes: {
    text: { control: 'text'},
    empty: {control: 'boolean'},
    context: {
      options,
      control: { type: 'select' }
    },
  },
};

const Template = (args) => 
    <Badge { ...args} />
;
  
  export const Default = Template.bind({});
  Default.args = {
    context: '',
    text: '2'
  };

// const options = {
//     'No Value': '',
//     inverse: 'inverse',
//     success: 'success',
//     'success-inverse': 'success-inverse',
//     info: 'info',
//     'info-inverse': 'info-inverse',
//     warning: 'warning',
//     'warning-inverse': 'warning-inverse',
//     danger: 'danger',
//     'danger-inverse': 'danger-inverse'
// };

// export default {
//     component: Badge,
//     title: 'Atoms/Badge',
//     decorators: [withKnobs],
//     parameters: {
//         docs: { page: mdx }
//     }
// };

