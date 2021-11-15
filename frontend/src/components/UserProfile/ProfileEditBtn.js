import React, {useState} from 'react';
import {Modal} from '../../context/Modal';
import EditProfileForm from './EditProfileForm';

const ProfileEditBtn = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit Profile</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditProfileForm />
                </Modal>
            )}
        </>
    );
};

export default ProfileEditBtn;
