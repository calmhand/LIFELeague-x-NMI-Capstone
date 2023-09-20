import { defineStore } from 'pinia'
import axios from 'axios';
import {API_URL} from '../env'

let api = axios.create({
    baseURL: API_URL,
    headers: {
        common: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${}`,
        },
    },
});

export const useTestStore = defineStore('test', () => {
    // ref()s become state properties
    // computed()s become getters
    // function()s become actions

    const auth = ref({
        username: "",
        role: "",
        authenticated: false,
        token: ""
    })

    const getUsername = computed(() => auth.value.username)
    const getRole = computed(() => auth.value.role)
    const getAuth = computed(() => auth.value.authenticated)
    const getToken = computed(() => auth.value.token)

    async function authenticateUser(payload) {
        await api.post('/login', JSON.stringify(payload))
        .then((res) => {
            if (!res.data.error) {
                const newToken = useCookie('auth-token')
                newToken.value = res.data.token

                this.setStateAttributes(res.data)

                useTestStore().$subscribe((mutations, state) => {
                    localStorage.setItem('auth', JSON.stringify(state.auth))
                })

                console.log(res.data);
            } else {
                throw res.data;
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    function setStateAttributes(payload) {
        auth.value.role = payload.role
        auth.value.username = payload.username
        auth.value.token = payload.token
        auth.value.authenticated = true

        if (payload.role === "PLAYER") {
            // Call method from another store to handle call.
        } else if (payload.role === "ADMIN") {
            // Call method from another store to handle call.
        }
    }

    function logUserOut() {
        const savedToken = useCookie('auth-token'); // useCookie new hook in nuxt 3
        savedToken.value = null; // clear the token cookie
        this.role = ""
        this.username = ""
        this.token = ""
        this.authenticated = false
        localStorage.removeItem('auth')
    }
    return { 
        auth,
        getUsername, getRole, getToken, getAuth,
        authenticateUser, setStateAttributes, logUserOut
    }
  }, { persist: true })