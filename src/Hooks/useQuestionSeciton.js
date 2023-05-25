import { create } from 'zustand';

const useQuestionSection = create((set) => ({
    isQuestionSection: false,
    setQuestionSection: (value) => set({
        isQuestionSection: value
    })
}))

export default useQuestionSection;