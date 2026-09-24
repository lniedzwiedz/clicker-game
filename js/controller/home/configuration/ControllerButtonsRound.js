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

        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();
        this.setStyleButtonRoundNumberAfterClickButtonStart(currentButtonId, roundNumberFinal);
    }

    setStyleButtonRoundNumberAfterClickButtonStart(currentButtonId, roundNumberFinal) {

        this.viewButtonsRound.removeButtonRoundStyleChosenNumber(roundNumberFinal);
        this.viewButtonsRound.removeButtonRoundStyleCurrentNumber(roundNumberFinal);

        this.viewButtonsRound.removeButtonRoundStyleCurrentNumber(currentButtonId);
        this.viewButtonsRound.addButtonRoundStyleChosenNumber(currentButtonId);
    }

    setConfigurationRoundButtonsAtStop() {

        const roundNumberFinalId = this.actionButtonsRound.getButtonIdPMaxClicksNumberSetByUser();
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();

        this.setStyleButtonRoundNumberAfterClickButtonStop(currentButtonId, roundNumberFinalId);
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


    setConfigurationButtonsRoundForGameOver() {

        const roundNumberFinalId = this.actionButtonsRound.getButtonIdPMaxClicksNumberSetByUser();
        const currentButtonId = this.actionButtonsRound.getButtonIdCurrent();

        // round number - new round number mark
       this.setStyleButtonsRoundForGameOver(currentButtonId, roundNumberFinalId);

    }

    setStyleButtonsRoundForGameOver(currentButtonId, roundNumberFinalId){
        this.viewButtonsRound.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
        this.viewButtonsRound.addButtonRoundStyleCurrentNumber(currentButtonId);
    }
}