<template>
    <div id="lessons-container">
        <h1>Lessons</h1>
        <div class="lesson">
            <h2 class="lesson-title">Overcoming Obstacles</h2>
        </div>

        <div class="lesson">
            <h2 class="lesson-title">Being a Team Player vs. Looking Out for yourself</h2>
        </div>

        <div class="lesson">
            <h2 class="lesson-title">The Importance of Communication</h2>
        </div>

        <div class="lesson">
            <h2 class="lesson-title">Strategy and Critical Thinking</h2>
        </div>
        <NavBar/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #lessons-container {
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

    .lesson {
        color: white;
        margin: 15px 0;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 20px;
        cursor: pointer;
        box-shadow: 0px 0px 6px 2px rgba(255,255,255,0.62);
        transition: all 0.3s ease;
    }

    .lesson:hover {
        color: black;
        background-color: #ffffffac;
        -webkit-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        -moz-box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
        box-shadow: 0px 0px 14px 6px rgba(255,255,255,0.62);
    }
</style>