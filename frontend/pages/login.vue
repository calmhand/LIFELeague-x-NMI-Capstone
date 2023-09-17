<template>
    <div>
        <NuxtLink to="/">back to home</NuxtLink>
        <form id="login-form" @submit.prevent="submitLoginForm">
            Username:
            <input type="text" name="login_username" v-model="username">

            Password:
            <input type="password" name="login_password" v-model="password">
            <button type="submit">login</button>
        </form>
    </div>
</template>
<script>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created

export default {
    name: "Player Login",
    setup() {
        const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
        const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
        const login = async (payload) => {
            await authenticateUser(payload); // call authenticateUser and pass the user object

            // redirect to homepage if user is authenticated
            if (authenticated.value) {
                navigateTo('/home')
            }
        };
        return {
            login
        }
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async submitLoginForm() {
            const obj = {
                "username": this.username,
                "password": this.password,
            }
                        
            this.login(obj)

        }
    },
    mounted() {
    }
}
</script>
<style lang="">
    
</style>