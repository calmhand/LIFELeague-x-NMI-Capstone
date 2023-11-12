import { Scene } from "phaser";

export class TitleScene extends Scene {
    constructor() {
        super({ key: "TitleScene" })
    }

    preload() {
        this.load.setBaseURL("/_nuxt/game")
        this.load.image("bg_img", 'assets/title_bg.png')
        this.load.image("title_img", 'assets/LIFELeague_vg-title.png')
        this.load.image("ball", "assets/MenuButtons/bball_select.png")
        this.load.image("play_btn", 'assets/MenuButtons/LargeButtons/Start.png')
        this.load.image("exit_btn", 'assets/MenuButtons/LargeButtons/Exit.png')

        this.load.audio("hover_sound", "assets/text.mp3")
    }

    create() {
        this.cameras.main.fadeIn(2000, 0, 0, 0)
        setTimeout(() => {
        }, 2000)

        const background = this.add.image(0, 0, "bg_img")
        background.setOrigin(0, 0)

        const title = this.add.image(500, 200, "title_img")

        const ball = this.add.sprite(100, 100, "ball")
        ball.setScale(0.05)
        ball.setVisible(false)

        const playBtn = this.add.image(500, 400, "play_btn")
        playBtn.setScale(0.3)

        const hoverSound = this.sound.add("hover_sound")

        playBtn.setInteractive()
        playBtn.on("pointerover", () => {
            ball.setVisible(true)
            hoverSound.play()
            ball.setPosition(375, 400)
        })
        
        playBtn.on("pointerout", () => {
            ball.setVisible(false)
        })

        playBtn.on("pointerup", () => {
            this.scene.start("Act1_Level1")
            // this.scene.start("Act1_Cutscene")
        })

        const exitBtn = this.add.image(500, 500, "exit_btn")
        exitBtn.setScale(0.3)

        exitBtn.setInteractive()
        exitBtn.on("pointerover", () => {
            ball.setVisible(true)
            ball.setPosition(375, 500)
            hoverSound.play()
        })
        
        exitBtn.on("pointerout", () => {
            ball.setVisible(false)
        })
        
        exitBtn.on("pointerup", () => {
            console.log("exit game");
            this.game.destroy(true, false)
            navigateTo("/game")
        })
    }
}