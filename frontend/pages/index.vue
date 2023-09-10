<template>
    <div id="test">
        <video autoplay muted loop id="login-bg">
            <source src="../assets/videos/logo_bg.mp4" type="video/mp4" />
        </video>

        <div id="login-container">
            <NuxtLink id="login-btn" to="/">LOGIN</NuxtLink>
            <NuxtLink id="login-btn" to="/signup">REGISTER</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    #login-bg {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        inset: 0 0 0 0;
        z-index: -1;
    }

    #login-container {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 60%;
        width: 100%;
        align-items: center;
    }

    #login-btn {
        all: unset;
        cursor: pointer;
        border: white 2px solid;
        color: white;
        margin: 10px 0;
        width: 25%;
        padding: 20px;
        text-align: center;
        font-size: 24px;
        font-weight: 900;
    }
</style>