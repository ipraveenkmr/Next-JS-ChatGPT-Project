import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const wishStore = create(
    persist(
        (set) => ({
            formdata: {},
            updateFormData: (formdata) => set({ formdata: formdata }),
        }),
        {
            name: 'wish-storage', // name of the item in the storage (must be unique)
            // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)

export default wishStore;