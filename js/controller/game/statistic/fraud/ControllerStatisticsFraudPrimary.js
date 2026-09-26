export class ControllerStatisticsFraudPrimary {

    constructor(viewStatisticsFraudPrimary) {
        this.viewStatisticsFraudPrimary = viewStatisticsFraudPrimary;
    }

    createStatisticsFraudPrimary() {
        this.viewStatisticsFraudPrimary.createContainerStatisticsFraudPrimary();
    }

    removeStatisticsFraudPrimary() {
        this.viewStatisticsFraudPrimary.removeContainerStatisticsFraudPrimary();
    }

    // setStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber, fraudCountRoundIndex) {
    //     this.viewStatisticsFraud.setStatisticFraudData(
    //         fraudCountedSumNumber,
    //         fraudCountedNumber,
    //         fraudCountRoundIndex
    //     );
    // }
}