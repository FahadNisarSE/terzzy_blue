import { create } from "zustand";

const useToggleSidebar = create((set) => ({
    showSidebar: false,
    setShowSidebar: (value) => set({ showSidebar: value })
}))

export default useToggleSidebar