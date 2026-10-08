import {
    addElementClassNameById,
    addElementClassNames,
    createElementDiv,
    createElementI,
    createElementP,
    setElementTextById
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsTimeSummary
    from "../../../../common/variable/game/statistic/time/variablesStatisticsTimeSummary.js";
import {
    containerStatisticsTimeSummaryBackgroundId, containerStatisticsTimeSummaryBackgroundPartsId,
    statisticsTimeSummaryBackgroundId,
    statisticsTimeSummaryBackgroundStyleBase, statisticsTimeSummaryBestValueStyleFlexCenter
} from "../../../../common/variable/game/statistic/time/variablesStatisticsTimeSummary.js";


export class ViewStatisticsTimeSummary {

    createContainerStatisticsTimeSummary() {
        this.createContainerStatisticsTimeSummaryPrimary();
        this.createContainerStatisticsTimeSummaryBackground();
        this.createContainerStatisticsTimeSummaryBestValue();
        this.createContainerStatisticsTimeSummaryIcons();
    }

    createContainerStatisticsTimeSummaryPrimary() {
        this.createContainerStatisticsTimeSummaryMain();
        this.createContainerStatisticsTimeSummaryMainParts();
    }

    createContainerStatisticsTimeSummaryMain() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeMainPartsId,
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryMainId
        );
    }

    createContainerStatisticsTimeSummaryMainParts() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryMainId,
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryMainPartsId
        );
    }

    createContainerStatisticsTimeSummaryBackground() {
        this.createContainerStatisticsTimeSummaryBackgroundPrimary();
        this.createStatisticsTimeSummaryBackgroundMain();
    }

    createContainerStatisticsTimeSummaryBackgroundPrimary() {
        this.createContainerStatisticsTimeSummaryBackgroundMain();
        this.createContainerStatisticsTimeSummaryBackgroundParts();
    }

    createContainerStatisticsTimeSummaryBackgroundMain() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryMainPartsId,
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryBackgroundId,
        );
    }

    createContainerStatisticsTimeSummaryBackgroundParts() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryBackgroundId,
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryBackgroundPartsId,
        );
    }

    createStatisticsTimeSummaryBackgroundMain() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryBackgroundPartsId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryBackgroundId,
        );

        addElementClassNames(
            variablesStatisticsTimeSummary.statisticsTimeSummaryBackgroundId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueStyleFlexCenter,
            variablesStatisticsTimeSummary.statisticsTimeSummaryBackgroundStyleBase
        );
    }

    createContainerStatisticsTimeSummaryBestValue() {
        this.createContainerStatisticsTimeSummaryBestValuePrimary();
        this.createTimeSummaryBestValue();
    }

    createContainerStatisticsTimeSummaryBestValuePrimary() {
        this.createContainerStatisticsTimeSummaryBestValueMain();
    }

    createContainerStatisticsTimeSummaryBestValueMain() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryMainPartsId,
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryBestValueMainId,
        );
    }

    createTimeSummaryBestValue() {
        this.createTimeSummaryBestValueMain();
        this.createTimeSummaryBestValueText();
    }

    createTimeSummaryBestValueMain() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryBestValueMainId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueId,
        );

        addElementClassNameById(
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueStyleFlexCenter
        );
    }

    createTimeSummaryBestValueText() {
        createElementP(
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueTextId
        );

        addElementClassNameById(
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueTextId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueStyleText
        );
    }

    createContainerStatisticsTimeSummaryIcons() {
        this.createContainerStatisticsTimeSummaryIconsPrimary();
        this.createStatisticsTimeSummaryIcons();
    }

    createContainerStatisticsTimeSummaryIconsPrimary() {
        this.createContainerStatisticsTimeSummaryBestIconsMain();
    }

    createContainerStatisticsTimeSummaryBestIconsMain() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryMainPartsId,
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryIconsMainId,
        );
    }

    createStatisticsTimeSummaryIcons() {
        this.createTimeSummaryIconsMain();
        this.createTimeSummaryIcons();
    }

    createTimeSummaryIconsMain() {
        createElementDiv(
            variablesStatisticsTimeSummary.containerStatisticsTimeSummaryIconsMainId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconsId
        );

        addElementClassNames(
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconsId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconsStyleFlexCenter,
            variablesStatisticsTimeSummary.statisticsTmeSummaryIconsStyleFlexCenterUpdate
        );
    }

    createTimeSummaryIcons() {
        this.createTimeSummaryIconLeft();
        this.createTimeSummaryIconMiddle();
        this.createTimeSummaryIconRight();
    }

    createTimeSummaryIconLeft() {
        this.createTimeSummaryIconStar(
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconLeftId
        );
    }

    createTimeSummaryIconRight() {
        this.createTimeSummaryIconStar(
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconRightId
        );
    }

    createTimeSummaryIconStar(iconId) {
        createElementI(
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconsId,
            iconId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconStyleSolid,
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconStar
        );

        addElementClassNameById(
            iconId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconStyleStar
        );
    }

    createTimeSummaryIconMiddle() {
        this.createTimeSummaryIconClock(
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconMiddleId
        );
    }

    createTimeSummaryIconClock(iconId) {
        createElementI(
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconsId,
            iconId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconStyleSolid,
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconClock
        );

        addElementClassNameById(
            iconId,
            variablesStatisticsTimeSummary.statisticsTimeSummaryIconStyleClock
        );
    }

    setStatisticsTimeSummaryBestValue(timeBestValue) {
        setElementTextById(
            variablesStatisticsTimeSummary.statisticsTimeSummaryBestValueTextId,
            timeBestValue
        );
    }
}