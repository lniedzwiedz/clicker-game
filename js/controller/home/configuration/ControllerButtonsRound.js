import {
    getElementById,
    valueToString
} from "../../../common/function/commonFunctions.js";

import * as variablesButtonRound from "../../../common/variable/home/configuration/variablesButtonRound.js";


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
        this.viewButtonsRound.createContainersConfigurationRoundButtons();
        this.setButtonsConfigurationRound();
    }

    setButtonsConfigurationRound() {

        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {

            const buttonId = variablesButtonRound.configurationRoundDisplayButtonRoundFlexPrefix + valueToString(clickNumber);
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

        this.viewButtonsRound.setStyleButtonRoundNumberAfterGameStart(buttonIdPrevious, currentButtonId, roundNumberFinal);
    }

    setConfigurationRoundNumberWhenGameStop() {
        const roundNumberFinal = this.actionButtonsRound.getButtonIdPMaxClicksNumberSetByUser();
        this.viewButtonsRound.setStyleButtonRoundNumberWhenGameStop(roundNumberFinal);
    }
}