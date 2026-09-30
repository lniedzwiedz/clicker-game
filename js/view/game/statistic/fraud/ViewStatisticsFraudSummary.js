import {
    addElementClassNameById,
    addElementClassNames,
    createElementDiv,
    createElementI,
    createElementP,
    setElementTextById
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsFraudSummary
    from "../../../../common/variable/game/statistic/fraud/variablesStatisticsFraudSummary.js";


export class ViewStatisticsFraudSummary {

    createContainerStatisticsFraudSummary() {
        this.createContainerStatisticsFraudSummaryPrimary();
        this.createContainerStatisticsFraudSummaryTotalValue();
        this.createContainerStatisticsFraudSummaryIcons();
    }

    createContainerStatisticsFraudSummaryPrimary() {
        this.createContainerStatisticsFraudSummaryMain();
        this.createContainerStatisticsFraudSummaryMainParts();
    }

    createContainerStatisticsFraudSummaryMain() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudMainPartsId,
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryMainId
        );
    }

    createContainerStatisticsFraudSummaryMainParts() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryMainId,
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryMainPartsId
        );
    }

    createContainerStatisticsFraudSummaryTotalValue() {
        this.createContainerStatisticsFraudSummaryTotalValuePrimary();
        this.createFraudSummaryTotalValue();
    }

    createContainerStatisticsFraudSummaryTotalValuePrimary() {
        this.containerStatisticsFraudSummaryTotalValueMain();
    }

    containerStatisticsFraudSummaryTotalValueMain() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryMainPartsId,
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryTotalValueMainId,
        );
    }

    createFraudSummaryTotalValue() {
        this.createSummaryTotalValueMain();
        this.createSummaryTotalValueText();
    }

    createSummaryTotalValueMain() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryTotalValueMainId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueId,
        );

        addElementClassNameById(
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueStyleDisplayFlex
        );
    }

    createSummaryTotalValueText() {
        createElementP(
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueTextId
        );

        addElementClassNameById(
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueTextId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueStyleText
        );
    }

    createContainerStatisticsFraudSummaryIcons() {
        this.createContainerStatisticsFraudSummaryIconsPrimary();
        this.createStatisticsFraudSummaryIcons();
    }

    createContainerStatisticsFraudSummaryIconsPrimary() {
        this.createContainerSummaryTotalIconsMain();
    }

    createContainerSummaryTotalIconsMain() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryMainPartsId,
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryIconsMainId,
        );
    }

    createStatisticsFraudSummaryIcons() {
        this.creatFraudSummaryIconsMain();
        this.createFraudSummaryIcons();
    }

    creatFraudSummaryIconsMain() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryIconsMainId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsId
        );

        addElementClassNames(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsStyleDisplayFlex,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsStyleFlexCenterUpdate
        );
    }

    createFraudSummaryIcons() {
        this.createFraudSummaryIconLeft();
        this.createFraudSummaryIconMiddle();
        this.createFraudSummaryIconRight();
    }

    createFraudSummaryIconLeft() {
        this.createFraudSummaryIconWhiskeyGlass(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconLeftId
        );
    }

    createFraudSummaryIconRight() {
        this.createFraudSummaryIconWhiskeyGlass(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconRightId
        );
    }

    createFraudSummaryIconWhiskeyGlass(iconId) {
        createElementI(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsId,
            iconId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconStyleSolid,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconWhiskeyGlass
        );

        addElementClassNameById(
            iconId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconStyleWhiskeyGlass
        );
    }

    createFraudSummaryIconMiddle() {
        this.createFraudSummaryIconGem();
    }

    createFraudSummaryIconGem() {
        createElementI(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconMiddleId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconStyleSolid,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconGem
        );

        addElementClassNameById(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconMiddleId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconStyleGem
        );
    }

    setStatisticsFraudSummaryTotalValue(fraudTotalValue) {
        setElementTextById(
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueTextId,
            fraudTotalValue
        );
    }
}