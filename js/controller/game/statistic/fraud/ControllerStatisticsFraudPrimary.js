export class ControllerStatisticsFraudPrimary {

    constructor(viewStatisticsFraudPrimary) {
        this.viewStatisticsFraudPrimary = viewStatisticsFraudPrimary;
    }

    createStatisticsFraudPrimary() {
        this.viewStatisticsFraudPrimary.createContainerStatisticsFraudPrimary();
    }


    // setStatisticFraudData(fraudCountedSumNumber, fraudCountedNumber, fraudCountRoundIndex) {
    //     this.viewStatisticsFraud.setStatisticFraudData(
    //         fraudCountedSumNumber,
    //         fraudCountedNumber,
    //         fraudCountRoundIndex
    //     );
    // }
    //
    // removeStatisticsFraud() {
    //     this.viewStatisticsFraud.removeContainerStatisticsFraud();
    // }
}