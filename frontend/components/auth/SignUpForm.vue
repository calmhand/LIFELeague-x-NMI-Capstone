<template>
    <div id="signup-form-container">
        <form id="signup-form" @submit.prevent="submitSignUpForm">
            <button id="close-signup-btn" type="reset" @click="$emit('close-form')">X</button>
            <h1 style="text-align: left;">JOIN THE LEAGUE.</h1>
            <hr style="width: 100%; margin: 10px 0;">
            <div>
                <input type="text" name="signup_username" v-model="username" placeholder="USERNAME" required maxlength="16" autocomplete="off">
                <input type="email" name="signup_email" v-model="email" placeholder="EMAIL" required>
            </div>

            <div>
                <input type="text" name="signup_firstName" v-model="firstName" placeholder="FIRST NAME" required>
                <input type="text" name="signup_lastName" v-model="lastName" placeholder="LAST NAME" required>
            </div>

            <div>
                <input type="password" name="signup_password" v-model="password" placeholder="PASSWORD" required maxlength="32">
                <input type="password" name="signup_authPassword" v-model="authPassword" placeholder="RE-TYPE PASSWORD" required maxlength="32">
            </div>

            <div>
                <input type="text" name="signup_accessKey" v-model="accessKey" placeholder="ACCESS KEY" required maxlength="6" autocomplete="off">
            </div>
            <div><button id="signup-btn" type="submit">REGISTER</button></div>
        </form>
    </div>
</template>
<script>
import { useTestStore } from '@/stores/temp.auth'; // import the auth store we just created

export default {
    name: "Player Registration",
    setup() {
        const store = useTestStore()
        // const { authenticateUser } = useTestStore(); // use authenticateUser action from  auth store
        // const { authenticated } = storeToRefs(useTestStore()); // make authenticated state reactive with storeToRefs
        const signup = async (payload) => {
            // await authenticateUser(payload); // call authenticateUser and pass the user object
            return await store.createUser(payload)
            .then(() => {
                return true
            })
            .catch((err) => {
                console.log(err.response.data);
                console.log(err);
                return false
            })
            // redirect to homepage if user is authenticated
        }
        const login = async (payload) => {
            await store.authenticateUser(payload)
            .then(() => {
                if (store.getRole) {
                    navigateTo('/home')
                } 
            })
        }
        return {
            signup, login
        }
    },
    data() {
        return {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            authPassword: "",
            accessKey: "",
        }
    },
    methods: {
        async submitSignUpForm() {
            if (this.verifyPassword) {
                const payload = {
                    username: this.username,
                    first_name: this.firstName,
                    last_name: this.lastName,
                    password: this.password,
                    email: this.email,
                    statusId: 1,
                    accountTypeId: 1,
                    accessKey: this.accessKey,
                }
                this.signup(payload)
                this.$emit('successfully-registered')
                this.$emit('close-form')
                return navigateTo('/')
            }
        }
    },
    computed: {
        // When both inputs are not empty, do the passwords match?
        verifyPassword() {
            return this.password === this.authPassword && ((this.password && this.authPassword) != "")
        }
    }
}
</script>

<style lang="scss" scoped>
    #signup-form-container {
        font-family: "termina-regular";
        color: white;
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #00000067;
        z-index: 999;
    }

    #signup-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #0000009c;
        padding: 50px;
        width: 90%;

        div {
            display: flex;
            flex-direction: row;
            width: 100%;
        }
    }

    #close-signup-btn {
        all: unset;
        cursor: pointer;
        color: white;
        font-size: 24px;
        position: absolute;
        top: 0;
        right: 0;
        text-align: center;
        width: 3%;
        padding: 10px;
        margin: 10px;
        transition: all 0.3s ease;
        border: solid white 5px;
    }

    #close-signup-btn:hover {
        background-color: rgb(196, 0, 0); 
        -webkit-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
    }

    #signup-btn {
        font-family: "termina-bold";
        font-size: 16px;
        color: black;
        border: none;
        background-color: #4cff70aa;
        text-align: center;
        width: 100%;
        padding: 1rem 0;
        margin: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    #signup-btn:hover {
        color: white;
        background-color: #4cff70aa;
        -webkit-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
    }

    input {
        width: 100%; 
        margin-bottom: 10px; 
        background: rgba(255, 255, 255, 0.623);
        border: none;
        outline: none;
        padding: 10px;
        margin: 10px;

        font-size: 16px;
        font-family: "termina-regular";

        text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        border: 1px solid rgba(0,0,0,0.3);
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
        -webkit-transition: box-shadow .5s ease;
        -moz-transition: box-shadow .5s ease;
        -o-transition: box-shadow .5s ease;
        -ms-transition: box-shadow .5s ease;
        transition: box-shadow .5s ease;
    }

    input::placeholder {
        color: black;
        font-family: "termina-regular";
    }

    input:focus { 
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); 
    }
</style>