"use client"
import React, { useCallback } from 'react';
import Modal from './Modal'
import Register from '@/Components/Authentication/Register'
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal]);

    return (
        <React.Fragment>
            <Modal
                isOpen={registerModal.isOpen} onClose={registerModal.onClose}
                body={<Register onToggle={onToggle} />}
            />
        </React.Fragment>
    )
}

export default RegisterModal;