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
            this.getContainerHistoryMetricMainId(index)
        );
    }

    setContainerHistoryMetricMainGrid(
        index,
        gridRowStartNumber, gridColumnStartNumber,
        gridRowEndNumber, gridColumnEndNumber) {

        setElementStyletAsGrid(
            this.getContainerHistoryMetricMainId(index),
            gridRowStartNumber,
            gridColumnStartNumber,
            gridRowEndNumber,
            gridColumnEndNumber,
            "1fr",
            "1fr");
    }

    setContainerHistoryMetricMainPartsGrid(index) {

        setElementStyletAsGrid(
            this.getContainerHistoryMetricMainPartsId(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryMetricMainParts(index) {
        createElementDiv(
            this.getContainerHistoryMetricMainId(index),
            this.getContainerHistoryMetricMainPartsId(index)
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
            this.getContainerHistoryMetricMainPartsId(index),
            this.getContainerHistoryMetricBackgroundMainId(index)
        );
    }

    setContainerHistoryMetricBackgroundMain(index) {

        setElementStyletAsGrid(
            this.getContainerHistoryMetricBackgroundMainId(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createHistoryMetricBackgroundMain(index) {
        createElementDiv(
            this.getContainerHistoryMetricBackgroundMainId(index),
            this.getHistoryMetricBackgroundIdPrefix(index)
        );

        addElementClassNameById(
            this.getHistoryMetricBackgroundIdPrefix(index),
            variablesStatisticsTimeHistory.historyMetricStyleDisplayFlex,
        );

        addElementClassNameById(
            this.getHistoryMetricBackgroundIdPrefix(index),
            variablesStatisticsTimeHistory.historyMetricBackgroundStyleBase,
        );
    }

    createHistoryMetricBackgroundIcon(index) {
        createElementI(
            this.getHistoryMetricBackgroundIdPrefix(index),
            this.getHistoryMetricBackgroundIconId(index),
            variablesStatisticsTimeHistory.historyMetricIconStyleSolid,
            variablesStatisticsTimeHistory.historyMetricIconClock
        );

        addElementClassNames(
            this.getHistoryMetricBackgroundIconId(index),
            variablesStatisticsTimeHistory.historyMetricIconStyleTextBase,
            this.getHistoryMetricIconStyleTimeId(index)
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
            this.getContainerHistoryMetricMainPartsId(index),
            this.getContainerHistoryMetricTimeInfoMainId(index)
        );

        addElementClassNameById(
            this.getContainerHistoryMetricTimeInfoMainId(index),
            variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMain
        );

        setElementStyletAsGrid(
            this.getContainerHistoryMetricTimeInfoMainId(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryMetricTimeInfoMainParts(index) {

        createElementDiv(
            this.getContainerHistoryMetricTimeInfoMainId(index),
            this.getContainerHistoryMetricTimeInfoMainPartsId(index)
        );

        setElementStyletAsGrid(
            this.getContainerHistoryMetricTimeInfoMainPartsId(index),
            1,
            1,
            2,
            2,
            "7fr 3fr",
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
            this.getContainerHistoryMetricTimeInfoMainPartsId(index),
            this.getContainerHistoryMetricTimeValueMainI(index)
        );

        setElementStyletAsGrid(
            this.getContainerHistoryMetricTimeValueMainI(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryMetricInfoTimeValueMainParts(index) {
        createElementDiv(
            this.getContainerHistoryMetricTimeValueMainI(index),
            this.getContainerHistoryMetricTimeValueMainPartsId(index)
        );

        setElementStyletAsGrid(
            this.getContainerHistoryMetricTimeValueMainPartsId(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");

    }

    createHistoryMetricInfoTimeValueMain(index) {
        createElementDiv(
            this.getContainerHistoryMetricTimeValueMainPartsId(index),
            this.getHistoryMetricTimeValueId(index)
        );

        addElementClassNameById(
            this.getHistoryMetricTimeValueId(index),
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleDisplayFlex
        )
    }

    createHistoryMetricInfoTimeValueText(index) {
        createElementP(
            this.getHistoryMetricTimeValueId(index),
            this.getHistoryMetricTimeValueTextId(index)
        );

        addElementClassNamedAndText(
            this.getHistoryMetricTimeValueTextId(index),
            variablesStatisticsTimeHistory.historyMetricTimeValueStyleText,
            variablesStatisticsTimeHistory.historyMetricTimeValueTextDefault
        );

        addElementClassNames(
            this.getHistoryMetricTimeValueTextId(index),
            variablesStatisticsTimeHistory.historyMetricTimeValueStyleTextBase,
            this.getHistoryMetricTimeValueStyleText(index)
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
            this.getContainerHistoryMetricTimeInfoMainPartsId(index),
            this.getContainerHistoryMetricTimeNameMainId(index)
        );

        setElementStyletAsGrid(
            this.getContainerHistoryMetricTimeNameMainId(index),
            2,
            1,
            3,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryMetricInfoTimeNameMainParts(index) {
        createElementDiv(
            this.getContainerHistoryMetricTimeNameMainId(index),
            this.getContainerHistoryMetricTimeNameMainPartsId(index)
        );

        setElementStyletAsGrid(
            this.getContainerHistoryMetricTimeNameMainPartsId(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createHistoryMetricInfoTimeNameMain(index) {
        createElementDiv(
            this.getContainerHistoryMetricTimeNameMainPartsId(index),
            this.getHistoryMetricTimeNameId(index)
        );

        addElementClassNameById(
            this.getHistoryMetricTimeNameId(index),
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleDisplayFlex
        )
    }

    createHistoryMetricInfoTimeNameText(index) {
        createElementP(
            this.getHistoryMetricTimeNameId(index),
            this.getHistoryMetricTimeNameTextId(index)
        );

        addElementClassNamedAndText(
            this.getHistoryMetricTimeNameTextId(index),
            variablesStatisticsTimeHistory.historyMetricTimeKindText[index],
            variablesStatisticsTimeHistory.historyMetricTimeKindText[index]
        );

        addElementClassNames(
            this.getHistoryMetricTimeNameTextId(index),
            variablesStatisticsTimeHistory.historyMetricTimeNameStyleTextBase,
            this.getHistoryMetricTimeNameStyleText(index)
        );
    }

    createContainerStatisticsTimeHistoryName() {
        this.createContainerHistoryNamePrimary();
        this.createHistoryNameBackground();
        this.createHistoryName();
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
            variablesStatisticsTimeHistory.containerHistoryNameMainPartsId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameId
        );

        // addElementClassNames(
        //     variablesStatisticsTimeHistory.statisticsTimeHistoryNameId,
        //     variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleDisplayFlex,
        //     variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyle
        // );

        addElementClassNameById(
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleDisplayFlex,
        );
    }

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    createHistoryNameBackground() {
        this.createContainerHistoryNameBackgroundPrimary();
        this.createHistoryNameBackgroundMian();
    }

    createContainerHistoryNameBackgroundPrimary() {
        this.createContainerHistoryNameBackgroundMian();
        this.createContainerHistoryNameBackgroundParts();
    }

    createContainerHistoryNameBackgroundMian() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryNameMainPartsId,
            variablesStatisticsTimeHistory.containerHistoryNameBackgroundMainId
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryNameBackgroundMainId,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryNameBackgroundParts() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryNameBackgroundMainId,
            variablesStatisticsTimeHistory.containerHistoryNameBackgroundMainPartsId
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryNameBackgroundMainPartsId,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createHistoryNameBackgroundMian() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryNameBackgroundMainPartsId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameBackgroundId
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameBackgroundId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameStyleDisplayFlex
        );

        addElementClassNameById(
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameBackgroundId,
            variablesStatisticsTimeHistory.statisticsTimeHistoryNameBackgroundStyle
        );
    }

    createHistoryName() {
        this.createHistoryNamePrimary();
        this.createHistoryNameMain();
        this.createHistoryNameText();
    }

    createHistoryNamePrimary() {
        this.createContainerHistoryNameMian();
        this.createContainerHistoryNameMianParts();
    }

    createContainerHistoryNameMian() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerStatisticsTimeHistoryNameMainPartsId,
            variablesStatisticsTimeHistory.containerHistoryNameMainId
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryNameMainId,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryNameMianParts() {
        createElementDiv(
            variablesStatisticsTimeHistory.containerHistoryNameMainId,
            variablesStatisticsTimeHistory.containerHistoryNameMainPartsId
        );

        setElementStyletAsGrid(
            variablesStatisticsTimeHistory.containerHistoryNameMainPartsId,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
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

    setStatisticsTimeHistoryRoundNumberValue(
        statisticTimeInSecondsMin, statisticTimeInSecondsAvg, statisticTimeInSecondsMax) {

        this.setStatisticsTimeHistoryMin(statisticTimeInSecondsMin);
        this.setStatisticsTimeHistoryAvg(statisticTimeInSecondsAvg);
        this.setStatisticsTimeHistoryMax(statisticTimeInSecondsMax);
    }

    setStatisticsTimeHistoryMin(statisticTimeInSecondsMin) {
        setElementTextById(
            this.getHistoryMetricTimeValueTextId(0),
            valueToString(statisticTimeInSecondsMin)
        );
    }

    setStatisticsTimeHistoryAvg(statisticTimeInSecondsAvg) {
        setElementTextById(
            this.getHistoryMetricTimeValueTextId(1),
            valueToString(statisticTimeInSecondsAvg)
        );
    }

    setStatisticsTimeHistoryMax(statisticTimeInSecondsMax) {
        setElementTextById(
            this.getHistoryMetricTimeValueTextId(2),
            valueToString(statisticTimeInSecondsMax)
        );
    }

    getContainerHistoryMetricMainId(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricMainIdPrefix + valueToString(index);
    }

    getContainerHistoryMetricMainPartsId(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricMainPartsIdPrefix + valueToString(index)
    }

    getContainerHistoryMetricBackgroundMainId(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricBackgroundMainIdPrefix + valueToString(index);
    }

    getHistoryMetricBackgroundIdPrefix(index) {
        return variablesStatisticsTimeHistory.historyMetricBackgroundIdPrefix + valueToString(index);
    }

    getHistoryMetricBackgroundIconId(index) {
        return variablesStatisticsTimeHistory.historyMetricBackgroundIconIdPrefix + valueToString(index);
    }

    getContainerHistoryMetricTimeInfoMainId(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainIdPrefix + valueToString(index);
    }

    getContainerHistoryMetricTimeInfoMainPartsId(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricTimeInfoMainPartsIdPrefix + valueToString(index);
    }

    getContainerHistoryMetricTimeValueMainI(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricTimeValueMainIdPrefix + valueToString(index);
    }

    getContainerHistoryMetricTimeValueMainPartsId(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricTimeValueMainPartsIdPrefix + valueToString(index);
    }

    getHistoryMetricTimeValueId(index) {
        return variablesStatisticsTimeHistory.historyMetricTimeValueIdPrefix + valueToString(index);
    }

    getHistoryMetricTimeValueTextId(index) {
        return variablesStatisticsTimeHistory.historyMetricTimeValueTextIdPrefix + valueToString(index);
    }

    getContainerHistoryMetricTimeNameMainId(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricTimeNameMainIdPrefix + valueToString(index);
    }

    getContainerHistoryMetricTimeNameMainPartsId(index) {
        return variablesStatisticsTimeHistory.containerHistoryMetricTimeNameMainPartsIdPrefix + valueToString(index);
    }

    getHistoryMetricTimeNameId(index) {
        return variablesStatisticsTimeHistory.historyMetricTimeNameIdPrefix + valueToString(index);
    }

    getHistoryMetricTimeNameTextId(index) {
        return variablesStatisticsTimeHistory.historyMetricTimeNameTextIdPrefix + valueToString(index);
    }

    getHistoryMetricIconStyleTimeId(index) {
        return variablesStatisticsTimeHistory.historyMetricIconStyleTimeKindPrefix
            + variablesStatisticsTimeHistory.historyMetricTimeKindSuffix[index];
    }

    getHistoryMetricTimeNameStyleText(index) {
        return variablesStatisticsTimeHistory.historyMetricTimeNameStyleTextPrefix
            + variablesStatisticsTimeHistory.historyMetricTimeKindSuffix[index];
    }

    getHistoryMetricTimeValueStyleText(index) {
        return variablesStatisticsTimeHistory.historyMetricTimeValueStyleTextPrefix
            + variablesStatisticsTimeHistory.historyMetricTimeKindSuffix[index];
    }
}