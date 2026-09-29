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
        this.createContainersConfigurationRoundButtonMain();
        this.setConfigurationRoundButtonDefault();
    }

    createContainersConfigurationRoundButtonMain(){

        let maxRowNumber =
            variablesConfigurationRoundButtons.configurationRoundMaxRowNumber;

        for (let rowNumber = 0; rowNumber < maxRowNumber; rowNumber++) {
            this.createContainersConfigurationRoundButtonPerRow(
                rowNumber
            );
        }
    }

    createContainersConfigurationRoundButtonPerRow(rowNumber) {

        let buttonNumberPerRow =
            variablesConfigurationRoundButtons.configurationRoundMaxButtonNumberPerRow;

        let roundNumberStartPerRow = buttonNumberPerRow * rowNumber + 1;
        let roundNumberEndPerRow = roundNumberStartPerRow + buttonNumberPerRow;

        let gridColumnStartNumber = 2;
        let gridColumnEndNumber = 3;

        for (let roundNumber = roundNumberStartPerRow; roundNumber < roundNumberEndPerRow; roundNumber++) {

            this.createContainerConfigurationRoundButton(
                rowNumber, roundNumber,
                gridColumnStartNumber, gridColumnEndNumber);

            gridColumnStartNumber += 3;
            gridColumnEndNumber += 3;
        }
    }

    createContainerConfigurationRoundButton(
        rowNumber, roundNumber, gridColumnStartNumber, gridColumnEndNumber) {

        this.createContainerRoundButtonPrimary(
            rowNumber, roundNumber,
            gridColumnStartNumber, gridColumnEndNumber);

        this.createButtonRound(roundNumber);
    }

    createContainerRoundButtonPrimary(
        rowNumber, roundNumber, gridColumnStartNumber, gridColumnEndNumber) {

        this.createContainerButtonRoundMain(
            rowNumber, roundNumber);

        this.setContainerButtonRoundMainStyleAsGrid(
            roundNumber, gridColumnStartNumber, gridColumnEndNumber);
    }

    createContainerButtonRoundMain(rowNumber, roundNumber) {
        createElementDiv(
            variablesConfigurationRoundButtons.containerConfigurationRoundRowMainPartsPrefixId
            + valueToString(rowNumber),
            variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
            + valueToString(roundNumber)
        );
    }

    setContainerButtonRoundMainStyleAsGrid(roundNumber, gridColumnStartNumber, gridColumnEndNumber) {
        setElementStyletAsGrid(
            variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
            + valueToString(roundNumber),
            2, gridColumnStartNumber,
            3, gridColumnEndNumber,
            "1fr", "1fr");
    }

    createButtonRound(roundNumber) {
        this.createButtonRoundMain(roundNumber);
        this.createIconComputerMouse(roundNumber);
        this.createButtonRoundText(roundNumber);
    }

    createButtonRoundMain(roundNumber) {

        let buttonId =
            variablesConfigurationRoundButtons.buttonRoundPrefixId + valueToString(roundNumber);

        createElementButton(
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
            variablesConfigurationRoundButtons.buttonRoundPrefixId
            + valueToString(roundNumber),
            variablesConfigurationRoundButtons.buttonRoundIconComputerMousePrefixId
            + valueToString(roundNumber),
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

    setConfigurationRoundButtonDefault() {
        this.addButtonRoundStyleCurrentNumber(
            variablesConfigurationRoundButtons.buttonRoundPrefixId
            + valueToString(variablesConfigurationRoundButtons.configurationRoundMaxButtonNumberPerRow)
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