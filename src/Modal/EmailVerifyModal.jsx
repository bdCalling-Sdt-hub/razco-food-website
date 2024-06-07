"use client"
import React from 'react';
import Modal from './Modal'
import EmailVerify from '@/Components/Authentication/EmailVerify';
import useEmailVerifyModal from '@/hooks/useEmailVerifyModal';

const OtpVerifyModal = () => {
    const emailVerifyModal = useEmailVerifyModal();

    return (
        <React.Fragment>
            <Modal
                isOpen={emailVerifyModal.isOpen}
                onClose={emailVerifyModal.onClose}
                body={<EmailVerify />}
            />
        </React.Fragment>
    )
}

export default OtpVerifyModal;