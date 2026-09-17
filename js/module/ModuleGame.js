import {ModuleButtons} from "./ModuleButtons.js";
import {ModuleStatistics} from "./ModuleStatistics.js";
import {ControllerMainGame} from "../controller/ControllerMainGame.js";
import {ModuleMenu} from "./ModuleMenu.js";


export class ModuleGame {

    constructor() {

        this.moduleMenu =
            new ModuleMenu();

        this.moduleButtons =
            new ModuleButtons();

        this.moduleStatistics =
            new ModuleStatistics();

        this.controllerMainGame =
            new ControllerMainGame(
                this.moduleMenu.getControllerModuleMenu(),
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