import {
    createElementDiv,
    removeElementById,
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsTimePrimary
    from "../../../../common/variable/game/statistic/time/variablesStatisticsTimePrimary.js";


export class ViewStatisticsTimePrimary {

    createContainerStatisticsTimePrimary() {
        this.createContainerStatisticsTimeMain();
        this.createContainerStatisticsTimeMainParts();
    }

    createContainerStatisticsTimeMain() {
        createElementDiv(
            variablesStatisticsTimePrimary.containerHomeMainPartsId,
            variablesStatisticsTimePrimary.containerStatisticsTimeMainId
        );
    }

    createContainerStatisticsTimeMainParts() {
        createElementDiv(
            variablesStatisticsTimePrimary.containerStatisticsTimeMainId,
            variablesStatisticsTimePrimary.containerStatisticsTimeMainPartsId
        );
    }

    removeContainerStatisticsTimePrimary() {
        removeElementById(
            variablesStatisticsTimePrimary.containerStatisticsTimeMainId
        );
    }
}