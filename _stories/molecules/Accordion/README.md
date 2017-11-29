The `<Accordion>` component is a collapsible container for holding related elements. Nest `<AccordionItem>` components inside `<Accordion>` for each drawer. Nest `<AccordionItemContent>` in each `<AccordionItem>` if you would like to display listed information within an open `<AccordionItem>`. Each `<Accordion>` related component accepts a className and otherProps so you are able to further customize the component.

*Accordion example*:

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
</Accordion>

```
