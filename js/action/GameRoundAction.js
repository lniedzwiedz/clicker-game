import {
    removeElementClassNameById, setElementClassNameById, valueToString
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
        return this.buttonIdClickedCurrent;
    }

    setConfigurationNumberButtonChosen(event) {

        removeElementClassNameById(this.buttonIdChosenFinalForGame, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
        removeElementClassNameById(this.buttonIdClickedCurrent, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
        setElementClassNameById(this.buttonIdClickedCurrent, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);

        this.buttonIdChosenFinalForGame = this.buttonIdClickedCurrent;
        this.buttonIdClickedCurrent = event.currentTarget.id;
    }

    removeConfigurationButtonChosenNumber(maxClicksNumberSetByUser) {
        for (let clickNumber = 1; clickNumber <= 10; clickNumber++) {
            let buttonId = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumber)
            removeElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);

            if (valueToString(maxClicksNumberSetByUser) === valueToString(clickNumber)) {
                removeElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonChosenNumber);
                setElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);
            }
        }
    }
}