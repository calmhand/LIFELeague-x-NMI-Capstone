<template>
    <nav class="nav-bar">
        <button @click="goTo('/home')" id="home-btn">PLAY</button>
        <button id="skills-btn">SKILLS</button>
        <button id="stats-btn">STATS</button>
        <button id="settings-btn" @click="toSettings">SETTINGS</button>
        <button id="logout-btn" @click="logout"><img src="@/assets/images/logoutIcon.png" alt="Logout"/></button>
    </nav>
</template>
<script>
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created

export default {
    setup() {
        const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
        const authStore = useAuthStore()
        const logout = () => {
            logUserOut();
            navigateTo('/');
        }
        return {
            logout,
            authStore
        }
    },
    methods: {
        toSettings() {
            navigateTo(`/account/player-${this.authStore.getUsername}`)
        },
        goTo(url) {
            navigateTo(url)
        },
        setupBg() {
            // document.getElementById("video-bg").style.display = "none"

            let btn = document.getElementById("home-btn")
            btn.onmouseover = function(){
                document.getElementById("game-main-menu").style.backgroundColor = 'transparent'
            };

            btn = document.getElementById("skills-btn")
            btn.onmouseover = function(){
                document.getElementById("game-main-menu").style.backgroundColor = 'blue'
            };

            btn = document.getElementById("stats-btn")
            btn.onmouseover = function(){
                document.getElementById("game-main-menu").style.backgroundColor = 'yellow'
            };

            btn = document.getElementById("settings-btn")
            btn.onmouseover = function(){
                document.getElementById("game-main-menu").style.backgroundColor = 'green'
            };
        }
    },
    mounted() {
        // this.setupBg() //pain
    }
}
</script>
<style lang="scss">
    .nav-bar {
        display: flex;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #000000bb;
        box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
    }
    
    img {
        width: 25px;
    }

    button {
        all: unset;
        font-family: "termina-bold";
        font-size: 0.9rem;
        color: white;
        border: none;
        width: 100%;
        padding: 1rem 0;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    button:hover {
        color: black;
        background-color: #ffffffac;
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }

    button:nth-child(1), 
    button:nth-child(2), 
    button:nth-child(3), 
    button:nth-child(4) {
        border-right: #ffffff75 solid 1px;
    }

    button:nth-child(5):hover {
        background-color: #ff0000cc;
    }

</style>