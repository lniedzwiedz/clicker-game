import {
    createElementDiv,
    createElementButton,
    getElementById, createElementButtonAndSetFunctionOnclick, setElementClassNameById, setElementClassNamedAndText,
    createElementDivWithTheSameIdAndClassName, isElementsExistById
} from "../common/function/commonFunctions.js";

import * as variablesGameButtons from "../common/variable/clickerGame/variablesGameButtons.js";

export class ViewGameButton {

    createGameFieldPButtonMain() {
        // start and stop
        createElementDiv(variablesGameButtons.containerGameFiledButtonMain, variablesGameButtons.containerGameFiledButtonsMainParts);
        this.createGameFieldPButtonMainStart();
        // createGameFieldPButtonMainStop();
    }

    createGameFieldPButtonPlay() {
        createElementButton(variablesGameButtons.containerGameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
        setElementClassNameById(variablesGameButtons.gameFiledButtonPlay, variablesGameButtons.gameFiledButtonPlay);
        // setFunctionOnclick(gameFiledButtonPlay, functionNameOnclickPlayGameColor);
    }

    createAndConfigureGameButton(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart, containerGameFiledButtonsMainStartTextDisplay) {
        createElementButtonAndSetFunctionOnclick(gameFiledButtonMainStart, buttonMainStart, functionNameOnclickPlayGameColorStart);
        setElementClassNamedAndText(buttonMainStart, variablesGameButtons.gameFiledButtonMain, containerGameFiledButtonsMainStartTextDisplay);
    }

    createContainerGameFieldButtonMain(containerGameFiledButtonsMainStart, gameFiledButtonMainStart) {
        createElementDivWithTheSameIdAndClassName(variablesGameButtons.containerGameFiledButtonsMainParts, containerGameFiledButtonsMainStart);
        createElementDivWithTheSameIdAndClassName(containerGameFiledButtonsMainStart, gameFiledButtonMainStart);
    }

    createGameFieldPButtonMainStart() {
        this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStart, variablesGameButtons.gameFiledButtonMainStart);
        this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStart, variablesGameButtons.buttonMainStart, variablesGameButtons.functionNameOnclickPlayGameColorStart, variablesGameButtons.containerGameFiledButtonsMainStartTextDisplay)
    }

    createGameFieldPButtonMainStop() {
        let result = isElementsExistById(variablesGameButtons.containerGameFiledButtonsMainStop);
        if (!result) {
            this.createContainerGameFieldButtonMain(variablesGameButtons.containerGameFiledButtonsMainStop, variablesGameButtons.gameFiledButtonMainStop);
            this.createAndConfigureGameButton(variablesGameButtons.gameFiledButtonMainStop, variablesGameButtons.buttonMainStop, variablesGameButtons.functionNameOnclickPlayGameColorStop, variablesGameButtons.containerGameFiledButtonsMainStopTextDisplay)
        }
    }
}