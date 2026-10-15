import {ModuleGame} from "./ModuleGame.js";

import {ControllerGameClicker} from "../../controller/game/ControllerGameClicker.js";
import {GameManager} from "../../game/GameManager";


class ModuleClickerGame {

    constructor() {

        this.moduleGame =
            new ModuleGame();

        this.gameManager =
            new GameManager();

        this.controllerClickerGame =
            new ControllerGameClicker(
                this.gameManager,
                this.moduleGame.getControllerGameCoordinator()
            );
    }

    getControllerGameClicker() {
        return this.controllerClickerGame;
    }
}

export default ModuleClickerGame