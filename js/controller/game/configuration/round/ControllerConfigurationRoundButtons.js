import {
    getElementById,
    valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesConfigurationRoundButton
    from "../../../../common/variable/game/configuration/round/variablesConfigurationRoundButtons.js";


export class ControllerConfigurationRoundButtons {

    constructor(viewConfigurationRoundButtons, actionConfigurationRoundButtons) {
        this.viewConfigurationRoundButtons = viewConfigurationRoundButtons;
        this.actionConfigurationRoundButtons = actionConfigurationRoundButtons;
        this.onStart = null;
    }

    setOnStart(onStart) {
        this.onStart = onStart;
    }

    configureRoundButtons() {
        this.createConfigurationRoundButtons();
        this.setConfigurationRoundButtonsAtBeginning();
    }

    createConfigurationRoundButtons() {
        this.viewConfigurationRoundButtons.createContainersConfigurationRoundButton();
    }

    setConfigurationRoundButtonsAtBeginning() {

        let maxButtonNumber = variablesConfigurationRoundButton.configurationRoundMaxButtonNumber;

        for (let buttonNumber = 1; buttonNumber <= maxButtonNumber; buttonNumber++) {

            const buttonId = variablesConfigurationRoundButton.buttonRoundPrefixId + valueToString(buttonNumber);
            const button = getElementById(buttonId);

            button.addEventListener("click", (event) => {
                this.handleClickRoundButton(event);
            });
        }
    }

    handleClickRoundButton(event) {

        // const buttonIdPrevious = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        // this.actionConfigurationRoundButtons.setConfigurationRoundButtons(event);
        //
        // const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        // this.viewConfigurationRoundButtons
        //     .setConfigurationRoundButtonsAfterClickButtonStart(buttonIdPrevious, buttonIdCurrent);


        this.actionConfigurationRoundButtons.setConfigurationRoundButtons(event);


        const buttonIdPrevious = this.actionConfigurationRoundButtons.getRoundButtonIdPrevious();
        const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        // console.log("current = " + buttonIdCurrent);
        //

        // console.log("previous = " + buttonIdPrevious);
        // console.log("");

        // const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        this.viewConfigurationRoundButtons
            .setConfigurationRoundButtonsAfterClickRoundButton(buttonIdPrevious, buttonIdCurrent);
    }

    getRoundNumber() {
        const currentButtonId = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        return this.viewConfigurationRoundButtons.getRoundButtonNumberChosen(currentButtonId);
    }

    setConfigurationRoundButtonsAtStart() {

        const buttonIdChosen = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
        this.actionConfigurationRoundButtons.setRoundButtonIdChosen();

        const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        this.viewConfigurationRoundButtons
            .setConfigurationRoundButtonsAfterClickButtonStart(buttonIdCurrent, buttonIdChosen);
    }

    // setConfigurationRoundButtonsAfterClickButtonStart(buttonIdCurrent, buttonIdChosen) {
    //
    //     this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(buttonIdChosen);
    //     this.viewConfigurationRoundButtons.removeButtonRoundStyleCurrentNumber(buttonIdChosen);
    //
    //     this.viewConfigurationRoundButtons.removeButtonRoundStyleCurrentNumber(buttonIdCurrent);
    //     this.viewConfigurationRoundButtons.addButtonRoundStyleChosenNumber(buttonIdCurrent);
    // }

    setConfigurationRoundButtonsAfterGameEnd() {
        const buttonIdChosen = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
        const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        //
        // this.viewConfigurationRoundButtons
        //     .setConfigurationRoundButtonsAfterClickButtonStop(buttonIdCurrent, buttonIdChosen);

        this.viewConfigurationRoundButtons
            .setConfigurationRoundButtonsAfterGameEnd(buttonIdCurrent, buttonIdChosen);
    }

    // setConfigurationRoundButtonsAtStop() {
    //
    //     const buttonIdChosen = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
    //     const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
    //     //
    //     // this.viewConfigurationRoundButtons
    //     //     .setConfigurationRoundButtonsAfterClickButtonStop(buttonIdCurrent, buttonIdChosen);
    //
    //     this.viewConfigurationRoundButtons
    //         .setConfigurationRoundButtonsAfterGameEnd(buttonIdCurrent, buttonIdChosen);
    // }

    // setConfigurationRoundButtonsAfterClickButtonStop(currentButtonId, buttonIdChosen) {
    //
    //     // // round number - last setup
    //     // this.viewButtonsRound.removeButtonRoundStyleCurrentNumber(currentButtonId);
    //     // this.viewButtonsRound.removeButtonRoundStyleChosenNumber(roundNumberFinalId);
    //     // this.viewButtonsRound.addButtonRoundStyleCurrentNumber(roundNumberFinalId);
    //
    //     // round number - new round number mark
    //     this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(buttonIdChosen);
    //     this.viewConfigurationRoundButtons.addButtonRoundStyleCurrentNumber(currentButtonId);
    // }

    // setConfigurationRoundButtonsForGameOver() {
    //
    //     const buttonIdChosen = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
    //     const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
    //
    //     // round number - new round number mark
    //     // this.viewConfigurationRoundButtons
    //     //     .setRoundButtonsAfterGameOver(buttonIdCurrent, buttonIdChosen);
    //
    //     this.viewConfigurationRoundButtons
    //         .setConfigurationRoundButtonsAfterGameEnd(buttonIdCurrent, buttonIdChosen);
    // }

    // setRoundButtonsAfterGameOver(buttonIdCurrent, buttonIdChosen) {
    //     this.viewConfigurationRoundButtons.removeButtonRoundStyleChosenNumber(buttonIdChosen);
    //     this.viewConfigurationRoundButtons.addButtonRoundStyleCurrentNumber(buttonIdCurrent);
    // }
}