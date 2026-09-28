import {
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesConfigurationButtonRound
    from "../../common/variable/game/configuration/round/variablesConfigurationRoundButtons.js";


export class ActionConfigurationRoundButtons {

    buttonIdPrevious = variablesConfigurationButtonRound.buttonRoundPrefixId + valueToString(5)
    buttonIdCurrent = variablesConfigurationButtonRound.buttonRoundPrefixId + valueToString(5);
    buttonIdChosen = this.buttonIdCurrent;

    setConfigurationRoundButtons(event) {
        // this.buttonIdPrevious = this.buttonIdCurrent;
        // this.buttonIdCurrent = event.currentTarget.id;
        this.setRoundButtonIdPrevious();
        this.setRoundButtonIdCurrent(event);
    }

    setRoundButtonIdPrevious() {
        this.buttonIdPrevious = this.buttonIdCurrent;
    }

    getRoundButtonIdPrevious() {
        return this.buttonIdPrevious;
    }

    setRoundButtonIdCurrent(event) {
        this.buttonIdCurrent = event.currentTarget.id;
    }

    getRoundButtonIdCurrent() {
        return this.buttonIdCurrent;
    }

    setRoundButtonIdChosen() {
        this.buttonIdChosen = this.buttonIdCurrent;
    }

    getRoundButtonIdChosen() {
        return this.buttonIdChosen;
    }
}