The `<Modal>` component can contain any arbitrary content.

Additionally, the following atom components are optional and can be used to wrap content inside the appropriate DS modal classeNames:

`<ModalForm>`
    Renders a form to be used inside a modal. Allows scrolling inside ModalBody.
    This component must be a direct child of Modal, and must contain the other Modal components or any arbitrary content.
    Can receive any props. Using onSubmit is recomended.

`<ModalHeader>`
    Renders DS modal header. Self closing.
    Optional props:
    - title: renders the modal title
    - onClose: renders the close button

`<ModalBody>`
    Renders DS modal content.
    Has optional className and style
    Requires a children component.

`<ModalFooter>`
    Renders DS footer content.
    Has optional className and style
    Requires a children component.

**Example**:
```
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
```