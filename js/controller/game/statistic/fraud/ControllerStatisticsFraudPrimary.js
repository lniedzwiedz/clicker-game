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
}