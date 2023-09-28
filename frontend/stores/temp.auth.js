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
        email: "",
        userId: null,
        role: "",
        token: "",
        authenticated: false,
    })

    // const auth_temp = ref({
    //     "username": "",
    //     "userID": "",
    //     "email": "",
    //     "role": "",
    //     "token": "",
    //     "authenticated": false,
    //     "status": false
    // })

    const getUsername = computed(() => auth.value.username)
    const getId = computed(() => auth.value.userId)
    const getEmail = computed(() => auth.value.email)
    const getRole = computed(() => auth.value.role)
    const getAuth = computed(() => auth.value.authenticated)
    const getToken = computed(() => auth.value.token)

    async function authenticateUser(payload) {
        await api.post('/login', JSON.stringify(payload))
        .then((res) => {
            try {
                this.setStateAttributes(res.data)

                localStorage.setItem('auth', JSON.stringify(auth.value))

                console.log(res.data);
            } catch(err) {
                throw err
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    async function createUser(payload) {
        await api.post('/signup', JSON.stringify(payload))
        .then((res) => {
            if (!res.data.error) {
                console.log(res.data);
            } else {
                throw res.data
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    function setStateAttributes(payload) {
        const authToken = useCookie('auth-token', {sameSite: "strict"})

        const progressToken = ""

        authToken.value = payload.token
        auth.value.email = payload.email
        auth.value.username = payload.username
        auth.value.token = payload.token
        auth.value.authenticated = true
        auth.value.userId = payload.userId

        if ((payload.accountTypeId  === 1) || payload.role === "PLAYER") {
            auth.value.role = "PLAYER"
        }

    }

    function hydrateState() {
        const data = JSON.parse(localStorage.getItem('auth'))
        this.setStateAttributes(data)
    }

    function logUserOut() {
        const savedToken = useCookie('auth-token', {sameSite: 'strict'}); // useCookie new hook in nuxt 3
        savedToken.value = null; // clear the token cookie

        this.role = ""
        this.username = ""
        this.token = ""
        this.email = ""
        this.userId = null
        this.authenticated = false
        localStorage.removeItem('auth')
    }

    return { 
        auth,
        getUsername, getRole, getToken, getAuth, getEmail, getId,
        authenticateUser, createUser, setStateAttributes, hydrateState, logUserOut
    }
  }, { persist: true })