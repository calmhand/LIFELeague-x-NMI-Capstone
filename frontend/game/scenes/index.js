import { TitleScene } from "./TitleScene"
import { MainScene } from "./MainScene"
import { Act1_Cutscene } from "./act1/Act1_Cutscene"
import { Act1_Level1 } from "./act1/Act1_Level1"
import { Act1_Decision_1 } from "./act1/decisions/Act1_Decision_1"
import { Act1_Decision_1_Good } from "./act1/decisions/Act1_Decision_1"
import { Act1_Decision_1_Bad } from "./act1/decisions/Act1_Decision_1"

export const scenes = [
    // Global
    TitleScene,
    MainScene,

    // Act 1
    Act1_Level1,
    Act1_Decision_1,
    Act1_Decision_1_Good,
    Act1_Decision_1_Bad,

    // Cutscenes
    Act1_Cutscene,
    
]