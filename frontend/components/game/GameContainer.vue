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
            showBtn: true
        }
    },
    methods: {
        startGame() {
            this.showBtn = false
            launch()
        }
    }
}
</script>
<style lang="scss">
    #game {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>