import {ViewStatisticsTime} from "../../../view/home/statistic/ViewStatisticsTime.js";
import {ActionStatisticsTime} from "../../../action/statistic/ActionStatisticsTime.js";
import {ControllerStatisticsTime} from "../../../controller/home/statistic/ControllerStatisticsTime.js";

import ViewStatisticsFraud from "../../../view/home/statistic/ViewStatisticsFraud.js";
import {ControllerStatisticsFraud} from "../../../controller/home/statistic/ControllerStatisticsFraud.js";

import {ControllerStatisticsCoordinator} from "../../../controller/home/statistic/ControllerStatisticsCoordinator.js";

import {ActionStatisticsFraud} from "../../../action/statistic/ActionStatisticsFraud.js";


export class ModuleStatistics {

    constructor() {

        this.viewStatisticsTime =
            new ViewStatisticsTime();

        this.actionStatisticsTime =
            new ActionStatisticsTime();

        this.controllerStatisticsTime =
            new ControllerStatisticsTime(
                this.viewStatisticsTime,
                this.actionStatisticsTime);


        this.viewStatisticsFraud =
            new ViewStatisticsFraud();

        this.actionStatisticsFraud =
            new ActionStatisticsFraud();

        this.controllerStatisticsFraud =
            new ControllerStatisticsFraud(
                this.viewStatisticsFraud,
                this.actionStatisticsFraud);


        this.controllerStatisticsCoordinator =
            new ControllerStatisticsCoordinator(
                this.controllerStatisticsTime,
                this.controllerStatisticsFraud);
    }

    getControllerStatisticsCoordinator() {
        return this.controllerStatisticsCoordinator;
    }
}