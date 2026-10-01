import {
    addElementClassNameById,
    addElementClassNames,
    createElementDiv, createElementI, createElementP, setElementStyletAsGrid, setElementTextById
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsTimeHistory
    from "../../../../common/variable/game/statistic/time/variablesStatisticsTimeHistory.js";
import * as variablesStatisticsFraudHistory
    from "../../../../common/variable/game/statistic/fraud/variablesStatisticsFraudHistory";


export class ViewStatisticsTimeHistory {

    createContainerStatisticsTimedHistory() {
        this.createContainerStatisticsTimeHistoryPrimary();
        this.createContainerHistoryMetrics();
        this.createContainerHistoryName();
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


    createContainerHistoryMetrics() {
        this.createContainerHistoryMetricsPrimary();
        this.createContainerHistoryMetric();

    }


    createContainerHistoryMetricsPrimary() {
        this.createContainerHistoryMetricsMain();
        this.createContainerHistoryMetricsMainParts();
        this.createHistoryIconHourGlassEnd();
    }

    createContainerHistoryMetricsMain() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMainPartsId,
            variablesStatisticsTimeHistory.containerStatisticsTImeHistoryMetricsMainId
        );
    }

    createContainerHistoryMetricsMainParts() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTImeHistoryMetricsMainId,
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMetricsMainPartsId
        );
    }


    createContainerHistoryMetric() {
        this.createContainerHistoryMetricNumberMain();
        this.createContainerHistoryMetricNumberMainPartsGrid();
    }

    createContainerHistoryMetricNumberMain() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMetricsMainPartsId,
            variablesStatisticsTimeHistory.historyMetricNumberMainIdPrefix
        );
    }

    createContainerHistoryMetricNumberMainPartsGrid() {

        let childId = variablesStatisticsTimeHistory.historyMetricNumberMainIdPrefix;

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        let gridTemplateRowsChild = "1fr";
        let gridTemplateColumnsChild = "1fr";

        setElementStyletAsGrid(
            childId,
            gridRowStartNumberChild,
            gridColumnStartNumberChild,
            gridRowEndNumberChild,
            gridColumnEndNumberChild,
            gridTemplateRowsChild,
            gridTemplateColumnsChild);

    }


    createHistoryIconHourGlassEnd(){
       let index = 1;

        // createElementI(
        //     variablesStatisticsTimeHistory.historyMetricNumberMainIdPrefix + index,
        //     variablesStatisticsTimeHistory.historyRoundNumberIconWhiskeyGlassIdPrefix + index,
        //     variablesStatisticsTimeHistory.statisticsFraudSumIconStyleSolid,
        //     variablesStatisticsTimeHistory.statisticsFraudHistoryRoundIconWhiskeyGlass
        // );
    }




    createContainerHistoryName() {
        this.createContainerHistoryNamePrimary();
        this.createHistoryNameMain();
        this.createHistoryNameText();
    }

    createContainerHistoryNamePrimary() {
        this.createContainerHistoryNameMain();
        this.createContainerHistoryNameMainParts();
    }

    createContainerHistoryNameMain() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMainPartsId,
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryNameMainId
        );
    }

    createContainerHistoryNameMainParts() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryNameMainId,
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryNameMainPartsId
        );
    }

    createHistoryNameMain() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryNameMainPartsId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameId
        );

        addElementClassNames(
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleDisplayFlex,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyle
        );
    }

    createHistoryNameText() {
        createElementP(
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameTextId
        );

        setElementTextById(
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameTextId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameText
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameTextId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleText
        );
    }


}