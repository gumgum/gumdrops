import { selectV2 as select } from '@storybook/addon-knobs';

/**

NOTE: This exists because there's no good way to
return undefined/null/false from a select knob:

https://github.com/storybook-eol/storybook-addon-knobs/issues/73
https://github.com/storybook-eol/storybook-addon-knobs/issues/85

if you want an optional select item -- such as for a
component prop -- pass an empty string as the value.
This will then return undefined for the falsy value
so the prop isn't included in the component:

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    '': 'No Value'
};

<Foo size={optionalSelect('Size', sizeOptions)} />

*/

export function optionalSelect() {
    return select.apply(null, arguments) || undefined;
}
