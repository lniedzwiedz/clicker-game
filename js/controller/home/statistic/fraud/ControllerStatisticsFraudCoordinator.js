export class ControllerStatisticsFraudCoordinator{

    constructor(controllerStatisticsFraudMain, controllerStatisticsFraudTotal, controllerStatisticsFraudHistory) {
        this.controllerStatisticsFraudMain = controllerStatisticsFraudMain;
        this.controllerStatisticsFraudTotal = controllerStatisticsFraudTotal;
        this.controllerStatisticsFraudHistory = controllerStatisticsFraudHistory
    }

    createStatisticsFraud(gameRoundCount) {
        this.createStatisticsFraudPrimary();
        this.creatStatisticsFraudTotal();
        this.createStatisticsFraudHistory(gameRoundCount);
    }

    createStatisticsFraudPrimary(){
        this.controllerStatisticsFraudMain.createStatisticsFraudPrimary();
    }

    creatStatisticsFraudTotal(){
        this.controllerStatisticsFraudTotal.creatStatisticsFraudTotal();
    }

    createStatisticsFraudHistory(gameRoundCount){
        this.controllerStatisticsFraudHistory.creatStatisticsFraudTime(gameRoundCount);
    }


    updateStatisticFraud(fraudCountedRoundNumber, fraudTotalValue, fraudRoundIndex){
        this.updateStatisticFraudTotal(fraudTotalValue);
        this.updateStatisticFraudHistory(fraudCountedRoundNumber, fraudRoundIndex);
    }

    updateStatisticFraudTotal(fraudTotalValue){
        this.controllerStatisticsFraudTotal.setFraudTotalValue(fraudTotalValue);
    }

    updateStatisticFraudHistory(fraudCountedRoundNumber, fraudRoundIndex){
        // this.controllerStatisticsFraudHistory.setFraudTotalValue(fraudCountedRoundNumber, fraudRoundIndex);
    }

}