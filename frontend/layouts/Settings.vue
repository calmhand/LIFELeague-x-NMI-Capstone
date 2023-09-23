<template>
    <div class="SettingsLayout">
        <div id="account-info-container">
            <h1 class="section-header">ACCOUNT INFO</h1>
            <section class="section-content-container">
                <span class="acc-content">ACCOUNT ID: </span>
                <span class="acc-content">USERNAME: {{ authStore.getUsername }}</span>
                <span class="acc-content">EMAIL: </span>
                <span class="acc-content">ROLE: {{ authStore.getRole }}</span>
                <span class="acc-content">ACCOUNT STATUS: {{  }}</span>
            </section>
        </div>
        <div id="reset-info-container">
            <h1 class="section-header">RESET PASSWORD</h1>
            <section class="section-content-container">
                <form id="reset-pass-form">
                    <div>
                        <input type="password" name="reset_password" v-model="newPassword" placeholder="NEW PASSWORD" required maxlength="16">
                        <input type="password" name="signup_authPassword" v-model="authNewPassword" placeholder="RE-TYPE NEW PASSWORD" required maxlength="16">
                    </div>
                    <div><button id="reset-pass-btn" type="submit">RESET PASSWORD</button></div>
                </form>
            </section>
        </div>
        <slot/>
        <NavBar/>
    </div>
</template>
<script>
import { useAuthStore } from '@/stores/auth'
import { useTestStore } from '@/stores/temp.auth'

export default {
    setup() {
        const role = useAuthStore().getRole
        return {
            role
        }
    },
    data() {
        return {
            authStore: useTestStore(),
            newPassword: "",
            authNewPassword: ""
        }
    },
    props: ["info"]
}
</script>
<style lang="scss" scoped>
    .SettingsLayout {
        font-family: "termina-regular";
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url('@/assets/images/LIFELeague_Basketballs.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    #account-info-container, #reset-info-container {
        width: 80%;
        padding: 10px;
    }

    .section-header {
        font-family: "termina-bold";
        color: white;
        background-color: #00000099;
        margin: 2px 0 0 0;
        padding: 10px;
        border-bottom: solid 0.5px #ffffff75;
    }

    .section-content-container {
        color: white;
        background-color: #00000099;
        padding: 10px;
    }

    .acc-content {
        display: block;
        padding: 10px;
    }

    #reset-pass-form {

        div {
            display: flex;
            flex-direction: row;
        }
    }

    input {
        width: 100%; 
        margin-bottom: 10px; 
        background: rgba(255, 255, 255, 0.623);
        border: none;
        outline: none;
        padding: 10px;
        margin: 10px;
        font-size: 12px;
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

    #reset-pass-btn {
        font-family: "termina-bold";
        font-size: 16px;
        color: black;
        border: none;
        background-color: #ffffffaa;
        text-align: center;
        width: 100%;
        padding: 1rem 0;
        margin: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    #reset-pass-btn:hover {
        color: white;
        background-color: #ffffffaa;
        -webkit-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 10px 2px rgba(255,255,255,0.62);
    }
</style>