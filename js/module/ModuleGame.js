import {ModuleConfiguration} from "./ModuleConfiguration.js";
import {ModuleButtons} from "./ModuleButtons.js";
import {ModuleStatistics} from "./ModuleStatistics.js";
import {ControllerMainGame} from "../controller/ControllerMainGame.js";


export class ModuleGame {

    constructor() {

        this.moduleConfiguration =
            new ModuleConfiguration();

        this.moduleButtons =
            new ModuleButtons();

        this.moduleStatistics =
            new ModuleStatistics();

        this.controllerMainGame =
            new ControllerMainGame(
                this.moduleConfiguration.getControllerConfiguration(),
                this.moduleButtons.getControllerButtonsMain(),
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