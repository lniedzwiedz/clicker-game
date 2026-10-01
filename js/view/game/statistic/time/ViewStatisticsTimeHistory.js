import {
    addElementClassNameById,
    addElementClassNames,
    createElementDiv, createElementI, createElementP, setElementStyletAsGrid, setElementTextById, valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsTimeHistory
    from "../../../../common/variable/game/statistic/time/variablesStatisticsTimeHistory.js";


export class ViewStatisticsTimeHistory {

    createContainerStatisticsTimedHistory() {
        this.createContainerStatisticsTimeHistoryPrimary();
        this.createContainerStatisticsTimeHistoryMetrics();
        this.createContainerStatisticsTimeHistoryName();
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

    createContainerStatisticsTimeHistoryMetrics() {
        this.createContainerStatisticsTimeHistoryMetricsPrimary();
        this.createContainerHistoryMetrics();
    }


    createContainerStatisticsTimeHistoryMetricsPrimary() {
        this.createContainerStatisticsTimeHistoryMetricsMain();
        this.createContainerStatisticsTimeHistoryMetricsMainParts();
    }

    createContainerStatisticsTimeHistoryMetricsMain() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMainPartsId,
            variablesStatisticsTimeHistory.containerStatisticsTImeHistoryMetricsMainId
        );
    }

    createContainerStatisticsTimeHistoryMetricsMainParts() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTImeHistoryMetricsMainId,
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMetricsMainPartsId
        );
    }


    createContainerHistoryMetrics() {

        let gridRowStartNumber = 2;
        let gridColumnStartNumber = 2;
        let gridRowEndNumber = 3;
        let gridColumnEndNumber = 3;


        for (let index = 0; index < 3; index++) {


            // this.createContainerHistoryMetricMain(index);
            //
            // this.setContainerHistoryMetricMainGrid(
            //     index,
            //     gridRowStartNumber, gridColumnStartNumber,
            //     gridRowEndNumber, gridColumnEndNumber);


            this.createContainerHistoryMetric(
                index,
                gridRowStartNumber, gridColumnStartNumber,
                gridRowEndNumber, gridColumnEndNumber);


            gridColumnStartNumber += 2;
            gridColumnEndNumber += 2;
        }
    }


    createContainerHistoryMetricMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMetricsMainPartsId,
            variablesStatisticsTimeHistory.historyMetricNumberMainIdPrefix
            + valueToString(index)
        );
    }

    setContainerHistoryMetricMainGrid(
        index,
        gridRowStartNumber, gridColumnStartNumber,
        gridRowEndNumber, gridColumnEndNumber) {

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.historyMetricNumberMainIdPrefix
            + valueToString(index),
            gridRowStartNumber,
            gridColumnStartNumber,
            gridRowEndNumber,
            gridColumnEndNumber,
            "1fr",
            "1fr");

    }

    setContainerHistoryMetricMainPartsGrid(index) {

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.historyMetricNumberMainPartsIdPrefix
            + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr 1fr",
            "1fr");

    }

    createContainerHistoryMetricMainParts(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.historyMetricNumberMainIdPrefix
            + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricNumberMainPartsIdPrefix
            + valueToString(index)
        );
    }

    createContainerHistoryMetric(index,
                                 gridRowStartNumber, gridColumnStartNumber,
                                 gridRowEndNumber, gridColumnEndNumber) {


        this.createContainerHistoryMetricPrimary(index,
            gridRowStartNumber, gridColumnStartNumber,
            gridRowEndNumber, gridColumnEndNumber);

        this.createHistoryMetric(index);


    }

    createContainerHistoryMetricPrimary(index,
                                        gridRowStartNumber, gridColumnStartNumber,
                                        gridRowEndNumber, gridColumnEndNumber) {

        this.createContainerHistoryMetricMain(
            index);

        this.setContainerHistoryMetricMainGrid(
            index,
            gridRowStartNumber, gridColumnStartNumber,
            gridRowEndNumber, gridColumnEndNumber);

        this.createContainerHistoryMetricMainParts(index);

        this.setContainerHistoryMetricMainPartsGrid(index);
    }


    createHistoryMetric(index) {
        this.createHistoryMetricMain(index);
        this.createHistoryMetricIcon(index);

    }

    createHistoryMetricMain(index) {

        createElementDiv(
            variablesStatisticsTimeHistory.historyMetricNumberMainPartsIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricTimeValueIdPrefix + valueToString(index)
        );

        addElementClassNames(
            variablesStatisticsTimeHistory.historyMetricTimeValueIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricStyleDisplayFlex,
            variablesStatisticsTimeHistory.historyMetricStyle
        );
    }

    createHistoryMetricIcon(index) {
        createElementI(
            variablesStatisticsTimeHistory.historyMetricTimeValueIdPrefix + index,
            variablesStatisticsTimeHistory.historyMetricIconClockIdPrefix + index,
            variablesStatisticsTimeHistory.historyMetricIconStyleSolid,
            variablesStatisticsTimeHistory.historyMetricIconClock
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.historyMetricIconClockIdPrefix + index,
            variablesStatisticsTimeHistory.historyMetricIconStyleClockTimeHistory
        );

    }


    createContainerStatisticsTimeHistoryName() {
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