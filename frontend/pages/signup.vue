<template>
    <div>
        <NuxtLink to="/">back to home</NuxtLink>
        <form id="signup-form" @submit.prevent="submitSignUpForm">
            Username:
            <input type="text" name="signUp_username" v-model="username">

            Password:
            <input type="password" name="signUp_password" v-model="password">
            <button type="submit">sign up</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "Sign Up",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async submitSignUpForm() {

            const obj = {
                "username": this.username,
                "password": this.password
            }

            await this.$api.post('/signup', JSON.stringify(obj))
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