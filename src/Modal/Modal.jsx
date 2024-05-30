import { Modal as CustomModal } from 'antd';
import { useCallback } from 'react';

const Modal = ({onClose, isOpen, body}) => {
    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    if (!isOpen) {
        return null;
    }
    return (
        <CustomModal 
            title={false}
            centered
            open={isOpen} 
            onOk={handleClose} 
            onCancel={handleClose}
            closeIcon={true}
            footer={false}
            width={500}
        >
            {body}
      </CustomModal>
    )
}

export default Modal;