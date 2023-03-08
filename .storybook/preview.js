import './index.scss';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: [],
            locales: ''
        }
    }
};

export const argTypes = { className: { control: 'text' }, style: { control: 'object' } };
