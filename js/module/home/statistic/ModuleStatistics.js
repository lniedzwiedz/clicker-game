import {ViewStatisticsTimePrimary} from "../../../view/home/statistic/time/ViewStatisticsTimePrimary.js";
import {ActionStatisticsTime} from "../../../action/statistic/ActionStatisticsTime.js";
import {ControllerStatisticsTimeMain} from "../../../controller/home/statistic/time/ControllerStatisticsTimeMain.js";

import ViewStatisticsFraudPrimary from "../../../view/home/statistic/fraud/ViewStatisticsFraudPrimary.js";
import {ControllerStatisticsFraudMain} from "../../../controller/home/statistic/fraud/ControllerStatisticsFraudMain.js";


import {ActionStatisticsFraud} from "../../../action/statistic/ActionStatisticsFraud.js";

import {ModuleStatisticsFraud} from "./ModuleStatisticsFraud.js";
import {ModuleStatisticsTime} from "./ModuleStatisticsTime.js";

import {ControllerStatisticsCoordinator} from "../../../controller/home/statistic/ControllerStatisticsCoordinator.js";


export class ModuleStatistics {

    constructor() {

        // this.viewStatisticsTime =
        //     new ViewStatisticsTimePrimary();
        //
        // this.actionStatisticsTime =
        //     new ActionStatisticsTime();
        //
        // this.controllerStatisticsTime =
        //     new ControllerStatisticsTimeMain(
        //         this.viewStatisticsTime,
        //         this.actionStatisticsTime);


        // this.viewStatisticsFraudMain =
        //     new ViewStatisticsFraudPrimary();
        //
        // this.actionStatisticsFraud =
        //     new ActionStatisticsFraud();
        //
        // this.controllerStatisticsFraudMain =
        //     new ControllerStatisticsFraudMain(
        //         this.viewStatisticsFraudMain,
        //         this.actionStatisticsFraud);

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