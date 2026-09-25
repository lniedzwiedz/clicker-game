export class ControllerStatisticsFraudCoordinator {

    constructor(controllerStatisticsFraudPrimary, controllerStatisticsFraudTotal, controllerStatisticsFraudHistory) {
        this.controllerStatisticsFraudPrimary = controllerStatisticsFraudPrimary;
        this.controllerStatisticsFraudTotal = controllerStatisticsFraudTotal;
        this.controllerStatisticsFraudHistory = controllerStatisticsFraudHistory
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

    updateStatisticFraud(fraudCountedRoundNumber, fraudTotalValue, historyRoundNumber) {
        this.updateStatisticsFraudSummary(fraudTotalValue);
        this.updateStatisticFraudHistory(fraudCountedRoundNumber, historyRoundNumber);
    }

    updateStatisticsFraudSummary(fraudTotalValue) {
        this.controllerStatisticsFraudTotal.setStatisticsFraudSummaryTotalValue(fraudTotalValue);
    }

    updateStatisticFraudHistory(fraudCountedRoundNumber, historyRoundNumber) {
        this.controllerStatisticsFraudHistory.setStatisticsFraudHistoryRoundNumberValue(fraudCountedRoundNumber, historyRoundNumber);
    }
}