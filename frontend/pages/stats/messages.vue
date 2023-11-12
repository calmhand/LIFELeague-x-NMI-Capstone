<template>
    <div id="messages-container">
        <h1>Messages</h1>

        <div class="message">
            <h2 class="sender">Coach Ray</h2>
            <p class="msg-preview">Good hustle today! Keep it up tomorrow. Make sure to...</p>
        </div>

        <div class="message">
            <h2 class="sender">Donovan Mitchell</h2>
            <p class="msg-preview">You looked good out there! Let me give you a couple a pointers with...</p>
        </div>

        <div class="message">
            <h2 class="sender">Jaren Nickelson</h2>
            <p class="msg-preview">Yo bro! You need to pass the ball some more! I'm always wide open and...</p>
        </div>
        
        <NavBar/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #messages-container {
        min-height: 100vh;
        font-family: "termina-regular";
        padding: 50px;
        background-color: black;
        background-image: url("@/assets/images/LIFELeagueBanner.png");
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        
        h1 {
            color: white;
            font-family: "termina-bold";
        }
    }

    .message {
        color: white;
        margin: 15px 0;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 20px;
        cursor: pointer;
        box-shadow: 0px 0px 6px 2px rgba(255,255,255,0.62);
        transition: all 0.3s ease;
    }

    .message:hover {
        color: black;
        background-color: #ffffffac;
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }
</style>