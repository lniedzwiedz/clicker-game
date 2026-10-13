export class ControllerStatisticsFraudHistory {

    constructor(viewStatisticsFraudHistory) {
        this.viewStatisticsFraudHistory = viewStatisticsFraudHistory;
    }

    creatStatisticsFraudHistory(gameRoundCount) {
        this.viewStatisticsFraudHistory.createContainerStatisticsFraudHistory(gameRoundCount);
    }

    setStatisticsFraudHistoryRoundNumberValue(fraudRoundNumber, fraudTotalValuePerRoundNumber) {
        this.viewStatisticsFraudHistory.setStatisticsFraudHistoryRoundNumberValue(fraudRoundNumber, fraudTotalValuePerRoundNumber);
    }
}