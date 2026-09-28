import {
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesConfigurationButtonRound from "../../common/variable/game/configuration/round/variablesConfigurationRoundButtons.js";

export class ActionConfigurationRoundButtons {

    buttonIdPrevious = variablesConfigurationButtonRound.buttonRoundPrefixId + valueToString(5)
    buttonIdCurrent = variablesConfigurationButtonRound.buttonRoundPrefixId + valueToString(5);
    buttonIdMaxClicksNumberSetByUser = this.buttonIdCurrent;

    setConfigurationButtonIdClickedCurrent(event) {
        this.buttonIdPrevious = this.buttonIdCurrent;
        this.buttonIdCurrent = event.currentTarget.id;
    }

    getButtonIdCurrent() {
        return this.buttonIdCurrent;
    }

    getButtonIdPrevious() {
        return this.buttonIdPrevious;
    }

    setButtonIdChosenFinaRoundNumberForGame() {
        this.buttonIdPrevious = this.buttonIdCurrent;
    }

    setButtonIdPMaxClicksNumberSetByUser() {
        this.buttonIdMaxClicksNumberSetByUser = this.buttonIdCurrent;
    }

    getButtonIdPMaxClicksNumberSetByUser() {
        return this.buttonIdMaxClicksNumberSetByUser;
    }
}