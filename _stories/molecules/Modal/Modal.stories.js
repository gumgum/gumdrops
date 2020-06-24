import React from 'react';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import mdx from './Modal.mdx';
import Button from '../../../components/atoms/Button';
import Modal from '../../../components/molecules/Modal';
import ModalForm from '../../../components/atoms/ModalForm';
import ModalHeader from '../../../components/atoms/ModalHeader';
import ModalBody from '../../../components/atoms/ModalBody';
import ModalFooter from '../../../components/atoms/ModalFooter';

export default {
    component: Modal,
    title: 'Molecules/Modal',
    decorators: [withKnobs],
    parameters: {
        component: Modal,
        subcomponents: { ModalForm, ModalHeader, ModalBody, ModalFooter },
        docs: { page: mdx }
    }
};

export const Default = () => {
    const submitAction = action('Submit form');

    const formSubmit = e => {
        e.preventDefault();
        submitAction();
    };

    const sizeOptions = {
        sm: 'sm',
        'No Value': ''
    };

    return (
        <Modal
            onClose={action('Close modal from overlay')}
            isOpen={boolean('Open', true)}
            md={text('Column size', '6')}
            className={text('Container ClassName', '')}
            overlayClassName={text('Overlay ClassName', '')}
            style={object('Style', {})}>
            {/* Begin arbitrary content */}
            <ModalForm onSubmit={formSubmit}>
                <ModalHeader
                    title={text('title', 'A sample title')}
                    onClose={action('Close modal')}
                    size={optionalSelect('Size', sizeOptions, '')}
                />
                <ModalBody>
                    <p>Toggle the modal in the knobs section.</p>
                </ModalBody>
                <ModalFooter>
                    <Button size="sm" onClick={action('Cancel')}>
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
