import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, object, boolean, select } from '@kadira/storybook-addon-knobs';

import * as options from '../../constants/options';
import AvatarMenu from '../../constants/AvatarMenu';
import Button from '../../components/atoms/Button';
import ButtonGroup from '../../components/atoms/ButtonGroup';

// Old format (DEPRECATED)
import Avatar from '../../components/molecules/Avatar';
import Card from '../../components/molecules/Card';
import { cardOptions } from '../../constants/molecules/card.js';
import CardBlock from '../../components/molecules/CardBlock';
import { cardBlockOptions } from '../../constants/molecules/cardBlock.js';
import CardImage from '../../components/molecules/CardImage';
import { cardImageOptions } from '../../constants/molecules/cardImage.js';
import Divider from '../../components/molecules/Divider';
import Modal from '../../components/molecules/Modal';
import ModalHeader from '../../components/atoms/ModalHeader';
import ModalBody from '../../components/atoms/ModalBody';
import ModalFooter from '../../components/atoms/ModalFooter';
import ModalForm from '../../components/atoms/ModalForm';
import MultiSelect from '../../components/molecules/MultiSelect';
import multiSelectOptions from '../../constants/molecules/multiSelectOptions';
import Toggle from '../../components/molecules/Toggle';
import Well from '../../components/molecules/Well';

// New format
import Checkbox from './Checkbox';
import FormGroup from './FormGroup';
import SearchMultiSelect from './SearchMultiSelect';
import Pagination from './Pagination';

const stories = storiesOf('Molecules', module);
stories.addDecorator(withKnobs);

