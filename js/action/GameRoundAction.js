import {
    getElementAttributeValueById,
    getElementById,
    removeElementClassNameById,
    setElementClassNameById,
    valueToString
} from "../common/function/commonFunctions.js";

import * as variableGameConfigurationRound from "../common/variable/clickerGame/variableGameConfigurationRound.js";

export class GameRoundAction {

    buttonIdChosenFinalForGame = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(5)
    buttonIdClickedCurrent = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(5);

    setConfigurationClickNumberButtonChanges(event) {
        removeElementClassNameById(this.buttonIdClickedCurrent, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
        this.buttonIdClickedCurrent = event.currentTarget.id;
        setElementClassNameById(this.buttonIdClickedCurrent, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
    }

    getMaxClicksNumberSetByUser() {
        return getElementAttributeValueById(this.buttonIdChosenFinalForGame);
    }
}