<template>
    <div>
        <div v-if="showLoginForm">
            <LoginForm @close-form="showLogin(false)"/>
        </div>
        <div class="login-bar-container" v-if="!showLoginForm">
            <button @click="showLogin(true)">LOGIN</button>
            <button @click="print('/register')">REGISTER</button>
        </div>
    </div>
</template>
<script>
import LoginForm from '../auth/LoginForm.vue';

export default {
    data() {
        return {
            showLoginForm: false
        };
    },
    methods: {
        print(x) {
            console.log(x);
            navigateTo(x);
        },
        showLogin(bool) {
            this.showLoginForm = bool
        }
    },
    components: { LoginForm }
}
</script>
<style lang="scss" scoped>
    .login-bar-container {
        display: flex;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
    }

    button {
        font-family: "termina-bold";
        font-size: 16px;
        color: white;
        border: none;
        background-color: #00000075;
        width: 100%;
        padding: 2.5rem 0;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    button:hover {
        color: black;
        background-color: #ffffff75;
    }

    button:nth-child(1) {
        border-right: #ffffff75 solid 1px;
    }
</style>