import {ViewGameState} from "../view/control/ViewGameState.js";
import {ControllerGameState} from "../controller/Controller/ControllerGameState.js";

import {ViewButtonStart} from "../view/control/ViewButtonStart.js";
import {ControllerButtonStart} from "../controller/Controller/ControllerButtonStart.js";

import {ViewButtonStop} from "../view/control/ViewButtonStop.js";
import {ControllerButtonStop} from "../controller/Controller/ControllerButtonStop.js";

import {ControllerGameStateMain} from "../controller/Controller/ControllerGameStateMain.js";


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

    createGameState() {
        this.controllerGameStateMain.createGameState();
    }
}