import {
    createElementDiv,
    isElementsExistById,
    removeElementById
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsFraud
    from "../../../../common/variable/home/statistic/fraud/variablesStatisticsFraudPrimary.js";


class ViewStatisticsFraudPrimary {

    createContainerStatisticsFraudPrimary(gameRoundCount) {
        this.createContainerStatisticsFraudMain();
        this.createContainerStatisticsFraudMainParts();
    }

    createContainerStatisticsFraudMain() {

        createElementDiv(
            variablesStatisticsFraud.containerHomeMainPartsId,
            variablesStatisticsFraud.statisticsFraudMainId
        );
    }

    createContainerStatisticsFraudMainParts() {

        createElementDiv(
            variablesStatisticsFraud.statisticsFraudMainId,
            variablesStatisticsFraud.statisticsFraudMainPartsId
        );
    }

    removeContainerStatisticsFraud() {

        if (isElementsExistById(variablesStatisticsFraud.statisticsFraudMainPartsId))
            removeElementById(
                variablesStatisticsFraud.statisticsFraudMainPartsId
            );
    }

    createContainerStatisticsFraudSum() {
        // this.createContainerStatisticsFraudSumMain();
        // this.createContainerStatisticsFraudSumValueUpdate();
        // this.createContainerStatisticsFraudSumIcons();
    }

    // createContainerStatisticsFraudSumMain() {
    //     createElementDivAnaDivChild(
    //         variablesStatisticsFraud.containerStatisticsFraudMainPartsId,
    //         variablesStatisticsFraud.containerStatisticsFraudSumMainId,
    //         variablesStatisticsFraud.containerStatisticsFraudSumMainParts);
    // }

    // createContainerStatisticsFraudSumValueUpdate() {
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudSumMainParts,
    //         variablesStatisticsFraud.containerStatisticsFraudSumDisplayValueUpdateMainId,
    //     );
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudSumDisplayValueUpdateMainId,
    //         variablesStatisticsFraud.containerStatisticsFraudSumDisplayValueUpdateMainParts,
    //     );
    //
    //     createElementPWithTheSameIdAndClassName(
    //         variablesStatisticsFraud.containerStatisticsFraudSumDisplayValueUpdateMainParts,
    //         variablesStatisticsFraud.statisticsFraudSumDisplayValueUpdateFlex,
    //     );
    //
    //     createElementPWithTheSameIdAndClassName(
    //         variablesStatisticsFraud.statisticsFraudSumDisplayValueUpdateFlex,
    //         variablesStatisticsFraud.statisticsFraudSumStyleText
    //     );
    //
    //     setElementTextById(
    //         variablesStatisticsFraud.statisticsFraudSumStyleText,
    //         variablesStatisticsFraud.statisticsFraudSumDisplayDefaultText
    //     );
    // }

    // createContainerStatisticsFraudSumIcons() {
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudSumMainParts,
    //         variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMain,
    //     );
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMain,
    //         variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMainParts,
    //     );
    //
    //     createElementDivWithTheSameIdAndClassName(
    //         variablesStatisticsFraud.containerStatisticsFraudSumDisplayIconsMainParts,
    //         variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex,
    //     );
    //
    //     createElementI(
    //         variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex,
    //         variablesStatisticsFraud.statisticsFraudSumIconLeft,
    //         variablesStatisticsFraud.statisticsFraudSumIconStyleSolid,
    //         variablesStatisticsFraud.statisticsFraudSumIconGem
    //     );
    //
    //     createElementI(
    //         variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex,
    //         variablesStatisticsFraud.statisticsFraudSumIconMiddle,
    //         variablesStatisticsFraud.statisticsFraudSumIconStyleSolid,
    //         variablesStatisticsFraud.statisticsFraudSumIconWhiskeyGlass
    //     );
    //
    //     addElementClassNameById(
    //         variablesStatisticsFraud.statisticsFraudSumIconMiddle,
    //         variablesStatisticsFraud.statisticsFraudSumIconStyleWhiskeyGlassMain
    //     );
    //
    //     createElementI(
    //         variablesStatisticsFraud.statisticsFraudSumDisplayIconsFlex,
    //         variablesStatisticsFraud.statisticsFraudSumIconRight,
    //         variablesStatisticsFraud.statisticsFraudSumIconStyleSolid,
    //         variablesStatisticsFraud.statisticsFraudSumIconGem
    //     );
    // }

    // createContainerStatisticsFraudCounter(gameRoundCount) {
    //
    //     this.createContainerStatisticsFraudCounterMain()
    //
    //     this.createContainerStatisticsFraudCounterRound(
    //         gameRoundCount
    //     );
    //
    //     this.createContainerStatisticsFraudCounterName();
    // }
    //
    // createContainerStatisticsFraudCounterMain() {
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudMainPartsId,
    //         variablesStatisticsFraud.containerStatisticsFraudCounterMain
    //     );
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudCounterMain,
    //         variablesStatisticsFraud.containerStatisticsFraudCounterMainParts
    //     );
    // }
    //
    // createContainerStatisticsFraudCounterRound(gameRoundCount) {
    //
    //     this.createContainerStatisticsFraudCounterRoundMain();
    //
    //     let parentId = variablesStatisticsFraud.containerStatisticsFraudCounterRoundMainParts;
    //
    //     this.createContainerStatisticsFraudCounterRoundMainParts(
    //         parentId,
    //         gameRoundCount
    //     );
    //
    //     this.createContainerStatisticsFraudCounterRoundNumber(
    //         parentId,
    //         gameRoundCount
    //     );
    // }
    //
    // createContainerStatisticsFraudCounterRoundMain() {
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudCounterMainParts,
    //         variablesStatisticsFraud.containerStatisticsFraudCounterRoundMain
    //     );
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudCounterRoundMain,
    //         variablesStatisticsFraud.containerStatisticsFraudCounterRoundMainParts
    //     );
    // }
    //
    // createContainerStatisticsFraudCounterRoundMainParts(parentId, gameRoundCount) {
    //
    //     let gridRowStartNumber = 1;
    //     let gridColumnStartNumber = 1;
    //     let gridRowEndNumber = 2;
    //     let gridColumnEndNumber = 2;
    //
    //     let gridTemplateRows = "repeat(1, 2fr 6fr 2fr)";
    //     let gridTemplateColumns = "repeat(" + gameRoundCount + ", 1fr 100fr 1fr)";
    //
    //     setElementStyletAsGrid(
    //         parentId,
    //         gridRowStartNumber,
    //         gridColumnStartNumber,
    //         gridRowEndNumber,
    //         gridColumnEndNumber,
    //         gridTemplateRows,
    //         gridTemplateColumns);
    // }
    //
    // createContainerStatisticsFraudCounterRoundNumber(parentId, gameRoundCount) {
    //
    //     let gridRowStartNumberChild = 2;
    //     let gridColumnStartNumberChild = 2;
    //     let gridRowEndNumberChild = 3;
    //     let gridColumnEndNumberChild = 3;
    //
    //     for (let index = 0; index < gameRoundCount; index++) {
    //
    //         let childId = variablesStatisticsFraud.containerStatisticsFraudCounterRoundNumberMainPrefix + valueToString(index);
    //
    //         this.createElementFraudCountRoundMain(
    //             parentId,
    //             childId
    //         );
    //
    //         let gridTemplateRowsChild = "1fr";
    //         let gridTemplateColumnsChild = "1fr";
    //
    //         setElementStyletAsGrid(
    //             childId,
    //             gridRowStartNumberChild,
    //             gridColumnStartNumberChild,
    //             gridRowEndNumberChild,
    //             gridColumnEndNumberChild,
    //             gridTemplateRowsChild,
    //             gridTemplateColumnsChild);
    //
    //         this.createElementFraudCountRoundInner(
    //             childId,
    //             index
    //         );
    //
    //         gridColumnStartNumberChild += 3;
    //         gridColumnEndNumberChild += 3;
    //     }
    // }
    //
    // createElementFraudCountRoundMain(parentId, childId) {
    //
    //     createElementDiv(
    //         parentId,
    //         childId
    //     );
    // }
    //
    // createElementFraudCountRoundInner(parentIdMain, index) {
    //
    //     let childIdMainParts = variablesStatisticsFraud.containerStatisticsFraudCounterRoundNumberMainPartsPrefix + valueToString(index);
    //
    //     createElementDiv(
    //         parentIdMain,
    //         childIdMainParts
    //     );
    //
    //     setElementStyletAsGrid(
    //         childIdMainParts,
    //         1,
    //         1,
    //         2,
    //         2,
    //         "1fr",
    //         "1fr");
    //
    //     let grandchildId = variablesStatisticsFraud.statisticsFraudCounterRoundDisplayFlexPrefix + valueToString(index);
    //     let iId = variablesStatisticsFraud.statisticsFraudIconWhiskeyGlassPrefix + valueToString(index);
    //     let pId = variablesStatisticsFraud.statisticsFraudCounterRoundDisplaySumValue + valueToString(index);
    //
    //     createElementDivWithIdAndSetClassName(
    //         childIdMainParts,
    //         grandchildId,
    //         variablesStatisticsFraud.statisticsFraudCounterRoundDisplayFlex
    //     );
    //
    //     createElementI(
    //         grandchildId,
    //         iId,
    //         variablesStatisticsFraud.statisticsFraudSumIconStyleSolid,
    //         variablesStatisticsFraud.statisticsFraudSumIconWhiskeyGlass
    //     );
    //
    //     createElementP(
    //         grandchildId,
    //         pId
    //     );
    //
    //     setElementTextById(
    //         pId,
    //         variablesStatisticsFraud.statisticsFraudDisplayIconWhiskeyGlassAndSpace
    //     );
    //
    //     addElementClassNameById(
    //         pId,
    //         variablesStatisticsFraud.statisticsFraudCounterRoundStyleValueSumPerRound
    //     );
    //
    // }
    //
    // createContainerStatisticsFraudCounterName() {
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudCounterMainParts,
    //         variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayTextMain
    //     );
    //
    //     createElementDiv(
    //         variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayTextMain,
    //         variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayTextMainParts
    //     );
    //
    //     createElementDivWithTheSameIdAndClassName(
    //         variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayTextMainParts,
    //         variablesStatisticsFraud.statisticsFraudCounterNameDisplayNameFlex
    //     );
    //
    //     createElementPWithTheSameIdAndClassName(
    //         variablesStatisticsFraud.statisticsFraudCounterNameDisplayNameFlex,
    //         variablesStatisticsFraud.statisticsFraudCounterNameStyleText
    //     );
    //
    //     setElementTextById(
    //         variablesStatisticsFraud.statisticsFraudCounterNameStyleText,
    //         variablesStatisticsFraud.statisticsFraudCounterNameDisplayName
    //     );
    // }

    // setStatisticFraudData(fraudCountedRoundNumber, fraudCountedSumNumber, fraudRoundIndex) {
    //
    //     this.setStatisticsFraudCounterRoundSumValue(
    //         fraudCountedRoundNumber,
    //         fraudRoundIndex
    //     );
    //
    //     this.setStatisticFraudSumValue(
    //         fraudCountedSumNumber
    //     );
    // }

    // setStatisticsFraudCounterRoundSumValue(fraudCountedRoundNumber, fraudRoundIndex) {
    //
    //     let result;
    //     if (fraudCountedRoundNumber < 10)
    //         result = valueToString(fraudCountedRoundNumber) + variablesStatisticsFraud.statisticsFraudDisplaySpace;
    //     else
    //         result = fraudCountedRoundNumber;
    //
    //     let elementId = variablesStatisticsFraud.statisticsFraudCounterRoundDisplaySumValue + fraudRoundIndex;
    //     let text = variablesStatisticsFraud.statisticsFraudDisplaySpace + result;
    //
    //     setElementTextById(
    //         elementId,
    //         text
    //     );
    // }
    //
    // setStatisticFraudSumValue(fraudCountedSumNumber) {
    //
    //     setElementTextById(
    //         variablesStatisticsFraud.statisticsFraudSumStyleText,
    //         fraudCountedSumNumber
    //     );
    // }

    // removeContainerStatisticsFraud() {
    //
    //     if (isElementsExistById(variablesStatisticsFraud.containerStatisticsFraudMainPartsId))
    //         removeElementById(
    //             variablesStatisticsFraud.containerStatisticsFraudMainPartsId
    //         );
    // }
}

export default ViewStatisticsFraudPrimary