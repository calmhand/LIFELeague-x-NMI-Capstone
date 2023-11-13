import { Game, AUTO, Scale } from "phaser";
import { scenes } from "./scenes";

// Game properties
export function launch() {
    return new Game({
        type: AUTO,
        scale: {
            // mode: Scale.RESIZE,
            width: 1000,
            height: 600,
            // autoCenter: Scale.CENTER_BOTH
        },
        parent: "game",
        backgroundColor: "#000000",
        physics: {
            default: "arcade",
        },
        scene: scenes,
        render: {
            pixelArt: true
        }
    })
}

export function close() {}