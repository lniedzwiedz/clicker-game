import * as variablesGameModeFraud from "../../../../game/common/variablesGameModeFraud.js";


export class ControllerStatisticsFraudCoordinator {

    constructor(controllerStatisticsFraudPrimary, controllerStatisticsFraudTotal, controllerStatisticsFraudHistory) {
        this.controllerStatisticsFraudPrimary = controllerStatisticsFraudPrimary;
        this.controllerStatisticsFraudTotal = controllerStatisticsFraudTotal;
        this.controllerStatisticsFraudHistory = controllerStatisticsFraudHistory
    }

    configureStatisticsFraud(gameRoundCount) {
        this.createStatisticsFraud(gameRoundCount);
    }

    removeStatisticsFraud() {
        this.controllerStatisticsFraudPrimary.removeStatisticsFraudPrimary();
    }

    createStatisticsFraud(gameRoundCount) {
        this.createStatisticsFraudPrimary();
        this.creatStatisticsFraudSummary();
        this.createStatisticsFraudHistory(gameRoundCount);
    }

    createStatisticsFraudPrimary() {
        this.controllerStatisticsFraudPrimary.createStatisticsFraudPrimary();
    }

    creatStatisticsFraudSummary() {
        this.controllerStatisticsFraudTotal.creatStatisticsFraudSummary();
    }

    createStatisticsFraudHistory(gameRoundCount) {
        this.controllerStatisticsFraudHistory.creatStatisticsFraudHistory(gameRoundCount);
    }

    updateStatisticFraud(fraudStatisticsMap) {

        let fraudTotalValuePerGame =
            fraudStatisticsMap.get(variablesGameModeFraud.mapKeyStatisticsFraudTotalValuePerGame);
        // console.log("fraudTotalValuePerGame = " + fraudTotalValuePerGame);
        this.updateStatisticsFraudSummary(fraudTotalValuePerGame);


        let fraudTotalValuePerRoundNumber =
            fraudStatisticsMap.get(variablesGameModeFraud.mapKeyStatisticsFraudTotalValuePerRoundNumber);
        // console.log("fraudTotalValuePerRoundNumber = " + fraudTotalValuePerRoundNumber);

        let fraudRoundNumber =
            fraudStatisticsMap.get(variablesGameModeFraud.mapKeyStatisticsFraudRoundNumber);
        // console.log("fraudRoundNumber = " + fraudRoundNumber);

        this.updateStatisticFraudHistory(fraudRoundNumber, fraudTotalValuePerRoundNumber);
    }

    updateStatisticsFraudSummary(fraudTotalValue) {
        this.controllerStatisticsFraudTotal.setStatisticsFraudSummaryTotalValue(fraudTotalValue);
    }

    updateStatisticFraudHistory(fraudRoundNumber, fraudTotalValuePerRoundNumber) {
        this.controllerStatisticsFraudHistory.setStatisticsFraudHistoryRoundNumberValue(fraudRoundNumber, fraudTotalValuePerRoundNumber);
    }
}