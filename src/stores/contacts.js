import { defineStore } from "pinia";
import useProfileStore from "@/stores/profile.js";

export default defineStore('contacts', {
    state: () => ({
        contacts: [
            { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
            { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
        ]
    }),
    getters: {
        getContactById: (state) => (contactId) => {
            const profileStore = useProfileStore();
            if(contactId === profileStore.id)
                return { ...profileStore }
            return state.contacts.find((contact) => contact.id === contactId);
        }
    }
})