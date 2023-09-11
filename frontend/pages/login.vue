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
export default {
    name: "Login",
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
                "password": this.password
            }

            await this.$api.post('/login', JSON.stringify(obj))
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            })
        }
    },
    mounted() {
    }
}
</script>
<style lang="">
    
</style>