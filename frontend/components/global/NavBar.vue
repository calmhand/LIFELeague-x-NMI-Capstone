<template>
    <nav class="nav-bar">
        <button class="nav-link" @mouseover="playSound()" @click="goTo('/home')" id="home-btn">HOME</button>
        <button class="nav-link" @mouseover="playSound()" @click="goTo(`/${store.getUsername}/skills`)" id="skills-btn">SKILLS</button>
        <button class="nav-link" @mouseover="playSound()" @click="goTo(`/${store.getUsername}/stats`)"  id="stats-btn">STATS</button>
        <button class="nav-link" @mouseover="playSound()" @click="goTo(`/account/player-${store.getUsername}`)"  id="settings-btn">SETTINGS</button>
        <button class="nav-link" @mouseover="playSound()" id="logout-btn" @click="logout"><img src="@/assets/images/logoutIcon.png" alt="Logout"/></button>
    </nav>
</template>
<script>
// import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { useTestStore } from '@/stores/temp.auth'; // import the auth store we just created
import select_one from '@/assets/sounds/select.mp3'
import select_two from '@/assets/sounds/select_2.mp3'

export default {
    setup() {
        const { logUserOut } = useTestStore(); // use authenticateUser action from  auth store
        const logout = () => {
            logUserOut();
            navigateTo('/');
        }
        return {
            logout,
        }
    },
    data() {
        return {
            store: useTestStore()
        }
    },
    methods: {
        toSettings() {
            return navigateTo(`/account/player-${this.authStore.getUsername}`, {external: true})
        },
        goTo(url) {
            const selectSoundTwo = new Audio(select_two)
            selectSoundTwo.volume = 0.3
            selectSoundTwo.play()
            return navigateTo(url)
        },
        playSound() {
            const selectSoundOne = new Audio(select_one)
            selectSoundOne.volume = 0.3
            selectSoundOne.pause()
            selectSoundOne.currentTime = 0
            selectSoundOne.play()
        },
    },
}
</script>
<style lang="scss">
    .nav-bar {
        display: flex;
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #000000bb;
        box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
    }
    
    img {
        width: 25px;
    }

    .nav-link {
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

    .nav-link:hover {
        color: black;
        background-color: #ffffffac;
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }

    .nav-link:nth-child(1), 
    .nav-link:nth-child(2), 
    .nav-link:nth-child(3), 
    .nav-link:nth-child(4) {
        border-right: #ffffff75 solid 1px;
    }

    .nav-link:nth-child(5):hover {
        background-color: #ff0000cc;
    }

</style>