import {
    createElementButton,
    createElementDivWithTheSameIdAndClassName,
    isElementsExistById,
    removeElementClassNameById,
    setElementClassNameById,
    setElementClassNamedAndText
} from "../../common/function/commonFunctions.js";

import * as variablesButtonGameState from "../../common/variable/control/variablesGameState.js";

export class ViewButtons {

    createAndConfigureButton(gameFiledButtonMainStart, buttonMainStart, containerGameFiledButtonsMainStartTextDisplay) {
        createElementButton(gameFiledButtonMainStart, buttonMainStart);
        setElementClassNamedAndText(buttonMainStart, variablesButtonGameState.buttonStartActive, containerGameFiledButtonsMainStartTextDisplay);
    }

    createContainerButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
        createElementDivWithTheSameIdAndClassName(variablesButtonGameState.containerGameStateMainParts, containerGameFiledButtonsMainStart);
        createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    }

    setConfigurationButtonBeforeClick(elementId) {
        if (isElementsExistById(elementId)) {
            removeElementClassNameById(elementId, variablesButtonGameState.buttonStartDisplayIconPlayAfterClick);
            setElementClassNameById(elementId, variablesButtonGameState.buttonStartDisplayIconPlayBeforeClick);
        }
    }

    setConfigurationButtonAfterClick(elementId) {
        removeElementClassNameById(elementId, variablesButtonGameState.buttonStartDisplayIconPlayBeforeClick);
        setElementClassNameById(elementId, variablesButtonGameState.buttonStartDisplayIconPlayAfterClick);
    }
}