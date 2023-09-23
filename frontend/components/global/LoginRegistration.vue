<template>
    <div>
        <Transition>
            <div v-if="showLoginForm">
                <LoginForm @close-form="showLogin(false)"/>
            </div>
        </Transition>
        <Transition>
            <div v-if="showSignUpForm">
                <SignUpForm @close-form="showSignUp(false)"/>
            </div>
        </Transition>
        
        <div class="login-bar-container" v-if="!showLoginForm && !showSignUpForm">
            <button @click="showLogin(true)">LOGIN</button>
            <button @click="showSignUp(true)">REGISTER</button>
        </div>
    </div>
</template>
<script>
import LoginForm from '../auth/LoginForm.vue';
import SignUpForm from '../auth/SignUpForm.vue';

export default {
    data() {
        return {
            showLoginForm: false,
            showSignUpForm: false,
        };
    },
    methods: {
        print(x) {
            console.log(x);
            return navigateTo(x);
        },
        showLogin(bool) {
            this.showLoginForm = bool
        },
        showSignUp(bool) {
            this.showSignUpForm = bool
        },
    },
    components: { LoginForm, SignUpForm }
}
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
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
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }

    button:nth-child(1) {
        border-right: #ffffff75 solid 1px;
    }
</style>