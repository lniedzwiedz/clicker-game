import {
    getElementById,
    valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesConfigurationRoundButton from "../../../../common/variable/game/configuration/round/variablesConfigurationRoundButtons.js";


export class ControllerConfigurationRoundButtons {

    constructor(viewConfigurationRoundButtons, actionConfigurationRoundButtons) {
        this.viewConfigurationRoundButtons = viewConfigurationRoundButtons;
        this.actionConfigurationRoundButtons = actionConfigurationRoundButtons;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    createConfigurationRoundButtons() {
        this.createContainersConfigurationRoundButtons();
        this.setButtonsConfigurationRound();
    }

    createContainersConfigurationRoundButtons(){
        this.viewConfigurationRoundButtons.createContainersConfigurationRoundButtons();
    }

    setButtonsConfigurationRound() {


        // create variables = 10
        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {

            const buttonId = variablesConfigurationRoundButton.buttonRoundPrefixId + valueToString(clickNumber);
            const button = getElementById(buttonId);

            button.addEventListener("click", (event) => {
                this.setConfigurationClickNumberRoundButtons(event);
            });
        }
    }

    setConfigurationClickNumberRoundButtons(event) {

        const buttonIdPrevious = this.actionConfigurationRoundButtons.getButtonIdCurrent();
        this.actionConfigurationRoundButtons.setConfigurationButtonIdClickedCurrent(event);

        const currentButtonId = this.actionConfigurationRoundButtons.getButtonIdCurrent();
        this.viewConfigurationRoundButtons.setStyleButtonRoundNumberAtStart(buttonIdPrevious, currentButtonId);
    }

    getRoundNumber() {
        const currentButtonId = this.actionConfigurationRoundButtons.getButtonIdCurrent();
        return this.viewConfigurationRoundButtons.getRoundNumberChosenNumber(currentButtonId);
    }

    setConfigurationRoundButtonsAtStart() {

        const roundNumberFinal = this.actionConfigurationRoundButtons.getButtonIdPMaxClicksNumberSetByUser();
        this.actionConfigurationRoundButtons.setButtonIdPMaxClicksNumberSetByUser();

        const currentButtonId = this.actionConfigurationRoundButtons.getButtonIdCurrent();
        this.setStyleButtonRoundNumberAfterClickButtonStart(currentButtonId, roundNumberFinal);
    }

    setStyleButtonRoundNumberAfterClickButtonStart(currentButtonId, roundNumberFinal) {

        this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(roundNumberFinal);
        this.viewConfigurationRoundButtons.removeButtonRoundStyleCurrentNumber(roundNumberFinal);

        this.viewConfigurationRoundButtons.removeButtonRoundStyleCurrentNumber(currentButtonId);
        this.viewConfigurationRoundButtons.addButtonRoundStyleChosenNumber(currentButtonId);
    }

    setConfigurationRoundButtonsAtStop() {

        const roundNumberFinalId = this.actionConfigurationRoundButtons.getButtonIdPMaxClicksNumberSetByUser();
        const currentButtonId = this.actionConfigurationRoundButtons.getButtonIdCurrent();

        this.setStyleButtonRoundNumberAfterClickButtonStop(currentButtonId, roundNumberFinalId);
    }

    setStyleButtonRoundNumberAfterClickButtonStop(currentButtonId, roundNumberFinalId) {

        // // round number - last setup
        // this.viewButtonsRound.removeButtonRoundStyleCurrentNumber(currentButtonId);
        // this.viewButtonsRound.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
        // this.viewButtonsRound.addButtonRoundStyleCurrentNumber(roundNumberFinalId);

        // round number - new round number mark
        this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
        this.viewConfigurationRoundButtons.addButtonRoundStyleCurrentNumber(currentButtonId);
    }

    setConfigurationButtonsRoundForGameOver() {

        const roundNumberFinalId = this.actionConfigurationRoundButtons.getButtonIdPMaxClicksNumberSetByUser();
        const currentButtonId = this.actionConfigurationRoundButtons.getButtonIdCurrent();

        // round number - new round number mark
        this.setStyleButtonsRoundForGameOver(currentButtonId, roundNumberFinalId);
    }

    setStyleButtonsRoundForGameOver(currentButtonId, roundNumberFinalId) {
        this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
        this.viewConfigurationRoundButtons.addButtonRoundStyleCurrentNumber(currentButtonId);
    }
}