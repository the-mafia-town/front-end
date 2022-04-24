import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
    state: () => ({
        username: "",
        socket: {}
    }),
    actions: {
        setUsername(name: string) {
            this.username = name
        },
        setSocket(socket) {
            localStorage.setItem("userSocket", socket)
        }
    },
    getters: {}

})