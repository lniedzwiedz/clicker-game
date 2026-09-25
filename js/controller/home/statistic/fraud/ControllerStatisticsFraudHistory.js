export class ControllerStatisticsFraudHistory {

    constructor(viewStatisticsFraudHistory) {
        this.viewStatisticsFraudHistory = viewStatisticsFraudHistory;
    }

    creatStatisticsFraudTime(gameRoundCount){
        this.viewStatisticsFraudHistory.createContainerSectionStatisticsFraudTime(gameRoundCount);
    }

    setFraudTimeValue(fraudTotalValue){
        this.viewStatisticsFraudHistory.setFraudTotalValue(fraudTotalValue);
    }
}