import {
    addElementClassNameById, addElementClassNames,
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
        this.createContainerSummaryTotalValue();
        this.createContainerSummaryIcons();
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

    createContainerSummaryTotalValue() {
        this.createContainerSummaryTotalValuePrimary();
        this.createSummaryTotalValueMain();
        this.createSummaryTotalValueText();
    }

    createContainerSummaryTotalValuePrimary() {
        this.containerStatisticsFraudSummaryTotalValueMain();
    }

    containerStatisticsFraudSummaryTotalValueMain() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryMainPartsId,
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryTotalValueMainId,
        );
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
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueTextIdId
        );

        addElementClassNameById(
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueTextIdId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueStyleText
        );
    }

    createContainerSummaryIcons() {
        this.createContainerSummaryIconsPrimary();
        this.creatSummaryIconsMain();
        this.createSummaryIcons();
    }

    createContainerSummaryIconsPrimary() {
        this.createContainerSummaryTotalIconsMain();
    }

    createContainerSummaryTotalIconsMain() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryMainPartsId,
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryIconsMainId,
        );
    }

    creatSummaryIconsMain() {
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

    createSummaryIcons() {
        this.createSummaryIconWhiskeyGlassLeft();
        this.createSummaryIconGem();
        this.createSummaryIconWhiskeyGlassRight();
    }

    createSummaryIconWhiskeyGlassLeft() {
        this.createIconWhiskeyGlass(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsIconWhiskeyGlassLeftId
        );
    }

    createSummaryIconWhiskeyGlassRight() {
        this.createIconWhiskeyGlass(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsIconWhiskeyGlassRightId
        );
    }

    createIconWhiskeyGlass(iconId) {
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

    createSummaryIconGem() {
        createElementI(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconsId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconGemId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconStyleSolid,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconGem
        );

        addElementClassNameById(
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconGemId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryIconStyleGem
        );
    }

    setStatisticsFraudSummaryTotalValue(fraudTotalValue) {
        setElementTextById(
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueTextIdId,
            fraudTotalValue
        );
    }
}