export class ControllerStatisticsFraudHistory {

    constructor(viewStatisticsFraudHistory) {
        this.viewStatisticsFraudHistory = viewStatisticsFraudHistory;
    }

    creatStatisticsFraudHistory(gameRoundCount) {
        this.viewStatisticsFraudHistory.createContainerStatisticsFraudHistory(gameRoundCount);
    }

    setStatisticsFraudHistoryRoundNumberValue(fraudCountedRoundNumber, historyRoundNumber) {
        this.viewStatisticsFraudHistory.setStatisticsFraudHistoryRoundNumberValue(fraudCountedRoundNumber, historyRoundNumber);
    }
}