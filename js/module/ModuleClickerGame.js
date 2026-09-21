import {ModuleGame} from "./ModuleGame.js";

import {ControllerClickerGame} from "../controller/ControllerClickerGame.js";


class ModuleClickerGame {

    constructor() {

        this.moduleGame =
            new ModuleGame();

        this.controllerClickerGame =
            new ControllerClickerGame(
                this.moduleGame.getControllerGameCoordinator()
            );
    }

    getControllerGameClicker() {
        return this.controllerClickerGame;
    }
}

export default ModuleClickerGame