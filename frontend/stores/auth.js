import { defineStore } from 'pinia'
import axios from 'axios';
import {API_URL} from '../env'

const defaultUrl = API_URL;

let api = axios.create({
    baseURL: defaultUrl,
    headers: {
        common: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${}`,
        },
    },
});
export const useAuthStore = defineStore('auth', {
    state: () => ({
        role: "",
        username: "",
        token: "",
        authenticated: false
    }),
    getters: {
        getUsername: (state) => state.username,
        getToken: (state) => state.token,
        getRole: (state) => state.role
    },
    actions: {
        async authenticateUser(payload) {
            await api.post('/login', JSON.stringify(payload))
            .then((res) => {
                if (!res.data.error) {
                    // console.log(res.data);
                    const newToken = useCookie('auth-token')
                    newToken.value = res.data.token
                    this.authenticated = true
                    
                    // Create setter function
                    this.setStateAttributes(res.data)
                } else {
                    throw res.data;
                }
            })
            .catch((e) => {
                console.log(e);
            })
        },
        setStateAttributes(payload) {
            this.role = payload.role
            this.username = payload.username

            if (payload.role === "PLAYER") {
                // Call method from another store to handle call.
            } else if (payload.role === "ADMIN") {
                // Call method from another store to handle call.
            }
        },
        logUserOut() {
            const savedToken = useCookie('auth-token'); // useCookie new hook in nuxt 3
            savedToken.value = null; // clear the token cookie
            this.role = ""
            this.username = ""
            this.token = ""
            this.authenticated = false
        }
    }
  })