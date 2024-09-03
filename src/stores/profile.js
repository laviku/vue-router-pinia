import { defineStore } from "pinia";

export default defineStore('profile', {
    state: () => ({
        id: 1,
        username: 'laviku',
        avatar: '/avatars/LM-avatar.png',
        status: 'active'
    })
})