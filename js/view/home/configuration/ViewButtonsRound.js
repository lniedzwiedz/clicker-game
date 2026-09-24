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
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonRound from "../../../common/variable/home/configuration/variablesButtonRound.js";
import {buttonRoundIconComputerMouse} from "../../../common/variable/home/configuration/variablesButtonRound.js";


export class ViewButtonsRound {

    createContainersConfigurationRoundButtons() {

        let buttonNumberPerRow = 5;

        for (let rowNumber = 0; rowNumber < 2; rowNumber++) {

            this.createContainerConfigurationRoundButtons(
                rowNumber,
                buttonNumberPerRow
            );
        }
    }

    createContainerConfigurationRoundButtons(rowNumber, buttonNumberPerRow) {

        let parentId =
            variablesButtonRound.containerConfigurationRoundRowMainPartsPrefixId
            + valueToString(rowNumber);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        let roundNumber = 0;
        roundNumber = buttonNumberPerRow * rowNumber + 1;

        for (let number = 0; number < buttonNumberPerRow; number++) {

            let childId =
                variablesButtonRound.containerConfigurationRoundButtonRoundPrefixId
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

            // let buttonId = variablesButtonRound.buttonRoundPrefixId + valueToString(buttonRoundNumber);

            // this.creatContainerConfigurationRoundButton(
            //     childId,
            //     buttonRoundNumber
            // );

            this.createButtonRound(
                childId,
                roundNumber
            );

            if (roundNumber === 5) {
                addElementClassNameById(
                    variablesButtonRound.buttonRoundPrefixId + valueToString(roundNumber),
                    variablesButtonRound.buttonRoundCurrentNumber
                );
            }

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
            roundNumber += 1;
        }
    }

    // // creatContainerConfigurationRoundButton(parentId, buttonId, roundNumber) {
    // creatContainerConfigurationRoundButton(parentId, roundNumber) {
    //
    //     // let iconId =
    //     //     variablesButtonRound.buttonRoundIconComputerMousePrefixId
    //     //     + valueToString(roundNumber);
    //     //
    //     // let pId =
    //     //     variablesButtonRound.buttonRoundTextId
    //     //     + valueToString(roundNumber);
    //
    //     // createElementButton(
    //     //     parentId,
    //     //     buttonId
    //     // );
    //     //
    //     // setElementAttributeValueById(
    //     //     buttonId,
    //     //     valueToString(roundNumber)
    //     // );
    //     //
    //     // addElementClassNames(
    //     //     buttonId,
    //     //     variablesButtonRound.configurationRoundStyleDisplayFlex,
    //     //     variablesButtonRound.buttonRoundStyle
    //     // );
    //
    //
    //     // this.createButtonRoundMain(parentId, buttonId, roundNumber);
    //
    //     // createElementI(
    //     //     buttonId,
    //     //     iconId,
    //     //     variablesButtonRound.buttonRoundIconComputerMouseStyleSolid,
    //     //     variablesButtonRound.buttonRoundIconComputerMouse
    //     // );
    //
    //     // this.createIconComputerMouse(buttonId, iconId);
    //
    //     // createElementP(
    //     //     buttonId,
    //     //     pId
    //     // );
    //     //
    //     // setElementTextById(
    //     //     pId,
    //     //     variablesButtonRound.buttonRoundTextSpace
    //     //     + valueToString(roundNumber)
    //     // );
    //
    //     // this.createButtonRoundText(buttonId, pId, roundNumber);
    //
    //     // let buttonId = variablesButtonRound.buttonRoundPrefixId + valueToString(roundNumber);
    //
    //     this.createButtonRound(parentId, roundNumber);
    // }

    createButtonRound(parentId, roundNumber) {

        // let buttonId = variablesButtonRound.buttonRoundPrefixId + valueToString(roundNumber);

        this.createButtonRoundMain(parentId, roundNumber);
        this.createIconComputerMouse(roundNumber);
        this.createButtonRoundText(roundNumber);
    }

    createButtonRoundMain(parentId, roundNumber) {

        let buttonId = variablesButtonRound.buttonRoundPrefixId + valueToString(roundNumber);

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
            variablesButtonRound.configurationRoundStyleDisplayFlex,
            variablesButtonRound.buttonRoundStyle
        );
    }

    createIconComputerMouse(roundNumber) {

        createElementI(
            variablesButtonRound.buttonRoundPrefixId + valueToString(roundNumber),
            variablesButtonRound.buttonRoundIconComputerMousePrefixId + valueToString(roundNumber),
            variablesButtonRound.buttonRoundIconComputerMouseStyleSolid,
            variablesButtonRound.buttonRoundIconComputerMouse
        );

    }

    createButtonRoundText(roundNumber) {

        let pId =
            variablesButtonRound.buttonRoundTextId + valueToString(roundNumber);

        createElementP(
            variablesButtonRound.buttonRoundPrefixId + valueToString(roundNumber),
            pId
        );

        setElementTextById(
            pId,
            variablesButtonRound.buttonRoundTextSpace
            + valueToString(roundNumber)
        );
    }

    getRoundNumberChosenNumber(buttonIdCurrent) {
        return getElementAttributeValueById(
            buttonIdCurrent
        );
    }

    setStyleButtonRoundNumberAtStart(buttonIdPrevious, currentButtonId) {

        removeElementClassNameById(
            buttonIdPrevious,
            variablesButtonRound.buttonRoundCurrentNumber
        );

        addElementClassNameById(
            currentButtonId,
            variablesButtonRound.buttonRoundCurrentNumber
        );
    }

    addButtonRoundStyleCurrentNumber(elementId) {

        addElementClassNameById(
            elementId,
            variablesButtonRound.buttonRoundCurrentNumber
        );
    }

    removeButtonRoundStyleCurrentNumber(elementId) {

        removeElementClassNameById(
            elementId,
            variablesButtonRound.buttonRoundCurrentNumber
        );
    }

    removeButtonRoundStyleChosenNumber(elementId) {

        removeElementClassNameById(
            elementId,
            variablesButtonRound.buttonRoundChosenNumber
        );
    }

    addButtonRoundStyleChosenNumber(elementId) {

        addElementClassNameById(
            elementId,
            variablesButtonRound.buttonRoundChosenNumber
        );
    }


}