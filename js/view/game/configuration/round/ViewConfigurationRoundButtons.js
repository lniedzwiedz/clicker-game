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

    createContainersConfigurationRoundButton() {

        let maxRowNumber =
            variablesConfigurationRoundButtons.configurationRoundMaxRowNumber;

        for (let rowNumber = 0; rowNumber < maxRowNumber; rowNumber++) {
            this.createContainerConfigurationRoundButtons(
                rowNumber
            );
        }
    }

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
                // childId,
                roundNumber
            );

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

    // createButtonRound(parentId, roundNumber) {
    createButtonRound(roundNumber) {
        // this.createButtonRoundMain(parentId, roundNumber);
        this.createButtonRoundMain(roundNumber);
        this.createIconComputerMouse(roundNumber);
        this.createButtonRoundText(roundNumber);
    }

    // createButtonRoundMain(parentId, roundNumber) {
    createButtonRoundMain(roundNumber) {

        // let parentId =
        //     variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
        //     + valueToString(roundNumber);

        let buttonId = variablesConfigurationRoundButtons.buttonRoundPrefixId + valueToString(roundNumber);

        createElementButton(
            // parentId,
            variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
            + valueToString(roundNumber),
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

        addElementClassNameById(
            pId,
            variablesConfigurationRoundButtons.buttonRoundStyleText
        );
    }

    getRoundButtonChosenNumberValue(buttonIdCurrent) {
        return getElementAttributeValueById(
            buttonIdCurrent
        );
    }

    setConfigurationRoundButtonsAfterClickRoundButton(buttonIdPrevious, currentButtonId) {
        removeElementClassNameById(
            buttonIdPrevious,
            variablesConfigurationRoundButtons.buttonRoundCurrentNumber
        );

        addElementClassNameById(
            currentButtonId,
            variablesConfigurationRoundButtons.buttonRoundCurrentNumber
        );
    }

    setConfigurationRoundButtonsAfterClickButtonStart(buttonIdCurrent, buttonIdChosen) {

        this.removeButtonRoundStyleChosenNumber(buttonIdChosen);
        this.removeButtonRoundStyleCurrentNumber(buttonIdChosen);

        this.removeButtonRoundStyleCurrentNumber(buttonIdCurrent);
        this.addButtonRoundStyleChosenNumber(buttonIdCurrent);
    }

    setConfigurationRoundButtonsAfterGameEnd(buttonIdCurrent, buttonIdChosen) {
        this.removeButtonRoundStyleChosenNumber(buttonIdChosen);
        this.addButtonRoundStyleCurrentNumber(buttonIdCurrent);
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