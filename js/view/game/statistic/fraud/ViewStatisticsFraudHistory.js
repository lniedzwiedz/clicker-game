import {
    addElementClassNameById,
    addElementClassNames,
    createElementDiv,
    createElementI,
    createElementP,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesStatisticsFraudHistory
    from "../../../../common/variable/game/statistic/fraud/variablesStatisticsFraudHistory.js";


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

            let childId = this.getHistoryRoundNumberMainId(index);

            this.createContainerHistoryRoundNumberMainParts(parentId, childId);

            this.createContainerHistoryRoundNumberMainPartsGrid(
                childId,
                gridRowStartNumberChild, gridColumnStartNumberChild,
                gridRowEndNumberChild, gridColumnEndNumberChild)


            this.containerStatisticsFraudCounterRoundNumberMainParts(
                valueToString(index)
            );

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }

    createContainerHistoryRoundNumberMainParts(parentId, childId) {
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
        this.containerHistoryRoundNumberMainPartsPrimary(index);
        this.createContainerHistoryRoundValue(index);
    }

    containerHistoryRoundNumberMainPartsPrimary(index) {
        this.containerHistoryRoundNumberMain(index);
        this.containerHistoryRoundNumberMainPartsGrid(index);
    }

    containerHistoryRoundNumberMain(index) {
        createElementDiv(
            this.getHistoryRoundNumberMainId(index),
            this.getHistoryRoundNumberMainPartsId(index)
        );
    }

    containerHistoryRoundNumberMainPartsGrid(index) {
        setElementStyletAsGrid(
            this.getHistoryRoundNumberMainPartsId(index),
            1, 1,
            2, 2,
            "1fr", "1fr");
    }

    createContainerHistoryRoundValue(index) {
        this.createContainerHistoryRoundValueMain(index);
        this.createHistoryIconWhiskeyGlass(index);
        this.createHistoryRoundValueText(index);

    }

    createContainerHistoryRoundValueMain(index) {
        createElementDiv(
            this.getHistoryRoundNumberMainPartsId(index),
            this.getHistoryRoundNumberId(index),
        );

        addElementClassNames(
            this.getHistoryRoundNumberId(index),
            variablesStatisticsFraudHistory.historyRoundNumberStyleDisplayFlex,
            variablesStatisticsFraudHistory.historyRoundNumberStyle
        );
    }

    createHistoryIconWhiskeyGlass(index) {
        createElementI(
            this.getHistoryRoundNumberId(index),
            this.getHistoryRoundNumberIconWhiskeyGlassId(index),
            variablesStatisticsFraudHistory.statisticsFraudSumIconStyleSolid,
            variablesStatisticsFraudHistory.statisticsFraudHistoryRoundIconWhiskeyGlass
        );

        addElementClassNameById(
            this.getHistoryRoundNumberIconWhiskeyGlassId(index),
            variablesStatisticsFraudHistory.statisticsFraudHistoryIconStyleWhiskeyGlassFraudHistory
        );
    }

    createHistoryRoundValueText(index) {

        let pId = this.getHistoryRoundNumberTextIdId(index);

        createElementP(
            this.getHistoryRoundNumberId(index),
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
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryMainPartsId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameMainId
        );
    }

    createContainerHistoryNameMainParts() {
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameMainId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameMainPartsId
        );
    }

    createHistoryNameMain() {
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameMainPartsId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameId
        );

        addElementClassNames(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameStyleDisplayFlex,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameStyle
        );
    }

    createHistoryNameText() {
        createElementP(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameTextId
        );

        setElementTextById(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameTextId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameText
        );

        addElementClassNameById(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameTextId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameStyleText
        );
    }

    // action
    setStatisticsFraudHistoryRoundNumberValue(fraudCountedRoundNumber, historyRoundNumberTextId) {

        let result;
        if (fraudCountedRoundNumber < 10)
            result = valueToString(fraudCountedRoundNumber) + variablesStatisticsFraudHistory.historyRoundNumberTextSpace;
        else
            result = fraudCountedRoundNumber;

        let elementId = variablesStatisticsFraudHistory.historyRoundNumberTextIdIdPrefix + historyRoundNumberTextId;
        let text = variablesStatisticsFraudHistory.historyRoundNumberTextSpace + result;

        setElementTextById(
            elementId,
            text
        );
    }

    getHistoryRoundNumberMainId(index) {
        return variablesStatisticsFraudHistory.historyRoundNumberMainIdPrefix + valueToString(index);
    }

    getHistoryRoundNumberMainPartsId(index) {
        return variablesStatisticsFraudHistory.historyRoundNumberMainPartsIdPrefix + valueToString(index);
    }

    getHistoryRoundNumberId(index) {
        return variablesStatisticsFraudHistory.historyRoundNumberIdPrefix + valueToString(index);
    }

    getHistoryRoundNumberIconWhiskeyGlassId(index) {
        return variablesStatisticsFraudHistory.historyRoundNumberIconWhiskeyGlassIdPrefix + valueToString(index);
    }

    getHistoryRoundNumberTextIdId(index) {
        return variablesStatisticsFraudHistory.historyRoundNumberTextIdIdPrefix + valueToString(index);
    }
}