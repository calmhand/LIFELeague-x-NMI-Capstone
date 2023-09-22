<template>
    <div class="SettingsLayout">
        <div>
            <h1 id="account-header">Account Info</h1>
            <div id="account-content-container">
                <span class="acc-content">ACCOUNT ID: </span>
                <span class="acc-content">USERNAME: {{ authStore.getUsername }}</span>
                <span class="acc-content">EMAIL: </span>
                <span class="acc-content">ROLE: {{ authStore.getRole }}</span>
            </div>
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
            authStore: useTestStore()
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

    #account-header {
        font-family: "termina-bold";
        color: white;
        background-color: #00000099;
        margin: 2px 0 0 0;
        padding: 10px;
        border-bottom: solid 0.5px #ffffff75;
    }

    #account-content-container {
        color: white;
        background-color: #00000099;
    }

    .acc-content {
        display: block;
        padding: 10px;
    }
</style>