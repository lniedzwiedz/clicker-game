import {ModuleButtons} from "./ModuleButtons.js";
import {ModuleStatistics} from "./ModuleStatistics.js";
import {ControllerMainGame} from "../controller/ControllerMainGame.js";


export class ModuleGame {

    constructor() {

        this.moduleButtons =
            new ModuleButtons();

        this.moduleStatistics =
            new ModuleStatistics();

        this.controllerMainGame =
            new ControllerMainGame(
                this.moduleButtons.getControllerButtonsMain(),
                this.moduleStatistics.getControllerStatisticsMain(),
            );
    }

    // getControllerControllerMainGame() {
    //     return this.controllerMainGame;
    // }

    createGame() {
        this.moduleButtons.createGame();
        this.controllerMainGame.configureStartGame();
    }
}