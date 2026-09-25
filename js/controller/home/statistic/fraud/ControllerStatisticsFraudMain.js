export class ControllerStatisticsFraudMain {

    constructor(viewStatisticsFraud) {
        this.viewStatisticsFraud = viewStatisticsFraud;
    }

    createStatisticsFraudPrimary() {
        this.viewStatisticsFraud.createContainerStatisticsFraudPrimary();
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