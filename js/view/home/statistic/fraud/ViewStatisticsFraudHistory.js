import {
    addElementClassNameById,
    createElementDiv,
    createElementDivWithIdAndSetClassName,
    createElementDivWithTheSameIdAndClassName,
    createElementI,
    createElementP,
    createElementPWithTheSameIdAndClassName,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsFraud from "../../../../common/variable/home/statistic/fraud/variablesStatisticsFraudPrimary.js";


export class ViewStatisticsFraudHistory {

    createContainerSectionStatisticsFraudTime(gameRoundCount) {

        this.createContainerStatisticsFraudCounterMain()

        this.createContainerStatisticsFraudCounterRound(
            gameRoundCount
        );

        this.createContainerStatisticsFraudCounterName();
    }

    createContainerStatisticsFraudCounterMain() {

        createElementDiv(
            variablesStatisticsFraud.statisticsFraudMainPartsId,
            variablesStatisticsFraud.containerStatisticsFraudCounterMain
        );

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterMain,
            variablesStatisticsFraud.containerStatisticsFraudCounterMainParts
        );
    }

    createContainerStatisticsFraudCounterRound(gameRoundCount) {

        this.createContainerStatisticsFraudCounterRoundMain();

        let parentId = variablesStatisticsFraud.containerStatisticsFraudCounterRoundMainParts;

        this.createContainerStatisticsFraudCounterRoundMainParts(
            parentId,
            gameRoundCount
        );

        this.createContainerStatisticsFraudCounterRoundNumber(
            parentId,
            gameRoundCount
        );
    }

    createContainerStatisticsFraudCounterRoundMain() {

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterMainParts,
            variablesStatisticsFraud.containerStatisticsFraudCounterRoundMain
        );

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterRoundMain,
            variablesStatisticsFraud.containerStatisticsFraudCounterRoundMainParts
        );
    }

    createContainerStatisticsFraudCounterRoundMainParts(parentId, gameRoundCount) {

        let gridRowStartNumber = 1;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2;

        let gridTemplateRows = "repeat(1, 2fr 6fr 2fr)";
        let gridTemplateColumns = "repeat(" + gameRoundCount + ", 1fr 100fr 1fr)";

        setElementStyletAsGrid(
            parentId,
            gridRowStartNumber,
            gridColumnStartNumber,
            gridRowEndNumber,
            gridColumnEndNumber,
            gridTemplateRows,
            gridTemplateColumns);
    }

    createContainerStatisticsFraudCounterRoundNumber(parentId, gameRoundCount) {

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        for (let index = 0; index < gameRoundCount; index++) {

            let childId = variablesStatisticsFraud.containerStatisticsFraudCounterRoundNumberMainPrefix + valueToString(index);

            this.createElementFraudCountRoundMain(
                parentId,
                childId
            );

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

            this.createElementFraudCountRoundInner(
                childId,
                index
            );

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }

    createElementFraudCountRoundMain(parentId, childId) {

        createElementDiv(
            parentId,
            childId
        );
    }

    createElementFraudCountRoundInner(parentIdMain, index) {

        let childIdMainParts = variablesStatisticsFraud.containerStatisticsFraudCounterRoundNumberMainPartsPrefix + valueToString(index);

        createElementDiv(
            parentIdMain,
            childIdMainParts
        );

        setElementStyletAsGrid(
            childIdMainParts,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");

        let grandchildId = variablesStatisticsFraud.statisticsFraudCounterRoundDisplayFlexPrefix + valueToString(index);
        let iId = variablesStatisticsFraud.statisticsFraudIconWhiskeyGlassPrefix + valueToString(index);
        let pId = variablesStatisticsFraud.statisticsFraudCounterRoundDisplaySumValue + valueToString(index);

        createElementDivWithIdAndSetClassName(
            childIdMainParts,
            grandchildId,
            variablesStatisticsFraud.statisticsFraudCounterRoundDisplayFlex
        );

        createElementI(
            grandchildId,
            iId,
            variablesStatisticsFraud.statisticsFraudSumIconStyleSolid,
            variablesStatisticsFraud.statisticsFraudSumIconWhiskeyGlass
        );

        createElementP(
            grandchildId,
            pId
        );

        setElementTextById(
            pId,
            variablesStatisticsFraud.statisticsFraudDisplayIconWhiskeyGlassAndSpace
        );

        addElementClassNameById(
            pId,
            variablesStatisticsFraud.statisticsFraudCounterRoundStyleValueSumPerRound
        );

    }

    createContainerStatisticsFraudCounterName() {

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterMainParts,
            variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayTextMain
        );

        createElementDiv(
            variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayTextMain,
            variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayTextMainParts
        );

        createElementDivWithTheSameIdAndClassName(
            variablesStatisticsFraud.containerStatisticsFraudCounterNameDisplayTextMainParts,
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayNameFlex
        );

        createElementPWithTheSameIdAndClassName(
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayNameFlex,
            variablesStatisticsFraud.statisticsFraudCounterNameStyleText
        );

        setElementTextById(
            variablesStatisticsFraud.statisticsFraudCounterNameStyleText,
            variablesStatisticsFraud.statisticsFraudCounterNameDisplayName
        );
    }
}