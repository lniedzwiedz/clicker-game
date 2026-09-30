import {
    createElementDiv,
    removeElementById
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsFraud
    from "../../../../common/variable/game/statistic/fraud/variablesStatisticsFraudPrimary.js";


class ViewStatisticsFraudPrimary {

    createContainerStatisticsFraudPrimary() {
        this.createContainerStatisticsFraudMain();
        this.createContainerStatisticsFraudMainParts();
    }

    createContainerStatisticsFraudMain() {
        createElementDiv(
            variablesStatisticsFraud.containerHomeMainPartsId,
            variablesStatisticsFraud.containerStatisticsFraudMainId
        );
    }

    createContainerStatisticsFraudMainParts() {
        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudMainId,
            variablesStatisticsFraud.containerStatisticsFraudMainPartsId
        );
    }

    removeContainerStatisticsFraudPrimary() {

        console.log(" remove fraud");
        removeElementById(
                variablesStatisticsFraud.containerStatisticsFraudMainId
            );
    }
}

export default ViewStatisticsFraudPrimary