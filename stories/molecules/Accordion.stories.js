import Accordion from '../../components/molecules/Accordion';
import AccordionItem from '../../components/atoms/AccordionItem';
import AccordionItemContent from '../../components/atoms/AccordionItemContent';

const sizeOptions = ['', 'sm'];
const contextOptions = ['', 'dark', 'white'];

export default {
    title: 'Molecules/Accordion',
    component: Accordion,
    subcomponents: { AccordionItem, AccordionItemContent },
    argTypes: {
        size: {
            options: sizeOptions,
            control: { type: 'select' }
        },
        context: {
            options: contextOptions,
            control: { type: 'select' }
        }
    }
};

const Template = args => {
    return (
        <Accordion {...args}>
            <AccordionItem label="I'm locked open" isLocked isOpen>
                <AccordionItemContent>Locked Content</AccordionItemContent>
            </AccordionItem>
            <AccordionItem label="Item Label 1">
                <AccordionItemContent>Content 1</AccordionItemContent>
            </AccordionItem>
            <AccordionItem label="Item Label 2">
                <AccordionItemContent>Content 2</AccordionItemContent>
            </AccordionItem>
            <AccordionItem label="Item Label 3">
                <AccordionItemContent>Content 3</AccordionItemContent>
                <Accordion>
                    <AccordionItem label="Nested Item">
                        <AccordionItemContent>Nested Content</AccordionItemContent>
                    </AccordionItem>
                </Accordion>
            </AccordionItem>
        </Accordion>
    );
};

export const Default = Template.bind({});
Default.parameters = { controls: { exclude: ['children'] } };