stories
    // AVATAR
    .addWithInfo(
        'Avatar',
        `The \`<Avatar>\` component can display a user's photo, a brand's logo, or a flag icon for internationalization. The avatar can include a dropdown menu, which is meant to be shown when the avatar is clicked on.
        If the avatar is expandable, pass in a callback function that sets the state, and include the state in your component. You must also pass in an array of objects of names and paths for the menu. (see ../constants/AvatarMenu.js)
        \n
        Example:
        ...
        state {
            avatarOpen: false
        }
        const toggleAvatar = () => {
            this.setState({ open: !this.state.toggleAvatar });
        };
        return(
            <Avatar
                open={ this.state.avatarOpen }
                callback={ this.toggleAvatar }
                menuOptions={ AvatarMenu }
            />
        )
        ...
        `,
        () => (
            <Avatar
                open={ boolean('Open', false) }
                callback={ action('avatar_menu_toggled') }
                username={ text('Username', 'Michele') }
                img={ text('Image url', '') }
                menuOptions={ AvatarMenu }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
            />
        ),
        { inline: true, propTables: [Avatar]}
    )
    // CARD
    .addWithInfo(
        'Card',
        `The \`<Card>\` component is a standard container component, designed to hold groups of related information. Cards are usually arranged in a uniform grid.
        `,
        () => (
            <div>
                <Card
                    option={ select('Option', cardOptions.option, undefined) }
                    size={ select('Size', cardOptions.size, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                >
                    <CardBlock>
                        <p>Content in a plain Card.</p>
                    </CardBlock>
                </Card>
                <Card
                    option={ select('Option', cardOptions.option, undefined) }
                    size={ select('Size', cardOptions.size, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                >
                    <CardBlock>
                        <p>Content in a plain CardBlock.</p>
                    </CardBlock>
                    <CardBlock
                        option="divide-top"
                    >
                        <p>Content in a CardBlock with a top divider.</p>
                    </CardBlock>
                </Card>
                <Card
                    option={ select('Option', cardOptions.option, undefined) }
                    size={ select('Size', cardOptions.size, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                >
                    <CardImage
                        url="https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png"
                    />
                    <CardBlock
                        option="divide-top"
                    >
                        <p>Card with a CardImage and a CardBlock.</p>
                    </CardBlock>
                </Card>
            </div>
        ),
        { inline: true, propTables: [Card]}
    )
    // CARD BLOCK
    .addWithInfo(
        'CardBlock',
        `The \`<CardBlock>\` component should be nested within a \`<Card>\` component to wrap the card's content into distinct chunks. Use the \`option\` prop to add a divider line on the top or bottom of the \`<CardBlock>\` component, to make the separation more clear.
        `,
        () => (
            <Card>
                <CardBlock
                    option={ select('Option', cardBlockOptions.option, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                >
                    <p>Content in a CardBlock.</p>
                </CardBlock>
            </Card>
        ),
        { inline: true, propTables: [Card]}
    )
    // CARD IMAGE
    .addWithInfo(
        'CardImage',
        `The \`<CardImage>\` component is used to append images inside of a \`<Card>\`. It can add an image to the top or bottom of the card.
        `,
        () => (
            <Card>
                <CardImage
                    url={ text('Image URL', 'https://c.gumgum.com/ads/com/gumgum/mantii/internal_mobile_inscreen_test/full_canvas/01/mantii_fullscreen.hyperesources/girl@2x.png') }
                    option={ select('Option', cardImageOptions.option, undefined) }
                    size={ select('Size', cardImageOptions.size, undefined) }
                    className={ text('ClassName', '') }
                    style={ object('Style', {}) }
                />
            </Card>
        ),
        { inline: true, propTables: [CardImage]}
    )
    // CHECKBOX
    .addWithInfo(...Checkbox)

    // DIVIDER
    .addWithInfo(
        'Divider',
        `The standard  \`<Divider>\` component is used to separate distinct segments of content.
        If the divider is collapsible, pass in a callback function that sets the state, and include the state in your component.
        \n
        \`Example:\`
        ...
        state {
            open: false
        }
        const toggle = () => {
            this.setState({ open: !this.state.open });
        };
        return(
            <div>
                <Divider
                    label="Collapsible Label"
                    collapsible
                    open={ this.state.open }
                    callback= { this.toggle }
                />
                this.state.open && <div>Content to show when toggled open</div>
            </div>
        )
        ...
        `,
        () => (
            <Divider
                label={ text('Label', 'Default Divider') }
                centered={ boolean('Centered', false) }
                collapsible={ boolean('Collapsible', false) }
                open={ boolean('Open', false) }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
                callback={ action('divider_toggled') }
            />
        ),
        { inline: true, propTables: [Divider]}
    )
    .addWithInfo(...FormGroup)
    // MULTI SELECT
    .addWithInfo(
        'Multi Select',
        `The \`<MultiSelect>\` component can be used when you need a select component to support multiple options simultaneously. The state on the multi-select is handed by the parent component, the callback passed into should also take care of updating the dropdown options. Example:

    state {
        options: [ { name: 'Some Name', value: 'some_value', selected: false}, ... ]
    }
    const handleMultiselectChange = (index, value, selected) => {
        // Update your options here
        const newOptions = ...;
        this.setState({ options: newOptions });
    };
    return(
        <MultiSelect
           placeholder="Select an option"
           options={ this.state.options }
           callback= { this.handleMultiselectChange }
        />
    )
Options format:

    [
        {
            name: 'Option 1',
            value: 'option_1',
            selected: false
        },
        {
            name: 'Option 2',
            value: 'option_2',
            selected: true
        },
        ...
    ]

The callback receives 3 paramenters: \`index\` {Number} position on the array of the option changed, \`value\` {String} of the option change, \`selected\` {Boolean} new value of the option. \n
Therefore, your callback should look like this:

    function callback(index, value, selected){
         ...
    }

If you want to add an option that "checks" all the other ones. You can create a new option with a value of \`SELECT_ALL\`, and in your callback handler you can check for that option:\n

    if (value === 'SELECT_ALL' && selected) {
        // Checks all the options as true
        return someOptions.map( o => ({ ...o, selected: true }));
    }

\`NOTE\`: This is a controlled component, don't forget to pass the updated props to the MultiSelect to see the changes.`,
        () => (
            <MultiSelect
                placeholder={ text('Placeholder', 'Select an option') }
                size={ select('Size', options.multiSelectOptions, '') }
                callback={ action('multi_select_changed') }
                options={ multiSelectOptions }
                className={ text('className', '') }
            />
        ),
        { inline: true, propTables: [MultiSelect] }
    )
    // MODAL
    .addWithInfo(
        'Modal',
        `The <Modal> component can contain any arbitrary content.
        Additionally, the following atom components are optional and can be used to wrap content inside the appropriate DS modal classeNames:

        <ModalForm>
            Renders a form to be used inside a modal. Allows scrolling inside ModalBody.
            This component must be a direct child of Modal, and must contain the other Modal components or any arbitrary content.
            Can receive any props. Using onSubmit is recomended.

        <ModalHeader>
            Renders DS modal header. Self closing.
            Optional props:
            - title: renders the modal title
            - onClose: renders the close button

        <ModalBody>
            Renders DS modal content.
            Has optional className and style
            Requires a children component.

        <ModalFooter>
            Renders DS footer content.
            Has optional className and style
            Requires a children component.
        \n
        Example:
        ...
        state {
            isModalOpen: false
        }
        const toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });
        return(
            <Modal onClose={ this.toggleModal } isOpen={ this.state.isModalOpen } md="6" >
                {/* Begin arbitrary content */}
                <ModalForm onSubmit={ this.submitForm } >
                    <ModalHeader title="A sample title" onClose={ this.toggleModal } />
                    <ModalBody>
                        <p>Toggle the modal in the knobs section.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button size="sm" onClick={ this.toggleModal } >Cancel</Button>
                        <Button context="primary" size="sm" onClick={ this.toggleModal } >Save Changes</Button>
                    </ModalFooter>
                </ModalForm>
                {/* End arbitrary content */}
            </Modal>
        )
        ...
        `,
        () => {
            const submitAction = action('Submit form');
            const formSubmit = e => {
                e.preventDefault();
                submitAction();
            };
            return (<Modal
                onClose={ action('Close modal from overlay') }
                isOpen={ boolean('Open', true) }
                md={ text('Column size', '6') }
                className={ text('Container ClassName', '') }
                overlayClassName={ text('Overlay ClassName', '') }
                style={ object('Style', {}) }
            >
                {/* Begin arbitrary content */}
                <ModalForm onSubmit={ formSubmit } >
                    <ModalHeader
                        title={ text('title', 'A sample title') }
                        onClose={ action('Close modal') }
                    />
                    <ModalBody>
                        <p>Toggle the modal in the knobs section.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button size="sm" onClick={  action('Cancel') } >Cancel</Button>
                        <Button type="submit" context="primary" size="sm" >Save Changes</Button>
                    </ModalFooter>
                </ModalForm>
                {/* End arbitrary content */}
            </Modal>);
        },
        { inline: true, propTables: [Modal, ModalHeader, ModalBody, ModalFooter]}
    )
    .addWithInfo(...Pagination)
    .addWithInfo(...SearchMultiSelect)
    .addWithInfo(
        'Toggle',
        ` \`<Toggle>\` components come in two flavors: radio and checkbox. Each one behaves in the same manner as their respective standard input type.
        `,
        () => (
            <Toggle
                label={ text('Label', 'Default Toggle') }
                type={ select('Type', { checkbox: 'checkbox', radio: 'radio' }, 'checkbox') }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
            />
        ),
        { inline: true, propTables: [Toggle]}
    )
    // WELL
    .addWithInfo(
        'Well',
        `The \`<Well> component can be used for alert messages or other user notifications. If you pass in  \`button \` and a callback function, the component will call that function when a user clicks on the x.
        `,
        () => (
            <Well
                text={ text('Label', 'Default Well') }
                context={ select('Context', options.wellContexts, undefined) }
                button={ boolean('Button', false) }
                callback={ action('well_closed') }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
            />
        ),
        { inline: true, propTables: [Well]}
    )
;
