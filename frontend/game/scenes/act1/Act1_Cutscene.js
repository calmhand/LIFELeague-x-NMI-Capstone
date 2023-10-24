import { Scene } from "phaser";

function animateText(target, speedInMs = 25, sound) {
    // store original text
    const message = target.text;
    const invisibleMessage = message.replace(/[^ ]/g, " ");
  
    // clear text on screen
    target.text = "";
  
    // mutable state for visible text
    let visibleText = "";
  
    // use a Promise to wait for the animation to complete
    return new Promise((resolve) => {
      const timer = target.scene.time.addEvent({
        delay: speedInMs,
        loop: true,
        callback() {
          // if all characters are visible, stop the timer
          if (target.text === message) {
            timer.destroy();
            return resolve();
          }
  
          // add next character to visible text
          visibleText += message[visibleText.length];
          // right pad with invisibleText
          const invisibleText = invisibleMessage.substring(visibleText.length);
  
          // update text on screen
          target.text = visibleText + invisibleText;
          sound.play()
        },
      });
    });
  }

export class Act1_Cutscene extends Scene {
    constructor() {
        super({ key: "Act1_Cutscene" })
    }

    preload() {
        this.load.setBaseURL("/_nuxt/game")
        this.load.image("home_btn", "assets/MenuButtons/SquareButtons/HomeSquare.png")
        this.load.image("next_btn", "assets/MenuButtons/SquareButtons/NextSquare.png")
        this.load.image("court", "assets/Act1_Court.png")
        this.load.audio("crowd_sound", "assets/crowd.mp3")
        this.load.audio("text_sound", "assets/text.mp3")
    }

    create() {
        let pointer = -1
        const dialogue_one = [
          "Hey. Kid.", "You're subbing in for number 11.", "Remember the play?", 
          "Their front court duo is weak at guarding our pick and roll.", 
          ["Our big men will set two picks for you.","I want you to fake the second pick and drive to the basket."], 
          "They won't see it coming.", 
          "You've got this!"
        ]
        let textAudio = this.sound.add("text_sound")
        let crowd = this.sound.add("crowd_sound")
        crowd.play()
        crowd.setLoop(true)
        crowd.setVolume(0.5)

        const bg = this.add.image(0, 0, "court")
        bg.setOrigin(0, 0)

        let text = this.add.text(100, 400, "...", {
            font: "20px Courier",
            fill: "#ffffff"
        })
        
        animateText(text, 100, textAudio)

        const home = this.add.image(50, 50, "home_btn")
        setHoverAnimation(home)

        const next = this.add.image(900, 500, "next_btn")
        setHoverAnimation(next)
        next.on("pointerup", () => {
            pointer++
            next.setPosition(1000, 1000)
            animateText(text.setText(dialogue_one[pointer]), 50, textAudio)
            .then(() => {
              if (pointer == dialogue_one.length) {
                this.cameras.main.fadeOut(2000)
                setTimeout(() => {
                  crowd.stop()
                  this.scene.start("Act1_Level1")
                }, 2000)
              } else {
                next.setPosition(900, 500)
              }
            })
        })
    }

    update() {

    }
}

function setHoverAnimation(obj) {
    obj.setScale(0.2)
    obj.setInteractive()
    obj.on("pointerover", () => {
        obj.setAlpha(0.3)
    })
    obj.on("pointerout", () => {
        obj.setAlpha(1)
    })
}