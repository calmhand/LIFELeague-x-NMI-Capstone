import { Scene } from "phaser";

export class Act1_Level1 extends Scene {
    constructor() {
        super({ key: "Act1_Level1" })
    }

    preload() {
        this.load.setBaseURL("/_nuxt/game")
        this.load.image("player_img", "assets/pixelPlayer.png")
        this.load.image("court_main", "assets/court_main.png")
        this.load.spritesheet("selector", "assets/pixelSpriteSheet/tile007.png", {
            frameWidth: 32,
            frameHeight: 32
        })

        this.load.audio("crowd_sound", "assets/crowd.mp3")
        this.load.audio("hover_sound", "assets/text.mp3")
    }

    create() {
        let crowd = this.sound.add("crowd_sound")
        crowd.setLoop(true)
        crowd.setVolume(0.5)
        crowd.play()

        const hoverSound = this.sound.add("hover_sound")

        this.cameras.main.fadeIn(2000, 0, 0, 0)
        setTimeout(() => {
        }, 2000)

        const court = this.add.image(0, 0, "court_main")
        court.setOrigin(0, 0)
        
        const player = this.add.image(390, 380, "player_img")
        player.setScale(0.1)

        const selector = this.add.sprite(390, 380, "selector")
        selector.setScale(3)
        selector.setInteractive({cursor: "pointer"})

        selector.on("pointerover", () => {
            selector.setScale(3.5)
            hoverSound.play()
        })

        selector.on("pointerout", () => {
            selector.setScale(3)
        })

        selector.on("pointerup", () => {
            console.log("open decision scene");
            this.scene.launch("Act1_Decision_1")
        })

        this.anims.create({
            key: "selector_anim",
            frames: this.anims.generateFrameNumbers("selector"),
            frameRate: 7,
            repeat: -1
        })
        selector.play("selector_anim")
    }
}