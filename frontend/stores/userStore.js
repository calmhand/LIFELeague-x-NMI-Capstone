import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        role: "",
        username: "",
        token: "",
    }),
    getters: {
        getUsername: (state) => state.username,
        getToken: (state) => state.token
    },
    actions: {
        logout() {
            this.username = ""
            this.token = ""
        }
    }
  })