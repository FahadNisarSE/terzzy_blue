import { create } from "zustand";

const useToggleCarousel = create((set) => ({
    showCarousel: false,
    toggleCarousel: () => set((state) => ({ showCarousel: !state.showCarousel })),
    setShowCarousel: (value) => set({ showCarousel: value })
}))

export default useToggleCarousel;