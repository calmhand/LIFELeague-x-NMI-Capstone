<template>
    <div id="game">
        <button id="start-btn" v-if="showBtn" @click="startGame()">start game</button>
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
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('@/assets/images/game-bg.jpg');
    }
</style>