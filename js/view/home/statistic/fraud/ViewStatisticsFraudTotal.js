import {
    addElementClassNameById,
    createElementDiv,
    createElementDivWithTheSameIdAndClassName,
    createElementI,
    createElementP,
    setElementTextById
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsFraudTotal
    from "../../../../common/variable/home/statistic/fraud/variablesStatisticsFraudTotal.js";
import {statisticsFraudSummaryIconsId} from "../../../../common/variable/home/statistic/fraud/variablesStatisticsFraudTotal.js";


export class ViewStatisticsFraudTotal {

    createContainerStatisticsFraudTotal() {
        this.createContainerStatisticsFraudTotalPrimary();
        this.createContainerTotalValue();
        this.createContainerTotalIcons();
    }

    createContainerStatisticsFraudTotalPrimary() {
        this.createContainerStatisticsFraudTotalMain();
        this.createContainerSectionStatisticsFraudTotalMainParts();
    }

    createContainerStatisticsFraudTotalMain() {

        createElementDiv(
            variablesStatisticsFraudTotal.containerStatisticsFraudMainPartsId,
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryMainId
        );
    }

    createContainerSectionStatisticsFraudTotalMainParts() {

        createElementDiv(
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryMainId,
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryMainPartsId
        );
    }

    createContainerTotalValue() {
        this.createContainerTotalValuePrimary();
        this.createTotalValueMain();
        this.createTotalValueText();
    }

    createContainerTotalValuePrimary() {

        createElementDiv(
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryMainPartsId,
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryTotalValueMainId,
        );
    }

    createTotalValueMain() {

        createElementDiv(
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryTotalValueMainId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryTotalValueId,
        );

        addElementClassNameById(
            variablesStatisticsFraudTotal.statisticsFraudSummaryTotalValueId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryTotalValueStyleDisplayFlex
        );
    }

    createTotalValueText() {

        createElementP(
            variablesStatisticsFraudTotal.statisticsFraudSummaryTotalValueId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryTotalValueTextIdId
        );

        addElementClassNameById(
            variablesStatisticsFraudTotal.statisticsFraudSummaryTotalValueTextIdId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryTotalValueStyleText
        );
    }

    createContainerTotalIcons() {
        this.createContainerTotalIconsPrimary();
        this.creatTotalIconsMain();
        this.createIcons();
    }

    createContainerTotalIconsPrimary() {
        this.createContainerFraudTotalIconsMain();
        // this.createContainerFraudTotalIconsMainParts();
    }

    createContainerFraudTotalIconsMain() {
        createElementDiv(
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryMainPartsId,
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryIconsMain,
        );
    }
    //
    // createContainerFraudTotalIconsMainParts() {
    //     createElementDiv(
    //         variablesStatisticsFraudTotal.containerStatisticsFraudTotalIconsMainId,
    //         variablesStatisticsFraudTotal.containerStatisticsFraudSumDisplayIconsMainPartsId,
    //     );
    // }

    creatTotalIconsMain() {

        // createElementDivWithTheSameIdAndClassName(
        //     variablesStatisticsFraudTotal.containerStatisticsFraudTotalIconsMainId,
        //     variablesStatisticsFraudTotal.statisticsFraudTotalIconsStyleDisplayFlex,
        // );

        createElementDiv(
            variablesStatisticsFraudTotal.containerStatisticsFraudSummaryIconsMain,
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconsId,
        );

        addElementClassNameById(
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconsId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconsStyleDisplayFlex,
        );
    }

    createIcons() {
        this.createIconWhiskeyGlassLeft();
        this.createIconGem();
        this.createIconWhiskeyGlassRight();
    }

    createIconWhiskeyGlassLeft() {
        this.createIconWhiskeyGlass(
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconsIconWhiskeyGlassLeftId
        );
    }

    createIconWhiskeyGlassRight() {
        this.createIconWhiskeyGlass(
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconsIconWhiskeyGlassRightId
        );
    }

    createIconWhiskeyGlass(iconId) {

        createElementI(
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconsId,
            iconId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconStyleSolid,
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconWhiskeyGlass
        );
    }

    createIconGem() {

        createElementI(
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconsId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconGemId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconStyleSolid,
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconGem
        );

        addElementClassNameById(
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconGemId,
            variablesStatisticsFraudTotal.statisticsFraudSummaryIconStyleWhiskeyGlassMain
        );
    }


    // // action
    // setStatisticsFraudCounterRoundSumValue(fraudCountedRoundNumber, fraudRoundIndex) {
    //
    //     let result;
    //     if (fraudCountedRoundNumber < 10)
    //         result = valueToString(fraudCountedRoundNumber) + variablesStatisticsFraudTotal.statisticsFraudDisplaySpace;
    //     else
    //         result = fraudCountedRoundNumber;
    //
    //     let elementId = variablesStatisticsFraudTotal.statisticsFraudCounterRoundDisplaySumValue + fraudRoundIndex;
    //     let text = variablesStatisticsFraudTotal.statisticsFraudDisplaySpace + result;
    //
    //     setElementTextById(
    //         elementId,
    //         text
    //     );
    // }

    setFraudTotalValue(fraudTotalValue) {

        setElementTextById(
            variablesStatisticsFraudTotal.statisticsFraudSummaryTotalValueTextIdId,
            fraudTotalValue
        );
    }
}