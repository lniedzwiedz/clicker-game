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

        // let parentId =
        //     variablesConfigurationRoundButtons.containerConfigurationRoundRowMainPartsPrefixId
        //     + valueToString(rowNumber);

        // let gridRowStartNumberChild = 2;
        // let gridColumnStartNumberChild = 2;
        // let gridRowEndNumberChild = 3;
        // let gridColumnEndNumberChild = 3;

        let gridColumnStartNumber = 2;
        let gridColumnEndNumber = 3;

        // let roundNumber = 0;
        // roundNumber = buttonNumberPerRow * rowNumber + 1;

        // let roundNumber = 0;
        let roundNumberStartPerRow = buttonNumberPerRow * rowNumber + 1;
        let roundNumberEndPerRow = roundNumberStartPerRow + buttonNumberPerRow;

        // for (let number = 0; number < buttonNumberPerRow; number++) {
        // for (let buttonNumber = 0; buttonNumber < buttonNumberPerRow; buttonNumber++) {
        for (let roundNumber = roundNumberStartPerRow; roundNumber < roundNumberEndPerRow; roundNumber++) {

            // // let childId =
            // //     variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
            // //     + valueToString(roundNumber);
            //
            // // createElementDiv(parentId, childId);
            // // this.createContainerButtonRoundMain(rowNumber, roundNumberStartPerRow);
            // this.createContainerButtonRoundMain(rowNumber, roundNumber);
            //
            // // let gridTemplateRowsChild = "1fr";
            // // let gridTemplateColumnsChild = "1fr";
            // //
            // // setElementStyletAsGrid(
            // //     childId,
            // //     gridRowStartNumberChild,
            // //     gridColumnStartNumberChild,
            // //     gridRowEndNumberChild,
            // //     gridColumnEndNumberChild,
            // //     gridTemplateRowsChild,
            // //     gridTemplateColumnsChild);
            //
            // // this.setContainerButtonRoundMainStyleAsGrid(
            // //     roundNumberStartPerRow, gridColumnStartNumber, gridColumnEndNumber
            // // );
            //
            // this.setContainerButtonRoundMainStyleAsGrid(
            //     // roundNumberStartPerRow, gridColumnStartNumber, gridColumnEndNumber
            //     roundNumber, gridColumnStartNumber, gridColumnEndNumber
            // );

            this.createContainerConfigurationRoundButton(
                rowNumber, roundNumber,
                gridColumnStartNumber, gridColumnEndNumber
            );


            // this.createButtonRound(roundNumberStartPerRow);
            // this.createButtonRoundPrimary(roundNumber);

            // // if (roundNumberStartPerRow === buttonNumberPerRow) {
            // if (roundNumber === buttonNumberPerRow) {
            //     // addElementClassNameById(
            //     //     variablesConfigurationRoundButtons.buttonRoundPrefixId + valueToString(roundNumber),
            //     //     variablesConfigurationRoundButtons.buttonRoundCurrentNumber
            //     // );
            //     // this.setConfigurationRoundButtonDefault(roundNumberStartPerRow);
            //     this.setConfigurationRoundButtonDefault(roundNumber);
            // }

            gridColumnStartNumber += 3;
            gridColumnEndNumber += 3;
            // roundNumberStartPerRow += 1;
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

        // let parentId =
        //     variablesConfigurationRoundButtons.containerConfigurationRoundRowMainPartsPrefixId
        //     + valueToString(rowNumber);
        //
        // let childId =
        //     variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
        //     + valueToString(roundNumber);

        // createElementDiv(parentId, childId);

        createElementDiv(
            variablesConfigurationRoundButtons.containerConfigurationRoundRowMainPartsPrefixId
            + valueToString(rowNumber),
            variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
            + valueToString(roundNumber)
        );
    }

    setContainerButtonRoundMainStyleAsGrid(roundNumber, gridColumnStartNumber, gridColumnEndNumber) {

        // let gridRowStartNumber = 2;
        // let gridRowEndNumber = 3;
        //
        // let gridTemplateRows = "1fr";
        // let gridTemplateColumns = "1fr";

        // setElementStyletAsGrid(
        //     // childId,
        //     variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
        //     + valueToString(roundNumber),
        //     gridRowStartNumber,
        //     gridColumnStartNumber,
        //     gridRowEndNumber,
        //     gridColumnEndNumber,
        //     gridTemplateRows,
        //     gridTemplateColumns);

        setElementStyletAsGrid(
            // childId,
            variablesConfigurationRoundButtons.containerConfigurationRoundButtonRoundPrefixId
            + valueToString(roundNumber),
            2,
            gridColumnStartNumber,
            3,
            gridColumnEndNumber,
            "1fr",
            "1fr");
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
        addElementClassNameById(
            variablesConfigurationRoundButtons.buttonRoundPrefixId
            + valueToString(variablesConfigurationRoundButtons.configurationRoundMaxButtonNumberPerRow),
            variablesConfigurationRoundButtons.buttonRoundCurrentNumber
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