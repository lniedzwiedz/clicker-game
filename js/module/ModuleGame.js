import {ModuleConfiguration} from "./ModuleConfiguration.js";
import {ModuleButtons} from "./ModuleButtons.js";
import {ModuleGameState} from "./ModuleGameState.js";
import {ModuleStatistics} from "./ModuleStatistics.js";

import {ControllerMainGame} from "../controller/ControllerMainGame.js";


export class ModuleGame {

    constructor() {

        this.moduleConfiguration =
            new ModuleConfiguration();

        this.moduleButtons =
            new ModuleButtons();

        this.moduleGameState =
            new ModuleGameState();

        this.moduleStatistics =
            new ModuleStatistics();

        this.controllerMainGame =
            new ControllerMainGame(
                this.moduleConfiguration.getControllerConfiguration(),
                this.moduleButtons.getControllerButtonsMain(),
                this.moduleGameState.getControllerGameStateMain(),
                this.moduleStatistics.getControllerStatisticsMain(),
            );
    }

    // getControllerControllerMainGame() {
    //     return this.controllerMainGame;
    // }

    createGame() {
        // this.moduleConfiguration.createConfiguration();
        // this.moduleButtons.createGame();
        // this.controllerMainGame.configureStartGame();
        this.controllerMainGame.configureStartGame();
    }
}