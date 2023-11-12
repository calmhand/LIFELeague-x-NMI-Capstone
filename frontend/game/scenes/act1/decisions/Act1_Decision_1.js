import { Scene } from "phaser";

export class Act1_Decision_1 extends Scene {
    constructor() {
        super({ key: "Act1_Decision_1" })
    }

    preload() {
        this.load.setBaseURL("/_nuxt/game")
        this.load.audio("hover_sound", "assets/text.mp3")
        
    }

    create() {
        const hoverSound = this.sound.add("hover_sound")

        let body = this.add.text(100, 25, "Coach wants you to run an important play! \n\nShould you follow his plan? \n\nOr, do you want to go for the highlight?", {
            font: "20px Courier",
            fill: "#ffffff",
            padding: 10,
            backgroundColor: "#000000",
            wordWrap: { width: 600 }
        })

        let option_1 = this.add.text(700, 25, "Listen to coach!", {
            font: "20px Courier",
            fill: "#ffffff",
            padding: 10,
            backgroundColor: "#000000",
            wordWrap: { width: 600 }
        })

        option_1.setInteractive({cursor: "pointer"})

        option_1.on("pointerover", () => {
            option_1.setScale(1.3)
            hoverSound.play()
        })

        option_1.on("pointerout", () => {
            option_1.setScale(1)
        })

        option_1.on("pointerup", () => {
            console.log("pick decision");
            this.scene.start("Act1_Decision_1_Good")
            this.scene.stop("Act1_Level1")
        })

        let option_2 = this.add.text(700, 100, "Go for the win!", {
            font: "20px Courier",
            fill: "#ffffff",
            padding: 10,
            backgroundColor: "#000000",
            wordWrap: { width: 600 }
        })

        option_2.setInteractive({cursor: "pointer"})

        option_2.on("pointerover", () => {
            option_2.setScale(1.3)
            hoverSound.play()
        })

        option_2.on("pointerout", () => {
            option_2.setScale(1)
        })

        option_2.on("pointerup", () => {
            console.log("pick decision");
            this.scene.start("Act1_Decision_1_Bad")
            this.scene.stop("Act1_Level1")
        })
    }
}

export class Act1_Decision_1_Good extends Scene {
    constructor() {
        super({ key: "Act1_Decision_1_Good" })
    }

    preload() {
        this.load.setBaseURL("/_nuxt/game")
        this.load.image("player_drive", "assets/took_the_screen.jpeg")
        this.load.image("speed_effect", "assets/anime_lines.png")
        this.load.image("exit_btn", 'assets/MenuButtons/LargeButtons/Exit.png')
        this.load.audio("hover_sound", "assets/text.mp3")

        this.load.spritesheet("skill_progress", "assets/pixelSpriteSheet/progression.png", {
            frameWidth: 48,
            frameHeight: 5
        })
    }

    create() {
        const hoverSound = this.sound.add("hover_sound")

        let photo = this.add.image(0, 0, "player_drive")
        photo.setOrigin(0, 0)
        photo.setScale(0.6)

        let speed_bg = this.add.image(0, 0, "speed_effect")
        speed_bg.setOrigin(0, 0)
        speed_bg.setScale(0.6)

        let text1 =  this.add.text(650, 100, "You follow the play just like how coach drew it up.", {
            font: "20px Courier",
            fill: "#00FF00",
            padding: 10,
            backgroundColor: "#000000",
            wordWrap: { width: 350 }
        })

        let text2 = this.add.text(650, 175, "You managed to make the game winning layup!", {
            font: "20px Courier",
            fill: "#ffffff",
            padding: 10,
            wordWrap: { width: 325 }
        })

        let text3 = this.add.text(650, 250, "FINAL SCORE: 98 - 97", {
            font: "20px Courier",
            fill: "#00ff00",
            padding: 10,
            wordWrap: { width: 325 }
        })

        let rewards = this.add.text(650, 300, "+1 OFFENSE\n\n+0 DEFENSE\n\n+2 LEADERSHIP\n\n+0 PROFESSIONALISM")

        const progression = this.add.sprite(775, 305, "skill_progress")

        this.anims.create({
            key: "progress_anim",
            frames: this.anims.generateFrameNumbers("skill_progress"),
            frameRate: 7,
            repeat: -1
        })
        progression.play("progress_anim")

        const progression2 = this.add.sprite(797, 373, "skill_progress")

        progression2.play("progress_anim")

        const exitBtn = this.add.image(750, 500, "exit_btn")
        exitBtn.setScale(0.3)

        exitBtn.setInteractive({cursor: "pointer"})
        exitBtn.on("pointerover", () => {
            exitBtn.setAlpha(0.3)
            hoverSound.play()
        })
        
        exitBtn.on("pointerup", () => {
            console.log("exit game");
            this.game.destroy(true, false)
            navigateTo("/game")
        })
        
        exitBtn.on("pointerout", () => {
            exitBtn.setAlpha(1)
        })
    }
}

export class Act1_Decision_1_Bad extends Scene {
    constructor() {
        super({ key: "Act1_Decision_1_Bad" })
    }

    preload() {
        this.load.setBaseURL("/_nuxt/game")
        this.load.image("sad_coach", "assets/sad_coach.jpeg")
        this.load.image("exit_btn", 'assets/MenuButtons/LargeButtons/Exit.png')

        this.load.audio("hover_sound", "assets/text.mp3")
    }

    create() {
        const hoverSound = this.sound.add("hover_sound")

        let photo = this.add.image(0, 0, "sad_coach")
        photo.setOrigin(0, 0)
        photo.setScale(0.6)

        let text1 =  this.add.text(650, 100, "You decide to be the hero and shoot a tough 3-point shot.", {
            font: "20px Courier",
            fill: "#ffffff",
            padding: 10,
            backgroundColor: "#000000",
            wordWrap: { width: 350 }
        })

        let text2 = this.add.text(650, 175, "You airball...", {
            font: "20px Courier",
            fill: "#ff0000",
            padding: 10,
            wordWrap: { width: 325 }
        })

        let text3 = this.add.text(650, 250, "FINAL SCORE: 96 - 97", {
            font: "20px Courier",
            fill: "#ff0000",
            padding: 10,
            wordWrap: { width: 325 }
        })

        let rewards = this.add.text(650, 300, "-1 OFFENSE\n\n+0 DEFENSE\n\n+0 LEADERSHIP\n\n-3 PROFESSIONALISM")

        const exitBtn = this.add.image(750, 500, "exit_btn")
        exitBtn.setScale(0.3)

        exitBtn.setInteractive({cursor: "pointer"})
        exitBtn.on("pointerover", () => {
            exitBtn.setAlpha(0.3)
            hoverSound.play()
        })
        
        exitBtn.on("pointerup", () => {
            console.log("exit game");
            this.game.destroy(true, false)
            navigateTo("/game")
        })
        
        exitBtn.on("pointerout", () => {
            exitBtn.setAlpha(1)
        })
    }
}