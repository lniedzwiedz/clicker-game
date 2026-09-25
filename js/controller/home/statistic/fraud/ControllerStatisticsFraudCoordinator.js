export class ControllerStatisticsFraudCoordinator{

    constructor(controllerStatisticsFraudMain, controllerStatisticsFraudTotal, controllerStatisticsFraudHistory) {
        this.controllerStatisticsFraudMain = controllerStatisticsFraudMain;
        this.controllerStatisticsFraudTotal = controllerStatisticsFraudTotal;
        this.controllerStatisticsFraudHistory = controllerStatisticsFraudHistory
    }

    createStatisticsFraud(gameRoundCount) {
        this.createStatisticsFraudPrimary();
        this.creatStatisticsFraudSummary();
        this.createStatisticsFraudHistory(gameRoundCount);
    }

    createStatisticsFraudPrimary(){
        this.controllerStatisticsFraudMain.createStatisticsFraudPrimary();
    }

    creatStatisticsFraudSummary(){
        this.controllerStatisticsFraudTotal.creatStatisticsFraudSummary();
    }

    createStatisticsFraudHistory(gameRoundCount){
        this.controllerStatisticsFraudHistory.creatStatisticsFraudHistory(gameRoundCount);
    }


    updateStatisticFraud(fraudCountedRoundNumber, fraudTotalValue, fraudRoundIndex){
        this.updateStatisticsFraudSummaryTotalValue(fraudTotalValue);
        this.updateStatisticFraudHistory(fraudCountedRoundNumber, fraudRoundIndex);
    }

    updateStatisticsFraudSummaryTotalValue(fraudTotalValue){
        this.controllerStatisticsFraudTotal.setStatisticsFraudSummaryTotalValue(fraudTotalValue);
    }

    updateStatisticFraudHistory(fraudCountedRoundNumber, fraudRoundIndex){
        // this.controllerStatisticsFraudTotal.setFraudTotalValue(fraudCountedRoundNumber, fraudRoundIndex);
    }

}