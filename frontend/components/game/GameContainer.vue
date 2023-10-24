<template>
    <div id="game">
        <button id="start-btn" v-if="showBtn" @click="startGame()">LAUNCH</button>
    </div>
</template>

<script>
import { launch } from "@/game/game"

export default {
    name: "GameContainer",
    data() {
        return {
            showBtn: true,
            game: null
        }
    },
    methods: {
        startGame() {
            this.showBtn = false
            this.game = launch()
        }
    },
    unmounted() {
        navigateTo("/game")
    },
}
</script>
<style lang="scss" scoped>
    #game {
        font-family: "termina-bold";
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('@/assets/images/game-bg.jpg');
    }

    #start-btn {
        all: unset;
        width: 50%;
        background-color: rgba(255, 255, 255, 0.925);
        padding: 10%;
        text-align: center;
        font-size: 5rem;
        cursor: pointer;
        transition: opacity 0.3s ease;
    }

    #start-btn:hover {
        opacity: 0.8;
    }
</style>