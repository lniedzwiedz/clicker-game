export class ControllerStatisticsFraud {

    constructor(viewStatisticsFraud, actionStatisticsFraud) {
        this.viewStatisticsFraud = viewStatisticsFraud;
        this.actionStatisticsFraud = actionStatisticsFraud;
    }

    createConfigurationGameStatisticsTimeFraud(maxClicksNumber) {
        this.viewStatisticsFraud.createStatisticsFraud(
            maxClicksNumber
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