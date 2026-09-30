import {
    createElementDiv
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsTimeHistory
    from "../../../../common/variable/game/statistic/time/variablesStatisticsTimeHistory.js";


export class ViewStatisticsTimeHistory {

    createContainerStatisticsTimedHistory() {
        this.createContainerStatisticsTimeHistoryPrimary();
        // this.createContainerHistoryRound();
        // this.createContainerHistoryName();
    }

    createContainerStatisticsTimeHistoryPrimary() {
        this.createContainerStatisticsTimeHistoryMain();
        this.createContainerStatisticsTimeHistoryMainParts();
    }

    createContainerStatisticsTimeHistoryMain() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeMainPartsId,
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMainId
        );
    }

    createContainerStatisticsTimeHistoryMainParts() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMainId,
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMainPartsId
        );
    }


}