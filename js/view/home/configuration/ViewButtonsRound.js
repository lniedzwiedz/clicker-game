import {
    createElementButton,
    createElementDiv,
    createElementI,
    createElementP,
    getElementAttributeValueById,
    removeElementClassNameById,
    setElementAttributeValueById,
    addElementClassNameById,
    setElementClassNames,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonRound from "../../../common/variable/home/configuration/variablesButtonRound.js";


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
            variablesButtonRound.containerConfigurationRoundRowMainPartsPrefix
            + valueToString(rowNumber);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        let buttonRoundNumber = 0;
        buttonRoundNumber = buttonNumberPerRow * rowNumber + 1;

        for (let number = 0; number < buttonNumberPerRow; number++) {

            let childId =
                variablesButtonRound.containerConfigurationRoundButtonRoundMainPrefix
                + valueToString(buttonRoundNumber);

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

            let buttonId = variablesButtonRound.configurationRoundDisplayButtonRoundFlexPrefix + valueToString(buttonRoundNumber);

            this.creatContainerConfigurationRoundButton(
                childId,
                buttonId,
                buttonRoundNumber
            );

            if (buttonRoundNumber === 5) {
                addElementClassNameById(
                    buttonId,
                    variablesButtonRound.configurationRoundButtonRoundCurrentNumber
                );
            }

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
            buttonRoundNumber += 1;
        }
    }

    creatContainerConfigurationRoundButton(parentId, buttonId, buttonRoundNumber) {

        let iconId =
            variablesButtonRound.configurationRoundButtonIconPrefix
            + valueToString(buttonRoundNumber);

        let pId =
            variablesButtonRound.configurationRoundButtonRoundTextPrefix
            + valueToString(buttonRoundNumber);

        createElementButton(
            parentId,
            buttonId
        );

        setElementAttributeValueById(
            buttonId,
            valueToString(buttonRoundNumber)
        );

        setElementClassNames(
            buttonId,
            variablesButtonRound.configurationRoundDisplayButtonRoundFlex,
            variablesButtonRound.configurationRoundButtonRoundStyle
        );

        createElementI(
            buttonId,
            iconId,
            variablesButtonRound.configurationRoundButtonRoundIconStyleSolid,
            variablesButtonRound.configurationRoundButtonRoundIconComputerMouse
        );

        createElementP(
            buttonId,
            pId
        );

        setElementTextById(
            pId,
            variablesButtonRound.configurationRoundButtonRoundTextSpace
            + valueToString(buttonRoundNumber)
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
            variablesButtonRound.configurationRoundButtonRoundCurrentNumber
        );

        addElementClassNameById(
            currentButtonId,
            variablesButtonRound.configurationRoundButtonRoundCurrentNumber
        );
    }

    setStyleButtonRoundNumberAfterGameStart(buttonIdPrevious, currentButtonId, roundNumberFinal) {

        removeElementClassNameById(
            buttonIdPrevious,
            variablesButtonRound.configurationRoundButtonRoundCurrentNumber)
        ;

        removeElementClassNameById(
            roundNumberFinal,
            variablesButtonRound.configurationRoundButtonRoundChosenNumber
        );

        addElementClassNameById(
            currentButtonId,
            variablesButtonRound.configurationRoundButtonRoundChosenNumber
        );
    }

    setStyleButtonRoundNumberWhenGameStop(roundNumberFinal) {

        removeElementClassNameById(
            roundNumberFinal,
            variablesButtonRound.configurationRoundButtonRoundChosenNumber
        );
    }
}