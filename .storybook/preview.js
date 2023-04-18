import './index.scss';

export default {
    parameters: {
        options: {
            storySort: (a, b) =>
                a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })
        }
    }
};

export const argTypes = { className: { control: 'text' }, style: { control: 'object' } };
