export class ControllerStatisticsFraudSummary {

    constructor(viewStatisticsFraudSummary) {
        this.viewStatisticsFraudSummary = viewStatisticsFraudSummary
    }

    creatStatisticsFraudSummary() {
        this.viewStatisticsFraudSummary.createContainerStatisticsFraudSummary();
    }

    setStatisticsFraudSummaryTotalValue(fraudTotalValue) {
        this.viewStatisticsFraudSummary.setStatisticsFraudSummaryTotalValue(fraudTotalValue);
    }

}