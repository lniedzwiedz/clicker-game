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

            // let childId = this.getHistoryRoundNumberMainId(index);
            let childId = variablesStatisticsFraudHistory.containerHistoryRoundNumberTextMainIdPrefix + valueToString(index);

            this.createContainerHistoryRoundNumberMain(parentId, childId);

            this.createContainerHistoryRoundNumberMainGrid(
                childId,
                gridRowStartNumberChild, gridColumnStartNumberChild,
                gridRowEndNumberChild, gridColumnEndNumberChild)


            this.createContainerHistoryRoundNumberMainParts(index);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
        }
    }

    createContainerHistoryRoundBackground(gameRoundCount) {
        this.createContainerHistoryRoundBackgroundPrimary(gameRoundCount);
        this.createHistoryRoundBackgroundMain(gameRoundCount);
    }

    createContainerHistoryRoundBackgroundPrimary(gameRoundCount) {
        this.createContainerHistoryRoundBackgroundMain(gameRoundCount);
        this.createContainerHistoryRoundBackgroundMainParts(gameRoundCount);
    }

    createContainerHistoryRoundBackgroundMain(index) {
        createElementDiv(
            variablesStatisticsFraudHistory.containerHistoryRoundNumberTextMainPartsIdPrefix
            + valueToString(index),
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundNumberBackgroundMainIdPrefix
            + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundNumberBackgroundMainIdPrefix
            + valueToString(index),
            1, 1,
            2, 2,
            "1fr", "1fr");
    }

    createContainerHistoryRoundBackgroundMainParts(index) {
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundNumberBackgroundMainIdPrefix
            + valueToString(index),
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundNumberBackgroundMainPartsIdPrefix
            + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundNumberBackgroundMainPartsIdPrefix
            + valueToString(index),
            1, 1,
            2, 2,
            "1fr", "1fr");
    }

    createHistoryRoundBackgroundMain(gameRoundCount) {
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryRoundNumberBackgroundMainPartsIdPrefix
            + valueToString(gameRoundCount),
            variablesStatisticsFraudHistory.statisticsFraudHistoryRoundNumberBackgroundIdPrefix
            + valueToString(gameRoundCount)
        );

        addElementClassNames(
            variablesStatisticsFraudHistory.statisticsFraudHistoryRoundNumberBackgroundIdPrefix
            + valueToString(gameRoundCount),
            variablesStatisticsFraudHistory.historyRoundNumberStyleDisplayFlex,
            variablesStatisticsFraudHistory.statisticsFraudHistoryRoundNumberBackgroundStyleBase
        );

    }

    createContainerHistoryRoundNumberMain(parentId, childId) {
        createElementDiv(
            parentId,
            childId
        );
    }

    createContainerHistoryRoundNumberMainGrid(childId,
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

    createContainerHistoryRoundNumberMainParts(index) {
        this.containerHistoryRoundNumberMainPartsPrimary(index);
        this.createContainerHistoryRoundBackground(index);
        this.createContainerHistoryRoundValue(index);
    }

    containerHistoryRoundNumberMainPartsPrimary(index) {
        this.containerHistoryRoundNumberMain(index);
        this.containerHistoryRoundNumberMainPartsGrid(index);
    }

    containerHistoryRoundNumberMain(index) {
        createElementDiv(
            variablesStatisticsFraudHistory.containerHistoryRoundNumberTextMainIdPrefix
            + valueToString(index),
            variablesStatisticsFraudHistory.containerHistoryRoundNumberTextMainPartsIdPrefix
            + valueToString(index)
        );
    }

    containerHistoryRoundNumberMainPartsGrid(index) {
        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerHistoryRoundNumberTextMainPartsIdPrefix
            + valueToString(index),
            1, 1,
            2, 2,
            "1fr", "1fr");
    }

    createContainerHistoryRoundValue(index) {
        this.createContainerHistoryRoundValuePrimary(index);
        this.createHistoryRoundValueMain(index);
        this.createHistoryIconWhiskeyGlass(index);
        this.createHistoryRoundValueText(index);

    }

    createContainerHistoryRoundValuePrimary(index) {
        this.createContainerHistoryRoundValueMain(index);
        this.createContainerHistoryRoundValueMainParts(index);
    }

    createContainerHistoryRoundValueMain(index) {
        createElementDiv(
            variablesStatisticsFraudHistory.containerHistoryRoundNumberTextMainPartsIdPrefix
            + valueToString(index),
            variablesStatisticsFraudHistory.containerHistoryRoundNumberMainIdPrefix
            + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerHistoryRoundNumberMainIdPrefix
            + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryRoundValueMainParts(index) {
        createElementDiv(
            variablesStatisticsFraudHistory.containerHistoryRoundNumberMainIdPrefix
            + valueToString(index),
            variablesStatisticsFraudHistory.containerHistoryRoundNumberMainPartsIdPrefix
            + valueToString(index)
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerHistoryRoundNumberMainPartsIdPrefix
            + valueToString(index),
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }


    createHistoryRoundValueMain(index) {
        createElementDiv(
            variablesStatisticsFraudHistory.containerHistoryRoundNumberMainPartsIdPrefix
            + valueToString(index),
            this.getHistoryRoundNumberId(index)
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
        this.createContainerHistoryNameBackground();
        this.createContainerHistoryNameText();
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

    createContainerHistoryNameBackground(){
        this.createContainerHistoryNameBackgroundPrimary();
        this.createHistoryNameBackgroundMain();
    }

    createContainerHistoryNameBackgroundPrimary(){
        this.createContainerHistoryNameBackgroundMain();
        this.createContainerHistoryNameBackgroundMainParts();
    }

    createContainerHistoryNameBackgroundMain(){
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameMainPartsId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameBackgroundMainId
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameBackgroundMainId,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryNameBackgroundMainParts(){
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameBackgroundMainId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameBackgroundMainPartsId
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameBackgroundMainPartsId,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createHistoryNameBackgroundMain(){
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameBackgroundMainPartsId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameBackgroundId
        );
        addElementClassNames(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameBackgroundId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameStyleDisplayFlex,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameBackgroundStyleBase
        );
    }


    createContainerHistoryNameText(){
        this.createContainerHistoryNameTextPrimary();
        this.createHistoryNameMain();
        this.createHistoryNameText();
    }

    createContainerHistoryNameTextPrimary(){
        this.createContainerHistoryNameTextMain();
        this.createContainerHistoryNameTextMainParts();
    }

    createContainerHistoryNameTextMain(){
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameMainPartsId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameConstantsMainId
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameConstantsMainId,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createContainerHistoryNameTextMainParts(){
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameConstantsMainId,
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameConstantsMainPartsId
        );

        setElementStyletAsGrid(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameConstantsMainPartsId,
            1,
            1,
            2,
            2,
            "1fr",
            "1fr");
    }

    createHistoryNameMain() {
        createElementDiv(
            variablesStatisticsFraudHistory.containerStatisticsFraudHistoryNameConstantsMainPartsId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsId
        );

        addElementClassNames(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameStyleDisplayFlex,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsStyleBase
        );
    }

    createHistoryNameText() {
        createElementP(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsTextId
        );

        setElementTextById(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsTextId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsText
        );

        addElementClassNameById(
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsTextId,
            variablesStatisticsFraudHistory.statisticsFraudHistoryNameConstantsStyleText
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