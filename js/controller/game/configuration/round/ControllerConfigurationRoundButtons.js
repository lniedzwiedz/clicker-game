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

        let maxButtonNumber = variablesConfigurationRoundButton.configurationRoundMaxButtonNumber;
        // console.log("maxButtonNumber = " + maxButtonNumber);

        // for (let buttonNumber = 1; buttonNumber <= 10; buttonNumber++) {
        for (let buttonNumber = 1; buttonNumber <= maxButtonNumber; buttonNumber++) {

            const buttonId = variablesConfigurationRoundButton.buttonRoundPrefixId + valueToString(buttonNumber);
            const button = getElementById(buttonId);

            button.addEventListener("click", (event) => {
                this.setConfigurationClickNumberRoundButtons(event);
            });
        }
    }

    setConfigurationClickNumberRoundButtons(event) {

        const buttonIdPrevious = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        this.actionConfigurationRoundButtons.setConfigurationRoundButtonIdCurrent(event);

        const currentButtonId = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        this.viewConfigurationRoundButtons.setConfigurationButtonRoundStyleAtStart(buttonIdPrevious, currentButtonId);
    }

    getRoundNumber() {
        const currentButtonId = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        return this.viewConfigurationRoundButtons.getRoundButtonNumberChosen(currentButtonId);
    }

    setConfigurationRoundButtonsAtStart() {

        const roundNumberFinal = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
        this.actionConfigurationRoundButtons.setRoundButtonIdChosen();

        const currentButtonId = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        this.setConfigurationRoundButtonsAfterClickButtonStart(currentButtonId, roundNumberFinal);
    }

    setConfigurationRoundButtonsAfterClickButtonStart(currentButtonId, roundNumberFinal) {

        this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(roundNumberFinal);
        this.viewConfigurationRoundButtons.removeButtonRoundStyleCurrentNumber(roundNumberFinal);

        this.viewConfigurationRoundButtons.removeButtonRoundStyleCurrentNumber(currentButtonId);
        this.viewConfigurationRoundButtons.addButtonRoundStyleChosenNumber(currentButtonId);
    }

    setConfigurationRoundButtonsAtStop() {

        const roundNumberFinalId = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
        const currentButtonId = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();

        this.setConfigurationRoundButtonsAfterClickButtonStop(currentButtonId, roundNumberFinalId);
    }

    setConfigurationRoundButtonsAfterClickButtonStop(currentButtonId, roundNumberFinalId) {

        // // round number - last setup
        // this.viewButtonsRound.removeButtonRoundStyleCurrentNumber(currentButtonId);
        // this.viewButtonsRound.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
        // this.viewButtonsRound.addButtonRoundStyleCurrentNumber(roundNumberFinalId);

        // round number - new round number mark
        this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
        this.viewConfigurationRoundButtons.addButtonRoundStyleCurrentNumber(currentButtonId);
    }

    setConfigurationRoundButtonsForGameOver() {

        const buttonIdChosen = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
        const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();

        // round number - new round number mark
        this.setRoundButtonsAfterGameOver(buttonIdCurrent, buttonIdChosen);
    }

    setRoundButtonsAfterGameOver(buttonIdCurrent, buttonIdChosen) {
        this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(buttonIdChosen);
        this.viewConfigurationRoundButtons.addButtonRoundStyleCurrentNumber(buttonIdCurrent);
    }
}