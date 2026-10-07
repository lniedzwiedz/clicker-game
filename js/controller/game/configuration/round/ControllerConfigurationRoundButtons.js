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
        // this.onStart = null;
    }

    // setOnStart(onStart) {
    //     this.onStart = onStart;
    // }

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

        this.actionConfigurationRoundButtons.setConfigurationRoundButtons(event);

        const buttonIdPrevious = this.actionConfigurationRoundButtons.getRoundButtonIdPrevious();
        const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();

        this.viewConfigurationRoundButtons
            .setConfigurationRoundButtonsAfterClickRoundButton(buttonIdPrevious, buttonIdCurrent);
    }

    getRoundButtonNumberValue() {
        const currentButtonId = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        return this.viewConfigurationRoundButtons.getRoundButtonChosenNumberValue(currentButtonId);
    }

    setConfigurationRoundButtonsAtStart() {

        const buttonIdChosen = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
        this.actionConfigurationRoundButtons.setRoundButtonIdChosen();

        const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();
        this.viewConfigurationRoundButtons
            .setConfigurationRoundButtonsAfterClickButtonStart(buttonIdCurrent, buttonIdChosen);
    }

    setConfigurationRoundButtonsAfterGameEnd() {
        const buttonIdChosen = this.actionConfigurationRoundButtons.getRoundButtonIdChosen();
        const buttonIdCurrent = this.actionConfigurationRoundButtons.getRoundButtonIdCurrent();

        this.viewConfigurationRoundButtons
            .setConfigurationRoundButtonsAfterGameEnd(buttonIdCurrent, buttonIdChosen);
    }
}