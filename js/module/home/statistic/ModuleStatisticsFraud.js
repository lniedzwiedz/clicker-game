import ViewStatisticsFraudPrimary from "../../../view/home/statistic/fraud/ViewStatisticsFraudPrimary.js";
import {ControllerStatisticsFraudPrimary} from "../../../controller/home/statistic/fraud/ControllerStatisticsFraudPrimary.js";

import {ViewStatisticsFraudSummary} from "../../../view/home/statistic/fraud/ViewStatisticsFraudSummary.js";
import {
    ControllerStatisticsFraudSummary
} from "../../../controller/home/statistic/fraud/ControllerStatisticsFraudSummary.js";

import {ViewStatisticsFraudHistory} from "../../../view/home/statistic/fraud/ViewStatisticsFraudHistory.js";
import {
    ControllerStatisticsFraudHistory
} from "../../../controller/home/statistic/fraud/ControllerStatisticsFraudHistory.js";

import {
    ControllerStatisticsFraudCoordinator
} from "../../../controller/home/statistic/fraud/ControllerStatisticsFraudCoordinator.js";


export class ModuleStatisticsFraud {

    constructor() {

        this.viewStatisticsFraudMain =
            new ViewStatisticsFraudPrimary();

        this.controllerStatisticsFraudMain =
            new ControllerStatisticsFraudPrimary(
                this.viewStatisticsFraudMain
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
                this.controllerStatisticsFraudMain,
                this.controllerStatisticsFraudSummary,
                this.controllerStatisticsFraudHistory
            );
    }

    getControllerStatisticsFraudCoordinator() {
        return this.controllerStatisticsFraudCoordinator;
    }
}