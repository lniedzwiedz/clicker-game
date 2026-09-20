import {ModuleConfiguration} from "./home/configuration/ModuleConfiguration.js";
import {ModuleButtonClick} from "./home/buttonClick/ModuleButtonClick.js";
import {ModuleGameState} from "./home/stateGame/ModuleGameState.js";
import {ModuleStatistics} from "./home/statistic/ModuleStatistics.js";

import {ControllerGameCoordinator} from "../controller/ControllerGameCoordinator.js";


export class ModuleGame {

    constructor() {

        this.moduleConfiguration =
            new ModuleConfiguration();

        this.moduleButtonClick =
            new ModuleButtonClick();

        this.moduleGameState =
            new ModuleGameState();

        this.moduleStatistics =
            new ModuleStatistics();

        this.controllerGameCoordinator =
            new ControllerGameCoordinator(
                this.moduleConfiguration.getControllerConfigurationCoordinator(),
                this.moduleButtonClick.getControllerButtonClickCoordinator(),
                this.moduleGameState.getControllerGameStateCoordinator(),
                this.moduleStatistics.getControllerStatisticsCoordinator(),
            );
    }

    getControllerGameCoordinator() {
        return this.controllerGameCoordinator;
    }
}