# MultiSelect

The `<MultiSelect>` component can be used when you need a select component to support multiple options simultaneously.

The state of the multi-select is handled by the parent component. An `onChange` prop handler is provided that will be called with the updated list of options whenever there's a change.

Multi-select also supports nested options [See Nested Options](#nested-options). When a parent option is selected, all children will be selected. If all children are selected, the parent will be selected too.

**NOTE**: This is a controlled component, so don't forget to pass the updated props to `MultiSelect` to see the changes. [See Example](#example)

## Props

| Prop        | Type       | Required | Description                                                                             |
| ----------- | ---------- | -------- | --------------------------------------------------------------------------------------- |
| options     | `Array`    | `True`   | The select options that will make up the dropdown menu. [See Options](#options)         |
| onChange    | `Function` |          | Change handler will be called with the updated list of `option` based on user selection |
| placeholder | `String`   |          | Text that appears before any options are selected                                       |
| size        | `String`   |          | Size that determines the scale of the UI elements                                       |
| className   | `String`   |          | Additional classes to apply to the outermost element                                    |

## Options

Options determine the construction of the multi-select menu. It takes an `Array` of `Objects` with the following shape:

```javascript
{
    name: 'John', // label displayed next to the checkbox
    value: 'john', // value associated with the option
    selected: true // current selected state
}
```

Here's an example of a possible set of options:

```javascript
const people = [
    {
        name: 'John',
        value: 'john',
        selected: true
    },
    {
        name: 'Sam',
        value: 'sam',
        selected: false
    },
    {
        name: 'Jane',
        value: 'jane',
        selected: true
    },
    {
        name: 'Sara',
        value: 'sara',
        selected: false
    }
];
```

### Nested Options

You may also have nested options. Here's an example:

```javascript
const pets = [
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
            }
        ]
    }
];
```

## Example

```javascript
import MultiSelect from 'gumdrops/MultiSelect';
import pets from './pets';

class MyComponent extends Component {
    state = {
        options: pets
    };

    handleChange = newOptions => {
        this.setState({
            options: newOptions
        });
    };

    render() {
        return (
            <MultiSelect
                className="cool-options"
                onChange={this.handleChange}
                options={this.state.options}
                size="md"
            />
        );
    }
}
```
