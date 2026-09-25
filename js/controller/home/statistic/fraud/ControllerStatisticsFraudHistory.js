export class ControllerStatisticsFraudHistory {

    constructor(viewStatisticsFraudHistory) {
        this.viewStatisticsFraudHistory = viewStatisticsFraudHistory;
    }

    creatStatisticsFraudHistory(gameRoundCount){
        this.viewStatisticsFraudHistory.createContainerStatisticsFraudHistory(gameRoundCount);
    }

    // setFraudTimeValue(fraudTotalValue){
    //     // this.viewStatisticsFraudHistory.setFraudTotalValue(fraudTotalValue);
    // }
}