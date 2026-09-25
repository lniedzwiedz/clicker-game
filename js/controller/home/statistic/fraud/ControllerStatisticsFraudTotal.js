export class ControllerStatisticsFraudTotal {

    constructor(viewStatisticsFraudTotal) {
        this.viewStatisticsFraudTotal = viewStatisticsFraudTotal
    }

    creatStatisticsFraudTotal(){
        this.viewStatisticsFraudTotal.createContainerStatisticsFraudTotal();
    }

    setFraudTotalValue(fraudTotalValue){
        this.viewStatisticsFraudTotal.setFraudTotalValue(fraudTotalValue);
    }

}