import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import Button from '../../../components/atoms/Button';
import Modal from '../../../components/molecules/Modal';
import ModalForm from '../../../components/atoms/ModalForm';
import ModalHeader from '../../../components/atoms/ModalHeader';
import ModalBody from '../../../components/atoms/ModalBody';
import ModalFooter from '../../../components/atoms/ModalFooter';

const component = () => {
    const submitAction = action('Submit form');

    const formSubmit = e => {
        e.preventDefault();
        submitAction();
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

export default [readme, component];
