import {ModuleStatisticsFraud} from "./ModuleStatisticsFraud.js";
import {ModuleStatisticsTime} from "./ModuleStatisticsTime.js";

import {ControllerStatisticsCoordinator} from "../../../controller/game/statistic/ControllerStatisticsCoordinator.js";


export class ModuleStatistics {

    constructor() {

        this.moduleStatisticsTime =
            new ModuleStatisticsTime();

        this.moduleStatisticsFraud =
            new ModuleStatisticsFraud();

        this.controllerStatisticsCoordinator =
            new ControllerStatisticsCoordinator(
                this.moduleStatisticsTime.getControllerStatisticsTimeCoordinator(),
                this.moduleStatisticsFraud.getControllerStatisticsFraudCoordinator()
            );
    }

    getControllerStatisticsCoordinator() {
        return this.controllerStatisticsCoordinator;
    }
}