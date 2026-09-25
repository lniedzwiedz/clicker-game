import ViewStatisticsFraudPrimary from "../../../view/game/statistic/fraud/ViewStatisticsFraudPrimary.js";
import {ControllerStatisticsFraudPrimary} from "../../../controller/game/statistic/fraud/ControllerStatisticsFraudPrimary.js";

import {ViewStatisticsFraudSummary} from "../../../view/game/statistic/fraud/ViewStatisticsFraudSummary.js";
import {
    ControllerStatisticsFraudSummary
} from "../../../controller/game/statistic/fraud/ControllerStatisticsFraudSummary.js";

import {ViewStatisticsFraudHistory} from "../../../view/game/statistic/fraud/ViewStatisticsFraudHistory.js";
import {
    ControllerStatisticsFraudHistory
} from "../../../controller/game/statistic/fraud/ControllerStatisticsFraudHistory.js";

import {
    ControllerStatisticsFraudCoordinator
} from "../../../controller/game/statistic/fraud/ControllerStatisticsFraudCoordinator.js";


export class ModuleStatisticsFraud {

    constructor() {

        this.viewStatisticsFraudPrimary =
            new ViewStatisticsFraudPrimary();

        this.controllerStatisticsFraudPrimary =
            new ControllerStatisticsFraudPrimary(
                this.viewStatisticsFraudPrimary
            );


        this.viewStatisticsFraudSummary =
            new ViewStatisticsFraudSummary();

        this.controllerStatisticsFraudSummary =
            new ControllerStatisticsFraudSummary(
                this.viewStatisticsFraudSummary
            );


        this.viewStatisticsFraudHistory =
            new ViewStatisticsFraudHistory();

        this.controllerStatisticsFraudHistory =
            new ControllerStatisticsFraudHistory(
                this.viewStatisticsFraudHistory
            );


        this.controllerStatisticsFraudCoordinator =
            new ControllerStatisticsFraudCoordinator(
                this.controllerStatisticsFraudPrimary,
                this.controllerStatisticsFraudSummary,
                this.controllerStatisticsFraudHistory
            );
    }

    getControllerStatisticsFraudCoordinator() {
        return this.controllerStatisticsFraudCoordinator;
    }
}