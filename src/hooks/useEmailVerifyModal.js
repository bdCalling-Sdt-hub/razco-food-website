import { create } from 'zustand';

const useEmailVerifyModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));
export default useEmailVerifyModal;