<template>
    <div>
        game home page :)
        Player sees this upon successful login
        <video autoplay muted loop id="login-bg">
            <source src="@/assets/videos/logo_bg.mp4" type="video/mp4" />
        </video>
        <button @click.prevent="logout">logout</button>
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
        };
        return {
            logout
        }
    },
    methods: {

    }
}
</script>
<style lang="">
    
</style>