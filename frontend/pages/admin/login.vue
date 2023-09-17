<template>
    <div>
        admin login
        <NuxtLink to="/">back to home</NuxtLink>
        <form id="admin-login-form" @submit.prevent="adminLogin">
            Username:
            <input type="text" name="admin-login-username" v-model="username">

            Password:
            <input type="password" name="admin_login-password" v-model="password">
            <button type="submit">login</button>
        </form>
    </div>
</template>
<script>
import { useUserStore } from '@/stores/userStore'

export default {
    name: 'Admin Login',
    setup() {
        const userStore = useUserStore()

        return {
            userStore
        }
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async adminLogin() {
            const payload = {
                "username": this.username,
                "password": this.password
            }
            
            await this.$api.post('/admin-login', JSON.stringify(payload))
            .then((res) => {
                // console.log(res.data);

                // Take information from res.data and fill into app state manager.
                // Create cookie and save to local browser store
            })
            .catch((e) => {
                console.log(e);
            })
        },
    }
}
</script>
<style lang="">
    
</style>