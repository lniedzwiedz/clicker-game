import {
    getElementById,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesButtonRound from "../../common/variable/control/variablesButtonRound.js";


export class ControllerButtonsRound {

    constructor(viewButtonsRound, actionButtonsRound) {
        this.viewButtonsRound = viewButtonsRound;
        this.actionButtonsRound = actionButtonsRound;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    createConfigurationRound() {
        this.viewButtonsRound.createContainerRoundNumberConfiguration();
        this.setButtonsConfigurationRound();
    }

    setButtonsConfigurationRound() {

        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {

            const buttonId = variablesButtonRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber);
            const button = getElementById(buttonId);

            button.addEventListener("click", (event) => {
                this.setConfigurationClickNumberRoundButtons(event);
            });
        }
    }

    setConfigurationClickNumberRoundButtons(event) {
        const buttonIdPrevious = this.actionButtonsRound.getButtonIdCurrent();
        this.actionButtonsRound.setConfigurationButtonIdClickedCurrent(event);
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();

        // removeElementClassNameById(buttonIdPrevious, variablesButtonRound.buttonRoundNumberMarkCurrent);
        // setElementClassNameById(currentButtonId, variablesButtonRound.buttonRoundNumberMarkCurrent);

        this.viewButtonsRound.setStyleButtonRoundNumberAtStart(buttonIdPrevious, currentButtonId);

    }

    getRoundNumber() {
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();
        return this.viewButtonsRound.getRoundNumberSetupByUser(currentButtonId);
    }

    setConfigurationButtonsFinalNumberForPlay() {

        const roundNumberFinal = this.actionButtonsRound.getButtonIdPMaxClicksNumberSetByUser();
        this.actionButtonsRound.setButtonIdPMaxClicksNumberSetByUser();
        const buttonIdPrevious = this.actionButtonsRound.getButtonIdPrevious();
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();

        // removeElementClassNameById(buttonIdPrevious, variablesButtonRound.buttonRoundNumberMarkCurrent);
        // removeElementClassNameById(roundNumberFinal, variablesButtonRound.menuGameConfigurationButtonChosenNumber);
        // setElementClassNameById(currentButtonId, variablesButtonRound.menuGameConfigurationButtonChosenNumber);

        this.viewButtonsRound.setStyleButtonRoundNumberAfterGameStart(buttonIdPrevious, currentButtonId, roundNumberFinal);
    }

    setConfigurationRoundNumberWhenGameStop() {
        const roundNumberFinal = this.actionButtonsRound.getButtonIdPMaxClicksNumberSetByUser();
        // removeElementClassNameById(roundNumberFinal, variablesButtonRound.menuGameConfigurationButtonChosenNumber);
        this.viewButtonsRound.setStyleButtonRoundNumberWhenGameStop(roundNumberFinal);
    }
}