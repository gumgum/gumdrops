The `<Accordion>` component is a collapsible container for holding related elements. Nest `<AccordionItem>` components inside `<Accordion>` for each drawer. Nest `<AccordionItemContent>` in each `<AccordionItem>` if you would like to display listed information within an open `<AccordionItem>`. Each `<Accordion>` related component accepts a className and otherProps so you are able to further customize the component.

## Accordion Props

The following props may be passed to configure the `<Accordion/>`:

| name           | type      | description                                                                             | Required |
| -------------- | --------- | --------------------------------------------------------------------------------------- | -------- |
| children       | `Node`    | Children should be `<AccordionItem>`                                                    | Yes      |
| context        | `String`  | Indicate the context of the Accordion. One of `dark`, `white`, or `undefined`           |          |
| initialAllOpen | `Boolean` | Indicate if all `<AccordionItem>` children should be opened or closed on initial mount. |          |
| size           | `String`  | Indicate the size of the Accordion. One of `sm` or `undefined`                          |          |

## AccordionItem Props

The following props may be passed to configure the individual `<AccordionItem />` components:

| name     | type      | description                                                                       |
| -------- | --------- | --------------------------------------------------------------------------------- |
| context  | `String`  | Indicate the context of the AccordionItem. One of `dark`, `white`, or `undefined` |
| isOpen   | `Boolean` | Indicate if the item should be opened or closed on initial mount.                 |
| isLocked | `Boolean` | Indicate if the item should be locked open or closed and ignore user interaction  |
| label    | `String`  | The text label for an item                                                        |
| size     | `String`  | Indicate the size of the AccordionItem. One of `sm` or `undefined`                |

## Examples

You can use `<Accordion>` to display any information that you pass in, such as:

```
<Accordion>
    <AccordionItem label="Controls">
        <FormGroup>
            <FormGroupLabel text="Name" />
            <TextInput name="name" />
        </FormGroup>
    </AccordionItem>
</Accordion>
```

You can also use `<Accordion>` to display information in a list form, in the case you want to list items in rows. Example:

```
<Accordion>
    <AccordionItem label="Settings">
        <AccordionItemContent>
            <Column md="6">
                Setting 1
            </Column>
            <Column md=6>
                <Button>Save</Button>
            </Column>
        </AccordionItemContent>
        <AccordionItemContent>
            <Column md="6">
                Setting 2
            </Column>
            <Column md=6>
                <Button>Save</Button>
            </Column>
        </AccordionItemContent>
    </AccordionItem>
</Accordion>
```

## Keyboard Accessibility

When an accordion is in focus you can toggle it expanded/collapsed with the spacebar or enter keys.
