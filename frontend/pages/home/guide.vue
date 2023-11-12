<template>
    <div id="guide-container">
        <h1 class="section-header">HOW TO PLAY</h1>
        <p class="text">
            Gameplay consists of multiple dialogue options where you, the player, will select options that you feel is most ideal
            in the given situation. There is no "right" answer, but your decisions will impact the outcome of the game. Choose wisely!<br><br>
            
            Certain decisions you make can award you points that contribute to your skills, offense, defense, leadership, and professionalism.<br>
            These skills can influence of the outcomes of decisions you make.
        </p>
        <h1 class="section-header">CONTROLS</h1>
        <p class="text">
            The game is primarily controlled with mouse input.
        </p>

        <h1 class="section-header">DISCLAIMER</h1>
        <p class="text">
            The web app in its current state is a very early build. Some screens may not be functioning as intended.
            This build is meant to be a semi-functioning prototype to present to individuals who wish to invest and sponsor
            L.I.F.E League operations.
        </p>
        <NavBar />
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    #guide-container {
        padding: 50px;
        font-family: "termina-regular";
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: black;
    }
    
    .section-header {
        font-family: "termina-bold";
        color: white;
        padding: 5px 0;
    }

    .text {
        margin: 15px 0;
        color: white;
    }
</style>