import {ModuleConfiguration} from "./configuration/ModuleConfiguration.js";
import {ModuleButtonGame} from "./buttonGame/ModuleButtonGame.js";
import {ModuleGameState} from "./stateGame/ModuleGameState.js";
import {ModuleStatistics} from "./statistic/ModuleStatistics.js";

import {ControllerGameCoordinator} from "../../controller/game/ControllerGameCoordinator.js";


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
                this.moduleStatistics.getControllerStatisticsCoordinator()
            );
    }

    getControllerGameCoordinator() {
        return this.controllerGameCoordinator;
    }
}