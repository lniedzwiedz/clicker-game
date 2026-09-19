import {ViewGameState} from "../../../view/home/control/ViewGameState.js";
import {ControllerGameState} from "../../../controller/home/gameState/ControllerGameState.js";

import {ViewButtonStart} from "../../../view/home/control/ViewButtonStart.js";
import {ControllerButtonStart} from "../../../controller/home/gameState/ControllerButtonStart.js";

import {ViewButtonStop} from "../../../view/home/control/ViewButtonStop.js";
import {ControllerButtonStop} from "../../../controller/home/gameState/ControllerButtonStop.js";

import {ControllerGameStateMain} from "../../../controller/home/gameState/ControllerGameStateMain.js";


export class ModuleGameState {

    constructor() {

        this.viewGameState =
            new ViewGameState();

        this.controllerGameState =
            new ControllerGameState(
                this.viewGameState
            );


        this.viewButtonStart =
            new ViewButtonStart();

        this.controllerButtonStart =
            new ControllerButtonStart(
                this.viewButtonStart
            );


        this.viewButtonStop =
            new ViewButtonStop();

        this.controllerButtonStop =
            new ControllerButtonStop(
                this.viewButtonStop
            );


        this.controllerGameStateMain =
            new ControllerGameStateMain(
                this.controllerGameState,
                this.controllerButtonStart,
                this.controllerButtonStop
            );
    }

    getControllerGameStateMain() {
        return this.controllerGameStateMain;
    }
}