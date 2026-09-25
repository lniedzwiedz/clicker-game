import {ViewGameStatePrimary} from "../../../view/game/gameState/ViewGameStatePrimary.js";
import {ControllerGameStatePrimary} from "../../../controller/game/gameState/ControllerGameStatePrimary.js";

import {ViewGameStateButtonStart} from "../../../view/game/gameState/ViewGameStateButtonStart.js";
import {ControllerGameStateButtonStart} from "../../../controller/game/gameState/ControllerGameStateButtonStart.js";

import {ViewGameStateButtonStop} from "../../../view/game/gameState/ViewGameStateButtonStop.js";
import {ControllerGameStateButtonStop} from "../../../controller/game/gameState/ControllerGameStateButtonStop.js";

import {ControllerGameStateCoordinator} from "../../../controller/game/gameState/ControllerGameStateCoordinator.js";


export class ModuleGameState {

    constructor() {

        this.viewGameStateMain =
            new ViewGameStatePrimary();

        this.controllerGameStateMain =
            new ControllerGameStatePrimary(
                this.viewGameStateMain
            );


        this.viewButtonStart =
            new ViewGameStateButtonStart();

        this.controllerButtonStart =
            new ControllerGameStateButtonStart(
                this.viewButtonStart
            );


        this.viewButtonStop =
            new ViewGameStateButtonStop();

        this.controllerButtonStop =
            new ControllerGameStateButtonStop(
                this.viewButtonStop
            );


        this.controllerGameStateCoordinator =
            new ControllerGameStateCoordinator(
                this.controllerGameStateMain,
                this.controllerButtonStart,
                this.controllerButtonStop
            );
    }

    getControllerGameStateCoordinator() {
        return this.controllerGameStateCoordinator;
    }
}