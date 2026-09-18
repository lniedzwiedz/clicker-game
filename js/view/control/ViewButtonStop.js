import {ViewButtons} from "./ViewButtons.js";

import {
    isElementsExistById,
    removeElementClassNameById,
    setElementClassNameById
} from "../../common/function/commonFunctions.js";

import * as variablesButton from "../../common/variable/control/variablesGameState.js";


export class ViewButtonStop extends ViewButtons {

    createContainerButtonStopMain() {
        if (!isElementsExistById(variablesButton.containerButtonStopMain)) {
            this.createContainerButtonMain(variablesButton.containerButtonStopMain, variablesButton.buttonStopDiv);
            this.createAndConfigureButton(variablesButton.buttonStopDiv, variablesButton.buttonStop, variablesButton.buttonStopDisplayIconStop);
        }
    }

    setIconColorBeforeClick() {
        if (isElementsExistById(variablesButton.buttonStopDisplayText))
            this.setConfigurationButtonBeforeClick(variablesButton.buttonStopDisplayText);
    }

    setIconColorAfterClick() {
        this.setConfigurationButtonAfterClick(variablesButton.buttonStopDisplayText);
    }

    setConfigurationGameOver() {
        this.setConfigurationButtonBeforeClick(variablesButton.buttonStartDisplayText);
        setElementClassNameById(variablesButton.buttonStopDiv, variablesButton.buttonStartInactive);
    }

    removeConfigurationButtonStop() {
        if (isElementsExistById(variablesButton.buttonStopDiv))
            removeElementClassNameById(variablesButton.buttonStopDiv, variablesButton.buttonStartInactive);
    }
}