import {
    createElementDiv,
    isElementsExistById,
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
            variablesStatisticsFraud.statisticsFraudMainId
        );
    }

    createContainerStatisticsFraudMainParts() {
        createElementDiv(
            variablesStatisticsFraud.statisticsFraudMainId,
            variablesStatisticsFraud.statisticsFraudMainPartsId
        );
    }

    removeContainerStatisticsFraudPrimary() {
        if (isElementsExistById(variablesStatisticsFraud.statisticsFraudMainId))
            removeElementById(
                variablesStatisticsFraud.statisticsFraudMainId
            );
    }
}

export default ViewStatisticsFraudPrimary