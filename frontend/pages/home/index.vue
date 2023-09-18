<template>
    <div id="game-main-menu">
        <video autoplay muted loop id="video-bg">
            <source src="@/assets/videos/bg_vid_no_logo.mp4" type="video/mp4" />
        </video>
        <NuxtLayout name="main-menu" :info="layoutContent">
        </NuxtLayout>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created

export default {
    setup() {
        const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
        const logout = () => {
            logUserOut();
            navigateTo('/');
        }
        return {
            logout
        }
    },
    data() {
        return {
            layoutContent: [
                {
                    content: 'ABOUT LIFE LEAGUE', 
                    link: '/home'
                },
                {
                    content: 'HOW TO PLAY',
                    link: '/home'
                },
                {
                    content: 'OUR NMI TEAM',
                    link: '/home'
                },
                {
                    content: 'SOURCE CODE',
                    link: '/home'
                },
            ]
        }
    },
    mounted() {
        if (useAuthStore().getUsername === "") {
            // this.logout()
        }
    }
};

</script>

<style lang="scss">
    #game-main-menu {
        min-height: 100%;

        transition: all 0.4s ease;
    }
</style>