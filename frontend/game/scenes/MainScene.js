import { Scene } from "phaser";

export class MainScene extends Scene {
    constructor() {
        super({ key: "MainScene" })
    }

    preload() {
        this.load.setBaseURL("/_nuxt/game")
    }

    create() {
        this.add.text(100, 100, "Hey", {
            font: "24px Courier",
            fill: "#ffffff"
        })
    }
}