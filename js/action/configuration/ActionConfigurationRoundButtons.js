import {
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesConfigurationButtonRound from "../../common/variable/game/configuration/round/variablesConfigurationRoundButtons.js";

export class ActionConfigurationRoundButtons {

    buttonIdPrevious = variablesConfigurationButtonRound.buttonRoundPrefixId + valueToString(5)
    buttonIdCurrent = variablesConfigurationButtonRound.buttonRoundPrefixId + valueToString(5);
    buttonIdChosen = this.buttonIdCurrent;

    setConfigurationRoundButtonIdCurrent(event) {
        this.buttonIdPrevious = this.buttonIdCurrent;
        this.buttonIdCurrent = event.currentTarget.id;
    }

    getRoundButtonIdCurrent() {
        return this.buttonIdCurrent;
    }

    getRoundButtonIdPrevious() {
        return this.buttonIdPrevious;
    }

    setButtonIdChosenFinaRoundNumberForGame() {
        this.buttonIdPrevious = this.buttonIdCurrent;
    }

    setRoundButtonIdChosen() {
        this.buttonIdChosen = this.buttonIdCurrent;
    }

    getRoundButtonIdChosen() {
        return this.buttonIdChosen;
    }
}