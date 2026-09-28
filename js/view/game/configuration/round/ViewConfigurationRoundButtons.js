import {
    createElementButton,
    createElementDiv,
    createElementI,
    createElementP,
    getElementAttributeValueById,
    removeElementClassNameById,
    setElementAttributeValueById,
    addElementClassNameById,
    addElementClassNames,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesConfigurationRoundButtons
    from "../../../../common/variable/game/configuration/round/variablesConfigurationRoundButtons.js";


class ViewConfigurationRoundButtons {

    createContainersConfigurationRoundButtons() {

        // // let buttonNumberPerRow = 5;
        // // let buttonNumberPerRow = variablesConfigurationRoundButtons.configurationRoundMaxRowNumber;
        //
        // for (let rowNumber = 0; rowNumber < 2; rowNumber++) {
        //
        //     // this.createContainerConfigurationRoundButtons(
        //     //     rowNumber,
        //     //     buttonNumberPerRow
        //     // );
        // }

        let maxRowNumber =
            variablesConfigurationRoundButtons.configurationRoundMaxRowNumber;

        // for (let rowNumber = 0; rowNumber < 2; rowNumber++) {
        for (let rowNumber = 0; rowNumber < maxRowNumber; rowNumber++) {

            this.createContainerConfigurationRoundButtons(
                rowNumber
            );
        }
    }

    // createContainerConfigurationRoundButtons(rowNumber, buttonNumberPerRow) {
    createContainerConfigurationRoundButtons(rowNumber) {

        let buttonNumberPerRow =
            variablesConfigurationRoundButtons.configurationRoundMaxButtonNumberPerRow;

        let parentId =
            variablesConfigurationRoundButtons.containerConfigurationRoundRowMainPartsPrefixId
            + valueToString(rowNumber);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        let roundNumber = 0;
        roundNumber = buttonNumberPerRow * rowNumber + 1;

        for (let number = 0; number < buttonNumberPerRow; number++) {

            let childId =
                variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
                + valueToString(roundNumber);

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

            this.createButtonRound(
                childId,
                roundNumber
            );

            // if (roundNumber === 5) {
            if (roundNumber === buttonNumberPerRow) {
                addElementClassNameById(
                    variablesConfigurationRoundButtons.buttonRoundPrefixId + valueToString(roundNumber),
                    variablesConfigurationRoundButtons.buttonRoundCurrentNumber
                );
            }

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
            roundNumber += 1;
        }
    }

    createButtonRound(parentId, roundNumber) {
        this.createButtonRoundMain(parentId, roundNumber);
        this.createIconComputerMouse(roundNumber);
        this.createButtonRoundText(roundNumber);
    }

    createButtonRoundMain(parentId, roundNumber) {

        let buttonId = variablesConfigurationRoundButtons.buttonRoundPrefixId + valueToString(roundNumber);

        createElementButton(
            parentId,
            buttonId
        );

        setElementAttributeValueById(
            buttonId,
            valueToString(roundNumber)
        );

        addElementClassNames(
            buttonId,
            variablesConfigurationRoundButtons.configurationRoundStyleDisplayFlex,
            variablesConfigurationRoundButtons.buttonRoundStyle
        );
    }

    createIconComputerMouse(roundNumber) {
        createElementI(
            variablesConfigurationRoundButtons.buttonRoundPrefixId + valueToString(roundNumber),
            variablesConfigurationRoundButtons.buttonRoundIconComputerMousePrefixId + valueToString(roundNumber),
            variablesConfigurationRoundButtons.buttonRoundIconComputerMouseStyleSolid,
            variablesConfigurationRoundButtons.buttonRoundIconComputerMouse
        );
    }

    createButtonRoundText(roundNumber) {

        let pId =
            variablesConfigurationRoundButtons.buttonRoundTextId + valueToString(roundNumber);

        createElementP(
            variablesConfigurationRoundButtons.buttonRoundPrefixId + valueToString(roundNumber),
            pId
        );

        setElementTextById(
            pId,
            variablesConfigurationRoundButtons.buttonRoundTextSpace
            + valueToString(roundNumber)
        );

        addElementClassNames(
            pId,
            variablesConfigurationRoundButtons.buttonRoundStyleText
        );
    }

    getRoundButtonNumberChosen(buttonIdCurrent) {
        return getElementAttributeValueById(
            buttonIdCurrent
        );
    }

    setConfigurationButtonRoundStyleAtStart(buttonIdPrevious, currentButtonId) {
        removeElementClassNameById(
            buttonIdPrevious,
            variablesConfigurationRoundButtons.buttonRoundCurrentNumber
        );

        addElementClassNameById(
            currentButtonId,
            variablesConfigurationRoundButtons.buttonRoundCurrentNumber
        );
    }

    addButtonRoundStyleCurrentNumber(buttonId) {
        addElementClassNameById(
            buttonId,
            variablesConfigurationRoundButtons.buttonRoundCurrentNumber
        );
    }

    removeButtonRoundStyleCurrentNumber(buttonId) {
        removeElementClassNameById(
            buttonId,
            variablesConfigurationRoundButtons.buttonRoundCurrentNumber
        );
    }

    removeButtonRoundStyleChosenNumber(elementId) {
        removeElementClassNameById(
            elementId,
            variablesConfigurationRoundButtons.buttonRoundChosenNumber
        );
    }

    addButtonRoundStyleChosenNumber(elementId) {
        addElementClassNameById(
            elementId,
            variablesConfigurationRoundButtons.buttonRoundChosenNumber
        );
    }
}

export default ViewConfigurationRoundButtons