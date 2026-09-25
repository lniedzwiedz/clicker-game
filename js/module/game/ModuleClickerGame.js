import {ModuleGame} from "./ModuleGame.js";

import {ControllerGameClicker} from "../../controller/game/ControllerGameClicker.js";


class ModuleClickerGame {

    constructor() {

        this.moduleGame =
            new ModuleGame();

        this.controllerClickerGame =
            new ControllerGameClicker(
                this.moduleGame.getControllerGameCoordinator()
            );
    }

    getControllerGameClicker() {
        return this.controllerClickerGame;
    }
}

export default ModuleClickerGame