import {
    createElementButton,
    createElementDivWithTheSameIdAndClassName,
    isElementsExistById,
    removeElementClassNameById,
    setElementClassNameById,
    setElementClassNamedAndText
} from "../../common/function/commonFunctions.js";

import * as variablesButton from "../../common/variable/control/variablesButton.js";

export class ViewButtons {

    createAndConfigureButton(gameFiledButtonMainStart, buttonMainStart, containerGameFiledButtonsMainStartTextDisplay) {
        createElementButton(gameFiledButtonMainStart, buttonMainStart);
        setElementClassNamedAndText(buttonMainStart, variablesButton.buttonStartActive, containerGameFiledButtonsMainStartTextDisplay);
    }

    createContainerButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
        createElementDivWithTheSameIdAndClassName(variablesButton.containerButtonStartAndStopMainParts, containerGameFiledButtonsMainStart);
        createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    }

    setConfigurationButtonBeforeClick(elementId) {
        if (isElementsExistById(elementId)) {
            removeElementClassNameById(elementId, variablesButton.buttonStartDisplayIconAfterClick);
            setElementClassNameById(elementId, variablesButton.buttonStartDisplayIconBeforeClick);
        }
    }

    setConfigurationButtonAfterClick(elementId) {
        removeElementClassNameById(elementId, variablesButton.buttonStartDisplayIconBeforeClick);
        setElementClassNameById(elementId, variablesButton.buttonStartDisplayIconAfterClick);
    }
}