import {ViewStatisticsTimePrimary} from "../../../view/game/statistic/time/ViewStatisticsTimePrimary.js";
import {ActionStatisticsTime} from "../../../action/statistic/ActionStatisticsTime.js";
import {ControllerStatisticsTimePrimary} from "../../../controller/game/statistic/time/ControllerStatisticsTimePrimary.js";

import {ViewStatisticsTimeBest} from "../../../view/game/statistic/time/ViewStatisticsTimeBest.js";
import {ControllerStatisticsTimeBest} from "../../../controller/game/statistic/time/controllerStatisticsTimeBest.js";

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
                this.controllerStatisticsTimePrimary,
                this.controllerStatisticsTimeBest,
                this.controllerStatisticsTimeHistory
            );
    }

    getControllerStatisticsTimeCoordinator() {
        return this.controllerStatisticsTimeCoordinator;
    }
}
