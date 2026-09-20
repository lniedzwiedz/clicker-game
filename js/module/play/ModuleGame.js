import {ModuleConfiguration} from "../home/configuration/ModuleConfiguration.js";
import {ModuleButtons} from "../home/play/ModuleButtons.js";
import {ModuleGameState} from "../home/stateGame/ModuleGameState.js";
import {ModuleStatistics} from "../home/statistic/ModuleStatistics.js";

import {ControllerMainGame} from "../../controller/home/play/ControllerMainGame.js";


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
                this.moduleConfiguration.getControllerConfigurationCoordinator(),
                this.moduleButtons.getControllerButtonsMain(),
                this.moduleGameState.getControllerGameStateCoordinator(),
                this.moduleStatistics.getControllerStatisticsCoordinator(),
            );
    }

    getControllerMainGame() {
        return this.controllerMainGame;
    }
}