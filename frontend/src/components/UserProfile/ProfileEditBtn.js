import React, {useState} from 'react';
import {Modal} from '../../context/Modal';
import EditUserForm from './EditProfileForm';

const EditUserFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Profile</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditUserForm />
                </Modal>
            )}
        </>
    );
};

export default EditUserFormModal;
