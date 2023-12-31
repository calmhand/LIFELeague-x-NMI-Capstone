<template>
    <div class="DefaultMenu">
        <div v-if="authStore.getRole === `ADMIN`">
            Layout only visible to user with role "ADMIN"
        </div>
        
        <div class="grid-container" v-if="authStore.getRole === `PLAYER`">
            <div v-if="$route.path === '/home'" class="main-grid-content" id="main-menu-header">
                WELCOME, {{ authStore.getUsername }}
            </div>
            <div v-if="$route.path === `/${authStore.getUsername}/skills`" class="main-grid-content" id="main-menu-header">
                SKILLS
            </div>
            <div v-if="$route.path === `/${authStore.getUsername}/stats`" class="main-grid-content" id="main-menu-header">
                STATS
            </div>
            <NuxtLink to="https://www.thelifeleague.info/home" target="_blank" class="img main-grid-content"><img src="@/assets/images/LIFELeague_Logo2.png" alt="LIFE League Logo2"/></NuxtLink>
            <NuxtLink @click="playClick()" @mouseover="playSound()" class="text1 main-grid-content" :to="info[0].link">{{ info[0].content }}</NuxtLink>
            <NuxtLink @click="playClick()" @mouseover="playSound()" class="text2 main-grid-content" :to="info[1].link">{{ info[1].content }}</NuxtLink>
            <NuxtLink @click="playClick()" @mouseover="playSound()" class="text3 main-grid-content" :to="info[2].link">{{ info[2].content }}</NuxtLink>
            <NuxtLink @click="playClick()" @mouseover="playSound()" class="text4 main-grid-content" :to="info[3].link">{{ info[3].content }}</NuxtLink>
        </div>
        <slot />
        <NavBar/>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import {useTestStore} from '@/stores/temp.auth'
import select_one from '@/assets/sounds/select.mp3'
import select_two from '@/assets/sounds/select_2.mp3'

export default {
    setup() {
        
    },
    data() {
        return {
            authStore: useTestStore()
        }
    },
    methods: {
        playSound() {
            const selectSoundOne = new Audio(select_one)
            selectSoundOne.volume = 0.3
            selectSoundOne.pause()
            selectSoundOne.currentTime = 0
            selectSoundOne.play()
        },
        playClick() {
            const selectSoundTwo = new Audio(select_two)
            selectSoundTwo.volume = 0.3
            selectSoundTwo.play()
        },
    },
    props: ["info"],
    mounted() {
        const local = localStorage.getItem('auth')
        
        // if cookie exists
        if (local) {
            // console.log(local);
            this.authStore.auth = JSON.parse(local)
        }
    },
}
</script>

<style lang="scss" scoped>
    .DefaultMenu {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "termina-regular";
    }

    #main-menu-header {
        display: flex;
        align-items: center;
        justify-content: left;
        background-color: #000000bb;
        color: white;
        padding: 5px 10px;
        font-size: 32px;
        grid-area: main-menu-header;
    }

    .grid-container {
        font-family: "termina-bold";
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0.5fr 1fr 1fr;
        grid-auto-columns: 1fr;
        gap: 5px 5px;
        grid-auto-flow: row;
        grid-template-areas:
        "main-menu-header main-menu-header main-menu-header"
        "img text1 text3"
        "img text2 text4";
        text-align: center;
        width: 75%;
    }
    
    .main-grid-content {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000000bb;
        color: white;
        height: 100%;
        transition: all 0.3s ease;
    }

    .main-grid-content:hover {
        color: black;
        background-color: #ffffff75;
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }

    a {
        all: unset;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    a:hover {
        color: grey;
    }

    .text2 { grid-area: text2; }

    .img { 
        grid-area: img;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .text1 { grid-area: text1; }

    .text3 { grid-area: text3; }

    .text4 { grid-area: text4; }

      /* Global Page Transitions */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>