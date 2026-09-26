import {ViewGameStatePrimary} from "../../../view/game/gameState/ViewGameStatePrimary.js";
import {ControllerGameStatePrimary} from "../../../controller/game/gameState/ControllerGameStatePrimary.js";

import {ViewGameStateButtonStart} from "../../../view/game/gameState/ViewGameStateButtonStart.js";
import {ControllerGameStateButtonStart} from "../../../controller/game/gameState/ControllerGameStateButtonStart.js";

import {ViewGameStateButtonStop} from "../../../view/game/gameState/ViewGameStateButtonStop.js";
import {ControllerGameStateButtonStop} from "../../../controller/game/gameState/ControllerGameStateButtonStop.js";

import {ControllerGameStateCoordinator} from "../../../controller/game/gameState/ControllerGameStateCoordinator.js";


export class ModuleGameState {

    constructor() {

        this.viewGameStatePrimary =
            new ViewGameStatePrimary();

        this.controllerGameStatePrimary =
            new ControllerGameStatePrimary(
                this.viewGameStatePrimary
            );


        this.viewGameStateButtonStart =
            new ViewGameStateButtonStart();

        this.controllerGameStateButtonStart =
            new ControllerGameStateButtonStart(
                this.viewGameStateButtonStart
            );


        this.viewGameStateButtonStop =
            new ViewGameStateButtonStop();

        this.controllerGameStateButtonStop =
            new ControllerGameStateButtonStop(
                this.viewGameStateButtonStop
            );


        this.controllerGameStateCoordinator =
            new ControllerGameStateCoordinator(
                this.controllerGameStatePrimary,
                this.controllerGameStateButtonStart,
                this.controllerGameStateButtonStop
            );
    }

    getControllerGameStateCoordinator() {
        return this.controllerGameStateCoordinator;
    }
}