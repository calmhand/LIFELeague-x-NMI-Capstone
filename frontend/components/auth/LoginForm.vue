<template>
    <div id="login-form-container">
        <form id="login-form" @submit.prevent="submitLoginForm">
            <img src="@/assets/images/LIFELeague_logo3.png" alt="Life League Logo" loading="lazy">
            <h1>YOUR LIFE. YOUR LEAGUE.</h1>
            <hr style="width: 100%; margin: 10px 0;">
            <input type="text" name="login_username" v-model="username" placeholder="USERNAME" required>
            <input type="password" name="login_password" v-model="password" placeholder="PASSWORD" required>
            <button id="login-btn" type="submit">LOGIN</button>
            <button id="close-login-btn" type="reset" @click="$emit('close-form')">X</button>
        </form>
    </div>
</template>
<script>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useTestStore } from '@/stores/temp.auth'; // import the auth store we just created
import { useAuthStore } from '~/stores/auth';

export default {
    name: "Player Login",
    setup() {
        const store = useTestStore()
        // const { authenticateUser } = useTestStore(); // use authenticateUser action from  auth store
        // const { authenticated } = storeToRefs(useTestStore()); // make authenticated state reactive with storeToRefs
        const login = async (payload) => {
            // await authenticateUser(payload); // call authenticateUser and pass the user object
            await store.authenticateUser(payload)
            .then(() => {
                console.log(store.getRole);
                if (store.getRole) {
                    navigateTo('/home')
                } 
            })
            // redirect to homepage if user is authenticated
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
<style lang="scss" scoped>
    #login-form-container {
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

    #login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #0000009c;
        padding: 50px;
        width: 90%;

        img {
            width: 30%;
        }
    }

    #login-btn {
        font-family: "termina-bold";
        font-size: 16px;
        color: black;
        border: none;
        background-color: #ffffffaa;
        text-align: center;
        width: 100%;
        padding: 1rem 0;
        margin: 0.5rem 0;
        cursor: pointer;
        background-color: #4cff70aa;
        transition: all 0.3s ease;
    }

    #login-btn:hover, #close-login-btn:hover {
        color: white;
    }

    #login-btn:hover {
        color: white;
        background-color: #4cff70aa;
        -webkit-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
    }

    #close-login-btn {
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
        border: solid white 5px;
        transition: all 0.3s ease;
    }

    #close-login-btn:hover {
        background-color: rgb(196, 0, 0); 
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
        transition: all 0.5s ease;
    }

    input::placeholder {
        color: black;
        font-family: "termina-regular";
    }

    input:focus { 
        box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); 
        -webkit-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
    }
</style>