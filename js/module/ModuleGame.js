import {ModuleConfiguration} from "./home/configuration/ModuleConfiguration.js";
import {ModuleButtonGame} from "./home/game/ModuleButtonGame.js";
import {ModuleGameState} from "./home/stateGame/ModuleGameState.js";
import {ModuleStatistics} from "./home/statistic/ModuleStatistics.js";

import {ControllerGameCoordinator} from "../controller/ControllerGameCoordinator.js";


export class ModuleGame {

    constructor() {

        this.moduleConfiguration =
            new ModuleConfiguration();

        this.moduleButtonGame =
            new ModuleButtonGame();

        this.moduleGameState =
            new ModuleGameState();

        this.moduleStatistics =
            new ModuleStatistics();

        this.controllerGameCoordinator =
            new ControllerGameCoordinator(
                this.moduleConfiguration.getControllerConfigurationCoordinator(),
                this.moduleButtonGame.getControllerButtonGameCoordinator(),
                this.moduleGameState.getControllerGameStateCoordinator(),
                this.moduleStatistics.getControllerStatisticsCoordinator(),
            );
    }

    getControllerGameCoordinator() {
        return this.controllerGameCoordinator;
    }
}