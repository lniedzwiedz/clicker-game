export class ControllerStatisticsFraud {

    constructor(viewStatisticsFraud, actionStatisticsFraud) {
        this.viewStatisticsFraud = viewStatisticsFraud;
        this.actionStatisticsFraud = actionStatisticsFraud;
    }

    createConfigurationGameStatisticsTimeFraud(gameRoundCount) {
        this.viewStatisticsFraud.createStatisticsFraud(
            gameRoundCount
        );
    }

    setStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber, fraudCountRoundIndex) {
        this.viewStatisticsFraud.setStatisticFraudData(
            fraudCountedSumNumber,
            fraudCountedNumber,
            fraudCountRoundIndex
        );
    }

    removeStatisticsFraud() {
        this.viewStatisticsFraud.removeContainerStatisticsFraud();
    }
}