import {
    createElementButton,
    createElementDiv,
    createElementI,
    createElementP,
    getElementAttributeValueById,
    removeElementClassNameById,
    setElementAttributeValueById,
    setElementClassNameById,
    setElementClassNames,
    setElementStyletAsGrid,
    setElementTextById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesButtonRound from "../../common/variable/control/variablesButtonRound.js";


export class ViewButtonsRound {

    // createContainerConfiguration() {
    //     this.createContainerConfigurationMain();
    //     this.createContainerConfigurationDecorationIcon();
    //     this.createContainerConfigurationRound();
    // }

    // createContainerConfigurationMain() {
    //
    //     createElementDiv(
    //         variablesConfigurationMain.containerMenuMainParts,
    //         variablesConfigurationMain.containerConfigurationMain
    //     );
    //
    //     createElementDiv(
    //         variablesConfigurationMain.containerConfigurationMain,
    //         variablesConfigurationMain.containerConfigurationMainParts
    //     );
    // }

    // createContainerConfigurationRoundMain() {
    //
    //     createElementDivAnaDivChild(
    //         variablesConfigurationMain.containerConfigurationMainParts,
    //         variablesButtonRound.containerConfigurationRoundMain,
    //         variablesButtonRound.containerConfigurationRoundMainParts
    //     );
    // }

    // createContainerConfigurationDecorationIcon() {
    //
    //     createElementDivAnaDivChild(
    //         variablesConfigurationIcon.containerConfigurationMainParts,
    //         variablesConfigurationIcon.containerConfigurationDecorationIconMain,
    //         variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex
    //     );
    //
    //     setElementClassNameById(
    //         variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex,
    //         variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex
    //     );
    //
    //     createElementI(
    //         variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex,
    //         variablesConfigurationIcon.configurationDecorationIcon,
    //         variablesConfigurationIcon.containerConfigurationDecorationIconStyleSolid,
    //         variablesConfigurationIcon.containerConfigurationDecorationIconScrewdriverWrench
    //     );
    // }

    // createContainerConfigurationRound() {
    //     this.createContainerConfigurationRoundMain();
    //     this.createContainersConfigurationRoundButtons();
    // }

    // createContainerConfigurationRoundRowMainParts(rowNumber, buttonNumberPerRow) {
    //
    //     let childId =
    //         variablesButtonRound.containerConfigurationRoundRowMainPrefix
    //         + valueToString(rowNumber);
    //
    //     let grandchildId =
    //         variablesButtonRound.containerConfigurationRoundRowMainPartsPrefix
    //         + valueToString(rowNumber);
    //
    //     createElementDiv(
    //         childId,
    //         grandchildId
    //     );
    //
    //     let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
    //     let gridTemplateColumns = " repeat(" + buttonNumberPerRow + ", 1fr 38fr 1fr)";
    //
    //     setElementStyletAsGrid(
    //         grandchildId,
    //         1,
    //         1,
    //         2,
    //         2,
    //         gridTemplateRows,
    //         gridTemplateColumns
    //     );
    // }

    // createContainerConfigurationRoundRowMain(rowNumber) {
    //
    //     let parentId =
    //         variablesButtonRound.containerConfigurationRoundMainParts;
    //
    //     let childId =
    //         variablesButtonRound.containerConfigurationRoundRowMainPrefix
    //         + valueToString(rowNumber);
    //
    //     createElementDiv(
    //         parentId,
    //         childId
    //     );
    //
    //     let gridRowStartNumber = 1 + rowNumber;
    //     let gridColumnStartNumber = 1;
    //     let gridRowEndNumber = 2;
    //     let gridColumnEndNumber = 2 + rowNumber;
    //
    //     let gridTemplateRows = "1fr";
    //     let gridTemplateColumns = "1fr";
    //
    //     setElementStyletAsGrid(
    //         childId,
    //         gridRowStartNumber,
    //         gridColumnStartNumber,
    //         gridRowEndNumber,
    //         gridColumnEndNumber,
    //         gridTemplateRows,
    //         gridTemplateColumns
    //     );
    // }

    createContainersConfigurationRoundButtons() {

        let buttonNumberPerRow = 5;

        for (let rowNumber = 0; rowNumber < 2; rowNumber++) {

            // this.createContainerConfigurationRoundRowMain(
            //     rowNumber
            // );
            //
            // this.createContainerConfigurationRoundRowMainParts(
            //     rowNumber,
            //     buttonNumberPerRow
            // );

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
                setElementClassNameById(
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

        setElementClassNameById(
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

        setElementClassNameById(
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