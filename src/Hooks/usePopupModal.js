import { create } from 'zustand';

export const usePopupModal = create((set) => ({
    showPopupModal: false,
    togglePopupModal: (value) => set({
        showPopupModal: value
    })
}))

export const usePopupData = create((set) => ({
    src: '',
    alt: '',
    image: false,
    modify: (newState) => set((state) => ({ ...state, ...newState }))
}))