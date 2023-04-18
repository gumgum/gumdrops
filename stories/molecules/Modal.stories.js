import Button from '../../components/atoms/Button';
import Modal from '../../components/molecules/Modal';
import ModalForm from '../../components/atoms/ModalForm';
import ModalHeader from '../../components/atoms/ModalHeader';
import ModalBody from '../../components/atoms/ModalBody';
import ModalFooter from '../../components/atoms/ModalFooter';

export default {
    title: 'Molecules/Modal',
    component: Modal,
    subcomponents: { ModalForm, ModalHeader, ModalBody, ModalFooter },
    parameters: {
        actions: {
            handles: ['click', '.gds-button--default'],
            handles: ['click', '.gds-button--primary'],
            handles: ['click', '.gds-modal__overlay'],
            handles: ['click', 'gds-modal__close-button']
        }
    },
    argTypes: {
        overlayClassName: { control: 'text' },
        md: { control: 'text' },
        isOpen: { control: 'boolean' },
        shouldCloseOnOverlayClick: { control: 'boolean' },
        shouldCloseOnEsc: { control: 'boolean' },
        onClose: 'Close modal from overlay'
    }
};

const Template = args => {
    return (
        <Modal {...args}>
            {/* Begin arbitrary content */}
            <ModalForm
                onSubmit={e => {
                    e.preventDefault();
                    console.log('close');
                }}>
                <ModalHeader title="A sample title" onClose={() => console.log('Close modal')} />
                <ModalBody>
                    <p>Toggle the modal in the knobs section.</p>
                </ModalBody>
                <ModalFooter>
                    <Button size="sm" onClick={console.log('Cancel')}>
                        Cancel
                    </Button>
                    <Button type="submit" context="primary" size="sm">
                        Save Changes
                    </Button>
                </ModalFooter>
            </ModalForm>
            {/* End arbitrary content */}
        </Modal>
    );
};

export const Default = Template.bind({});

Default.args = {
    isOpen: true
};

Default.parameters = { controls: { exclude: ['children'] } };
