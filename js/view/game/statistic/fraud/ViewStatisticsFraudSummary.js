import {
    addElementClassNameById,
    addElementClassNames,
    createElementDiv,
    createElementI,
    createElementP, setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsFraudSummary
    from "../../../../common/variable/game/statistic/fraud/variablesStatisticsFraudSummary.js";
import {
    statisticsFraudSummaryBackgroundId, statisticsFraudSummaryBackgroundStyleBase
} from "../../../../common/variable/game/statistic/fraud/variablesStatisticsFraudSummary.js";



export class ViewStatisticsFraudSummary {

    createContainerStatisticsFraudSummary() {
        this.createContainerStatisticsFraudSummaryPrimary();
        this.createContainerStatisticsFraudSummaryBackground();
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

    createContainerStatisticsFraudSummaryBackground(){
        this.createContainerStatisticsFraudSummaryBackgroundPrimary();
        this.createStatisticsFraudSummaryBackgroundMain();
    }

    createContainerStatisticsFraudSummaryBackgroundPrimary(){
        this.createContainerStatisticsFraudSummaryBackgroundMain();
        this.createContainerStatisticsFraudSummaryBackgroundParts();
    }

    createContainerStatisticsFraudSummaryBackgroundMain() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryMainPartsId,
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryBackgroundId,
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryBackgroundId,
            2, 2,
            4, 3,
            "1fr", "1fr");
    }

    createContainerStatisticsFraudSummaryBackgroundParts() {
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryBackgroundId,
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryBackgroundPartsId,
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryBackgroundPartsId,
            1, 1,
            2, 2,
            "1fr", "1fr");
    }

    createStatisticsFraudSummaryBackgroundMain(){
        createElementDiv(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryBackgroundPartsId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryBackgroundId,
        );

        addElementClassNames(
            variablesStatisticsFraudSummary.statisticsFraudSummaryBackgroundId,
            variablesStatisticsFraudSummary.statisticsFraudSummaryTotalValueStyleDisplayFlex,
            variablesStatisticsFraudSummary.statisticsFraudSummaryBackgroundStyleBase
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

        setElementStyletAsGrid(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryTotalValueMainId,
            2, 2,
            3, 3,
            "1fr", "1fr");
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

        setElementStyletAsGrid(
            variablesStatisticsFraudSummary.containerStatisticsFraudSummaryIconsMainId,
            3, 2,
            4, 3,
            "1fr", "1fr"
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
            valueToString(fraudTotalValue)
        );
    }
}