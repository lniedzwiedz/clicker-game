import {
    addElementClassNameById,
    addElementClassNamedAndText,
    addElementClassNames,
    createElementDiv,
    createElementI,
    createElementP,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
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
        this.createContainerHistoryMetricsPrimary();
        this.createContainerHistoryMetrics();
    }

    createContainerHistoryMetricsPrimary() {
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

            this.createContainerHistoryMetric(
                index,
                gridRowStartNumber, gridColumnStartNumber,
                gridRowEndNumber, gridColumnEndNumber);


            gridColumnStartNumber += 2;
            gridColumnEndNumber += 2;
        }
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

        this.createContainerHistoryMetricMain(index);
        this.setContainerHistoryMetricMainGrid(
            index,
            gridRowStartNumber, gridColumnStartNumber,
            gridRowEndNumber, gridColumnEndNumber);

        this.createContainerHistoryMetricMainParts(index);
        this.setContainerHistoryMetricMainPartsGrid(index);
    }

    createContainerHistoryMetricMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryMetricsMainPartsId,
            variablesStatisticsTimeHistory.containerHistoryMetricMainIdPrefix
            + valueToString(index)
        );
    }

    setContainerHistoryMetricMainGrid(
        index,
        gridRowStartNumber, gridColumnStartNumber,
        gridRowEndNumber, gridColumnEndNumber) {

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryMetricMainIdPrefix
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
            variablesStatisticsTimeHistory.containerHistoryMetricMainPartsIdPrefix
            + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryMetricMainParts(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricMainIdPrefix
            + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricMainPartsIdPrefix
            + valueToString(index)
        );
    }

    createHistoryMetric(index) {
        this.createContainerHistoryMetricBackground(index);
        this.createContainerHistoryMetricTimeInfo(index);
    }

    createContainerHistoryMetricBackground(index) {
        this.createContainerHistoryMetricBackgroundPrimary(index);
        this.createHistoryMetricBackgroundMain(index);
        this.createHistoryMetricBackgroundIcon(index);
    }

    createContainerHistoryMetricBackgroundPrimary(index) {
        this.createContainerHistoryMetricBackgroundMain(index);
        this.setContainerHistoryMetricBackgroundMain(index);
    }

    createContainerHistoryMetricBackgroundMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricMainPartsIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricBackgroundMainIdPrefix + valueToString(index)
        );
    }

    setContainerHistoryMetricBackgroundMain(index) {

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryMetricBackgroundMainIdPrefix
            + valueToString(index),
            1,
            1,
            2,
            2,
            // "1fr 1fr",
            "1fr",
            "1fr");
    }

    createHistoryMetricBackgroundMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricBackgroundMainIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricBackgroundIdPrefix + valueToString(index)
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.historyMetricBackgroundIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricStyleDisplayFlex,
        );
    }

    createHistoryMetricBackgroundIcon(index) {
        createElementI(
            variablesStatisticsTimeHistory.historyMetricBackgroundIdPrefix + index,
            variablesStatisticsTimeHistory.historyMetricBackgroundIconIdPrefix + index,
            variablesStatisticsTimeHistory.historyMetricIconStyleSolid,
            variablesStatisticsTimeHistory.historyMetricIconClock
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.historyMetricBackgroundIconIdPrefix + index,
            variablesStatisticsTimeHistory.historyMetricIconStyleTimeHistory
        );
    }

    createContainerHistoryMetricTimeInfo(index) {
        this.createContainerHistoryMetricTimeInfoPrimary(index);
        this.createHistoryMetricTimeInfoText(index);
    }

    createContainerHistoryMetricTimeInfoPrimary(index) {
        this.createContainerHistoryMetricTimeInfoMain(index);
        this.createContainerHistoryMetricTimeInfoMainParts(index);
    }

    createContainerHistoryMetricTimeInfoMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricMainPartsIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainIdPrefix + valueToString(index)
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMain
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainIdPrefix + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryMetricTimeInfoMainParts(index) {

        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainPartsIdPrefix + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainPartsIdPrefix + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr 1fr",
            "1fr");
    }

    createHistoryMetricTimeInfoText(index) {
        this.createHistoryMetricInfoTimeValue(index);
        this.createHistoryMetricInfoTimeName(index);
    }

    createHistoryMetricInfoTimeValue(index) {
        this.createContainerHistoryMetricInfoTimeValuePrimary(index);
        this.createHistoryMetricInfoTimeValueMain(index);
        this.createHistoryMetricInfoTimeValueText(index);
    }

    createContainerHistoryMetricInfoTimeValuePrimary(index) {
        this.createContainerHistoryMetricInfoTimeValueMain(index);
        this.createContainerHistoryMetricInfoTimeValueMainParts(index);
    }

    createContainerHistoryMetricInfoTimeValueMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainPartsIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricTimeValueMainIdPrefix + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeValueMainIdPrefix + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryMetricInfoTimeValueMainParts(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeValueMainIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricTimeValueMainPartsIdPrefix + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeValueMainPartsIdPrefix + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");

    }

    createHistoryMetricInfoTimeValueMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeValueMainPartsIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricTimeValueIdPrefix + valueToString(index)
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.historyMetricTimeValueIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleDisplayFlex
        )
    }

    createHistoryMetricInfoTimeValueText(index) {
        createElementP(
            variablesStatisticsTimeHistory.historyMetricTimeValueIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricTimeValueTextIdPrefix + valueToString(index)
        );

        addElementClassNamedAndText(
            variablesStatisticsTimeHistory.historyMetricTimeValueTextIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricTimeValueStyleText,
            variablesStatisticsTimeHistory.historyMetricTimeValueTextDefault
        );
    }

    createHistoryMetricInfoTimeName(index) {
        this.createContainerHistoryMetricInfoTimeNamePrimary(index);
        this.createHistoryMetricInfoTimeNameMain(index);
        this.createHistoryMetricInfoTimeNameText(index);
    }

    createContainerHistoryMetricInfoTimeNamePrimary(index) {
        this.createContainerHistoryMetricInfoTimeNameMain(index);
        this.createContainerHistoryMetricInfoTimeNameMainParts(index);
    }

    createContainerHistoryMetricInfoTimeNameMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainPartsIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricTimeNameMainIdPrefix + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeNameMainIdPrefix + valueToString(index),
            2,
            1,
            3,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryMetricInfoTimeNameMainParts(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeNameMainIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.containerHistoryMetricTimeNameMainPartsIdPrefix + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeNameMainPartsIdPrefix + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createHistoryMetricInfoTimeNameMain(index) {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryMetricTimeNameMainPartsIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricTimeNameIdPrefix + valueToString(index)
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.historyMetricTimeNameIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleDisplayFlex
        )
    }

    createHistoryMetricInfoTimeNameText(index) {
        createElementP(
            variablesStatisticsTimeHistory.historyMetricTimeNameIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricTimeNameTextIdPrefix + valueToString(index)
        );


        addElementClassNamedAndText(
            variablesStatisticsTimeHistory.historyMetricTimeNameTextIdPrefix + valueToString(index),
            variablesStatisticsTimeHistory.historyMetricTimeNameStyleTextIdPrefix
            + variablesStatisticsTimeHistory.historyMetricTimeNameText[index],
            variablesStatisticsTimeHistory.historyMetricTimeNameText[index]
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