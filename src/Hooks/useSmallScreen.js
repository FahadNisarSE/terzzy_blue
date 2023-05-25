import { create } from 'zustand';

const useSmallScreen = create((set) => ({
    isSmall: true,
    setIsSmall: (value) => set({ isSmall: value })
}))

export default useSmallScreen;