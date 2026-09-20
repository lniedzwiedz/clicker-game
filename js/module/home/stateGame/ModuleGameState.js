import {ViewGameStateMain} from "../../../view/home/gameState/ViewGameStateMain.js";
import {ControllerGameStateMain} from "../../../controller/home/gameState/ControllerGameStateMain.js";

import {ViewButtonStart} from "../../../view/home/gameState/ViewButtonStart.js";
import {ControllerButtonStart} from "../../../controller/home/gameState/ControllerButtonStart.js";

import {ViewButtonStop} from "../../../view/home/gameState/ViewButtonStop.js";
import {ControllerButtonStop} from "../../../controller/home/gameState/ControllerButtonStop.js";

import {ControllerGameStateCoordinator} from "../../../controller/home/gameState/ControllerGameStateCoordinator.js";


export class ModuleGameState {

    constructor() {

        this.viewGameStateMain =
            new ViewGameStateMain();

        this.controllerGameStateMain =
            new ControllerGameStateMain(
                this.viewGameStateMain
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