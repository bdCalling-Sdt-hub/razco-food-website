"use client"
import React, { useCallback } from 'react';
import Modal from './Modal'
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import Login from '@/Components/Authentication/Login';

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [registerModal, loginModal]);

    return (
        <React.Fragment>
            <Modal
                isOpen={loginModal.isOpen} onClose={loginModal.onClose}
                body={<Login onToggle={onToggle} />}
            />
        </React.Fragment>
    )
}

export default LoginModal;