import {
    createElementButton,
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithTheSameIdAndClassName,
    getElementAttributeValueById, removeElementClassNameById,
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

export class ViewButtonsRound {

    createContainerRoundNumberConfiguration() {
        this.createContainerRoundNumberConfigurationMain();
        this.createContainerRoundNumberTitle();
        // createContainerMenuConfigurationGameKind();
        this.createContainerButtonRoundNumberMain();
    }

    createContainerRoundNumberConfigurationMain() {
        createElementDivWithTheSameIdAndClassName(variablesMenu.containerMenuMainParts, variablesButtonRound.containerRoundNumberConfigurationMain);
        createElementDiv(variablesButtonRound.containerRoundNumberConfigurationMain, variablesButtonRound.containerRoundNumberConfigurationMainParts);
    }

    createContainerConfiguration(containerMenuGameConfigurationText, menuGameConfigurationText) {
        createElementDivAnaDivChild(variablesButtonRound.containerRoundNumberConfigurationMainParts, containerMenuGameConfigurationText, menuGameConfigurationText);
    }

    createContainerRoundNumberTitle() {
        this.createContainerConfiguration(variablesButtonRound.containerRoundNumberTitleMain, variablesButtonRound.buttonRoundNumberText);
        setElementClassNamedAndText(variablesButtonRound.buttonRoundNumberText, variablesButtonRound.roundNumberIconTitleDiv, variablesButtonRound.roundNumberTitleDisplayIcon);
    }

    createContainerButtonRoundNumberMain() {
        this.createContainerConfiguration(variablesButtonRound.containerButtonRoundNumberMain, variablesButtonRound.containerButtonRoundNumberMainParts);
        this.createContainersConfigurationClickNumberButton();
    }

    createContainerMenuConfigurationGameKind() {
        createElementDiv(variablesButtonRound.containerRoundNumberConfigurationMainParts, variablesButtonRound.containerMenuGameConfigurationGameKind);
    }

    createContainersConfigurationClickNumberButton() {
        this.createContainerRoundNumberConfigurationRows();
        this.createContainerRoundNumberConfigurationRowsAll();
    }

    createContainerRoundNumberConfigurationRows() {
        createElementDivAnaDivChild(variablesButtonRound.containerButtonRoundNumberMainParts, variablesButtonRound.containerButtonRoundNumberMainRow0, variablesButtonRound.containerButtonRoundNumberMainPartRow0);
        createElementDivAnaDivChild(variablesButtonRound.containerButtonRoundNumberMainParts, variablesButtonRound.containerButtonRoundNumberMainRow1, variablesButtonRound.containerButtonRoundNumberMainPartRow1);
    }

    createContainerRoundNumberConfigurationRowsAll() {

        for (let rowNumber = 0; rowNumber < 2; rowNumber++) {
            this.createContainerRoundNumberConfigurationPerRow(rowNumber);
        }
    }

    createContainerRoundNumberConfigurationPerRow(rowNumber) {

        let parentId = variablesButtonRound.containerButtonRoundNumberMainPartRow + rowNumber;
        let clicksNumberPerRow = 5;

        let gridRowStartNumber = 1;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2;

        let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        let gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";
        setElementStyletAsGrid(parentId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);

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
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            let buttonId = variablesButtonRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumberButton);
            let elementText = variablesButtonRound.buttonRoundNumberDisplayIcon + valueToString(clickNumberButton);
            this.creatContainerButtonRoundNumber(childId, buttonId, clickNumberButton, elementText);

            if (clickNumberButton === 5)
                setElementClassNameById(buttonId, variablesButtonRound.buttonRoundNumberMarkCurrent);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
            clickNumberButton += 1;
        }
    }

    creatContainerButtonRoundNumber(parentId, buttonId, attributeValue, elementText) {
        createElementButton(parentId, buttonId);
        setElementAttributeValueById(buttonId, valueToString(attributeValue));
        setElementClassNames(buttonId, variablesStatisticsTime.commonGameFiledDisplay, variablesButtonRound.buttonRoundNumber);
        setElementClassNamedAndText(buttonId, variablesButtonRound.buttonRoundNumberText, elementText);
    }

    getRoundNumberSetupByUser(buttonIdCurrent) {
        return getElementAttributeValueById(buttonIdCurrent);
    }

    setStyleButtonRoundNumberAtStart(buttonIdPrevious, currentButtonId) {
        removeElementClassNameById(buttonIdPrevious, variablesButtonRound.buttonRoundNumberMarkCurrent);
        setElementClassNameById(currentButtonId, variablesButtonRound.buttonRoundNumberMarkCurrent);
    }

    setStyleButtonRoundNumberAfterGameStart(buttonIdPrevious, currentButtonId, roundNumberFinal) {
        removeElementClassNameById(buttonIdPrevious, variablesButtonRound.buttonRoundNumberMarkCurrent);
        removeElementClassNameById(roundNumberFinal, variablesButtonRound.menuGameConfigurationButtonChosenNumber);
        setElementClassNameById(currentButtonId, variablesButtonRound.menuGameConfigurationButtonChosenNumber);
    }

    setStyleButtonRoundNumberWhenGameStop(roundNumberFinal) {
        removeElementClassNameById(roundNumberFinal, variablesButtonRound.menuGameConfigurationButtonChosenNumber);
    }
}