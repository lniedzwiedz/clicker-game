import ViewStatisticsFraudPrimary from "../../../view/home/statistic/fraud/ViewStatisticsFraudPrimary.js";
import {ControllerStatisticsFraudMain} from "../../../controller/home/statistic/fraud/ControllerStatisticsFraudMain.js";

import {ViewStatisticsFraudTotal} from "../../../view/home/statistic/fraud/ViewStatisticsFraudTotal.js";
import {
    ControllerStatisticsFraudTotal
} from "../../../controller/home/statistic/fraud/ControllerStatisticsFraudTotal.js";

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
            new ControllerStatisticsFraudMain(
                this.viewStatisticsFraudMain
            );


        this.viewStatisticsFraudTotal =
            new ViewStatisticsFraudTotal();

        this.controllerStatisticsFraudTotal =
            new ControllerStatisticsFraudTotal(
                this.viewStatisticsFraudTotal
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
                this.controllerStatisticsFraudTotal,
                this.controllerStatisticsFraudHistory
            );
    }

    getControllerStatisticsFraudCoordinator() {
        return this.controllerStatisticsFraudCoordinator;
    }
}