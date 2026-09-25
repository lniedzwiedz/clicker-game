import {ViewStatisticsTimePrimary} from "../../../view/home/statistic/time/ViewStatisticsTimePrimary.js";
import {ActionStatisticsTime} from "../../../action/statistic/ActionStatisticsTime.js";
import {ControllerStatisticsTimePrimary} from "../../../controller/home/statistic/time/ControllerStatisticsTimePrimary.js";

import {ViewStatisticsTimeBest} from "../../../view/home/statistic/time/ViewStatisticsTimeBest.js";
import {ControllerStatisticsTimeBest} from "../../../controller/home/statistic/time/controllerStatisticsTimeBest.js";

import {ViewStatisticsTimeHistory} from "../../../view/home/statistic/time/ViewStatisticsTimeHistory.js";
import {
    ControllerStatisticsTimeHistory
} from "../../../controller/home/statistic/time/controllerStatisticsTimeHistory.js";

import {
    ControllerStatisticsTimeCoordinator
} from "../../../controller/home/statistic/time/ControllerStatisticsTimeCoordinator.js";

export class ModuleStatisticsTime {


    constructor() {

        this.viewStatisticsTimePrimary =
            new ViewStatisticsTimePrimary();

        this.actionStatisticsTime =
            new ActionStatisticsTime();

        this.controllerStatisticsTimeMain =
            new ControllerStatisticsTimePrimary(
                this.viewStatisticsTimePrimary,
                this.actionStatisticsTime
            );


        this.viewStatisticsTimeBest =
            new ViewStatisticsTimeBest();

        this.controllerStatisticsTimeBest =
            new ControllerStatisticsTimeBest(
                this.viewStatisticsTimeBest
            );

        this.viewStatisticsTimeHistory =
            new ViewStatisticsTimeHistory();

        this.controllerStatisticsTimeHistory =
            new ControllerStatisticsTimeHistory(
                this.viewStatisticsTimeHistory
            );


        this.controllerStatisticsTimeCoordinator =
            new ControllerStatisticsTimeCoordinator(
                this.controllerStatisticsTimeMain,
                this.controllerStatisticsTimeBest,
                this.controllerStatisticsTimeHistory
            );
    }

    getControllerStatisticsTimeCoordinator() {
        return this.controllerStatisticsTimeCoordinator;
    }
}
