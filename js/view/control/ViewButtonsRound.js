import {
    createElementButton,
    createElementDiv,
    createElementDivAnaDivChild, createElementI, createElementP,
    getElementAttributeValueById,
    removeElementClassNameById,
    setElementAttributeValueById,
    setElementClassNameById,
    setElementClassNamedAndText,
    setElementClassNames,
    setElementStyletAsGrid,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesMenu from "../../common/variable/menu/variablesMenu.js";
import * as variablesStatisticsTime from "../../common/variable/statistic/variablesStatisticsTime.js";
import * as variablesButtonRound from "../../common/variable/control/variablesButtonRound.js";
import {containerConfigurationRoundMainPartsRowPrefix} from "../../common/variable/control/variablesButtonRound.js";


export class ViewButtonsRound {

    createContainerRoundNumberConfiguration() {
        this.createContainerRoundNumberConfigurationMain();
        this.createContainerConfigurationDecorationIcon();
        this.createContainerButtonRoundNumberMain();
    }

    createContainerRoundNumberConfigurationMain() {

        createElementDiv(
            variablesMenu.containerMenuMainParts,
            variablesButtonRound.containerConfigurationMain
        );

        createElementDiv(
            variablesButtonRound.containerConfigurationMain,
            variablesButtonRound.containerConfigurationMainParts
        );
    }

    createContainerConfiguration(containerMenuGameConfigurationText, menuGameConfigurationText) {

        createElementDivAnaDivChild(
            variablesButtonRound.containerConfigurationMainParts,
            containerMenuGameConfigurationText,
            menuGameConfigurationText
        );
    }

    createContainerConfigurationDecorationIcon() {

        createElementDivAnaDivChild(
            variablesButtonRound.containerConfigurationMainParts,
            variablesButtonRound.containerConfigurationDecorationIconMain,
            variablesButtonRound.configurationDecorationIconDisplayIconFlex
        );

        setElementClassNameById(
            variablesButtonRound.configurationDecorationIconDisplayIconFlex,
            variablesButtonRound.configurationDecorationIconDisplayIconFlex
        );

        createElementI(
            variablesButtonRound.configurationDecorationIconDisplayIconFlex,
            variablesButtonRound.configurationDecorationIcon,
            variablesButtonRound.containerConfigurationDecorationIconStyleSolid,
            variablesButtonRound.containerConfigurationDecorationIconScrewdriverWrench
        );
    }

    createContainerButtonRoundNumberMain() {

        this.createContainerConfiguration(
            variablesButtonRound.containerConfigurationRoundMain,
            variablesButtonRound.containerConfigurationRoundMainParts);

        this.createContainersConfigurationClickNumberButton();
    }

    createContainersConfigurationClickNumberButton() {
        // this.createContainerRoundNumberConfigurationRows();
        this.createContainerRoundNumberConfigurationRowsAll();
    }

    // createContainerRoundNumberConfigurationRows() {
    createContainerRoundNumberConfigurationRows(parentId, childId, grandchildId) {

        // createElementDivAnaDivChild(
        //     variablesButtonRound.containerConfigurationRoundMainParts,
        //     variablesButtonRound.containerConfigurationRoundMainRow0,
        //     variablesButtonRound.containerConfigurationRoundMainPartsRow0
        // );
        //
        // createElementDivAnaDivChild(
        //     variablesButtonRound.containerConfigurationRoundMainParts,
        //     variablesButtonRound.containerConfigurationRoundMainRow1,
        //     variablesButtonRound.containerConfigurationRoundMainPartsRow1
        // );

        // let childId = variablesButtonRound.containerConfigurationRoundMainRowPrefix + valueToString(rowNumber);
        // let grandchildId = variablesButtonRound.containerConfigurationRoundMainPartsRowPrefix + valueToString(rowNumber);

        createElementDivAnaDivChild(
            parentId,
            childId,
            grandchildId
        );
    }

    createContainerRoundNumberConfigurationRowsAll() {

        for (let rowNumber = 0; rowNumber < 2; rowNumber++) {

            let parentId =
                variablesButtonRound.containerConfigurationRoundMainParts;

            let childId =
                variablesButtonRound.containerConfigurationRoundMainRowPrefix
                + valueToString(rowNumber);

            let grandchildId =
                variablesButtonRound.containerConfigurationRoundMainPartsRowPrefix
                + valueToString(rowNumber);

            this.createContainerRoundNumberConfigurationRows(
                parentId,
                childId,
                grandchildId
            );

            this.createContainerConfigurationButtonRoundMainParts(
                grandchildId,
                rowNumber
            );

            this.createContainerRoundNumberConfigurationPerRow(
                grandchildId,
                rowNumber
            );
        }
    }

    createContainerConfigurationButtonRoundMainParts(parentId) {


        // let parentId =  variablesButtonRound.containerConfigurationRoundMainPartsRowPrefix + valueToString(rowNumber);
        let clicksNumberPerRow = 5;

        let gridRowStartNumber = 1;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2;

        let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        let gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";

        setElementStyletAsGrid(
            parentId,
            gridRowStartNumber,
            gridColumnStartNumber,
            gridRowEndNumber,
            gridColumnEndNumber,
            gridTemplateRows,
            gridTemplateColumns);

    }

    createContainerRoundNumberConfigurationPerRow(parentId, rowNumber) {

        // let parentId = variablesButtonRound.containerConfigurationRoundMainPartsRowPrefix + valueToString(rowNumber);
        let clicksNumberPerRow = 5;
        //
        // let gridRowStartNumber = 1;
        // let gridColumnStartNumber = 1;
        // let gridRowEndNumber = 2;
        // let gridColumnEndNumber = 2;
        //
        // let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        // let gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";
        //
        // setElementStyletAsGrid(
        //     parentId,
        //     gridRowStartNumber,
        //     gridColumnStartNumber,
        //     gridRowEndNumber,
        //     gridColumnEndNumber,
        //     gridTemplateRows,
        //     gridTemplateColumns);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        let clickNumberButton = 1;

        if (rowNumber === 1) {
            clickNumberButton = clicksNumberPerRow + 1;
        }

        for (let i = 0; i < clicksNumberPerRow; i++) {

            let childId = variablesButtonRound.buttonRoundNumberPrefix + rowNumber + "-button-" + i;
            createElementDiv(parentId, childId);

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

            let buttonId = variablesButtonRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumberButton);
            let elementText = variablesButtonRound.buttonRoundNumberDisplayIcon + valueToString(clickNumberButton);

            this.creatContainerButtonRoundNumber(
                childId,
                buttonId,
                clickNumberButton,
                elementText
            );

            if (clickNumberButton === 5)
                setElementClassNameById(
                    buttonId,
                    variablesButtonRound.buttonRoundNumberMarkCurrent
                );

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
            clickNumberButton += 1;
        }
    }

    creatContainerButtonRoundNumber(parentId, buttonId, attributeValue, elementText) {

        createElementButton(
            parentId,
            buttonId
        );

        setElementAttributeValueById(
            buttonId,
            valueToString(attributeValue)
        );

        setElementClassNames(
            buttonId,
            variablesStatisticsTime.commonGameFiledDisplay,
            variablesButtonRound.buttonRoundNumber
        );

        setElementClassNamedAndText(
            buttonId,
            variablesButtonRound.configurationDecorationIconDisplayIconFlex,
            elementText
        );
    }

    getRoundNumberSetupByUser(buttonIdCurrent) {
        return getElementAttributeValueById(
            buttonIdCurrent
        );
    }

    setStyleButtonRoundNumberAtStart(buttonIdPrevious, currentButtonId) {

        removeElementClassNameById(
            buttonIdPrevious,
            variablesButtonRound.buttonRoundNumberMarkCurrent
        );

        setElementClassNameById(
            currentButtonId,
            variablesButtonRound.buttonRoundNumberMarkCurrent
        );
    }

    setStyleButtonRoundNumberAfterGameStart(buttonIdPrevious, currentButtonId, roundNumberFinal) {

        removeElementClassNameById(
            buttonIdPrevious,
            variablesButtonRound.buttonRoundNumberMarkCurrent)
        ;

        removeElementClassNameById(
            roundNumberFinal,
            variablesButtonRound.menuGameConfigurationButtonChosenNumber
        );

        setElementClassNameById(
            currentButtonId,
            variablesButtonRound.menuGameConfigurationButtonChosenNumber
        );
    }

    setStyleButtonRoundNumberWhenGameStop(roundNumberFinal) {

        removeElementClassNameById(
            roundNumberFinal,
            variablesButtonRound.menuGameConfigurationButtonChosenNumber
        );
    }
}