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

    setConfigurationRoundButtonsAtStart() {

        const roundNumberFinal = this.actionButtonsRound.getButtonIdPMaxClicksNumberSetByUser();
        this.actionButtonsRound.setButtonIdPMaxClicksNumberSetByUser();

        // const buttonIdPrevious = this.actionButtonsRound.getButtonIdPrevious();
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();

        // this.viewButtonsRound.setStyleButtonRoundNumberAfterClickButtonStart(buttonIdPrevious, currentButtonId, roundNumberFinal);
        this.setStyleButtonRoundNumberAfterClickButtonStart(currentButtonId, roundNumberFinal);
    }

    setConfigurationRoundButtonsAtStop() {
        const roundNumberFinalId = this.actionButtonsRound.getButtonIdPMaxClicksNumberSetByUser();
        // this.viewButtonsRound.setStyleButtonRoundNumberAfterClickButtonStop(roundNumberFinal);

        // const buttonIdPrevious = this.actionButtonsRound.getButtonIdPrevious();
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();

        console.log(" 1 roundNumberFinal = " + roundNumberFinalId);

        this.setStyleButtonRoundNumberAfterClickButtonStop(currentButtonId, roundNumberFinalId);
    }

    setStyleButtonRoundNumberAfterClickButtonStart(currentButtonId, roundNumberFinal) {

        this.viewButtonsRound.removeButtonRoundStyleChosenNumber(roundNumberFinal);
        this.viewButtonsRound.removeButtonRoundStyleCurrentNumber(roundNumberFinal);

        this.viewButtonsRound.removeButtonRoundStyleCurrentNumber(currentButtonId);

        this.viewButtonsRound.addButtonRoundStyleChosenNumber(currentButtonId);
    }

    setStyleButtonRoundNumberAfterClickButtonStop(currentButtonId, roundNumberFinalId) {

        // // round number - last setup
        // this.viewButtonsRound.removeButtonRoundStyleCurrentNumber(currentButtonId);
        // this.viewButtonsRound.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
        // this.viewButtonsRound.addButtonRoundStyleCurrentNumber(roundNumberFinalId);

        // round number - new round number mark
        this.viewButtonsRound.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
        this.viewButtonsRound.addButtonRoundStyleCurrentNumber(currentButtonId);
    }
}