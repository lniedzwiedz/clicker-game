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

import * as variablesStatisticsFraudHistory
    from "../../../../common/variable/home/statistic/fraud/variablesStatisticsFraudHistory.js";


export class ViewStatisticsFraudHistory {

    createContainerStatisticsFraudHistory(gameRoundCount) {

        this.createContainerStatisticsFraudHistoryPrimary();
        this.createContainerHistoryRound(gameRoundCount);

        this.createContainerHistoryName();
    }

    createContainerStatisticsFraudHistoryPrimary() {
        this.createContainerStatisticsFraudHistoryMain();
        this.createContainerStatisticsFraudHistoryMainParts();
    }

    createContainerStatisticsFraudHistoryMain() {

        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudMainPartsId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryMainId
        );
    }

    createContainerStatisticsFraudHistoryMainParts() {

        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryMainId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryMainPartsId
        );
    }

    createContainerHistoryRound(gameRoundCount) {

        this.createContainerHistoryRoundPrimary(gameRoundCount);
        this.createContainerHistoryRoundNumberPrimary(gameRoundCount);
    }

    createContainerHistoryRoundPrimary(gameRoundCount) {

        this.createContainerStatisticsFraudHistoryRoundMain();
        this.createContainerStatisticsFraudHistoryRoundMainParts();
        this.createContainerStatisticsFraudHistoryRoundMainPartsGrid(gameRoundCount);
    }

    createContainerStatisticsFraudHistoryRoundMain() {

        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryMainPartsId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundMainId
        );
    }

    createContainerStatisticsFraudHistoryRoundMainParts() {

        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundMainId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundMainPartsId
        );
    }


    createContainerStatisticsFraudHistoryRoundMainPartsGrid(gameRoundCount) {

        let parentId = variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundMainPartsId;

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

    createContainerHistoryRoundNumberPrimary(gameRoundCount) {

        let parentId = variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundMainPartsId;

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        for (let index = 0; index < gameRoundCount; index++) {

            let childId = variablesStatisticsFraudHistory.historyRoundNumberMainIdPrefix + valueToString(index);

            // this.createContainerHistoryRoundNumberMain(
            //     parentId,
            //     childId
            // );

            this.createContainerHistoryRoundNumberMain(parentId, childId);

            // let gridTemplateRowsChild = "1fr";
            // let gridTemplateColumnsChild = "1fr";
            //
            // setElementStyletAsGrid(
            //     childId,
            //     gridRowStartNumberChild,
            //     gridColumnStartNumberChild,
            //     gridRowEndNumberChild,
            //     gridColumnEndNumberChild,
            //     gridTemplateRowsChild,
            //     gridTemplateColumnsChild);

            this.createContainerHistoryRoundNumberMainPartsGrid(
                childId,
                gridRowStartNumberChild, gridColumnStartNumberChild,
                gridRowEndNumberChild, gridColumnEndNumberChild,)


            this.containerStatisticsFraudCounterRoundNumberMainParts(
                valueToString(index)
            );

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }

    createContainerHistoryRoundNumberMain(parentId, childId) {

        createElementDiv(
            parentId,
            childId
        );
    }

    createContainerHistoryRoundNumberMainPartsGrid(childId,
                                                   gridRowStartNumberChild, gridColumnStartNumberChild,
                                                   gridRowEndNumberChild, gridColumnEndNumberChild,) {

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
    }


    containerStatisticsFraudCounterRoundNumberMainParts(index) {

        // let childIdMainParts = variablesStatisticsFraudHistory.containerStatisticsFraudCounterRoundNumberMainPartsPrefix + valueToString(index);

        // createElementDiv(
        //     parentIdMain,
        //     childIdMainParts
        // );

        // setElementStyletAsGrid(
        //     childIdMainParts,
        //     1,
        //     1,
        //     2,
        //     2,
        //     "1fr",
        //     "1fr");

        this.containerHistoryRoundNumberMainPartsPrimary(index);

        // let grandchildId = variablesStatisticsFraudHistory.statisticsFraudCounterRoundDisplayFlexPrefix + valueToString(index);
        // let iId = variablesStatisticsFraudHistory.statisticsFraudIconWhiskeyGlassPrefix + valueToString(index);
        // let pId = variablesStatisticsFraudHistory.statisticsFraudCounterRoundDisplaySumValuePrefix + valueToString(index);

        // createElementDivWithIdAndSetClassName(
        //     childIdMainParts,
        //     grandchildId,
        //     variablesStatisticsFraudHistory.statisticsFraudCounterRoundDisplayFlex
        // );

        // createElementI(
        //     grandchildId,
        //     iId,
        //     variablesStatisticsFraudHistory.statisticsFraudSumIconStyleSolid,
        //     variablesStatisticsFraudHistory.statisticsFraudSumIconWhiskeyGlass
        // );
        //
        // createElementP(
        //     grandchildId,
        //     pId
        // );
        //
        // setElementTextById(
        //     pId,
        //     variablesStatisticsFraudHistory.statisticsFraudDisplayIconWhiskeyGlassAndSpace
        // );
        //
        // addElementClassNameById(
        //     pId,
        //     variablesStatisticsFraudHistory.statisticsFraudCounterRoundStyleValueSumPerRound
        // );

        // this.createContainerHistoryRoundValue(childIdMainParts, index);
        this.createContainerHistoryRoundValue(index);
    }

    containerHistoryRoundNumberMainPartsPrimary(index) {
        this.containerHistoryRoundNumberMain(index);
        this.containerHistoryRoundNumberMainPartsGrid(index);

    }

    containerHistoryRoundNumberMain(index) {

        createElementDiv(
            variablesStatisticsFraudHistory.historyRoundNumberMainIdPrefix + index,
            variablesStatisticsFraudHistory.historyRoundNumberMainPartsIdPrefix + index,
        );
    }

    containerHistoryRoundNumberMainPartsGrid(index) {

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.historyRoundNumberMainPartsIdPrefix + index,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryRoundValue(index) {
        this.createContainerHistoryRoundValueMain(index);
        this.createHistoryIconWhiskeyGlass(index);
        this.createHistoryRoundValueText(index);

    }

    createContainerHistoryRoundValueMain(index) {

        createElementDivWithIdAndSetClassName(
            variablesStatisticsFraudHistory.historyRoundNumberMainPartsIdPrefix + index,
            variablesStatisticsFraudHistory.historyRoundNumberIdPrefix + index,
            variablesStatisticsFraudHistory.historyRoundNumberStyleDisplayFlex
        );
    }

    createHistoryIconWhiskeyGlass(index) {

        createElementI(
            variablesStatisticsFraudHistory.historyRoundNumberIdPrefix + index,
            variablesStatisticsFraudHistory.historyRoundNumberIconWhiskeyGlassIdPrefix + index,
            variablesStatisticsFraudHistory.statisticsFraudSumIconStyleSolid,
            variablesStatisticsFraudHistory.statisticsFraudHistoryRoundIconWhiskeyGlass
        );
    }

    createHistoryRoundValueText(index) {

        let pId = variablesStatisticsFraudHistory.historyRoundNumberTextIdIdPrefix + index

        createElementP(
            variablesStatisticsFraudHistory.historyRoundNumberIdPrefix + index,
            pId
        );

        setElementTextById(
            pId,
            variablesStatisticsFraudHistory.historyRoundNumberTextSpaceAfterIconWhiskeyGlassAndSpace
        );

        addElementClassNameById(
            pId,
            variablesStatisticsFraudHistory.historyRoundNumberStyleText
        );
    }


    createContainerHistoryName() {

        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryMainPartsId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameDisplayTextMain
        );

        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameDisplayTextMain,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameDisplayTextMainParts
        );

        createElementDivWithTheSameIdAndClassName(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameDisplayTextMainParts,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameDisplayNameFlex
        );

        createElementPWithTheSameIdAndClassName(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameDisplayNameFlex,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameStyleText
        );

        setElementTextById(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameStyleText,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameDisplayName
        );
    }

    updateStatisticsFraudSCounterValue() {


    }
}