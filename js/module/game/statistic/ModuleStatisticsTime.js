import {ViewStatisticsTimePrimary} from "../../../view/game/statistic/time/ViewStatisticsTimePrimary.js";
import {ActionStatisticsTime} from "../../../action/statistic/ActionStatisticsTime.js";
import {ControllerStatisticsTimePrimary} from "../../../controller/game/statistic/time/ControllerStatisticsTimePrimary.js";

import {ViewStatisticsTimeSummary} from "../../../view/game/statistic/time/ViewStatisticsTimeSummary.js";
import {ControllerStatisticsTimeSummary} from "../../../controller/game/statistic/time/controllerStatisticsTimeSummary.js";

import {ViewStatisticsTimeHistory} from "../../../view/game/statistic/time/ViewStatisticsTimeHistory.js";
import {
    ControllerStatisticsTimeHistory
} from "../../../controller/game/statistic/time/controllerStatisticsTimeHistory.js";

import {
    ControllerStatisticsTimeCoordinator
} from "../../../controller/game/statistic/time/ControllerStatisticsTimeCoordinator.js";

export class ModuleStatisticsTime {


    constructor() {

        this.viewStatisticsTimePrimary =
            new ViewStatisticsTimePrimary();

        this.actionStatisticsTime =
            new ActionStatisticsTime();

        this.controllerStatisticsTimePrimary =
            new ControllerStatisticsTimePrimary(
                this.viewStatisticsTimePrimary,
                this.actionStatisticsTime
            );


        this.viewStatisticsTimeBest =
            new ViewStatisticsTimeSummary();

        this.controllerStatisticsTimeBest =
            new ControllerStatisticsTimeSummary(
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
                this.controllerStatisticsTimePrimary,
                this.controllerStatisticsTimeBest,
                this.controllerStatisticsTimeHistory
            );
    }

    getControllerStatisticsTimeCoordinator() {
        return this.controllerStatisticsTimeCoordinator;
    }
}
